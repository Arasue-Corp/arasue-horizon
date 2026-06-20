import { getDictionary, Locale } from '@/i18n/dictionaries'
import Link from 'next/link'
import { HorizonEcosystem } from '@/components/holding/HorizonEcosystem'
import { HorizonLeadership } from '@/components/holding/HorizonLeadership'
import { HorizonInvestorForm } from '@/components/holding/HorizonInvestorForm'
import { HoldingHero } from '@/components/holding/HoldingHero'
import { HorizonVision } from '@/components/holding/HorizonVision'
import { HorizonPhilosophy } from '@/components/holding/HorizonPhilosophy'
import { HorizonGlobal } from '@/components/holding/HorizonGlobal'
import { TacticalStatsGrid } from '@/components/holding/TacticalStatsGrid'
import { NewsroomBento } from '@/components/holding/NewsroomBento'
import { cookies } from 'next/headers'

export default async function HorizonPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  // Read locale preferences from middleware cookie
  const cookieStore = await cookies()
  const prefsCookie = cookieStore.get('arasue-locale-prefs')
  let prefs = { currency: 'USD', system: 'metric', country: 'US' }
  if (prefsCookie) {
    try {
      prefs = JSON.parse(prefsCookie.value)
    } catch(e) {}
  }
  
  return (
    <div className="flex flex-col bg-[#F2F2F2]">
      {/* 1. Corporate Hero */}
      <HoldingHero dict={dict} lang={resolvedParams.lang} />

      {/* 2. Global Stats */}
      <TacticalStatsGrid dict={dict} prefs={prefs} />

      {/* 2.5. Operating Philosophy */}
      <HorizonPhilosophy dict={dict} />

      {/* 3. Vision / About */}
      <HorizonVision dict={dict} lang={resolvedParams.lang} />

      {/* 3.5. Leadership */}
      <section className="py-32 px-6 bg-[#162D59]/5">
        <HorizonLeadership dict={dict} />
      </section>

      {/* 4. Ecosystem */}
      <section id="portfolio" className="py-32 px-6 bg-[#F2F2F2]">
        <HorizonEcosystem lang={resolvedParams.lang as 'en' | 'es'} />
      </section>

      {/* 4.25. Global Footprint */}
      <HorizonGlobal dict={dict} />

      {/* 4.5. Investor Relations Form */}
      <section className="py-32 px-6 bg-[#162D59] text-[#F2F2F2]">
        <HorizonInvestorForm dict={dict} />
      </section>

      {/* 5. Newsroom */}
      <NewsroomBento dict={dict} lang={resolvedParams.lang} />
    </div>
  )
}
