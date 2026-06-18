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
      {/* 1. Corporate Hero */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Corporate Architecture" className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 text-sm font-semibold tracking-widest uppercase mb-4">
              Arasue Horizon Group
            </div>
            <h1 className="text-6xl md:text-8xl font-playfair tracking-tight leading-tight">
              {dict.horizon.hero.title}
            </h1>
            <p className="text-xl md:text-3xl text-foreground/70 max-w-2xl font-medium">
              {dict.horizon.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-8">
              <Link href={`/${resolvedParams.lang}/forge`} className="px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg active:scale-[0.97] transition-all hover:bg-foreground/90 w-full sm:w-auto text-center">
                {dict.horizon.hero.cta}
              </Link>
              <Link href="#portfolio" className="px-8 py-4 rounded-full border border-foreground/20 font-bold text-lg active:scale-[0.97] hover:bg-foreground/5 transition-all w-full sm:w-auto text-center">
                {dict.horizon.hero.explore_portfolio}
              </Link>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* 2. Global Stats */}
      <section className="py-16 border-y border-foreground/10 bg-foreground/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
            <div className="space-y-2 border-l-2 border-foreground/20 pl-6">
              <div className="text-4xl md:text-5xl font-playfair font-black tracking-tighter">3</div>
              <div className="text-sm uppercase tracking-widest text-foreground/60 font-semibold">{dict.horizon.stats.companies}</div>
            </div>
            <div className="space-y-2 border-l-2 border-foreground/20 pl-6">
              <div className="text-4xl md:text-5xl font-playfair font-black tracking-tighter">150+</div>
              <div className="text-sm uppercase tracking-widest text-foreground/60 font-semibold">{dict.horizon.stats.projects}</div>
            </div>
            <div className="space-y-2 border-l-2 border-foreground/20 pl-6">
              <div className="text-4xl md:text-5xl font-playfair font-black tracking-tighter">$10M+</div>
              <div className="text-sm uppercase tracking-widest text-foreground/60 font-semibold">{dict.horizon.stats.valuation}</div>
            </div>
            <div className="space-y-2 border-l-2 border-foreground/20 pl-6">
              <div className="text-4xl md:text-5xl font-playfair font-black tracking-tighter">4</div>
              <div className="text-sm uppercase tracking-widest text-foreground/60 font-semibold">{dict.horizon.stats.offices}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision / About */}
      <section className="py-32 px-6 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <MotionDiv 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-square bg-foreground/5 rounded-3xl overflow-hidden relative"
          >
            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop" alt="Corporate Vision" className="w-full h-full object-cover grayscale opacity-80" />
          </MotionDiv>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-playfair tracking-tight">{dict.horizon.vision.title}</h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              {dict.horizon.vision.p1}
            </p>
            <p className="text-xl text-foreground/70 leading-relaxed">
              {dict.horizon.vision.p2}
            </p>
            <Link href={`/${resolvedParams.lang}/about`} className="inline-flex items-center gap-2 font-bold hover:gap-4 transition-all">
              {dict.horizon.vision.link} <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Subsidiaries Portfolio (Bento Grid) */}
      <section id="portfolio" className="py-32 px-6 bg-foreground text-background">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-4xl md:text-6xl font-playfair tracking-tight max-w-2xl">{dict.horizon.subsidiaries.title}</h2>
            <Link href={`/${resolvedParams.lang}/investors`} className="px-6 py-3 rounded-full border border-background/20 font-semibold hover:bg-background/10 transition-colors">
              {dict.horizon.subsidiaries.investors_link}
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">
            {/* Arasue Forge - Main Focus */}
            <Link href={`/${resolvedParams.lang}/forge`} className="lg:col-span-8 group relative overflow-hidden rounded-[2rem] bg-background/5 border border-background/10">
              <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" alt="Arasue Forge" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 grayscale mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>
              <div className="relative z-10 h-full p-10 flex flex-col justify-end">
                <div className="text-blue-400 font-semibold tracking-widest uppercase mb-4 text-sm">{dict.horizon.subsidiaries.forge.tag}</div>
                <h3 className="text-4xl md:text-6xl font-playfair mb-4 text-white">{dict.horizon.subsidiaries.forge.name}</h3>
                <p className="text-xl text-white/80 max-w-lg mb-8">{dict.horizon.subsidiaries.forge.description}</p>
                <div className="font-bold text-white flex items-center gap-2 group-hover:gap-4 transition-all">
                  {dict.horizon.subsidiaries.forge.link} <span>→</span>
                </div>
              </div>
            </Link>

            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Media */}
              <Link href={`/${resolvedParams.lang}/media`} className="flex-1 group relative overflow-hidden rounded-[2rem] bg-background/5 border border-background/10">
                <div className="absolute inset-0">
                  <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop" alt="Arasue Media" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700 grayscale mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                </div>
                <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                  <div className="text-purple-400 font-semibold tracking-widest uppercase mb-2 text-xs">{dict.horizon.subsidiaries.media.tag}</div>
                  <h3 className="text-3xl font-playfair mb-2 text-white">{dict.horizon.subsidiaries.media.name}</h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">{dict.horizon.subsidiaries.media.description}</p>
                  <div className="font-bold text-white text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                    {dict.horizon.subsidiaries.media.link} <span>→</span>
                  </div>
                </div>
              </Link>
              
              {/* Labs */}
              <Link href={`/${resolvedParams.lang}/labs`} className="flex-1 group relative overflow-hidden rounded-[2rem] bg-background/5 border border-background/10">
                <div className="absolute inset-0">
                  <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop" alt="Arasue Labs" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700 grayscale mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                </div>
                <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                  <div className="text-green-400 font-semibold tracking-widest uppercase mb-2 text-xs">{dict.horizon.subsidiaries.labs.tag}</div>
                  <h3 className="text-3xl font-playfair mb-2 text-white">{dict.horizon.subsidiaries.labs.name}</h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">{dict.horizon.subsidiaries.labs.description}</p>
                  <div className="font-bold text-white text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                    {dict.horizon.subsidiaries.labs.link} <span>→</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Newsroom (Press Releases Placeholder) */}
      <section className="py-32 px-6 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <h2 className="text-4xl md:text-5xl font-playfair tracking-tight">{dict.horizon.news.title}</h2>
          <Link href={`/${resolvedParams.lang}/newsroom`} className="font-bold hover:underline underline-offset-4">{dict.horizon.news.link}</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Link href={`/${resolvedParams.lang}/newsroom`} key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-foreground/5 mb-6 relative">
                <img src={`https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop&sig=${i}`} alt={`News ${i}`} className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="text-sm font-semibold text-foreground/50 mb-3">Q{i} 2026 • {dict.horizon.news.tag}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-foreground/70 transition-colors">{dict.horizon.news.article_title}</h3>
              <p className="text-foreground/70 line-clamp-2">{dict.horizon.news.article_desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
