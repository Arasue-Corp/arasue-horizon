'use client'

import { motion } from 'framer-motion'
import { MapPin, Droplets, Leaf } from 'lucide-react'

export function LabsDesertMap({ dict }: { dict: any }) {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      {/* Background Map Image & Grid */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ad102f33_1px,transparent_1px),linear-gradient(to_bottom,#ad102f33_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-40 grayscale mix-blend-multiply pointer-events-none">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434685.044199611!2d-114.71764618774092!3d30.584347781079313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86cd37754ebdf51d%3A0xc0c8bdcc794bbcb4!2sSonoran%20Desert!5e1!3m2!1sen!2smx!4v1700000000000!5m2!1sen!2smx"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Map Visuals */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="relative h-full w-full border border-primary/20 bg-background/50 backdrop-blur-xl rounded-[3rem] overflow-hidden shadow-2xl p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Sonoran Desert
                </div>
                <div className="text-right text-[10px] font-mono text-foreground/40 uppercase tracking-widest">
                  30° 59' N <br/> 111° 11' W
                </div>
              </div>

              {/* Central Map Focus */}
              <div className="relative flex-1 flex items-center justify-center my-8">
                <div className="absolute inset-0 border-2 border-primary/20 rounded-full scale-[1.2] animate-[ping_3s_ease-in-out_infinite] opacity-20" />
                <div className="absolute inset-0 border border-primary/40 rounded-full scale-[0.8] opacity-50" />
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-md border border-primary/30">
                  <MapPin className="text-primary w-6 h-6" />
                </div>

                {/* Satellite Nodes */}
                <div className="absolute top-[10%] left-[20%] text-[9px] font-bold text-foreground/50 tracking-widest uppercase flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-primary" /> Node Alpha
                </div>
                <div className="absolute bottom-[20%] right-[10%] text-[9px] font-bold text-foreground/50 tracking-widest uppercase flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-primary" /> Extraction 02
                </div>
              </div>

              <div className="text-sm font-light text-foreground/70 leading-relaxed">
                {dict.map_desc || "Our extraction nodes are situated deep within the untouched reserves of the Sonoran Desert. Far from commercial agriculture and pesticides."}
              </div>
            </div>
          </motion.div>

          {/* Content & Honey Types */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-black text-primary mb-6 leading-tight">
              {dict.title || "Born in the Harshest Environment."}
            </h2>
            <p className="text-lg text-foreground/70 mb-12 font-light leading-relaxed">
              {dict.subtitle || "The Sonoran Desert is unforgiving. Only the most resilient flora survive here, yielding a complex, unadulterated sweetness."}
            </p>

            <div className="space-y-6">
              {/* Type 1 */}
              <div className="flex gap-4 p-6 rounded-2xl bg-white border border-foreground/5 shadow-xl hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg mb-1">{dict.type1_title || "Mesquite Honey"}</h4>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {dict.type1_desc || "Earthy, smoky, and deeply rich. Foraged from the resilient Mesquite trees that anchor the desert ecosystem."}
                  </p>
                </div>
              </div>

              {/* Type 2 */}
              <div className="flex gap-4 p-6 rounded-2xl bg-white border border-foreground/5 shadow-xl hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg mb-1">{dict.type2_title || "Desert Multiflora"}</h4>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {dict.type2_desc || "A complex blend of Palo Verde, Ironwood, and wild desert wildflowers. Buttery texture with bright floral notes."}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
