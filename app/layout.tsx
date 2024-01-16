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
    <html lang="en">
      <div className="fixed top-0 -z-10 h-full w-full bg-white">
        <div className="absolute inset-0 -z-9 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-primary-500/35 opacity-50 blur-[80px]"></div>
      </div>
      <body className={onest.className}>{children}</body>
    </html>
  )
}
