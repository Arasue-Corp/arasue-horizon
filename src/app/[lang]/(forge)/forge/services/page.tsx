import { getDictionary, Locale } from '@/i18n/dictionaries'
import { ForgeServices } from '@/components/forge/ForgeServices'
import { ForgeProcess } from '@/components/forge/ForgeProcess'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  const title = (dict as any).forge.services_page?.title || 'Services'
  const description = (dict as any).forge.services_page?.subtitle || 'Arasue Forge Services'

  return { title: `${title} | Arasue Forge`, description }
}

export default async function ForgeServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  const currencySymbol = '$'

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground pt-32">
      <ForgeServices dict={dict.forge} currencySymbol={currencySymbol} />
      <ForgeProcess dict={(dict.forge as any).process_section} />
    </div>
  )
}
