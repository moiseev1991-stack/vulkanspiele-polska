import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vulkanspiele Aplikacja PL Casino App Pobierz APK Android',
  description: 'Vulkanspiele aplikacja mobilna PL do pobrania. Vulkan Spiele app i APK na Android. Pobierz aplikację casino vulkan spiele i graj mobilnie na smartfonie już teraz.',
  openGraph: {
    title: 'Vulkanspiele Aplikacja PL Casino App Pobierz APK Android',
    description: 'Vulkanspiele aplikacja mobilna PL do pobrania. Vulkan Spiele app i APK na Android.',
    url: 'https://vulkanspiele-polska.pl/aplikacja/',
  },
}

export default function AplikacjaPage() {
  return (
    <div className="min-h-screen" style={{ background: '#0a0000' }}>
      <div className="container mx-auto px-4 py-12 max-w-2xl">

        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center gap-1 text-xs font-bold text-white px-3 py-1 rounded-sm mb-4"
            style={{ background: '#CC0000' }}
          >
            📱 APLIKACJA MOBILNA
          </span>
          <h1 className="text-4xl font-black text-white mb-3">
            Vulkan Spiele <span style={{ color: '#FFD700' }}>Aplikacja Casino PL</span> Pobierz App i Graj na Urządzeniu
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Pobierz aplikację Vulkan Spiele PL na Android i iOS.
            Graj mobilnie na smartfonie i tablecie gdzie chcesz i kiedy chcesz.
          </p>
        </div>

        {/* Download buttons */}
        <div
          className="rounded-2xl p-8 mb-8 text-center"
          style={{ background: '#1a0005', border: '1px solid #3a0010' }}
        >
          <h2 className="text-xl font-bold text-white mb-6">Pobierz Vulkan Spiele App</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/go/"
              className="inline-block text-black font-black text-sm px-6 py-3 rounded-xl hover:bg-yellow-400 transition"
              style={{ background: '#FFD700' }}
            >
              📱 Pobierz APK Android
            </Link>
            <Link
              href="/go/"
              className="inline-block text-white font-bold text-sm px-6 py-3 rounded-xl transition"
              style={{ background: '#1e0008', border: '1px solid #4a0020' }}
            >
              🍎 App Store iOS
            </Link>
          </div>
          <p className="text-gray-600 text-xs mt-4">18+ | Graj odpowiedzialnie</p>
        </div>

        {/* Features */}
        <div className="space-y-4 mb-10">
          <h2 className="text-lg font-bold text-white">Funkcje aplikacji Vulkan Spiele</h2>
          {[
            { icon: '🎰', title: 'Tysiące automatów', desc: 'Pełna biblioteka gier dostępna na urządzeniu mobilnym' },
            { icon: '🎲', title: 'Kasyno na żywo', desc: 'Prawdziwi krupierzy w czasie rzeczywistym na smartfonie' },
            { icon: '💰', title: 'Szybkie płatności', desc: 'Depozyty i wypłaty bezpośrednio z aplikacji' },
            { icon: '🎁', title: 'Ekskluzywne bonusy', desc: 'Specjalne oferty tylko dla użytkowników aplikacji' },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-4 flex items-center gap-4"
              style={{ background: '#140002', border: '1px solid #2a0008' }}
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-white font-bold text-sm">{item.title}</p>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SEO */}
        <div className="h-px mb-8" style={{ background: '#1e0000' }} />
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-white">
            Vulkan Spiele Aplikacja Mobilna PL — jak pobrać APK?
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Vulkanspiele aplikacja mobilna PL jest dostępna na urządzenia Android (APK) oraz iOS.
            Pobierz aplikację casino vulkan spiele i ciesz się pełną biblioteką gier na swoim smartfonie.
          </p>
          <h3 className="text-base font-bold text-white/80">
            Jak zainstalować APK Vulkan Spiele na Android?
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Aby zainstalować plik APK Vulkan Spiele, wejdź w ustawienia telefonu, włącz opcję
            &quot;Instalacja z nieznanych źródeł&quot;, pobierz plik APK i uruchom instalację.
            Cały proces zajmuje mniej niż minutę.
          </p>
        </section>

        <div className="mt-10">
          <Link href="/" className="text-gray-500 text-sm hover:text-white transition">
            ← Wróć do strony głównej
          </Link>
        </div>
      </div>
    </div>
  )
}
