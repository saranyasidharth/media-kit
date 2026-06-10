import { stats } from '@/lib/data'

export default function EngagementMetrics() {
  const metrics = [
    {
      label: 'Overall Engagement Rate',
      value: stats.engagementRate,
      note: 'Industry average: 3–5%',
    },
    {
      label: 'Average Save Rate',
      value: stats.saveRate,
      note: 'Audience finds content valuable',
    },
    {
      label: 'Average Share Rate',
      value: stats.shareRate,
      note: 'Content is highly shareable',
    },
  ]

  return (
    <section className="bg-white rounded-section border border-border shadow-sm p-12 mb-9 hover:shadow-md transition-shadow duration-300 animate-fadeInUp">
      <h2 className="section-title mb-8">📊 Engagement Metrics Breakdown</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {metrics.map((metric, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-card border border-border text-center hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="text-5xl font-extrabold mb-4 gradient-text">
              {metric.value}%
            </div>
            <div className="font-bold text-text-dark mb-2">{metric.label}</div>
            <p className="text-text-light text-sm">{metric.note}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
