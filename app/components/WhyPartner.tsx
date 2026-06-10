import { whyPartnerItems } from '@/lib/data'

export default function WhyPartner() {
  return (
    <section className="bg-white rounded-section border border-border shadow-sm p-12 mb-9 hover:shadow-md transition-shadow duration-300" style={{animation: "fadeInUp 0.8s ease-out"}}>
      <h2 className="section-title mb-8">Why Partner With Me?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {whyPartnerItems.map((item, i) => (
          <div
            key={i}
            className="p-6 bg-gradient-to-br from-pink-50 to-orange-50 rounded-card border border-border hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="font-bold text-text-dark mb-2">{item.title}</div>
            <p className="text-text-light text-sm">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
