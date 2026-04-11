import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Regulamin — VulkanSpiele',
  description: 'Regulamin serwisu VulkanSpiele. Zasady korzystania ze strony, ograniczenia wiekowe 18+, wyłączenie odpowiedzialności.',
}

export default function Regulamin() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-black text-white mb-2">Regulamin</h1>
      <p className="text-white/40 text-sm mb-10">Ostatnia aktualizacja: 1 stycznia 2026</p>

      <div className="space-y-10 text-white/70 text-sm leading-relaxed">

        <section>
          <h2 className="text-white font-bold text-lg mb-3">1. Postanowienia ogólne</h2>
          <p>
            Niniejszy Regulamin określa zasady korzystania z serwisu internetowego VulkanSpiele dostępnego pod adresem
            vulkanspiele.pl (dalej: &bdquo;Serwis&rdquo;). Serwis jest portalem afiliacyjnym i informacyjnym dotyczącym kasyn
            internetowych — nie prowadzi działalności hazardowej, nie przyjmuje wpłat ani nie organizuje gier hazardowych.
          </p>
          <p className="mt-2">
            Korzystanie z Serwisu oznacza akceptację niniejszego Regulaminu w całości. Jeśli nie zgadzasz się
            z którymikolwiek postanowieniami, prosimy o opuszczenie Serwisu.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">2. Ograniczenie wiekowe — 18+</h2>
          <div
            className="rounded-xl p-4 mb-4"
            style={{ background: 'rgba(204,0,0,0.1)', border: '1px solid rgba(204,0,0,0.3)' }}
          >
            <p className="text-white font-semibold">
              Serwis jest przeznaczony wyłącznie dla osób pełnoletnich, które ukończyły 18 lat.
            </p>
          </div>
          <p>
            Hazard online jest nielegalny dla osób niepełnoletnich. Jeżeli masz mniej niż 18 lat, nie jesteś
            uprawniony do korzystania z treści niniejszego Serwisu ani do rejestracji w jakimkolwiek kasynie
            poleconym przez Serwis. Operator Serwisu nie ponosi odpowiedzialności za dostęp osób niepełnoletnich
            do treści hazardowych w kasynach podmiotów trzecich.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">3. Charakter serwisu</h2>
          <p>
            VulkanSpiele jest niezależnym serwisem afiliacyjnym. Oznacza to, że:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Serwis zawiera recenzje, rankingi i porównania kasyn internetowych przygotowane przez redakcję;</li>
            <li>Serwis może otrzymywać wynagrodzenie od operatorów kasyn za kierowanie do nich użytkowników;</li>
            <li>Informacje i opinie prezentowane w Serwisie mają charakter wyłącznie informacyjny i nie stanowią doradztwa finansowego;</li>
            <li>Serwis nie gwarantuje wygranych ani żadnych konkretnych rezultatów gry w kasynach partnerskich.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">4. Wyłączenie odpowiedzialności</h2>
          <p>
            Operator Serwisu nie ponosi odpowiedzialności za:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Treści, regulaminy, bonusy ani warunki świadczenia usług przez kasyna podmiotów trzecich;</li>
            <li>Straty finansowe poniesione przez użytkowników w wyniku uczestnictwa w grach hazardowych;</li>
            <li>Niedostępność lub błędy techniczne stron kasyn partnerskich;</li>
            <li>Decyzje podejmowane przez użytkowników na podstawie informacji zamieszczonych w Serwisie;</li>
            <li>Działania podmiotów trzecich, do których prowadzą linki umieszczone w Serwisie.</li>
          </ul>
          <p className="mt-2">
            Treści Serwisu są regularnie aktualizowane, jednak Operator nie gwarantuje ich aktualności,
            kompletności ani braku błędów w danym momencie.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">5. Własność intelektualna</h2>
          <p>
            Wszelkie treści zamieszczone w Serwisie, w tym teksty, grafiki, logotypy i oprogramowanie,
            są własnością Operatora lub jego licencjodawców i podlegają ochronie prawa autorskiego.
            Kopiowanie, reprodukowanie lub dystrybucja jakichkolwiek treści bez pisemnej zgody Operatora
            jest zabroniona.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">6. Pliki cookies i dane osobowe</h2>
          <p>
            Szczegółowe informacje dotyczące plików cookies znajdziesz w{' '}
            <Link href="/polityka-cookie" className="text-gold hover:underline">Polityce Cookie</Link>.
            Zasady przetwarzania danych osobowych opisuje{' '}
            <Link href="/polityka-prywatnosci" className="text-gold hover:underline">Polityka Prywatności</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">7. Odpowiedzialna gra</h2>
          <p>
            Operator Serwisu promuje zasady odpowiedzialnej gry. Jeśli odczuwasz, że hazard stał się dla Ciebie
            problemem, zapoznaj się z informacjami na stronie{' '}
            <Link href="/odpowiedzialna-gra" className="text-gold hover:underline">Odpowiedzialna Gra</Link>{' '}
            lub skontaktuj się z organizacjami pomocowymi.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">8. Prawo właściwe</h2>
          <p>
            Niniejszy Regulamin podlega prawu polskiemu. Wszelkie spory wynikłe z korzystania z Serwisu
            będą rozstrzygane przez właściwy sąd polski.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">9. Zmiany regulaminu</h2>
          <p>
            Operator zastrzega sobie prawo do zmiany Regulaminu. Zmiany wchodzą w życie z dniem ich publikacji
            w Serwisie. Dalsze korzystanie z Serwisu po opublikowaniu zmian oznacza ich akceptację.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">10. Kontakt</h2>
          <p>
            W przypadku pytań dotyczących Regulaminu prosimy o kontakt:
            <a href="mailto:support@vulkanspiele.com" className="text-gold hover:underline ml-1">support@vulkanspiele.com</a>
          </p>
        </section>

      </div>
    </main>
  )
}
