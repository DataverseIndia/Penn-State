import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { HTTPException } from 'hono/http-exception';
import { handle } from 'hono/aws-lambda';
import admins from './admin';
import publication from './publication';
import member from './member';
import { prettyJSON } from 'hono/pretty-json';
import { logger } from 'hono/logger';

const app = new Hono();

app.use(prettyJSON());
app.use(logger());
app.use(cors());

app.onError((err, c) => {
    if (err instanceof HTTPException) {
        return err.getResponse();
    } else {
        return c.json({ error: 'Internal server error' });
    }
});

const routes = app
    .route('/admins', admins)
    .route('/publications', publication)
    .route('/member', member);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;

app.get('/helllo-world', c => {
    return c.text('Hello world!');
});

export default app;
