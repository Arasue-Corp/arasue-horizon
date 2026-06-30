import { getDictionary, Locale } from '@/i18n/dictionaries'
import { MotionDiv } from '@/components/Motion'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  
  return {
    title: `${dict.corporate.terms.title} | Arasue Horizon`,
    description: dict.corporate.terms.intro
  }
}

export default async function TermsPage({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)
  const t = dict.corporate.terms

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-6 bg-background text-foreground">
      <div className="max-w-4xl mx-auto w-full">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="space-y-6 mb-16 border-b border-foreground/10 pb-12"
        >
          <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-[15px] text-xs font-semibold tracking-widest uppercase text-foreground/70 mb-4">
            <span>{t.last_updated}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl opacity-70 max-w-2xl font-light">
            {t.intro}
          </p>
        </MotionDiv>
        
        <MotionDiv 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-16"
        >
          <section className="space-y-4">
            <h2 className="text-3xl font-bold font-playfair">{t.usage_title}</h2>
            <p className="text-lg opacity-80 leading-relaxed">
              {t.usage_desc}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold font-playfair">{t.liability_title}</h2>
            <p className="text-lg opacity-80 leading-relaxed">
              {t.liability_desc}
            </p>
          </section>
        </MotionDiv>
      </div>
    </div>
  )
}
