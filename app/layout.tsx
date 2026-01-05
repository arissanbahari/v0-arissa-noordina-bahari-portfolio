import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Arissa Noordina Bahari | AI Program Associate & Trainer",
  description: "AI educator and program leader bridging AI, education, and strategy in Malaysia",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable} ${dmSans.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
