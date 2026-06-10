'use client'

import Script from 'next/script'
import { siteData } from '@/lib/data'

export default function Contact() {
  const contactLinks = [
    {
      icon: '📧',
      href: `mailto:${siteData.email}`,
      label: siteData.email,
      external: false,
    },
    {
      icon: '📱',
      href: `tel:${siteData.phone.replace(/\s/g, '')}`,
      label: siteData.phone,
      external: false,
    },
    {
      icon: '📷',
      href: `https://instagram.com/${siteData.handle}`,
      label: `@${siteData.handle}`,
      external: true,
    },
    {
      icon: '💬',
      href: `https://wa.me/${siteData.phone.replace(/\D/g, '')}`,
      label: 'WhatsApp Me',
      external: true,
    },
    {
      icon: '🔗',
      href: 'https://wishlink.com/saranyasidharth',
      label: 'wishlink.com/saranyasidharth',
      external: true,
    },
  ]

  return (
    <section className="bg-white rounded-section border border-border shadow-sm p-12 mb-9 animate-fadeInUp">
      <h2 className="section-title mb-8">Let's Collaborate!</h2>

      {/* Contact Links */}
      <div className="flex flex-col gap-5 mt-6 mb-10">
        {contactLinks.map(({ icon, href, label, external }) => (
          <div key={label} className="flex items-center gap-4 text-lg">
            <span className="gradient-text-accent text-2xl w-12 text-center">
              {icon}
            </span>
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-text-medium font-medium hover:text-primary transition-colors duration-300"
            >
              {label}
            </a>
          </div>
        ))}
      </div>

      {/* EmbedSocial Instagram Feed Widget */}
      <div className="my-10 border-t border-border pt-10">
        <h3 className="font-semibold text-text-dark mb-6">Latest on Instagram</h3>
        <div className="embedsocial-hashtag" data-ref="EMBEDSOCIAL_REF_PLACEHOLDER" />
        <Script
          src="https://embedsocial.com/cdn/ht.js"
          id="embedsocial-hashtag-js"
          strategy="afterInteractive"
        />
      </div>

      {/* Main CTA */}
      <div className="text-center no-print">
        <a
          href={`https://ig.me/m/${siteData.handle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button relative overflow-hidden inline-block text-white py-[18px] px-[50px] rounded-pill font-bold text-base tracking-wide transition-all duration-300 hover:translate-y-[-4px] hover:scale-105"
          style={{
            background:
              'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
          }}
        >
          Get In Touch
        </a>
      </div>
    </section>
  )
}
