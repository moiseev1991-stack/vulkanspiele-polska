export interface Tournament {
  id: string
  title: string
  status: 'active' | 'upcoming' | 'finished'
  type: 'weekly' | 'weekend' | 'big' | 'easter'
  prizePool: number
  currency: string
  endsAt: string
  startsAt: string
  gameIds: string[]
  image?: string
}

export const tournaments: Tournament[] = [
  {
    id: 'weekly-rush',
    title: 'Środkowotygodniowy Rush',
    status: 'active',
    type: 'weekly',
    prizePool: 2000,
    currency: 'EUR',
    endsAt: '2026-04-30T23:59:00Z',
    startsAt: '2026-04-07T00:00:00Z',
    gameIds: ['big-bass-splash', 'wild-love', 'sugar-rush', 'seven-seven', 'candy-craze', 'vulkanspiele-joker', 'fortune-bags', 'book-of-fallen'],
    image: '/images/tournament/girl-coins.png',
  },
  {
    id: 'easter-tournament',
    title: 'Turniej Wielkanocny',
    status: 'active',
    type: 'easter',
    prizePool: 10000,
    currency: 'EUR',
    endsAt: '2026-04-13T23:59:00Z',
    startsAt: '2026-04-07T00:00:00Z',
    gameIds: ['book-of-fallen', 'candy-craze', 'wild-love', 'fortune-bags', 'sugar-rush', 'gates-of-olympus-1000', 'crown-coins', 'blazing-crown-deluxe'],
    image: '/images/tournament/easter-rabbit.png',
  },
  {
    id: 'weekend-tournament',
    title: 'Turniej Weekendowy',
    status: 'upcoming',
    type: 'weekend',
    prizePool: 2000,
    currency: 'EUR',
    endsAt: '2026-04-13T23:59:00Z',
    startsAt: '2026-04-10T00:00:00Z',
    gameIds: ['big-bass-splash', 'gates-of-olympus-1000', 'sugar-rush'],
  },
  {
    id: 'weekly-clash-1',
    title: 'Starcie Tygodnia',
    status: 'finished',
    type: 'weekly',
    prizePool: 2000,
    currency: 'EUR',
    endsAt: '2026-04-08T23:59:00Z',
    startsAt: '2026-04-06T00:00:00Z',
    gameIds: [],
  },
  {
    id: 'weekend-finished-1',
    title: 'Turniej Weekendowy',
    status: 'finished',
    type: 'weekend',
    prizePool: 2000,
    currency: 'EUR',
    endsAt: '2026-04-06T23:59:00Z',
    startsAt: '2026-04-03T00:00:00Z',
    gameIds: [],
  },
  {
    id: 'weekly-rush-finished',
    title: 'Środkowotygodniowy Rush',
    status: 'finished',
    type: 'weekly',
    prizePool: 2000,
    currency: 'EUR',
    endsAt: '2026-04-03T23:59:00Z',
    startsAt: '2026-04-01T00:00:00Z',
    gameIds: [],
    image: '/images/tournament/girl-coins.png',
  },
  {
    id: 'weekly-clash-2',
    title: 'Starcie Tygodnia',
    status: 'finished',
    type: 'weekly',
    prizePool: 2000,
    currency: 'EUR',
    endsAt: '2026-04-01T23:59:00Z',
    startsAt: '2026-03-30T00:00:00Z',
    gameIds: [],
  },
]
