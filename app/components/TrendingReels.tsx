import Image from 'next/image'
import { reelData } from '@/lib/data'

export default function TrendingReels() {
  return (
    <section className="bg-white rounded-section border border-border shadow-sm p-12 mb-9 hover:shadow-md transition-shadow duration-300 animate-fadeInUp">
      <h2 className="section-title mb-8">🎬 Trending Reels</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
        {reelData.map((reel) => (
          <div
            key={reel.id}
            className="rounded-card overflow-hidden border border-border shadow-sm hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="relative w-full aspect-[9/16] bg-gray-200">
              <Image
                src={reel.image}
                alt={reel.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="p-4">
              <h3 className="font-bold text-sm mb-3">{reel.title}</h3>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-pink-50 p-2 rounded-lg text-center">
                  <div className="font-bold text-primary">
                    ❤️ {reel.likes.toLocaleString('en-IN')}
                  </div>
                  <div className="text-text-light text-xs mt-1">Likes</div>
                </div>
                <div className="bg-pink-50 p-2 rounded-lg text-center">
                  <div className="font-bold text-primary">💬 {reel.comments}</div>
                  <div className="text-text-light text-xs mt-1">Comments</div>
                </div>
                <div className="bg-pink-50 p-2 rounded-lg text-center">
                  <div className="font-bold text-primary">📤 {reel.shares}</div>
                  <div className="text-text-light text-xs mt-1">Shares</div>
                </div>
                <div className="bg-pink-50 p-2 rounded-lg text-center">
                  <div className="font-bold text-primary">💾 {reel.saves}</div>
                  <div className="text-text-light text-xs mt-1">Saves</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
