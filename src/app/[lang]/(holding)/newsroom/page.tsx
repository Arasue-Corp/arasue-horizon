import { getDictionary, Locale } from '@/i18n/dictionaries'
import { MotionDiv } from '@/components/Motion'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  // Resolve title and description dynamically
  const title = (dict as any).corporate.newsroom?.title || 'NewsroomPage'
  const description = (dict as any).corporate.newsroom?.subtitle || 'Arasue Horizon'

  return {
    title: `${title} | Arasue`,
    description: description
  }
}

export default async function NewsroomPage({
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
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            {dict.corporate.newsroom.title}
          </h1>
          <p className="text-xl md:text-2xl opacity-70 max-w-2xl">
            {dict.corporate.newsroom.content}
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
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2000&auto=format&fit=crop" 
            alt="Holding Newsroom - Mountains" 
            className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
          />
        </MotionDiv>
      </div>
    </div>
  )
}
