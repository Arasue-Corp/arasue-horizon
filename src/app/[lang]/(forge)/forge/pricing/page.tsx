import { getDictionary, Locale } from '@/i18n/dictionaries'
import { ForgeEstimator } from '@/components/forge/ForgeEstimator'
import { ForgeFAQ } from '@/components/forge/ForgeFAQ'
import { ForgePricingClient } from '@/components/forge/ForgePricingClient'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  const title = (dict.forge as any).pricing_page?.title || 'Pricing & Estimator'
  const description = (dict.forge as any).pricing_page?.subtitle || 'Arasue Forge Pricing'

  return { title: `${title} | Arasue Forge`, description }
}

export default async function ForgePricingPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  const currencySymbol = '$'

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground pt-32">
      <ForgePricingClient dict={(dict.forge as any).pricing_page} lang={resolvedParams.lang} />
      
      <section className="py-24 px-6 bg-secondary/30 relative">
        <ForgeEstimator dict={(dict.forge as any).estimator_section} currencySymbol={currencySymbol} />
      </section>
      
      <ForgeFAQ dict={dict.forge.faq} />
    </div>
  )
}
