import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Bruce Trades Insurance - Get covered in less than 2 minutes',
  description: 'Instant trades insurance from just $35 per month. Comprehensive coverage for electricians, plumbers, builders and more. Get your quote today.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}