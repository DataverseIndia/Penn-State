CREATE TABLE IF NOT EXISTS "admins" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"created_at" timestamp NOT NULL,
	CONSTRAINT "admins_email_unique" UNIQUE("email")
);
