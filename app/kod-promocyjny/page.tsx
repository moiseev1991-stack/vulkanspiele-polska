import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vulkanspiele Polska Kod Promocyjny 2026 Casino Bonus Code',
  description: 'Vulkanspiele kod promocyjny PL 2025. Vulkan Spiele bonus code i kody promocyjne bez depozytu. Sprawdź wszystkie kody vulkanspiele casino i promo code na bonusy.',
  openGraph: {
    title: 'Vulkanspiele Polska Kod Promocyjny 2026 Casino Bonus Code',
    description: 'Vulkanspiele kod promocyjny PL 2025. Vulkan Spiele bonus code i kody promocyjne bez depozytu.',
    url: 'https://vulkanspiele-polska.pl/kod-promocyjny/',
  },
}

export default function KodPromocyjnyPage() {
  return (
    <div className="min-h-screen" style={{ background: '#0a0000' }}>
      <div className="container mx-auto px-4 py-12 max-w-2xl">

        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center gap-1 text-xs font-bold text-white px-3 py-1 rounded-sm mb-4"
            style={{ background: '#CC0000' }}
          >
            🎁 KOD PROMOCYJNY
          </span>
          <h1 className="text-4xl font-black text-white mb-3">
            Vulkan Spiele <span style={{ color: '#FFD700' }}>Kod Promocyjny</span> PL Casino Aktualne Kody Bonusowe
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Vulkan Spiele Kod Promocyjny PL Casino — Aktualne Kody Bonusowe 2026.
            Wprowadź swój kod i odblokuj ekskluzywne bonusy kasynowe.
          </p>
        </div>

        {/* Promo Code Form */}
        <div
          className="rounded-2xl p-8 mb-8"
          style={{ background: '#1a0005', border: '1px solid #3a0010' }}
        >
          <h2 className="text-xl font-bold text-white mb-2">Wprowadź kod promocyjny</h2>
          <p className="text-gray-500 text-sm mb-6">
            Masz kod promocyjny Vulkan Spiele? Wpisz go poniżej i aktywuj swój bonus.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Wpisz kod promocyjny..."
              className="flex-1 rounded-lg px-4 py-3 text-white text-sm outline-none"
              style={{
                background: '#0d0000',
                border: '1px solid #4a0015',
                color: '#fff',
              }}
              readOnly
            />
            <Link
              href="/go/"
              className="text-black font-bold text-sm px-6 py-3 rounded-lg text-center hover:bg-yellow-400 transition whitespace-nowrap"
              style={{ background: '#FFD700' }}
            >
              Aktywuj kod
            </Link>
          </div>
        </div>

        {/* Active Promo Codes */}
        <div className="space-y-4 mb-10">
          <h2 className="text-lg font-bold text-white">Aktywne kody promocyjne Vulkan Spiele 2026</h2>

          {[
            { code: 'VULKAN500', desc: 'Bonus powitalny 100% do 500 EUR + 100 FS', badge: 'POWITALNY' },
            { code: 'FREESPINS', desc: '50 darmowych spinów bez depozytu dla nowych graczy', badge: 'BEZ DEPOZYTU' },
            { code: 'RELOAD50', desc: '50% reload bonus do 200 EUR w każdy piątek', badge: 'RELOAD' },
          ].map((item) => (
            <div
              key={item.code}
              className="rounded-xl p-5 flex items-center justify-between gap-4"
              style={{ background: '#140002', border: '1px solid #2a0008' }}
            >
              <div>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded mb-2 inline-block"
                  style={{ background: '#3a0000', color: '#FFD700' }}
                >
                  {item.badge}
                </span>
                <p className="text-white font-black text-lg tracking-widest">{item.code}</p>
                <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
              </div>
              <Link
                href="/go/"
                className="text-black font-bold text-xs px-4 py-2 rounded-lg hover:bg-yellow-400 transition whitespace-nowrap"
                style={{ background: '#FFD700' }}
              >
                Użyj kodu
              </Link>
            </div>
          ))}
        </div>

        {/* SEO Block */}
        <div className="h-px mb-8" style={{ background: '#1e0000' }} />
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-white">
            Vulkan Spiele Kod Promocyjny PL — jak działa promo code?
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Kod promocyjny Vulkan Spiele to specjalny ciąg znaków, który po wprowadzeniu podczas rejestracji
            lub w panelu konta aktywuje dodatkowe bonusy. Mogą to być darmowe spiny, dodatkowe środki na konto
            lub cashback. Sprawdź aktualne kody vulkanspiele casino i skorzystaj z najlepszych ofert.
          </p>
          <h3 className="text-base font-bold text-white/80">
            Gdzie wpisać kod promocyjny Vulkan Spiele?
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Kod promocyjny można wpisać podczas rejestracji w polu &quot;Kod promocyjny&quot; lub po zalogowaniu
            w sekcji kasy/bonusów. Upewnij się, że kod jest aktywny i spełniasz wymagania regulaminu promocji.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Szukasz bonusu bez depozytu?{' '}
            <Link href="/bonus-bez-depozytu/" className="underline" style={{ color: '#FFD700' }}>
              Sprawdź oferty bez depozytu Vulkan Spiele
            </Link>.
          </p>
        </section>

        {/* Back link */}
        <div className="mt-10">
          <Link href="/promotions/" className="text-gray-500 text-sm hover:text-white transition">
            ← Wróć do Promocji
          </Link>
        </div>
      </div>
    </div>
  )
}
