import { connection } from "@/utils/database"
import { redirect } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: any) {
  try {
    const singleGetQuery = "SELECT * FROM link WHERE shorturl = $1"
    const singleQueryValue = [params.shortCode]
    const response = await connection.query(singleGetQuery, singleQueryValue)

    if (response.rowCount === 0) {
      return redirect("/")
    }

    return NextResponse.redirect(new URL(response.rows[0].originalurl))

    // return NextResponse.json(response.rows[0].originalurl)
  } catch (error: any) {
    console.error(error)

    return NextResponse.json({
      message: error.message,
    })
  }
}
