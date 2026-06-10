import Hero from './components/Hero'
import TrendingReels from './components/TrendingReels'
import AtAGlance from './components/AtAGlance'
import Stats from './components/Stats'
import About from './components/About'
import Demographics from './components/Demographics'
import ContentPerformance from './components/ContentPerformance'
import EngagementMetrics from './components/EngagementMetrics'
import BrandPartnerships from './components/BrandPartnerships'
import Packages from './components/Packages'
import WhyPartner from './components/WhyPartner'
import BrandCategories from './components/BrandCategories'
import FAQ from './components/FAQ'
import CreatorValues from './components/CreatorValues'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-5 py-[60px]">
      <Hero />
      <TrendingReels />
      <AtAGlance />
      <Stats />
      <About />
      <Demographics />
      <ContentPerformance />
      <EngagementMetrics />
      <BrandPartnerships />
      <Packages />
      <WhyPartner />
      <BrandCategories />
      <FAQ />
      <CreatorValues />
      <Contact />
      <Footer />
    </main>
  )
}
