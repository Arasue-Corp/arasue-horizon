"use client"
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Globe, Mail, Link2, Code, PenTool, Zap, ChevronDown, CheckCircle2, Star } from 'lucide-react'
import { useState } from 'react'

const dict = {
  usa: {
    nav: { srv: 'Expertise', port: 'Work', proc: 'Approach', faq: 'FAQ', est: 'Project Est', book: 'Book Call' },
    hero: {
      status: 'Available for freelance opportunities in Q3',
      t1: 'I craft digital experiences that',
      t2: 'convert.',
      p: 'Hi, I\'m Alex. A senior frontend engineer & designer specializing in React, Next.js, and Neuromarketing principles. I help brands turn visitors into loyal customers.',
      btn1: 'Book a Call',
      btn2: 'View Résumé'
    },
    srv: {
      title: 'Core Capabilities',
      p: 'Bridging the gap between aesthetic design and high-performance engineering.',
      items: [
        { icon: PenTool, title: "UI/UX Design", desc: "Creating intuitive, conversion-optimized interfaces using Figma and design systems." },
        { icon: Code, title: "Frontend Engineering", desc: "Building scalable web apps with React, Next.js, TailwindCSS, and Framer Motion." },
        { icon: Zap, title: "Neuromarketing", desc: "Applying psychological principles to user journeys to maximize engagement and sales." }
      ]
    },
    portfolio: {
      title: 'Selected Work',
      p: 'A showcase of recent projects spanning fintech, e-commerce, and SaaS. Filter by discipline.',
      filters: ['All', 'Design', 'Engineering', 'Fullstack'],
      items: [
        { cat: 'Fullstack', title: 'Fintech Dashboard', desc: 'A high-performance trading interface handling real-time WebSockets.', year: '2025' },
        { cat: 'Design', title: 'E-commerce Redesign', desc: 'Increased conversion rate by 34% through a frictionless checkout flow.', year: '2024' },
        { cat: 'Engineering', title: 'AI SaaS Platform', desc: 'Built the entire frontend architecture using Next.js App Router.', year: '2024' },
        { cat: 'Fullstack', title: 'Arasue Horizon', desc: 'An enterprise-grade component library and workshop platform.', year: '2026' }
      ]
    },
    process: {
      title: 'The Framework',
      p: 'A systematic approach to delivering high-ROI digital products without the typical agency overhead.',
      steps: [
        { num: '01', title: 'Discovery', desc: 'We align on business goals, target audience, and key performance indicators.' },
        { num: '02', title: 'Strategy & UX', desc: 'Wireframing the user journey and applying neuromarketing principles.' },
        { num: '03', title: 'Development', desc: 'Writing clean, performant, and scalable code using modern web standards.' },
        { num: '04', title: 'Launch', desc: 'Rigorous QA, performance optimization, and seamless deployment.' }
      ]
    },
    testimonials: {
      title: 'Client Endorsements',
      items: [
        { name: 'David C.', role: 'Founder, TechStart', text: '"Alex is a rare breed. They don\'t just write code; they understand the business logic behind the product. The new platform they built helped us close our Seed round."' },
        { name: 'Sarah M.', role: 'VP of Marketing', text: '"Our bounce rate dropped by 40% after Alex redesigned our landing pages. Their understanding of user psychology is unmatched."' }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Do you work with agencies or just direct clients?', a: 'I work with both. I often act as a "fractional CTO" or lead engineer for agencies needing high-level React expertise, as well as working directly with founders.' },
        { q: 'What is your typical tech stack?', a: 'My weapon of choice is Next.js (React) with TailwindCSS and Framer Motion, deployed on Vercel. For backend, I use Supabase, Firebase, or Node.js.' },
        { q: 'Do you design and code?', a: 'Yes. I am a hybrid "Design Engineer". I can take a project from a blank Figma canvas all the way to a deployed, production-ready web application.' }
      ]
    },
    quote: {
      title: 'Project Estimator',
      p: 'Get a ballpark figure for your next project based on complexity and timeline.',
      areaTitle: 'Project Complexity',
      areaUnit: '',
      areaMin: 'Landing Page',
      areaMax: 'Complex Web App',
      reqTitle: 'Timeline Urgency',
      reqOptions: [
        { id: 'relaxed', label: 'Relaxed (2-3 Months)' },
        { id: 'standard', label: 'Standard (4-6 Weeks)' },
        { id: 'rush', label: 'Rush (2-3 Weeks)' }
      ],
      totalTitle: 'Estimated Investment',
      totalDesc: '*This is a non-binding preliminary estimate. Final pricing depends on specific feature requirements and scope.',
      ctaTitle: 'Ready to discuss details?',
      ctaBtn: 'Schedule Discovery Call'
    },
    footer: {
      desc: 'Engineering digital products that work as well as they look.',
      contact: 'Let\'s Connect',
      legal: 'Legal',
      rights: '© 2026 Alex AI. All rights reserved.',
      tag: 'Built with intent.'
    }
  },
  mex: {
    nav: { srv: 'Experiencia', port: 'Trabajo', proc: 'Enfoque', faq: 'FAQ', est: 'Estimador', book: 'Agendar' },
    hero: {
      status: 'Disponible para proyectos freelance en Q3',
      t1: 'Creo experiencias digitales que',
      t2: 'convierten.',
      p: 'Hola, soy Alex. Ingeniero frontend senior y diseñador especializado en React, Next.js y principios de Neuromarketing. Ayudo a marcas a convertir visitantes en clientes leales.',
      btn1: 'Agendar Llamada',
      btn2: 'Ver Currículum'
    },
    srv: {
      title: 'Capacidades Principales',
      p: 'Cerrando la brecha entre el diseño estético y la ingeniería de alto rendimiento.',
      items: [
        { icon: PenTool, title: "Diseño UI/UX", desc: "Creación de interfaces intuitivas y optimizadas para conversión usando Figma." },
        { icon: Code, title: "Ingeniería Frontend", desc: "Desarrollo de aplicaciones escalables con React, Next.js, TailwindCSS y Framer Motion." },
        { icon: Zap, title: "Neuromarketing", desc: "Aplicación de principios psicológicos al viaje del usuario para maximizar ventas." }
      ]
    },
    portfolio: {
      title: 'Trabajo Destacado',
      p: 'Una muestra de proyectos recientes que abarcan fintech, e-commerce y SaaS. Filtra por disciplina.',
      filters: ['Todos', 'Diseño', 'Ingenieria', 'Fullstack'],
      items: [
        { cat: 'Fullstack', title: 'Dashboard Fintech', desc: 'Una interfaz de trading de alto rendimiento que maneja WebSockets en tiempo real.', year: '2025' },
        { cat: 'Diseño', title: 'Rediseño E-commerce', desc: 'Aumentó la tasa de conversión en un 34% mediante un flujo de pago sin fricción.', year: '2024' },
        { cat: 'Ingenieria', title: 'Plataforma SaaS de IA', desc: 'Construí toda la arquitectura frontend usando Next.js App Router.', year: '2024' },
        { cat: 'Fullstack', title: 'Arasue Horizon', desc: 'Una biblioteca de componentes y plataforma de workshops de grado empresarial.', year: '2026' }
      ]
    },
    process: {
      title: 'El Framework',
      p: 'Un enfoque sistemático para entregar productos digitales de alto ROI sin los sobrecostos de una agencia típica.',
      steps: [
        { num: '01', title: 'Descubrimiento', desc: 'Nos alineamos en los objetivos comerciales, el público objetivo y los KPIs.' },
        { num: '02', title: 'Estrategia y UX', desc: 'Wireframes del viaje del usuario y aplicación de principios de neuromarketing.' },
        { num: '03', title: 'Desarrollo', desc: 'Escribiendo código limpio, rápido y escalable usando estándares web modernos.' },
        { num: '04', title: 'Lanzamiento', desc: 'QA riguroso, optimización de rendimiento y despliegue impecable.' }
      ]
    },
    testimonials: {
      title: 'Endosos de Clientes',
      items: [
        { name: 'David C.', role: 'Fundador, TechStart', text: '"Alex es una especie rara. No solo escriben código; entienden la lógica de negocio detrás del producto. La nueva plataforma nos ayudó a cerrar nuestra ronda Semilla."' },
        { name: 'Sarah M.', role: 'VP de Marketing', text: '"Nuestra tasa de rebote cayó un 40% después de que Alex rediseñó nuestras landing pages. Su comprensión de la psicología del usuario es inigualable."' }
      ]
    },
    faq: {
      title: 'Preguntas Frecuentes',
      items: [
        { q: '¿Trabajas con agencias o solo con clientes directos?', a: 'Trabajo con ambos. A menudo actúo como "CTO fraccional" o ingeniero líder para agencias que necesitan experiencia de alto nivel en React.' },
        { q: '¿Cuál es tu stack tecnológico típico?', a: 'Mi arma preferida es Next.js (React) con TailwindCSS y Framer Motion, desplegado en Vercel. Para backend, uso Supabase, Firebase o Node.js.' },
        { q: '¿Tú diseñas y programas?', a: 'Sí. Soy un "Ingeniero de Diseño" híbrido. Puedo llevar un proyecto desde un lienzo en blanco en Figma hasta una aplicación web lista para producción.' }
      ]
    },
    quote: {
      title: 'Estimador de Proyectos',
      p: 'Obtén una cifra aproximada para tu próximo proyecto basada en la complejidad y el cronograma.',
      areaTitle: 'Complejidad del Proyecto',
      areaUnit: '',
      areaMin: 'Landing Page',
      areaMax: 'Web App Compleja',
      reqTitle: 'Urgencia del Cronograma',
      reqOptions: [
        { id: 'relaxed', label: 'Relajado (2-3 Meses)' },
        { id: 'standard', label: 'Estándar (4-6 Semanas)' },
        { id: 'rush', label: 'Urgente (2-3 Semanas)' }
      ],
      totalTitle: 'Inversión Estimada',
      totalDesc: '*Esta es una estimación preliminar no vinculante. El precio final depende de los requisitos específicos de las funciones y el alcance.',
      ctaTitle: '¿Listo para discutir detalles?',
      ctaBtn: 'Agendar Llamada de Descubrimiento'
    },
    footer: {
      desc: 'Diseñando productos digitales que funcionan tan bien como se ven.',
      contact: 'Conectemos',
      legal: 'Legal',
      rights: '© 2026 Alex AI. Todos los derechos reservados.',
      tag: 'Construido con intención.'
    }
  }
}

export function WebPersonal() {
  const [region, setRegion] = useState<'usa' | 'mex'>('usa')
  const [complexity, setComplexity] = useState(2) // 1: Landing, 2: Multi-page, 3: App
  const [timeline, setTimeline] = useState('standard')
  const [isCalculating, setIsCalculating] = useState(false)
  const [filter, setFilter] = useState('All')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  
  const reduce = useReducedMotion()
  const t = dict[region]

  const toggleRegion = () => {
    setIsCalculating(true)
    setTimeout(() => {
      if (region === 'usa') {
        setRegion('mex')
        setFilter('Todos')
      } else {
        setRegion('usa')
        setFilter('All')
      }
      setIsCalculating(false)
    }, 300)
  }

  const handleTimelineChange = (val: string) => {
    setIsCalculating(true)
    setTimeout(() => {
      setTimeline(val)
      setIsCalculating(false)
    }, 200)
  }

  const getPrice = () => {
    let base = 0;
    if (complexity === 1) base = region === 'usa' ? 2500 : 45000;
    if (complexity === 2) base = region === 'usa' ? 6500 : 115000;
    if (complexity === 3) base = region === 'usa' ? 15000 : 250000;
    
    let multiplier = 1;
    if (timeline === 'relaxed') multiplier = 0.9;
    if (timeline === 'rush') multiplier = 1.5;
    
    const min = Math.round((base * multiplier) * 0.8);
    const max = Math.round((base * multiplier) * 1.2);
    
    return region === 'usa' ? `$${min.toLocaleString()} - $${max.toLocaleString()}` : `$${min.toLocaleString()} - $${max.toLocaleString()} MXN`
  }

  const filteredPortfolio = filter === 'All' || filter === 'Todos' 
    ? t.portfolio.items 
    : t.portfolio.items.filter(item => item.cat === filter || 
      (filter === 'Diseño' && item.cat === 'Design') || 
      (filter === 'Ingenieria' && item.cat === 'Engineering') || 
      (filter === 'Fullstack' && item.cat === 'Fullstack'))

  return (
    <div className="min-h-screen bg-[#050505] text-[#EDEDED] font-sans selection:bg-white selection:text-black">
      {/* Subtle Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      {/* Navigation */}
      <nav className="w-full border-b border-white/10 sticky top-0 bg-[#050505]/80 backdrop-blur-xl z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-lg tracking-tight">ALEX<span className="text-neutral-500">.AI</span></div>
          <div className="hidden lg:flex gap-8 font-medium text-xs text-neutral-400">
            <a href="#services" className="hover:text-white transition-colors">{t.nav.srv}</a>
            <a href="#portfolio" className="hover:text-white transition-colors">{t.nav.port}</a>
            <a href="#process" className="hover:text-white transition-colors">{t.nav.proc}</a>
            <a href="#quote" className="hover:text-white transition-colors">{t.nav.est}</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleRegion}
              className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-[10px] font-bold uppercase tracking-widest active:scale-[0.97]"
            >
              {region === 'usa' ? 'USA' : 'MEX'}
            </button>
            <a href="#quote" className="hidden sm:inline-block bg-white text-black px-4 py-1.5 rounded-full font-bold text-xs hover:bg-neutral-200 transition-colors active:scale-[0.97]">
              {t.nav.book}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono mb-12 text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              {t.hero.status}
            </div>

            <div className="w-20 h-20 rounded-full bg-white/10 mb-8 overflow-hidden border border-white/20">
              <img src="https://placehold.co/400x400/111/fff?text=Alex" alt="Profile" className="w-full h-full object-cover grayscale" />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[1.1]">
              {t.hero.t1} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-600">{t.hero.t2}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed max-w-2xl font-medium">
              {t.hero.p}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-neutral-200 transition-colors active:scale-95 flex items-center justify-center gap-2 text-sm shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                {t.hero.btn1} <ArrowUpRight className="w-4 h-4" />
              </a>
              <button className="px-8 py-4 rounded-xl font-bold border border-white/20 text-white hover:bg-white/5 transition-colors active:scale-95 flex items-center justify-center gap-2 text-sm">
                {t.hero.btn2}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-black tracking-tight mb-4">{t.srv.title}</h2>
            <p className="text-neutral-500">{t.srv.p}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.srv.items.map((srv, i) => {
              const Icon = srv.icon
              return (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{srv.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{srv.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* V2: Selected Work (Portfolio) */}
      <section id="portfolio" className="py-24 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-3xl font-black tracking-tight mb-4">{t.portfolio.title}</h2>
              <p className="text-neutral-500">{t.portfolio.p}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {t.portfolio.filters.map(f => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-full font-bold text-xs transition-colors ${filter === f ? 'bg-white text-black' : 'bg-white/5 text-neutral-400 hover:bg-white/10 border border-white/10'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {filteredPortfolio.map((project, i) => (
              <a href="#" key={i} className="group block">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold group-hover:text-neutral-400 transition-colors">{project.title}</h3>
                      <span className="px-2 py-0.5 rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-neutral-500">{project.cat}</span>
                    </div>
                    <p className="text-neutral-500 text-sm">{project.desc}</p>
                  </div>
                  <div className="flex items-center gap-4 text-neutral-600">
                    <span className="font-mono text-sm">{project.year}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                  </div>
                </div>
                <div className="w-full h-[1px] bg-white/10 mt-8 group-hover:bg-white/20 transition-colors"></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* V2: The Process */}
      <section id="process" className="py-24 px-6 border-t border-white/10 relative z-10 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-black tracking-tight mb-4">{t.process.title}</h2>
            <p className="text-neutral-500">{t.process.p}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {t.process.steps.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="font-mono text-neutral-600 text-lg mt-1">{step.num}</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2: Testimonials */}
      <section className="py-24 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black tracking-tight mb-16">{t.testimonials.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.testimonials.items.map((test, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl relative">
                <div className="absolute top-8 right-8 flex gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-neutral-500 fill-current" />)}
                </div>
                <p className="text-lg text-neutral-300 font-medium leading-relaxed mb-8 pr-12">
                  {test.text}
                </p>
                <div>
                  <h4 className="font-bold text-white text-sm">{test.name}</h4>
                  <p className="text-neutral-500 text-xs font-mono mt-1">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2: FAQ */}
      <section className="py-24 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black tracking-tight mb-12">{t.faq.title}</h2>
          <div className="space-y-4">
            {t.faq.items.map((item, i) => (
              <div key={i} className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-sm text-white pr-8">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-neutral-500 flex-shrink-0 transform transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="p-6 pt-0 text-neutral-400 text-sm leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator (Project Estimator) */}
      <section id="quote" className="py-24 px-6 border-t border-white/10 relative z-10 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0A0A0A] border border-white/10 rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
            
            <div className="flex-1 p-8 lg:p-12">
              <div className="mb-12">
                <h2 className="text-2xl font-black mb-2">{t.quote.title}</h2>
                <p className="text-neutral-500 text-sm">{t.quote.p}</p>
              </div>

              <div className="space-y-10">
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{t.quote.areaTitle}</label>
                  </div>
                  <input 
                    type="range" 
                    min={1} 
                    max={3} 
                    step={1}
                    value={complexity} 
                    onChange={(e) => setComplexity(Number(e.target.value))}
                    className="w-full accent-white h-1 bg-white/10 appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 mt-4 font-mono uppercase tracking-widest">
                    <span>{t.quote.areaMin}</span>
                    <span>{t.quote.areaMax}</span>
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 block mb-6">{t.quote.reqTitle}</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {t.quote.reqOptions.map(opt => (
                      <button 
                        key={opt.id}
                        onClick={() => handleTimelineChange(opt.id)}
                        className={`flex-1 py-3 px-4 rounded-xl border text-xs font-bold transition-all duration-200 active:scale-95 ${
                          timeline === opt.id 
                          ? 'border-white bg-white text-black' 
                          : 'border-white/10 text-neutral-400 hover:border-white/30'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[350px] bg-white text-black p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
              <h3 className="font-mono uppercase tracking-widest text-[10px] text-neutral-500 mb-6">{t.quote.totalTitle}</h3>
              
              <div className={`mb-6 transition-all duration-200 ${isCalculating ? 'blur-sm opacity-50' : 'blur-0 opacity-100'}`}>
                <div className="text-3xl lg:text-4xl font-black tracking-tighter mb-2">
                  {getPrice()}
                </div>
              </div>
              
              <p className="text-neutral-500 text-[10px] mb-8 pb-8 border-b border-black/10 leading-relaxed font-medium">
                {t.quote.totalDesc}
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-black text-white font-bold text-xs py-4 rounded-xl hover:bg-neutral-800 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2">
                  {t.quote.ctaBtn} <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="font-bold text-lg tracking-tight mb-4 text-white">ALEX<span className="text-neutral-500">.AI</span></div>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                {t.footer.desc}
              </p>
            </div>
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mb-6">{t.footer.contact}</h4>
              <ul className="space-y-4 text-sm font-medium text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">hello@alexai.dev</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter (X)</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mb-6">{t.footer.legal}</h4>
              <ul className="space-y-4 text-sm font-medium text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-widest text-neutral-600 uppercase">
            <p>{t.footer.rights}</p>
            <p className="text-white">{t.footer.tag}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
