import type { Metadata } from 'next'
import BonusesClient from './BonusesClient'

export const metadata: Metadata = {
  title: 'Bonusy Kasynowe 2026 — Bonus do 500€, Cashback i Darmowe Spiny',
  description: 'Odbierz bonus powitalny 100% do 500€, tygodniowy reload 50%, cashback 10% i 100 darmowych spinów miesięcznie. Sprawdź wszystkie aktualne bonusy VulkanSpiele.',
  openGraph: {
    title: 'Bonusy Kasynowe 2026 — Bonus do 500€, Cashback i Darmowe Spiny',
    description: 'Odbierz bonus powitalny 100% do 500€, tygodniowy reload 50%, cashback 10% i 100 darmowych spinów miesięcznie.',
    url: 'https://vulkanspiele-polska.pl/bonuses/',
  },
}

export default function BonusesPage() {
  return <BonusesClient />
}
