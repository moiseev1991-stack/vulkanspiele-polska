import type { Metadata } from 'next'
import BonusesClient from './BonusesClient'

export const metadata: Metadata = {
  title: 'Bonusy Kasynowe — VulkanSpiele PL',
  description: 'Odbierz bonusy kasynowe: bonus powitalny 100%, reload, cashback i darmowe spiny.',
}

export default function BonusesPage() {
  return <BonusesClient />
}
