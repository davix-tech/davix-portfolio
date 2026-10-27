import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DAVIX — Systems behind businesses that scale',
  description: 'Davix builds software, APIs and intelligent systems for ambitious businesses.',
  generator: 'v0.app',
  metadataBase: new URL('https://prethim.name.ng'),
  openGraph: {
    title: 'DAVIX — Technology builder & founder of PRETHIM',
    description: 'Software, APIs and intelligent systems, engineered with intent.',
    type: 'website',
    images: [{ url: '/portrait-hero.png', width: 896, height: 1200, alt: 'Davix in dramatic black and white light' }],
  },
  twitter: { card: 'summary_large_image', title: 'DAVIX — Systems behind businesses that scale', images: ['/portrait-hero.png'] },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#050505', userScalable: false }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: 'Davix', url: 'https://prethim.name.ng', jobTitle: 'Technology builder and founder', email: 'mailto:davixsir654@gmail.com', sameAs: ['https://prethim.name.ng'] }) }} />{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
