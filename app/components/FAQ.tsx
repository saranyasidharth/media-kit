'use client'

import { useState } from 'react'
import { faqItems } from '@/lib/data'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-white rounded-section border border-border shadow-sm p-12 mb-9 animate-fadeInUp">
      <h2 className="section-title mb-8">Frequently Asked Questions</h2>

      <div className="mt-6 flex flex-col gap-3">
        {faqItems.map((item, i) => (
          <div
            key={i}
            className="border border-border rounded-card overflow-hidden"
          >
            <button
              className="w-full text-left px-6 py-5 font-semibold text-text-dark flex justify-between items-center hover:text-primary transition-colors duration-200 bg-white hover:bg-pink-50"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {item.q}
              <span
                className="text-primary text-xl ml-4 flex-shrink-0"
                style={{
                  transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}
              >
                ▼
              </span>
            </button>

            <div
              className={`faq-answer px-6 text-text-medium text-sm ${
                open === i ? 'open pb-5' : ''
              }`}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
