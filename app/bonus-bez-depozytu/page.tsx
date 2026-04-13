import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vulkanspiele Bonus Bez Depozytu PL No Deposit Code Casino',
  description: 'Vulkanspiele bonus bez depozytu PL. Vulkan Spiele no deposit bonus code i darmowe spiny bez depozytu. Odbierz w kasynie vulkanspiele no deposit promo code teraz.',
  openGraph: {
    title: 'Vulkanspiele Bonus Bez Depozytu PL No Deposit Code Casino',
    description: 'Vulkanspiele bonus bez depozytu PL. Vulkan Spiele no deposit bonus code i darmowe spiny bez depozytu.',
    url: 'https://vulkanspiele-polska.pl/bonus-bez-depozytu/',
  },
}

export default function BonusBezDepozytuPage() {
  return (
    <div className="min-h-screen" style={{ background: '#0a0000' }}>
      <div className="container mx-auto px-4 py-12 max-w-2xl">

        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center gap-1 text-xs font-bold text-white px-3 py-1 rounded-sm mb-4"
            style={{ background: '#CC0000' }}
          >
            ⚡ BEZ DEPOZYTU
          </span>
          <h1 className="text-4xl font-black text-white mb-3">
            Vulkan Spiele <span style={{ color: '#FFD700' }}>Bonus Bez Depozytu</span> No Deposit PL Darmowe Spiny
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Vulkan Spiele Bonus Bez Depozytu — No Deposit PL Darmowe Spiny 2026.
            Odbierz darmowe spiny i bonusy bez konieczności wpłaty.
          </p>
        </div>

        {/* Main Offer */}
        <div
          className="rounded-2xl p-8 mb-6 text-center"
          style={{ background: 'linear-gradient(135deg, #1a0005 0%, #0d0010 100%)', border: '1px solid #3a0020' }}
        >
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Oferta dla nowych graczy</p>
          <p className="text-6xl font-black mb-2" style={{ color: '#FFD700' }}>50 FS</p>
          <p className="text-white font-bold text-xl mb-1">Darmowych Spinów</p>
          <p className="text-gray-500 text-sm mb-6">Bez depozytu — tylko dla nowych graczy PL</p>
          <Link
            href="/go/"
            className="inline-block text-black font-black text-base px-8 py-3 rounded-xl hover:bg-yellow-400 transition"
            style={{ background: '#FFD700' }}
          >
            Odbierz Bonus Bez Depozytu
          </Link>
          <p className="text-gray-600 text-xs mt-3">18+ | Graj odpowiedzialnie | Obowiązuje regulamin</p>
        </div>

        {/* More offers */}
        <div className="space-y-4 mb-10">
          <h2 className="text-lg font-bold text-white">Więcej bonusów Vulkan Spiele bez depozytu</h2>

          {[
            { title: '50 Darmowych Spinów', desc: 'Dla nowych graczy po rejestracji — bez wpłaty', badge: 'REJESTRACJA' },
            { title: 'Bonus Powitalny', desc: '100% do 500 EUR + 100 FS przy pierwszym depozycie', badge: 'POWITALNY' },
            { title: 'Cashback 10%', desc: 'Tygodniowy zwrot środków bez limitu', badge: 'CASHBACK' },
          ].map((item, i) => (
            <div
              key={i}
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
                <p className="text-white font-bold">{item.title}</p>
                <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
              </div>
              <Link
                href="/go/"
                className="text-black font-bold text-xs px-4 py-2 rounded-lg hover:bg-yellow-400 transition whitespace-nowrap"
                style={{ background: '#FFD700' }}
              >
                Odbierz
              </Link>
            </div>
          ))}
        </div>

        {/* SEO Block */}
        <div className="h-px mb-8" style={{ background: '#1e0000' }} />
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-white">
            Vulkan Spiele Bonus Bez Depozytu — jak odebrać no deposit?
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Bonus bez depozytu Vulkan Spiele to promocja przeznaczona dla nowych graczy, którzy chcą
            wypróbować kasyno bez ryzyka. Po rejestracji konta automatycznie otrzymujesz darmowe spiny
            lub środki bonusowe — bez konieczności wpłacania własnych pieniędzy.
          </p>
          <h3 className="text-base font-bold text-white/80">
            Warunki bonusu bez depozytu Vulkan Spiele PL
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Aby skorzystać z bonusu bez depozytu, należy zarejestrować konto, zweryfikować adres e-mail
            i spełnić wymagania dotyczące obrotu (wagering). Szczegółowe warunki znajdziesz w regulaminie promocji.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Masz kod promocyjny?{' '}
            <Link href="/kod-promocyjny/" className="underline" style={{ color: '#FFD700' }}>
              Sprawdź aktualne kody promocyjne Vulkan Spiele
            </Link>.
          </p>
        </section>

        {/* Back link */}
        <div className="mt-10">
          <Link href="/bonuses/" className="text-gray-500 text-sm hover:text-white transition">
            ← Wróć do Bonusów
          </Link>
        </div>
      </div>
    </div>
  )
}
