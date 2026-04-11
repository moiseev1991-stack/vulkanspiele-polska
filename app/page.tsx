import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'VulkanSpiele Casino PL — Automaty, Live Casino & Zakłady Sportowe',
  description: 'Zagraj w tysiące automatów, kasyno na żywo z prawdziwymi krupierami i obstaw zakłady sportowe. Bonus powitalny do 2500€ + 350 FS. Graj odpowiedzialnie 18+.',
  openGraph: {
    title: 'VulkanSpiele Casino PL — Automaty, Live Casino & Zakłady Sportowe',
    description: 'Zagraj w tysiące automatów, kasyno na żywo z prawdziwymi krupierami i obstaw zakłady sportowe. Bonus powitalny do 2500€ + 350 FS.',
    url: 'https://vulkanspiele-polska.pl/',
  },
}

export default function HomePage() {
  return <HomeClient />
}
