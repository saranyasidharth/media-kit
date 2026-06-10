import { brandCategories } from '@/lib/data'

export default function BrandCategories() {
  return (
    <section className="bg-white rounded-section border border-border shadow-sm p-12 mb-9 hover:shadow-md transition-shadow duration-300 animate-fadeInUp">
      <h2 className="section-title mb-8">Perfect For These Brands</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-8">
        {brandCategories.map((category, i) => (
          <div
            key={i}
            className="service-card p-6 border-2 border-border rounded-card text-center hover:border-primary hover:-translate-y-1 hover:shadow-md hover:scale-105 transition-all duration-300 bg-white"
          >
            <div
              className="service-icon text-4xl mb-4 block animate-float"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {category.icon}
            </div>
            <div className="service-name font-bold mb-2 text-text-dark">
              {category.name}
            </div>
            <p className="text-text-light text-sm">{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
