import type { Metadata } from 'next'
import BonusesClient from './BonusesClient'

export const metadata: Metadata = {
  title: 'Vulkanspiele PL Bonusy Kasynowe Powitalny Cashback Spiny',
  description: 'Vulkanspiele bonus powitalny PL do 500 EUR i 100 FS na automaty. Vulkan Spiele cashback i reload bonus co tydzień. Odbierz bonusy kasynowe vulkanspiele i zagraj.',
  openGraph: {
    title: 'Vulkanspiele PL Bonusy Kasynowe Powitalny Cashback Spiny',
    description: 'Vulkanspiele bonus powitalny PL do 500 EUR i 100 FS na automaty. Vulkan Spiele cashback i reload bonus co tydzień.',
    url: 'https://vulkanspiele-polska.pl/bonuses/',
  },
}

export default function BonusesPage() {
  return <BonusesClient />
}
