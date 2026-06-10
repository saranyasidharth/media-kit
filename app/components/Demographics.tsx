'use client'

import { demographics } from '@/lib/data'

interface DemoGroupProps {
  title: string
  bars: readonly { label: string; value: number }[]
}

function DemoGroup({ title, bars }: DemoGroupProps) {
  return (
    <div>
      <h3 className="gradient-text text-xl font-bold mb-6">{title}</h3>

      {bars.map(({ label, value }) => (
        <div key={label} className="mb-4">
          <div className="flex justify-between mb-2 text-sm font-medium">
            <span className="text-text-dark">{label}</span>
            <span className="text-text-medium">{value}%</span>
          </div>

          <div className="h-2.5 bg-border rounded-full overflow-hidden">
            <div
              className="demo-bar-progress"
              style={{ '--bar-target': `${value}%` } as React.CSSProperties}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Demographics() {
  return (
    <section className="bg-white rounded-section border border-border shadow-sm p-12 mb-9 hover:shadow-md transition-shadow duration-300 animate-fadeInUp">
      <h2 className="section-title mb-8">Audience Demographics</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
        <DemoGroup title="Gender Distribution" bars={demographics.gender} />
        <DemoGroup title="Age Range" bars={demographics.age} />
        <DemoGroup title="Top Locations" bars={demographics.location} />
      </div>
    </section>
  )
}
