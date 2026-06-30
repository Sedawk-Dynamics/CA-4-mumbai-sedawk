import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'CA 4 Mumbai | Tax & Compliance Services for MSMEs',
  description:
    'CA 4 Mumbai – Serving Atmanirbhar Mumbaikars through accounting, GST, income tax, TDS filing, company formation, and labour law compliance services for businesses with turnover under ₹25 Crore.',
  keywords: [
    'CA Mumbai',
    'GST filing Mumbai',
    'Income tax filing Mumbai',
    'Company registration Mumbai',
    'Accounting services Mumbai',
    'TDS filing',
    'MSME compliance',
  ],
}

export const viewport = {
  themeColor: '#0d2665',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans antialiased bg-[#020b18]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
