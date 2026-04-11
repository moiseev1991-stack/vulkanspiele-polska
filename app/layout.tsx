import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/layout/CookieBanner'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'VulkanSpiele Casino PL — Najlepsze Gry Online',
  description: 'Zagraj w najlepsze automaty online, kasyno na żywo i obstaw zakłady sportowe w VulkanSpiele.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={inter.variable}>
      <body className="bg-bgDark text-white antialiased font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
