import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
}

export default function GoPage() {
  return (
    // TODO: Вставить скрипт переадресации от Андрея внутри этого компонента
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: '#0a0000' }}
    >
      <div className="text-center">
        <div
          className="inline-block w-12 h-12 rounded-full mb-6 animate-spin border-t-2 border-r-2"
          style={{ borderColor: '#FFD700 transparent transparent transparent' }}
        />
        <p className="text-white font-bold text-lg mb-2">Vulkan Spiele Casino</p>
        <p className="text-gray-500 text-sm">Przekierowywanie...</p>
      </div>
    </div>
  )
}
