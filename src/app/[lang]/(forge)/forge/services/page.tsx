import { getDictionary, Locale } from '@/i18n/dictionaries'
import { MotionDiv } from '@/components/Motion'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  // Resolve title and description dynamically
  const title = (dict as any).forge.services_page?.title || 'ForgeServicesPage'
  const description = (dict as any).forge.services_page?.subtitle || 'Arasue Horizon'

  return {
    title: `${title} | Arasue`,
    description: description
  }
}

export default async function ForgeServicesPage({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)

  return (
    <div className="flex flex-col min-h-[80vh] pt-32 pb-24 px-6 bg-background text-foreground">
      <div className="max-w-5xl mx-auto w-full">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            {dict.forge.services_page.title}
          </h1>
          <p className="text-xl md:text-2xl opacity-70 max-w-2xl">
            {dict.forge.services_page.subtitle || dict.forge.services_page.content}
          </p>
        </MotionDiv>
        
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 p-8 border border-current/10 bg-current/5 rounded-3xl"
          >
            <p className="text-lg font-bold">
              {dict.forge.services_page.scarcity}
            </p>
          </MotionDiv>
    
        
        {/* Placeholder for future content blocks */}
        <MotionDiv 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-24 w-full h-[40vh] border border-dashed border-current/20 rounded-3xl flex items-center justify-center opacity-50"
        >
          <p className="font-mono text-sm uppercase tracking-widest">[ Content Placeholder ]</p>
        </MotionDiv>
      </div>
    </div>
  )
}
