import { getDictionary, Locale } from '@/i18n/dictionaries'
import { MotionDiv } from '@/components/Motion'
import { LabsContactForm } from '@/components/labs/LabsContactForm'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  const title = (dict as any).labs.contact_page?.title || 'Wholesale & Partnerships'
  const description = (dict as any).labs.contact_page?.subtitle || 'Arasue Labs'

  return {
    title: `${title} | Arasue Labs`,
    description: description
  }
}

export default async function LabsContactPage({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)

  return (
    <div className="min-h-[100vh] bg-background text-foreground flex flex-col relative overflow-hidden">
      {/* Tactical Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ad102f1a_1px,transparent_1px),linear-gradient(to_bottom,#ad102f1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="flex-1 flex flex-col lg:flex-row w-full z-10 pt-24 lg:pt-0">
        {/* Left Side: Extraction Node Map */}
        <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col relative min-h-[40vh] lg:min-h-[100vh]">
          {/* Tactical Map Grid */}
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ad102f33_1px,transparent_1px),linear-gradient(to_bottom,#ad102f33_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
          </div>
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            <MotionDiv 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Extraction Node 01
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-primary">
                {dict.labs.contact_page?.title || "Wholesale"}
              </h1>
              <p className="mt-6 text-xl opacity-80 leading-relaxed font-light">
                {dict.labs.contact_page?.subtitle || "Contact us for bulk orders and premium partnerships."}
              </p>
            </MotionDiv>

            {/* Visual Map Component */}
            <MotionDiv 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mt-12 relative w-full aspect-video rounded-3xl overflow-hidden border border-primary/20 bg-background shadow-2xl flex items-center justify-center"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 grayscale sepia-[0.3] hue-rotate-[320deg]"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838686-37ed7a93ccbc?q=80&w=2000&auto=format&fit=crop')" }}
              />
              
              {/* Radar Sweeper */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full scale-[1.5] animate-ping opacity-20" />
              <div className="absolute inset-0 border border-primary/40 rounded-full scale-[1] opacity-50" />
              
              {/* Target Location Node */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_rgba(220,20,60,0.8)] animate-pulse" />
                <div className="mt-4 px-3 py-1 bg-background/80 backdrop-blur-sm border border-primary/30 rounded text-[10px] font-mono text-primary font-bold tracking-widest uppercase">
                  Sonoran Desert Facility
                  <div className="text-[8px] opacity-70">30°59' N 111°11' W</div>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2 bg-background/50 backdrop-blur-xl border-l border-foreground/10 p-8 lg:p-16 flex flex-col justify-center overflow-y-auto">
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
            className="w-full max-w-xl mx-auto"
          >
            <div className="mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-3">
                {dict.labs.contact_page?.project_details_title || "Wholesale Inquiries"}
              </h2>
              <p className="text-foreground/50 font-sans">
                {dict.labs.contact_page?.project_details_subtitle || "Tell us about your volume needs."}
              </p>
            </div>

            <div className="mb-10 p-6 md:p-8 rounded-2xl border border-primary/20 bg-background/50 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-primary/40 transition-colors">
               <div className="text-center sm:text-left">
                  <h3 className="font-bold text-lg text-foreground mb-1">
                    {dict.labs.contact_page?.talk_directly_title || "Talk to a Specialist"}
                  </h3>
                  <p className="text-sm text-foreground/50 font-sans">
                    {dict.labs.contact_page?.talk_directly_subtitle || "Skip the form. Let's discuss your requirements via video call."}
                  </p>
               </div>
               <a href="https://cal.com/arasue/30min" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 px-6 py-3 rounded-full bg-primary text-white font-bold text-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(220,20,60,0.2)]">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
                 {dict.labs.contact_page?.book_call || "Book a Call"}
               </a>
            </div>

            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-[1px] bg-foreground/10"></div>
              <span className="text-xs font-mono text-foreground/40 uppercase tracking-widest">
                {dict.labs.contact_page?.or_write_to_us || "Or write to us"}
              </span>
              <div className="flex-1 h-[1px] bg-foreground/10"></div>
            </div>

            <LabsContactForm dict={dict.labs} />
          </MotionDiv>
        </div>
      </div>
    </div>
  )
}
