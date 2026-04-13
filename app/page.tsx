import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'Vulkanspiele Polska Oficjalne Kasyno Online Vulkan Spiele PL',
  description: 'Vulkanspiele Polska to oficjalne kasyno casino online. Vulkan Spiele PL opinie i recenzje od graczy. Sprawdź oferty kasyno vulkanspiele i zagraj na oficjalnym serwisie.',
  openGraph: {
    title: 'Vulkanspiele Polska Oficjalne Kasyno Online Vulkan Spiele PL',
    description: 'Vulkanspiele Polska to oficjalne kasyno casino online. Vulkan Spiele PL opinie i recenzje od graczy.',
    url: 'https://vulkanspiele-polska.pl/',
  },
}

export default function HomePage() {
  return <HomeClient />
}
