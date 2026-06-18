import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://uhfej.hu'),
  title: {
    default: 'Ultrahang fej javítás – Akár 80% megtakarítás | uhfej.hu',
    template: '%s | uhfej.hu'
  },
  description: 'Professzionális ultrahang fej javítás és bevizsgálás minden gyártóhoz. GE, Philips, Siemens, Mindray. 5-10 nap átfutás, garancia. Kérjen ingyenes árajánlatot!',
  keywords: [
    'ultrahang fej javítás', 'ultrahangfej javítás', 'ultrahang szonda javítás',
    'ultrahang transzducer javítás', 'ultrahang fej bevizsgálás', 'ultrahang fej szerviz',
    'kompatibilis ultrahang fej', 'utángyártott ultrahang fej',
    'GE ultrahang fej javítás', 'Philips ultrahang fej javítás',
    'Siemens ultrahang fej javítás', 'Mindray ultrahang fej',
    'ultrahang fej kábel csere', 'ultrahang fej lencse csere'
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    siteName: 'uhfej.hu',
    title: 'Ultrahang fej javítás – Akár 80% megtakarítás | uhfej.hu',
    description: 'Sérült ultrahang fejek, képminőségi hibák és kompatibilis cserefejek szakmai kezelése egészségügyi intézmények számára.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu">
      <body className="min-h-screen flex flex-col bg-white text-text-primary antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
