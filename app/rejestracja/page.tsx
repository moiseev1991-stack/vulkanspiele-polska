import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vulkanspiele Rejestracja PL Casino Logowanie Online',
  description: 'Vulkanspiele logowanie PL na oficjalnej stronie kasyna online. Vulkan Spiele login i rejestracja z bonusem za rejestrację. Zaloguj się casino vulkanspiele online.',
  openGraph: {
    title: 'Vulkanspiele Rejestracja PL Casino Logowanie Online',
    description: 'Vulkanspiele logowanie PL na oficjalnej stronie kasyna online. Vulkan Spiele login i rejestracja z bonusem.',
    url: 'https://vulkanspiele-polska.pl/rejestracja/',
  },
}

export default function RejestracjaPage() {
  return (
    <div className="min-h-screen" style={{ background: '#0a0000' }}>
      <div className="container mx-auto px-4 py-12 max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <span
            className="inline-flex items-center gap-1 text-xs font-bold text-white px-3 py-1 rounded-sm mb-4"
            style={{ background: '#CC0000' }}
          >
            🔐 KONTO
          </span>
          <h1 className="text-3xl font-black text-white mb-2">
            Vulkan Spiele <span style={{ color: '#FFD700' }}>Logowanie</span> do Kasyna Casino Login PL Rejestracja
          </h1>
          <p className="text-gray-400 text-sm">
            Zaloguj się lub zarejestruj konto w Vulkan Spiele Casino PL
          </p>
        </div>

        {/* Login box */}
        <div
          className="rounded-2xl p-8 mb-6"
          style={{ background: '#1a0005', border: '1px solid #3a0010' }}
        >
          <h2 className="text-lg font-bold text-white mb-5">
            Vulkan Spiele Login do Kasyna
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-gray-400 text-xs block mb-1">E-mail</label>
              <input
                type="email"
                placeholder="twoj@email.pl"
                readOnly
                className="w-full rounded-lg px-4 py-3 text-sm outline-none"
                style={{ background: '#0d0000', border: '1px solid #4a0015', color: '#fff' }}
              />
            </div>
            <div>
              <label className="text-gray-400 text-xs block mb-1">Hasło</label>
              <input
                type="password"
                placeholder="••••••••"
                readOnly
                className="w-full rounded-lg px-4 py-3 text-sm outline-none"
                style={{ background: '#0d0000', border: '1px solid #4a0015', color: '#fff' }}
              />
            </div>
            <Link
              href="/go/"
              className="block text-center text-black font-black text-sm px-6 py-3 rounded-xl hover:bg-yellow-400 transition"
              style={{ background: '#FFD700' }}
            >
              Zaloguj się
            </Link>
          </div>
        </div>

        {/* Register */}
        <div
          className="rounded-2xl p-6 text-center"
          style={{ background: '#140002', border: '1px solid #2a0008' }}
        >
          <p className="text-gray-400 text-sm mb-4">
            Nie masz konta? Zarejestruj się i odbierz bonus powitalny do 500 EUR + 100 FS!
          </p>
          <Link
            href="/go/"
            className="inline-block text-black font-black text-sm px-6 py-3 rounded-xl hover:bg-yellow-400 transition"
            style={{ background: '#FFD700' }}
          >
            Zarejestruj się teraz
          </Link>
        </div>

        {/* SEO */}
        <div className="h-px my-10" style={{ background: '#1e0000' }} />
        <section className="space-y-4">
          <h2 className="text-base font-bold text-white">
            Vulkan Spiele Logowanie PL — Casino Login i Rejestracja
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Vulkan Spiele login i rejestracja z bonusem za rejestrację. Zaloguj się na oficjalnej stronie
            kasyna online Vulkan Spiele PL i odbierz swój bonus powitalny.
          </p>
          <h3 className="text-sm font-bold text-white/70">
            Rejestracja Vulkan Spiele — jak założyć konto?
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Rejestracja w Vulkan Spiele zajmuje mniej niż 2 minuty. Podaj e-mail, ustaw hasło,
            potwierdź wiek 18+ i gotowe — Twoje konto jest aktywne. Pierwszy bonus odbierzesz
            natychmiast po weryfikacji.
          </p>
        </section>

        <div className="mt-8">
          <Link href="/" className="text-gray-500 text-sm hover:text-white transition">
            ← Wróć do strony głównej
          </Link>
        </div>
      </div>
    </div>
  )
}
