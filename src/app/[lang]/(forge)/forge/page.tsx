import { getDictionary, type Locale } from '@/i18n/dictionaries'
import { ForgeHero } from '@/components/forge/ForgeHero'
import { ForgeTechMarquee } from '@/components/forge/ForgeTechMarquee'
import { ForgePortfolio } from '@/components/forge/ForgePortfolio'
import { ForgeWorkshop } from '@/components/forge/ForgeWorkshop'
import { ForgeProcess } from '@/components/forge/ForgeProcess'
import { ForgeServices } from '@/components/forge/ForgeServices'
import { ForgeEstimator } from '@/components/forge/ForgeEstimator'
import { ForgeFAQ } from '@/components/forge/ForgeFAQ'
import Link from 'next/link'

export default async function ForgePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as Locale)
  const isMexico = false
  
  const currencySymbol = isMexico ? '$' : '$'

  return (
    <div className="flex flex-col bg-background text-foreground">
      {/* 1. Tech Premium Hero */}
      <ForgeHero dict={dict.forge.hero} />

      {/* 2. Tech Stack Marquee */}
      <ForgeTechMarquee text={dict.forge.ticker.trusted} />

      {/* 3. Case Studies / Featured Work (Parallax) */}
      <ForgePortfolio dict={dict.forge.work} />

      {/* 3.5 Live Lab / Workshop Demos */}
      <ForgeWorkshop dict={(dict.forge as any).workshop_section} lang={resolvedParams.lang} />

      {/* 4. Process Flow (Sticky Scroll) */}
      <ForgeProcess dict={(dict.forge as any).process_section} />

      {/* 5. Services & Pricing (Hover Reveal) */}
      <ForgeServices dict={dict.forge} currencySymbol={currencySymbol} />

      {/* 6. Estimator Tool (Glassmorphism) */}
      <section className="py-32 px-6 bg-secondary/30 relative">
        <ForgeEstimator dict={(dict.forge as any).estimator_section} currencySymbol={currencySymbol} />
      </section>

      {/* 7. FAQ */}
      <section className="py-32 px-6 bg-background">
        <ForgeFAQ dict={dict.forge.faq} />
      </section>

      {/* 8. Clean CTA */}
      <section className="py-32 px-6 bg-secondary relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-6xl md:text-[6rem] font-bold tracking-tighter mb-8 leading-none">{dict.forge.cta.title}</h2>
          <p className="text-2xl text-foreground/60 mb-16 font-inter font-medium">{dict.forge.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href={`/${resolvedParams.lang}/forge/contact`} className="px-16 py-8 rounded-full bg-foreground text-background font-bold text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl">
              {dict.forge.hero.cta_contact}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
