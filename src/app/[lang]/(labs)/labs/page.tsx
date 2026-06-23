import { getDictionary, Locale } from '@/i18n/dictionaries'
import { LabsCorporateHeroClient } from '@/components/labs/LabsCorporateHeroClient'
import { LabsFlagshipClient } from '@/components/labs/LabsFlagshipClient'
import { LabsDerivativesClient } from '@/components/labs/LabsDerivativesClient'
import { LabsOriginMap } from '@/components/labs/LabsOriginMap'
import { LabsRitualClient } from '@/components/labs/LabsRitualClient'
import { LabsComparison } from '@/components/labs/LabsComparison'

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
  const labsDict = dict.labs as any

  return (
    <div className="theme-labs flex flex-col min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <LabsCorporateHeroClient dict={labsDict.macro} />
      <LabsFlagshipClient dict={labsDict.flagship} />
      <LabsDerivativesClient dict={labsDict.derivatives} />
      <LabsOriginMap dict={labsDict.origin} />
      <LabsRitualClient dict={labsDict.ritual} />
      <LabsComparison dict={labsDict.comparison} />
    </div>
  )
}
