import { getDictionary, Locale } from '@/i18n/dictionaries'
import { cookies } from 'next/headers'
import { MotionDiv } from '@/components/Motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { ForgeProcess } from '@/components/forge/ForgeProcess'
import { ForgeEstimator } from '@/components/forge/ForgeEstimator'
import { ForgeFAQ } from '@/components/forge/ForgeFAQ'
import Image from 'next/image'
export default async function ForgePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as Locale)
  const cookieStore = await cookies()
  const country = cookieStore.get('user-country')?.value || 'US'
  const isMexico = country === 'MX'
  
  const currencySymbol = isMexico ? '$' : '$'
  const currencyCode = isMexico ? 'MXN' : 'USD'

  const services = [
    {
      id: 'web_dev',
      title: dict.forge.services.web_dev.title,
      desc: dict.forge.services.web_dev.desc,
      priceSetup: isMexico ? '5,000' : '500',
      priceMo: isMexico ? '1,500' : '150',
    },
    {
      id: 'brand_web',
      title: dict.forge.services.brand_web.title,
      desc: dict.forge.services.brand_web.desc,
      priceSetup: isMexico ? '5,000' : '500',
      priceMo: isMexico ? '1,500' : '150',
    },
    {
      id: 'meta_ads',
      title: dict.forge.services.meta_ads.title,
      desc: dict.forge.services.meta_ads.desc,
      priceOneTime: isMexico ? '5,000' : '300',
      priceRetainer: isMexico ? '4,000' : '250',
    },
    {
      id: 'automations',
      title: dict.forge.services.automations.title,
      desc: dict.forge.services.automations.desc,
      priceSetup: isMexico ? '10,000' : '800',
      priceMo: isMexico ? '3,000' : '200',
    }
  ]

  return (
    <div className="flex flex-col bg-[#050505] text-white">
      {/* 1. Tech Premium Hero */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 px-6 overflow-hidden">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
        </div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -z-10" />

        <MotionDiv 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="container mx-auto max-w-6xl relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-mono mb-8 text-blue-400">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            {dict.forge.hero.badge}
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-balance leading-[0.9]">
            {dict.forge.hero.title}
          </h1>
          <p className="text-xl md:text-3xl text-white/60 max-w-2xl mt-8 font-light tracking-wide">
            {dict.forge.hero.subtitle}
          </p>
          <div className="pt-12 flex flex-col sm:flex-row gap-4">
            <Link href="#contact" className="px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 active:scale-95 transition-all text-center">
              {dict.forge.hero.cta}
            </Link>
            <Link href="#work" className="px-10 py-5 rounded-full border border-white/20 font-bold text-lg hover:bg-white/10 active:scale-95 transition-all text-center">
              {dict.forge.hero.secondary_cta}
            </Link>
          </div>
        </MotionDiv>
      </section>

      {/* 2. Tech Stack Marquee (Static elegant presentation) */}
      <section className="py-16 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-mono text-white/40 mb-8 uppercase tracking-widest">{dict.forge.ticker.trusted}</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width={40} height={40} className="h-10 w-auto" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js" width={40} height={40} className="h-10 w-auto invert" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind" width={40} height={40} className="h-10 w-auto" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL" width={40} height={40} className="h-10 w-auto" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" width={40} height={40} className="h-10 w-auto invert" />
          </div>
        </div>
      </section>

      {/* 3. Case Studies / Featured Work */}
      <section id="work" className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">{dict.forge.work.title}</h2>
            <p className="text-xl text-white/60 max-w-2xl">{dict.forge.work.subtitle}</p>
          </div>

          <div className="space-y-32">
            {/* Project 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-8">
                <div className="text-blue-400 font-mono text-sm uppercase tracking-widest">{dict.forge.work.project1_category}</div>
                <h3 className="text-4xl font-bold">{dict.forge.work.project1_title}</h3>
                <p className="text-lg text-white/60 leading-relaxed">{dict.forge.work.project1_desc}</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full border border-white/10 text-sm">Next.js</span>
                  <span className="px-4 py-2 rounded-full border border-white/10 text-sm">PostgreSQL</span>
                  <span className="px-4 py-2 rounded-full border border-white/10 text-sm">Stripe API</span>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative p-8 group">
                  <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Dashboard Mockup" fill className="w-full h-full object-cover rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-1">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative p-8 group">
                  <Image src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop" alt="Mobile App Mockup" fill className="w-full h-full object-cover rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
              <div className="order-2 space-y-8">
                <div className="text-purple-400 font-mono text-sm uppercase tracking-widest">{dict.forge.work.project2_category}</div>
                <h3 className="text-4xl font-bold">{dict.forge.work.project2_title}</h3>
                <p className="text-lg text-white/60 leading-relaxed">{dict.forge.work.project2_desc}</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full border border-white/10 text-sm">React Native</span>
                  <span className="px-4 py-2 rounded-full border border-white/10 text-sm">GraphQL</span>
                  <span className="px-4 py-2 rounded-full border border-white/10 text-sm">Shopify</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process Flow */}
      <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
        <ForgeProcess lang={resolvedParams.lang as 'en' | 'es'} />
      </section>

      {/* 5. Services & Pricing (Retainer Model) */}
      <section id="services" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">{dict.forge.pricing.title}</h2>
              <p className="text-xl text-white/60">{dict.forge.pricing.features}</p>
            </div>
            <div className="text-sm font-mono px-4 py-2 bg-white/5 rounded-full border border-white/10">
              {dict.nav.currency_detected}: {currencyCode}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors flex flex-col group">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-white/60 mb-8 flex-1 text-sm">{service.desc}</p>
                
                <div className="space-y-4 border-t border-white/10 pt-6">
                  {service.priceSetup && (
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-mono text-white/40">{dict.forge.pricing.setup}</span>
                      <span className="text-xl font-bold">{currencySymbol}{service.priceSetup}</span>
                    </div>
                  )}
                  {service.priceMo && (
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-mono text-white/40">{dict.forge.pricing.mo}</span>
                      <span className="text-xl font-bold text-blue-400">{currencySymbol}{service.priceMo}</span>
                    </div>
                  )}
                  {service.priceOneTime && (
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-mono text-white/40">{dict.forge.pricing.one_time}</span>
                      <span className="text-xl font-bold">{currencySymbol}{service.priceOneTime}</span>
                    </div>
                  )}
                  {service.priceRetainer && (
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-mono text-white/40">{dict.forge.pricing.retainer}</span>
                      <span className="text-xl font-bold text-blue-400">{currencySymbol}{service.priceRetainer}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5. Project Estimator */}
      <section className="py-24 px-6 relative z-10 border-t border-white/5">
        <ForgeEstimator lang={resolvedParams.lang as 'en' | 'es'} />
      </section>

      {/* 5.6. FAQ */}
      <section className="py-24 px-6 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <ForgeFAQ lang={resolvedParams.lang as 'en' | 'es'} />
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="text-blue-400 text-4xl">"</div>
              <p className="text-2xl font-light leading-relaxed italic text-white/80">{dict.forge.testimonials.text1}</p>
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-white/10" />
                <div>
                  <div className="font-bold">{dict.forge.testimonials.author1}</div>
                  <div className="text-sm text-white/40 font-mono">{dict.forge.testimonials.role1}</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="text-purple-400 text-4xl">"</div>
              <p className="text-2xl font-light leading-relaxed italic text-white/80">{dict.forge.testimonials.text2}</p>
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-white/10" />
                <div>
                  <div className="font-bold">{dict.forge.testimonials.author2}</div>
                  <div className="text-sm text-white/40 font-mono">{dict.forge.testimonials.role2}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA / Contact Section */}
      <section id="contact" className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-blue-600/10" />
        <div className="container mx-auto max-w-3xl space-y-8 relative z-10 bg-black/40 backdrop-blur-xl p-16 rounded-[3rem] border border-white/10 shadow-2xl">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight">{dict.forge.cta.title}</h2>
          <p className="text-xl text-white/60 font-light">{dict.forge.cta.subtitle}</p>
          <div className="pt-8">
            <button className="px-10 py-5 rounded-full bg-white text-black font-bold text-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              {dict.forge.hero.cta_contact}
            </button>
          </div>
          <p className="text-xs font-mono text-white/40 pt-4">{dict.forge.cta.note}</p>
        </div>
      </section>
    </div>
  )
}
