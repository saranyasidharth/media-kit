import { stats } from '@/lib/data'

const formatNumber = (n: number): string => {
  if (n >= 100000) return `${(n / 100000).toFixed(1)}L`
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}K`
  return n.toLocaleString('en-IN')
}

const statCards = (s: typeof stats) => [
  { number: formatNumber(s.profileViews), label: 'Profile Views (30 Days)' },
  {
    number: formatNumber(s.accountsReached),
    label: 'Accounts Reached (30 Days)',
  },
  { number: s.followers.toLocaleString('en-IN'), label: 'Engaged Followers' },
  {
    number: formatNumber(s.reelInteractions),
    label: 'Reels Interactions (30 Days)',
  },
]

export default function Stats() {
  const cards = statCards(stats)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-9">
      {cards.map((card, i) => (
        <div
          key={card.label}
          className="stat-card relative overflow-hidden bg-white rounded-card text-center px-8 py-9 border border-border shadow-sm hover:-translate-y-2 hover:shadow-md hover:border-primary transition-all duration-300 animate-fadeInUp"
          style={{ animationDelay: `${(i + 1) * 0.1}s` }}
        >
          <div className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight gradient-text">
            {card.number}
          </div>
          <div className="text-xs text-text-medium uppercase tracking-widest font-semibold">
            {card.label}
          </div>
        </div>
      ))}
    </div>
  )
}
