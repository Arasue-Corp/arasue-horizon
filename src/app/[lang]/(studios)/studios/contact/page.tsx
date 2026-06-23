import { getDictionary, Locale } from '@/i18n/dictionaries'
import { ContactForm } from '@/components/ContactForm'
import { Video } from 'lucide-react'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  // Resolve title and description dynamically
  const title = (dict as any).studios.contact_page?.title || 'StudiosContactPage'
  const description = (dict as any).studios.contact_page?.subtitle || 'Arasue Horizon'

  return {
    title: `${title} | Arasue Studios`,
    description: description
  }
}

export default async function StudiosContactPage({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      
      <main className="flex-grow flex flex-col lg:flex-row relative z-10 pt-20">
        {/* Left Side: Immersive Imagery & Branding */}
        <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-screen flex flex-col justify-end p-12 lg:p-24 overflow-hidden border-r border-border">
          <div className="absolute inset-0 z-0">
            {/* Tactical Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary blur-[120px] rounded-full pointer-events-none -translate-x-1/4 translate-y-1/4" />
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono text-primary tracking-widest uppercase">{dict.studios.contact_page.system_online}</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-6">
              {dict.studios.contact_page.title}
            </h1>
            <p className="text-xl text-foreground/60 font-medium max-w-md font-inter">
              {dict.studios.contact_page.subtitle}
            </p>

            <div className="mt-16 grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">{dict.studios.contact_page.response_time_lbl}</p>
                <p className="font-bold text-lg text-foreground">{dict.studios.contact_page.response_time_val}</p>
              </div>
              <div>
                <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">{dict.studios.contact_page.direct_access_lbl}</p>
                <p className="font-bold text-lg text-foreground">{dict.studios.contact_page.direct_access_val}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="lg:w-1/2 flex items-center justify-center p-6 py-24 lg:p-24 relative">
          <div className="w-full max-w-xl relative z-10">
            <div className="mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-3">{dict.studios.contact_page.project_details_title}</h2>
              <p className="text-foreground/50 font-inter">{dict.studios.contact_page.project_details_subtitle}</p>
            </div>

            <div className="mb-10 p-6 md:p-8 rounded-2xl border border-border bg-secondary/50 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-primary/30 transition-colors">
               <div className="text-center sm:text-left">
                  <h3 className="font-bold text-lg text-foreground mb-1">{dict.studios.contact_page.talk_directly_title}</h3>
                  <p className="text-sm text-foreground/50 font-inter">{dict.studios.contact_page.talk_directly_subtitle}</p>
               </div>
               <a href="https://cal.com/arasue/30min" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-[0_0_20px_var(--color-primary)]">
                 <Video className="w-4 h-4" />
                 {dict.studios.contact_page.book_call}
               </a>
            </div>

            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-[1px] bg-border"></div>
              <span className="text-xs font-mono text-foreground/30 uppercase tracking-widest">{dict.studios.contact_page.or_write_to_us}</span>
              <div className="flex-1 h-[1px] bg-border"></div>
            </div>

            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  )
}
