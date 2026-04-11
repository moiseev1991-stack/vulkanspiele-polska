export interface Bonus {
  id: string
  title: string
  category: 'casino' | 'sports' | 'network' | 'special'
  description: string
  reward: string
  image: string
}

export const bonuses: Bonus[] = [
  {
    id: 'welcome-casino',
    title: 'Bonus powitalny w kasynie',
    category: 'casino',
    description: 'Otrzymaj hojny bonus na swój pierwszy depozyt i zacznij grać z większymi środkami!',
    reward: 'Do 2 500 € + 350 FS',
    image: '/images/promotions/welcome-casino.png',
  },
  {
    id: 'welcome-sports',
    title: 'Powitalny bonus na zakłady',
    category: 'sports',
    description: 'Postaw swój pierwszy zakład z dodatkowym doładowaniem konta.',
    reward: 'DO 1 000 €',
    image: '/images/promotions/welcome-sports.png',
  },
  {
    id: 'missions',
    title: 'Misje',
    category: 'casino',
    description: 'Wykonaj zadania, odbierz nagrodę',
    reward: 'Nagrody za misje',
    image: '/images/promotions/mission.png',
  },
  {
    id: 'lootboxes-promo',
    title: 'Lootboxy',
    category: 'casino',
    description: 'Otwórz i zobacz, co jest w środku',
    reward: 'Losowe nagrody',
    image: '/images/promotions/lootbox.png',
  },
  {
    id: 'highroller',
    title: 'Bonus Highroller',
    category: 'casino',
    description: 'Specjalny bonus dla graczy wysokich stawek',
    reward: '200% + 100 FS Crown Coins',
    image: '/images/promotions/highroller.png',
  },
  {
    id: 'birthday',
    title: 'Bonus urodzinowy',
    category: 'special',
    description: 'Specjalna niespodzianka w Twoje urodziny',
    reward: 'Bonus X',
    image: '/images/promotions/birthday.png',
  },
  {
    id: 'grand-easter',
    title: 'Grand Easter Heist',
    category: 'network',
    description: 'Wielkanocny turniej sieciowy od Endorphina',
    reward: '500 000 EUR od Endorphina',
    image: '/images/promotions/grand-easter.png',
  },
  {
    id: 'platipus',
    title: 'Platipus Tournament',
    category: 'network',
    description: 'Weź udział w turnieju Platipus i walcz o nagrodę',
    reward: 'Fundusz nagród €125 000',
    image: '/images/promotions/platipus.png',
  },
  {
    id: 'gamzix',
    title: 'Gamzix Spin Express',
    category: 'network',
    description: 'Ekspresowy turniej od Gamzix',
    reward: 'Pula nagród: 1 000 000 EUR',
    image: '/images/promotions/gamzix.png',
  },
  {
    id: 'slotopia',
    title: 'Slotopia: Bloom to Win',
    category: 'network',
    description: 'Wiosenny turniej slotów',
    reward: '105 000 EUR',
    image: '/images/promotions/slotopia.png',
  },
  {
    id: 'spring-season',
    title: 'Spring Season of Legends',
    category: 'network',
    description: 'Wiosenny sezon legend',
    reward: '€512 000',
    image: '/images/promotions/spring.png',
  },
  {
    id: 'spinoleague',
    title: 'Spinoleague od Spinomenal',
    category: 'network',
    description: 'Liga slotów od Spinomenal',
    reward: '12 000 000 EUR',
    image: '/images/promotions/spinoleague.png',
  },
]
