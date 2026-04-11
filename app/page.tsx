import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'VulkanSpiele Casino PL — Najlepsze Gry Online',
  description: 'Zagraj w najlepsze automaty online, kasyno na żywo i obstaw zakłady sportowe w VulkanSpiele.',
  openGraph: {
    title: 'VulkanSpiele Casino PL — Najlepsze Gry Online',
    description: 'Zagraj w najlepsze automaty online, kasyno na żywo i obstaw zakłady sportowe w VulkanSpiele.',
  },
}

export default function HomePage() {
  return <HomeClient />
}
