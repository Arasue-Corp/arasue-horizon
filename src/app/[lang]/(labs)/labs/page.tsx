import { getDictionary, Locale } from '@/i18n/dictionaries'
import { MotionDiv } from '@/components/Motion'

export default async function LabsPage({
  params
}: {
  params: { lang: string }
}) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)

  return (
    <div className="flex flex-col font-serif">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto space-y-8"
        >
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-tight text-[#1a2e1a]">
            {dict.labs.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mt-8 max-w-2xl font-sans opacity-80 text-[#1a2e1a]">
            {dict.labs.hero.subtitle}
          </p>
          <div className="pt-12 font-sans">
            <button className="px-8 py-4 rounded-full bg-[#1a2e1a] text-[#F9F7F1] font-medium text-lg active:scale-[0.97] transition-transform duration-200 ease-out inline-block">
              {dict.labs.hero.cta}
            </button>
          </div>
        </MotionDiv>
      </section>

      {/* Collection Grid */}
      <section className="py-24 px-6" id="shop">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-16 text-[#1a2e1a]">
            {dict.labs.products.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
            <MotionDiv 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#e8e4d9] rounded-[2rem] p-8 md:p-12 min-h-[500px] flex flex-col justify-between group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-[#1a2e1a]/10 flex items-center justify-center mb-8">
                <div className="w-8 h-8 rounded-full bg-[#1a2e1a]/20" />
              </div>
              <div>
                <h3 className="text-3xl font-medium text-[#1a2e1a] mb-4">{dict.labs.products.honey.title}</h3>
                <p className="text-[#1a2e1a]/70 text-lg max-w-md">{dict.labs.products.honey.desc}</p>
              </div>
            </MotionDiv>

            <MotionDiv 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#1a2e1a] text-[#F9F7F1] rounded-[2rem] p-8 md:p-12 min-h-[500px] flex flex-col justify-between group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-[#F9F7F1]/10 flex items-center justify-center mb-8">
                <div className="w-8 h-8 rounded-full bg-[#F9F7F1]/20" />
              </div>
              <div>
                <h3 className="text-3xl font-medium mb-4">{dict.labs.products.wellness.title}</h3>
                <p className="opacity-70 text-lg max-w-md">{dict.labs.products.wellness.desc}</p>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  )
}
