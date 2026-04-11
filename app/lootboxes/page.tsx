import type { Metadata } from 'next'
import { lootboxes } from '@/data/lootboxes'

export const metadata: Metadata = {
  title: 'Lootboxy Kasynowe — Żar, Płomień, Iskra i Easter Box',
  description: 'Otwórz lootboxy od 15€ i zdobądź losowe nagrody: bonusy gotówkowe, darmowe spiny i obroty na kole fortuny. 4 rodzaje skrzynek, maksymalnie 3 zakupy dziennie.',
  openGraph: {
    title: 'Lootboxy Kasynowe — Żar, Płomień, Iskra i Easter Box',
    description: '4 rodzaje lootboxów od 15€: losowe nagrody — bonusy gotówkowe, free spiny, Koło Fortuny. Do 3 zakupów dziennie.',
    url: 'https://vulkanspiele-polska.pl/lootboxes/',
  },
}

const rules = [
  'Każdy typ lootboxa można kupić maksymalnie 3 razy dziennie. Limit zakupu odnawia się o godzinie 00:00 UTC następnego dnia kalendarzowego.',
  'Zakup lootboxa odbywa się z rzeczywistego salda.',
  'Dokładna kwota nagrody zostanie ujawniona po zakupie każdego lootboxa.',
  'Po zakupie nagrody będą dostępne w sekcji bonusów kasyna lub na twoim koncie osobistym.',
  'Zakłady z darmowymi spinami wynoszą: 0,2 EUR/USD/CAD/CHF, 0,8 PLN/PEN, 2 SEK/NOK, 150 CLP, 100 ARS.',
  'Jeśli nie możesz użyć swoich darmowych spinów z jakiegokolwiek powodu — skontaktuj się z naszym zespołem wsparcia.',
  'Aktywacja bonusów może być ograniczona w zależności od twojej lokalizacji lub przepisów regionalnych.',
  'Niewykorzystane bonusy wygasną i zostaną usunięte z twojego konta 3 dni po ich przyznaniu.',
  'Obowiązują ogólne warunki bonusów.',
]

const rewardIcon: Record<string, string> = {
  'Bonus pieniężny':                    '🔴',
  'Pieniądze na saldzie rzeczywistym':  '💰',
  'Darmowe obroty w najlepszej grze':   '🎰',
  'Koło Fortuny':                       '🎡',
  'Darmowe obroty':                     '🎰',
  'Pieniądze na saldzie':               '💰',
}

const easterBox  = lootboxes.find((l) => l.id === 'easter')!
const mainBoxes  = lootboxes.filter((l) => l.id !== 'easter')

export default function LootboxesPage() {
  return (
    <div>

      {/* ── 1. Hero баннер ── */}
      <section
        className="relative w-full overflow-hidden flex items-center"
        style={{ minHeight: '280px', background: 'linear-gradient(135deg, #1a0000 0%, #2d0005 50%, #0a0000 100%)' }}
      >
        <div
          className="relative z-10 px-16 py-10 w-full"
          style={{ maxWidth: '1280px', margin: '0 auto' }}
        >
          <h1 className="text-4xl font-black text-white mb-2">Lootboxy</h1>
          <p className="text-gray-300 text-sm mb-1">Odkryj niesamowite nagrody</p>
          <p className="text-gray-400 text-sm">
            Co jest w środku? Tylko jeden sposób, aby się przekonać — otwórz i ciesz się!
          </p>
        </div>
        <div
          className="absolute right-0 top-0 h-full"
          style={{
            width: '65%',
            maskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
          }}
        >
          <img
            src="/images/lootboxes/hero-chest.png"
            alt="Lootbox hero"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          />
        </div>
      </section>

      {/* ── 2. Три основные карточки ── */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8"
        style={{ maxWidth: '1280px', margin: '0 auto' }}
      >
        {mainBoxes.map((box) => (
          <div
            key={box.id}
            className="relative rounded-2xl overflow-hidden flex flex-col cursor-pointer group"
            style={{
              background: 'linear-gradient(180deg, #1a0000 0%, #0d0000 100%)',
              border: '1px solid #3a0000',
              boxShadow: `0 8px 40px rgba(0,0,0,0.5), 0 0 20px ${box.glowColor}22`,
            }}
          >
            {/* Картинка — полная ширина сверху */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={box.image}
                alt={box.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              {/* Свечение снизу картинки */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24"
                style={{ background: `linear-gradient(to top, #0d0000, transparent)` }}
              />
              {/* Бейдж цены */}
              <div
                className="absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-black"
                style={{ background: '#FFD700', color: '#000' }}
              >
                €{box.price}
              </div>
            </div>

            {/* Контент */}
            <div className="flex flex-col items-center text-center px-6 pb-6 pt-4">
              <h3 className="text-white font-black text-2xl mb-3">{box.name}</h3>

              {/* Бейдж наград */}
              <span
                className="text-xs font-bold px-4 py-1 rounded-full mb-4"
                style={{ background: '#1a0000', border: `1px solid ${box.glowColor}66`, color: '#FFD700' }}
              >
                Zdobądź {box.rewardCount} nagród
              </span>

              {/* Иконки типов наград */}
              <div className="flex gap-3 mb-6">
                {box.rewardTypes.map((type, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
                    style={{ background: '#1a0000', border: '1px solid #2a0000' }}
                    title={type}
                  >
                    {rewardIcon[type] ?? '🎁'}
                  </div>
                ))}
              </div>

              {/* Кнопки */}
              <div className="flex items-center gap-2 w-full">
                <button
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm text-gray-500 hover:text-white flex-shrink-0 transition"
                  style={{ border: '1px solid #3a0000', background: '#110000' }}
                >
                  ⓘ
                </button>
                <button
                  className="flex-1 font-black text-sm py-3 rounded-lg hover:bg-yellow-400 transition"
                  style={{ background: '#FFD700', color: '#000' }}
                >
                  Otwórz dla {box.price}€
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── 3. Easter Box ── */}
      <div className="px-4 pb-8" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          className="relative rounded-2xl overflow-hidden flex flex-col md:flex-row"
          style={{
            background: 'linear-gradient(135deg, #1a0000 0%, #0d0000 100%)',
            border: '1px solid #5a2000',
            boxShadow: '0 8px 40px rgba(200,80,0,0.2)',
          }}
        >
          {/* Картинка — половина ширины на десктопе */}
          <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden flex-shrink-0">
            <img
              src={easterBox.image}
              alt={easterBox.name}
              className="w-full h-full object-cover object-center"
            />
            <div
              className="absolute inset-0 md:hidden"
              style={{ background: 'linear-gradient(to top, #0d0000 0%, transparent 60%)' }}
            />
            <div
              className="absolute top-0 right-0 bottom-0 w-24 hidden md:block"
              style={{ background: 'linear-gradient(to right, transparent, #0d0000)' }}
            />
          </div>

          {/* Контент */}
          <div className="flex flex-col justify-center p-8 md:w-1/2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: '#5a2000', color: '#FFD700' }}>
                🐣 WIELKANOC
              </span>
            </div>
            <h3 className="text-white font-black text-3xl mb-1">{easterBox.name}</h3>
            <p className="text-gold font-black text-2xl mb-3">€{easterBox.price}</p>
            <p className="text-gray-400 text-sm mb-5">
              Otwórz skrzynię i zdobądź {easterBox.rewardCount} losowych nagród z poniższej listy!
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {easterBox.rewardTypes.map((type) => (
                <span key={type} className="flex items-center gap-1.5 text-xs text-gray-300 px-3 py-1.5 rounded-full" style={{ background: '#1a0800', border: '1px solid #3a1500' }}>
                  <span>{rewardIcon[type] ?? '🎁'}</span>
                  {type}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                className="text-gray-400 text-sm px-4 py-2.5 rounded-lg hover:border-gray-500 flex items-center gap-1.5 transition"
                style={{ border: '1px solid #5a2000' }}
              >
                ⓘ Info
              </button>
              <button
                className="flex-1 text-black font-black text-sm py-2.5 rounded-lg hover:bg-yellow-400 transition"
                style={{ background: '#FFD700' }}
              >
                Otwórz dla {easterBox.price}€
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. Regulamin ── */}
      <section
        className="px-4 pb-12"
        style={{ maxWidth: '1280px', margin: '0 auto' }}
      >
        <h2 className="text-base font-bold text-white mb-4">Regulamin</h2>
        <div
          className="rounded-xl p-6"
          style={{ background: '#110000', border: '1px solid #2a0000' }}
        >
          <ol className="space-y-3">
            {rules.map((rule, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-400">
                <span className="font-bold flex-shrink-0" style={{ color: '#CC0000' }}>{i + 1}.</span>
                <span>{rule}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SEO Text */}
      <div className="h-px bg-[#1e0000] mb-12" />
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-4">
          <h2 className="text-xl font-black text-white mb-3">Vulkan Vegas Lootboxy Kasynowe: Zasady, Limity i Nagrody 2026</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Poznaj, jak działają skrzynki z łupami w Vulkan Vegas, jakie nagrody możesz zdobyć i jakie obowiązują limity. Pokazujemy krok po kroku aktywację, odbiór i zasady odpowiedzialnej gry w Polsce &mdash; z praktycznymi wskazówkami na 2026.</p>

          <h3 className="text-lg font-black text-white mb-2">Czym są lootboxy kasynowe w Vulkan Vegas i jak działają?</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Lootboxy (skrzynki z łupami) w kontekście kasyna online to element grywalizacji, w którym po spełnieniu określonych warunków (np. misji promocyjnych, poziomu w programie lojalnościowym lub akcji sezonowej) można otworzyć skrzynkę i odebrać losowo przyznaną nagrodę. Mechanika opiera się na losowości zdarzenia (RNG), jasno zdefiniowanej puli nagród oraz zasadach promocji opisanych w regulaminie operatora, w tym limitach czasowych i ewentualnych wymogach obrotu dla bonusów.</p>

          <h4 className="text-base font-bold text-white/80 mb-2">Jak działa skrzynka: losowość, dropy, poziomy rzadkości</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Otwarcie skrzynki to pojedyncze losowanie z puli nagród. Zdarzenie jest niezależne (wynik poprzednich otwarć nie wpływa na kolejne), a rezultat określa &quot;drop&quot; &mdash; konkretna pozycja z puli. Pula bywa logicznie podzielona na poziomy rzadkości (np. zwykły, rzadki, epicki, legendarny), co porządkuje wartość i częstość występowania nagród. W branży gier losowych prawidłowo zaimplementowana losowość opiera się na generatorze liczb losowych (RNG), który determinuje wynik w ułamku sekundy w momencie otwarcia.</p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li><strong className="text-white/70">RNG (Random Number Generator)</strong> &mdash; algorytm generujący wyniki losowania w sposób nieprzewidywalny i niezależny od poprzednich zdarzeń.</li>
            <li><strong className="text-white/70">Drop</strong> &mdash; faktycznie przyznana nagroda w danym otwarciu skrzynki (element z puli nagród).</li>
            <li><strong className="text-white/70">Pula nagród</strong> &mdash; zestaw możliwych świadczeń; może być segmentowana według rzadkości.</li>
            <li><strong className="text-white/70">Niezależność zdarzeń</strong> &mdash; wynik jednego otwarcia nie &quot;ustawia&quot; kolejnego; brak &quot;pamięci&quot; systemu.</li>
            <li><strong className="text-white/70">Poziomy rzadkości</strong> &mdash; kategorie porządkujące nagrody (np. zwykły/rzadki/epicki/legendarny); nie oznaczają gwarancji konkretnego procentu bez wyraźnego ujawnienia takich stawek w regulaminie.</li>
          </ul>

          <h4 className="text-base font-bold text-white/80 mb-2">Jakie nagrody mogą wypaść: free spiny, bonusy, cashback</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Najczęściej w skrzynkach kasynowych spotyka się świadczenia użytkowe, które da się od razu wykorzystać w serwisie. Ich realna wartość zależy od powiązanych warunków (np. stawek spinów, wymogów obrotu, limitów wypłat, gier kwalifikowanych) opisanych w regulaminie promocji.</p>
          <p className="text-gray-500 text-sm leading-relaxed mb-3"><strong className="text-white/70">Free spiny</strong></p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Określona liczba obrotów na wskazanych automatach.</li>
            <li>Stała stawka spina i lista gier kwalifikowanych.</li>
            <li>Wygrane ze spinów mogą podlegać wymogowi obrotu lub limitowi wypłaty.</li>
          </ul>
          <p className="text-gray-500 text-sm leading-relaxed mb-3"><strong className="text-white/70">Bonus środków (saldo bonusowe)</strong></p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Dodawane do konta jako środki promocyjne.</li>
            <li>Najczęściej z wymogiem obrotu i ograniczeniami stawek przy grze bonusowej.</li>
            <li>Po spełnieniu warunków środki mogą stać się wypłacalne.</li>
          </ul>
          <p className="text-gray-500 text-sm leading-relaxed mb-3"><strong className="text-white/70">Cashback</strong></p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Zwrot części poniesionych strat w określonym okresie rozliczeniowym.</li>
            <li>Może występować jako gotówka (bez obrotu) lub bonus (z obrotem) &mdash; zgodnie z regulaminem akcji.</li>
          </ul>
          <p className="text-gray-500 text-sm leading-relaxed mb-3"><strong className="text-white/70">Vouchery turniejowe i bilety do wydarzeń</strong></p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Wejściówki do rankingów lub eventów specjalnych.</li>
            <li>Często ograniczone czasowo i przypisane do konkretnej kampanii.</li>
          </ul>
          <p className="text-gray-500 text-sm leading-relaxed mb-3"><strong className="text-white/70">Punkty lojalnościowe / poziomy VIP</strong></p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Punkty wpływające na status w programie lojalnościowym.</li>
            <li>Wymienialne na bonusy, spiny lub inne świadczenia zgodnie z katalogiem nagród.</li>
          </ul>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Sprawdź warunki: wymóg obrotu, limit wypłat, ważność nagrody, gry kwalifikowane.</li>
            <li>Aktywuj nagrodę w profilu/promocjach, jeśli to wymagane przez zasady akcji.</li>
            <li>Wykorzystaj świadczenie w terminie; po wygaśnięciu może nie być możliwe jego ponowne przyznanie.</li>
          </ul>

          <h4 className="text-base font-bold text-white/80 mb-2">Czy lootboxy mają RTP i przejrzyste stawki dropu?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">RTP (Return to Player) to parametr przypisany do gier hazardowych (np. automatów), który statystycznie opisuje długoterminową wypłatę w stosunku do stawek. Lootbox jako mechanika promocyjna nie jest samodzielną grą z ustalonym RTP &mdash; to jednorazowe losowanie nagrody z puli promocji. Dlatego skrzynki zwykle nie mają własnego, formalnego RTP. Przejrzystość polega natomiast na jasnym opisaniu zasad: puli nagród, warunków kwalifikacji, limitów, ważności i ewentualnych stawek dropu, jeśli operator je ujawnia w regulaminie danej akcji.</p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>RTP dotyczy gier (np. slotów), w których wykorzystasz wygrane lub free spiny; warto sprawdzać RTP gier kwalifikowanych.</li>
            <li>Stawki dropu (jeśli publikowane) powinny znajdować się w regulaminie promocji lub opisie akcji sezonowej.</li>
            <li>Transparentność obejmuje również wymogi obrotu i ograniczenia stawek przy grze bonusowej.</li>
            <li>W UE nie istnieje jednolity, powszechnie obowiązujący standard ujawniania drop rate&apos;ów dla wszystkich promocji; obowiązuje jednak wymóg jasnych i niedwuznacznych informacji konsumenckich.</li>
          </ul>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">W praktyce przejrzystość oznacza: pełny regulamin dostępny przed udziałem, jasny opis puli nagród i warunków ich użycia, a w przypadku publikowania stawek dropu &mdash; jednoznaczne przypisanie prawdopodobieństw do poszczególnych pozycji.</p>

          <div className="h-px bg-[#1e0000] my-6" />

          <h3 className="text-lg font-black text-white mb-2">Jak zdobywać i odbierać nagrody ze skrzynek w 2026?</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Aby skutecznie korzystać ze skrzynek (lootboxów) i ich nagród, potrzebujesz w pełni zweryfikowanego konta, prawidłowej aktywacji akcji promocyjnych oraz znajomości warunków wykorzystania i ewentualnej wypłaty świadczeń. Poniżej znajdziesz usystematyzowane wytyczne: od rejestracji i KYC, przez aktywację misji i kodów, aż po obrót bonusu i zasady wypłat.</p>

          <h4 className="text-base font-bold text-white/80 mb-2">Rejestracja, KYC i kwalifikacja do udziału w akcji</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Rejestracja konta i weryfikacja tożsamości (KYC) są standardem w branży gier online zgodnie z przepisami o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu. W Polsce uczestnictwo w grach hazardowych jest dozwolone wyłącznie dla osób pełnoletnich (18+). Udział w akcjach promocyjnych (w tym skrzynkach) zwykle wymaga aktywnego konta, potwierdzenia tożsamości i spełnienia kryteriów danej kampanii (np. okresu trwania, minimalnej aktywności).</p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Rejestracja: utworzenie konta, akceptacja regulaminu i polityki prywatności.</li>
            <li>Weryfikacja wieku i tożsamości (KYC): potwierdzenie danych dokumentem tożsamości; w razie potrzeby dodatkowa weryfikacja (np. selfie, wideoweryfikacja).</li>
            <li>Weryfikacja adresu zamieszkania: potwierdzenie miejsca zamieszkania dokumentem z danymi gracza.</li>
            <li>Weryfikacja metody płatności: korzystanie z metod należących do posiadacza konta.</li>
            <li>Kwalifikacja do akcji: spełnienie warunków wskazanych w regulaminie (np. czas trwania, limit otwarć, wymagane czynności).</li>
          </ul>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Pamiętaj, że każda promocja ma własny regulamin. Zwróć uwagę na: okres obowiązywania (daty i godziny), listę gier kwalifikowanych, limity liczby otwarć skrzynek, ograniczenia terytorialne i wymagania techniczne.</p>

          <h4 className="text-base font-bold text-white/80 mb-2">Jak aktywować misje, kody i skrzynki sezonowe?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Aktywacja zwykle przebiega poprzez panel &quot;Promocje&quot;, &quot;Wydarzenia&quot; lub dedykowany &quot;Lootbox Center&quot;. Niektóre kampanie wymagają ręcznego &quot;opt-in&quot;, inne przyznają postęp automatycznie po spełnieniu warunków. Kody promocyjne (jeśli dostępne) wpisuje się w sekcji bonusów lub podczas depozytu, a skrzynki sezonowe otwierasz po zebraniu wymaganych punktów/postępu.</p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Wejdź do sekcji promocji i przeczytaj regulamin akcji (zasady misji, czas trwania, nagrody, ograniczenia).</li>
            <li>Wykonaj &quot;opt-in&quot; (jeśli wymagany), aby naliczał się postęp misji/sesji sezonowej.</li>
            <li>Wpisz kod promocyjny w odpowiednim polu (jeśli przewidziano) i potwierdź jego aktywację.</li>
            <li>Realizuj misje (np. obrót w kwalifikowanych grach, określone zadania dzienne/tygodniowe).</li>
            <li>Po zebraniu wymaganego postępu otwórz skrzynkę i odbierz nagrodę w panelu nagród.</li>
          </ul>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Zwróć uwagę na strefę czasową i odświeżanie misji (np. dzienne/tygodniowe resetowanie zgodnie z regulaminem).</li>
            <li>Sprawdź, czy kod nie ma ograniczonej liczby użyć lub daty ważności.</li>
            <li>Upewnij się, że grasz na kwalifikowanych tytułach i spełniasz minimalne progi (jeśli przewidziano).</li>
            <li>Włącz powiadomienia w profilu, aby nie przegapić przyznanych skrzynek i terminów odbioru.</li>
          </ul>

          <h4 className="text-base font-bold text-white/80 mb-2">Jak wypłacić lub obrócić nagrodę &mdash; warunki i terminy</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Rodzaj nagrody (gotówka, free spiny, bonus) determinuje zasady jej wykorzystania i ewentualnej wypłaty. Free spiny i bonusy środków często podlegają warunkom obrotu (wagering), limitom stawek w trakcie gry bonusowej, ograniczeniom dotyczących gier oraz terminom ważności. Wypłata środków jest możliwa po spełnieniu zasad promocji oraz po pełnej weryfikacji KYC.</p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Obrót (wagering): zanim bonus/wygrane ze spinów staną się wypłacalne, muszą zostać przetworzone zgodnie z regulaminem.</li>
            <li>Wkład gier do obrotu: często różny w zależności od kategorii; sloty zazwyczaj mają najwyższy wkład, gry stołowe i na żywo &mdash; niższy lub wyłączony (sprawdź regulamin konkretnej akcji).</li>
            <li>Limity stawek: bonusowa gra bywa ograniczona maksymalną stawką na spin/zakład; przekroczenie może unieważnić postęp z obrotu.</li>
            <li>Ważność: nagrody i obrót mają terminy; po upływie ważności środki bonusowe mogą wygasnąć.</li>
            <li>Wykluczenia: niektóre gry, jackpoty progresywne lub funkcje kupna bonusu mogą być wyłączone z obrotu (zawsze zweryfikuj listę wyjątków).</li>
            <li>Wypłata: możliwa po spełnieniu warunków i KYC; zwykle wypłaca się na tę samą metodę, którą dokonano depozytu.</li>
          </ul>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Aktywuj i odbierz nagrodę w profilu (jeśli wymagane), sprawdzając warunki użycia.</li>
            <li>Wykorzystaj nagrodę zgodnie z listą gier kwalifikowanych i limitami stawek.</li>
            <li>Po zakończeniu obrotu sprawdź status środków (bonus &rarr; saldo realne).</li>
            <li>Złóż dyspozycję wypłaty po potwierdzeniu, że spełniono wszystkie wymogi (w tym KYC).</li>
          </ul>

          <div className="h-px bg-[#1e0000] my-6" />

          <h3 className="text-lg font-black text-white mb-2">Lootboxy czy inne promocje Vulkan Vegas &mdash; co wybrać i kiedy?</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Wybór między skrzynkami (lootboxami), turniejami i misjami zależy od Twojego celu: szybkiej, losowej nagrody (skrzynki), rywalizacji o pozycję w rankingu (turnieje) lub realizacji jasno określonych zadań z gwarantowaną wypłatą po spełnieniu warunków (misje). Poniżej znajdziesz praktyczne porównanie mechanik, wskazówki dotyczące zarządzania budżetem i momenty, w których otwieranie skrzynek może być najbardziej racjonalne.</p>

          <h4 className="text-base font-bold text-white/80 mb-2">Skrzynki vs. turnieje i misje &mdash; plusy i minusy</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Każdy typ promocji opiera się na innej logice przyznawania nagród. Skrzynki dają szybkie, losowe rozstrzygnięcie, turnieje uzależniają nagrodę od pozycji w rankingu, a misje premiują wykonanie zdefiniowanych kroków.</p>
          <p className="text-gray-500 text-sm leading-relaxed mb-3"><strong className="text-white/70">Skrzynki (lootboxy)</strong></p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Plusy: natychmiastowy wynik po otwarciu; zróżnicowana pula nagród; prosta aktywacja.</li>
            <li>Minusy: wynik zależny od losowości; warunki użycia nagród (np. wymagany obrót, ważność) mogą ograniczać realną wartość.</li>
          </ul>
          <p className="text-gray-500 text-sm leading-relaxed mb-3"><strong className="text-white/70">Turnieje</strong></p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Plusy: przejrzyste kryteria rankingu; z góry znana struktura nagród dla pozycji w tabeli.</li>
            <li>Minusy: nagroda zależy od wyników innych graczy; wymagany czas i aktywność w oknie turnieju.</li>
          </ul>
          <p className="text-gray-500 text-sm leading-relaxed mb-3"><strong className="text-white/70">Misje</strong></p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Plusy: jasno zdefiniowane zadania; nagroda przyznawana po spełnieniu warunków misji.</li>
            <li>Minusy: konieczność gry na określonych tytułach/stawkach; limity czasowe na wykonanie kroków.</li>
          </ul>

          <h4 className="text-base font-bold text-white/80 mb-2">Jak zarządzać budżetem i limitami dziennymi?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Skuteczne zarządzanie budżetem to podstawa odpowiedzialnej gry: ustalasz z góry, ile możesz przeznaczyć na udział w promocjach, a następnie pilnujesz limitów bez wyjątków.</p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Ustal limity: dzienny i tygodniowy budżet na promocje (osobno dla skrzynek, turniejów i misji) oraz maksymalny czas sesji.</li>
            <li>Dziel budżet na porcje: alokuj stały procent na pojedynczą aktywność (np. 5&ndash;10% dziennego budżetu na skrzynki), aby uniknąć szybkiego wyczerpania środków.</li>
            <li>Wyznacz kryteria stop: zakończ udział po zrealizowaniu planu (np. otwarcie X skrzynek/misja) lub po osiągnięciu progu strat/zysków.</li>
            <li>Unikaj eskalacji stawek: nie zwiększaj stawek ani liczby otwarć, by &quot;nadrobić&quot; nieudane wyniki; trzymaj się planu.</li>
            <li>Monitoruj wykorzystanie nagród: sprawdzaj ważność, wymogi obrotu i listę gier; planuj sesje tak, by zdążyć spełnić warunki bez pośpiechu.</li>
            <li>Wykorzystuj narzędzia kontroli: jeśli dostępne, ustaw limity depozytu, limity czasu lub przerwy w grze w profilu konta.</li>
          </ul>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Rejestruj sesje i wydatki (np. w arkuszu), by mieć pełną historię aktywności i lepiej szacować realny koszt promocji.</li>
            <li>Planuj z wyprzedzeniem dni bez gry &mdash; przerwy pomagają trzymać się budżetu i ograniczają decyzje impulsywne.</li>
          </ul>

          <h4 className="text-base font-bold text-white/80 mb-2">Pro tipy: kiedy otwierać skrzynki, by zyskać najwięcej?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Otwieranie skrzynek warto zsynchronizować z własnym planem gry i warunkami akcji. Celem jest maksymalizacja użyteczności nagrody (np. możliwość natychmiastowego wykorzystania free spinów) przy jednoczesnym zachowaniu dyscypliny budżetowej.</p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Gdy możesz od razu wykorzystać nagrodę: jeśli masz czas na grę w kwalifikowanych tytułach i spełnienie ewentualnego obrotu przed upływem ważności.</li>
            <li>Na początku okna promocyjnego: zyskujesz więcej czasu na realizację warunków użycia nagród.</li>
            <li>Po weryfikacji regulaminu: upewnij się, że lista gier, stawki i limity są dla Ciebie akceptowalne; unikaj otwarć &quot;w ciemno&quot;.</li>
            <li>Gdy nie łączysz akcji w sposób sprzeczny z zasadami: sprawdź, czy regulamin pozwala łączyć skrzynki z innymi promocjami; w razie zakazu &mdash; wybierz jedną ścieżkę.</li>
            <li>Po ustawieniu limitów: otwieraj skrzynki tylko, gdy w profilu masz aktywne limity (czas/depozyt), by kontrolować sesję.</li>
            <li>Z zachowaniem hierarchii celów: jeśli realizujesz misje z gwarantowaną nagrodą w krótkim terminie, rozważ ich ukończenie przed otwarciem skrzynek, aby nie rozpraszać budżetu.</li>
          </ul>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Sprawdź ważność skrzynki i nagród, listę gier oraz wymogi obrotu.</li>
            <li>Zapewnij sobie okno czasowe na realizację warunków (bez presji czasu).</li>
            <li>Otwórz skrzynkę i natychmiast zaplanuj wykorzystanie otrzymanego świadczenia zgodnie z regulaminem.</li>
          </ul>

          <div className="h-px bg-[#1e0000] my-6" />

          <h3 className="text-lg font-black text-white mb-2">Czy to bezpieczne i legalne w Polsce? Zasady odpowiedzialnej gry</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Bezpieczeństwo i legalność udziału w promocjach z elementem losowości (w tym skrzynkach/lootboxach) zależą od zgodności operatora z przepisami kraju zamieszkania gracza, przejrzystości zasad promocji oraz od stosowania narzędzi odpowiedzialnej gry. W Polsce obowiązuje Ustawa o grach hazardowych, a w UE brak jest jednolitej, szczegółowej regulacji dotyczącej lootboxów &mdash; podejście zależy od kraju.</p>

          <h4 className="text-base font-bold text-white/80 mb-2">Jak prawo w Polsce i UE podchodzi do lootboxów?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Polskie i unijne regulacje nie zawierają jednolitej definicji &quot;lootboxa&quot; dla wszystkich przypadków. Ocena prawna zależy zwykle od tego, czy mechanika spełnia przesłanki gry losowej oraz czy nagrody mają wymierną wartość i są transferowalne. W praktyce w branży gier online lootboxy w promocjach kasynowych traktowane są jako akcje marketingowe, na które mają zastosowanie ogólne wymogi prawne: przejrzyste warunki, weryfikacja wieku i tożsamości, zgodność z AML/CFT oraz ochrona konsumenta.</p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li><strong className="text-white/70">Polska:</strong> podstawą jest Ustawa z 19 listopada 2009 r. o grach hazardowych. Udział osób niepełnoletnich (poniżej 18 lat) jest zakazany. Każda promocja powinna posiadać jasny regulamin, a operator &mdash; stosować KYC/AML.</li>
            <li><strong className="text-white/70">UE:</strong> brak wspólnej regulacji sektorowej dotyczącej lootboxów. Parlament Europejski w rezolucji z 10.01.2023 r. wezwał do większej przejrzystości, m.in. co do mechanik monetyzacji.</li>
            <li><strong className="text-white/70">Przykład różnic krajowych w UE:</strong> Belgia sklasyfikowała płatne lootboxy jako gry losowe, egzekwując lokalne przepisy. W innych państwach podejścia są bardziej miękkie (wymogi informacyjne, klasyfikacja wiekowa).</li>
          </ul>

          <h4 className="text-base font-bold text-white/80 mb-2">Jakie limity, kontrola wieku i samowykluczenie działają?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Odpowiedzialna gra opiera się na trzech filarach: weryfikacji wieku/tożsamości (KYC), limitach zachowań oraz realnych możliwościach przerwania gry (time-out, samowykluczenie). Narzędzia te są standardem branżowym i powinny być dostępne w ustawieniach konta lub w sekcji odpowiedzialnej gry operatora.</p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Weryfikacja wieku (18+): sprawdzenie dokumentu tożsamości i danych osobowych; blokada dostępu dla osób niepełnoletnich.</li>
            <li>Limity depozytu/straty/stawek: ustalony przez gracza pułap kwotowy na dzień/tydzień/miesiąc; automatyczne blokowanie dalszych wpłat/zakładów po osiągnięciu limitu.</li>
            <li>Limit czasu sesji i przypomnienia (reality check): kontroluje długość gry i wyświetla komunikaty o czasie.</li>
            <li>Time-out (przerwa): tymczasowe zawieszenie możliwości gry na określony okres (np. 24h, 7 dni, 30 dni).</li>
            <li>Samowykluczenie: blokada dostępu do konta i/lub ofert promocyjnych na dłuższy okres; najczęściej od 6 miesięcy wzwyż.</li>
            <li>Filtry treści i ograniczenia marketingowe: wyłączenie e-maili/SMS/powiadomień o promocjach; mniej bodźców do impulsywnej gry.</li>
          </ul>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Dodatkowe wsparcie możesz uzyskać w organizacjach pomocowych. W UE obowiązują także przepisy o ochronie konsumenta i danych osobowych (RODO), które wymagają jasnego informowania o warunkach promocji i przetwarzaniu danych. Jeżeli chcesz skorzystać z pomocy zewnętrznej, rozważ kontakt z lokalnymi organizacjami lub grupami wsparcia (np. Anonimowi Hazardziści).</p>

          <h4 className="text-base font-bold text-white/80 mb-2">Gdzie sprawdzić regulamin i transparentność promocji?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Transparentność oznacza łatwy dostęp do pełnego regulaminu promocji, jasne opisanie puli nagród i warunków ich wykorzystania, a także wskazanie ograniczeń (czas, limity, gry wykluczone). Przed udziałem w akcji promocyjnej sprawdź miejsca, w których operator publikuje informacje wiążące.</p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Sekcja &quot;Promocje&quot;/&quot;Bonusy&quot; na stronie operatora: regulaminy akcji, opisy nagród, ograniczenia i terminy.</li>
            <li>Warunki ogólne (T&amp;C) oraz zasady bonusów: informacje o wymogach obrotu, limitach stawek i listach gier.</li>
            <li>Karta gry (RTP, zasady tytułu): przydatna, jeśli nagroda to free spiny na konkretnych automatach.</li>
            <li>Polityka odpowiedzialnej gry: dostępne limity, procedury time-out/samowykluczenia, dane kontaktowe do wsparcia.</li>
            <li>Obsługa klienta: czat/e-mail &mdash; poproś o link do regulaminu danej akcji lub o potwierdzenie warunków na piśmie.</li>
          </ul>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Przeczytaj pełny regulamin konkretnej akcji i zapisz jego kopię (PDF/zrzut ekranu) na potrzeby ewentualnej reklamacji.</li>
            <li>Zweryfikuj ważność i ograniczenia: okres obowiązywania, liczba otwarć skrzynek, gry kwalifikowane i wykluczone.</li>
            <li>Sprawdź, czy operator publikuje stawki dropu (jeśli dotyczy) oraz jasno opisuje wymogi obrotu i limity stawek.</li>
          </ul>

          <div className="h-px bg-[#1e0000] my-6" />

          <h3 className="text-lg font-black text-white mb-2">Druga strona medalu: jaki jest najsilniejszy argument przeciw lootboxom?</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Najsilszy argument przeciw skrzynkom (lootboxom) dotyczy zwiększania podatności na impulsywne decyzje i efekt FOMO (strach przed przegapieniem), wynikających z ograniczeń czasowych, zmiennego wzmocnienia (nieprzewidywalnych rezultatów) i poczucia &quot;prawie wygranej&quot;. W połączeniu z presją czasu i resetami sezonowymi może to prowadzić do przeszarżowania budżetu, częstszego otwierania skrzynek niż planowano i gorszej oceny realnej wartości nagród.</p>

          <h4 className="text-base font-bold text-white/80 mb-2">Czy skrzynki wzmacniają FOMO i impulsywne decyzje?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Mechanika skrzynek korzysta z losowości i często ograniczeń czasowych (okna akcji, resety sezonowe), co potęguje FOMO i sprzyja szybkim, emocjonalnym decyzjom. Dodatkowo efekt &quot;prawie trafiłem&quot; (near-miss) i zmienne wzmocnienie (czasem nagroda, czasem nie) mogą wzmacniać chęć &quot;jeszcze jednego&quot; otwarcia.</p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>FOMO (ograniczenia czasowe i limit liczby otwarć): presja, że oferta &quot;zaraz zniknie&quot;.</li>
            <li>Zmienne wzmocnienie: nieprzewidywalny rezultat kolejnych otwarć zwiększa pobudzenie i skłonność do kontynuacji.</li>
            <li>Near-miss: wrażenie &quot;o włos od lepszej nagrody&quot; może sprzyjać ponownym próbom.</li>
            <li>Iluzja kontroli: wiara, że &quot;timing&quot; lub sekwencja otwarć poprawi wynik &mdash; mimo niezależności zdarzeń.</li>
            <li>Chasing (odrabianie strat): po mniej korzystnym dropie wzrasta pokusa zwiększenia aktywności.</li>
          </ul>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Przed otwarciem określ maksymalną liczbę skrzynek na sesję i trzymaj się planu.</li>
            <li>Unikaj decyzji pod presją czasu; jeśli kończy się okno akcji, oceń, czy realnie zdążysz wykorzystać potencjalną nagrodę.</li>
            <li>Załóż przerwy między otwarciami, aby ocenić chłodno wartość uzyskanych świadczeń.</li>
          </ul>

          <h4 className="text-base font-bold text-white/80 mb-2">Jakie zabezpieczenia w Vulkan Vegas redukują ryzyko?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Redukcję ryzyka zapewniają standardowe narzędzia odpowiedzialnej gry dostępne u licencjonowanych operatorów. Ich celem jest kontrola tempa i skali aktywności, ograniczenie bodźców oraz umożliwienie przerw. Zawsze weryfikuj, które ustawienia są dostępne u operatora i jak je aktywować.</p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Limity depozytu/straty/stawek &mdash; twarde progi dzienne/tygodniowe/miesięczne.</li>
            <li>Limity czasu sesji i przypomnienia (reality check) &mdash; kontrola długości gry.</li>
            <li>Time-out (krótka przerwa) i samowykluczenie &mdash; tymczasowa lub dłuższa blokada gry.</li>
            <li>Wyciszenie marketingu &mdash; rezygnacja z powiadomień o promocjach, by zmniejszyć presję bodźców.</li>
            <li>Weryfikacja wieku/tożsamości (KYC) &mdash; wyklucza udział osób niepełnoletnich i chroni przed nadużyciami.</li>
          </ul>

          <h4 className="text-base font-bold text-white/80 mb-2">Kto nie powinien korzystać z lootboxów i dlaczego?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Udział w skrzynkach nie jest zalecany dla osób, które mogą odczuwać silną presję bodźców lub mają trudność z utrzymaniem budżetu.</p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Osoby niepełnoletnie &mdash; udział jest prawnie zabroniony; weryfikacja wieku eliminuje dostęp.</li>
            <li>Osoby z historią problemów hazardowych &mdash; mechanika zmiennego wzmocnienia może utrudniać kontrolę impulsów.</li>
            <li>Osoby w stresie, zmęczone lub pod wpływem emocji &mdash; większe ryzyko decyzji impulsywnych i &quot;pościgu za stratą&quot;.</li>
            <li>Osoby bez zdefiniowanego budżetu &mdash; brak limitów zwiększa prawdopodobieństwo nadmiernych wydatków.</li>
            <li>Osoby, które nie mogą w najbliższym czasie wykorzystać nagród &mdash; ryzyko utraty wartości przez upływ terminów ważności.</li>
          </ul>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Jeżeli zauważasz trudność w kontroli &mdash; włącz limity lub skorzystaj z time-out/samowykluczenia.</li>
            <li>Wybieraj działania o przewidywalnym koszcie i harmonogramie (np. misje), jeśli potrzebujesz większej kontroli.</li>
            <li>Planuj sesje wyłącznie wtedy, gdy masz czas na spokojną ocenę regulaminu i warunków użycia nagród.</li>
          </ul>

          <div className="h-px bg-[#1e0000] my-6" />

          <h3 className="text-lg font-black text-white mb-2">Często Zadawane Pytania</h3>

          <h4 className="text-base font-bold text-white/80 mb-2">Jak policzyć realną wartość (EV) lootboxa Vulkan Vegas, gdy znam stawki dropu?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">EV to suma iloczynów prawdopodobieństwa i wartości realnej każdej nagrody po uwzględnieniu obrotu, limitów i ważności. W praktyce liczysz EV jako sumę p_i &times; V_i_real dla wszystkich pozycji z puli. Przykład ilustracyjny: 40% szans na 50 free spinów po 0,50 PLN w slocie 96% RTP z obrotem 20x na wygranych, 50% na 20 PLN cashback 0x, 10% na 100 PLN bonus 25x. Free spiny: oczekiwane wygrane 50 &times; 0,50 &times; 0,96 = 24 PLN, obrót 20x wymaga 480 PLN, oczekiwana strata od krawędzi domu 4% to 19,2 PLN, więc wartość realna &asymp; 4,8 PLN, wkład do EV = 0,4 &times; 4,8 = 1,92 PLN. Cashback 20 PLN 0x daje wkład 0,5 &times; 20 = 10 PLN. Bonus 100 PLN 25x przy 4% krawędzi ma wartość przybliżoną 100 &times; (1 &minus; 0,04 &times; 25) = 0 PLN, wkład 0,1 &times; 0 = 0 PLN, zatem łączny EV pudełka w przykładzie &asymp; 11,92 PLN.</p>

          <h4 className="text-base font-bold text-white/80 mb-2">Jak ocenić wartość lootboxa, gdy stawki dropu nie są publikowane?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Bez znanych prawdopodobieństw EV jest niepoliczalne i należy traktować skrzynkę jako rozrywkę o nieokreślonej wartości. Możesz zrobić analizę scenariuszy: w najgorszym wypadku przyjmij najniższą możliwą nagrodę i jej wartość po obrocie, w najlepszym wypadku najwyższą nagrodę i limity wypłaty, a decyzję podejmij tylko wtedy, gdy nawet konserwatywny scenariusz ma sens dla Twojego budżetu. Gdy brak stawek dropu, wyższy priorytet mają przejrzystość regulaminu, brak obrotu i brak limitu maksymalnej wypłaty.</p>

          <h4 className="text-base font-bold text-white/80 mb-2">Jak szybko i poprawnie przeliczyć free spiny na złotówki po wymogu obrotu?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Użyj wzoru przybliżonego: wartość realna FS &asymp; liczba spinów &times; stawka &times; RTP &minus; (krawędź domu &times; wymagany obrót &times; liczba spinów &times; stawka). Przykład: 100 free spinów po 0,20 PLN, RTP 96%, obrót 15x na wygranych; oczekiwane wygrane 100 &times; 0,20 &times; 0,96 = 19,20 PLN, wymagany obrót 15 &times; 19,20 = 288 PLN, oczekiwana strata przy 4% to 11,52 PLN, więc wartość realna &asymp; 7,68 PLN. Ten model jest uproszczeniem; zawsze porównaj z regulaminem konkretnej akcji.</p>

          <h4 className="text-base font-bold text-white/80 mb-2">Czy łączenie lootboxów Vulkan Vegas z innymi bonusami może obniżyć wartość nagród?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Tak, jeśli obowiązuje zasada jednego aktywnego bonusu lub zachodzi konflikt warunków, część obrotu lub nagród może nie zostać zaliczona. Typowe ryzyka to blokada naliczania obrotu, różne limity stawek dla dwóch promocji, limity gier kwalifikowanych oraz wykluczenia kumulacji nagród z jednego źródła. Przed aktywacją sprawdź w panelu, czy inny bonus nie jest już aktywny, a jeśli tak, zakończ go lub zrezygnuj przed otwarciem skrzynki.</p>

          <h4 className="text-base font-bold text-white/80 mb-2">Jak obliczyć wpływ limitu maksymalnej wypłaty na wartość nagrody z lootboxa?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Wartość realna nagrody z limitem to minimum z wygranej po obrocie i pułapu maksymalnej wypłaty określonego w regulaminie. Jeśli regulamin przewiduje np. limit 5x kwoty bonusu, to dla bonusu 100 PLN maksymalna wypłata wyniesie 500 PLN, nawet gdy po obrocie osiągniesz 900 PLN; realna wartość to wtedy 500 PLN, a 400 PLN nadwyżki przepada. Dla free spinów z limitem wygranej 100 PLN analogicznie: jeśli po obrocie wypracujesz 160 PLN, wartość ogranicza się do 100 PLN. Uwzględnienie capu w kalkulacji EV ma kluczowe znaczenie przy porównywaniu skrzynek.</p>

          <h4 className="text-base font-bold text-white/80 mb-2">Co zrobić, gdy lootbox się nie otworzył albo nagroda nie została przyznana?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Udokumentuj zdarzenie i złóż zgłoszenie do obsługi w możliwie krótkim czasie. Zrób zrzut ekranu z datą i godziną, numerem konta lub loginem, nazwą akcji i komunikatem błędu, dopisz przeglądarkę, wersję systemu i numer transakcji lub ID sesji, a następnie prześlij to przez czat lub e-mail support wraz z krótkim opisem kroków, które wykonałeś. Zachowaj numer zgłoszenia i poproś o pisemne potwierdzenie rozstrzygnięcia.</p>

          <h4 className="text-base font-bold text-white/80 mb-2">Czy korzystanie z VPN lub proxy może zablokować lootboxy i wypłaty?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Tak, większość regulaminów zakazuje ukrywania lokalizacji, a systemy wykrywają VPN po adresach IP, ASN i odciskach przeglądarki. Skutkiem może być anulowanie bonusów i wygranych oraz blokada konta, nawet jeśli sama gra działała technicznie poprawnie. Jeśli podróżujesz, poinformuj obsługę przed aktywacją promocji i potwierdź, czy otwieranie skrzynek jest dozwolone z danego kraju.</p>

          <h4 className="text-base font-bold text-white/80 mb-2">Jak zweryfikować transparentność konkretnej skrzynki w praktyce?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Sprawdź, czy operator publikuje pełną pulę nagród z opisem wartości nominalnej, warunki ich użycia, terminy ważności i ewentualne stawki dropu. Zwróć uwagę na spójność strefy czasowej w regulaminie i interfejsie, listę gier kwalifikowanych dla free spinów, limity stawek podczas obrotu oraz zapisy non-transferable i brak alternatywy pieniężnej. Brak jawnych stawek dropu nie jest sam w sobie naruszeniem, ale oznacza brak gwarancji procentów i uniemożliwia precyzyjną kalkulację EV.</p>

          <h4 className="text-base font-bold text-white/80 mb-2">Czy godzina otwarcia skrzynki w Vulkan Vegas wpływa na szansę na lepszą nagrodę?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Nie, wynik otwarcia to niezależne zdarzenie RNG bez pamięci i bez wpływu pory dnia. Każde otwarcie jest losowaniem z tej samej puli według tych samych reguł, chyba że regulamin przewiduje odrębne skrzynki w innych oknach czasowych. Animacje i interfejs nie zmieniają wyniku już wyznaczonego przez RNG w momencie otwarcia.</p>

          <h4 className="text-base font-bold text-white/80 mb-2">Czy mogę przenieść, odsprzedać lub zamienić na gotówkę nagrody ze skrzynek?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Zwykle nie, nagrody promocyjne są nieprzenoszalne, niepodlegają odsprzedaży i nie mają alternatywy gotówkowej, chyba że regulamin stanowi inaczej. Sprawdź w sekcji warunków zapisy o non-transferable, no cash alternative, jednorazowości oraz o zakazie dzielenia lub łączenia świadczeń. Jeśli nagroda to cashback 0x, jest on wypłacalny jak gotówka dopiero po faktycznym zaksięgowaniu na saldzie realnym.</p>

          <h4 className="text-base font-bold text-white/80 mb-2">Jak zaplanować budżet na skrzynki w 2026 z konkretnymi liczbami?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Ustal tygodniowy budżet i z góry policz maksymalną liczbę otwarć oraz limit kwotowy na sesję. Przykład: jeśli masz 400 PLN na tydzień i chcesz grać w trzech sesjach, przeznacz 3 &times; 40 PLN na skrzynki (10% tygodniowego budżetu na sesję) oraz ustaw twardy limit otwarć, np. do momentu wydania 40 PLN lub po X skrzynkach, w zależności od cennika akcji. Wprowadź progi stop, np. koniec sesji po wykorzystaniu 100% limitu albo po uzyskaniu nagrody o wartości realnej równej 50% sesyjnego budżetu, aby chronić zysk. Monitoruj w profilu rzeczywisty koszt i wykorzystanie nagród, aby korygować plan na kolejne dni.</p>

          <h4 className="text-base font-bold text-white/80 mb-2">Jak udokumentować spełnienie warunków misji do skrzynki na wypadek reklamacji?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Zachowuj dowody czasu, stawek i gier kwalifikowanych, aby można je było zweryfikować po stronie operatora. Pobierz historię zakładów w pliku CSV lub zrób zrzuty ekranu z listą gier, stawkami, numerami rund i sumą obrotu, dodaj datę oraz strefę czasową widoczną w interfejsie, a przy kodach promocyjnych dołącz ekran potwierdzenia aktywacji. W przypadku turniejów lub zadań dziennych zarchiwizuj ekran rankingu lub postępu misji z godziną. Wszystko wyślij w jednym zgłoszeniu wraz z numerem konta i krótką oś czasu działań.</p>

          <h4 className="text-base font-bold text-white/80 mb-2">Czy otwieranie lootboxów wpływa na limity odpowiedzialnej gry ustawione na moim koncie?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Tak, aktywność przy skrzynkach zużywa limity depozytu, stawek i czasu tak samo jak zwykła gra, bo generuje obrót i sesje. Jeśli masz np. limit depozytu 300 PLN na tydzień i kwalifikacja do skrzynki wymaga dodatkowego obrotu, ta aktywność szybciej wykorzysta dostępny pułap. Ustaw limity z uwzględnieniem promocji oraz zaplanuj dni bez gry, aby uniknąć kompulsywnego nadrabiania.</p>

          <h4 className="text-base font-bold text-white/80 mb-2">Czy istnieją sytuacje, w których lootbox może mieć dodatnią wartość oczekiwaną dla gracza?</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Tak, dodatnia EV jest możliwa, gdy nagrody mają 0x wagering, brak limitu maksymalnej wypłaty i udział nie generuje dodatkowego kosztu lub obrotu. Przykładowo skrzynka gwarantująca 10 PLN gotówki 0x ma EV 10 PLN, a skrzynka z 50% szansą na 20 PLN cashback 0x ma EV 10 PLN; jeśli kwalifikacja nie wymaga dodatkowej gry ani depozytu, netto EV pozostaje dodatnia. Gdy kwalifikacja wymaga obrotu, odejmij koszt oczekiwanej krawędzi domu od EV nagrody; zawsze weryfikuj regulamin konkretnej akcji, bo pojedynczy warunek, jak cap wypłaty, może sprowadzić EV do zera.</p>
        </div>
      </section>

    </div>
  )
}
