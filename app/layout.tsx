import type { Metadata } from 'next'
import { Manrope, Montserrat, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.acefluento.com'),
  title: {
    default: 'Acefluento | Digital Growth Systems',
    template: '%s | Acefluento',
  },
  description:
    'Websites and lead systems for trust-based local brands. Built for assisted living, churches, local service businesses, and digital brands.',
  keywords: [
    'digital marketing',
    'assisted living marketing',
    'church website',
    'local business leads',
    'reputation management',
    'Cleveland marketing agency',
    'conversion optimization',
    'ETS Guide',
    'technology guide for seniors',
  ],
  authors: [{ name: 'Acefluento', url: 'https://www.acefluento.com' }],
  creator: 'Acefluento',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.acefluento.com',
    siteName: 'Acefluento',
    title: 'Acefluento | Digital Growth Systems',
    description:
      'Websites and lead systems for trust-based local brands.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Acefluento — Digital Growth Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acefluento | Digital Growth Systems',
    description:
      'Websites and lead systems for trust-based local brands.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.acefluento.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${montserrat.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
