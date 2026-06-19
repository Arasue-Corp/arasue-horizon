import { getDictionary, Locale } from '@/i18n/dictionaries'
import { MotionDiv } from '@/components/Motion'
import { LabsProductQuiz } from '@/components/labs/LabsProductQuiz'
import { LabsTestimonials } from '@/components/labs/LabsTestimonials'
import { LabsFAQ } from '@/components/labs/LabsFAQ'

export default async function LabsPage({
  params
}: {
  params: { lang: string }
}) {
  const resolvedParams = await params
  const dict = await getDictionary(resolvedParams.lang as Locale)

  return (
    <div className="flex flex-col font-serif bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 overflow-hidden">
        {/* Placeholder for nature background image/video */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop" alt="Nature Background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F9F7F1]/50 to-[#F9F7F1]" />
        </div>

        <MotionDiv 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="max-w-5xl mx-auto space-y-8 relative z-10 text-center"
        >
          <span className="text-sm tracking-[0.3em] uppercase font-sans font-bold text-foreground/60">Arasue Labs</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight leading-none text-foreground">
            {dict.labs.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mt-8 max-w-2xl mx-auto font-sans opacity-80 text-foreground">
            {dict.labs.hero.subtitle}
          </p>
          <div className="pt-12 font-sans">
            <button className="px-10 py-5 rounded-full bg-foreground text-background font-medium text-lg hover:scale-105 active:scale-[0.97] transition-all shadow-xl">
              {dict.labs.hero.cta}
            </button>
          </div>
        </MotionDiv>
      </section>

      {/* 1.5. Interactive Quiz */}
      <section className="py-32 px-6">
        <LabsProductQuiz lang={resolvedParams.lang as 'en' | 'es'} />
      </section>

      {/* Story / Philosophy */}
      <section className="py-32 px-6 bg-foreground text-background text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-6xl font-medium">{dict.labs.story_page.title}</h2>
          <p className="text-2xl md:text-4xl font-light leading-relaxed opacity-90 italic">
            "{dict.labs.story_page.subtitle}"
          </p>
          <div className="pt-8">
            <div className="w-px h-24 bg-background/30 mx-auto" />
          </div>
        </div>
      </section>

      {/* Collection Grid */}
      <section className="py-32 px-6" id="shop">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-foreground mb-4">
                {dict.labs.products.title}
              </h2>
              <p className="text-xl font-sans text-foreground/60 max-w-lg">{dict.labs.shop_page.subtitle}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            {/* Product 1 */}
            <MotionDiv 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer border border-foreground/5 flex flex-col"
            >
              <div className="aspect-square bg-[#e8e4d9] relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1587049352847-4d4b127bc04e?q=80&w=800&auto=format&fit=crop" alt="Honey Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-serif text-foreground mb-4">{dict.labs.products.honey.title}</h3>
                  <p className="text-foreground/70 text-lg leading-relaxed">{dict.labs.products.honey.desc}</p>
                </div>
                <div className="pt-8 flex justify-between items-center">
                  <span className="font-bold text-lg">$45.00</span>
                  <button className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-foreground transition-colors">
                    +
                  </button>
                </div>
              </div>
            </MotionDiv>

            {/* Product 2 */}
            <MotionDiv 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer border border-foreground/5 flex flex-col"
            >
              <div className="aspect-square bg-foreground/5 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1615397323389-1065a3637172?q=80&w=800&auto=format&fit=crop" alt="Wellness Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-multiply" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-serif text-foreground mb-4">{dict.labs.products.wellness.title}</h3>
                  <p className="text-foreground/70 text-lg leading-relaxed">{dict.labs.products.wellness.desc}</p>
                </div>
                <div className="pt-8 flex justify-between items-center">
                  <span className="font-bold text-lg">$85.00</span>
                  <button className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-foreground transition-colors">
                    +
                  </button>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* 3.5. Testimonials */}
      <section className="py-32 px-6 bg-[#f0eee4]">
        <LabsTestimonials lang={resolvedParams.lang as 'en' | 'es'} />
      </section>

      {/* 3.6. FAQ */}
      <section className="py-32 px-6">
        <LabsFAQ lang={resolvedParams.lang as 'en' | 'es'} />
      </section>

      {/* Wholesale / Contact */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto bg-[#e8e4d9] rounded-[3rem] p-16 md:p-24 text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 text-foreground">{dict.labs.contact_page.title}</h2>
          <p className="text-xl font-sans text-foreground/70 mb-12 max-w-xl mx-auto">{dict.labs.contact_page.subtitle}</p>
          <button className="px-10 py-5 rounded-full bg-foreground text-background font-sans font-bold text-lg hover:scale-105 active:scale-95 transition-all">
            Contact Partnerships
          </button>
        </div>
      </section>
    </div>
  )
}
