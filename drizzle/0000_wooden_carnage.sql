CREATE TABLE "contact_messages" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"email" varchar(150) NOT NULL,
	"subject" varchar(200),
	"message" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
