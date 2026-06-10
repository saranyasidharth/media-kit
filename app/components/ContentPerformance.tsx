import { contentHighlights } from '@/lib/data'

export default function ContentPerformance() {
  return (
    <section className="bg-white rounded-section border border-border shadow-sm p-12 mb-9 hover:shadow-md transition-shadow duration-300 animate-fadeInUp">
      <h2 className="section-title mb-8">Content Performance Highlights</h2>

      <div className="text-center mb-6">
        <div
          className="inline-block px-6 py-3 rounded-full font-bold text-sm tracking-widest animate-pulse"
          style={{
            background:
              'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
            color: 'white',
          }}
        >
          ⚡ 16.5× Reach Multiplier (83.8K reach from 5K followers)
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {contentHighlights.map((item, i) => (
          <div
            key={i}
            className="p-6 bg-gradient-to-br from-pink-50 to-orange-50 rounded-card border border-border hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="text-3xl mb-3">{item.emoji}</div>
            <div className="font-bold text-text-dark mb-2">{item.title}</div>
            <p className="text-text-light text-sm">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
