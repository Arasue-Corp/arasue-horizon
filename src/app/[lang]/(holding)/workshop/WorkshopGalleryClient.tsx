"use client"
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Define the demo types
type DemoItem = {
  id: string
  title: string
  subtitle: string
  tags: string[]
  image: string
}

export function WorkshopGalleryClient({ lang }: { lang: 'en' | 'es' }) {
  const isEn = lang === 'en'

  const dict = {
    badge: isEn ? "Template Ecosystem" : "Ecosistema de Plantillas",
    title: "The Workshop.",
    subtitle: isEn 
      ? "Production-ready architectures engineered for scale and conversion." 
      : "Arquitecturas listas para producción, diseñadas para escalar y convertir.",
    searchPlaceholder: isEn 
      ? "Search by title, industry, or capability..." 
      : "Buscar por título, industria o capacidad...",
    categories: isEn 
      ? ["All", "Corporate", "Personal", "SaaS", "E-commerce", "Industrial", "Services"]
      : ["Todos", "Corporativo", "Personal", "SaaS", "E-commerce", "Industrial", "Servicios"],
    emptyStateTitle: isEn ? "No architectures found" : "No se encontraron arquitecturas",
    emptyStateDesc: isEn 
      ? "We couldn't match any template to your query." 
      : "No pudimos relacionar ninguna plantilla con tu búsqueda."
  }

  const categoryKeys = ["All", "Corporate", "Personal", "SaaS", "E-commerce", "Industrial", "Services"]

  const demos: DemoItem[] = [
    { id: "web-corporativa", title: "Landscaping & Exteriors", subtitle: isEn ? "B2B/B2C Local Service Lead Gen" : "Generación de Leads B2B/B2C", tags: ["Corporate", "Services"], image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" },
    { id: "web-personal", title: "Personal Branding", subtitle: isEn ? "Authority & Portfolio" : "Marca Personal y Autoridad", tags: ["Personal"], image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop" },
    { id: "dashboard-facturas", title: "Billing Dashboard", subtitle: isEn ? "SaaS UI & Data Viz" : "Interfaz SaaS y Datos", tags: ["SaaS"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
    { id: "ecommerce", title: "E-commerce Elite", subtitle: isEn ? "Frictionless Checkout" : "Checkout sin fricción", tags: ["E-commerce"], image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop" },
    { id: "concrete-company", title: "Slabworks", subtitle: isEn ? "Brutalist Concrete Solutions" : "Soluciones en Concreto Brutalista", tags: ["Corporate", "Industrial"], image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop" },
    { id: "construction-company", title: "Apex Construct", subtitle: isEn ? "B2B Commercial Contracting" : "Contratistas Comerciales B2B", tags: ["Corporate", "Industrial"], image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" },
    { id: "carpentry", title: "Oak & Iron", subtitle: isEn ? "Bespoke Millwork & Carpentry" : "Carpintería a Medida", tags: ["Corporate", "Services"], image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop" },
    { id: "mechanic-shop", title: "Velocity Tech", subtitle: isEn ? "European Auto Diagnostics" : "Diagnóstico Automotriz Europeo", tags: ["Corporate", "Services"], image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2070&auto=format&fit=crop" },
    { id: "roofing", title: "Shelter Pro", subtitle: isEn ? "Premium Roofing Estimator" : "Estimador de Techos Premium", tags: ["Corporate", "Services"], image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop" },
    { id: "hvac", title: "Aerotherm", subtitle: isEn ? "HVAC System Sizing" : "Sistemas HVAC", tags: ["Corporate", "Services"], image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop" }
  ]

  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)

  const filteredDemos = useMemo(() => {
    return demos.filter(demo => {
      const activeCategoryKey = categoryKeys[activeCategoryIndex]
      const matchesCategory = activeCategoryKey === "All" || demo.tags.includes(activeCategoryKey)
      const normalizedSearch = searchQuery.toLowerCase().trim()
      const matchesSearch = normalizedSearch === "" || 
        demo.title.toLowerCase().includes(normalizedSearch) || 
        demo.subtitle.toLowerCase().includes(normalizedSearch) ||
        demo.tags.some(tag => tag.toLowerCase().includes(normalizedSearch))
      return matchesCategory && matchesSearch
    })
  }, [searchQuery, activeCategoryIndex, demos, categoryKeys])

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-6 bg-[#FCFCFC] text-[#111111] selection:bg-black selection:text-white font-sans">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header - Minimalist Apple Style */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 text-center mb-24"
        >
          <div className="text-[11px] font-mono uppercase tracking-widest text-black/40 mb-6">
            {dict.badge}
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-black">
            {dict.title}
          </h1>
          <p className="text-lg md:text-xl text-black/50 max-w-2xl mx-auto font-medium">
            {dict.subtitle}
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-10"
        >
          {/* Minimalist Search Bar */}
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/30 group-focus-within:text-black transition-colors" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={dict.searchPlaceholder} 
              className="w-full bg-white border border-black/10 rounded-2xl py-5 pl-12 pr-6 text-lg font-medium text-black placeholder:text-black/30 outline-none focus:border-black/30 focus:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all"
            />
          </div>

          {/* Minimalist Tab Filters */}
          <div className="flex flex-wrap gap-2 justify-center border-b border-black/5 pb-px">
            {dict.categories.map((category, index) => {
              const isActive = activeCategoryIndex === index
              return (
                <button 
                  key={index}
                  onClick={() => setActiveCategoryIndex(index)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-black" : "text-black/50 hover:text-black/80"
                  }`}
                >
                  {category}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-black"
                    />
                  )}
                </button>
              )
            })}
          </div>
        </motion.div>
        
        {/* Gallery Grid */}
        <div className="mt-16 min-h-[400px]">
          <AnimatePresence mode="wait">
            {filteredDemos.length > 0 ? (
              <motion.div 
                key="grid"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredDemos.map((demo) => (
                  <Link 
                    href={`/${lang}/workshop/demo/${demo.id}`} 
                    key={demo.id} 
                    className="group flex flex-col gap-4"
                  >
                    {/* Thumbnail Container */}
                    <div className="relative aspect-[4/3] rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                      <Image
                        src={demo.image}
                        alt={demo.title}
                        fill
                        className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Metadata */}
                    <div className="px-1 flex justify-between items-start">
                      <div>
                        <h3 className="text-black font-semibold text-lg leading-tight group-hover:text-blue-600 transition-colors">
                          {demo.title}
                        </h3>
                        <p className="text-black/50 text-sm font-medium mt-1">
                          {demo.subtitle}
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-black/50 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-24 text-center"
              >
                <div className="text-black/20 mb-4 font-mono text-sm">[0 results]</div>
                <h3 className="text-xl font-semibold mb-2">{dict.emptyStateTitle}</h3>
                <p className="text-black/50">{dict.emptyStateDesc}</p>
                <button 
                  onClick={() => {
                    setSearchQuery("")
                    setActiveCategoryIndex(0)
                  }}
                  className="mt-8 px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-black/80 transition-colors"
                >
                  {isEn ? "Reset Search" : "Reiniciar Búsqueda"}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
