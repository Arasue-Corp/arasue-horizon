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
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            {dict.corporate.about.title}
          </h1>
          <p className="text-xl md:text-3xl mt-8 font-medium opacity-70">
            {dict.corporate.about.content}
          </p>
        </MotionDiv>
      </section>
      
      <section className="py-24 px-6 border-t border-foreground/10 bg-foreground/5">
        <div className="max-w-4xl space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Leadership & Vision</h2>
            <p className="text-lg opacity-70">Arasue Horizon operates on a principle of decentralized excellence. Each subsidiary is empowered to disrupt its specific sector while sharing resources, infrastructure, and strategic vision from the holding level.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
