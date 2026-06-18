"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const dict = {
  usa: {
    title: 'Selected Campaigns',
    subtitle: 'A glimpse into the cultural moments we\'ve manufactured for global brands.',
    filters: ['All', 'Twitch', 'TikTok', 'YouTube'],
    projects: [
      { id: 1, title: 'Energy Rush Live', brand: 'Red Bull', category: 'Twitch', img: '1542204165-65bf26472b9b', reach: '4.2M' },
      { id: 2, title: 'Sneaker Drop', brand: 'Nike', category: 'TikTok', img: '1552566626-52f8b828add9', reach: '12M' },
      { id: 3, title: 'Tech Unboxing', brand: 'Sony', category: 'YouTube', img: '1498049794561-7780e7231661', reach: '8.5M' },
      { id: 4, title: 'Summer Fest', brand: 'Spotify', category: 'TikTok', img: '1514525253161-7a46d19cd819', reach: '22M' }
    ]
  },
  mex: {
    title: 'Campañas Seleccionadas',
    subtitle: 'Un vistazo a los momentos culturales que hemos fabricado para marcas globales.',
    filters: ['Todos', 'Twitch', 'TikTok', 'YouTube'],
    projects: [
      { id: 1, title: 'Energy Rush Live', brand: 'Red Bull', category: 'Twitch', img: '1542204165-65bf26472b9b', reach: '4.2M' },
      { id: 2, title: 'Sneaker Drop', brand: 'Nike', category: 'TikTok', img: '1552566626-52f8b828add9', reach: '12M' },
      { id: 3, title: 'Tech Unboxing', brand: 'Sony', category: 'YouTube', img: '1498049794561-7780e7231661', reach: '8.5M' },
      { id: 4, title: 'Summer Fest', brand: 'Spotify', category: 'TikTok', img: '1514525253161-7a46d19cd819', reach: '22M' }
    ]
  }
}

export function MediaCaseStudies({ lang }: { lang: 'en' | 'es' }) {
  const isMexico = lang === 'es'
  const t = dict[isMexico ? 'mex' : 'usa']
  const [filter, setFilter] = useState(isMexico ? 'Todos' : 'All')

  const filtered = filter === 'All' || filter === 'Todos'
    ? t.projects
    : t.projects.filter(p => p.category === filter)

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">{t.title}</h2>
          <p className="text-xl text-white/50 max-w-sm hidden md:block">{t.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {t.filters.map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-colors ${filter === f ? 'bg-purple-500 text-white' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filtered.map((project) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="group cursor-pointer relative aspect-video bg-white/5 rounded-3xl overflow-hidden"
            >
              <img src={`https://images.unsplash.com/photo-${project.img}?q=80&w=800&auto=format&fit=crop`} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute top-6 right-6 px-4 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white font-mono text-xs">
                {project.reach} Impressions
              </div>

              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-purple-400 font-bold tracking-widest text-sm mb-3 uppercase">{project.brand} • {project.category}</div>
                <h3 className="text-3xl md:text-5xl font-black uppercase">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
