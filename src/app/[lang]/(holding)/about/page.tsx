import { getDictionary, Locale } from '@/i18n/dictionaries'
import { MotionDiv } from '@/components/Motion'

export default async function AboutPage({
  params
}: {
  params: { lang: string }
}) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)

  return (
    <div className="flex flex-col">
      <section className="pt-32 pb-24 px-6">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="max-w-4xl space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            {dict.corporate.about.title}
          </h1>
          <p className="text-xl md:text-3xl mt-8 font-medium opacity-70">
            {dict.corporate.about.content}
          </p>
        </MotionDiv>
        <MotionDiv 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-24 w-full aspect-video bg-foreground/5 rounded-3xl overflow-hidden border border-foreground/10"
        >
          <img 
            src="https://images.unsplash.com/photo-1506806732259-39c2d02684ce?q=80&w=2000&auto=format&fit=crop" 
            alt="Holding About - Organic" 
            className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
          />
        </MotionDiv>
      </section>
      
      <section className="py-24 px-6 border-t border-foreground/10 bg-foreground/5">
        <div className="max-w-4xl space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 font-playfair">{dict.corporate.about.leadership_title}</h2>
            <p className="text-lg opacity-70 leading-relaxed">{dict.corporate.about.leadership_desc}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
