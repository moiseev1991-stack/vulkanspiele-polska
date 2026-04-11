export interface Winner {
  nick: string
  amount: number
  currency: string
  gameId: string
  gameTitle: string
  gameImage: string
}

export const winners: Winner[] = [
  { nick: 'volk***', amount: 15250.00, currency: 'EUR', gameId: 'gates-of-olympus-1000', gameTitle: 'Gates of Olympus 1000', gameImage: '/images/games/gates-of-olympus-1000.jpg' },
  { nick: 'adit***', amount: 100000.00, currency: 'RON', gameId: 'seven-seven', gameTitle: 'Seven Seven', gameImage: '/images/games/seven-seven.jpg' },
  { nick: 'Orha***', amount: 15015.00, currency: 'EUR', gameId: 'vulkanspiele-spark', gameTitle: 'Vulkanspiele Spark', gameImage: '/images/games/vulkanspiele-spark.png' },
  { nick: 'budo***', amount: 44300.00, currency: 'PLN', gameId: 'vulkanspiele-spark', gameTitle: 'Vulkanspiele Spark', gameImage: '/images/games/vulkanspiele-spark.png' },
  { nick: 'prow***', amount: 8395.00, currency: 'EUR', gameId: 'blazing-crown-deluxe', gameTitle: 'Blazing Crown Deluxe', gameImage: '/images/games/blazing-crown-deluxe.jpg' },
  { nick: 'madz***', amount: 30030.00, currency: 'PLN', gameId: 'crown-coins', gameTitle: 'Crown Coins', gameImage: '/images/games/crown-coins.jpg' },
  { nick: 'szym***', amount: 30162.00, currency: 'PLN', gameId: 'book-of-fallen', gameTitle: 'Book of the Fallen', gameImage: '/images/games/book-of-fallen.jpg' },
  { nick: 'pawe***', amount: 26500.00, currency: 'PLN', gameId: 'crown-coins', gameTitle: 'Crown Coins', gameImage: '/images/games/crown-coins.jpg' },
  { nick: 'mich***', amount: 5480.00, currency: 'EUR', gameId: 'big-bass-splash', gameTitle: 'Big Bass Splash', gameImage: '/images/games/big-bass-splash.jpg' },
  { nick: 'anna***', amount: 12750.00, currency: 'PLN', gameId: 'sugar-rush', gameTitle: 'Sugar Rush', gameImage: '/images/games/sugar-rush.jpg' },
]
