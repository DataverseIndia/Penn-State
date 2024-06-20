import { Context } from 'hono';

 export interface Admin {
   id: number;
   fullName: string;
   email: string;
   password: string;
   createdAt: Date;
 }

 export interface AdminContext extends Context {
    admin?: Admin;
 }
