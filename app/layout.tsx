import type { Metadata } from 'next'
import './globals.css'
import { SessionProvider } from './components/SessionProvider'
import { ThemeController } from './components/ThemeController'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: 'docrud',
  description: 'Premium document operations software for secure client and team workflows',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-950 antialiased">
        <SessionProvider>
          <ThemeController />
          {children}
        </SessionProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
