'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: 'WIELKANOCNE',
    subtitle: 'ŁOWY',
    description: 'Zbieraj bonusy każdego dnia i zdobądź do €18 000 + 640 Free Spinów!',
    cta: 'Zagraj teraz',
    ctaHref: '/go/',
    bg: 'linear-gradient(135deg, #2d0000 0%, #1a0005 50%, #0a0000 100%)',
    image: '/images/hero/banner-easter.png',
    badge: '🐰 WIELKANOC',
  },
  {
    id: 2,
    title: 'PIĄTKOWA',
    subtitle: 'PROMOCJA',
    description: 'Zdobądź do 150% bonusu + 100 darmowych spinów! Spiesz się!',
    cta: 'Odbierz bonus',
    ctaHref: '/go/',
    bg: 'linear-gradient(135deg, #1a0000 0%, #3a0000 40%, #0a0000 100%)',
    image: '/images/hero/banner-friday.png',
    badge: '🎰 PIĄTEK',
  },
  {
    id: 3,
    title: 'TURNIEJ',
    subtitle: 'TYGODNIOWY',
    description: 'Pula nagród €10 000. Rywalizuj z najlepszymi i wygraj wielką nagrodę!',
    cta: 'Weź udział',
    ctaHref: '/go/',
    bg: 'linear-gradient(135deg, #0a0000 0%, #1a0800 40%, #0d0200 100%)',
    image: '/images/hero/banner-tournament.png',
    badge: '🏆 TURNIEJE',
  },
  {
    id: 4,
    title: 'KLUB',
    subtitle: 'VIP',
    description: 'Ekskluzywne przywileje, cashback i dedykowany opiekun. Tylko dla wybranych.',
    cta: 'Dołącz do VIP',
    ctaHref: '/go/',
    bg: 'linear-gradient(135deg, #0a0000 0%, #0d0010 40%, #060000 100%)',
    image: '/images/hero/banner-vip.png',
    badge: '💎 VIP',
  },
  {
    id: 5,
    title: 'KASYNO',
    subtitle: 'NA ŻYWO',
    description: 'Prawdziwi krupierzy, ruletka i blackjack w czasie rzeczywistym. Poczuj dreszczyk emocji.',
    cta: 'Zagraj teraz',
    ctaHref: '/go/',
    bg: 'linear-gradient(135deg, #000d0a 0%, #001a10 40%, #000a06 100%)',
    image: '/images/hero/banner-live.png',
    badge: '🎲 NA ŻYWO',
  },
  {
    id: 6,
    title: 'DARMOWE',
    subtitle: 'SPINY',
    description: 'Zdobądź 200 darmowych spinów bez depozytu. Tylko dla nowych graczy!',
    cta: 'Odbierz teraz',
    ctaHref: '/go/',
    bg: 'linear-gradient(135deg, #0a0015 0%, #1a0030 40%, #080010 100%)',
    image: '/images/hero/banner-freespins.png',
    badge: '⚡ FREE SPINS',
  },
]

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent((s) => (s + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [])

  const slide = slides[current]

  return (
    /* Outer wrapper — transparent, provides horizontal padding */
    <div className="w-full py-3">
      <div className="container mx-auto px-4">

        {/* Contained banner box */}
        <section
          className="relative overflow-hidden rounded-2xl"
          style={{ background: slide.bg, transition: 'background 0.7s ease' }}
        >
          {/* ── Mobile layout ── */}
          <div className="relative md:hidden flex items-center" style={{ minHeight: '180px', padding: '16px 20px' }}>
            {/* Image — right overlay */}
            {slide.image && (
              <div
                className="absolute right-0 top-0 h-full"
                style={{
                  width: '55%',
                  maskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}
            {/* Text — left */}
            <div className="relative z-10 flex flex-col" style={{ width: '58%' }}>
              <span
                className="inline-flex items-center gap-1 text-[10px] font-bold text-white px-2 py-0.5 rounded-sm mb-2 w-fit"
                style={{ background: '#CC0000' }}
              >
                {slide.badge}
              </span>
              <h2 className="text-xl font-black leading-tight mb-1.5">
                <span className="text-white">{slide.title}</span><br />
                <span className="text-gold">{slide.subtitle}</span>
              </h2>
              <p className="text-[10px] text-gray-300 mb-3 leading-relaxed">{slide.description}</p>
              <div className="flex gap-2">
                <Link
                  href={slide.ctaHref}
                  className="text-black font-bold text-[11px] px-3 py-1.5 rounded-md hover:bg-yellow-400 transition"
                  style={{ background: '#FFD700' }}
                >
                  {slide.cta}
                </Link>
                <Link
                  href="/go/"
                  className="text-white text-[11px] px-3 py-1.5 rounded-md transition"
                  style={{ border: '1px solid #555' }}
                >
                  Czytaj więcej
                </Link>
              </div>
            </div>
          </div>

          {/* ── Desktop layout ── */}
          <div
            className="hidden md:flex relative items-center"
            style={{ minHeight: '420px', padding: '0 48px' }}
          >
            {/* Text left */}
            <div className="relative z-10 flex flex-col justify-center" style={{ width: '45%' }}>
              <span
                className="inline-flex items-center gap-1 text-xs font-bold text-white px-3 py-1 rounded-sm mb-4 w-fit"
                style={{ background: '#CC0000' }}
              >
                {slide.badge}
              </span>
              <h2 className="text-5xl font-black leading-tight mb-2">
                <span className="text-white">{slide.title}</span><br />
                <span className="text-gold">{slide.subtitle}</span>
              </h2>
              <p className="text-sm text-gray-300 mb-6 max-w-sm">{slide.description}</p>
              <div className="flex gap-3">
                <Link
                  href={slide.ctaHref}
                  className="text-black font-bold text-sm px-6 py-2.5 rounded-md hover:bg-yellow-400 transition"
                  style={{ background: '#FFD700' }}
                >
                  {slide.cta}
                </Link>
                <Link
                  href="/go/"
                  className="text-white text-sm px-6 py-2.5 rounded-md hover:border-gray-400 transition"
                  style={{ border: '1px solid #555' }}
                >
                  Czytaj więcej
                </Link>
              </div>
            </div>

            {/* Image right */}
            {slide.image && (
              <div
                className="absolute right-0 top-0 h-full"
                style={{
                  width: '55%',
                  maskImage: 'linear-gradient(to right, transparent 0%, black 35%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%)',
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}
          </div>

          {/* Prev arrow */}
          <button
            onClick={() => setCurrent((s) => (s - 1 + slides.length) % slides.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-8 h-8 rounded-full transition-all"
            style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid #3a0000', color: '#888' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(180,0,0,0.3)'
              ;(e.currentTarget as HTMLButtonElement).style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,0,0,0.5)'
              ;(e.currentTarget as HTMLButtonElement).style.color = '#888'
            }}
          >
            <ChevronLeft size={16} />
          </button>

          {/* Next arrow */}
          <button
            onClick={() => setCurrent((s) => (s + 1) % slides.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-8 h-8 rounded-full transition-all"
            style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid #3a0000', color: '#888' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(180,0,0,0.3)'
              ;(e.currentTarget as HTMLButtonElement).style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,0,0,0.5)'
              ;(e.currentTarget as HTMLButtonElement).style.color = '#888'
            }}
          >
            <ChevronRight size={16} />
          </button>

          {/* Dots — desktop only (inside banner) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all duration-300"
                style={i === current
                  ? { width: '24px', height: '8px', background: '#FFD700' }
                  : { width: '8px', height: '8px', background: '#4b4b4b' }
                }
              />
            ))}
          </div>
        </section>

        {/* Dots — mobile only (below banner) */}
        <div className="flex md:hidden justify-center gap-2 pt-2 pb-1">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={i === current
                ? { width: '24px', height: '8px', background: '#FFD700' }
                : { width: '8px', height: '8px', background: '#4b4b4b' }
              }
            />
          ))}
        </div>

      </div>
    </div>
  )
}
