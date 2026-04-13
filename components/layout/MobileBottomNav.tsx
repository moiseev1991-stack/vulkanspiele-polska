'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Kasyno',     href: '/',           icon: '🎰' },
  { label: 'Bonusy',     href: '/bonuses/',   icon: '🎁' },
  { label: 'Sport',      href: '/go/',        icon: '⚽' },
  { label: 'Turnieje',   href: '/tournaments/', icon: '🏆' },
  { label: 'Menu',       href: '/promotions/', icon: '☰'  },
]

export default function MobileBottomNav() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        background: '#0d0000',
        borderTop: '1px solid #2a0008',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div className="flex items-stretch">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex-1 flex flex-col items-center justify-center py-2 gap-0.5 transition-colors"
              style={{ color: isActive ? '#FFD700' : '#6b6b6b' }}
            >
              <span className="text-lg leading-none">{item.icon}</span>
              <span className="text-[10px] font-bold leading-none">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
