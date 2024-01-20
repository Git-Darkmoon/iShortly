import { connection } from "@/utils/database"
import { NextResponse } from "next/server"

export async function GET({ params }: any) {
  try {
    const singleGetQuery = "SELECT * FROM link WHERE shorturl = $1"
    const singleQueryValue = params.shortCode
    const response = await connection.query(singleGetQuery, singleQueryValue)

    console.log(response)
  } catch (error) {
    console.error(error)

    return NextResponse.json({
      message: `Error fetching link with code: ${params.shortCode}`,
    })
  }
}
