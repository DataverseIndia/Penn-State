import { Hono } from 'hono';
import { db } from './database/drizzle';
import { publications } from './database/schema';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { zValidator } from "@hono/zod-validator"

const app = new Hono()
    .post('/add-publications', async c => {
        try {
            const { year, title, topic, authors, publicationNumber, imageUrl } = await c.req.json();
            console.log(publicationNumber)
            const publication = await db.insert(publications).values({
                year: year,
                publicationNumber: publicationNumber || undefined,
                title: title,
                topic: topic,
                authors: authors,
                imageUrl: imageUrl,
            });
            if (publication) {
                return c.json({ success: true, message: 'Publication completed' }, 200);
            } else {
                return c.json({ success: false, message: 'Publication completed' }, 403);
            }
        } catch (error) {
            return c.json({ success: false, message: 'Internal Server Error' }, 500);
        }
    })
    .get('/get-publications', async c => {
        try {
            const publishedPublications = await db.select().from(publications);
            if (publishedPublications) {
                return c.json({ success: true, publications: publishedPublications }, 200);
            } else {
                return c.json({ success: false, publications: null }, 403);
            }
        } catch (error) {
            return c.json({ success: false, message: 'Internal Server Error' }, 500);
        }
    })
    .patch('/update-publications/:id', async c => {
        try {
            const { id } = c.req.param();
            const [existingPublication] = await db
                .select()
                .from(publications)
                .where(eq(publications.id, Number(id)));
            if (existingPublication) {
                return c.json({ success: true, publications: existingPublication }, 200);
            } else {
                return c.json({ success: false, publications: null }, 403);
            }
        } catch (error) {
            return c.json({ success: false, message: 'Internal Server Error' }, 500);
        }
    })
    .delete('/delete-publications/:id', zValidator("param", z.object({id: z.string().optional()})), async c => {
        try {
            const { id } = c.req.param();
            const [data] = await db.delete(publications).where(eq(publications.id, Number(id)));
            if (data) {
                return c.json({ success: true, message: 'Publication deleted' }, 200);
            } else {
                return c.json({ success: false, message: 'Could not delete publication' }, 404);
            }
        } catch (error) {
            return c.json({ success: false, message: 'Internal Server Error' }, 500);
        }
    });
export default app;
