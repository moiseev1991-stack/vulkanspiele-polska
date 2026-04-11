import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Polityka Prywatności — RODO i Ochrona Danych Osobowych',
  description: 'Polityka prywatności VulkanSpiele: przetwarzanie danych osobowych zgodnie z RODO, rodzaje gromadzonych danych, prawa użytkownika i kontakt do administratora.',
  openGraph: {
    title: 'Polityka Prywatności — RODO i Ochrona Danych Osobowych',
    description: 'Przetwarzanie danych zgodnie z RODO, prawa użytkownika (dostęp, usunięcie, sprzeciw) i kontakt do administratora.',
    url: 'https://vulkanspiele-polska.pl/polityka-prywatnosci/',
  },
}

export default function PolitykaPrywatnosci() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-black text-white mb-2">Polityka Prywatności</h1>
      <p className="text-white/40 text-sm mb-10">Ostatnia aktualizacja: 1 stycznia 2026</p>

      <div className="space-y-10 text-white/70 text-sm leading-relaxed">

        <section>
          <h2 className="text-white font-bold text-lg mb-3">1. Administrator danych</h2>
          <p>
            Administratorem danych osobowych użytkowników serwisu VulkanSpiele (dalej: &bdquo;Serwis&rdquo;) jest operator
            strony internetowej dostępnej pod adresem vulkanspiele.pl. Serwis działa jako portal afiliacyjny —
            nie prowadzi działalności hazardowej i nie przyjmuje wpłat od użytkowników.
          </p>
          <p className="mt-2">
            W sprawach dotyczących ochrony danych osobowych można kontaktować się pod adresem e-mail:
            <a href="mailto:support@vulkanspiele.com" className="text-gold hover:underline ml-1">support@vulkanspiele.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">2. Podstawa prawna przetwarzania</h2>
          <p>
            Dane osobowe przetwarzane są zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679
            z dnia 27 kwietnia 2016 r. (RODO) oraz ustawą z dnia 10 maja 2018 r. o ochronie danych osobowych.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Art. 6 ust. 1 lit. a RODO — zgoda użytkownika (np. pliki cookies analityczne i marketingowe);</li>
            <li>Art. 6 ust. 1 lit. b RODO — wykonanie umowy lub podjęcie działań przed zawarciem umowy;</li>
            <li>Art. 6 ust. 1 lit. f RODO — prawnie uzasadniony interes administratora.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">3. Zakres zbieranych danych</h2>
          <p>W ramach działalności Serwisu mogą być zbierane następujące dane:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Adres IP oraz dane techniczne przeglądarki (automatycznie przy każdej wizycie);</li>
            <li>Pliki cookies — szczegóły w <Link href="/polityka-cookie" className="text-gold hover:underline">Polityce Cookie</Link>;</li>
            <li>Dane podane dobrowolnie w formularzach kontaktowych (imię, adres e-mail);</li>
            <li>Dane analityczne o zachowaniu użytkownika (strony odwiedzane, czas spędzony na stronie).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">4. Cel przetwarzania danych</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Zapewnienie prawidłowego działania Serwisu;</li>
            <li>Analiza ruchu i statystyk w celu poprawy jakości usług;</li>
            <li>Odpowiadanie na zapytania użytkowników;</li>
            <li>Marketing i wyświetlanie spersonalizowanych treści (na podstawie zgody);</li>
            <li>Wypełnienie obowiązków prawnych.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">5. Okres przechowywania danych</h2>
          <p>
            Dane osobowe przechowywane są przez okres niezbędny do realizacji celów, dla których zostały zebrane,
            lub do czasu wycofania zgody przez użytkownika. Dane analityczne są anonimizowane po 26 miesiącach.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">6. Udostępnianie danych</h2>
          <p>
            Dane użytkowników mogą być udostępniane podmiotom trzecim wyłącznie w zakresie niezbędnym do
            świadczenia usług, w tym:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Dostawcom usług analitycznych (np. Google Analytics);</li>
            <li>Dostawcom usług hostingowych;</li>
            <li>Partnerom afiliacyjnym — wyłącznie dane niezbędne do rozliczenia prowizji.</li>
          </ul>
          <p className="mt-2">
            Serwis nie sprzedaje danych osobowych użytkowników podmiotom trzecim.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">7. Prawa użytkownika</h2>
          <p>Każdy użytkownik ma prawo do:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong className="text-white">Dostępu</strong> do swoich danych osobowych;</li>
            <li><strong className="text-white">Sprostowania</strong> nieprawidłowych danych;</li>
            <li><strong className="text-white">Usunięcia</strong> danych (prawo do bycia zapomnianym);</li>
            <li><strong className="text-white">Ograniczenia</strong> przetwarzania danych;</li>
            <li><strong className="text-white">Przenoszenia</strong> danych;</li>
            <li><strong className="text-white">Sprzeciwu</strong> wobec przetwarzania danych;</li>
            <li><strong className="text-white">Wycofania zgody</strong> w dowolnym momencie bez wpływu na zgodność z prawem wcześniejszego przetwarzania.</li>
          </ul>
          <p className="mt-2">
            Aby skorzystać z powyższych praw, należy skontaktować się pod adresem:
            <a href="mailto:support@vulkanspiele.com" className="text-gold hover:underline ml-1">support@vulkanspiele.com</a>.
          </p>
          <p className="mt-2">
            Użytkownik ma również prawo wniesienia skargi do organu nadzorczego — Urzędu Ochrony Danych Osobowych
            (UODO), ul. Stawki 2, 00-193 Warszawa, <a href="https://uodo.gov.pl" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">uodo.gov.pl</a>.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">8. Zmiany polityki prywatności</h2>
          <p>
            Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności.
            O wszelkich istotnych zmianach użytkownicy będą informowani poprzez publikację zaktualizowanej wersji
            na stronie Serwisu z nową datą wejścia w życie.
          </p>
        </section>

      </div>
    </main>
  )
}
