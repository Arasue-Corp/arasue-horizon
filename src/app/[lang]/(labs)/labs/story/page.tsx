import { getDictionary, Locale } from '@/i18n/dictionaries'
import { MotionDiv } from '@/components/Motion'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  // Resolve title and description dynamically
  const title = (dict as any).labs.story_page?.title || 'LabsStoryPage'
  const description = (dict as any).labs.story_page?.subtitle || 'Arasue Horizon'

  return {
    title: `${title} | Arasue`,
    description: description
  }
}

export default async function LabsStoryPage({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)

  return (
    <div className="flex flex-col min-h-[80vh] pt-40 pb-24 px-6 font-serif text-foreground relative">
      {/* Tactical Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ad102f1a_1px,transparent_1px),linear-gradient(to_bottom,#ad102f1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            {dict.labs.story_page.title}
          </h1>
          <p className="text-xl md:text-2xl opacity-70 max-w-2xl">
            {dict.labs.story_page.subtitle }
          </p>
        </MotionDiv>
        
        
        {/* Image Placeholder */}
        <MotionDiv 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-24 w-full aspect-video bg-foreground/5 rounded-3xl overflow-hidden border border-foreground/10"
        >
          <img 
            src="https://placehold.co/1200x675/1a1a1a/ffffff?text=Labs+Story+Image" 
            alt="Labs Story" 
            className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
          />
        </MotionDiv>
      </div>
    </div>
  )
}
