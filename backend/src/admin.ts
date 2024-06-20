import { Hono } from "hono";
import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';
import { db } from "./database/drizzle";
import { admins } from "./database/schema";
import { sendOTP } from "./helpers/send-otp";
import { eq } from "drizzle-orm";
import { sign } from 'hono/jwt';
import { sendMail } from "./helpers/sent-mail";
import { hashedPassword } from "./helpers/hash-password";
import { verifyPassword } from "./helpers/verify-password";

const app = new Hono()
               .post("/register", async (c) => {
                  const { fullName, email, password } = await c.req.json();

                  const existingAdmin = await db.select().from(admins).where(eq(admins.email, email));

                  if (existingAdmin.length > 0) {
                     const admin = existingAdmin[0];
                     const isUserVerified = admin.isVerified;
                     if (!isUserVerified) {
                        const randomOTP = sendOTP();
                        await db.update(admins).set({ fullName: fullName, password: await hashedPassword(password), isVerified: false, otp: randomOTP, createdAt: new Date() }).where(eq(admins.email, email));

                        const emailTemplatePath = path.resolve(__dirname, './templates/register-email.handlebars');
                        const emailTemplateSource = fs.readFileSync(emailTemplatePath, 'utf-8');
                        const emailTemplate = Handlebars.compile(emailTemplateSource);
                        const content = emailTemplate({ randomOTP });

                        await sendMail(email, 'Verify your email', content);
                        const token = await sign(email, process.env.hiddenKey!);

                        return c.json({ success: true, message: 'User updated', token: token }, 200);
                     } else {
                        return c.json({ success: false, message: 'User already exists', token: null }, 403);
                     }
                  } else {
                     const randomOTP = sendOTP();
                     await db.insert(admins).values({
                        email: email,
                        password: await hashedPassword(password),
                        isVerified: false,
                        otp: randomOTP,
                        createdAt: new Date(),
                     });

                     const emailTemplatePath = path.resolve(__dirname, './templates/register-email.handlebars');
                     const emailTemplateSource = fs.readFileSync(emailTemplatePath, 'utf-8');
                     const emailTemplate = Handlebars.compile(emailTemplateSource);
                     const content = emailTemplate({ randomOTP });

                     await sendMail(email, 'Verify your email', content);

                     await db.update(admins).set({ createdAt: new Date() }).where(eq(admins.email, email));
                     const token = await sign(email, process.env.hiddenKey!);

                     return c.json({ success: true, message: 'User created successfully', token: token }, 200);
                  }
               })
               .post('/login', async (c) => {
                  const { email, password } = await c.req.json();
                  const admin = await db.select().from(admins).where(eq(admins.email, email));

                  if (!admin || admin.length === 0 || admin[0].isVerified === false) {
                     return c.json({ exists: false, success: false, message: "User not verified or doesn't exist", token: null });
                  } else {
                     const passwordCheck = await verifyPassword(password, admin[0].password);
                     if (passwordCheck === true) {
                        const token = await sign(email, process.env.hiddenKey!);
                        return c.json({ exists: true, success: true, message: "Logged in successfully", token: token });
                     } else {
                        return c.json({ exists: true, success: false, message: "Incorrect Password", token: null });
                     }
                  }
               });

export default app;
