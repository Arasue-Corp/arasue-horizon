import { getDictionary, Locale } from '@/i18n/dictionaries'
import { ForgeServicesDedicatedClient } from '@/components/forge/ForgeServicesDedicatedClient'
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

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground pt-32">
      <ForgeServicesDedicatedClient 
        dictPage={(dict.forge as any).services_page} 
        dictServices={dict.forge.services}
        lang={resolvedParams.lang}
      />
      <ForgeProcess dict={(dict.forge as any).process_section} />
    </div>
  )
}
