export default function About() {
  return (
    <section className="bg-white rounded-section border border-border shadow-sm p-12 mb-9 hover:shadow-md transition-shadow duration-300" style={{animation: "fadeInUp 0.8s ease-out"}}>
      <h2 className="section-title mb-8">About Me</h2>

      <div className="text-base md:text-lg leading-relaxed text-text-medium space-y-5">
        <p>
          I'm a passionate fashion, beauty, and lifestyle content creator dedicated to sharing authentic and relatable content with my engaged community. With a strong focus on Reels and visual storytelling, I create content that resonates with young, fashion-forward audiences across India and beyond.
        </p>

        <p>
          My content blends trend-focused fashion insights, honest beauty reviews, and lifestyle inspiration, making me an ideal partner for brands looking to connect with millennial and Gen-Z consumers.
        </p>
      </div>

      {/* Value Proposition */}
      <div
        className="mt-8 p-9 rounded-card border-l-[5px] border-primary"
        style={{
          background:
            'linear-gradient(135deg, rgba(255, 107, 157, 0.06), rgba(255, 160, 122, 0.06))',
          border: '1px solid var(--border-color)',
          borderLeftWidth: '5px',
        }}
      >
        <h3
          className="text-2xl font-bold mb-5 gradient-text"
        >
          What Sets Me Apart
        </h3>

        <ul className="space-y-3">
          {[
            'Authentic, relatable voice that builds genuine connections with followers',
            'Proven expertise in Reels - my primary content format with 15K monthly interactions',
            'Highly engaged micro-influencer community (5K+ followers with exceptional reach)',
            'Professional content creation with timely delivery and clear communication',
            'Deep understanding of Indian fashion and beauty trends',
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-text-medium text-base"
            >
              <span className="gradient-text-accent text-lg font-bold flex-shrink-0">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
