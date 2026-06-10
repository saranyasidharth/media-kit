export default function BrandPartnerships() {
  return (
    <section
      className="bg-white rounded-section border border-border shadow-sm p-12 mb-9 animate-fadeInUp"
      style={{
        background:
          'linear-gradient(135deg, rgba(255, 193, 7, 0.08), rgba(255, 152, 0, 0.08))',
        borderLeft: '5px solid #FFC107',
      }}
    >
      <h2 className="section-title mb-8">💬 Brand Partnerships</h2>

      <p
        className="text-center text-base md:text-lg text-text-light mb-8"
        style={{ color: 'var(--text-light)' }}
      >
        ✨ <strong>Building my collaboration portfolio</strong>
        <br />
        As I complete more brand partnerships, I'll showcase results & testimonials here.
      </p>

      {/* Recently Completed Collaboration */}
      <div className="bg-white p-6 rounded-card border border-border text-center mb-6">
        <p className="mb-3">🎉 <strong>Recent Collaboration (Confidential Brand)</strong></p>
        <p className="text-text-light text-sm">
          Partnership Focus: Product review & unboxing
          <br />
          Status: Successfully completed ✓
        </p>
      </div>

      <p className="text-center text-text-light text-sm">
        Want to be featured here?{' '}
        <a
          href="https://wa.me/918590935081"
          className="font-semibold hover:underline gradient-text-accent"
        >
          Collaborate with me →
        </a>
      </p>
    </section>
  )
}
