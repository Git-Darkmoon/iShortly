import type { Metadata } from "next"
import { Onest } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"

const onest = Onest({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: "iShortly | URL shortening made easy.",
  description:
    "Amazing tool for URL shortening, you can beautify a link with just one finger move on your click. What are you waiting to short those awful long links ?",
  icons: {
    icon: "/pretzel_favicon.png",
  },
  generator: "Next.js",
  applicationName: "iShortly",
  referrer: "origin-when-cross-origin",
  keywords: ["iShortly,Next.js", "Shortening URLs", "URL shortening", "URL"],
  authors: [
    {
      name: "Nicolas Mayorga",
      url: "https://www.linkedin.com/in/nicol%C3%A1s-mayorga-7z0/",
    },
  ],
  category: "service",
  openGraph: {
    title: "iShortly | URL shortening made easy.",
    description:
      "Amazing tool for URL shortening, you can beautify a link with just one finger move on your click. What are you waiting to short those awful long links ?",
    url: "https://ishortly.vercel.app/",
    siteName: "iShortly",
    images: [
      {
        url: "https://ishortly.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3D_Foodies.1b3c0f98.webp&w=1920&q=75",
        width: 800,
        height: 400,
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={onest.className}>
        {children}
        <Toaster theme="dark" position="top-right" />
      </body>
    </html>
  )
}
