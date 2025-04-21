import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NAV',
  description: 'Created with v0',
  generator: 'v0.dev',
  openGraph: {
    images: [
      {
        url: '/profile.jpg', // Use absolute URL or a valid relative path
        width: 1200,
        height: 630,
        alt: 'NAV Preview Image',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
