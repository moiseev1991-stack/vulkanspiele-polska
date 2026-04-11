import { games } from '@/data/games'
import GameGrid from './GameGrid'

export default function CrashGames() {
  const crashGames = games.filter((g) => g.category === 'crash')
  return <GameGrid title="Gry z krashem" count={22} games={crashGames} icon="🚀" />
}
