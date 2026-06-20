"use client"
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Leaf, Shovel, Compass, Maximize, CheckCircle2, ChevronRight, Star, MapPin, Phone, Mail, Camera, Briefcase, MessageSquare } from 'lucide-react'
import { useState } from 'react'

const dict = {
  usa: {
    nav: { firm: 'The Firm', srv: 'Disciplines', proc: 'Process', port: 'Work', est: 'Estimate', book: 'Consultation' },
    hero: { 
      t1: 'Exterior', 
      t2: 'Architecture.', 
      p: 'Premium landscape design and structural hardscaping. We engineer environments that command attention and endure for generations.',
      btn1: 'Calculate Investment',
      btn2: 'Explore Portfolio'
    },
    trust: 'Trusted by estates across the region',
    stats: [
      { num: '15+', label: 'Years of Excellence' },
      { num: '400+', label: 'Estates Transformed' },
      { num: '3x', label: 'AIA Award Winning' }
    ],
    firm: {
      tag: 'The Firm',
      title: 'We do not plant gardens. We construct legacies.',
      p1: 'Terrascapes was founded on the principle that exterior spaces deserve the exact same architectural rigor and engineering precision as the buildings they surround.',
      p2: 'From monolithic retaining walls to hyper-curated botanical layouts, our multidisciplinary team of architects, engineers, and horticulturists execute with absolute perfection.',
      btn: 'Read Our Philosophy'
    },
    srv: {
      tag: 'Disciplines',
      title: 'A multidisciplinary approach to exterior domination.',
      p: 'We combine botany, engineering, and architectural precision to completely redefine your property.',
      items: [
        { icon: Compass, title: "Landscape Architecture", desc: "Topographical mastery and native curation tailored to your microclimate's specific demands." },
        { icon: Shovel, title: "Structural Hardscaping", desc: "Monolithic stone masonry, retaining walls, and custom exterior environments." },
        { icon: Leaf, title: "Estate Management", desc: "White-glove maintenance ensuring your property's architectural intent never degrades." }
      ]
    },
    process: {
      tag: 'Methodology',
      title: 'Architectural precision, step by step.',
      items: [
        { step: '01', title: 'Topographical Consultation', desc: 'Comprehensive site analysis, soil testing, and engineering assessment.' },
        { step: '02', title: '3D Architectural Design', desc: 'Botanical curation and structural blueprints rendered in hyper-realistic 3D.' },
        { step: '03', title: 'Monolithic Execution', desc: 'White-glove construction managed by dedicated project architects.' }
      ]
    },
    port: {
      tag: 'Portfolio',
      title: 'Selected Work',
      p: 'A glimpse into our recent estate transformations. Precision in every detail.',
      btn: 'View All Projects',
      items: [
        { title: 'The Oakridge Estate', desc: 'Full Hardscaping & Pool Design', metric: '4,500 SQ FT' },
        { title: 'Modern Zen Pavilion', desc: 'Botanical Curation & Masonry', metric: '2,200 SQ FT' },
        { title: 'Highland Retreat', desc: 'Outdoor Kitchen & Dining', metric: '1,800 SQ FT' }
      ]
    },
    testi: {
      tag: 'Testimonials',
      title: 'The standard of excellence.',
      items: [
        { q: "Terrascapes completely redefined our property. The retaining walls and masonry are genuinely works of art.", author: "Jonathan Mercer", role: "Estate Owner, Highland" },
        { q: "Their architectural approach to landscaping is unmatched. The 3D planning phase gave us absolute confidence.", author: "Sarah Jenkins", role: "Property Developer" },
        { q: "Immaculate execution. The team was professional, clean, and delivered a result that exceeded all expectations.", author: "David Vance", role: "Private Client" }
      ]
    },
    quote: {
      title: 'Project Estimator',
      p: 'Get a preliminary architectural baseline for your property transformation.',
      areaTitle: 'Property Footprint',
      areaUnit: 'sq ft',
      areaMin: 'Courtyard',
      areaMax: 'Estate',
      reqTitle: 'Primary Focus',
      reqOptions: [
        { id: 'design', label: 'Design & Planting' },
        { id: 'hardscape', label: 'Structural Hardscape' },
        { id: 'full', label: 'Full Estate Build' }
      ],
      totalTitle: 'Investment Baseline',
      totalDesc: 'This algorithmic estimate is for planning purposes. A formal architectural quote requires an on-site evaluation.',
      ctaBtn: 'Schedule On-Site Evaluation'
    },
    footer: {
      desc: 'Elevating the standard of exterior architecture across the region.',
      locations: 'Locations',
      loc1: 'San Francisco, CA',
      loc2: 'Palo Alto, CA',
      company: 'Company',
      links: ['The Firm', 'Disciplines', 'Portfolio', 'Careers', 'Contact'],
      contactTitle: 'Contact',
      rights: '© 2026 Arasue Forge LLC. All rights reserved.',
      legal: ['Privacy Policy', 'Terms of Service']
    }
  },
  mex: {
    nav: { firm: 'La Firma', srv: 'Disciplinas', proc: 'Proceso', port: 'Proyectos', est: 'Cotizador', book: 'Consulta' },
    hero: { 
      t1: 'Arquitectura', 
      t2: 'Exterior.', 
      p: 'Diseño de paisajes premium y hardscaping estructural. Diseñamos entornos que imponen presencia y perduran por generaciones.',
      btn1: 'Calcular Inversión',
      btn2: 'Explorar Portafolio'
    },
    trust: 'Con la confianza de las mejores fincas de la región',
    stats: [
      { num: '15+', label: 'Años de Excelencia' },
      { num: '400+', label: 'Fincas Transformadas' },
      { num: '3x', label: 'Premios AIA' }
    ],
    firm: {
      tag: 'La Firma',
      title: 'No plantamos jardines. Construimos legados.',
      p1: 'Terrascapes se fundó bajo el principio de que los espacios exteriores merecen exactamente el mismo rigor arquitectónico y precisión de ingeniería que los edificios que los rodean.',
      p2: 'Desde muros de contención monolíticos hasta diseños botánicos hiper-curados, nuestro equipo multidisciplinario de arquitectos, ingenieros y horticultores ejecuta con perfección absoluta.',
      btn: 'Leer Nuestra Filosofía'
    },
    srv: {
      tag: 'Disciplinas',
      title: 'Un enfoque multidisciplinario para el dominio exterior.',
      p: 'Combinamos botánica, ingeniería y precisión arquitectónica para redefinir por completo su propiedad.',
      items: [
        { icon: Compass, title: "Arquitectura de Paisaje", desc: "Dominio topográfico y curaduría nativa adaptada a las demandas específicas de su microclima." },
        { icon: Shovel, title: "Hardscaping Estructural", desc: "Mampostería de piedra monolítica, muros de contención y entornos exteriores a medida." },
        { icon: Leaf, title: "Gestión de Fincas", desc: "Mantenimiento de guante blanco que asegura que la intención arquitectónica de su propiedad nunca se degrade." }
      ]
    },
    process: {
      tag: 'Metodología',
      title: 'Precisión arquitectónica, paso a paso.',
      items: [
        { step: '01', title: 'Consulta Topográfica', desc: 'Análisis integral del sitio, pruebas de suelo y evaluación de ingeniería.' },
        { step: '02', title: 'Diseño Arquitectónico 3D', desc: 'Curaduría botánica y planos estructurales renderizados en 3D hiperrealista.' },
        { step: '03', title: 'Ejecución Monolítica', desc: 'Construcción de guante blanco gestionada por arquitectos de proyectos dedicados.' }
      ]
    },
    port: {
      tag: 'Portafolio',
      title: 'Trabajo Destacado',
      p: 'Un vistazo a nuestras recientes transformaciones. Precisión en cada detalle.',
      btn: 'Ver Todos los Proyectos',
      items: [
        { title: 'Finca Oakridge', desc: 'Hardscaping Integral y Piscina', metric: '420 M²' },
        { title: 'Pabellón Zen Moderno', desc: 'Curaduría Botánica y Piedra', metric: '205 M²' },
        { title: 'Retiro Highland', desc: 'Cocina Exterior y Comedor', metric: '165 M²' }
      ]
    },
    testi: {
      tag: 'Testimoniales',
      title: 'El estándar de excelencia.',
      items: [
        { q: "Terrascapes redefinió por completo nuestra propiedad. Los muros de contención y la mampostería son genuinamente obras de arte.", author: "Jonathan Mercer", role: "Propietario de Finca" },
        { q: "Su enfoque arquitectónico para el paisajismo es inigualable. La fase de planificación 3D nos dio absoluta confianza.", author: "Sarah Jenkins", role: "Desarrolladora" },
        { q: "Ejecución inmaculada. El equipo fue profesional, limpio y entregó un resultado que superó todas las expectativas.", author: "David Vance", role: "Cliente Privado" }
      ]
    },
    quote: {
      title: 'Estimador de Proyectos',
      p: 'Obtenga una línea base arquitectónica preliminar para la transformación de su propiedad.',
      areaTitle: 'Área de la Propiedad',
      areaUnit: 'm²',
      areaMin: 'Patio',
      areaMax: 'Finca',
      reqTitle: 'Enfoque Principal',
      reqOptions: [
        { id: 'design', label: 'Diseño y Plantación' },
        { id: 'hardscape', label: 'Hardscape Estructural' },
        { id: 'full', label: 'Construcción Total' }
      ],
      totalTitle: 'Inversión Base',
      totalDesc: 'Esta estimación algorítmica es para fines de planificación. Una cotización arquitectónica formal requiere evaluación en el sitio.',
      ctaBtn: 'Agendar Evaluación en Sitio'
    },
    footer: {
      desc: 'Elevando el estándar de la arquitectura exterior en la región.',
      locations: 'Ubicaciones',
      loc1: 'Ciudad de México, CDMX',
      loc2: 'Monterrey, NL',
      company: 'Compañía',
      links: ['La Firma', 'Disciplinas', 'Portafolio', 'Carreras', 'Contacto'],
      contactTitle: 'Contacto',
      rights: '© 2026 Arasue Forge LLC. Todos los derechos reservados.',
      legal: ['Política de Privacidad', 'Términos de Servicio']
    }
  }
}

// Section Tag Component
const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-black/5 text-[10px] font-bold uppercase tracking-widest mb-8 text-black/60">
    <span className="w-1.5 h-1.5 rounded-full bg-[#1A3620]" />
    {text}
  </div>
)

// Architectural Blueprint Wireframe (Replaces Images)
const BlueprintWireframe = ({ type = 'hero' }: { type?: 'hero' | 'card' | 'about' }) => {
  return (
    <div className="absolute inset-0 bg-[#F8F9FA] overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Topographic Lines Mockup */}
      <svg className="absolute inset-0 w-full h-full stroke-black/[0.04] fill-none" strokeWidth="1" viewBox="0 0 400 400" preserveAspectRatio="none">
        <path d="M 0 50 Q 100 150 200 100 T 400 150" />
        <path d="M 0 100 Q 150 200 250 150 T 400 200" />
        <path d="M 0 150 Q 200 250 300 200 T 400 250" />
        <path d="M 0 200 Q 250 300 350 250 T 400 300" />
      </svg>

      {/* Abstract Architectural Elements */}
      <div className="absolute inset-0 p-8 flex items-center justify-center relative z-10">
        <div className="w-full h-full border border-black/10 rounded-sm relative flex flex-col justify-between p-4 bg-white/50 backdrop-blur-sm">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 border-2 border-[#1A3620]/20 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-[#1A3620]/40 rounded-full" />
            </div>
            <div className="text-[9px] font-mono font-bold text-black/30 tracking-widest uppercase">
              SEC. {type === 'hero' ? 'A-1' : type === 'about' ? 'B-2' : 'C-3'}
            </div>
          </div>
          
          {type === 'hero' && (
            <div className="w-full grid grid-cols-3 gap-2 mt-auto">
               <div className="h-16 bg-black/5 rounded-sm border border-black/10" />
               <div className="h-24 bg-[#1A3620]/5 rounded-sm border border-[#1A3620]/20" />
               <div className="h-12 bg-black/5 rounded-sm border border-black/10" />
            </div>
          )}

          {type === 'about' && (
            <div className="w-full flex gap-2 mt-auto">
               <div className="h-16 flex-1 bg-[#1A3620]/5 rounded-sm border border-[#1A3620]/20" />
               <div className="h-16 w-16 bg-black/5 rounded-sm border border-black/10" />
            </div>
          )}
        </div>
      </div>
      
      {/* Measurement Annotations */}
      <div className="absolute bottom-4 right-4 text-[8px] font-mono font-bold text-black/30 flex items-center gap-2">
        <span className="w-8 h-[1px] bg-black/20" />
        1:100 SCALE
      </div>
    </div>
  )
}

export function WebCorporativa() {
  const [region, setRegion] = useState<'usa' | 'mex'>('usa')
  const [area, setArea] = useState(2)
  const [req, setReq] = useState('design')
  const [isCalculating, setIsCalculating] = useState(false)
  
  const reduce = useReducedMotion()
  const t = dict[region]

  const toggleRegion = () => {
    setIsCalculating(true)
    setTimeout(() => {
      setRegion(region === 'usa' ? 'mex' : 'usa')
      setIsCalculating(false)
    }, 300)
  }

  const handleReqChange = (val: string) => {
    setIsCalculating(true)
    setTimeout(() => {
      setReq(val)
      setIsCalculating(false)
    }, 200)
  }

  const getPrice = () => {
    let base = 0;
    if (area === 1) base = region === 'usa' ? 8000 : 150000;
    if (area === 2) base = region === 'usa' ? 25000 : 450000;
    if (area === 3) base = region === 'usa' ? 75000 : 1200000;
    
    let multiplier = 1;
    if (req === 'design') multiplier = 0.3; 
    if (req === 'hardscape') multiplier = 0.8; 
    if (req === 'full') multiplier = 1.0;
    
    const estimate = Math.round(base * multiplier);
    return region === 'usa' ? `$${estimate.toLocaleString()}` : `$${estimate.toLocaleString()} MXN`
  }

  return (
    <div className="min-h-screen bg-[#FCFCFC] text-[#111] font-sans selection:bg-[#1A3620] selection:text-white overflow-hidden">
      
      {/* Mega Navigation */}
      <nav className="w-full border-b border-black/5 sticky top-0 bg-white/80 backdrop-blur-xl z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif font-black text-2xl tracking-tighter flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1A3620] text-white flex items-center justify-center rounded-sm">
              <Leaf className="w-4 h-4" />
            </div>
            TERRASCAPES
          </div>
          <div className="hidden lg:flex gap-8 font-semibold text-sm text-black/60">
            <a href="#firm" className="hover:text-black transition-colors">{t.nav.firm}</a>
            <a href="#services" className="hover:text-black transition-colors">{t.nav.srv}</a>
            <a href="#process" className="hover:text-black transition-colors">{t.nav.proc}</a>
            <a href="#portfolio" className="hover:text-black transition-colors">{t.nav.port}</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleRegion}
              className="flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 text-black/50 hover:text-black hover:bg-black/5 transition-colors text-xs font-bold uppercase tracking-widest"
            >
              {region === 'usa' ? 'US' : 'MX'}
            </button>
            <a href="#quote" className="hidden sm:inline-flex bg-[#111] text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-black/80 transition-colors items-center gap-2">
              {t.nav.book} <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={reduce ? false : { opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <SectionTag text={t.trust} />
            <h1 className="text-5xl md:text-7xl font-serif font-black tracking-tight mb-6 leading-[1.05] text-[#111]">
              {t.hero.t1} <br />
              <span className="italic text-black/40">{t.hero.t2}</span>
            </h1>
            <p className="text-lg text-black/60 mb-10 leading-relaxed max-w-lg font-medium">
              {t.hero.p}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="bg-[#1A3620] text-white px-8 py-4 rounded-full font-bold hover:bg-[#0A1F10] transition-colors flex items-center justify-center gap-2 text-sm shadow-lg shadow-[#1A3620]/20">
                {t.hero.btn1} <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#portfolio" className="px-8 py-4 rounded-full font-bold border border-black/10 text-black hover:bg-black/5 transition-colors flex items-center justify-center gap-2 text-sm">
                {t.hero.btn2}
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={reduce ? false : { opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[550px]"
          >
            <div className="aspect-[4/5] rounded-3xl bg-white border border-black/10 p-2 shadow-2xl relative group overflow-hidden">
              <div className="absolute inset-2 rounded-[1.25rem] overflow-hidden">
                 <BlueprintWireframe type="hero" />
              </div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md border border-black/10 rounded-2xl p-4 shadow-xl flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Status</div>
                  <div className="text-sm font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1A3620]" /> Accepting Projects
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#1A3620]/10 flex items-center justify-center">
                  <Maximize className="w-4 h-4 text-[#1A3620]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Authority Banner */}
      <section className="py-12 border-y border-black/5 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-black/5">
            {t.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center py-4 text-center">
                <div className="text-4xl font-serif font-black mb-2 text-[#1A3620]">{stat.num}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-black/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Firm (About Us) */}
      <section id="firm" className="py-24 px-6 bg-[#FCFCFC]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <SectionTag text={t.firm.tag} />
            <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight mb-6 leading-tight max-w-xl">
              {t.firm.title}
            </h2>
            <div className="space-y-6 text-black/60 text-lg font-medium max-w-lg">
              <p>{t.firm.p1}</p>
              <p>{t.firm.p2}</p>
            </div>
            <button className="mt-10 flex items-center gap-2 font-bold text-sm hover:text-[#1A3620] transition-colors pb-2 border-b-2 border-black/10 hover:border-[#1A3620]">
              {t.firm.btn} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-3xl border border-black/10 bg-white relative overflow-hidden group">
               <BlueprintWireframe type="about" />
            </div>
            <div className="aspect-square rounded-3xl border border-black/10 bg-white relative overflow-hidden group translate-y-8">
               <BlueprintWireframe type="card" />
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines Section */}
      <section id="services" className="py-24 px-6 border-t border-black/5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:w-2/3">
            <SectionTag text={t.srv.tag} />
            <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight mb-4">{t.srv.title}</h2>
            <p className="text-black/60 text-lg font-medium">{t.srv.p}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.srv.items.map((srv, i) => {
              const Icon = srv.icon
              return (
                <div key={i} className="bg-[#F8F9FA] border border-black/5 p-8 rounded-3xl hover:border-black/10 transition-colors group">
                  <div className="w-14 h-14 bg-white border border-black/5 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                    <Icon className="w-6 h-6 text-[#1A3620]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{srv.title}</h3>
                  <p className="text-black/60 text-sm leading-relaxed">{srv.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="process" className="py-24 px-6 border-t border-black/5 bg-[#111] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest mb-8 text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              {t.process.tag}
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight">{t.process.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-white/10" />

            {t.process.items.map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-black border-8 border-[#111] flex items-center justify-center text-2xl font-serif font-black text-white/30 mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="portfolio" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <SectionTag text={t.port.tag} />
              <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight mb-4">{t.port.title}</h2>
              <p className="text-black/60 text-lg font-medium">{t.port.p}</p>
            </div>
            <button className="hidden md:flex items-center gap-2 font-bold text-sm hover:text-[#1A3620] transition-colors pb-2 border-b-2 border-black/10 hover:border-[#1A3620]">
              {t.port.btn} <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.port.items.map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square rounded-3xl border border-black/10 bg-[#F8F9FA] overflow-hidden relative mb-6">
                  <BlueprintWireframe type="card" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                  <div className="absolute top-4 right-4 bg-white border border-black/10 text-[10px] font-bold px-3 py-1.5 rounded-full tracking-widest shadow-sm">
                    {project.metric}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-[#1A3620] transition-colors">{project.title}</h3>
                <p className="text-sm text-black/50 font-medium">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 border-t border-black/5 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto text-center">
          <SectionTag text={t.testi.tag} />
          <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight mb-16">{t.testi.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testi.items.map((item, i) => (
              <div key={i} className="bg-white border border-black/5 rounded-3xl p-8 text-left shadow-sm">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-[#1A3620] text-[#1A3620]" />)}
                </div>
                <p className="text-black/80 font-medium leading-relaxed mb-8 italic">&quot;{item.q}&quot;</p>
                <div>
                  <div className="font-bold">{item.author}</div>
                  <div className="text-xs text-black/40 font-bold uppercase tracking-widest mt-1">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimator Section */}
      <section id="quote" className="py-24 px-6 border-t border-black/5 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#111] rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="flex-1 relative z-10">
              <div className="mb-10">
                <h2 className="text-3xl font-serif font-black mb-3">{t.quote.title}</h2>
                <p className="text-white/60 text-base">{t.quote.p}</p>
              </div>

              <div className="space-y-10">
                <div>
                  <label className="text-sm font-bold text-white mb-6 block uppercase tracking-widest">{t.quote.areaTitle}</label>
                  <input 
                    type="range" 
                    min={1} 
                    max={3} 
                    step={1}
                    value={area} 
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer focus:outline-none accent-[#1A3620]"
                  />
                  <div className="flex justify-between text-[11px] font-bold text-white/40 mt-4 uppercase tracking-wider">
                    <span>{t.quote.areaMin}</span>
                    <span>{t.quote.areaMax}</span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-white mb-4 block uppercase tracking-widest">{t.quote.reqTitle}</label>
                  <div className="flex flex-col gap-3">
                    {t.quote.reqOptions.map(opt => (
                      <button 
                        key={opt.id}
                        onClick={() => handleReqChange(opt.id)}
                        className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-200 text-sm font-bold ${
                          req === opt.id 
                          ? 'border-white bg-white text-black' 
                          : 'border-white/10 bg-white/5 text-white/60 hover:border-white/30'
                        }`}
                      >
                        {opt.label}
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${req === opt.id ? 'border-black' : 'border-white/20'}`}>
                          {req === opt.id && <div className="w-2 h-2 rounded-full bg-black" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[320px] bg-white rounded-[2rem] p-8 text-black flex flex-col justify-center relative z-10 shadow-xl">
              <h3 className="text-[10px] font-bold text-black/40 uppercase tracking-widest mb-6">{t.quote.totalTitle}</h3>
              <div className={`mb-6 transition-all duration-300 ${isCalculating ? 'blur-sm opacity-50 scale-95' : 'blur-0 opacity-100 scale-100'}`}>
                <div className="text-5xl font-black tracking-tighter mb-2">
                  <span className="text-2xl text-black/40 mr-1">~</span>
                  {getPrice()}
                </div>
              </div>
              <p className="text-black/50 text-xs mb-8 pb-8 border-b border-black/5 leading-relaxed font-medium">
                {t.quote.totalDesc}
              </p>
              <button className="w-full bg-[#1A3620] text-white font-bold text-sm py-4 rounded-full hover:bg-[#0A1F10] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2">
                {t.quote.ctaBtn} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mega Footer */}
      <footer className="pt-24 pb-12 border-t border-black/5 bg-[#FCFCFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="font-serif font-black text-2xl flex items-center gap-3 mb-6 text-[#111]">
                 <Leaf className="w-5 h-5 text-[#1A3620]" />
                 TERRASCAPES
              </div>
              <p className="text-black/50 text-sm max-w-sm leading-relaxed mb-8">
                {t.footer.desc}
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black/60 hover:text-black hover:bg-black/10 transition-colors"><Camera className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black/60 hover:text-black hover:bg-black/10 transition-colors"><Briefcase className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black/60 hover:text-black hover:bg-black/10 transition-colors"><MessageSquare className="w-4 h-4" /></a>
              </div>
            </div>
            
            <div>
              <div className="text-[10px] font-bold text-black/40 uppercase tracking-widest mb-6">{t.footer.locations}</div>
              <ul className="space-y-4 text-sm font-medium text-black/70">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-black/30 mt-0.5" /> {t.footer.loc1}
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-black/30 mt-0.5" /> {t.footer.loc2}
                </li>
              </ul>
            </div>

            <div>
              <div className="text-[10px] font-bold text-black/40 uppercase tracking-widest mb-6">{t.footer.company}</div>
              <ul className="space-y-3 text-sm font-medium text-black/70">
                {t.footer.links.map(link => (
                  <li key={link}><a href="#" className="hover:text-[#1A3620] transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-black/5 text-xs font-bold text-black/40 uppercase tracking-widest">
            <div>{t.footer.rights}</div>
            <div className="flex gap-6">
              {t.footer.legal.map(l => <a key={l} href="#" className="hover:text-black transition-colors">{l}</a>)}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
