import type { Metadata } from 'next'
import './globals.css'
import { SkipToMain } from '@/components/SkipToMain'

export const metadata: Metadata = {
  title: 'ByteLab Infotech - Virtual Internship Platform',
  description: 'Automated Virtual Internship Platform',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome', url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SkipToMain />
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  )
}

