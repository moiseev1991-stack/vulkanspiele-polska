import Link from 'next/link'

const legalLinks = [
  { label: 'Regulamin',             href: '/regulamin' },
  { label: 'Polityka Prywatności',  href: '/polityka-prywatnosci' },
  { label: 'Polityka Cookie',       href: '/polityka-cookie' },
  { label: 'Odpowiedzialna Gra',    href: '/odpowiedzialna-gra' },
  { label: 'O Nas',                 href: '/o-nas' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 mt-16">
      <div className="container mx-auto px-4 py-10">

        {/* Legal links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/40 hover:text-white/70 text-xs transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Responsible gambling disclaimer */}
        <p className="text-center text-white/25 text-xs max-w-2xl mx-auto mb-6 leading-relaxed">
          VulkanSpiele jest niezależnym serwisem afiliacyjnym — nie jest kasynem i nie prowadzi działalności
          hazardowej. Treści na stronie mają charakter wyłącznie informacyjny. Hazard jest przeznaczony wyłącznie
          dla osób pełnoletnich (18+). Graj odpowiedzialnie.
        </p>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">© 2026 VulkanSpiele. Wszelkie prawa zastrzeżone.</p>
          <p className="text-white/20 text-xs">18+ | Graj odpowiedzialnie</p>
        </div>

      </div>
    </footer>
  )
}
