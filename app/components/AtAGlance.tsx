import { atAGlanceItems } from '@/lib/data'

export default function AtAGlance() {
  return (
    <section
      className="section bg-white rounded-section border border-border shadow-sm p-12 mb-9"
      style={{
        animation: "fadeInUp 0.8s ease-out",
        background:
          'linear-gradient(135deg, rgba(233, 30, 99, 0.05), rgba(156, 39, 176, 0.05))',
        borderLeft: '5px solid var(--primary-color)',
      }}
    >
      <h2 className="section-title mb-8">At a Glance</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {atAGlanceItems.map((item) => (
          <div key={item.label}>
            <p
              className="font-bold text-base mb-2"
              style={{ color: 'var(--primary-color)' }}
            >
              {item.label}
            </p>
            <p className="text-text-light text-sm">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
