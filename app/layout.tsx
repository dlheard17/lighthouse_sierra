import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const avenirBlack = localFont({
  src: '../assets/avenir-black-font.ttf',
  variable: '--font-avenir-black',
})

const avenirMedium = localFont({
  src: '../assets/avenir-medium-font.ttf',
  variable: '--font-avenir-medium',
})

const avenirLight = localFont({
  src: '../assets/avenir-light-font.ttf',
  variable: '--font-avenir-light',
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
        className={`${avenirBlack.variable} ${avenirMedium.variable} ${avenirLight.variable} antialiased`}
      >
        {children}
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  )
}
