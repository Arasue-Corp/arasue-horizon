'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
}

export function NewsroomBento({ dict, lang }: { dict: any, lang: string }) {
  const articles = [
    { 
      id: 1, 
      img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2000&auto=format&fit=crop",
      date: "Q1 2026",
      title: dict.horizon.news.article_title,
      desc: dict.horizon.news.article_desc
    },
    { 
      id: 2, 
      img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1200&auto=format&fit=crop",
      date: "Q4 2025",
      title: "Arasue Horizon Expands Global Footprint",
      desc: "Strategic acquisitions in the European tech sector bolster our position in the international market."
    },
    { 
      id: 3, 
      img: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop",
      date: "Q3 2025",
      title: "Sustainability and Peak Performance",
      desc: "Our new ESG initiatives demonstrate how we balance aggressive growth with environmental responsibility."
    }
  ]

  return (
    <section className="py-32 px-6 container mx-auto border-t border-black/5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <div className="text-sm font-semibold text-[#A65E44] tracking-widest uppercase mb-4">Newsroom</div>
          <h2 className="text-4xl md:text-5xl font-playfair tracking-tight text-[#162D59]">
            {dict.horizon.news.title}
          </h2>
        </motion.div>
        
        <Link 
          href={`/${lang}/newsroom`} 
          className="group flex items-center gap-3 text-[#162D59] font-medium hover:text-[#A65E44] transition-colors"
        >
          {dict.horizon.news.link} 
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      
      {/* Corporate Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Featured Article */}
        <div className="lg:col-span-8 group cursor-pointer">
          <Link href={`/${lang}/newsroom`}>
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#162D59]/5 mb-6">
              <Image 
                src={articles[0].img} 
                alt={articles[0].title} 
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
            </div>
            <div className="space-y-4">
              <div className="text-sm font-semibold text-[#A65E44] uppercase tracking-widest">{articles[0].date}</div>
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-[#162D59] group-hover:text-[#A65E44] transition-colors">
                {articles[0].title}
              </h3>
              <p className="text-gray-600 max-w-2xl text-lg">
                {articles[0].desc}
              </p>
            </div>
          </Link>
        </div>

        {/* Sidebar Articles */}
        <div className="lg:col-span-4 flex flex-col gap-12">
          {[1, 2].map((i) => (
            <Link key={articles[i].id} href={`/${lang}/newsroom`} className="group flex flex-col gap-4 cursor-pointer">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#162D59]/5">
                <Image 
                  src={articles[i].img} 
                  alt={articles[i].title} 
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
              </div>
              <div className="space-y-2">
                <div className="text-xs font-semibold text-[#A65E44] uppercase tracking-widest">{articles[i].date}</div>
                <h3 className="text-xl font-bold font-playfair text-[#162D59] group-hover:text-[#A65E44] transition-colors leading-snug">
                  {articles[i].title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
