import type { Metadata } from 'next'
import VipClient from './VipClient'

export const metadata: Metadata = {
  title: 'Klub VIP — Ekskluzywne Nagrody dla Stałych Graczy',
  description: 'Dołącz do Klubu VIP VulkanSpiele i korzystaj z wyższych limitów wypłat, dedykowanego managera, cashbacku do 20% i ekskluzywnych bonusów. 5 poziomów VIP.',
  openGraph: {
    title: 'Klub VIP — Ekskluzywne Nagrody dla Stałych Graczy',
    description: 'Wyższe limity wypłat, dedykowany manager VIP, cashback do 20% i ekskluzywne bonusy. 5 poziomów VIP.',
    url: 'https://vulkanspiele-polska.pl/vip/',
  },
}

export default function VipPage() {
  return <VipClient />
}
