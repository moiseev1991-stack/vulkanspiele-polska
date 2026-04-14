'use client'

import Link from 'next/link'

// anchor links shown below specific bonus cards
const bonusAnchors: Record<string, { pre: string; text: string; post: string; href: string }> = {
  welcome:   { pre: 'Aktywuj bonus z ', text: 'promo code',               post: '',  href: '/kod-promocyjny/' },
  freespins: { pre: 'Szukasz ',        text: 'Darmowych spinów bez depozytu', post: '?', href: '/bonus-bez-depozytu/' },
}

const bonuses = [
  {
    id: 'welcome',
    title: 'Bonus powitalny',
    value: '100%',
    sub: 'do 500 EUR',
    desc: 'Na pierwszy depozyt',
    image: '/images/bonuses/welcome.png',
    badge: 'NAJPOPULARNIEJSZY',
    badgeColor: '#CC0000',
    cta: 'Odbierz bonus',
  },
  {
    id: 'reload',
    title: 'Bonus Reload',
    value: '50%',
    sub: 'co tydzień',
    desc: 'Na każdy depozyt',
    image: '/images/bonuses/reload.png',
    badge: null,
    cta: 'Aktywuj',
  },
  {
    id: 'cashback',
    title: 'Cashback',
    value: '10%',
    sub: 'co tydzień',
    desc: 'Zwrot przegranych środków',
    image: '/images/bonuses/cashback.png',
    badge: null,
    cta: 'Dowiedz się więcej',
  },
  {
    id: 'freespins',
    title: 'Darmowe spiny',
    value: '100 FS',
    sub: 'co miesiąc',
    desc: 'Na wybrane automaty',
    image: '/images/bonuses/freespins.png',
    badge: 'NOWY',
    badgeColor: '#006633',
    cta: 'Odbierz spiny',
  },
]

const regulamin = [
  'Bonusy dostępne wyłącznie dla zarejestrowanych graczy.',
  'Każdy bonus podlega wymogowi obrotu x30 przed wypłatą.',
  'Bonus powitalny można odebrać tylko raz na konto.',
  'Cashback naliczany jest co poniedziałek za poprzedni tydzień.',
  'Darmowe spiny ważne przez 7 dni od momentu przyznania.',
  'VulkanSpiele zastrzega sobie prawo do zmiany warunków bonusów.',
]

export default function BonusesClient() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div
        className="relative w-full overflow-hidden"
        style={{ minHeight: '320px', background: 'linear-gradient(135deg, #3d0000 0%, #1a0000 50%, #0d0000 100%)' }}
      >
        {/* Full-bleed image on the right with fade mask */}
        <div
          className="absolute right-0 top-0 h-full hidden lg:block"
          style={{
            width: '55%',
            maskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
          }}
        >
          <img
            src="/images/bonuses/hero.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Text */}
        <div className="relative z-10 container mx-auto px-4 flex items-center" style={{ minHeight: '320px' }}>
          <div className="max-w-lg">
            <span
              className="inline-block text-xs font-bold text-white px-3 py-1 rounded-sm mb-4"
              style={{ background: '#CC0000' }}
            >
              🎁 BONUSY
            </span>
            <h1 className="text-4xl font-black text-white mb-3">Bonusy kasynowe</h1>
            <p className="text-white/60 text-sm mb-6 max-w-md">
              Odbierz ekskluzywne bonusy i zwiększ swoje szanse na wygraną. Nowe oferty każdego tygodnia!
            </p>
            <Link
              href="#bonuses"
              className="inline-block text-black font-bold text-sm px-6 py-2.5 rounded-md hover:bg-yellow-400 transition"
              style={{ background: '#FFD700' }}
            >
              Zobacz wszystkie bonusy
            </Link>
          </div>
        </div>
      </div>

      {/* Bonus cards */}
      <div id="bonuses" className="container mx-auto px-4 py-10">
        <h2 className="text-white font-bold text-xl mb-6">Dostępne bonusy</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bonuses.map((bonus) => (
            <div
              key={bonus.id}
              className="rounded-xl overflow-hidden flex flex-col hover:border-brand/40 transition-colors"
              style={{ background: '#1a0000', border: '1px solid #2a0000' }}
            >
              {/* Image area */}
              <div className="relative h-36 overflow-hidden" style={{ background: 'linear-gradient(135deg, #2d0000 0%, #0d0000 100%)' }}>
                {bonus.badge && (
                  <span
                    className="absolute top-2 left-2 z-10 text-white text-[9px] font-black px-1.5 py-0.5 rounded-sm"
                    style={{ background: bonus.badgeColor }}
                  >
                    {bonus.badge}
                  </span>
                )}
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <p className="text-white/50 text-xs mb-0.5">{bonus.desc}</p>
                <p className="text-gold font-black text-2xl leading-none mb-1">{bonus.value}</p>
                <p className="text-white font-bold text-sm mb-1">{bonus.title}</p>
                <p className="text-white/40 text-xs mb-4">{bonus.sub}</p>
                <a
                  href="/go/"
                  className="mt-auto w-full py-2 rounded-lg text-black font-bold text-sm hover:bg-yellow-400 transition-colors text-center block"
                  style={{ background: '#FFD700' }}
                >
                  {bonus.cta}
                </a>
              </div>
              {bonusAnchors[bonus.id] && (
                <div className="px-4 pb-4">
                  <p className="text-xs text-white/50">
                    {bonusAnchors[bonus.id].pre}
                    <Link
                      href={bonusAnchors[bonus.id].href}
                      className="underline hover:text-yellow-300 transition"
                      style={{ color: '#FFD700' }}
                    >
                      {bonusAnchors[bonus.id].text}
                    </Link>
                    {bonusAnchors[bonus.id].post}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Regulamin */}
      <div className="container mx-auto px-4 pb-16">
        <div
          className="rounded-xl p-6"
          style={{ background: '#110000', border: '1px solid #2a0000' }}
        >
          <h3 className="text-white font-bold text-base mb-4">Regulamin bonusów</h3>
          <ol className="list-decimal list-inside space-y-2">
            {regulamin.map((item, i) => (
              <li key={i} className="text-white/50 text-sm leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>
      </div>


    </div>
  )
}
