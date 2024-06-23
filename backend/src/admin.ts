import { Hono } from 'hono';
import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';
import { db } from './database/drizzle';
import { admins } from './database/schema';
import { sendOTP } from './helpers/send-otp';
import { eq } from 'drizzle-orm';
import { sign } from 'hono/jwt';
import { sendMail } from './helpers/sent-mail';

const app = new Hono()
    .post('/register', async c => {
        const { name, email, password } = await c.req.json();
        const [ admin ] = await db.select().from(admins).where(eq(admins.email, email));
        if (admin) {
            const isUserVerified = admin.isVerified;
            if (!isUserVerified) {
                const randomOTP = sendOTP();
                const hashedPassword = await Bun.password.hash(password, {
                    algorithm: "bcrypt",
                    cost: 10,
                });
                await db
                    .update(admins)
                    .set({
                        fullName: name,
                        password: hashedPassword,
                        isVerified: false,
                        otp: randomOTP,
                        createdAt: new Date(),
                    })
                    .where(eq(admins.email, email));

                const emailTemplatePath = path.resolve(
                    __dirname,
                    './templates/register-email.handlebars',
                );
                const emailTemplateSource = fs.readFileSync(emailTemplatePath, 'utf-8');
                const emailTemplate = Handlebars.compile(emailTemplateSource);
                const content = emailTemplate({ randomOTP });

                await sendMail(email, 'Authenticate yourself for Dr. Das Research Lab', content);
                const token = await sign(email, Bun.env.hiddenKey!);
                console.log('hey');
                return c.json({ success: true, message: 'User updated', token: token }, 200);
            } else {
                return c.json({ success: false, message: 'User already exists', token: null }, 403);
            }
        } else {
            const randomOTP = sendOTP();
            const hashedPassword = await Bun.password.hash(password, {
                algorithm: "bcrypt",
                cost: 10,
            });
            await db.insert(admins).values({
                fullName: name,
                email: email,
                password: hashedPassword,
                isVerified: false,
                otp: randomOTP,
                createdAt: new Date(),
            });

            const emailTemplatePath = path.resolve(
                __dirname,
                './templates/register-email.handlebars',
            );
            const emailTemplateSource = fs.readFileSync(emailTemplatePath, 'utf-8');
            const emailTemplate = Handlebars.compile(emailTemplateSource);
            const content = emailTemplate({ randomOTP });

            await sendMail(email, 'Authenticate yourself for Dr. Das Research Lab', content);

            await db.update(admins).set({ createdAt: new Date() }).where(eq(admins.email, email));
            const token = await sign(email, Bun.env.hiddenKey);
            console.log('hey');
            return c.json({ success: true, message: 'User created successfully', token: token }, 200);
        }
    })
    .post('/verify-registration', async c => {
        const { email, oneTimePass } = await c.req.json();
        const otp = Number(oneTimePass);
        console.log(email);
        const existingAdmin = await db.select().from(admins).where(eq(admins.email, email));

        if (existingAdmin && existingAdmin[0].otp === otp) {
            await db
                .update(admins)
                .set({ isVerified: true, otp: null })
                .where(eq(admins.email, email));
            return c.json({ success: true, message: 'You are verified' }, 200);
        } else {
            return c.json({ success: false, message: 'Try again later' }, 403);
        }
    })
    .post('/login', async c => {
        const { email, password } = await c.req.json();
        const [admin] = await db.select().from(admins).where(eq(admins.email, email));

        if (admin.isVerified===false) {
            return c.json({ success: false, message: "User not verified or doesn't exist", token: null }, 403);
        } else {
            const passwordCheck = await Bun.password.verify(password, admin.password)
            if (passwordCheck === true) {
                const token = await sign(email, Bun.env.hiddenKey!);
                return c.json({ success: true, message: 'Logged in successfully', token: token }, 200);
            } else {
                return c.json({ success: false, message: 'Incorrect Password', token: null }, 403);
            }
        }
    });

export default app;
