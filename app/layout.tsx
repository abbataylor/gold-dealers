import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'NITA Gold Dealers | Premium Gold Trading & Investment',
  description: 'Your trusted partner in premium gold trading. Buy, sell, and store gold with confidence. Competitive rates, secure transactions, and expert advisory services.',
  keywords: ['gold trading', 'gold investment', 'buy gold', 'sell gold', 'gold dealers', 'precious metals'],
  openGraph: {
    title: 'NITA Gold Dealers | Premium Gold Trading & Investment',
    description: 'Your trusted partner in premium gold trading. Buy, sell, and store gold with confidence.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
