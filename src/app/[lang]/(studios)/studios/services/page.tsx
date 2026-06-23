import { getDictionary, Locale } from '@/i18n/dictionaries'
import { MotionDiv } from '@/components/Motion'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  const title = (dict as any).studios.services_page?.title || 'Studios Services'
  const description = (dict as any).studios.services_page?.subtitle || 'Arasue Studios'

  return {
    title: `${title} | Arasue Studios`,
    description: description
  }
}

export default async function StudiosServicesPage({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-6 bg-background text-foreground overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none translate-x-1/4 -translate-y-1/4" />
      
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono text-primary tracking-widest uppercase">{dict.studios.services_page.title}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            {dict.studios.services_page.title}
          </h1>
          <p className="text-xl md:text-2xl opacity-70 max-w-2xl font-inter">
            {dict.studios.services_page.subtitle}
          </p>
        </MotionDiv>
        
        {/* Services Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {[
            { id: 'content', icon: '🎥', color: 'bg-secondary' },
            { id: 'streams', icon: '🔴', color: 'bg-background' },
            { id: 'branding', icon: '✨', color: 'bg-background' },
            { id: 'ads', icon: '📈', color: 'bg-background' },
            { id: 'marketing', icon: '🎯', color: 'bg-background' },
            { id: 'lead_gen', icon: '🚀', color: 'bg-background' }
          ].map((item, i) => (
            <MotionDiv 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`p-8 rounded-[2rem] border border-border flex items-start gap-6 hover:border-primary/50 transition-colors ${item.color}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-border/50 flex items-center justify-center text-2xl flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">{(dict as any).studios.services[item.id]}</h3>
                <p className="text-foreground/60 text-sm font-inter">
                  Full service execution for {((dict as any).studios.services[item.id] as string).toLowerCase()} designed to dominate the market.
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Image Placeholder */}
        <MotionDiv 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 w-full aspect-video bg-secondary/50 rounded-3xl overflow-hidden border border-border relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop" 
            alt="Studios Services" 
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:opacity-80 transition-opacity duration-700"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="px-8 py-4 bg-background/80 backdrop-blur-md border border-border rounded-full text-primary font-bold tracking-widest uppercase">
               Arasue Studios Pipeline
             </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  )
}
