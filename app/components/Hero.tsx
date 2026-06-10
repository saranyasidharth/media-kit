'use client'

import { siteData, stats } from '@/lib/data'

export default function Hero() {
  const handleDownloadPDF = async () => {
    // Dynamically import html2pdf to avoid SSR issues
    const html2pdf = (await import('html2pdf.js')).default
    const element = document.querySelector('main')
    if (!element) return

    html2pdf()
      .set({
        margin: 10,
        filename: `${siteData.name.replace(' ', '_')}_Media_Kit.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
      })
      .from(element)
      .save()
  }

  return (
    <section
      className="hero-shimmer relative overflow-hidden text-white text-center rounded-hero mb-[50px] px-[50px] py-[80px] animate-scaleIn"
      style={{
        background:
          'linear-gradient(135deg, #FF6B9D 0%, #C44569 50%, #8B3A62 100%)',
        boxShadow: 'var(--shadow-lg)',
      }}
    >
      <h1
        className="font-display text-5xl md:text-6xl font-bold mb-4 tracking-tight"
        style={{
          background:
            'linear-gradient(to bottom, #ffffff 0%, #ffe6f0 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 4px 20px rgba(0,0,0,0.3)',
        }}
      >
        {siteData.name}
      </h1>

      <div className="text-xl md:text-2xl opacity-95 mb-6 font-medium tracking-wide">
        @{siteData.handle}
      </div>

      <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed opacity-92">
        Creating pretty things ✨<br />
        Fashion | Beauty | Lifestyle Content Creator
      </p>

      <div
        className="inline-block mt-5 px-6 py-2 rounded-full font-bold text-sm tracking-widest animate-pulse"
        style={{
          background:
            'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
        }}
      >
        Micro-Influencer | {stats.followers.toLocaleString('en-IN')}+ Engaged Followers | 1.7L Monthly Views
      </div>

      {/* CTAs */}
      <div className="no-print flex flex-col sm:flex-row gap-4 justify-center mt-8 flex-wrap">
        <a
          href={`https://wa.me/${siteData.phone.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button relative overflow-hidden inline-block text-white py-[18px] px-[50px] rounded-pill font-bold text-base tracking-wide transition-all duration-300 hover:translate-y-[-4px] hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
          }}
        >
          💬 WhatsApp Me
        </a>

        <button
          onClick={handleDownloadPDF}
          className="cta-button relative overflow-hidden inline-block text-white py-[18px] px-[50px] rounded-pill font-bold text-base tracking-wide transition-all duration-300 hover:translate-y-[-4px] hover:scale-105"
          style={{
            background:
              'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
          }}
        >
          📥 Download PDF
        </button>
      </div>
    </section>
  )
}
