"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function LabsClient({ dict }: { dict: any }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  // Parallax for Hero
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div className="flex flex-col font-serif bg-background selection:bg-primary selection:text-primary-foreground" ref={containerRef}>
      
      {/* 1. Editorial Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop" 
            alt="Organic Leaves" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs tracking-[0.3em] uppercase font-sans text-white/70 block mb-6">
              Arasue Labs
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-tight leading-[0.9] text-white">
              {dict.labs?.hero?.title || "Nature Meets Science."}
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl mt-12 max-w-xl mx-auto font-sans text-white/80 font-light"
          >
            {dict.labs?.hero?.subtitle || "Premium organic products, sustainably sourced and meticulously crafted."}
          </motion.p>
        </div>
      </section>

      {/* 2. The Philosophy (Magazine Layout) */}
      <section className="py-32 md:py-48 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-6xl font-normal leading-[1.1] text-foreground">
              "{dict.labs?.story_page?.subtitle || "From deep forests to premium extracts. The journey of Arasue Labs."}"
            </h2>
            <div className="space-y-6 font-sans text-foreground/70 text-lg font-light leading-relaxed max-w-lg">
              <p>
                We believe that the most potent solutions are already engineered by nature. Our mission is to simply extract them with uncompromising purity.
              </p>
              <p>
                Every harvest is limited. Every extraction is deliberate. We do not mass produce; we curate.
              </p>
            </div>
            <Link href="/en/labs/story" className="inline-flex items-center gap-4 text-sm uppercase tracking-widest font-sans font-bold hover:text-accent transition-colors border-b border-foreground pb-1">
              Read our philosophy <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[3/4] relative overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1615397323389-1065a3637172?q=80&w=1000&auto=format&fit=crop" 
              alt="Laboratory Extracts" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. The Apothecary (Ultra-Minimalist Product Grid) */}
      <section className="py-32 px-6 lg:px-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-background/20 pb-12">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase font-sans text-background/50 block mb-4">The Apothecary</span>
              <h2 className="text-5xl md:text-7xl font-normal tracking-tight">
                {dict.labs?.products?.title || "Our Collection"}
              </h2>
            </div>
            <p className="font-sans text-background/60 max-w-sm font-light">
              {dict.labs?.shop_page?.subtitle || "Limited-batch organic harvests. Taste the untouched nature."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            
            {/* Product 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden mb-8 bg-secondary/10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1587049352847-4d4b127bc04e?q=80&w=800&auto=format&fit=crop" 
                  alt="Raw Organic Honey" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out mix-blend-luminosity hover:mix-blend-normal"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-normal mb-2">{dict.labs?.products?.honey?.title || "Raw Organic Honey"}</h3>
                  <p className="font-sans text-background/60 text-sm font-light max-w-xs">
                    {dict.labs?.products?.honey?.desc || "100% pure, unpasteurized honey sourced directly from our reserves."}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl">$45</p>
                  <button className="mt-2 text-xs font-sans uppercase tracking-widest text-accent hover:text-white transition-colors border-b border-accent/30 pb-0.5">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Product 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group cursor-pointer md:mt-32"
            >
              <div className="aspect-[4/5] overflow-hidden mb-8 bg-secondary/10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1608248593801-5221b4d0879b?q=80&w=800&auto=format&fit=crop" 
                  alt="Wellness Extracts" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out mix-blend-luminosity hover:mix-blend-normal"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-normal mb-2">{dict.labs?.products?.wellness?.title || "Wellness Extracts"}</h3>
                  <p className="font-sans text-background/60 text-sm font-light max-w-xs">
                    {dict.labs?.products?.wellness?.desc || "Potent organic tinctures and health supplements."}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl">$85</p>
                  <button className="mt-2 text-xs font-sans uppercase tracking-widest text-accent hover:text-white transition-colors border-b border-accent/30 pb-0.5">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3.5 The Reviews (Magazine Citations) */}
      <section className="py-32 px-6 lg:px-24 bg-background border-t border-foreground/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="text-xs tracking-[0.3em] uppercase font-sans text-foreground/50 block mb-12">
            Featured In
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-center w-full">
            <div className="space-y-6">
              <p className="font-serif text-2xl lg:text-3xl text-foreground/90 italic leading-snug">
                "The absolute pinnacle of organic purity. Arasue Labs has redefined botanical wellness."
              </p>
              <p className="font-sans text-xs uppercase tracking-widest font-bold text-accent">— Vogue Botanical</p>
            </div>
            <div className="space-y-6 md:scale-110">
              <p className="font-serif text-3xl lg:text-4xl text-foreground font-medium italic leading-snug">
                "An uncompromising approach to nature. The extracts are simply transcendent."
              </p>
              <p className="font-sans text-xs uppercase tracking-widest font-bold text-accent">— GQ Wellness</p>
            </div>
            <div className="space-y-6">
              <p className="font-serif text-2xl lg:text-3xl text-foreground/90 italic leading-snug">
                "It feels less like skincare and more like an ancient apothecary secret."
              </p>
              <p className="font-sans text-xs uppercase tracking-widest font-bold text-accent">— The Monocle</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3.6 The Interactive Guide (Quiz Entry) */}
      <section className="py-32 px-6 lg:px-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-square relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop" 
              alt="Botanical Setup" 
              className="w-full h-full object-cover mix-blend-luminosity opacity-80"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-8 lg:pl-12">
            <span className="text-xs tracking-[0.3em] uppercase font-sans text-background/50 block">
              Personalized Regiment
            </span>
            <h2 className="text-4xl md:text-6xl font-normal leading-tight">
              Not sure where to begin your journey?
            </h2>
            <p className="text-lg font-sans text-background/70 font-light leading-relaxed">
              Every skin and body is entirely unique. Take our 2-minute botanical assessment to discover the exact extract formulation your body needs right now.
            </p>
            <button className="mt-8 inline-flex items-center gap-4 text-sm uppercase tracking-widest font-sans font-bold text-background border border-background/30 px-8 py-4 hover:bg-background hover:text-foreground transition-all duration-500">
              Find Your Extract <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3.7 FAQ Section */}
      <section className="py-32 px-6 lg:px-24 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase font-sans text-foreground/50 block mb-4">
              The Details
            </span>
            <h2 className="text-4xl md:text-6xl font-normal">Common Inquiries</h2>
          </div>
          
          <div className="space-y-0 border-t border-foreground/10 font-sans">
            <div className="py-8 border-b border-foreground/10 group cursor-pointer">
              <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">Where do you source your ingredients?</h3>
              <p className="text-foreground/70 font-light leading-relaxed">
                We partner exclusively with multi-generational organic farms across South America and the Mediterranean. Every harvest is certified organic, ethically sourced, and entirely unrefined to maintain maximum botanical potency.
              </p>
            </div>
            <div className="py-8 border-b border-foreground/10 group cursor-pointer">
              <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">Do you ship internationally?</h3>
              <p className="text-foreground/70 font-light leading-relaxed">
                Yes. We offer temperature-controlled global shipping to ensure our extracts arrive in pristine condition, regardless of the destination. Typical delivery times range from 3 to 7 business days globally.
              </p>
            </div>
            <div className="py-8 border-b border-foreground/10 group cursor-pointer">
              <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">Are the products vegan and cruelty-free?</h3>
              <p className="text-foreground/70 font-light leading-relaxed">
                Absolutely. With the sole exception of our ethically-harvested Raw Organic Honey, all formulations are 100% vegan. We strictly prohibit animal testing at every stage of production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Wholesale CTA */}
      <section className="py-32 px-6 bg-background text-foreground text-center border-t border-foreground/10">
        <div className="max-w-3xl mx-auto space-y-12">
          <span className="text-xs tracking-[0.3em] uppercase font-sans text-foreground/50 block">
            Partnerships
          </span>
          <h2 className="text-5xl md:text-7xl font-normal">
            {dict.labs?.contact_page?.title || "Wholesale & Support"}
          </h2>
          <p className="text-xl font-sans text-foreground/70 max-w-xl mx-auto font-light">
            {dict.labs?.contact_page?.subtitle || "Reach out for bulk orders and premium partnerships."}
          </p>
          <div className="pt-8">
            <Link 
              href="/en/labs/contact"
              className="inline-block px-12 py-5 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-500 font-sans text-sm uppercase tracking-widest font-bold"
            >
              Contact Inquiry
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
