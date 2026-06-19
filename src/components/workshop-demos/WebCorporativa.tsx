"use client"
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Leaf, ShieldCheck, Shovel, Trees, UploadCloud, Camera, MessageSquare, Briefcase, MapPin, Mail, Phone } from 'lucide-react'
import { useState } from 'react'

const dict = {
  usa: {
    nav: { srv: 'Services', port: 'Selected Work', est: 'Estimate', book: 'Book Consultation' },
    hero: { 
      t1: 'Architecture', 
      t2: 'for the outdoors.', 
      p: 'Premium landscape design and hardscaping. We turn ordinary properties into extraordinary retreats built to last generations.',
      btn1: 'Get Instant Quote',
      btn2: 'View Portfolio'
    },
    trust: 'Trusted By',
    srv: {
      title: 'Our Disciplines',
      p: 'Comprehensive exterior design, engineered for longevity and aesthetic dominance.',
      items: [
        { icon: Trees, title: "Landscape Architecture", desc: "Native plant curation and full-scale environmental design tailored to your specific microclimate." },
        { icon: Shovel, title: "Structural Hardscaping", desc: "Stone masonry, retaining walls, and custom outdoor kitchens built with premium materials." },
        { icon: Leaf, title: "Estate Management", desc: "White-glove maintenance ensuring your property's value and visual impact never degrade." }
      ]
    },
    port: {
      title: 'Selected Work',
      p: 'A glimpse into our recent estate transformations.',
      btn: 'View All Projects',
      items: [
        { title: 'The Oakridge Estate', desc: 'Full Hardscaping & Pool Design' },
        { title: 'Modern Zen Garden', desc: 'Botanical Curation' },
        { title: 'Heritage Pathway', desc: 'Stone Masonry' },
        { title: 'Highland Pavilion', desc: 'Outdoor Kitchen & Dining' }
      ]
    },
    quote: {
      title: 'Project Estimator',
      p: 'Receive an immediate baseline estimate for your property.',
      areaTitle: 'Property Area',
      areaUnit: 'sq ft',
      areaMin: 'Courtyard (500 sq ft)',
      areaMax: 'Estate (10,000+ sq ft)',
      reqTitle: 'Primary Requirement',
      reqOptions: [
        { id: 'maintenance', label: 'Management' },
        { id: 'design', label: 'Design & Planting' },
        { id: 'installation', label: 'Full Build' }
      ],
      photoTitle: 'Site Photography',
      photoDesc1: 'Drag & drop images of your space',
      photoDesc2: 'PNG or JPG up to 10MB',
      photoBtn: 'Browse Files',
      totalTitle: 'Investment Baseline',
      totalDesc: '*This is an algorithmic baseline. Formal quoting requires an on-site architectural evaluation.',
      ctaTitle: 'Schedule Evaluation',
      ctaBtn: 'Request Callback'
    },
    footer: {
      desc: 'Elevating the standard of exterior architecture and estate management across the region.',
      contact: 'Contact',
      legal: 'Legal',
      rights: '© 2026 Arasue Forge LLC. All rights reserved.',
      tag: 'Designed for excellence.'
    }
  },
  mex: {
    nav: { srv: 'Servicios', port: 'Proyectos', est: 'Cotizador', book: 'Agendar Consulta' },
    hero: { 
      t1: 'Arquitectura', 
      t2: 'para exteriores.', 
      p: 'Diseño de paisajes y hardscaping premium. Convertimos propiedades ordinarias en retiros extraordinarios construidos para durar generaciones.',
      btn1: 'Cotizar Ahora',
      btn2: 'Ver Portafolio'
    },
    trust: 'Con la confianza de',
    srv: {
      title: 'Nuestras Disciplinas',
      p: 'Diseño exterior integral, diseñado para la longevidad y la dominancia estética.',
      items: [
        { icon: Trees, title: "Arquitectura de Paisaje", desc: "Curación de plantas nativas y diseño ambiental a gran escala adaptado a tu microclima específico." },
        { icon: Shovel, title: "Hardscaping Estructural", desc: "Mampostería de piedra, muros de contención y cocinas al aire libre personalizadas construidas con materiales premium." },
        { icon: Leaf, title: "Mantenimiento de Fincas", desc: "Mantenimiento de guante blanco que asegura que el valor y el impacto visual de tu propiedad nunca se degraden." }
      ]
    },
    port: {
      title: 'Trabajo Destacado',
      p: 'Un vistazo a nuestras transformaciones recientes.',
      btn: 'Ver Todos los Proyectos',
      items: [
        { title: 'Finca Oakridge', desc: 'Hardscaping y Diseño de Piscina' },
        { title: 'Jardín Zen Moderno', desc: 'Curaduría Botánica' },
        { title: 'Sendero Patrimonial', desc: 'Mampostería de Piedra' },
        { title: 'Pabellón Highland', desc: 'Cocina y Comedor al Aire Libre' }
      ]
    },
    quote: {
      title: 'Estimador de Proyectos',
      p: 'Recibe una estimación base inmediata para tu propiedad.',
      areaTitle: 'Área de la Propiedad',
      areaUnit: 'm²',
      areaMin: 'Patio (50 m²)',
      areaMax: 'Finca (1,000+ m²)',
      reqTitle: 'Requerimiento Principal',
      reqOptions: [
        { id: 'maintenance', label: 'Mantenimiento' },
        { id: 'design', label: 'Diseño y Plantación' },
        { id: 'installation', label: 'Construcción Total' }
      ],
      photoTitle: 'Fotografía del Sitio',
      photoDesc1: 'Arrastra y suelta imágenes de tu espacio',
      photoDesc2: 'PNG o JPG de hasta 10MB',
      photoBtn: 'Buscar Archivos',
      totalTitle: 'Inversión Base',
      totalDesc: '*Esta es una línea base algorítmica. La cotización formal requiere una evaluación arquitectónica en el sitio.',
      ctaTitle: 'Programar Evaluación',
      ctaBtn: 'Solicitar Llamada'
    },
    footer: {
      desc: 'Elevando el estándar de la arquitectura exterior y el manejo de fincas en toda la región.',
      contact: 'Contacto',
      legal: 'Legal',
      rights: '© 2026 Arasue Forge LLC. Todos los derechos reservados.',
      tag: 'Diseñado para la excelencia.'
    }
  }
}

export function WebCorporativa() {
  const [region, setRegion] = useState<'usa' | 'mex'>('usa')
  const [yardSize, setYardSize] = useState(1500) // Default in sq ft
  const [serviceType, setServiceType] = useState('maintenance')
  const [isHoveringFile, setIsHoveringFile] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)
  
  const reduce = useReducedMotion()
  const t = dict[region]

  const toggleRegion = () => {
    setIsCalculating(true)
    setTimeout(() => {
      if (region === 'usa') {
        setRegion('mex')
        // Convert approx sq ft to m2
        setYardSize(Math.round(yardSize / 10.764))
      } else {
        setRegion('usa')
        // Convert m2 to sq ft
        setYardSize(Math.round(yardSize * 10.764))
      }
      setIsCalculating(false)
    }, 300)
  }

  const handleServiceChange = (type: string) => {
    setIsCalculating(true)
    setTimeout(() => {
      setServiceType(type)
      setIsCalculating(false)
    }, 200)
  }

  const getPrice = () => {
    // Standardize to square feet for calculation
    const sizeInSqFt = region === 'usa' ? yardSize : yardSize * 10.764;
    
    // Base prices per sq ft
    let multiplier = 0.5; // Maintenance: $0.50/sq ft
    if (serviceType === 'design') multiplier = 2.0; // Design: $2/sq ft
    if (serviceType === 'installation') multiplier = 5.0; // Install: $5/sq ft
    
    return Math.round(sizeInSqFt * multiplier);
  }

  return (
    <div className="min-h-screen bg-[#F6F5F2] text-[#1A1C1A] font-sans selection:bg-[#1A3620] selection:text-[#F6F5F2]">
      {/* Navigation */}
      <nav className="w-full bg-[#F6F5F2]/90 backdrop-blur-md sticky top-0 z-40 border-b border-[#E8E6E1]">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif font-black text-2xl tracking-tighter text-[#1A3620] flex items-center gap-2">
            TERRA<span className="text-[#3A5A40]">SCAPES</span>
          </div>
          <div className="hidden md:flex gap-8 font-medium text-sm text-[#4A4D4A]">
            <a href="#services" className="hover:text-[#1A3620] transition-colors duration-200 ease-out">{t.nav.srv}</a>
            <a href="#portfolio" className="hover:text-[#1A3620] transition-colors duration-200 ease-out">{t.nav.port}</a>
            <a href="#quote" className="hover:text-[#1A3620] transition-colors duration-200 ease-out">{t.nav.est}</a>
          </div>
          <div className="flex items-center gap-4">
            {/* Region Toggle */}
            <button 
              onClick={toggleRegion}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E8E6E1] bg-white hover:bg-[#F6F5F2] transition-colors text-sm font-bold active:scale-[0.97]"
            >
              {region === 'usa' ? '🇺🇸 USA' : '🇲🇽 MEX'}
            </button>
            <a href="#quote" className="hidden sm:inline-block bg-[#1A3620] text-[#F6F5F2] px-6 py-2.5 rounded-full font-semibold hover:bg-[#0D1C10] transition-all duration-200 ease-out active:scale-[0.97]">
              {t.nav.book}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-black tracking-tight leading-[1.1] mb-6 text-[#1A3620]">
              {t.hero.t1} <br/><span className="text-[#3A5A40] italic">{t.hero.t2}</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4A4D4A] mb-10 max-w-lg leading-relaxed">
              {t.hero.p}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="bg-[#1A3620] text-[#F6F5F2] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0D1C10] transition-all duration-200 ease-out active:scale-[0.97] flex items-center justify-center gap-2">
                {t.hero.btn1} <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#portfolio" className="bg-transparent text-[#1A3620] border border-[#1A3620]/20 px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#1A3620]/5 transition-all duration-200 ease-out active:scale-[0.97] text-center">
                {t.hero.btn2}
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-[#E8E6E1]">
              <img src="https://placehold.co/1200x900/1a3620/f6f5f2?text=Estate+Garden+Hero" alt="Luxury Estate Garden" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 border-y border-[#E8E6E1] bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 opacity-60 grayscale">
            <span className="text-sm font-bold tracking-widest uppercase">{t.trust}</span>
            <div className="flex gap-8 items-center">
               <span className="font-serif text-xl font-bold">LUMIÈRE</span>
               <span className="font-sans text-xl font-black tracking-tighter">VANGUARD</span>
               <span className="font-serif text-xl italic">Aesthete</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[#4A4D4A]">
             <a href="#" className="hover:text-[#1A3620] transition-colors"><Camera className="w-5 h-5" /></a>
             <a href="#" className="hover:text-[#1A3620] transition-colors"><MessageSquare className="w-5 h-5" /></a>
             <a href="#" className="hover:text-[#1A3620] transition-colors"><Briefcase className="w-5 h-5" /></a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-[#F6F5F2]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-black text-[#1A3620] mb-4">{t.srv.title}</h2>
            <p className="text-lg text-[#4A4D4A] max-w-xl mx-auto">{t.srv.p}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.srv.items.map((srv, i) => {
              const Icon = srv.icon
              return (
                <motion.div 
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30, delay: i * 0.1 }}
                  key={i} 
                  className="bg-white p-10 rounded-3xl border border-[#E8E6E1] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#1A3620]/5 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#1A3620]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#1A3620]">{srv.title}</h3>
                  <p className="text-[#4A4D4A] leading-relaxed">{srv.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="py-24 px-6 bg-white border-t border-[#E8E6E1]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-[#1A3620] mb-4">{t.port.title}</h2>
              <p className="text-lg text-[#4A4D4A] max-w-xl">{t.port.p}</p>
            </div>
            <button className="bg-transparent text-[#1A3620] border border-[#1A3620]/20 px-6 py-3 rounded-full font-semibold hover:bg-[#1A3620]/5 transition-all duration-200 ease-out active:scale-[0.97]">
              {t.port.btn}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 group cursor-pointer">
              <div className="aspect-video bg-[#E8E6E1] rounded-3xl overflow-hidden relative mb-4">
                <img src="https://placehold.co/1200x800/1a3620/f6f5f2?text=Project+Alpha" alt="Project" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <h3 className="text-2xl font-bold text-[#1A3620]">{t.port.items[0].title}</h3>
              <p className="text-[#4A4D4A]">{t.port.items[0].desc}</p>
            </div>

            <div className="md:col-span-4 group cursor-pointer">
              <div className="aspect-[4/5] bg-[#E8E6E1] rounded-3xl overflow-hidden relative mb-4">
                <img src="https://placehold.co/600x800/2a4b32/f6f5f2?text=Project+Beta" alt="Project" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              </div>
              <h3 className="text-xl font-bold text-[#1A3620]">{t.port.items[1].title}</h3>
              <p className="text-[#4A4D4A]">{t.port.items[1].desc}</p>
            </div>

            <div className="md:col-span-5 group cursor-pointer">
              <div className="aspect-square bg-[#E8E6E1] rounded-3xl overflow-hidden relative mb-4">
                <img src="https://placehold.co/800x800/3a5a40/f6f5f2?text=Project+Gamma" alt="Project" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              </div>
              <h3 className="text-xl font-bold text-[#1A3620]">{t.port.items[2].title}</h3>
              <p className="text-[#4A4D4A]">{t.port.items[2].desc}</p>
            </div>

            <div className="md:col-span-7 group cursor-pointer">
              <div className="aspect-[16/10] bg-[#E8E6E1] rounded-3xl overflow-hidden relative mb-4">
                <img src="https://placehold.co/1000x600/1a3620/f6f5f2?text=Project+Delta" alt="Project" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A3620]">{t.port.items[3].title}</h3>
              <p className="text-[#4A4D4A]">{t.port.items[3].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="quote" className="py-32 px-6 bg-[#1A3620] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="bg-[#F6F5F2] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-[#E8E6E1]">
            
            <div className="flex-1 p-10 lg:p-16">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-black text-[#1A3620] mb-3">{t.quote.title}</h2>
                <p className="text-[#4A4D4A]">{t.quote.p}</p>
              </div>

              <div className="space-y-10">
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="font-bold text-[#1A3620]">{t.quote.areaTitle}</label>
                    <span className="font-black text-[#3A5A40] text-lg">{yardSize.toLocaleString()} {t.quote.areaUnit}</span>
                  </div>
                  <input 
                    type="range" 
                    min={region === 'usa' ? 500 : 50} 
                    max={region === 'usa' ? 10000 : 1000} 
                    step={region === 'usa' ? 100 : 10}
                    value={yardSize} 
                    onChange={(e) => setYardSize(Number(e.target.value))}
                    className="w-full accent-[#1A3620] h-2 bg-[#E8E6E1] rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-[#8F8D88] mt-3 font-semibold uppercase tracking-wider">
                    <span>{t.quote.areaMin}</span>
                    <span>{t.quote.areaMax}</span>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-[#1A3620] block mb-4">{t.quote.reqTitle}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {t.quote.reqOptions.map(opt => (
                      <button 
                        key={opt.id}
                        onClick={() => handleServiceChange(opt.id)}
                        className={`p-4 rounded-2xl border-2 font-bold text-sm transition-all duration-200 ease-out active:scale-[0.97] ${
                          serviceType === opt.id 
                          ? 'border-[#1A3620] bg-[#1A3620]/5 text-[#1A3620]' 
                          : 'border-[#E8E6E1] text-[#8F8D88] hover:border-[#1A3620]/30'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-bold text-[#1A3620] block mb-4">{t.quote.photoTitle}</label>
                  <div 
                    onDragOver={(e) => { e.preventDefault(); setIsHoveringFile(true); }}
                    onDragLeave={() => setIsHoveringFile(false)}
                    className={`border-2 border-dashed rounded-3xl p-8 text-center transition-all duration-200 ease-out ${
                      isHoveringFile ? 'border-[#3A5A40] bg-[#3A5A40]/5' : 'border-[#E8E6E1] bg-white'
                    }`}
                  >
                    <UploadCloud className={`w-8 h-8 mx-auto mb-3 transition-colors ${isHoveringFile ? 'text-[#3A5A40]' : 'text-[#8F8D88]'}`} />
                    <p className="text-sm font-bold text-[#1A3620]">{t.quote.photoDesc1}</p>
                    <p className="text-xs text-[#8F8D88] mt-1">{t.quote.photoDesc2}</p>
                    <button className="mt-5 px-5 py-2 bg-white border border-[#E8E6E1] rounded-full text-sm font-bold text-[#1A3620] shadow-sm hover:bg-[#F6F5F2] active:scale-[0.97] transition-all">
                      {t.quote.photoBtn}
                    </button>
                  </div>
                </div>

              </div>
            </div>

            <div className="lg:w-96 bg-[#0D1C10] text-[#F6F5F2] p-10 lg:p-16 flex flex-col justify-center border-l border-[#2A4B32]">
              <h3 className="text-[#8F8D88] font-bold uppercase tracking-widest text-xs mb-6">{t.quote.totalTitle}</h3>
              
              <div className={`flex items-start gap-1 mb-4 transition-all duration-200 ${isCalculating ? 'blur-sm opacity-50' : 'blur-0 opacity-100'}`}>
                <span className="text-2xl font-bold mt-1 text-[#8F8D88]">$</span>
                <span className="text-6xl font-black tracking-tighter">
                  {getPrice().toLocaleString()}
                </span>
              </div>
              
              <p className="text-[#8F8D88] text-sm mb-10 border-b border-[#2A4B32] pb-10 leading-relaxed">
                {t.quote.totalDesc}
              </p>
              
              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-widest text-[#8F8D88]">{t.quote.ctaTitle}</label>
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full bg-[#1A3620] border border-[#2A4B32] rounded-xl px-4 py-4 text-white placeholder-[#8F8D88] outline-none focus:border-[#3A5A40] transition-colors" 
                />
                <button className="w-full bg-[#F6F5F2] text-[#0D1C10] font-black py-4 rounded-xl hover:bg-white active:scale-[0.97] transition-all duration-200 ease-out shadow-xl shadow-black/20">
                  {t.quote.ctaBtn}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Massive Premium Footer */}
      <footer className="bg-black text-[#F6F5F2] pt-24 pb-12 border-t border-[#1A3620]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="font-serif font-black text-3xl tracking-tighter mb-6">
                TERRA<span className="text-[#3A5A40]">SCAPES</span>
              </div>
              <p className="text-[#8F8D88] max-w-sm mb-8 leading-relaxed">
                {t.footer.desc}
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1A3620] flex items-center justify-center hover:bg-[#2A4B32] transition-colors cursor-pointer">
                  <Camera className="w-4 h-4" />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#1A3620] flex items-center justify-center hover:bg-[#2A4B32] transition-colors cursor-pointer">
                  <Briefcase className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 tracking-widest text-xs uppercase text-[#8F8D88]">{t.footer.contact}</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-[#3A5A40]" /> 1200 Architecture Ave, TX</li>
                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#3A5A40]" /> +1 (555) 123-4567</li>
                <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-[#3A5A40]" /> studio@terrascapes.com</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 tracking-widest text-xs uppercase text-[#8F8D88]">{t.footer.legal}</h4>
              <ul className="space-y-4 text-sm font-medium text-[#8F8D88]">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#1A3620] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold tracking-widest text-[#8F8D88] uppercase">
            <p>{t.footer.rights}</p>
            <p>{t.footer.tag}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
