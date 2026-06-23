"use client";
import { motion } from 'framer-motion';

export function LabsStory({ dict }: { dict: any }) {
  return (
    <section className="py-32 px-6 border-y border-border bg-secondary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-primary">
              {dict.story_page?.title || "Our Origins"}
            </h2>
            <p className="text-xl md:text-2xl font-light opacity-80 leading-relaxed border-l-4 border-primary pl-6">
              {dict.story_page?.subtitle || "From dedicated beekeepers to premium extracts. The journey of Arasue Labs."}
            </p>
            <div className="flex gap-4 pt-4">
              <div className="w-16 h-1 bg-primary rounded-full" />
              <div className="w-4 h-1 bg-primary/30 rounded-full" />
              <div className="w-4 h-1 bg-primary/30 rounded-full" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="aspect-square bg-foreground/5 rounded-[3rem] overflow-hidden relative border border-foreground/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1587049352847-81a56d773cac?q=80&w=800&auto=format&fit=crop" 
              alt="Beekeeping" 
              className="w-full h-full object-cover mix-blend-luminosity opacity-80 hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
