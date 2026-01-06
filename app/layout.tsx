import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const avenirBlack = localFont({
  src: '../assets/avenir-black-font.ttf',
  variable: '--font-avenir-black',
})

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'LightHouse Sierra',
  description: 'A Reno, Nevada Community',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${avenirBlack.variable} antialiased`}
      >
        {children}
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  )
}
