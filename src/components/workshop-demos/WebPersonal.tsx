"use client"
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Code, PenTool, Zap, Heart, ArrowRight, Handshake, MapPin, Coffee, ArrowLeft } from 'lucide-react'
import { useState } from 'react'

const dict = {
  usa: {
    nav: { srv: 'My Focus', port: 'Work', est: 'Estimate', book: 'Say Hello' },
    hero: {
      status: 'Available for new opportunities',
      greeting: 'Hi, I\'m Alex.',
      t1: 'I craft digital experiences that',
      t2: 'feel human.',
      p: 'I\'m an independent Design Engineer bridging the gap between beautiful aesthetics and robust frontend architecture. I help founders bring their ideas to life.',
      btn1: 'Let\'s collaborate',
      btn2: 'View my work',
      bento: {
        location: { label: 'Based in', value: 'San Francisco, CA' },
        stack: { label: 'Primary Stack', value: 'React & Next.js' },
        coffee: { label: 'Powered by', value: 'Oat Lattes' }
      }
    },
    srv: {
      title: 'What I do best',
      p: 'I specialize in taking projects from an empty Figma canvas to a fully deployed application.',
      items: [
        { icon: PenTool, title: "UI/UX Design", desc: "Creating intuitive, accessible, and beautiful interfaces tailored to your users' needs." },
        { icon: Code, title: "Frontend Development", desc: "Writing clean, scalable code with React, Next.js, and Tailwind CSS." },
        { icon: Heart, title: "Digital Empathy", desc: "Focusing on micro-interactions and performance so your users feel valued." }
      ]
    },
    portfolio: {
      title: 'Selected Work',
      p: 'A collection of projects I\'ve poured my heart into recently.',
      filters: ['All', 'SaaS', 'E-commerce', 'Creative'],
      items: [
        { cat: 'SaaS', title: 'Aura Analytics', desc: 'A beautiful dashboard for data analysts.', year: '2025' },
        { cat: 'E-commerce', title: 'Lumina Store', desc: 'A bespoke shopping experience for a boutique brand.', year: '2024' },
        { cat: 'Creative', title: 'Studio Horizon', desc: 'A highly interactive portfolio for a design agency.', year: '2026' }
      ]
    },
    quote: {
      title: 'Let\'s talk about your project',
      p: 'Use this calculator to get a rough idea of what we could build together.',
      areaTitle: 'What are we building?',
      areaMin: 'Simple Landing Page',
      areaMax: 'Complex Web App',
      reqTitle: 'When do you need it?',
      reqOptions: [
        { id: 'relaxed', label: 'No rush (12 weeks)' },
        { id: 'standard', label: 'Standard (6 weeks)' },
        { id: 'rush', label: 'ASAP (3 weeks)' }
      ],
      totalTitle: 'Estimated Budget',
      totalDesc: 'This is just a starting point. Let\'s chat to refine the details and find what works for you.',
      ctaBtn: 'Start the conversation'
    },
    contact: {
      title: 'Get in touch',
      p: 'Have a specific project in mind? Fill out the form below and I\'ll get back to you within 24 hours.',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      messagePlaceholder: 'Tell me about your project...',
      btn: 'Send Message'
    },
    footer: {
      desc: 'Thanks for stopping by. Let\'s make something great together.',
      rights: '© 2026 Arasue Forge LLC.',
      tag: 'Crafted with care.'
    }
  },
  mex: {
    nav: { srv: 'Especialidad', port: 'Trabajo', est: 'Estimador', book: 'Saludar' },
    hero: {
      status: 'Disponible para nuevos proyectos',
      greeting: 'Hola, soy Alex.',
      t1: 'Creo experiencias digitales',
      t2: 'muy humanas.',
      p: 'Soy un Ingeniero de Diseño independiente. Cierro la brecha entre una estética hermosa y una arquitectura frontend sólida para dar vida a tus ideas.',
      btn1: 'Trabajemos juntos',
      btn2: 'Ver mi trabajo',
      bento: {
        location: { label: 'Ubicación', value: 'Ciudad de México' },
        stack: { label: 'Stack Principal', value: 'React & Next.js' },
        coffee: { label: 'Impulsado por', value: 'Café de Olla' }
      }
    },
    srv: {
      title: 'Lo que mejor hago',
      p: 'Me especializo en llevar proyectos desde un lienzo en blanco en Figma hasta una aplicación completamente desplegada.',
      items: [
        { icon: PenTool, title: "Diseño UI/UX", desc: "Creando interfaces intuitivas, accesibles y hermosas adaptadas a las necesidades de tus usuarios." },
        { icon: Code, title: "Desarrollo Frontend", desc: "Escribiendo código limpio y escalable con React, Next.js y Tailwind CSS." },
        { icon: Heart, title: "Empatía Digital", desc: "Enfocándome en microinteracciones y rendimiento para que tus usuarios se sientan valorados." }
      ]
    },
    portfolio: {
      title: 'Trabajo Destacado',
      p: 'Una colección de proyectos en los que he puesto el corazón recientemente.',
      filters: ['Todos', 'SaaS', 'E-commerce', 'Creativo'],
      items: [
        { cat: 'SaaS', title: 'Aura Analytics', desc: 'Un hermoso panel de control para analistas de datos.', year: '2025' },
        { cat: 'E-commerce', title: 'Lumina Store', desc: 'Una experiencia de compra a medida para una marca boutique.', year: '2024' },
        { cat: 'Creativo', title: 'Studio Horizon', desc: 'Un portafolio altamente interactivo para una agencia de diseño.', year: '2026' }
      ]
    },
    quote: {
      title: 'Hablemos de tu proyecto',
      p: 'Usa esta calculadora para tener una idea aproximada de lo que podríamos construir juntos.',
      areaTitle: '¿Qué vamos a construir?',
      areaMin: 'Landing Page Simple',
      areaMax: 'Web App Compleja',
      reqTitle: '¿Para cuándo lo necesitas?',
      reqOptions: [
        { id: 'relaxed', label: 'Sin prisa (12 sem)' },
        { id: 'standard', label: 'Estándar (6 sem)' },
        { id: 'rush', label: 'Lo antes posible (3 sem)' }
      ],
      totalTitle: 'Presupuesto Estimado',
      totalDesc: 'Esto es solo un punto de partida. Platiquemos para afinar los detalles y encontrar lo que funcione para ti.',
      ctaBtn: 'Iniciar conversación'
    },
    contact: {
      title: 'Ponte en contacto',
      p: '¿Tienes un proyecto específico en mente? Llena el formulario y te responderé en menos de 24 horas.',
      namePlaceholder: 'Tu Nombre',
      emailPlaceholder: 'Correo Electrónico',
      messagePlaceholder: 'Cuéntame sobre tu proyecto...',
      btn: 'Enviar Mensaje'
    },
    footer: {
      desc: 'Gracias por pasarte por aquí. Hagamos algo genial juntos.',
      rights: '© 2026 Arasue Forge LLC.',
      tag: 'Hecho con cariño.'
    }
  }
}

// Portfolio Abstract Wireframe Component
const PortfolioWireframe = ({ type }: { type: string }) => {
  return (
    <div className="absolute inset-0 bg-[#0A0A0A] p-6 flex flex-col gap-4 overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="w-full h-8 border border-white/10 rounded bg-[#111] flex items-center px-4 justify-between relative z-10">
        <div className="w-16 h-2 bg-white/20 rounded-full" />
        <div className="w-4 h-4 bg-white/5 rounded-full" />
      </div>
      
      <div className="flex-1 flex gap-4 relative z-10">
        {type === 'SaaS' ? (
          <>
            <div className="w-16 h-full border border-white/10 rounded bg-[#111] flex flex-col p-2 gap-2">
              <div className="w-full h-2 bg-white/20 rounded-full" />
              <div className="w-full h-2 bg-white/5 rounded-full" />
            </div>
            <div className="flex-1 h-full border border-white/10 rounded bg-[#111] p-4 flex items-end gap-2">
               {[40, 70, 45, 90].map((h, i) => (
                <div key={i} className="flex-1 bg-white/10 rounded-t-sm" style={{ height: `${h}%` }} />
              ))}
            </div>
          </>
        ) : (
          <div className="flex-1 grid grid-cols-2 gap-4">
             {[1, 2, 3, 4].map(i => (
               <div key={i} className="w-full h-full border border-white/10 rounded bg-[#111]" />
             ))}
          </div>
        )}
      </div>
    </div>
  )
}

export function WebPersonal() {
  const [region, setRegion] = useState<'usa' | 'mex'>('usa')
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home')
  const [complexity, setComplexity] = useState(2)
  const [timeline, setTimeline] = useState('standard')
  const [isCalculating, setIsCalculating] = useState(false)
  const [filter, setFilter] = useState('All')
  
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
    if (complexity === 2) base = region === 'usa' ? 6500 : 120000;
    if (complexity === 3) base = region === 'usa' ? 15000 : 280000;
    
    let multiplier = 1;
    if (timeline === 'relaxed') multiplier = 0.9;
    if (timeline === 'rush') multiplier = 1.5;
    
    const min = Math.round((base * multiplier) * 0.9);
    const max = Math.round((base * multiplier) * 1.1);
    
    return region === 'usa' ? `$${min.toLocaleString()} - $${max.toLocaleString()}` : `$${min.toLocaleString()} - $${max.toLocaleString()} MXN`
  }

  const filteredPortfolio = filter === 'All' || filter === 'Todos' 
    ? t.portfolio.items 
    : t.portfolio.items.filter(item => item.cat === filter || 
      (filter === 'Creativo' && item.cat === 'Creative'))

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#FAFAFA] font-sans selection:bg-orange-500/30 selection:text-white">
      
      {/* Friendly Dark Navigation */}
      <nav className="w-full border-b border-white/5 sticky top-0 bg-[#0A0A0B]/80 backdrop-blur-xl z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div 
            className="font-bold text-lg tracking-tight flex items-center gap-2 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-6 h-6 rounded-full overflow-hidden bg-white/10">
              <div className="relative w-full h-full"><Image src="https://placehold.co/100x100/333/fff?text=AR" alt="Alex Rivera" fill className="object-cover" /></div>
            </div>
            Alex Rivera.
          </div>
          
          {currentPage === 'home' && (
            <div className="hidden lg:flex gap-8 font-medium text-sm text-white/60">
              <a href="#services" className="hover:text-white transition-colors">{t.nav.srv}</a>
              <a href="#portfolio" className="hover:text-white transition-colors">{t.nav.port}</a>
              <a href="#quote" className="hover:text-white transition-colors">{t.nav.est}</a>
            </div>
          )}

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleRegion}
              className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-white/50 hover:text-white hover:bg-white/5 transition-colors text-xs font-bold uppercase tracking-widest"
            >
              {region === 'usa' ? 'US' : 'MX'}
            </button>
            {currentPage === 'home' && (
              <button 
                onClick={() => setCurrentPage('contact')}
                className="hidden sm:inline-block bg-white text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-neutral-200 transition-colors"
              >
                {t.nav.book}
              </button>
            )}
          </div>
        </div>
      </nav>

      {currentPage === 'home' ? (
        <>
          {/* Hero Section */}
          <section className="pt-24 pb-20 px-6 relative z-10 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
              <motion.div 
                initial={reduce ? false : { opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-xs font-medium mb-8 text-orange-200">
                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                  {t.hero.status}
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1] text-white">
                  <span className="text-white/50 block mb-2 font-medium text-2xl md:text-3xl tracking-normal">{t.hero.greeting}</span>
                  {t.hero.t1} <br className="hidden md:block" />
                  <span className="text-orange-400">{t.hero.t2}</span>
                </h1>
                
                <p className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed max-w-xl font-medium">
                  {t.hero.p}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setCurrentPage('contact')}
                    className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    {t.hero.btn1} <ArrowRight className="w-4 h-4" />
                  </button>
                  <a href="#portfolio" className="px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors flex items-center justify-center gap-2 text-sm">
                    {t.hero.btn2}
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={reduce ? false : { opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full md:w-[320px] flex flex-col gap-4"
              >
                <div className="bg-white/5 border border-white/10 rounded-3xl p-2 aspect-square relative overflow-hidden group">
                  <div className="relative w-full h-full"><Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" alt="Alex Rivera" fill className="object-cover rounded-[1.25rem] grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" /></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-2">
                    <MapPin className="w-5 h-5 text-orange-400" />
                    <div>
                      <div className="text-[10px] text-white/40 uppercase tracking-wider font-bold mb-0.5">{t.hero.bento.location.label}</div>
                      <div className="text-sm font-semibold">{t.hero.bento.location.value}</div>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-2">
                    <Coffee className="w-5 h-5 text-orange-400" />
                    <div>
                      <div className="text-[10px] text-white/40 uppercase tracking-wider font-bold mb-0.5">{t.hero.bento.coffee.label}</div>
                      <div className="text-sm font-semibold">{t.hero.bento.coffee.value}</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                   <div>
                      <div className="text-[10px] text-white/40 uppercase tracking-wider font-bold mb-0.5">{t.hero.bento.stack.label}</div>
                      <div className="text-sm font-semibold">{t.hero.bento.stack.value}</div>
                   </div>
                   <Code className="w-5 h-5 text-orange-400 opacity-50" />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Expertise Section */}
          <section id="services" className="py-24 px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-black tracking-tight mb-4">{t.srv.title}</h2>
                <p className="text-white/60 max-w-xl text-lg">{t.srv.p}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.srv.items.map((srv, i) => {
                  const Icon = srv.icon
                  return (
                    <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                        <Icon className="w-5 h-5 text-white/80 group-hover:text-orange-400 transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">{srv.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{srv.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section id="portfolio" className="py-24 px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                <div>
                  <h2 className="text-3xl font-black tracking-tight mb-4">{t.portfolio.title}</h2>
                  <p className="text-white/60 max-w-xl text-lg">{t.portfolio.p}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.portfolio.filters.map(f => (
                    <button 
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${filter === f ? 'bg-white text-black' : 'bg-white/5 text-white/60 hover:text-white border border-transparent hover:border-white/10'}`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPortfolio.map((project, i) => (
                  <div key={i} className="group block relative aspect-[4/3] rounded-3xl border border-white/10 bg-[#111] overflow-hidden">
                    <PortfolioWireframe type={project.cat} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-white/90 border border-white/20">
                            {project.cat}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{project.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Estimator Section */}
          <section id="quote" className="py-24 px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-12">
                <div className="flex-1">
                  <div className="mb-10">
                    <h2 className="text-2xl font-black mb-3 flex items-center gap-3">
                      <Handshake className="w-7 h-7 text-orange-400" />
                      {t.quote.title}
                    </h2>
                    <p className="text-white/60 text-base">{t.quote.p}</p>
                  </div>

                  <div className="space-y-10">
                    <div>
                      <label className="text-sm font-semibold text-white mb-4 block">{t.quote.areaTitle}</label>
                      <input 
                        type="range" 
                        min={1} 
                        max={3} 
                        step={1}
                        value={complexity} 
                        onChange={(e) => setComplexity(Number(e.target.value))}
                        className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                      />
                      <div className="flex justify-between text-xs text-white/40 mt-4 font-medium">
                        <span>{t.quote.areaMin}</span>
                        <span>{t.quote.areaMax}</span>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-white mb-4 block">{t.quote.reqTitle}</label>
                      <div className="flex flex-col gap-3">
                        {t.quote.reqOptions.map(opt => (
                          <button 
                            key={opt.id}
                            onClick={() => handleTimelineChange(opt.id)}
                            className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-200 text-sm font-medium ${
                              timeline === opt.id 
                              ? 'border-orange-500/50 bg-orange-500/10 text-white' 
                              : 'border-white/10 bg-black/20 text-white/60 hover:border-white/30 hover:text-white'
                            }`}
                          >
                            {opt.label}
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${timeline === opt.id ? 'border-orange-400' : 'border-white/20'}`}>
                              {timeline === opt.id && <div className="w-2.5 h-2.5 rounded-full bg-orange-400" />}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:w-[320px] bg-black/40 rounded-[2rem] p-8 border border-white/5 flex flex-col justify-center">
                  <h3 className="text-xs font-semibold text-white/50 mb-6">{t.quote.totalTitle}</h3>
                  <div className={`mb-6 transition-all duration-300 ${isCalculating ? 'blur-sm opacity-50 scale-95' : 'blur-0 opacity-100 scale-100'}`}>
                    <div className="text-4xl font-black tracking-tight mb-2 text-white">
                      {getPrice()}
                    </div>
                  </div>
                  <p className="text-white/50 text-sm mb-8 pb-8 border-b border-white/10 leading-relaxed">
                    {t.quote.totalDesc}
                  </p>
                  <button 
                    onClick={() => setCurrentPage('contact')}
                    className="w-full bg-white text-black font-bold text-sm py-4 rounded-full hover:bg-neutral-200 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {t.quote.ctaBtn} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Isolated Contact Page */
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="pt-24 pb-32 px-6 relative z-10 flex flex-col items-center justify-center min-h-[80vh]"
        >
          <div className="w-full max-w-2xl">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">{region === 'usa' ? 'Back to Portfolio' : 'Volver al Portafolio'}</span>
            </button>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">{t.contact.title}</h1>
              <p className="text-white/60 text-lg max-w-md mx-auto">{t.contact.p}</p>
            </div>
            
            <form className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <input 
                    type="text" 
                    placeholder={t.contact.namePlaceholder} 
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <input 
                    type="email" 
                    placeholder={t.contact.emailPlaceholder} 
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <textarea 
                  placeholder={t.contact.messagePlaceholder} 
                  rows={6}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-orange-500 text-white font-bold text-sm py-4 rounded-xl hover:bg-orange-600 active:scale-95 transition-all duration-200 mt-2">
                {t.contact.btn}
              </button>
            </form>
          </div>
        </motion.section>
      )}

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full overflow-hidden grayscale opacity-70">
                <div className="relative w-full h-full"><Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Alex Rivera" fill className="object-cover" /></div>
              </div>
              <div>
                <div className="font-bold text-sm text-white">Alex Rivera</div>
                <div className="text-xs text-white/50">{t.footer.rights}</div>
              </div>
            </div>
            <div className="text-xs text-white/50 flex items-center gap-2">
               <Heart className="w-3 h-3 text-orange-400" />
              {t.footer.tag}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
