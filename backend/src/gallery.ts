import { Hono } from 'hono';
import { db } from './database/drizzle';
import { gallery } from './database/schema';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';

const app = new Hono()
    .post('/add-gallery', async c => {
        try {
            const { caption, imageUrl } = await c.req.json();
            let imageUrlsArray;
            if (typeof imageUrl === 'string') {
                imageUrlsArray = [imageUrl];
            } else if (Array.isArray(imageUrl)) {
                imageUrlsArray = imageUrl;
            } else {
                return c.json({ success: false, message: 'imageUrl must be a string or an array of strings' }, 400);
            }
            const [data] = await db.insert(gallery).values({ caption: caption, imageUrl: imageUrlsArray }).returning();
            if (data) {
                return c.json({ success: true, message: 'News added' }, 200);
            } else {
                return c.json({ success: false, message: 'Faild to add News' }, 403);
            }
        } catch (error) {
            return c.json({ success: false, message: `Internal Server error` }, 500);
        }
    })
    .get('/get-gallery', async c => {
        try {
            const data = await db.select().from(gallery);
            if (data) {
                return c.json({ success: true, news: data }, 200);
            } else {
                return c.json({ success: false, news: null }, 403);
            }
        } catch (error) {
            return c.json({ success: false, message: `Internal Server ${error}` }, 500);
        }
    })
    .patch('/update-gallery/:id', async c => {
        try {
            const { id } = c.req.param();
            const [data] = await db.select().from(gallery).where(eq(gallery.id, Number(id)));
            if (data) {
                return c.json({ success: true, message: "News updated" }, 200);
            } else {
                return c.json({ success: false, message: "Failed to update news" }, 403);
            }
        } catch (error) {
            return c.json({ success: false, message: 'Internal Server Error' }, 500);
        }
    })
    .delete('/delete-gallery/:id', zValidator("param", z.object({id: z.string().optional()})), async c => {
        try {
            const { id } = c.req.param();
            const [data] = await db.delete(gallery).where(eq(gallery.id, Number(id))).returning({ id: gallery.id });
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
