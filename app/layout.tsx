import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Saranya Sidharth – Media Kit',
  description:
    'Fashion, Beauty & Lifestyle Content Creator. 5K+ engaged followers, 1.7L monthly profile views. Collaborate with @saranya_sidharth.',
  openGraph: {
    title: 'Saranya Sidharth – Media Kit',
    description: 'Micro-influencer media kit for brand collaborations.',
    url: 'https://saranyasidharth.github.io/media-kit',
    siteName: 'Saranya Sidharth Media Kit',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saranya Sidharth – Media Kit',
    description: 'Fashion, Beauty & Lifestyle Content Creator',
  },
  keywords:
    'influencer, media kit, content creator, fashion, beauty, lifestyle, collaboration',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#FF6B9D" />
      </head>
      <body>{children}</body>
    </html>
  )
}
