import type { Metadata } from 'next'
import QuestsClient from './QuestsClient'

export const metadata: Metadata = {
  title: 'Questy — VulkanSpiele PL',
  description: 'Wykonaj codzienne misje i zdobywaj nagrody w strefie questów VulkanSpiele.',
}

export default function QuestsPage() {
  return <QuestsClient />
}
