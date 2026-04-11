import type { Metadata } from 'next'
import HallOfFameClient from './HallOfFameClient'

export const metadata: Metadata = {
  title: 'Galeria Sław — Największe Wygrane w VulkanSpiele Casino PL',
  description: 'Zobacz największe wygrane graczy VulkanSpiele na żywo — wygrane do 100 000 RON i 15 000€. Ranking zwycięzców miesiąca i przegląd aktywnych graczy w czasie rzeczywistym.',
  openGraph: {
    title: 'Galeria Sław — Największe Wygrane w VulkanSpiele Casino PL',
    description: 'Największe wygrane na żywo: do 100 000 RON i 15 000€. Ranking zwycięzców i aktywni gracze w czasie rzeczywistym.',
    url: 'https://vulkanspiele-polska.pl/hall-of-fame/',
  },
}

export default function HallOfFamePage() {
  return <HallOfFameClient />
}
