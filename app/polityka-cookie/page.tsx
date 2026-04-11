import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Polityka Cookie — VulkanSpiele',
  description: 'Polityka plików cookies serwisu VulkanSpiele. Jakie cookies używamy, w jakim celu i jak nimi zarządzać.',
}

export default function PolitykaCookie() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-black text-white mb-2">Polityka Cookie</h1>
      <p className="text-white/40 text-sm mb-10">Ostatnia aktualizacja: 1 stycznia 2026</p>

      <div className="space-y-10 text-white/70 text-sm leading-relaxed">

        <section>
          <h2 className="text-white font-bold text-lg mb-3">1. Czym są pliki cookies?</h2>
          <p>
            Pliki cookies (ciasteczka) to małe pliki tekstowe zapisywane na Twoim urządzeniu (komputerze,
            smartfonie, tablecie) przez przeglądarkę internetową podczas odwiedzania stron internetowych.
            Cookies pozwalają stronom internetowym &bdquo;zapamiętać&rdquo; Twoje działania i preferencje przez pewien czas,
            dzięki czemu nie musisz ich ponownie wprowadzać przy kolejnych wizytach.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">2. Rodzaje cookies używanych w Serwisie</h2>

          <div className="space-y-4">
            <div className="rounded-xl p-4" style={{ background: '#1a0000', border: '1px solid #3a0000' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ background: '#2d5a1b', color: '#7dca52' }}>Niezbędne</span>
                <p className="text-white font-semibold text-sm">Cookies techniczne (wymagana zgoda: NIE)</p>
              </div>
              <p className="text-xs text-white/50">
                Niezbędne do prawidłowego funkcjonowania Serwisu. Bez nich strona nie działa poprawnie.
                Obejmują sesje użytkownika, preferencje języka i ustawienia bezpieczeństwa.
              </p>
            </div>

            <div className="rounded-xl p-4" style={{ background: '#1a0000', border: '1px solid #3a0000' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ background: '#1a3a5c', color: '#52a8ca' }}>Analityczne</span>
                <p className="text-white font-semibold text-sm">Cookies analityczne (wymagana zgoda: TAK)</p>
              </div>
              <p className="text-xs text-white/50">
                Pozwalają nam analizować ruch na stronie i zachowanie użytkowników w celu poprawy jakości Serwisu.
                Używamy Google Analytics — dane są anonimizowane i zbierane w formie zagregowanej.
              </p>
              <p className="text-xs text-white/40 mt-1">Przykłady: _ga, _gid, _gat</p>
            </div>

            <div className="rounded-xl p-4" style={{ background: '#1a0000', border: '1px solid #3a0000' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ background: '#4a2d00', color: '#ca9052' }}>Marketingowe</span>
                <p className="text-white font-semibold text-sm">Cookies marketingowe (wymagana zgoda: TAK)</p>
              </div>
              <p className="text-xs text-white/50">
                Służą do śledzenia skuteczności kampanii reklamowych i wyświetlania spersonalizowanych reklam.
                Mogą być ustawiane przez naszych partnerów reklamowych (np. Google Ads, Facebook Pixel).
              </p>
            </div>

            <div className="rounded-xl p-4" style={{ background: '#1a0000', border: '1px solid #3a0000' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ background: '#3a1a5c', color: '#a052ca' }}>Afiliacyjne</span>
                <p className="text-white font-semibold text-sm">Cookies afiliacyjne (wymagana zgoda: TAK)</p>
              </div>
              <p className="text-xs text-white/50">
                Używane do śledzenia kliknięć w linki afiliacyjne i przypisywania rejestracji w kasynach
                do właściwego partnera. Pliki te są niezbędne do rozliczania prowizji.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">3. Cookies podmiotów trzecich</h2>
          <p className="mb-3">
            Oprócz własnych cookies, Serwis może korzystać z plików cookies podmiotów trzecich:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 pr-4 text-white/60 font-semibold">Podmiot</th>
                  <th className="text-left py-2 pr-4 text-white/60 font-semibold">Cel</th>
                  <th className="text-left py-2 text-white/60 font-semibold">Polityka prywatności</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { name: 'Google Analytics', purpose: 'Analityka ruchu', url: 'https://policies.google.com/privacy' },
                  { name: 'Google Ads', purpose: 'Reklama', url: 'https://policies.google.com/privacy' },
                  { name: 'Facebook Pixel', purpose: 'Reklama', url: 'https://www.facebook.com/policy' },
                ].map((row) => (
                  <tr key={row.name}>
                    <td className="py-2 pr-4 text-white/70">{row.name}</td>
                    <td className="py-2 pr-4 text-white/50">{row.purpose}</td>
                    <td className="py-2">
                      <a href={row.url} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                        Link
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">4. Zarządzanie cookies</h2>
          <p className="mb-3">
            Możesz zarządzać plikami cookies na kilka sposobów:
          </p>
          <div className="space-y-3">
            <div>
              <p className="text-white font-semibold mb-1">Baner cookie</p>
              <p>
                Przy pierwszej wizycie na stronie możesz wyrazić lub odrzucić zgodę na poszczególne kategorie
                cookies poprzez baner wyświetlany na dole strony.
              </p>
            </div>
            <div>
              <p className="text-white font-semibold mb-1">Ustawienia przeglądarki</p>
              <p>
                Każda przeglądarka umożliwia zarządzanie plikami cookies. Poniżej linki do instrukcji:
              </p>
              <ul className="mt-2 space-y-1">
                {[
                  { name: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                  { name: 'Mozilla Firefox', url: 'https://support.mozilla.org/pl/kb/ciasteczka' },
                  { name: 'Microsoft Edge', url: 'https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plik%C3%B3w-cookie-w-przegladarce-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' },
                  { name: 'Safari', url: 'https://support.apple.com/pl-pl/guide/safari/sfri11471/mac' },
                ].map((browser) => (
                  <li key={browser.name}>
                    <a href={browser.url} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                      {browser.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-3">
            Wyłączenie niektórych rodzajów cookies może wpłynąć na funkcjonalność Serwisu.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">5. Więcej informacji</h2>
          <p>
            Więcej informacji o przetwarzaniu danych osobowych znajdziesz w naszej{' '}
            <Link href="/polityka-prywatnosci" className="text-gold hover:underline">Polityce Prywatności</Link>.
            W razie pytań skontaktuj się z nami:{' '}
            <a href="mailto:support@vulkanspiele.com" className="text-gold hover:underline">support@vulkanspiele.com</a>.
          </p>
        </section>

      </div>
    </main>
  )
}
