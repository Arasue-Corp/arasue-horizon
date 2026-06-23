import { getDictionary, Locale } from '@/i18n/dictionaries'
import { MotionDiv } from '@/components/Motion'
import { StudiosCaseStudies } from '@/components/studios/StudiosCaseStudies'
import { StudiosProcess } from '@/components/studios/StudiosProcess'
import { StudiosROICalculator } from '@/components/studios/StudiosROICalculator'

export default async function MediaPage({
  params
}: {
  params: { lang: string }
}) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)

  return (
    <div className="flex flex-col bg-background text-foreground font-sans selection:bg-primary/30">
      {/* Hero Section */}
      <section className="min-h-[100vh] flex flex-col justify-center px-6 relative overflow-hidden">
        {/* Abstract/Video Placeholder Background */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop" alt="Abstract Tech" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <MotionDiv 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="max-w-7xl mx-auto w-full z-10"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-8">
            Arasue Studios
          </div>
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-black tracking-tighter uppercase leading-[0.85] bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/40">
            {dict.studios.hero.title}
          </h1>
          <p className="text-xl md:text-3xl mt-12 max-w-2xl font-light opacity-80 leading-relaxed border-l-4 border-primary pl-6">
            {dict.studios.hero.subtitle}
          </p>
          <div className="pt-16 flex flex-wrap gap-6">
            <button className="px-10 py-5 rounded-full bg-foreground text-background font-black text-lg hover:scale-105 active:scale-95 transition-all uppercase tracking-wide">
              {dict.studios.hero.cta}
            </button>
            <button className="px-10 py-5 rounded-full border-2 border-foreground/20 font-bold text-lg hover:bg-foreground/10 active:scale-95 transition-all uppercase tracking-wide">
              {dict.studios.hero.cta_contact}
            </button>
          </div>
        </MotionDiv>
      </section>

      {/* Ticker / Brands Placeholder */}
      <section className="py-12 border-y border-border bg-secondary/10 overflow-hidden">
        <div className="flex gap-16 items-center whitespace-nowrap opacity-50 font-bold text-2xl uppercase tracking-widest">
          {/* Simulated marquee */}
          <span>NETFLIX</span> • <span>HBO MAX</span> • <span>TWITCH</span> • <span>YOUTUBE</span> • <span>SPOTIFY</span> • <span>RED BULL</span> •
          <span>NETFLIX</span> • <span>HBO MAX</span> • <span>TWITCH</span> • <span>YOUTUBE</span> • <span>SPOTIFY</span> • <span>RED BULL</span>
        </div>
      </section>

      {/* Selected Campaigns */}
      <section className="py-32 px-6">
        <StudiosCaseStudies lang={resolvedParams.lang as 'en' | 'es'} />
      </section>

      {/* Services/Capabilities Grid */}
      <section className="py-32 px-6 bg-background text-foreground">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 uppercase text-primary">{dict.studios.services.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Content */}
            <MotionDiv 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="aspect-square bg-secondary text-secondary-foreground p-10 rounded-[3rem] flex flex-col justify-end group cursor-pointer relative overflow-hidden border border-border hover:border-primary/50 transition-colors"
            >
              <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-background flex items-center justify-center group-hover:scale-125 transition-transform text-primary">
                🎥
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tight">{dict.studios.services.content}</h3>
            </MotionDiv>
            
            {/* 2. Streams */}
            <MotionDiv 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="aspect-square bg-background p-10 rounded-[3rem] flex flex-col justify-end group cursor-pointer relative overflow-hidden border border-border hover:bg-secondary hover:text-secondary-foreground transition-colors duration-500"
            >
              <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-secondary group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                🔴
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tight">{dict.studios.services.streams}</h3>
            </MotionDiv>
            
            {/* 3. Branding */}
            <MotionDiv 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-square bg-background p-10 rounded-[3rem] flex flex-col justify-end group cursor-pointer relative overflow-hidden border border-border hover:bg-secondary hover:text-secondary-foreground transition-colors duration-500"
            >
              <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-secondary group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                ✨
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tight">{dict.studios.services.branding}</h3>
            </MotionDiv>

            {/* 4. Ads */}
            <MotionDiv 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="aspect-square bg-background p-10 rounded-[3rem] flex flex-col justify-end group cursor-pointer relative overflow-hidden border border-border hover:bg-secondary hover:text-secondary-foreground transition-colors duration-500"
            >
              <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-secondary group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                📈
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tight">{dict.studios.services.ads}</h3>
            </MotionDiv>

            {/* 5. Marketing */}
            <MotionDiv 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="aspect-square bg-background p-10 rounded-[3rem] flex flex-col justify-end group cursor-pointer relative overflow-hidden border border-border hover:bg-secondary hover:text-secondary-foreground transition-colors duration-500"
            >
              <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-secondary group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                🎯
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tight">{dict.studios.services.marketing}</h3>
            </MotionDiv>

            {/* 6. Lead Generation */}
            <MotionDiv 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="aspect-square bg-background p-10 rounded-[3rem] flex flex-col justify-end group cursor-pointer relative overflow-hidden border border-border hover:bg-secondary hover:text-secondary-foreground transition-colors duration-500"
            >
              <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-secondary group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                🚀
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tight">{dict.studios.services.lead_gen}</h3>
            </MotionDiv>
          </div>
        </div>
      </section>
      {/* 4.5. Process */}
      <section className="py-32 px-6 border-y border-border bg-secondary/10">
        <StudiosProcess lang={resolvedParams.lang as 'en' | 'es'} />
      </section>

      {/* Creators Roster */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">{dict.studios.creators_page.title}</h2>
          <p className="text-xl text-foreground/50 mb-16">{dict.studios.creators_page.subtitle}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-secondary/50 rounded-3xl overflow-hidden mb-6 relative border border-border">
                  <img src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop&sig=${i}`} alt={`Creator ${i}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="font-bold">@creator{i}</div>
                    <div className="text-sm text-primary">1.{i}M Followers</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5. ROI Calculator */}
      <section className="py-32 px-6">
        <StudiosROICalculator lang={resolvedParams.lang as 'en' | 'es'} />
      </section>

      {/* Collab CTA */}
      <section className="py-32 px-6 border-t border-border text-center bg-secondary/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 text-primary">{dict.studios.contact_page.title}</h2>
          <p className="text-2xl text-foreground/60 mb-12">{dict.studios.contact_page.subtitle}</p>
          <button className="px-12 py-6 rounded-full bg-primary text-primary-foreground font-black text-xl hover:scale-105 active:scale-95 transition-all uppercase tracking-wide shadow-[0_0_40px_var(--primary)]">
            Send Brief
          </button>
        </div>
      </section>
    </div>
  )
}
