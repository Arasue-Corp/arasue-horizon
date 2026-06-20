"use client"
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ChevronRight } from 'lucide-react'
import Link from 'next/link'

// UI Micro-Wireframes for Thumbnails
const WireframeDashboard = () => (
  <div className="absolute inset-0 bg-[#F4F4F5] flex p-4 gap-4 transition-transform duration-700 group-hover:scale-[1.02]">
    {/* Sidebar */}
    <div className="w-16 h-full bg-white rounded-lg border border-black/10 shadow-sm flex flex-col gap-3 p-3">
      {/* Brand / Logo placeholder */}
      <div className="w-full h-8 bg-black/80 rounded-md mb-2" />
      <div className="w-full h-3 bg-black/10 rounded-sm" />
      <div className="w-full h-3 bg-black/10 rounded-sm" />
      <div className="w-full h-3 bg-black/10 rounded-sm" />
      <div className="w-full h-3 bg-black/20 rounded-sm mt-auto" />
    </div>
    {/* Main Content */}
    <div className="flex-1 flex flex-col gap-4">
      {/* Header */}
      <div className="w-full h-10 bg-white rounded-lg border border-black/10 shadow-sm flex items-center justify-between px-4">
        <div className="w-32 h-2.5 bg-black/10 rounded-full" />
        <div className="w-6 h-6 bg-black/5 rounded-full border border-black/10" />
      </div>
      {/* Chart Area */}
      <div className="flex-1 bg-white rounded-lg border border-black/10 shadow-sm p-5 flex items-end gap-3">
        {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
          <div key={i} className={`flex-1 rounded-t-sm ${i === 3 ? 'bg-black/80' : 'bg-black/10'}`} style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  </div>
)

const WireframeEcommerce = () => (
  <div className="absolute inset-0 bg-[#F4F4F5] flex flex-col p-4 gap-4 transition-transform duration-700 group-hover:scale-[1.02]">
    {/* Navbar */}
    <div className="w-full h-12 bg-white rounded-lg border border-black/10 shadow-sm flex items-center justify-between px-5">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-black/80 rounded-sm" />
        <div className="w-20 h-2 bg-black/20 rounded-full" />
      </div>
      <div className="w-16 h-4 bg-black/5 rounded-md border border-black/10" />
    </div>
    {/* Product Grid */}
    <div className="grid grid-cols-3 gap-4 flex-1">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white rounded-lg border border-black/10 shadow-sm flex flex-col p-3 gap-3">
          {/* Product Image Placeholder */}
          <div className="w-full flex-1 bg-zinc-100 rounded-md border border-black/5 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-black/5" />
          </div>
          <div className="w-3/4 h-2.5 bg-black/20 rounded-full" />
          <div className="w-1/2 h-2.5 bg-black/80 rounded-full" />
        </div>
      ))}
    </div>
  </div>
)

const WireframeCorporate = () => (
  <div className="absolute inset-0 bg-[#F4F4F5] flex flex-col p-0 transition-transform duration-700 group-hover:scale-[1.02]">
    {/* Hero Section */}
    <div className="w-full h-36 bg-zinc-200 border-b border-black/10 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:12px_12px]" />
      <div className="w-48 h-8 bg-white rounded-md border border-black/10 shadow-md relative z-10" />
    </div>
    {/* Content Section */}
    <div className="p-6 flex gap-6 items-center">
      <div className="flex-1 space-y-4">
        <div className="w-5/6 h-3.5 bg-black/80 rounded-sm" />
        <div className="w-full h-2.5 bg-black/20 rounded-sm" />
        <div className="w-4/5 h-2.5 bg-black/20 rounded-sm" />
        <div className="w-24 h-6 bg-black/5 rounded-full border border-black/10 mt-2" />
      </div>
      <div className="w-28 h-28 bg-white rounded-xl border border-black/10 shadow-sm" />
    </div>
  </div>
)

const WireframePersonal = () => (
  <div className="absolute inset-0 bg-[#F4F4F5] flex items-center justify-center p-8 transition-transform duration-700 group-hover:scale-[1.02]">
    <div className="w-full max-w-[220px] bg-white rounded-2xl border border-black/10 shadow-xl p-8 flex flex-col items-center text-center gap-5">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-zinc-200 border border-black/10 shadow-inner flex items-end justify-center overflow-hidden">
        <div className="w-12 h-10 bg-black/20 rounded-t-full" />
      </div>
      {/* Bio */}
      <div className="space-y-3 w-full flex flex-col items-center">
        <div className="w-32 h-3.5 bg-black/80 rounded-full" />
        <div className="w-20 h-2.5 bg-black/20 rounded-full" />
      </div>
      {/* Action */}
      <div className="w-full h-10 bg-black/5 border border-black/10 rounded-xl mt-2 flex items-center justify-center">
        <div className="w-16 h-2 bg-black/20 rounded-full" />
      </div>
    </div>
  </div>
)

const getWireframe = (category: string) => {
  if (category.includes('SaaS')) return <WireframeDashboard />
  if (category.includes('E-commerce')) return <WireframeEcommerce />
  if (category.includes('Personal')) return <WireframePersonal />
  return <WireframeCorporate />
}

// Define the demo types
type DemoItem = {
  id: string
  title: string
  subtitle: string
  tags: string[]
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
    { id: "web-corporativa", title: "Landscaping & Exteriors", subtitle: isEn ? "B2B/B2C Local Service Lead Gen" : "Generación de Leads B2B/B2C", tags: ["Corporate", "Services"] },
    { id: "web-personal", title: "Personal Branding", subtitle: isEn ? "Authority & Portfolio" : "Marca Personal y Autoridad", tags: ["Personal"] },
    { id: "dashboard-facturas", title: "Billing Dashboard", subtitle: isEn ? "SaaS UI & Data Viz" : "Interfaz SaaS y Datos", tags: ["SaaS"] },
    { id: "ecommerce", title: "E-commerce Elite", subtitle: isEn ? "Frictionless Checkout" : "Checkout sin fricción", tags: ["E-commerce"] },
    { id: "concrete-company", title: "Slabworks", subtitle: isEn ? "Brutalist Concrete Solutions" : "Soluciones en Concreto Brutalista", tags: ["Corporate", "Industrial"] },
    { id: "construction-company", title: "Apex Construct", subtitle: isEn ? "B2B Commercial Contracting" : "Contratistas Comerciales B2B", tags: ["Corporate", "Industrial"] },
    { id: "carpentry", title: "Oak & Iron", subtitle: isEn ? "Bespoke Millwork & Carpentry" : "Carpintería a Medida", tags: ["Corporate", "Services"] },
    { id: "mechanic-shop", title: "Velocity Tech", subtitle: isEn ? "European Auto Diagnostics" : "Diagnóstico Automotriz Europeo", tags: ["Corporate", "Services"] },
    { id: "roofing", title: "Shelter Pro", subtitle: isEn ? "Premium Roofing Estimator" : "Estimador de Techos Premium", tags: ["Corporate", "Services"] },
    { id: "hvac", title: "Aerotherm", subtitle: isEn ? "HVAC System Sizing" : "Sistemas HVAC", tags: ["Corporate", "Services"] }
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
                      {getWireframe(demo.tags[0] || "Corporate")}
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
