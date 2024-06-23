import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const connectionString = Bun.env.DATABASE_URL!

const client = postgres(connectionString, { prepare: false, ssl: { rejectUnauthorized: false } })
export const db = drizzle(client);
