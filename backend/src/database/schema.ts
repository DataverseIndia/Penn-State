import { boolean, integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
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

export const insertAdminSchema = createInsertSchema(admins);
