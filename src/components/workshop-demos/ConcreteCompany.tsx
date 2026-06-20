"use client"
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { ArrowRight, HardHat, Pickaxe, Ruler, Truck, ChevronDown, CheckCircle2, ChevronRight, Activity, Cpu, Hammer, Box, Layers, ArrowLeft, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

const dict = {
  usa: {
    nav: { srv: 'Capabilities', port: 'Deployments', proc: 'Architecture', faq: 'Specs', est: 'Calculator', book: 'Dispatch', back: 'Abort & Return' },
    hero: { 
      t1: 'MONOLITHIC.', 
      t2: 'EXECUTION.', 
      p: 'Industrial-grade concrete infrastructure. Engineered for maximum load capacity and zero structural degradation. Built to withstand everything.',
      btn1: 'Dispatch Engineering',
      btn2: 'View Blueprints'
    },
    trust: 'Engineered for Heavy Industry',
    stats: [
      { num: '85K+', label: 'Cubic Yards Poured' },
      { num: '0.001%', label: 'Tolerance Variance' },
      { num: '400+', label: 'Active Deployments' }
    ],
    srv: {
      tag: 'Capabilities',
      title: 'Structural Superiority.',
      p: 'Heavy-duty pours and reinforcement executed with absolute precision. No delays, no stress fractures.',
      items: [
        { icon: Truck, title: "Commercial Pouring", desc: "Large-scale continuous pours for warehouses, logistics hubs, and industrial facilities. 24-hour shift capacity." },
        { icon: Ruler, title: "Precision Flatwork", desc: "Laser-leveled flatwork with flawless finishing. Engineered for heavy machinery and constant load stress." },
        { icon: Pickaxe, title: "Demolition & Sub-Base", desc: "Complete site clearing, excavation, and foundational reinforcement prior to the monolithic pour." }
      ]
    },
    process: {
      tag: 'Architecture',
      title: 'Deployment Protocol.',
      items: [
        { num: '01', title: 'Site Engineering', desc: 'Load requirement verification, soil stress testing, and laser-guided grading.' },
        { num: '02', title: 'Steel Reinforcement', desc: 'Dense rebar grids installed by master steelworkers for maximum tensile strength.' },
        { num: '03', title: 'Monolithic Pour', desc: 'Continuous extrusion with industrial vibrators to eliminate void pockets.' }
      ]
    },
    portfolio: {
      tag: 'Deployments',
      title: 'Recent Infrastructure',
      p: 'Structural integrity speaks for itself. Review our latest high-load environments.',
      items: [
        { cat: 'Commercial', title: 'Logistics Hub Alpha', desc: '15,000 sq ft warehouse floor poured in a single continuous 24-hour shift.', metric: '15,000 SQ FT' },
        { cat: 'Infrastructure', title: 'Highway 42 Retaining', desc: 'Reinforced 30ft retaining walls engineered for extreme soil pressure.', metric: '8,000 CUBIC YARDS' },
        { cat: 'Industrial', title: 'Manufacturing Plant Sigma', desc: 'High-density foundation designed for extreme vibration absorption.', metric: '12,000 SQ FT' }
      ]
    },
    faq: {
      tag: 'Specs',
      title: 'Technical Specifications',
      items: [
        { q: 'How do you mitigate thermal cracking during large pours?', a: 'We control thermal expansion using strategically mapped control joints, high-grade rebar matrices, and chemical curing compounds that regulate internal temperature.' },
        { q: 'What is the standard tolerance for laser leveling?', a: 'Our precision flatwork operates within a +/- 1/8 inch tolerance over 10 feet (F-Number system), ensuring perfect operation for automated warehouse robotics.' },
        { q: 'Do you manage sub-base excavation?', a: 'Yes. The sub-base dictates the lifespan of the slab. We execute all grading and compaction internally to guarantee the foundational integrity.' }
      ]
    },
    quote: {
      title: 'Yield Calculator',
      p: 'Calculate your required cubic yardage and estimate baseline costs instantly.',
      areaTitle: 'Surface Area (SQ FT)',
      reqTitle: 'Slab Depth',
      reqOptions: [
        { id: '4', label: '4" (Standard Load)' },
        { id: '6', label: '6" (Heavy Load)' },
        { id: '8', label: '8" (Industrial Load)' }
      ],
      totalTitle: 'Material Volume Estimate',
      totalDesc: 'This is an algorithmic yield estimate. Labor, steel, and site preparation are quoted separately.',
      ctaBtn: 'Dispatch Engineering Team'
    },
    footer: {
      desc: 'The monolithic backbone of modern industrial infrastructure.',
      rights: '© 2026 Arasue Forge LLC. All rights reserved.',
      tag: 'Forged in Concrete.'
    },
    contactPage: {
      tag: 'Dispatch',
      title: 'Initiate Core Deployment.',
      desc: 'Submit your architectural blueprints or structural requirements. Our engineering team will review load capacities and initiate dispatch protocol.',
      form: {
        fn: 'Commander / First Name',
        ln: 'Last Name',
        email: 'Secure Comms / Email',
        scope: 'Project Specifications / Load Requirements',
        submit: 'Authorize Dispatch'
      }
    }
  },
  mex: {
    nav: { srv: 'Capacidades', port: 'Despliegues', proc: 'Arquitectura', faq: 'Specs', est: 'Calculadora', book: 'Despacho', back: 'Abortar y Volver' },
    hero: { 
      t1: 'EJECUCIÓN.', 
      t2: 'MONOLÍTICA.', 
      p: 'Infraestructura de concreto de grado industrial. Diseñada para máxima capacidad de carga y cero degradación estructural.',
      btn1: 'Despachar Ingeniería',
      btn2: 'Ver Planos'
    },
    trust: 'Diseñado para Industria Pesada',
    stats: [
      { num: '85K+', label: 'Yardas Cúbicas Coladas' },
      { num: '0.001%', label: 'Varianza de Tolerancia' },
      { num: '400+', label: 'Despliegues Activos' }
    ],
    srv: {
      tag: 'Capacidades',
      title: 'Superioridad Estructural.',
      p: 'Colados de uso rudo y refuerzo estructural ejecutados con precisión absoluta. Sin retrasos, sin fisuras por estrés.',
      items: [
        { icon: Truck, title: "Colado Comercial", desc: "Colados continuos a gran escala para almacenes, centros logísticos e instalaciones industriales. Capacidad de turnos de 24 horas." },
        { icon: Ruler, title: "Planicidad de Precisión", desc: "Superficies niveladas por láser con acabado impecable. Diseñado para maquinaria pesada y estrés de carga constante." },
        { icon: Pickaxe, title: "Demolición y Sub-Base", desc: "Limpieza completa del sitio, excavación y refuerzo de cimientos antes del colado monolítico." }
      ]
    },
    process: {
      tag: 'Arquitectura',
      title: 'Protocolo de Despliegue.',
      items: [
        { num: '01', title: 'Ingeniería del Sitio', desc: 'Verificación de requisitos de carga, pruebas de estrés del suelo y nivelación guiada por láser.' },
        { num: '02', title: 'Refuerzo de Acero', desc: 'Mallas de varilla densas instaladas por maestros acereros para máxima resistencia a la tracción.' },
        { num: '03', title: 'Colado Monolítico', desc: 'Extrusión continua con vibradores industriales para eliminar bolsas de vacío.' }
      ]
    },
    portfolio: {
      tag: 'Despliegues',
      title: 'Infraestructura Reciente',
      p: 'La integridad estructural habla por sí sola. Revise nuestros últimos entornos de alta carga.',
      items: [
        { cat: 'Comercial', title: 'Hub Logístico Alpha', desc: '15,000 pies cuadrados de piso de almacén colado en un turno continuo de 24 horas.', metric: '15,000 SQ FT' },
        { cat: 'Infraestructura', title: 'Muro de Contención Autopista 42', desc: 'Muros de contención de 30 pies reforzados para presión extrema del suelo.', metric: '8,000 YARDAS CÚBICAS' },
        { cat: 'Industrial', title: 'Planta de Manufactura Sigma', desc: 'Fundación de alta densidad diseñada para absorción extrema de vibraciones.', metric: '12,000 SQ FT' }
      ]
    },
    faq: {
      tag: 'Specs',
      title: 'Especificaciones Técnicas',
      items: [
        { q: '¿Cómo mitigan el agrietamiento térmico durante colados grandes?', a: 'Controlamos la expansión térmica usando juntas de control estratégicamente mapeadas, matrices de acero de alto grado y compuestos químicos de curado que regulan la temperatura interna.' },
        { q: '¿Cuál es la tolerancia estándar para la nivelación láser?', a: 'Nuestra planicidad de precisión opera dentro de una tolerancia de +/- 1/8 de pulgada sobre 10 pies (sistema F-Number), asegurando operación perfecta para robótica de almacén.' },
        { q: '¿Manejan la excavación de la sub-base?', a: 'Sí. La sub-base dicta la vida útil de la losa. Ejecutamos toda la nivelación y compactación internamente para garantizar la integridad fundacional.' }
      ]
    },
    quote: {
      title: 'Calculadora de Rendimiento',
      p: 'Calcule su volumen en yardas cúbicas y estime costos base al instante.',
      areaTitle: 'Área de Superficie (SQ FT)',
      reqTitle: 'Profundidad de Losa',
      reqOptions: [
        { id: '4', label: '4" (Carga Estándar)' },
        { id: '6', label: '6" (Carga Pesada)' },
        { id: '8', label: '8" (Carga Industrial)' }
      ],
      totalTitle: 'Estimación de Volumen',
      totalDesc: 'Esta es una estimación algorítmica de rendimiento. La mano de obra, el acero y la preparación del sitio se cotizan por separado.',
      ctaBtn: 'Despachar Equipo de Ingeniería'
    },
    footer: {
      desc: 'La columna vertebral monolítica de la infraestructura industrial moderna.',
      rights: '© 2026 Arasue Forge LLC. Todos los derechos reservados.',
      tag: 'Forjado en Concreto.'
    },
    contactPage: {
      tag: 'Despacho',
      title: 'Iniciar Despliegue Central.',
      desc: 'Envíe sus planos arquitectónicos o requisitos estructurales. Nuestro equipo de ingeniería revisará las capacidades de carga e iniciará el protocolo de despacho.',
      form: {
        fn: 'Nombre',
        ln: 'Apellido',
        email: 'Comunicaciones Seguras / Email',
        scope: 'Especificaciones del Proyecto / Requisitos de Carga',
        submit: 'Autorizar Despacho'
      }
    }
  }
}

// UI Components (Arasue Forge Standard)
const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#05F2DB]/20 bg-[#05F2DB]/5 text-[10px] font-mono font-bold uppercase tracking-widest mb-6 text-[#05F2DB]">
    <div className="w-1.5 h-1.5 bg-[#05F2DB] shadow-[0_0_8px_#05F2DB]" />
    {text}
  </div>
)

// Rebar/Steel Grid Wireframe for Industrial feel
const RebarWireframe = ({ type = 'hero' }: { type?: 'hero' | 'card' }) => {
  return (
    <div className="absolute inset-0 bg-[#0B0F19] overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
      {/* Heavy Industrial Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#131926_2px,transparent_2px),linear-gradient(to_bottom,#131926_2px,transparent_2px)] bg-[size:48px_48px]" />
      
      {/* Diagonal Rebar Bracing */}
      <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,#05F2DB_20px,#05F2DB_21px)]" />

      {/* Abstract Concrete Blocks */}
      <div className="absolute inset-0 p-8 flex items-center justify-center z-10">
        <div className="w-full h-full border-2 border-[#131926] bg-[#0B0F19]/80 backdrop-blur-sm flex flex-col justify-between p-6">
          <div className="flex justify-between items-start">
             <div className="flex gap-2">
                <div className="w-4 h-4 bg-[#131926] border border-white/10" />
                <div className="w-4 h-4 bg-[#131926] border border-white/10" />
             </div>
             <div className="text-[10px] font-mono font-bold text-[#F2F2F2]/40 tracking-widest uppercase">
               SECTOR {type === 'hero' ? '01-ALPHA' : '02-BETA'}
             </div>
          </div>
          
          <div className="w-full h-24 bg-[#131926] border border-white/5 relative overflow-hidden flex items-center justify-center mt-auto">
            {/* Laser Leveling Scan Effect */}
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute left-0 right-0 h-[1px] bg-[#05F2DB] shadow-[0_0_10px_#05F2DB]"
            />
            <Activity className="w-8 h-8 text-[#05F2DB]/40" />
          </div>
        </div>
      </div>
      
      {/* HUD Data */}
      <div className="absolute bottom-4 right-4 text-[10px] font-mono font-bold text-[#05F2DB]/60 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#05F2DB] animate-pulse" />
        LOAD OK
      </div>
    </div>
  )
}

export function ConcreteCompany() {
  const [region, setRegion] = useState<'usa' | 'mex'>('usa')
  const [currentView, setCurrentView] = useState<'landing' | 'contact'>('landing')
  const [area, setArea] = useState(5000)
  const [depth, setDepth] = useState('6')
  const [isCalculating, setIsCalculating] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  
  const reduce = useReducedMotion()
  const t = dict[region]

  // Spring physics setup (Arasue Kowalski standard)
  const springTransition = { type: "spring", stiffness: 300, damping: 30 } as const

  const toggleRegion = () => {
    setIsCalculating(true)
    setTimeout(() => {
      setRegion(region === 'usa' ? 'mex' : 'usa')
      setIsCalculating(false)
    }, 200)
  }

  const getYield = () => {
    // Formula: Area (sq ft) * Depth (ft) = Cubic Feet / 27 = Cubic Yards
    const depthFt = parseInt(depth) / 12
    const cubicFeet = area * depthFt
    const cubicYards = cubicFeet / 27
    return cubicYards.toFixed(1)
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#F2F2F2] font-sans selection:bg-[#05F2DB] selection:text-[#0B0F19] overflow-hidden flex flex-col">
      
      {/* Tactical Nav */}
      <nav className="w-full border-b border-white/5 sticky top-0 bg-[#0B0F19]/90 backdrop-blur-xl z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="font-sans font-black text-2xl tracking-tighter flex items-center gap-3 cursor-pointer"
            onClick={() => setCurrentView('landing')}
          >
            <div className="w-8 h-8 bg-[#05F2DB] text-[#0B0F19] flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            SLABWORKS.
          </div>
          
          {currentView === 'landing' ? (
            <div className="hidden lg:flex gap-8 font-mono text-xs font-bold text-[#F2F2F2]/60 uppercase tracking-widest">
              <a href="#services" className="hover:text-[#05F2DB] transition-colors">{t.nav.srv}</a>
              <a href="#portfolio" className="hover:text-[#05F2DB] transition-colors">{t.nav.port}</a>
              <a href="#process" className="hover:text-[#05F2DB] transition-colors">{t.nav.proc}</a>
              <a href="#faq" className="hover:text-[#05F2DB] transition-colors">{t.nav.faq}</a>
            </div>
          ) : (
            <div className="hidden lg:flex" />
          )}

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleRegion}
              className="flex items-center gap-2 px-3 py-1 rounded-sm border border-white/10 text-[#F2F2F2]/60 hover:text-[#05F2DB] hover:border-[#05F2DB]/30 transition-colors text-xs font-mono font-bold uppercase"
            >
              {region === 'usa' ? 'US' : 'MX'}
            </button>
            {currentView === 'landing' ? (
              <button 
                onClick={() => { window.scrollTo(0,0); setCurrentView('contact') }}
                className="hidden sm:inline-flex bg-[#F2F2F2] text-[#0B0F19] px-6 py-2.5 rounded-sm font-bold text-sm hover:bg-[#05F2DB] transition-colors items-center gap-2 uppercase tracking-wide"
              >
                {t.nav.book} <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button 
                onClick={() => { window.scrollTo(0,0); setCurrentView('landing') }}
                className="hidden sm:inline-flex border border-white/20 text-[#05F2DB] px-6 py-2.5 rounded-sm font-bold text-sm hover:bg-white/5 transition-colors items-center gap-2 uppercase tracking-wide"
              >
                <ArrowLeft className="w-4 h-4" /> {t.nav.back}
              </button>
            )}
          </div>
        </div>
      </nav>

      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          {currentView === 'landing' && (
            <motion.div 
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col"
            >
              {/* Hero Section */}
              <section className="pt-24 pb-16 px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <motion.div 
                    initial={reduce ? false : { opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={springTransition}
                  >
                    <SectionTag text={t.trust} />
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.95] text-[#F2F2F2]">
                      {t.hero.t1} <br />
                      <span className="text-[#131926]" style={{ WebkitTextStroke: '1px #F2F2F2' }}>{t.hero.t2}</span>
                    </h1>
                    <p className="text-lg text-[#F2F2F2]/60 mb-10 max-w-lg font-medium leading-relaxed">
                      {t.hero.p}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => { window.scrollTo(0,0); setCurrentView('contact') }}
                        className="bg-[#05F2DB] text-[#0B0F19] px-8 py-4 rounded-sm font-bold hover:bg-white transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
                      >
                        {t.hero.btn1} <ArrowRight className="w-4 h-4" />
                      </button>
                      <a href="#portfolio" className="px-8 py-4 rounded-sm font-bold border border-white/10 text-[#F2F2F2] hover:bg-white/5 transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wide">
                        {t.hero.btn2}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={reduce ? false : { opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ ...springTransition, delay: 0.1 }}
                    className="w-full h-[500px]"
                  >
                    <div className="w-full h-full border border-white/10 bg-[#131926] relative group overflow-hidden">
                       <RebarWireframe type="hero" />
                       <div className="absolute top-6 right-6 border border-[#05F2DB]/30 bg-[#0B0F19]/90 backdrop-blur-md p-4 text-[#F2F2F2]">
                         <div className="text-[10px] font-mono text-[#05F2DB] mb-1">SYSTEM STATUS</div>
                         <div className="font-bold flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-[#05F2DB]" /> DISPATCH READY</div>
                       </div>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Tactical Stats Banner */}
              <section className="py-8 border-y border-white/5 bg-[#131926]">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {t.stats.map((stat, i) => (
                      <div key={i} className="flex flex-col items-center justify-center py-4 text-center">
                        <div className="text-4xl font-black mb-1 text-[#F2F2F2]">{stat.num}</div>
                        <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#05F2DB]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Capabilities Section */}
              <section id="services" className="py-24 px-6 bg-[#0B0F19]">
                <div className="max-w-7xl mx-auto">
                  <div className="mb-16 md:w-2/3">
                    <SectionTag text={t.srv.tag} />
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">{t.srv.title}</h2>
                    <p className="text-[#F2F2F2]/60 text-lg font-medium">{t.srv.p}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {t.srv.items.map((srv, i) => {
                      const Icon = srv.icon
                      return (
                        <div key={i} className="bg-[#131926] border border-white/5 p-8 hover:border-[#05F2DB]/30 transition-colors group relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Icon className="w-32 h-32 text-white" />
                          </div>
                          <div className="w-12 h-12 bg-[#0B0F19] border border-white/10 flex items-center justify-center mb-8 relative z-10">
                            <Icon className="w-5 h-5 text-[#05F2DB]" />
                          </div>
                          <h3 className="text-xl font-black uppercase tracking-wide mb-3 relative z-10">{srv.title}</h3>
                          <p className="text-[#F2F2F2]/50 text-sm leading-relaxed relative z-10">{srv.desc}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </section>

              {/* Deployment Protocol (Process) */}
              <section id="process" className="py-24 px-6 border-y border-white/5 bg-[#131926]">
                <div className="max-w-7xl mx-auto">
                  <div className="mb-16 text-center">
                    <SectionTag text={t.process.tag} />
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter">{t.process.title}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-white/10" />
                    
                    {t.process.items.map((item, i) => (
                      <div key={i} className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-[#0B0F19] border border-white/10 flex items-center justify-center text-2xl font-mono font-bold text-[#05F2DB] mb-8 shadow-xl">
                          {item.num}
                        </div>
                        <h3 className="text-lg font-black uppercase mb-3">{item.title}</h3>
                        <p className="text-[#F2F2F2]/50 text-sm leading-relaxed max-w-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Deployments (Portfolio) */}
              <section id="portfolio" className="py-24 px-6 bg-[#0B0F19]">
                <div className="max-w-7xl mx-auto">
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                      <SectionTag text={t.portfolio.tag} />
                      <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">{t.portfolio.title}</h2>
                      <p className="text-[#F2F2F2]/60 text-lg font-medium">{t.portfolio.p}</p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 font-bold text-sm hover:text-[#05F2DB] transition-colors uppercase tracking-widest pb-2 border-b-2 border-white/10 hover:border-[#05F2DB]">
                      ALL DEPLOYMENTS <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {t.portfolio.items.map((project, i) => (
                      <div key={i} className="group cursor-pointer">
                        <div className="aspect-[4/3] border border-white/5 bg-[#131926] overflow-hidden relative mb-6">
                          <RebarWireframe type="card" />
                          <div className="absolute inset-0 bg-[#0B0F19]/50 group-hover:bg-transparent transition-colors duration-500" />
                          <div className="absolute top-4 right-4 bg-[#0B0F19] border border-[#05F2DB]/30 text-[#05F2DB] text-[10px] font-mono font-bold px-3 py-1.5 uppercase tracking-widest">
                            {project.metric}
                          </div>
                        </div>
                        <div className="text-[10px] font-mono font-bold text-[#05F2DB] mb-2 uppercase tracking-widest">{project.cat}</div>
                        <h3 className="text-xl font-black uppercase mb-2 group-hover:text-[#05F2DB] transition-colors">{project.title}</h3>
                        <p className="text-sm text-[#F2F2F2]/50">{project.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Technical Specifications (FAQ) */}
              <section id="faq" className="py-24 px-6 border-t border-white/5 bg-[#131926]">
                <div className="max-w-4xl mx-auto">
                  <div className="mb-16 text-center">
                    <SectionTag text={t.faq.tag} />
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter">{t.faq.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {t.faq.items.map((faq, i) => (
                      <div key={i} className="border border-white/5 bg-[#0B0F19] overflow-hidden">
                        <button 
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                        >
                          <span className="font-bold text-lg uppercase tracking-wide">{faq.q}</span>
                          <ChevronDown className={`w-5 h-5 text-[#05F2DB] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                        </button>
                        <motion.div 
                          initial={false}
                          animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 text-[#F2F2F2]/50 leading-relaxed text-sm">
                            {faq.a}
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Yield Calculator */}
              <section id="quote" className="py-24 px-6 bg-[#0B0F19] border-t border-white/5 relative overflow-hidden">
                {/* Background Tech Details */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-10 left-10 text-[200px] font-black text-transparent" style={{ WebkitTextStroke: '2px #05F2DB' }}>
                    YIELD
                  </div>
                </div>

                <div className="max-w-5xl mx-auto relative z-10">
                  <div className="bg-[#131926] border border-white/10 p-8 md:p-12 flex flex-col md:flex-row gap-12">
                    
                    <div className="flex-1">
                      <div className="mb-10">
                        <SectionTag text="Engineering" />
                        <h2 className="text-3xl font-black tracking-tighter mb-3 uppercase">{t.quote.title}</h2>
                        <p className="text-[#F2F2F2]/50 text-sm font-mono">{t.quote.p}</p>
                      </div>

                      <div className="space-y-10">
                        <div>
                          <div className="flex justify-between items-end mb-6">
                            <label className="text-xs font-mono font-bold text-[#05F2DB] uppercase tracking-widest">{t.quote.areaTitle}</label>
                            <span className="text-2xl font-black">{area.toLocaleString()}</span>
                          </div>
                          <input 
                            type="range" 
                            min={1000} 
                            max={50000} 
                            step={500}
                            value={area} 
                            onChange={(e) => setArea(Number(e.target.value))}
                            className="w-full h-1 bg-[#0B0F19] appearance-none cursor-pointer focus:outline-none accent-[#05F2DB]"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-mono font-bold text-[#05F2DB] mb-4 block uppercase tracking-widest">{t.quote.reqTitle}</label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {t.quote.reqOptions.map(opt => (
                              <button 
                                key={opt.id}
                                onClick={() => {
                                  setIsCalculating(true); 
                                  setTimeout(() => { setDepth(opt.id); setIsCalculating(false) }, 200)
                                }}
                                className={`p-4 border transition-colors text-xs font-bold uppercase tracking-wide text-center ${
                                  depth === opt.id 
                                  ? 'border-[#05F2DB] bg-[#05F2DB]/10 text-[#05F2DB]' 
                                  : 'border-white/10 bg-[#0B0F19] text-[#F2F2F2]/50 hover:border-white/30'
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-[320px] bg-[#0B0F19] border border-white/5 p-8 flex flex-col justify-center">
                      <h3 className="text-[10px] font-mono font-bold text-[#05F2DB] uppercase tracking-widest mb-6 flex items-center gap-2">
                        <Activity className="w-3 h-3" /> {t.quote.totalTitle}
                      </h3>
                      
                      <div className={`mb-6 transition-all duration-200 ${isCalculating ? 'opacity-30' : 'opacity-100'}`}>
                        <div className="text-5xl font-black tracking-tighter mb-1 text-[#F2F2F2]">
                          {getYield()}
                        </div>
                        <div className="text-xs font-bold text-[#F2F2F2]/40 uppercase tracking-widest">
                          Cubic Yards
                        </div>
                      </div>
                      
                      <p className="text-[#F2F2F2]/40 text-xs mb-8 font-mono leading-relaxed">
                        {t.quote.totalDesc}
                      </p>
                      
                      <button 
                        onClick={() => { window.scrollTo(0,0); setCurrentView('contact') }}
                        className="w-full bg-[#05F2DB] text-[#0B0F19] font-bold text-sm py-4 hover:bg-white active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 uppercase tracking-wide"
                      >
                        {t.quote.ctaBtn} <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {currentView === 'contact' && (
            <motion.div 
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-grow flex items-center bg-[#0B0F19] py-24 px-6 relative"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#131926_1px,transparent_1px),linear-gradient(to_bottom,#131926_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />
              
              <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                  <SectionTag text={t.contactPage.tag} />
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-[#F2F2F2] uppercase leading-[0.9]">
                    {t.contactPage.title}
                  </h2>
                  <p className="text-[#F2F2F2]/60 text-lg mb-12 max-w-md font-mono leading-relaxed">
                    {t.contactPage.desc}
                  </p>

                  <div className="space-y-6 text-sm font-mono font-bold text-[#05F2DB]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#131926] border border-white/10 flex items-center justify-center">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span className="text-lg tracking-widest">+1 (800) 555-SLAB</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#131926] border border-white/10 flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="text-lg tracking-widest">dispatch@slabworks.com</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#131926] border border-white/10 p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#05F2DB]/5 rounded-full blur-3xl" />
                  
                  <form className="space-y-6 relative z-10" onSubmit={(e) => { e.preventDefault(); setCurrentView('landing'); }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-mono font-bold text-[#05F2DB] uppercase tracking-widest mb-2">
                          {t.contactPage.form.fn}
                        </label>
                        <input type="text" className="w-full bg-[#0B0F19] border border-white/10 p-4 text-[#F2F2F2] focus:outline-none focus:border-[#05F2DB] transition-colors font-mono text-sm" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono font-bold text-[#05F2DB] uppercase tracking-widest mb-2">
                          {t.contactPage.form.ln}
                        </label>
                        <input type="text" className="w-full bg-[#0B0F19] border border-white/10 p-4 text-[#F2F2F2] focus:outline-none focus:border-[#05F2DB] transition-colors font-mono text-sm" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono font-bold text-[#05F2DB] uppercase tracking-widest mb-2">
                        {t.contactPage.form.email}
                      </label>
                      <input type="email" className="w-full bg-[#0B0F19] border border-white/10 p-4 text-[#F2F2F2] focus:outline-none focus:border-[#05F2DB] transition-colors font-mono text-sm" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono font-bold text-[#05F2DB] uppercase tracking-widest mb-2">
                        {t.contactPage.form.scope}
                      </label>
                      <textarea rows={5} className="w-full bg-[#0B0F19] border border-white/10 p-4 text-[#F2F2F2] focus:outline-none focus:border-[#05F2DB] transition-colors font-mono text-sm"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#05F2DB] text-[#0B0F19] font-black py-5 hover:bg-white transition-colors uppercase tracking-widest flex items-center justify-center gap-2">
                      <Cpu className="w-5 h-5" /> {t.contactPage.form.submit}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-sans font-black text-xl tracking-tighter flex items-center gap-2">
            <div className="w-6 h-6 bg-[#05F2DB] text-[#0B0F19] flex items-center justify-center">
              <Layers className="w-3 h-3" />
            </div>
            SLABWORKS.
          </div>
          
          <div className="text-[#F2F2F2]/40 text-xs font-mono text-center md:text-left">
            {t.footer.desc}
          </div>
          
          <div className="text-[#05F2DB] text-xs font-mono font-bold uppercase tracking-widest">
            {t.footer.tag}
          </div>
        </div>
      </footer>
    </div>
  )
}
