import { connection } from "@/utils/database"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest, response: NextResponse) {
  const { url } = await request.json()
  const shortUrl = Math.random().toString(36).substring(2, 6)

  // console.log(url)

  try {
    const insertQuery =
      "INSERT INTO link (originalurl,shorturl) VALUES ($1, $2)"

    const values = [url, shortUrl]

    const response = await connection.query(insertQuery, values)

    return NextResponse.json(
      {
        message: "Links saved successfully",
        data: response.rows[0],
      },
      { status: 200 }
    )
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 500,
    })
  }
}
