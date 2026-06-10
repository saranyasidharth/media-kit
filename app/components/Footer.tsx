import { siteData } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="text-center py-10 px-6 text-text-light text-sm opacity-80">
      <p>Media Kit - @{siteData.handle} | Last Updated: {siteData.lastUpdated}</p>
      <p className="mt-2">
        All statistics are based on Instagram Insights data from the last 30 days
      </p>
    </footer>
  )
}
