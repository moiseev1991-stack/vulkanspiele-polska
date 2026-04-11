import type { Metadata } from 'next'
import VipClient from './VipClient'

export const metadata: Metadata = {
  title: 'Klub VIP — Ekskluzywne Nagrody — VulkanSpiele',
  description: 'Dołącz do Klubu VIP VulkanSpiele i ciesz się ekskluzywnymi nagrodami, wyższymi limitami i priorytetowym wsparciem.',
}

export default function VipPage() {
  return <VipClient />
}
