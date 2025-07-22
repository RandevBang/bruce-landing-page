import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bruce Trades - Get Your Trade Quote',
  description: 'Professional trades services in Australia. Get your quote today.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}