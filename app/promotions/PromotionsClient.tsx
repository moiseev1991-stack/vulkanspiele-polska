'use client'

import { useState } from 'react'
import { LayoutGrid, Dices, Network, Trophy } from 'lucide-react'
import ImageWithFallback from '@/components/ui/ImageWithFallback'

const tabs = [
  { label: 'Wszystko',          icon: <LayoutGrid size={14} /> },
  { label: 'Kasyno',            icon: <Dices size={14} /> },
  { label: 'Promocje sieciowe', icon: <Network size={14} /> },
  { label: 'Sporty',            icon: <Trophy size={14} /> },
]

const casinoPromos = [
  {
    title: 'Misje',
    reward: 'Wykonaj zadania, odbierz nagrodę',
    image: '/images/promotions/mission.png',
    fallbackIcon: '⚡',
    fallbackGradient: 'linear-gradient(135deg, #1a1a00, #0d0d00)',
  },
  {
    title: 'Lootboxy',
    reward: 'Otwórz i zobacz, co jest w środku',
    image: '/images/lootboxes/chest-gold.png',
    fallbackIcon: '📦',
    fallbackGradient: 'linear-gradient(135deg, #2d0000, #0d0000)',
  },
  {
    title: 'Bonus Highroller',
    reward: '200% + 100 FS Crown Coins',
    image: '/images/promotions/highroller.png',
    fallbackIcon: '👑',
    fallbackGradient: 'linear-gradient(135deg, #1a0a00, #0d0000)',
  },
  {
    title: 'Bonus urodzinowy',
    reward: 'Bonus X',
    image: '/images/promotions/birthday.png',
    fallbackIcon: '🎂',
    fallbackGradient: 'linear-gradient(135deg, #0a001a, #050010)',
  },
]

const networkPromos = [
  {
    title: 'Grand Easter Heist',
    reward: '500,000 EUR od Endorphina',
    image: '/images/promotions/grand-easter.png',
    fallbackIcon: '🐣',
    fallbackGradient: 'linear-gradient(135deg, #2d0000, #1a0008)',
  },
  {
    title: 'Platipus Tournament',
    reward: 'Fundusz nagród €125,000',
    image: '/images/promotions/platipus.png',
    fallbackIcon: '🦆',
    fallbackGradient: 'linear-gradient(135deg, #001a2d, #000d1a)',
  },
  {
    title: 'Gamzix Spin Express',
    reward: 'Pula nagród: 1 000 000 EUR',
    image: '/images/promotions/gamzix.png',
    fallbackIcon: '🎯',
    fallbackGradient: 'linear-gradient(135deg, #1a002d, #0d0015)',
  },
  {
    title: 'Slotopia: Bloom to Win',
    reward: 'Pula nagród: 105 000 EUR',
    image: '/images/promotions/slotopia.png',
    fallbackIcon: '🌸',
    fallbackGradient: 'linear-gradient(135deg, #002d00, #000d00)',
  },
  {
    title: 'Spring Season of Legends',
    reward: 'Pula nagród: €512,000',
    image: '/images/promotions/spring.png',
    fallbackIcon: '🌿',
    fallbackGradient: 'linear-gradient(135deg, #002d1a, #000d0a)',
  },
  {
    title: 'Spinoleague od Spinomenal',
    reward: 'Łączna pula nagród: 12,000,000...',
    image: '/images/promotions/spinoleague.png',
    fallbackIcon: '🏆',
    fallbackGradient: 'linear-gradient(135deg, #2d1a00, #0d0800)',
  },
]

export default function PromotionsClient() {
  const [active, setActive] = useState('Wszystko')

  const showWelcomeCasino = active === 'Wszystko' || active === 'Kasyno'
  const showWelcomeSports = active === 'Wszystko' || active === 'Sporty'
  const showCasino        = active === 'Wszystko' || active === 'Kasyno'
  const showNetwork       = active === 'Wszystko' || active === 'Promocje sieciowe'

  return (
    <div className="container mx-auto px-4">

      {/* ── Табы ── */}
      <div className="flex gap-2 py-4 border-b border-[#2a0000] overflow-x-auto">
        {tabs.map(({ label, icon }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`flex items-center gap-2 text-sm font-bold px-5 py-2 rounded-md transition whitespace-nowrap
              ${active === label
                ? 'bg-brand text-white'
                : 'bg-[#1a0000] border border-[#3a0000] text-gray-400 hover:text-white'
              }`}
          >
            {icon} {label}
          </button>
        ))}
      </div>

      {/* ── Приветственные бонусы ── */}
      {(showWelcomeCasino || showWelcomeSports) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">

          {/* Bonus powitalny w kasynie */}
          {showWelcomeCasino && (
            <div
              className="relative rounded-2xl overflow-hidden p-8 flex items-center"
              style={{
                background: 'linear-gradient(135deg, #3d0000 0%, #1a0008 60%, #0d0000 100%)',
                minHeight: '200px',
                border: '1px solid #3a0000',
              }}
            >
              {/* Декоративная иконка-фон */}
              <span
                className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none select-none leading-none"
                style={{ fontSize: '160px', opacity: 0.07 }}
              >
                🎰
              </span>

              <div className="relative z-10">
                <h2 className="text-2xl font-black text-white mb-1">
                  Bonus powitalny<br />w kasynie
                </h2>
                <p className="text-gold font-bold text-lg mb-4">Do 2 500 € + 350 FS</p>
                <a href="/go/" className="bg-brand text-white font-bold text-sm px-6 py-2.5 rounded-md hover:bg-[#8B0000] transition">
                  Czytaj więcej
                </a>
                <p className="text-white/50 text-xs mt-3">
                  Masz <a href="/kod-promocyjny/" className="text-gold underline hover:text-yellow-300 transition">kod promocyjny</a>? Wprowadź go tutaj.
                </p>
              </div>

              {/* Картинка (если есть) */}
              <div
                className="absolute right-0 top-0 h-full w-1/2"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
                }}
              >
                <ImageWithFallback
                  src="/images/promotions/welcome-casino.png"
                  alt="Bonus powitalny"
                  className="w-full h-full object-cover object-center"
                  fallbackIcon=""
                  fallbackGradient="transparent"
                />
              </div>
            </div>
          )}

          {/* Powitalny bonus na zakłady */}
          {showWelcomeSports && (
            <div
              className="relative rounded-2xl overflow-hidden p-8 flex items-center"
              style={{
                background: 'linear-gradient(135deg, #1a1a00 0%, #0d0d00 60%, #0a0a0a 100%)',
                minHeight: '200px',
                border: '1px solid #333',
              }}
            >
              {/* Декоративная иконка-фон */}
              <span
                className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none select-none leading-none"
                style={{ fontSize: '160px', opacity: 0.07 }}
              >
                ⚽
              </span>

              <div className="relative z-10">
                <h2 className="text-2xl font-black text-white mb-1">
                  Powitalny bonus<br />na zakłady
                </h2>
                <p className="text-white text-sm mb-1">Postaw swój pierwszy zakład i otrzymaj</p>
                <p className="text-gold font-bold text-lg mb-4">DO 1 000 € na swój depozyt</p>
                <a href="/go/" className="bg-brand text-white font-bold text-sm px-6 py-2.5 rounded-md hover:bg-[#8B0000] transition">
                  Czytaj więcej
                </a>
              </div>

              {/* Картинка (если есть) */}
              <div
                className="absolute right-0 top-0 h-full w-1/2"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
                }}
              >
                <ImageWithFallback
                  src="/images/promotions/welcome-sports.png"
                  alt="Bonus sportowy"
                  className="w-full h-full object-cover object-center"
                  fallbackIcon=""
                  fallbackGradient="transparent"
                />
              </div>
            </div>
          )}

        </div>
      )}

      {/* ── Kasyno ── */}
      {showCasino && (
        <section className="py-4">
          <h2 className="text-base font-bold text-white mb-4">
            Kasyno
            <span className="ml-4 text-xs font-normal text-white/40">
              Chcesz grać bez wpłaty?{' '}
              <a href="/bonus-bez-depozytu/" className="text-gold underline hover:text-yellow-300 transition">
                Bonus bez depozytu
              </a>
            </span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {casinoPromos.map((promo) => (
              <div
                key={promo.title}
                className="relative rounded-xl overflow-hidden cursor-pointer group"
                style={{ background: '#1a0000', border: '1px solid #2a0000' }}
              >
                <div className="relative h-36 overflow-hidden">
                  <ImageWithFallback
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    fallbackIcon={promo.fallbackIcon}
                    fallbackGradient={promo.fallbackGradient}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-12"
                    style={{ background: 'linear-gradient(to top, #1a0000, transparent)' }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold text-sm mb-2">{promo.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-brand flex items-center justify-center text-white text-xs shrink-0">🎁</span>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wide">Twój bonus</p>
                      <p className="text-xs font-bold text-white">{promo.reward}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Promocje Sieciowe ── */}
      {showNetwork && (
        <section className="py-4 pb-8">
          <h2 className="text-base font-bold text-white mb-4">Promocje Sieciowe</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {networkPromos.map((promo) => (
              <div
                key={promo.title}
                className="relative rounded-xl overflow-hidden cursor-pointer group"
                style={{ background: '#1a0000', border: '1px solid #2a0000' }}
              >
                <div className="relative h-44 overflow-hidden">
                  <ImageWithFallback
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    fallbackIcon={promo.fallbackIcon}
                    fallbackGradient={promo.fallbackGradient}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-16"
                    style={{ background: 'linear-gradient(to top, #1a0000, transparent)' }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-sm mb-2">{promo.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-brand flex items-center justify-center text-white text-xs shrink-0">🎁</span>
                    <div>
                      <p className="text-[10px] text-gray-500">Twój bonus</p>
                      <p className="text-xs font-bold text-white">{promo.reward}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  )
}
