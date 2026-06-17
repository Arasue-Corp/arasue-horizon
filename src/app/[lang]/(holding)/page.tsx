import { getDictionary, Locale } from '@/i18n/dictionaries'
import Link from 'next/link'
import { MotionDiv } from '@/components/Motion'

export default async function HorizonPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden min-h-[80vh] flex items-center justify-center">
        {/* Abstract background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-foreground/5 rounded-full blur-3xl -z-10" />
        
        <MotionDiv 
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-balance leading-tight">
            {dict.horizon.hero.title}
          </h1>
          <p className="text-xl md:text-3xl text-foreground/60 max-w-3xl mx-auto text-balance font-medium">
            {dict.horizon.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link href={`/${resolvedParams.lang}/forge`} className="px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg active:scale-[0.97] transition-transform duration-200 ease-out w-full sm:w-auto">
              {dict.horizon.hero.cta}
            </Link>
            <Link href="#manifesto" className="px-8 py-4 rounded-full border border-foreground/20 font-bold text-lg active:scale-[0.97] hover:bg-foreground/5 transition-all duration-200 ease-out w-full sm:w-auto">
              {dict.horizon.hero.secondary_cta}
            </Link>
          </div>
        </MotionDiv>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 border-y border-foreground/10 bg-foreground/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="text-6xl font-black tracking-tighter">3+</div>
              <div className="text-lg text-foreground/60 font-semibold">{dict.horizon.stats.companies}</div>
            </MotionDiv>
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <div className="text-6xl font-black tracking-tighter">150+</div>
              <div className="text-lg text-foreground/60 font-semibold">{dict.horizon.stats.projects}</div>
            </MotionDiv>
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <div className="text-6xl font-black tracking-tighter">$10M+</div>
              <div className="text-lg text-foreground/60 font-semibold">{dict.horizon.stats.valuation}</div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Ecosystem Bento Grid */}
      <section className="py-32 px-6 container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center tracking-tight">{dict.horizon.subsidiaries.title}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Card (Forge) */}
          <Link href={`/${resolvedParams.lang}/forge`} className="lg:col-span-2 group">
            <MotionDiv 
              whileHover={{ y: -5 }}
              className="bg-foreground/5 border border-foreground/10 p-12 rounded-[2rem] hover:bg-foreground/10 transition-colors h-full flex flex-col justify-between overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-black mb-6">{dict.horizon.subsidiaries.forge.name}</h3>
                <p className="text-xl md:text-2xl text-foreground/70 max-w-md leading-relaxed">{dict.horizon.subsidiaries.forge.description}</p>
              </div>
              <div className="relative z-10 mt-16 flex items-center gap-2 font-bold text-lg group-hover:gap-4 transition-all">
                {dict.horizon.subsidiaries.forge.link} <span className="text-2xl">→</span>
              </div>
            </MotionDiv>
          </Link>

          {/* Secondary Cards */}
          <div className="space-y-8 flex flex-col">
            <MotionDiv className="bg-foreground/5 border border-foreground/10 p-10 rounded-[2rem] flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">{dict.horizon.subsidiaries.labs.name}</h3>
                <p className="text-foreground/70">{dict.horizon.subsidiaries.labs.description}</p>
              </div>
              <div className="mt-8 text-sm font-semibold text-foreground/40">
                {dict.horizon.subsidiaries.labs.link}
              </div>
            </MotionDiv>
            <MotionDiv className="bg-foreground/5 border border-foreground/10 p-10 rounded-[2rem] flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">{dict.horizon.subsidiaries.media.name}</h3>
                <p className="text-foreground/70">{dict.horizon.subsidiaries.media.description}</p>
              </div>
              <div className="mt-8 text-sm font-semibold text-foreground/40">
                {dict.horizon.subsidiaries.media.link}
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-32 px-6 bg-foreground text-background">
        <div className="container mx-auto text-center max-w-4xl space-y-8">
          <h2 className="text-5xl font-black tracking-tight">{dict.horizon.global.title}</h2>
          <p className="text-2xl text-background/70">{dict.horizon.global.desc}</p>
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 font-bold text-xl">
            <div>New York</div>
            <div>Mexico City</div>
            <div>San Francisco</div>
            <div>Miami</div>
          </div>
        </div>
      </section>
    </div>
  )
}
