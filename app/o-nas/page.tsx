import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'O Nas — VulkanSpiele',
  description: 'O serwisie VulkanSpiele — niezależny portal afiliacyjny kasyn online. Kim jesteśmy, co robimy i jak zarabiamy.',
}

export default function ONas() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-black text-white mb-2">O Nas</h1>
      <p className="text-white/60 text-sm mb-10">
        VulkanSpiele — niezależny portal informacyjny i afiliacyjny poświęcony kasynom internetowym dla polskich graczy.
      </p>

      <div className="space-y-10 text-white/70 text-sm leading-relaxed">

        {/* Affiliate disclaimer — pierwsza i widoczna */}
        <div
          className="rounded-xl p-5"
          style={{ background: 'rgba(255, 215, 0, 0.05)', border: '1px solid rgba(255, 215, 0, 0.2)' }}
        >
          <p className="text-gold font-bold mb-2">ℹ Ważny komunikat — strona afiliacyjna</p>
          <p className="text-white/70 text-sm">
            VulkanSpiele jest <strong className="text-white">niezależnym serwisem afiliacyjnym</strong> — nie jest kasynem
            internetowym i nie prowadzi żadnej działalności hazardowej. Nie przyjmujemy wpłat, nie prowadzimy
            kont gracza ani nie organizujemy gier. Serwis może otrzymywać wynagrodzenie prowizyjne od operatorów
            kasyn, do których kierujemy użytkowników. Nie wpływa to na obiektywność naszych recenzji.
          </p>
        </div>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Kim jesteśmy?</h2>
          <p>
            VulkanSpiele to zespół pasjonatów kasyn online tworzący niezależne, rzetelne recenzje i rankingi
            operatorów gier hazardowych dostępnych dla polskich graczy. Naszym celem jest pomoc użytkownikom
            w znalezieniu bezpiecznych, licencjonowanych kasyn z atrakcyjną ofertą.
          </p>
          <p className="mt-2">
            Portal działa od 2024 roku i regularnie aktualizuje swoje treści, aby odzwierciedlać zmiany
            na rynku kasyn online — nowe bonusy, dostawców gier, metody płatności i regulacje prawne.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Co robimy?</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Recenzje kasyn',
                desc: 'Szczegółowe oceny kasyn online — licencja, oprogramowanie, gry, bonusy, wypłaty i obsługa klienta.',
              },
              {
                title: 'Rankingi i porównania',
                desc: 'Zestawienia najlepszych kasyn według różnych kryteriów: bonusy powitalne, kasyna mobilne, metody płatności.',
              },
              {
                title: 'Aktualne promocje',
                desc: 'Informacje o bonusach, darmowych spinach, turniejach i akcjach specjalnych w polecanych kasynach.',
              },
              {
                title: 'Poradniki dla graczy',
                desc: 'Artykuły edukacyjne o grach kasynowych, strategiach i zasadach odpowiedzialnej gry.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl p-4" style={{ background: '#1a0000', border: '1px solid #3a0000' }}>
                <p className="text-white font-semibold mb-1">{item.title}</p>
                <p className="text-white/50 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Jak zarabiamy?</h2>
          <p>
            VulkanSpiele jest finansowany przez partnerstwa afiliacyjne z operatorami kasyn online. Oznacza to, że:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Gdy klikniesz w link do kasyna i zarejestrujesz się, możemy otrzymać wynagrodzenie od tego operatora;</li>
            <li>Wynagrodzenie ma postać prowizji od przychodów gracza (RevShare) lub jednorazowej opłaty (CPA);</li>
            <li>Umowy afiliacyjne <strong className="text-white">nie wpływają na nasze oceny</strong> — kasyna, które nie spełniają naszych standardów, nie są polecane niezależnie od umowy handlowej.</li>
          </ul>
          <p className="mt-2">
            Korzystanie z Serwisu jest dla użytkowników całkowicie bezpłatne.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Nasze standardy</h2>
          <p className="mb-3">Polecamy wyłącznie kasyna, które:</p>
          <ul className="space-y-2">
            {[
              'Posiadają ważną licencję od uznanego regulatora (Malta Gaming Authority, UKGC, Curaçao i in.);',
              'Stosują certyfikowany generator liczb losowych (RNG);',
              'Oferują narzędzia odpowiedzialnej gry (limity, samowykluczenie);',
              'Terminowo realizują wypłaty i posiadają przejrzysty regulamin bonusów;',
              'Nie były powiązane z poważnymi zarzutami nieuczciwych praktyk.',
            ].map((standard) => (
              <li key={standard} className="flex items-start gap-2">
                <span className="text-gold mt-0.5 shrink-0">✓</span>
                <span>{standard}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Odpowiedzialna gra</h2>
          <p>
            Jako portal poświęcony kasyninom online aktywnie promujemy zasady odpowiedzialnej gry.
            Hazard powinien być rozrywką, a nie sposobem na zarabianie pieniędzy. Jeśli potrzebujesz pomocy,
            odwiedź naszą stronę{' '}
            <Link href="/odpowiedzialna-gra" className="text-gold hover:underline">Odpowiedzialna Gra</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Kontakt</h2>
          <p>
            Masz pytania, sugestie lub chcesz zgłosić błąd? Napisz do nas:
          </p>
          <p className="mt-2">
            <a href="mailto:support@vulkanspiele.com" className="text-gold hover:underline">support@vulkanspiele.com</a>
          </p>
          <p className="mt-2 text-white/40 text-xs">
            Odpowiadamy na wiadomości w ciągu 1–2 dni roboczych.
          </p>
        </section>

      </div>
    </main>
  )
}
