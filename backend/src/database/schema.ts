import { boolean, integer, json, numeric, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from 'drizzle-zod';

export const admins = pgTable('admins', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  isVerified: boolean("is_verified"),
  otp: integer("otp"),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").notNull(),
});

export const publications = pgTable('publications', {
  id: serial('id').primaryKey(),
  year: numeric('year').notNull(),
  publicationNumber: text('publication_number').notNull(),
  topic: text('topic').notNull(),
  title: text('title').notNull(),
  authors: text('authors').notNull(),
  imageUrl: text('image_url'),
})

export const insertAdminSchema = createInsertSchema(admins);
