import { getDictionary, Locale } from '@/i18n/dictionaries'
import { ForgePortfolioDedicatedClient } from '@/components/forge/ForgePortfolioDedicatedClient'
import { ForgeWorkshop } from '@/components/forge/ForgeWorkshop'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  const title = (dict.forge as any).portfolio_page?.title || 'Portfolio'
  const description = (dict.forge as any).portfolio_page?.subtitle || 'Arasue Forge Work'

  return { title: `${title} | Arasue Forge`, description }
}

export default async function ForgePortfolioPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground pt-32">
      <ForgePortfolioDedicatedClient 
        dictPage={(dict.forge as any).portfolio_page} 
        dictWork={dict.forge.work} 
        lang={resolvedParams.lang} 
      />
      <ForgeWorkshop dict={(dict.forge as any).workshop_section} lang={resolvedParams.lang} />
    </div>
  )
}
