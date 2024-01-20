import { connection } from "@/utils/database"
import { NextResponse } from "next/server"

export async function GET() {
  const response = await connection.query("SELECT NOW ()")
  return NextResponse.json({
    message: "pong",
    DB_time_connection: response.rows[0].now,
  })
}
