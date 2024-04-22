import type { Metadata } from "next"
import { nunito } from "utils/fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Spotify App",
  description: "Spotify App",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito} font-nunito`}>{children}</body>
    </html>
  )
}
