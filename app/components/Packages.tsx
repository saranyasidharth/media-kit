import { packages } from '@/lib/data'

const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`

interface PackageFeaturesProps {
  items: string[]
}

function PackageFeatures({ items }: PackageFeaturesProps) {
  return (
    <ul className="list-none p-0 mt-6 flex flex-col gap-0">
      {items.map((item, i) => (
        <li key={i} className="text-text-medium text-sm py-3 pl-7 relative">
          <span
            className="absolute left-0 gradient-text-accent font-bold"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            ●
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function Packages() {
  return (
    <section className="bg-white rounded-section border border-border shadow-sm p-12 mb-9 hover:shadow-md transition-shadow duration-300 animate-fadeInUp">
      <h2 className="section-title mb-8">Collaboration Packages</h2>

      <p className="text-center text-text-light text-lg mb-8">
        Flexible packages designed to maximize your brand's visibility and engagement
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`package-card relative bg-white rounded-card border-2 p-10 hover:border-primary hover:-translate-y-3 hover:shadow-lg transition-all duration-300 ${
              pkg.highlighted ? 'package-featured' : 'border-border'
            }`}
          >
            <div className="text-2xl font-extrabold text-text-dark mb-3 tracking-tight">
              {pkg.name}
            </div>

            <div className="gradient-text font-bold text-lg mb-6">
              {formatPrice(pkg.price)}
            </div>

            <PackageFeatures items={pkg.features} />
          </div>
        ))}
      </div>

      <p className="mt-8 text-text-light text-center text-base">
        💡 <strong>Custom packages available!</strong> Let's create a collaboration that perfectly fits your brand's goals and budget.
      </p>
    </section>
  )
}
