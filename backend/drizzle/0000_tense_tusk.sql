CREATE TABLE IF NOT EXISTS "admins" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"is_verified" boolean,
	"otp" integer,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"created_at" timestamp NOT NULL,
	CONSTRAINT "admins_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "publications" (
	"id" serial PRIMARY KEY NOT NULL,
	"year" numeric NOT NULL,
	"publication_number" text NOT NULL,
	"topic" text NOT NULL,
	"title" text NOT NULL,
	"authors" text NOT NULL,
	"imageUrl" text
);
