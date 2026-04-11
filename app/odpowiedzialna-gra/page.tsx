import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Odpowiedzialna Gra — Pomoc i Wsparcie dla Graczy 18+',
  description: 'Zasady odpowiedzialnej gry, narzędzia samoochrony i pomoc dla uzależnionych. Kontakty: Anonimowi Hazardziści, KCPU, telefon zaufania 116 123. Hazard 18+.',
  openGraph: {
    title: 'Odpowiedzialna Gra — Pomoc i Wsparcie dla Graczy 18+',
    description: 'Narzędzia samoochrony, limity depozytów, samowykluczenie. Pomoc: Anonimowi Hazardziści, KCPU, telefon 116 123.',
    url: 'https://vulkanspiele-polska.pl/odpowiedzialna-gra/',
  },
  robots: { index: true, follow: true },
}

export default function OdpowiedzialnaGra() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-black text-white mb-2">Odpowiedzialna Gra</h1>
      <p className="text-white/60 text-sm mb-10">
        VulkanSpiele promuje odpowiedzialne podejście do hazardu. Hazard powinien być formą rozrywki — nie sposobem na zarabianie pieniędzy.
      </p>

      {/* Warning banner */}
      <div
        className="rounded-xl p-5 mb-10"
        style={{ background: 'rgba(204,0,0,0.1)', border: '1px solid rgba(204,0,0,0.3)' }}
      >
        <p className="text-white font-bold text-base mb-1">⚠ Ważne ostrzeżenie</p>
        <p className="text-white/70 text-sm">
          Hazard wiąże się z ryzykiem finansowym. Nigdy nie graj pieniędzmi, których nie możesz sobie pozwolić stracić.
          Jeśli hazard zaczyna wpływać negatywnie na Twoje życie — szukaj pomocy.
        </p>
      </div>

      <div className="space-y-10 text-white/70 text-sm leading-relaxed">

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Zasady odpowiedzialnej gry</h2>
          <ul className="space-y-2">
            {[
              'Traktuj hazard wyłącznie jako rozrywkę, nie jako źródło dochodu.',
              'Ustal limit czasu i pieniędzy przeznaczonych na grę i bezwzględnie go przestrzegaj.',
              'Nigdy nie graj pod wpływem alkoholu, narkotyków lub silnych emocji.',
              'Nie próbuj „odgrywać się" po stracie — to prowadzi do jeszcze większych strat.',
              'Rób regularne przerwy i nie pozwól, by hazard przeszkadzał w codziennym życiu.',
              'Graj tylko w licencjonowanych kasynach z certyfikowanym oprogramowaniem.',
            ].map((rule) => (
              <li key={rule} className="flex items-start gap-2">
                <span className="text-gold mt-0.5 shrink-0">✓</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Sygnały ostrzegawcze uzależnienia</h2>
          <p className="mb-3">Możesz mieć problem z hazardem, jeśli:</p>
          <ul className="space-y-2">
            {[
              'Myślisz o hazardzie przez większość czasu.',
              'Grasz coraz więcej, by osiągnąć ten sam poziom emocji.',
              'Próbowałeś ograniczyć grę, ale bezskutecznie.',
              'Hazard powoduje u Ciebie niepokój, irytację lub depresję.',
              'Ukrywasz swoje nawyki hazardowe przed rodziną i znajomymi.',
              'Zaciągasz długi lub pożyczasz pieniądze na grę.',
              'Zaniedbujesz pracę, szkołę lub relacje z powodu hazardu.',
            ].map((sign) => (
              <li key={sign} className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 shrink-0">!</span>
                <span>{sign}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Narzędzia samoochrony w kasynach</h2>
          <p className="mb-3">
            Każde legalne kasyno online oferuje narzędzia, które pomagają kontrolować nawyki hazardowe:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { title: 'Limity depozytów', desc: 'Dzienny, tygodniowy lub miesięczny limit wpłat.' },
              { title: 'Limity strat', desc: 'Automatyczne zatrzymanie gry po osiągnięciu ustalonej straty.' },
              { title: 'Limit czasu sesji', desc: 'Automatyczne wylogowanie po określonym czasie gry.' },
              { title: 'Przerwa w grze', desc: 'Czasowe zablokowanie dostępu do konta (24h, 7 dni, 30 dni).' },
              { title: 'Samowykluczenie', desc: 'Stałe lub długoterminowe zamknięcie konta w kasynie.' },
              { title: 'Rzeczywistość czasu', desc: 'Powiadomienia o czasie spędzonym podczas sesji gry.' },
            ].map((tool) => (
              <div key={tool.title} className="rounded-lg p-3" style={{ background: '#1a0000', border: '1px solid #3a0000' }}>
                <p className="text-white font-semibold text-xs mb-1">{tool.title}</p>
                <p className="text-white/50 text-xs">{tool.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Pomoc — organizacje w Polsce</h2>
          <p className="mb-4">
            Jeśli Ty lub ktoś bliski potrzebuje pomocy w związku z uzależnieniem od hazardu, skontaktuj się
            z jedną z poniższych organizacji:
          </p>
          <div className="space-y-3">
            <div className="rounded-xl p-4" style={{ background: '#1a0000', border: '1px solid #3a0000' }}>
              <p className="text-white font-bold mb-1">Centrum Wsparcia dla Osób w Stanie Kryzysu Emocjonalnego</p>
              <p className="text-white/60 text-xs mb-1">Telefon zaufania: <strong className="text-white">116 123</strong> (czynny całą dobę, bezpłatny)</p>
              <p className="text-white/50 text-xs">Bezpłatna pomoc psychologiczna i wsparcie w kryzysie.</p>
            </div>
            <div className="rounded-xl p-4" style={{ background: '#1a0000', border: '1px solid #3a0000' }}>
              <p className="text-white font-bold mb-1">Krajowe Centrum Przeciwdziałania Uzależnieniom (KCPU)</p>
              <p className="text-white/60 text-xs mb-1">
                Strona: <a href="https://kcpu.gov.pl" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">kcpu.gov.pl</a>
              </p>
              <p className="text-white/50 text-xs">Informacje o leczeniu uzależnień i placówkach pomocowych w Polsce.</p>
            </div>
            <div className="rounded-xl p-4" style={{ background: '#1a0000', border: '1px solid #3a0000' }}>
              <p className="text-white font-bold mb-1">Anonimowi Hazardziści (GA Polska)</p>
              <p className="text-white/60 text-xs mb-1">
                Strona: <a href="https://www.hazardzisci.org" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">hazardzisci.org</a>
              </p>
              <p className="text-white/50 text-xs">Program 12 kroków dla osób uzależnionych od hazardu i ich rodzin.</p>
            </div>
            <div className="rounded-xl p-4" style={{ background: '#1a0000', border: '1px solid #3a0000' }}>
              <p className="text-white font-bold mb-1">Fundacja Krok po Kroku</p>
              <p className="text-white/60 text-xs mb-1">Telefon: <strong className="text-white">801 889 880</strong></p>
              <p className="text-white/50 text-xs">Pomoc dla osób uzależnionych od hazardu i ich bliskich.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Ochrona nieletnich</h2>
          <p>
            Serwis VulkanSpiele jest przeznaczony wyłącznie dla osób pełnoletnich (18+). Jeśli jesteś rodzicem
            lub opiekunem, zalecamy korzystanie z oprogramowania do kontroli rodzicielskiej, aby zablokować
            dostęp nieletnich do treści hazardowych:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><a href="https://www.netnanny.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Net Nanny</a></li>
            <li><a href="https://www.cyberpatrol.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">CyberPatrol</a></li>
            <li>Wbudowane narzędzia kontroli rodzicielskiej w systemach Windows, macOS, iOS i Android.</li>
          </ul>
        </section>

      </div>
    </main>
  )
}
