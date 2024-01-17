import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest, response: NextResponse) {
  const { url: originalUrl } = await request.json()
  const shortUrl = Math.random().toString(36).substring(2, 6)

  return NextResponse.json({ originalUrl, shortUrl }, { status: 200 })
}
