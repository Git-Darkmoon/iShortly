import { Pool } from "pg"

let connection: any

if (!connection) {
  connection = new Pool({
    user: process.env.NEXT_PUBLIC_DB_USER,
    password: process.env.NEXT_PUBLIC_DB_PASSWORD,
    host: process.env.NEXT_PUBLIC_DB_HOST,
    port: 5432,
    database: process.env.NEXT_PUBLIC_DB_NAME,
  })
}

export { connection }
