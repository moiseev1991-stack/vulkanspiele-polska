import type { Metadata } from 'next'
import HallOfFameClient from './HallOfFameClient'

export const metadata: Metadata = {
  title: 'Galeria Sław — Najlepsi Gracze — VulkanSpiele',
  description: 'Sprawdź ranking najlepszych graczy VulkanSpiele. Galeria Sław — zwycięzcy miesiąca.',
}

export default function HallOfFamePage() {
  return <HallOfFameClient />
}
