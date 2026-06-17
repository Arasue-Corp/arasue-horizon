import { getDictionary, Locale } from '@/i18n/dictionaries'
import { MotionDiv } from '@/components/Motion'

export default async function MediaPage({
  params
}: {
  params: { lang: string }
}) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 relative overflow-hidden">
        <MotionDiv 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto w-full z-10"
        >
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none mix-blend-difference">
            {dict.media.hero.title}
          </h1>
          <p className="text-xl md:text-3xl mt-8 max-w-2xl font-medium opacity-80 mix-blend-difference">
            {dict.media.hero.subtitle}
          </p>
          <div className="pt-12 flex gap-4">
            <button className="px-8 py-4 rounded-full bg-background text-foreground font-bold text-lg active:scale-[0.97] transition-transform duration-200 ease-out">
              {dict.media.hero.cta}
            </button>
            <button className="px-8 py-4 rounded-full border border-background/20 font-bold text-lg active:scale-[0.97] hover:bg-background/10 transition-colors duration-200 ease-out">
              {dict.media.hero.cta_contact}
            </button>
          </div>
        </MotionDiv>
        
        {/* Kinetic Background Element */}
        <MotionDiv 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-background rounded-full blur-[120px] pointer-events-none"
        />
      </section>

      {/* Services/Capabilities */}
      <section className="py-32 px-6 bg-background text-foreground rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-16">{dict.media.services.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionDiv 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-square bg-foreground text-background p-8 rounded-3xl flex flex-col justify-end group cursor-pointer"
            >
              <h3 className="text-3xl font-bold group-hover:pl-4 transition-all duration-300 ease-out">{dict.media.services.content}</h3>
            </MotionDiv>
            
            <MotionDiv 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-square bg-foreground/5 p-8 rounded-3xl flex flex-col justify-end group cursor-pointer"
            >
              <h3 className="text-3xl font-bold group-hover:pl-4 transition-all duration-300 ease-out">{dict.media.services.streams}</h3>
            </MotionDiv>
            
            <MotionDiv 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-square bg-foreground/5 p-8 rounded-3xl flex flex-col justify-end group cursor-pointer"
            >
              <h3 className="text-3xl font-bold group-hover:pl-4 transition-all duration-300 ease-out">{dict.media.services.branding}</h3>
            </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  )
}
