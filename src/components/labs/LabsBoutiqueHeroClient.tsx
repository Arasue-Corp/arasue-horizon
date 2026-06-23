'use client'

import { MotionDiv } from '@/components/Motion'

export function LabsBoutiqueHeroClient({ dict }: { dict: any }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background text-foreground py-24">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[40%] right-[-5%] w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {dict.origin}
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-primary mb-8 font-serif">
              {dict.title}
            </h1>
            
            <p className="text-xl md:text-2xl opacity-80 leading-relaxed font-light mb-12 max-w-2xl mx-auto">
              {dict.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => {
                  const shopSection = document.getElementById('boutique-shop');
                  if (shopSection) {
                    shopSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto px-10 py-5 bg-primary text-white font-bold tracking-widest uppercase text-sm rounded-xl shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                {dict.cta}
              </button>
              <div className="text-sm font-medium tracking-widest uppercase opacity-60">
                {dict.shipping}
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
