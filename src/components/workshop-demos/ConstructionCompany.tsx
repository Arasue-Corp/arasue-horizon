"use client"
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Building2, HardHat, ShieldCheck, FileText, ChevronRight, Star, ChevronDown, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

const dict = {
  usa: {
    nav: { srv: 'Capabilities', port: 'Projects', proc: 'Approach', faq: 'FAQ', est: 'Estimator', book: 'Contact Sales' },
    hero: { 
      t1: 'Build with Certainty.', 
      p: 'General contracting and construction management for commercial, industrial, and civic infrastructure.',
      btn1: 'Start a Project',
      btn2: 'Our Portfolio'
    },
    trust: 'Trusted by Municipalities and Enterprises',
    srv: {
      title: 'Core Competencies',
      p: 'We manage complexity so you do not have to. End-to-end execution with uncompromising safety standards.',
      items: [
        { icon: Building2, title: "Commercial Construction", desc: "Ground-up builds for retail, office spaces, and multi-family residential complexes." },
        { icon: ShieldCheck, title: "Construction Management", desc: "Acting as your principal agent to oversee bidding, scheduling, and sub-contractor execution." },
        { icon: HardHat, title: "Design-Build", desc: "Unified workflow from architectural conception to final structural handover." }
      ]
    },
    portfolio: {
      title: 'Featured Infrastructure',
      p: 'Delivered on time, under budget, and built to the highest standard. Filter by classification.',
      filters: ['All', 'Office', 'Warehouse', 'Healthcare'],
      items: [
        { cat: 'Office', title: 'Nexus Corporate Tower', desc: 'A 200,000 sq ft class-A office building completed 3 weeks ahead of schedule.', img: 'https://placehold.co/800x600/1E293B/ffffff?text=Corporate+Tower' },
        { cat: 'Healthcare', title: 'City General Expansion', desc: 'Surgical wing addition requiring extreme vibration and dust mitigation protocols.', img: 'https://placehold.co/800x600/0F172A/ffffff?text=Hospital+Wing' },
        { cat: 'Warehouse', title: 'Amazon Fulfillment Center', desc: 'Massive 500,000 sq ft logistics hub with specialized reinforced flooring.', img: 'https://placehold.co/800x600/334155/ffffff?text=Logistics+Hub' },
        { cat: 'Office', title: 'Silicon Park Campus', desc: 'Multi-building tech campus prioritizing LEED Platinum certification.', img: 'https://placehold.co/800x600/475569/ffffff?text=Tech+Campus' }
      ]
    },
    process: {
      title: 'Our Approach',
      p: 'A systematic methodology designed to mitigate risk and eliminate schedule overruns.',
      steps: [
        { num: '01', title: 'Pre-Construction', desc: 'Feasibility studies, aggressive value engineering, and precise initial budgeting.' },
        { num: '02', title: 'Procurement', desc: 'Leveraging our network to secure materials and lock in sub-contractors early.' },
        { num: '03', title: 'Execution', desc: 'Rigorous daily site management, safety compliance, and timeline enforcement.' },
        { num: '04', title: 'Handover', desc: 'Comprehensive punch-list completion and smooth transition to facility management.' }
      ]
    },
    testimonials: {
      title: 'Client Endorsements',
      items: [
        { name: 'Marcus T.', role: 'VP of Real Estate, TechCorp', text: '"Apex Construct is the only GC I trust with a $50M budget. They caught a structural flaw in the architectural plans during pre-con that saved us months of rework. Exceptional foresight."' },
        { name: 'Elena G.', role: 'Hospital Administrator', text: '"Working in an active healthcare environment is notoriously difficult. Apex managed the entire expansion with zero disruption to our ER. Total professionals."' }
      ]
    },
    faq: {
      title: 'Frequent Inquiries',
      items: [
        { q: 'How do you handle supply chain delays?', a: 'We utilize an aggressive early procurement strategy. By ordering long-lead items (like HVAC units and structural steel) during the design phase, we mitigate 90% of supply chain risks.' },
        { q: 'Do you offer a guaranteed maximum price (GMP)?', a: 'Yes. For our Construction Management at Risk (CMAR) delivery method, we establish a GMP early in the process to protect your capital investment.' },
        { q: 'What is your safety record?', a: 'Our Experience Modification Rate (EMR) is consistently below 0.75, which ranks us in the top tier of national commercial contractors.' }
      ]
    },
    quote: {
      title: 'Commercial Estimator',
      p: 'Generate a preliminary budget range based on square footage and build classification.',
      areaTitle: 'Gross Building Area',
      areaUnit: 'sq ft',
      areaMin: '10,000 sq ft',
      areaMax: '100,000+ sq ft',
      reqTitle: 'Build Classification',
      reqOptions: [
        { id: 'warehouse', label: 'Industrial / Warehouse' },
        { id: 'office', label: 'Commercial Office' },
        { id: 'healthcare', label: 'Healthcare / Lab' }
      ],
      totalTitle: 'Budget Range (Estimative)',
      totalDesc: '*This is a Class 5 estimate (Order of Magnitude) for feasibility analysis only.',
      ctaTitle: 'Request Formal Bid',
      ctaBtn: 'Submit to Estimating'
    },
    footer: {
      desc: 'Building the infrastructure of tomorrow with unyielding integrity today.',
      contact: 'Headquarters',
      legal: 'Compliance & Legal',
      rights: '© 2026 Arasue Forge LLC. All rights reserved.',
      tag: 'Build with Certainty.'
    }
  },
  mex: {
    nav: { srv: 'Capacidades', port: 'Proyectos', proc: 'Metodología', faq: 'FAQ', est: 'Estimador', book: 'Contactar Ventas' },
    hero: { 
      t1: 'Construye con Certeza.', 
      p: 'Contratación general y gestión de construcción para infraestructura comercial, industrial y civil.',
      btn1: 'Iniciar Proyecto',
      btn2: 'Nuestro Portafolio'
    },
    trust: 'Respaldado por Municipios y Empresas',
    srv: {
      title: 'Competencias Principales',
      p: 'Manejamos la complejidad para que tú no tengas que hacerlo. Ejecución de principio a fin con estándares de seguridad intransigentes.',
      items: [
        { icon: Building2, title: "Construcción Comercial", desc: "Construcción desde cero para comercios, oficinas y complejos residenciales multifamiliares." },
        { icon: ShieldCheck, title: "Gestión de Construcción", desc: "Actuamos como tu agente principal para supervisar licitaciones, cronogramas y subcontratistas." },
        { icon: HardHat, title: "Diseño y Construcción", desc: "Flujo de trabajo unificado desde la concepción arquitectónica hasta la entrega estructural final." }
      ]
    },
    portfolio: {
      title: 'Infraestructura Destacada',
      p: 'Entregado a tiempo, bajo presupuesto y construido al más alto estándar. Filtra por clasificación.',
      filters: ['Todos', 'Oficina', 'Almacen', 'Salud'],
      items: [
        { cat: 'Oficina', title: 'Torre Corporativa Nexus', desc: 'Edificio de oficinas clase A de 20,000 m² completado 3 semanas antes de lo programado.', img: 'https://placehold.co/800x600/1E293B/ffffff?text=Torre+Corporativa' },
        { cat: 'Salud', title: 'Ampliación Hospital General', desc: 'Ala quirúrgica que requirió protocolos extremos de mitigación de polvo y vibraciones.', img: 'https://placehold.co/800x600/0F172A/ffffff?text=Ala+de+Hospital' },
        { cat: 'Almacen', title: 'Centro de Distribución Logística', desc: 'Gigantesco hub logístico de 50,000 m² con pisos reforzados especializados.', img: 'https://placehold.co/800x600/334155/ffffff?text=Centro+Logistico' },
        { cat: 'Oficina', title: 'Campus Tecnológico', desc: 'Campus multi-edificio priorizando certificación LEED Platinum.', img: 'https://placehold.co/800x600/475569/ffffff?text=Campus+Tecnologico' }
      ]
    },
    process: {
      title: 'Nuestra Metodología',
      p: 'Una metodología sistemática diseñada para mitigar riesgos y eliminar excesos en el cronograma.',
      steps: [
        { num: '01', title: 'Pre-Construcción', desc: 'Estudios de viabilidad, ingeniería de valor agresiva y presupuestación inicial precisa.' },
        { num: '02', title: 'Adquisiciones', desc: 'Aprovechamos nuestra red para asegurar materiales y subcontratistas tempranamente.' },
        { num: '03', title: 'Ejecución', desc: 'Gestión diaria rigurosa del sitio, cumplimiento de seguridad y aplicación del cronograma.' },
        { num: '04', title: 'Entrega', desc: 'Resolución exhaustiva de detalles y transición fluida a la gestión de las instalaciones.' }
      ]
    },
    testimonials: {
      title: 'Respaldo de Clientes',
      items: [
        { name: 'Marcus T.', role: 'VP de Bienes Raíces, TechCorp', text: '"Apex Construct es el único contratista general en el que confío con un presupuesto de $50M. Detectaron un fallo estructural en los planos durante la pre-construcción que nos ahorró meses de retrabajo."' },
        { name: 'Elena G.', role: 'Administradora de Hospital', text: '"Trabajar en un entorno de salud activo es notoriamente difícil. Apex manejó toda la expansión con cero interrupciones en nuestra sala de emergencias. Profesionales totales."' }
      ]
    },
    faq: {
      title: 'Consultas Frecuentes',
      items: [
        { q: '¿Cómo manejan los retrasos en la cadena de suministro?', a: 'Utilizamos una estrategia agresiva de adquisiciones tempranas. Al ordenar artículos de largo tiempo de entrega durante la fase de diseño, mitigamos el 90% de los riesgos.' },
        { q: '¿Ofrecen un Precio Máximo Garantizado (GMP)?', a: 'Sí. Para nuestro método de entrega de Gestión de Construcción en Riesgo (CMAR), establecemos un GMP temprano en el proceso para proteger tu inversión.' },
        { q: '¿Cuál es su historial de seguridad?', a: 'Nuestra Tasa de Modificación de Experiencia (EMR) es consistentemente inferior a 0.75, lo que nos ubica en el nivel superior de contratistas comerciales.' }
      ]
    },
    quote: {
      title: 'Estimador Comercial',
      p: 'Genera un rango de presupuesto preliminar basado en metros cuadrados y clasificación de construcción.',
      areaTitle: 'Área Bruta de Construcción',
      areaUnit: 'm²',
      areaMin: '1,000 m²',
      areaMax: '10,000+ m²',
      reqTitle: 'Clasificación de Construcción',
      reqOptions: [
        { id: 'warehouse', label: 'Industrial / Almacén' },
        { id: 'office', label: 'Oficina Comercial' },
        { id: 'healthcare', label: 'Salud / Laboratorio' }
      ],
      totalTitle: 'Rango de Presupuesto',
      totalDesc: '*Esta es una estimación Clase 5 (Orden de Magnitud) solo para análisis de viabilidad.',
      ctaTitle: 'Solicitar Oferta Formal',
      ctaBtn: 'Enviar a Estimaciones'
    },
    footer: {
      desc: 'Construyendo la infraestructura del mañana con integridad inquebrantable hoy.',
      contact: 'Sede Principal',
      legal: 'Cumplimiento y Legal',
      rights: '© 2026 Arasue Forge LLC. Todos los derechos reservados.',
      tag: 'Construye con Certeza.'
    }
  }
}

export function ConstructionCompany() {
  const [region, setRegion] = useState<'usa' | 'mex'>('usa')
  const [areaSize, setAreaSize] = useState(20000) 
  const [buildType, setBuildType] = useState('office')
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
        setAreaSize(Math.round(areaSize / 10.764))
        setFilter('Todos')
      } else {
        setRegion('usa')
        setAreaSize(Math.round(areaSize * 10.764))
        setFilter('All')
      }
      setIsCalculating(false)
    }, 300)
  }

  const handleBuildChange = (val: string) => {
    setIsCalculating(true)
    setTimeout(() => {
      setBuildType(val)
      setIsCalculating(false)
    }, 200)
  }

  const getPriceRange = () => {
    let baseSqFt = 200;
    if (buildType === 'warehouse') baseSqFt = 80;
    if (buildType === 'healthcare') baseSqFt = 450;
    
    let totalInUSD = 0;
    if (region === 'usa') {
      totalInUSD = areaSize * baseSqFt;
    } else {
      const equivalentSqFt = areaSize * 10.764;
      totalInUSD = equivalentSqFt * baseSqFt;
    }
    
    const min = Math.round(totalInUSD * 0.85);
    const max = Math.round(totalInUSD * 1.15);
    
    const format = (num: number) => {
      if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`;
      return `$${(num / 1000).toFixed(0)}k`;
    }
    
    return `${format(min)} - ${format(max)}`;
  }

  const filteredPortfolio = filter === 'All' || filter === 'Todos' 
    ? t.portfolio.items 
    : t.portfolio.items.filter(item => item.cat === filter || (filter === 'Almacen' && item.cat === 'Almacen'))

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#FF5A00] selection:text-white">
      {/* Navigation - Trust/B2B Slate & Orange */}
      <nav className="w-full bg-white border-b border-[#E2E8F0] sticky top-0 z-40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-bold text-2xl tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FF5A00] rounded-sm flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            APEX<span className="font-light">CONSTRUCT</span>
          </div>
          <div className="hidden lg:flex gap-8 font-semibold text-sm text-[#475569]">
            <a href="#services" className="hover:text-[#FF5A00] transition-colors duration-200">{t.nav.srv}</a>
            <a href="#portfolio" className="hover:text-[#FF5A00] transition-colors duration-200">{t.nav.port}</a>
            <a href="#process" className="hover:text-[#FF5A00] transition-colors duration-200">{t.nav.proc}</a>
            <a href="#faq" className="hover:text-[#FF5A00] transition-colors duration-200">{t.nav.faq}</a>
            <a href="#quote" className="hover:text-[#FF5A00] transition-colors duration-200">{t.nav.est}</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleRegion}
              className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0] transition-colors text-xs font-bold active:scale-[0.97]"
            >
              {region === 'usa' ? 'USA' : 'MEX'}
            </button>
            <a href="#quote" className="hidden sm:inline-block bg-[#FF5A00] text-white px-6 py-2.5 rounded font-bold hover:bg-[#E04F00] transition-all duration-200 active:scale-[0.97]">
              {t.nav.book}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="inline-block px-3 py-1 bg-[#1E293B] text-[#FF5A00] font-bold text-xs tracking-widest mb-6 rounded">
              COMMERCIAL CONTRACTOR
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              {t.hero.t1}
            </h1>
            <p className="text-lg md:text-xl text-[#94A3B8] mb-10 max-w-lg leading-relaxed">
              {t.hero.p}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="bg-[#FF5A00] text-white px-8 py-4 rounded font-bold text-lg hover:bg-[#E04F00] transition-all duration-200 active:scale-[0.97] flex items-center justify-center gap-2">
                {t.hero.btn1} <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#portfolio" className="bg-[#1E293B] text-white px-8 py-4 rounded font-bold text-lg hover:bg-[#334155] transition-all duration-200 active:scale-[0.97] text-center">
                {t.hero.btn2}
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] rounded bg-[#1E293B] overflow-hidden shadow-2xl border-4 border-[#1E293B]">
              <img src="https://placehold.co/800x1000/1e293b/ffffff?text=Construction+Site" alt="Site" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4 tracking-tight">{t.srv.title}</h2>
            <p className="text-lg text-[#64748B]">{t.srv.p}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.srv.items.map((srv, i) => {
              const Icon = srv.icon
              return (
                <div key={i} className="p-10 rounded-2xl border border-[#E2E8F0] hover:border-[#FF5A00] transition-colors duration-300 group cursor-pointer bg-[#F8FAFC]">
                  <div className="w-14 h-14 bg-white rounded-xl border border-[#E2E8F0] flex items-center justify-center mb-8 group-hover:bg-[#FF5A00] group-hover:border-[#FF5A00] transition-colors shadow-sm">
                    <Icon className="w-6 h-6 text-[#0F172A] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#0F172A]">{srv.title}</h3>
                  <p className="text-[#64748B] leading-relaxed">{srv.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* V2: Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-[#0F172A] text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">{t.portfolio.title}</h2>
              <p className="text-lg text-[#94A3B8]">{t.portfolio.p}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {t.portfolio.filters.map(f => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2.5 rounded-lg font-bold text-sm transition-colors ${filter === f ? 'bg-[#FF5A00] text-white' : 'bg-[#1E293B] text-[#94A3B8] hover:bg-[#334155]'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPortfolio.map((item, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#1E293B]">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover mix-blend-luminosity opacity-70 group-hover:opacity-100 group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700 ease-out" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent flex flex-col justify-end p-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#FF5A00] font-bold text-sm tracking-widest uppercase mb-3 block">{item.cat}</span>
                  <h3 className="text-3xl font-bold mb-3">{item.title}</h3>
                  <p className="text-[#94A3B8] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2: The Process */}
      <section id="process" className="py-24 px-6 bg-white border-b border-[#E2E8F0]">
        <div className="container mx-auto">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4 tracking-tight">{t.process.title}</h2>
            <p className="text-lg text-[#64748B]">{t.process.p}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {t.process.steps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="hidden md:block absolute top-6 left-[60%] right-[-40%] h-px bg-[#E2E8F0]"></div>
                <div className="w-12 h-12 rounded-full bg-[#F1F5F9] border-2 border-[#E2E8F0] flex items-center justify-center font-bold text-[#FF5A00] mb-6 relative z-10 group-hover:border-[#FF5A00] group-hover:bg-[#FFF5F0] transition-colors">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{step.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2: Testimonials & Social Proof */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-16 text-center tracking-tight">{t.testimonials.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {t.testimonials.items.map((test, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl border border-[#E2E8F0] shadow-sm relative">
                <div className="absolute top-8 right-8 text-[#FF5A00] opacity-20">
                  <Star className="w-12 h-12 fill-current" />
                </div>
                <p className="text-xl text-[#0F172A] font-medium leading-relaxed italic mb-8 relative z-10">
                  {test.text}
                </p>
                <div>
                  <h4 className="font-bold text-[#0F172A]">{test.name}</h4>
                  <p className="text-[#64748B] text-sm font-semibold">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2: FAQ */}
      <section id="faq" className="py-24 px-6 bg-white border-y border-[#E2E8F0]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-12 text-center tracking-tight">{t.faq.title}</h2>
          <div className="space-y-4">
            {t.faq.items.map((item, i) => (
              <div key={i} className="border border-[#E2E8F0] rounded-xl bg-[#F8FAFC] overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F1F5F9] transition-colors"
                >
                  <span className="font-bold text-[#0F172A] text-lg pr-8">{item.q}</span>
                  <ChevronDown className={`w-6 h-6 text-[#FF5A00] flex-shrink-0 transform transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="p-6 pt-0 text-[#64748B] leading-relaxed font-medium bg-[#F1F5F9]">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="quote" className="py-24 px-6 bg-[#F1F5F9]">
        <div className="container mx-auto">
          <div className="bg-white rounded-3xl shadow-lg border border-[#E2E8F0] overflow-hidden flex flex-col xl:flex-row">
            
            <div className="flex-1 p-10 lg:p-16">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 tracking-tight">{t.quote.title}</h2>
                <p className="text-[#64748B] text-lg">{t.quote.p}</p>
              </div>

              <div className="space-y-12">
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="font-bold text-[#0F172A]">{t.quote.areaTitle}</label>
                    <span className="font-bold text-[#FF5A00] text-xl">{areaSize.toLocaleString()} {t.quote.areaUnit}</span>
                  </div>
                  <input 
                    type="range" 
                    min={region === 'usa' ? 10000 : 1000} 
                    max={region === 'usa' ? 200000 : 20000} 
                    step={region === 'usa' ? 5000 : 500}
                    value={areaSize} 
                    onChange={(e) => setAreaSize(Number(e.target.value))}
                    className="w-full accent-[#FF5A00] h-2 bg-[#E2E8F0] rounded appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-[#94A3B8] mt-4 font-semibold">
                    <span>{t.quote.areaMin}</span>
                    <span>{t.quote.areaMax}</span>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-[#0F172A] block mb-6">{t.quote.reqTitle}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {t.quote.reqOptions.map(opt => (
                      <button 
                        key={opt.id}
                        onClick={() => handleBuildChange(opt.id)}
                        className={`p-5 rounded-xl border-2 font-bold text-sm transition-all duration-200 ease-out active:scale-[0.97] ${
                          buildType === opt.id 
                          ? 'border-[#FF5A00] bg-[#FFF5F0] text-[#FF5A00]' 
                          : 'border-[#E2E8F0] text-[#64748B] hover:border-[#CBD5E1]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:w-[450px] bg-[#0F172A] text-white p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
              <h3 className="font-bold uppercase tracking-widest text-sm text-[#94A3B8] mb-8">{t.quote.totalTitle}</h3>
              
              <div className={`mb-8 transition-all duration-200 ${isCalculating ? 'blur-md opacity-50' : 'blur-0 opacity-100'}`}>
                <span className="text-5xl md:text-6xl font-bold tracking-tighter text-[#FF5A00]">
                  {getPriceRange()}
                </span>
              </div>
              
              <p className="text-[#94A3B8] text-sm mb-12 border-b border-[#334155] pb-10 leading-relaxed font-medium">
                {t.quote.totalDesc}
              </p>
              
              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-widest text-[#94A3B8]">{t.quote.ctaTitle}</label>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-[#1E293B] border-2 border-[#334155] rounded-xl px-5 py-5 text-white placeholder-[#64748B] outline-none focus:border-[#FF5A00] transition-colors font-semibold" 
                />
                <button className="w-full bg-[#FF5A00] text-white font-bold py-5 rounded-xl hover:bg-[#E04F00] active:scale-[0.97] transition-all duration-200 text-lg">
                  {t.quote.ctaBtn}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020617] text-white pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="font-bold text-2xl tracking-tight flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-[#FF5A00] rounded-sm flex items-center justify-center">
                  <Building2 className="w-3 h-3 text-white" />
                </div>
                APEX<span className="font-light">CONSTRUCT</span>
              </div>
              <p className="text-[#94A3B8] max-w-sm mb-6 leading-relaxed">
                {t.footer.desc}
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 tracking-widest text-xs uppercase text-[#64748B]">{t.footer.contact}</h4>
              <ul className="space-y-3 font-medium text-[#94A3B8] text-sm">
                <li>+1 (555) 987-6543</li>
                <li>bids@apexconstruct.com</li>
                <li>Chicago, IL</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 tracking-widest text-xs uppercase text-[#64748B]">{t.footer.legal}</h4>
              <ul className="space-y-3 font-medium text-[#94A3B8] text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Safety Standards</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#1E293B] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold tracking-widest text-[#64748B] uppercase">
            <p>{t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
