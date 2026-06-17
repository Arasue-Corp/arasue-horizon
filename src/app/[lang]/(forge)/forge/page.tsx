import { getDictionary, Locale } from '@/i18n/dictionaries'
import { cookies } from 'next/headers'
import { MotionDiv } from '@/components/Motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

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
      id: 'seo_audit',
      title: dict.forge.services.seo_audit.title,
      desc: dict.forge.services.seo_audit.desc,
      priceOneTime: isMexico ? '5,000' : '300',
      priceRetainer: isMexico ? '4,000' : '250',
    },
    {
      id: 'automations',
      title: dict.forge.services.automations.title,
      desc: dict.forge.services.automations.desc,
      priceSetup: isMexico ? '10,000' : '800',
      priceMo: isMexico ? '3,000' : '200',
    },
    {
      id: 'pm',
      title: dict.forge.services.pm.title,
      desc: dict.forge.services.pm.desc,
      priceRetainer: isMexico ? '8,000' : '500',
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto space-y-8"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 text-sm font-semibold mb-6">
            Arasue Forge LLC
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-balance">
            {dict.forge.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto text-balance">
            {dict.forge.hero.subtitle}
          </p>
          <div className="pt-8">
            <Link href="#services" className="px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg active:scale-[0.97] transition-transform duration-200 ease-out inline-block">
              {dict.forge.hero.cta}
            </Link>
          </div>
        </MotionDiv>
      </section>

      {/* Trust Ticker */}
      <section className="py-12 border-y border-foreground/10 overflow-hidden bg-foreground/5">
        <div className="text-center text-sm font-semibold text-foreground/50 mb-8">
          {dict.forge.ticker.trusted}
        </div>
        <div className="flex gap-16 items-center justify-center opacity-50 grayscale flex-wrap px-6">
          <div className="text-2xl font-black">Next.js</div>
          <div className="text-2xl font-black">React</div>
          <div className="text-2xl font-black">Tailwind</div>
          <div className="text-2xl font-black">Vercel</div>
          <div className="text-2xl font-black">N8N</div>
          <div className="text-2xl font-black">Meta</div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">{dict.forge.process.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-foreground/10 -z-10" />
          
          <div className="space-y-6 bg-background">
            <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center text-2xl font-black">1</div>
            <h3 className="text-2xl font-bold">{dict.forge.process.step1}</h3>
            <p className="text-foreground/70">{dict.forge.process.step1_desc}</p>
          </div>
          
          <div className="space-y-6 bg-background">
            <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center text-2xl font-black">2</div>
            <h3 className="text-2xl font-bold">{dict.forge.process.step2}</h3>
            <p className="text-foreground/70">{dict.forge.process.step2_desc}</p>
          </div>

          <div className="space-y-6 bg-background">
            <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center text-2xl font-black">3</div>
            <h3 className="text-2xl font-bold">{dict.forge.process.step3}</h3>
            <p className="text-foreground/70">{dict.forge.process.step3_desc}</p>
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section id="services" className="py-32 px-6 bg-foreground/5 border-y border-foreground/10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">{dict.forge.pricing.title}</h2>
              <p className="text-xl text-foreground/70">{dict.forge.pricing.features}</p>
            </div>
            <div className="text-sm font-medium px-4 py-2 bg-background rounded-full border border-foreground/10">
              {dict.nav.currency_detected}: {currencyCode}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-background border border-foreground/10 p-8 rounded-3xl hover:shadow-xl transition-shadow flex flex-col">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70 mb-8 flex-1">{service.desc}</p>
                
                <div className="space-y-4 border-t border-foreground/10 pt-6">
                  {service.priceSetup && (
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm font-medium text-foreground/60">{dict.forge.pricing.setup}</span>
                      <span className="text-xl font-bold">{currencySymbol}{service.priceSetup}</span>
                    </div>
                  )}
                  {service.priceMo && (
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm font-medium text-foreground/60">{dict.forge.pricing.mo}</span>
                      <span className="text-xl font-bold">{currencySymbol}{service.priceMo}</span>
                    </div>
                  )}
                  {service.priceOneTime && (
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm font-medium text-foreground/60">{dict.forge.pricing.one_time}</span>
                      <span className="text-xl font-bold">{currencySymbol}{service.priceOneTime}</span>
                    </div>
                  )}
                  {service.priceRetainer && (
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm font-medium text-foreground/60">{dict.forge.pricing.retainer}</span>
                      <span className="text-xl font-bold">{currencySymbol}{service.priceRetainer}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight mb-16">{dict.forge.faq.title}</h2>
        {/* @ts-expect-error - Radix UI types conflict with React 19 */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-bold">{dict.forge.faq.q1}</AccordionTrigger>
            <AccordionContent className="text-foreground/70 text-base">
              {dict.forge.faq.a1}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-bold">{dict.forge.faq.q2}</AccordionTrigger>
            <AccordionContent className="text-foreground/70 text-base">
              {dict.forge.faq.a2}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-bold">{dict.forge.faq.q3}</AccordionTrigger>
            <AccordionContent className="text-foreground/70 text-base">
              {dict.forge.faq.a3}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-32 px-6 bg-foreground text-background text-center">
        <div className="container mx-auto max-w-2xl space-y-8">
          <h2 className="text-5xl font-black tracking-tight">Ready to start?</h2>
          <p className="text-xl text-background/70">Contact us today to schedule a free discovery call and see how we can scale your digital presence.</p>
          <div className="pt-8">
            <button className="px-8 py-4 rounded-full bg-background text-foreground font-bold text-lg active:scale-[0.97] transition-transform duration-200 ease-out">
              {dict.forge.hero.cta_contact}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
