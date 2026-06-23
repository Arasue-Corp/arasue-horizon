import { getDictionary, Locale } from '@/i18n/dictionaries'
import { LabsBoutiqueHeroClient } from '@/components/labs/LabsBoutiqueHeroClient'
import { LabsPress } from '@/components/labs/LabsPress'
import { LabsComparison } from '@/components/labs/LabsComparison'
import { LabsOriginClient } from '@/components/labs/LabsOriginClient'
import { LabsDesertMap } from '@/components/labs/LabsDesertMap'
import { LabsRitualClient } from '@/components/labs/LabsRitualClient'
import { LabsShopGrid } from '@/components/labs/LabsShopGrid'
import { LabsTestimonials } from '@/components/labs/LabsTestimonials'
import { LabsFAQ } from '@/components/labs/LabsFAQ'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  const title = (dict.labs as any).macro?.title || 'Arasue Labs LLC'
  const description = (dict.labs as any).macro?.subtitle || 'Global Commodities & Supply'

  return { title: `${title} | Arasue Labs`, description }
}

export default async function LabsPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  const labsDict = (dict.labs as any).boutique

  return (
    <div className="theme-labs flex flex-col min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <LabsBoutiqueHeroClient dict={labsDict.hero} />
      <LabsPress dict={labsDict.press} />
      <LabsComparison dict={labsDict.comparison} />
      <LabsOriginClient dict={labsDict.origin} />
      <LabsDesertMap dict={labsDict.map} />
      <LabsRitualClient dict={labsDict.ritual} />
      <LabsShopGrid dict={labsDict.shop} />
      <LabsTestimonials dict={labsDict.testimonials} />
      <LabsFAQ dict={labsDict.faq} />
    </div>
  )
}
