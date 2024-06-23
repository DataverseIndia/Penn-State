import { Next } from 'hono';
import jwt from 'jsonwebtoken';
import { Admin, AdminContext } from '../types';

export const authentication = async (c: AdminContext, next: Next) => {
    const authHeader = c.req.header('Authorization');
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        try {
            const admin = jwt.verify(token, Bun.env.hiddenKey as string) as Admin;
            c.admin = admin;
            await next();
        } catch (err) {
            return c.text('Forbidden', 403);
        }
    } else {
        return c.text('Unauthorized', 401);
    }
};
