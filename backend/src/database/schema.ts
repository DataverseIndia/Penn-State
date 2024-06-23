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
  publicationNumber: text('publication_number'),
  topic: text('topic').notNull(),
  title: text('title').notNull(),
  authors: text('authors').notNull(),
  imageUrl: text('image_url'),
})

export const members = pgTable('members', {
  id: serial('id').primaryKey(),
  designation: text('designation').notNull(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  description: text('description').notNull(),
  imageUrl: text('imageUrl').notNull()
})

export const news = pgTable('news', {
  id: serial('id').primaryKey(),
  content: json('content').notNull(),
  imageUrl: text('imageUrl').array()
})

export const gallery = pgTable('gallery', {
  id: serial('id').primaryKey(),
  imageUrl: text('imageUrl').array(),
  caption: text('caption')
})

export const insertAdminSchema = createInsertSchema(admins);
