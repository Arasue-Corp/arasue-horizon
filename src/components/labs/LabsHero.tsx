"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export function LabsHero({ dict, lang }: { dict: any, lang: string }) {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center px-6 overflow-hidden bg-background text-foreground">
      {/* Tactical Grid Background for Labs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ad102f1a_1px,transparent_1px),linear-gradient(to_bottom,#ad102f1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex w-fit px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase">
            Arasue Labs
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.9]">
            {dict.title || "Organic Liquid Gold"}
          </h1>
          
          <p className="text-xl md:text-3xl mt-8 max-w-2xl font-light opacity-80 leading-relaxed border-l-4 border-primary pl-6">
            {dict.subtitle || "Premium honey products and natural derivatives, sustainably sourced from our own deep forest reserves."}
          </p>
          
          <div className="pt-12 flex flex-wrap gap-6">
            <Link 
              href={`/${lang}/labs/shop`}
              className="px-10 py-5 rounded-full bg-foreground text-background font-black text-lg hover:scale-105 active:scale-95 transition-all uppercase tracking-wide"
            >
              {dict.cta || "View Collection"}
            </Link>
            <Link 
              href={`/${lang}/labs/contact`}
              className="px-10 py-5 rounded-full border-2 border-foreground/20 font-bold text-lg hover:bg-foreground/10 active:scale-95 transition-all uppercase tracking-wide"
            >
              Wholesale
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
