import { Hono } from 'hono';
import { db } from './database/drizzle';
import { news } from './database/schema';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';

const app = new Hono()
    .post('/add-news', async c => {
        try {
            const { content, imageUrl } = await c.req.json();
            let imageUrlsArray;
            if (typeof imageUrl === 'string') {
                imageUrlsArray = [imageUrl];
            } else if (Array.isArray(imageUrl)) {
                imageUrlsArray = imageUrl;
            } else {
                return c.json({ success: false, message: 'imageUrl must be a string or an array of strings' }, 400);
            }
            const [data] = await db.insert(news).values({ content: content, imageUrl: imageUrlsArray }).returning();
            if (data) {
                return c.json({ success: true, message: 'News added' }, 200);
            } else {
                return c.json({ success: false, message: 'Faild to add News' }, 403);
            }
        } catch (error) {
            return c.json({ success: false, message: `Internal Server error` }, 500);
        }
    })
    .get('/get-news', async c => {
        try {
            const data = await db.select().from(news);
            if (data) {
                return c.json({ success: true, news: data }, 200);
            } else {
                return c.json({ success: false, news: null }, 403);
            }
        } catch (error) {
            return c.json({ success: false, message: `Internal Server ${error}` }, 500);
        }
    })
    .patch('/update-news/:id', async c => {
        try {
            const { id } = c.req.param();
            const [data] = await db.select().from(news).where(eq(news.id, Number(id)));
            if (data) {
                return c.json({ success: true, message: "News updated" }, 200);
            } else {
                return c.json({ success: false, message: "Failed to update news" }, 403);
            }
        } catch (error) {
            return c.json({ success: false, message: 'Internal Server Error' }, 500);
        }
    })
    .delete('/delete-news/:id', zValidator("param", z.object({id: z.string().optional()})), async c => {
        try {
            const { id } = c.req.param();
            const [data] = await db.delete(news).where(eq(news.id, Number(id))).returning({ id: news.id });
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
