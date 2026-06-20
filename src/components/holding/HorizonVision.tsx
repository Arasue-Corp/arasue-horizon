import { MotionDiv } from '@/components/Motion'
import Link from 'next/link'
import Image from 'next/image'

export function HorizonVision({ dict, lang }: { dict: any, lang: string }) {
  return (
    <section className="py-32 px-6 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <MotionDiv 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="aspect-square bg-[#162D59]/5 rounded-[2rem] overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#162D59]/20 to-transparent z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop" 
            alt="Corporate Vision" 
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover grayscale opacity-80" 
          />
        </MotionDiv>
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-playfair tracking-tight text-[#162D59]">{dict.horizon.vision.title}</h2>
          <p className="text-xl text-[#162D59]/70 leading-relaxed font-inter">
            {dict.horizon.vision.p1}
          </p>
          <p className="text-xl text-[#162D59]/70 leading-relaxed font-inter">
            {dict.horizon.vision.p2}
          </p>
          <Link href={`/${lang}/about`} className="inline-flex items-center gap-2 font-bold text-[#A65E44] hover:text-[#F28F6B] hover:gap-4 transition-all uppercase tracking-widest text-sm">
            {dict.horizon.vision.link} <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
