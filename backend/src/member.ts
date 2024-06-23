import { Hono } from 'hono';
import { db } from './database/drizzle';
import { members } from './database/schema';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';

const app = new Hono()
    .post('/add-members', async c => {
        try {
            const { designation, name, email, imageUrl, description } = await c.req.json();
            const [member] = await db.insert(members).values({
                designation: designation,
                name: name,
                email: email,
                description: description,
                imageUrl: imageUrl
            }).returning();
            if (member) {
                return c.json({ success: true, message: 'Member added' }, 200);
            } else {
                return c.json({ success: false, message: 'Faild to add member' }, 403);
            }
        } catch (error) {
            return c.json({ success: false, message: 'Internal Server Error' }, 500);
        }
    })
    .get('/get-members', async c => {
        try {
            const addedMembers = await db.select().from(members);
            if (addedMembers) {
                return c.json({ success: true, members: addedMembers }, 200);
            } else {
                return c.json({ success: false, members: null }, 403);
            }
        } catch (error) {
            return c.json({ success: false, message: 'Internal Server Error' }, 500);
        }
    })
    .patch('/update-members/:id', async c => {
        try {
            const { id } = c.req.param();
            const [existingMember] = await db.select().from(members).where(eq(members.id, Number(id)));
            if (existingMember) {
                return c.json({ success: true, message: "Member updated" }, 200);
            } else {
                return c.json({ success: false, message: "Failed to update member" }, 403);
            }
        } catch (error) {
            return c.json({ success: false, message: 'Internal Server Error' }, 500);
        }
    })
    .delete('/delete-members/:id', zValidator("param", z.object({id: z.string().optional()})), async c => {
        try {
            const { id } = c.req.param();
            const [data] = await db.delete(members).where(eq(members.id, Number(id))).returning({ id: members.id });
            if (data) {
                return c.json({ success: true, message: 'Member deleted' }, 200);
            } else {
                return c.json({ success: false, message: 'Could not delete member' }, 403);
            }
        } catch (error) {
            return c.json({ success: false, message: 'Internal Server Error' }, 500);
        }
    });
    ;
export default app;
