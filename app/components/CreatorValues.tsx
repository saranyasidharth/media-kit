import { creatorValues } from '@/lib/data'

export default function CreatorValues() {
  return (
    <section
      className="bg-white rounded-section border border-border shadow-sm p-12 mb-9 animate-fadeInUp"
      style={{
        background:
          'linear-gradient(135deg, rgba(76, 175, 80, 0.08), rgba(139, 195, 74, 0.08))',
        borderLeft: '5px solid #4CAF50',
      }}
    >
      <h2 className="section-title mb-8">🛡️ Brand Safety & Content Values</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {creatorValues.map((value, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-card border border-border hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="text-3xl mb-3">{value.icon}</div>
            <div className="font-bold text-text-dark mb-2">{value.title}</div>
            <p className="text-text-light text-sm">{value.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
