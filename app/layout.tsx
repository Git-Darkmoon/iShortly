import type { Metadata } from "next"
import { Onest } from "next/font/google"
import "./globals.css"

const onest = Onest({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "iShortly",
  description: "Amazing website for shorting your URLs.",
  icons: {
    icon: "/scissors_favicon.png",
  },
  generator: "Next.js",
  applicationName: "GMAP",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "TailwindCSS",
    "GMAP",
    "Programming",
    "Competitive Programming",
  ],
  authors: [
    {
      name: "Nicolas Mayorga",
      url: "https://www.linkedin.com/in/nicol%C3%A1s-mayorga-7z0/",
    },
  ],
  category: "education",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-gradient-to-r from-rose-100 to-teal-100">
      <body className={onest.className}>{children}</body>
    </html>
  )
}
