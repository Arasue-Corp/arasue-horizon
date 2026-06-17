import { getDictionary, Locale } from '@/i18n/dictionaries'
import { MotionDiv } from '@/components/Motion'
import { ContactForm } from '@/components/ContactForm'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  // Resolve title and description dynamically
  const title = (dict as any).media.contact_page?.title || 'MediaContactPage'
  const description = (dict as any).media.contact_page?.subtitle || 'Arasue Horizon'

  return {
    title: `${title} | Arasue`,
    description: description
  }
}

export default async function MediaContactPage({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)

  return (
    <div className="flex flex-col min-h-[80vh] pt-32 pb-24 px-6 bg-foreground text-background">
      <div className="max-w-5xl mx-auto w-full">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            {dict.media.contact_page.title}
          </h1>
          <p className="text-xl md:text-2xl opacity-70 max-w-2xl">
            {dict.media.contact_page.subtitle || dict.media.contact_page.content}
          </p>
        </MotionDiv>
        
        
        <MotionDiv 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <div className="w-full relative aspect-video lg:aspect-square bg-foreground/5 rounded-3xl overflow-hidden border border-foreground/10">
            {/* Image Placeholder */}
            <img 
              src="https://placehold.co/800x800/1a1a1a/ffffff?text=Media+Contact+Image" 
              alt="Media Contact" 
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
            />
          </div>
          <div>
            <ContactForm />
          </div>
        </MotionDiv>
      </div>
    </div>
  )
}
