"use client";
import { motion } from 'framer-motion';

export function LabsProducts({ dict }: { dict: any }) {
  return (
    <section className="py-32 px-6 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 uppercase text-primary">
          {dict.title || "Our Harvest"}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 1. Honey */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="aspect-square md:aspect-video bg-secondary text-secondary-foreground p-10 rounded-[3rem] flex flex-col justify-end group cursor-pointer relative overflow-hidden border border-border hover:border-primary/50 transition-colors"
          >
            <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-background flex items-center justify-center group-hover:scale-125 transition-transform text-primary">
              🍯
            </div>
            <h3 className="text-4xl font-black uppercase tracking-tight mb-4">{dict.honey?.title || "Organic Raw Honey"}</h3>
            <p className="text-lg opacity-80 max-w-sm">{dict.honey?.desc || "100% pure, unpasteurized honey directly from our deep forest reserves."}</p>
          </motion.div>
          
          {/* 2. Wellness/Derivatives */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="aspect-square md:aspect-video bg-background p-10 rounded-[3rem] flex flex-col justify-end group cursor-pointer relative overflow-hidden border border-border hover:bg-secondary hover:text-secondary-foreground transition-colors duration-500"
          >
            <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-secondary group-hover:bg-primary/20 flex items-center justify-center transition-colors">
              🌿
            </div>
            <h3 className="text-4xl font-black uppercase tracking-tight mb-4">{dict.wellness?.title || "Honey Derivatives"}</h3>
            <p className="text-lg opacity-80 max-w-sm">{dict.wellness?.desc || "Potent wellness extracts, propolis, and royal jelly supplements."}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
