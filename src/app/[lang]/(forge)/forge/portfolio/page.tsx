import { getDictionary, Locale } from '@/i18n/dictionaries'
import { ForgePortfolio } from '@/components/forge/ForgePortfolio'
import { ForgeWorkshop } from '@/components/forge/ForgeWorkshop'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  const title = dict.forge.work?.title || 'Portfolio'
  const description = dict.forge.work?.subtitle || 'Arasue Forge Work'

  return { title: `${title} | Arasue Forge`, description }
}

export default async function ForgePortfolioPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground pt-32">
      <ForgePortfolio dict={dict.forge.work} />
      <ForgeWorkshop dict={(dict.forge as any).workshop_section} lang={resolvedParams.lang} />
    </div>
  )
}
