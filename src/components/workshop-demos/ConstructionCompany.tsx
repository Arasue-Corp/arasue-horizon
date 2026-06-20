"use client"
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Building2, HardHat, ShieldCheck, FileText, ChevronRight, Star, ChevronDown, Activity, Box, MapPin, Phone, Mail, Camera, Briefcase, MessageSquare, Maximize, CheckCircle2, ArrowLeft } from 'lucide-react'
import { useState } from 'react'

const dict = {
  usa: {
    nav: { srv: 'Capabilities', port: 'Projects', proc: 'Approach', faq: 'FAQ', est: 'Estimator', book: 'Contact Sales', back: 'Return to Landing' },
    hero: { 
      t1: 'Build with', 
      t2: 'Certainty.', 
      p: 'General contracting and construction management for commercial, industrial, and civic infrastructure. We manage complexity so you do not have to.',
      btn1: 'Initiate Project',
      btn2: 'Our Portfolio'
    },
    trust: 'Trusted by Municipalities and Tier-1 Enterprises',
    stats: [
      { num: '$2B+', label: 'Managed Capital' },
      { num: '0.75', label: 'Safety EMR Rating' },
      { num: '100+', label: 'Commercial Builds' }
    ],
    srv: {
      tag: 'Competencies',
      title: 'Institutional Execution.',
      p: 'End-to-end management with uncompromising safety standards and financial transparency.',
      items: [
        { icon: Building2, title: "Commercial Construction", desc: "Ground-up builds for retail, class-A office spaces, and multi-family residential complexes." },
        { icon: ShieldCheck, title: "Construction Management", desc: "Acting as your principal agent to oversee bidding, scheduling, and risk mitigation." },
        { icon: HardHat, title: "Design-Build", desc: "Unified workflow from architectural conception to final structural handover." }
      ]
    },
    portfolio: {
      tag: 'Infrastructure',
      title: 'Featured Developments',
      p: 'Delivered on time, under budget, and built to the highest standard. Filter by classification.',
      filters: ['All', 'Office', 'Warehouse', 'Healthcare'],
      items: [
        { cat: 'Office', title: 'Nexus Corporate Tower', desc: 'A 200,000 sq ft class-A office building completed 3 weeks ahead of schedule.', metric: '$45M BUDGET' },
        { cat: 'Healthcare', title: 'City General Expansion', desc: 'Surgical wing addition requiring extreme vibration and dust mitigation protocols.', metric: '$80M BUDGET' },
        { cat: 'Warehouse', title: 'National Logistics Hub', desc: 'Massive 500,000 sq ft distribution center with specialized reinforced flooring.', metric: '$120M BUDGET' }
      ]
    },
    process: {
      tag: 'Methodology',
      title: 'The Apex Protocol.',
      p: 'A systematic approach designed to mitigate risk and eliminate schedule overruns.',
      steps: [
        { num: '01', title: 'Pre-Construction', desc: 'Feasibility studies, aggressive value engineering, and precise initial budgeting.' },
        { num: '02', title: 'Procurement', desc: 'Leveraging our network to secure materials and lock in sub-contractors early.' },
        { num: '03', title: 'Execution', desc: 'Rigorous daily site management, safety compliance, and timeline enforcement.' },
        { num: '04', title: 'Handover', desc: 'Comprehensive punch-list completion and smooth transition to facility management.' }
      ]
    },
    testimonials: {
      tag: 'Endorsements',
      title: 'Backed by Industry Leaders',
      items: [
        { name: 'Marcus T.', role: 'VP of Real Estate, TechCorp', text: '"Apex Construct is the only GC I trust with a $50M budget. They caught a structural flaw in the architectural plans during pre-con that saved us months of rework."' },
        { name: 'Elena G.', role: 'Hospital Administrator', text: '"Working in an active healthcare environment is notoriously difficult. Apex managed the entire expansion with zero disruption to our ER. Total professionals."' }
      ]
    },
    faq: {
      tag: 'Inquiries',
      title: 'Executive FAQ',
      items: [
        { q: 'How do you handle supply chain delays?', a: 'We utilize an aggressive early procurement strategy. By ordering long-lead items (like HVAC units and structural steel) during the design phase, we mitigate 90% of supply chain risks.' },
        { q: 'Do you offer a guaranteed maximum price (GMP)?', a: 'Yes. For our Construction Management at Risk (CMAR) delivery method, we establish a GMP early in the process to protect your capital investment.' },
        { q: 'What is your safety record?', a: 'Our Experience Modification Rate (EMR) is consistently below 0.75, which ranks us in the top tier of national commercial contractors.' }
      ]
    },
    quote: {
      title: 'Commercial Estimator',
      p: 'Generate a preliminary budget range based on square footage and build classification.',
      areaTitle: 'Gross Building Area (SQ FT)',
      reqTitle: 'Build Classification',
      reqOptions: [
        { id: 'warehouse', label: 'Industrial / Warehouse' },
        { id: 'office', label: 'Commercial Office' },
        { id: 'healthcare', label: 'Healthcare / Lab' }
      ],
      totalTitle: 'Budget Range (Class 5 Estimate)',
      totalDesc: 'This is an Order of Magnitude estimate for feasibility analysis only.',
      ctaBtn: 'Request Formal Bid'
    },
    footer: {
      desc: 'Building the infrastructure of tomorrow with unyielding integrity today.',
      contact: 'Headquarters',
      loc1: 'Chicago, IL',
      loc2: 'Dallas, TX',
      legal: 'Legal',
      rights: '© 2026 Arasue Forge LLC. All rights reserved.',
      tag: 'Build with Certainty.'
    },
    contactPage: {
      tag: 'Initiate',
      title: 'Submit RFP or Bidding Documents.',
      desc: 'Our pre-construction team typically responds within 24 hours to begin feasibility studies.',
      form: {
        fn: 'First Name',
        ln: 'Last Name',
        email: 'Corporate Email',
        scope: 'Project Description / Scope',
        submit: 'Submit to Pre-Con'
      }
    },
    catalogPage: {
      tag: 'Catalog',
      title: 'Infrastructure Portfolio',
      desc: 'A comprehensive archive of our completed Tier-1 developments. Filtered by classification and scale.',
      filters: ['All Sectors', 'Commercial', 'Industrial', 'Healthcare', 'Civic'],
      projects: [
        { cat: 'Commercial', title: 'Nexus Corporate Tower', location: 'Chicago, IL', scale: '200,000 SQ FT', budget: '$45M', desc: 'A class-A office building completed 3 weeks ahead of schedule. Features dynamic smart-glass facades and LEED Platinum certification.', client: 'TechCorp Holdings', comment: '"Apex caught a structural flaw in the architectural plans during pre-con that saved us months. Exceptional foresight."', rating: 5 },
        { cat: 'Healthcare', title: 'City General Expansion', location: 'Dallas, TX', scale: '85,000 SQ FT', budget: '$80M', desc: 'Surgical wing addition requiring extreme vibration and dust mitigation protocols to keep adjacent operating rooms active.', client: 'City Healthcare Partners', comment: '"Managed the entire expansion with zero disruption to our ER. Total professionals in high-stress environments."', rating: 5 },
        { cat: 'Industrial', title: 'National Logistics Hub', location: 'Austin, TX', scale: '500,000 SQ FT', budget: '$120M', desc: 'Massive distribution center with specialized reinforced flooring engineered to withstand continuous autonomous forklift traffic.', client: 'Global Logistics Inc', comment: '"The laser-leveled flooring tolerance is impeccable. Our robotics systems operate flawlessly."', rating: 5 },
        { cat: 'Civic', title: 'Metro Transit Terminal', location: 'Denver, CO', scale: '120,000 SQ FT', budget: '$65M', desc: 'Public transit hub featuring vast open-span steel structures and heavy pedestrian flow management design.', client: 'Department of Transportation', comment: '"Delivered a complex public works project under budget and ahead of the mayoral deadline. Outstanding."', rating: 4.5 },
      ]
    }
  },
  mex: {
    nav: { srv: 'Capacidades', port: 'Proyectos', proc: 'Metodología', faq: 'FAQ', est: 'Estimador', book: 'Contactar Ventas', back: 'Volver al Inicio' },
    hero: { 
      t1: 'Construye con', 
      t2: 'Certeza.', 
      p: 'Contratación general y gestión de construcción para infraestructura comercial, industrial y civil. Manejamos la complejidad para que tú no tengas que hacerlo.',
      btn1: 'Iniciar Proyecto',
      btn2: 'Ver Catálogo Completo'
    },
    trust: 'Respaldado por Municipios y Empresas Tier-1',
    stats: [
      { num: '$2B+', label: 'Capital Gestionado' },
      { num: '0.75', label: 'Calificación EMR (Seguridad)' },
      { num: '100+', label: 'Proyectos Comerciales' }
    ],
    srv: {
      tag: 'Competencias',
      title: 'Ejecución Institucional.',
      p: 'Gestión de principio a fin con estándares de seguridad intransigentes y transparencia financiera.',
      items: [
        { icon: Building2, title: "Construcción Comercial", desc: "Construcción desde cero para comercios, oficinas clase A y complejos residenciales." },
        { icon: ShieldCheck, title: "Gestión de Construcción", desc: "Actuamos como tu agente principal para supervisar licitaciones, cronogramas y mitigación de riesgos." },
        { icon: HardHat, title: "Diseño y Construcción", desc: "Flujo de trabajo unificado desde la concepción arquitectónica hasta la entrega estructural." }
      ]
    },
    portfolio: {
      tag: 'Infraestructura',
      title: 'Desarrollos Destacados',
      p: 'Un vistazo a nuestras obras recientes. Explora el catálogo completo para ver calificaciones e historial.',
      filters: ['Todos', 'Oficina', 'Almacen', 'Salud'],
      items: [
        { cat: 'Oficina', title: 'Torre Corporativa Nexus', desc: 'Edificio de oficinas clase A de 20,000 m² completado 3 semanas antes de lo programado.', metric: 'PRESUPUESTO $45M' },
        { cat: 'Salud', title: 'Ampliación Hospital General', desc: 'Ala quirúrgica que requirió protocolos extremos de mitigación de polvo y vibraciones.', metric: 'PRESUPUESTO $80M' },
        { cat: 'Almacen', title: 'Centro Logístico Nacional', desc: 'Gigantesco hub logístico de 50,000 m² con pisos reforzados especializados.', metric: 'PRESUPUESTO $120M' }
      ]
    },
    process: {
      tag: 'Metodología',
      title: 'El Protocolo Apex.',
      p: 'Un enfoque sistemático diseñado para mitigar riesgos y eliminar excesos en el cronograma.',
      steps: [
        { num: '01', title: 'Pre-Construcción', desc: 'Estudios de viabilidad, ingeniería de valor agresiva y presupuestación inicial precisa.' },
        { num: '02', title: 'Adquisiciones', desc: 'Aprovechamos nuestra red para asegurar materiales y subcontratistas tempranamente.' },
        { num: '03', title: 'Ejecución', desc: 'Gestión diaria rigurosa del sitio, cumplimiento de seguridad y aplicación del cronograma.' },
        { num: '04', title: 'Entrega', desc: 'Resolución exhaustiva de detalles y transición fluida a la gestión de instalaciones.' }
      ]
    },
    testimonials: {
      tag: 'Respaldos',
      title: 'Apoyado por Líderes de la Industria',
      items: [
        { name: 'Marcus T.', role: 'VP de Bienes Raíces, TechCorp', text: '"Apex Construct es el único contratista general en el que confío con un presupuesto de $50M. Detectaron un fallo estructural en los planos durante la pre-construcción que nos ahorró meses."' },
        { name: 'Elena G.', role: 'Administradora de Hospital', text: '"Trabajar en un entorno de salud activo es notoriamente difícil. Apex manejó toda la expansión con cero interrupciones en nuestra sala de emergencias. Profesionales totales."' }
      ]
    },
    faq: {
      tag: 'Consultas',
      title: 'FAQ Ejecutivo',
      items: [
        { q: '¿Cómo manejan los retrasos en la cadena de suministro?', a: 'Utilizamos una estrategia agresiva de adquisiciones tempranas. Al ordenar artículos de largo tiempo de entrega durante la fase de diseño, mitigamos el 90% de los riesgos.' },
        { q: '¿Ofrecen un Precio Máximo Garantizado (GMP)?', a: 'Sí. Para nuestro método de entrega (CMAR), establecemos un GMP temprano en el proceso para proteger tu inversión de capital.' },
        { q: '¿Cuál es su historial de seguridad?', a: 'Nuestra Tasa de Modificación de Experiencia (EMR) es consistentemente inferior a 0.75, lo que nos ubica en el nivel superior de contratistas comerciales.' }
      ]
    },
    quote: {
      title: 'Estimador Comercial',
      p: 'Genera un rango de presupuesto preliminar basado en metros cuadrados y clasificación.',
      areaTitle: 'Área Bruta de Construcción',
      reqTitle: 'Clasificación de Construcción',
      reqOptions: [
        { id: 'warehouse', label: 'Industrial / Almacén' },
        { id: 'office', label: 'Oficina Comercial' },
        { id: 'healthcare', label: 'Salud / Laboratorio' }
      ],
      totalTitle: 'Rango de Presupuesto (Clase 5)',
      totalDesc: 'Esta es una estimación de Orden de Magnitud solo para análisis de viabilidad.',
      ctaBtn: 'Solicitar Oferta Formal'
    },
    footer: {
      desc: 'Construyendo la infraestructura del mañana con integridad inquebrantable hoy.',
      contact: 'Sede Principal',
      loc1: 'Ciudad de México',
      loc2: 'Monterrey, NL',
      legal: 'Cumplimiento y Legal',
      rights: '© 2026 Arasue Forge LLC. Todos los derechos reservados.',
      tag: 'Construye con Certeza.'
    },
    contactPage: {
      tag: 'Iniciar',
      title: 'Enviar RFP o Documentos de Licitación.',
      desc: 'Nuestro equipo de pre-construcción típicamente responde en 24 horas para iniciar estudios de viabilidad.',
      form: {
        fn: 'Nombre',
        ln: 'Apellido',
        email: 'Correo Corporativo',
        scope: 'Descripción del Proyecto / Alcance',
        submit: 'Enviar a Pre-Construcción'
      }
    },
    catalogPage: {
      tag: 'Catálogo',
      title: 'Portafolio de Infraestructura',
      desc: 'Un archivo completo de nuestros desarrollos Tier-1 finalizados. Filtrado por clasificación y escala.',
      filters: ['Todos los Sectores', 'Comercial', 'Industrial', 'Salud', 'Cívico'],
      projects: [
        { cat: 'Comercial', title: 'Torre Corporativa Nexus', location: 'Ciudad de México', scale: '20,000 m²', budget: '$45M', desc: 'Edificio de oficinas clase A completado 3 semanas antes de lo programado. Cuenta con fachadas dinámicas de cristal inteligente y certificación LEED Platinum.', client: 'TechCorp Holdings', comment: '"Apex detectó un fallo estructural en los planos durante la pre-construcción que nos ahorró meses. Previsión excepcional."', rating: 5 },
        { cat: 'Salud', title: 'Ampliación Hospital General', location: 'Monterrey, NL', scale: '8,500 m²', budget: '$80M', desc: 'Ala quirúrgica que requirió protocolos extremos de mitigación de polvo y vibraciones para mantener activos los quirófanos adyacentes.', client: 'City Healthcare Partners', comment: '"Manejaron toda la expansión con cero interrupciones en nuestra sala de emergencias. Profesionales totales en entornos de alto estrés."', rating: 5 },
        { cat: 'Industrial', title: 'Centro Logístico Nacional', location: 'Querétaro, Qro', scale: '50,000 m²', budget: '$120M', desc: 'Gigantesco centro de distribución con pisos reforzados especializados diseñados para soportar tráfico continuo de montacargas autónomos.', client: 'Global Logistics Inc', comment: '"La tolerancia del nivelado láser del piso es impecable. Nuestros sistemas robóticos operan sin fallas."', rating: 5 },
        { cat: 'Cívico', title: 'Terminal de Tránsito Metro', location: 'Guadalajara, Jal', scale: '12,000 m²', budget: '$65M', desc: 'Hub de transporte público que cuenta con vastas estructuras de acero de claro abierto y diseño para el manejo de flujo peatonal pesado.', client: 'Secretaría de Movilidad', comment: '"Entregaron un complejo proyecto de obra pública bajo presupuesto y antes de la fecha límite del alcalde. Sobresaliente."', rating: 4.5 },
      ]
    }
  }
}

// UI Components (Arasue Horizon Standard)
const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-[#162D59]/10 bg-white text-[10px] font-sans font-bold uppercase tracking-widest mb-6 text-[#162D59] shadow-sm">
    <div className="w-1.5 h-1.5 bg-[#A65E44]" />
    {text}
  </div>
)

const SectionTagDark = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-white/10 bg-white/5 text-[10px] font-sans font-bold uppercase tracking-widest mb-6 text-white shadow-sm">
    <div className="w-1.5 h-1.5 bg-[#A65E44]" />
    {text}
  </div>
)

// CAD / Blueprint Wireframe for Institutional Construction feel
const CADWireframe = ({ type = 'hero' }: { type?: 'hero' | 'card' }) => {
  return (
    <div className="absolute inset-0 bg-[#F2F2F2] overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
      {/* Light Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#162D5910_1px,transparent_1px),linear-gradient(to_bottom,#162D5910_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* CAD Structural Lines */}
      <svg className="absolute inset-0 w-full h-full stroke-[#162D59]/20 fill-none" strokeWidth="1" viewBox="0 0 400 400" preserveAspectRatio="none">
        <rect x="50" y="50" width="300" height="300" />
        <line x1="50" y1="50" x2="350" y2="350" />
        <line x1="350" y1="50" x2="50" y2="350" />
        <rect x="150" y="150" width="100" height="100" strokeWidth="2" stroke="#162D5940" />
      </svg>

      {/* Abstract Building Volumes */}
      <div className="absolute inset-0 p-8 flex items-end justify-center z-10 pb-16">
        <div className="w-full h-48 border border-[#162D59]/20 bg-white/40 backdrop-blur-md flex items-end justify-center gap-4 p-4 shadow-sm relative">
           
           {/* Dimension Lines */}
           <div className="absolute -top-6 left-0 right-0 flex items-center justify-between text-[#162D59]/40">
             <div className="w-px h-4 bg-[#162D59]/40" />
             <div className="h-px flex-1 bg-[#162D59]/40" />
             <span className="text-[8px] font-mono font-bold bg-[#F2F2F2] px-2 absolute left-1/2 -translate-x-1/2">STRUCTURAL SPAN</span>
             <div className="w-px h-4 bg-[#162D59]/40" />
           </div>

           {type === 'hero' ? (
             <>
               <div className="w-1/3 h-24 bg-[#162D59]/5 border border-[#162D59]/10" />
               <div className="w-1/3 h-40 bg-[#162D59]/10 border border-[#162D59]/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#A65E44]" />
               </div>
               <div className="w-1/3 h-32 bg-[#162D59]/5 border border-[#162D59]/10" />
             </>
           ) : (
             <div className="w-full h-full bg-[#162D59]/5 border border-[#162D59]/10 relative overflow-hidden">
               <div className="absolute bottom-0 left-0 w-1/2 h-1/2 border-t border-r border-[#162D59]/10" />
             </div>
           )}
        </div>
      </div>
      
      {/* Drawing Annotations */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[8px] font-mono font-bold text-[#162D59]/40 uppercase">
        <div>DWG. REF: {type === 'hero' ? 'AX-900' : 'PR-201'}</div>
        <div>NTS / FOR REVIEW ONLY</div>
      </div>
    </div>
  )
}

export function ConstructionCompany() {
  const [region, setRegion] = useState<'usa' | 'mex'>('usa')
  const [currentView, setCurrentView] = useState<'landing' | 'contact' | 'catalog'>('landing')
  const [areaSize, setAreaSize] = useState(50000) 
  const [buildType, setBuildType] = useState('office')
  const [isCalculating, setIsCalculating] = useState(false)
  const [filter, setFilter] = useState('All')
  const [catalogFilter, setCatalogFilter] = useState('All Sectors')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  
  const reduce = useReducedMotion()
  const t = dict[region]

  // Spring physics setup (Arasue Kowalski standard)
  const springTransition = { type: "spring", stiffness: 300, damping: 30 }

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
    }, 200)
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
    : t.portfolio.items.filter(item => item.cat === filter || (filter === 'Almacen' && item.cat === 'Almacen') || (filter === 'Salud' && item.cat === 'Healthcare'))

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-[#162D59] font-sans selection:bg-[#A65E44] selection:text-white flex flex-col">
      
      {/* Corporate Navy Nav */}
      <nav className="w-full bg-[#162D59] text-[#F2F2F2] sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="font-serif font-black text-2xl tracking-tighter flex items-center gap-3 cursor-pointer"
            onClick={() => setCurrentView('landing')}
          >
            <div className="w-8 h-8 bg-[#A65E44] text-white flex items-center justify-center shadow-sm">
              <Building2 className="w-4 h-4" />
            </div>
            APEX<span className="font-light opacity-80">CONSTRUCT</span>
          </div>
          
          {currentView === 'landing' ? (
            <div className="hidden lg:flex gap-8 font-semibold text-sm text-[#F2F2F2]/80">
              <a href="#services" className="hover:text-white transition-colors">{t.nav.srv}</a>
              <button onClick={() => { window.scrollTo(0,0); setCurrentView('catalog') }} className="hover:text-white transition-colors">{t.nav.port}</button>
              <a href="#process" className="hover:text-white transition-colors">{t.nav.proc}</a>
              <a href="#faq" className="hover:text-white transition-colors">{t.nav.faq}</a>
            </div>
          ) : (
            <div className="hidden lg:flex" />
          )}

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleRegion}
              className="flex items-center gap-2 px-3 py-1 rounded border border-[#F2F2F2]/20 text-[#F2F2F2]/70 hover:text-white hover:border-[#F2F2F2]/50 transition-colors text-xs font-bold uppercase tracking-widest"
            >
              {region === 'usa' ? 'US' : 'MX'}
            </button>
            {currentView === 'landing' ? (
              <button 
                onClick={() => { window.scrollTo(0,0); setCurrentView('contact') }}
                className="hidden sm:inline-flex bg-white text-[#162D59] px-6 py-2.5 rounded font-bold text-sm hover:bg-[#F2F2F2] transition-colors items-center gap-2 shadow-sm"
              >
                {t.nav.book}
              </button>
            ) : (
              <button 
                onClick={() => { window.scrollTo(0,0); setCurrentView('landing') }}
                className="hidden sm:inline-flex border border-white/20 text-white px-6 py-2.5 rounded font-bold text-sm hover:bg-white/5 transition-colors items-center gap-2 shadow-sm"
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
              <section className="pt-24 pb-16 px-6 relative z-10 bg-white border-b border-[#162D59]/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <motion.div 
                    initial={reduce ? false : { opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={springTransition}
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#162D59]/5 text-[10px] font-bold uppercase tracking-widest mb-8 text-[#162D59]/70 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A65E44]" />
                      {t.trust}
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-serif font-black tracking-tight mb-6 leading-[1.05] text-[#162D59]">
                      {t.hero.t1} <br />
                      <span className="italic text-[#A65E44]">{t.hero.t2}</span>
                    </h1>
                    
                    <p className="text-lg text-[#162D59]/70 mb-10 max-w-lg font-medium leading-relaxed">
                      {t.hero.p}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => { window.scrollTo(0,0); setCurrentView('contact') }}
                        className="bg-[#162D59] text-white px-8 py-4 rounded font-bold hover:bg-[#0D1C38] transition-colors flex items-center justify-center gap-2 text-sm shadow-xl shadow-[#162D59]/10"
                      >
                        {t.hero.btn1} <ArrowRight className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => { window.scrollTo(0,0); setCurrentView('catalog') }}
                        className="px-8 py-4 rounded font-bold border border-[#162D59]/20 text-[#162D59] hover:bg-[#162D59]/5 transition-colors flex items-center justify-center gap-2 text-sm"
                      >
                        {t.hero.btn2}
                      </button>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={reduce ? false : { opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ ...springTransition, delay: 0.1 }}
                    className="w-full h-[500px]"
                  >
                    <div className="w-full h-full border border-[#162D59]/10 bg-white relative group overflow-hidden shadow-2xl">
                       <CADWireframe type="hero" />
                       
                       <div className="absolute top-6 right-6 border border-[#162D59]/10 bg-white/90 backdrop-blur-md p-4 text-[#162D59] shadow-lg rounded-sm">
                         <div className="text-[10px] font-bold uppercase tracking-widest text-[#162D59]/50 mb-1">Pre-Con Status</div>
                         <div className="font-bold flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-[#A65E44]" /> Bidding Open</div>
                       </div>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Institutional Stats Banner */}
              <section className="py-10 border-b border-[#162D59]/5 bg-[#F2F2F2]">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#162D59]/10">
                    {t.stats.map((stat, i) => (
                      <div key={i} className="flex flex-col items-center justify-center py-4 text-center">
                        <div className="text-4xl font-serif font-black mb-2 text-[#162D59]">{stat.num}</div>
                        <div className="text-xs font-bold uppercase tracking-widest text-[#162D59]/50">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Capabilities Section */}
              <section id="services" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                  <div className="mb-16 md:w-2/3">
                    <SectionTag text={t.srv.tag} />
                    <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight mb-4">{t.srv.title}</h2>
                    <p className="text-[#162D59]/70 text-lg font-medium">{t.srv.p}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {t.srv.items.map((srv, i) => {
                      const Icon = srv.icon
                      return (
                        <div key={i} className="bg-[#F2F2F2] border border-[#162D59]/5 p-8 hover:border-[#162D59]/20 transition-colors group">
                          <div className="w-14 h-14 bg-white border border-[#162D59]/10 flex items-center justify-center mb-8 shadow-sm">
                            <Icon className="w-6 h-6 text-[#A65E44]" />
                          </div>
                          <h3 className="text-xl font-bold mb-3">{srv.title}</h3>
                          <p className="text-[#162D59]/60 text-sm leading-relaxed">{srv.desc}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </section>

              {/* Process Section */}
              <section id="process" className="py-24 px-6 bg-[#162D59] text-white">
                <div className="max-w-7xl mx-auto">
                  <div className="mb-16 text-center">
                    <SectionTagDark text={t.process.tag} />
                    <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight">{t.process.title}</h2>
                    <p className="text-white/60 text-lg font-medium mt-4">{t.process.p}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-white/10" />
                    {t.process.steps.map((item, i) => (
                      <div key={i} className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-[#162D59] border border-[#A65E44] flex items-center justify-center text-2xl font-serif font-black text-white mb-8 shadow-[0_0_20px_rgba(166,94,68,0.2)]">
                          {item.num}
                        </div>
                        <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed max-w-[200px]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Portfolio Section */}
              <section id="portfolio" className="py-24 px-6 bg-[#F2F2F2]">
                <div className="max-w-7xl mx-auto">
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                      <SectionTag text={t.portfolio.tag} />
                      <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight mb-4">{t.portfolio.title}</h2>
                      <p className="text-[#162D59]/70 text-lg font-medium">{t.portfolio.p}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {t.portfolio.filters.map(f => (
                        <button 
                          key={f}
                          onClick={() => setFilter(f)}
                          className={`px-4 py-2 rounded text-sm font-bold transition-all ${
                            filter === f ? 'bg-[#162D59] text-white shadow-md' : 'bg-white text-[#162D59]/60 hover:bg-white/50 border border-[#162D59]/10'
                          }`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredPortfolio.map((project, i) => (
                      <motion.div 
                        layout
                        key={project.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={springTransition}
                        className="group cursor-pointer bg-white border border-[#162D59]/5 p-4 rounded shadow-sm hover:shadow-lg transition-shadow"
                      >
                        <div className="aspect-[4/3] border border-[#162D59]/10 bg-[#F2F2F2] overflow-hidden relative mb-6">
                          <CADWireframe type="card" />
                          <div className="absolute inset-0 bg-[#162D59]/0 group-hover:bg-[#162D59]/5 transition-colors duration-500" />
                          <div className="absolute top-4 right-4 bg-white border border-[#162D59]/10 text-[#162D59] text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest shadow-sm">
                            {project.metric}
                          </div>
                        </div>
                        <div className="text-[10px] font-bold text-[#A65E44] mb-2 uppercase tracking-widest">{project.cat}</div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-[#A65E44] transition-colors">{project.title}</h3>
                        <p className="text-sm text-[#162D59]/60">{project.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Testimonials */}
              <section className="py-24 px-6 border-t border-[#162D59]/5 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                  <SectionTag text={t.testimonials.tag} />
                  <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight mb-16">{t.testimonials.title}</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {t.testimonials.items.map((item, i) => (
                      <div key={i} className="bg-[#F2F2F2] border border-[#162D59]/5 rounded p-8 text-left">
                        <div className="flex gap-1 mb-6">
                          {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-[#A65E44] text-[#A65E44]" />)}
                        </div>
                        <p className="text-[#162D59]/80 font-medium leading-relaxed mb-8 italic text-lg">"{item.text}"</p>
                        <div>
                          <div className="font-bold">{item.name}</div>
                          <div className="text-xs text-[#162D59]/50 font-bold uppercase tracking-widest mt-1">{item.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Executive Estimator */}
              <section id="quote" className="py-24 px-6 bg-[#F2F2F2] border-t border-[#162D59]/5">
                <div className="max-w-5xl mx-auto">
                  <div className="bg-white border border-[#162D59]/10 rounded shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-12 relative overflow-hidden">
                    
                    <div className="flex-1 relative z-10">
                      <div className="mb-10">
                        <h2 className="text-3xl font-serif font-black mb-3 text-[#162D59]">{t.quote.title}</h2>
                        <p className="text-[#162D59]/60 text-sm">{t.quote.p}</p>
                      </div>

                      <div className="space-y-10">
                        <div>
                          <div className="flex justify-between items-end mb-6">
                            <label className="text-xs font-bold text-[#162D59]/60 uppercase tracking-widest">{t.quote.areaTitle}</label>
                            <span className="text-2xl font-serif font-black text-[#162D59]">{areaSize.toLocaleString()}</span>
                          </div>
                          <input 
                            type="range" 
                            min={10000} 
                            max={200000} 
                            step={10000}
                            value={areaSize} 
                            onChange={(e) => setAreaSize(Number(e.target.value))}
                            className="w-full h-2 bg-[#F2F2F2] appearance-none cursor-pointer focus:outline-none accent-[#A65E44]"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-bold text-[#162D59]/60 mb-4 block uppercase tracking-widest">{t.quote.reqTitle}</label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {t.quote.reqOptions.map(opt => (
                              <button 
                                key={opt.id}
                                onClick={() => {
                                  setIsCalculating(true); 
                                  setTimeout(() => { setBuildType(opt.id); setIsCalculating(false) }, 200)
                                }}
                                className={`p-4 border rounded transition-colors text-xs font-bold uppercase tracking-wide text-center ${
                                  buildType === opt.id 
                                  ? 'border-[#162D59] bg-[#162D59] text-white shadow-md' 
                                  : 'border-[#162D59]/10 bg-white text-[#162D59]/60 hover:border-[#162D59]/30'
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-[320px] bg-[#162D59] p-8 text-white rounded flex flex-col justify-center relative z-10 shadow-inner">
                      <h3 className="text-[10px] font-bold uppercase tracking-widest mb-6 opacity-60">{t.quote.totalTitle}</h3>
                      
                      <div className={`mb-6 transition-all duration-200 ${isCalculating ? 'blur-sm opacity-50 scale-95' : 'blur-0 opacity-100 scale-100'}`}>
                        <div className="text-4xl font-serif font-black tracking-tight mb-1 text-[#F2D3AC]">
                          {getPriceRange()}
                        </div>
                      </div>
                      
                      <p className="text-white/50 text-xs mb-8 pb-8 border-b border-white/10 leading-relaxed font-medium">
                        {t.quote.totalDesc}
                      </p>
                      
                      <button 
                        onClick={() => { window.scrollTo(0,0); setCurrentView('contact') }}
                        className="w-full bg-[#A65E44] text-white font-bold text-sm py-4 rounded hover:bg-[#8A4A33] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
                      >
                        {t.quote.ctaBtn} <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical FAQ */}
              <section id="faq" className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-16">
                    <SectionTag text={t.faq.tag} />
                    <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight">{t.faq.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {t.faq.items.map((faq, i) => (
                      <div key={i} className="border border-[#162D59]/10 bg-[#F2F2F2] overflow-hidden rounded">
                        <button 
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-[#162D59]/5 transition-colors"
                        >
                          <span className="font-bold text-lg text-[#162D59]">{faq.q}</span>
                          <ChevronDown className={`w-5 h-5 text-[#A65E44] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                        </button>
                        <motion.div 
                          initial={false}
                          animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 text-[#162D59]/70 leading-relaxed text-sm">
                            {faq.a}
                          </div>
                        </motion.div>
                      </div>
                    ))}
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
              className="flex-grow flex items-center bg-[#162D59] py-24 px-6"
            >
              <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-white">
                <div>
                  <SectionTagDark text={t.contactPage.tag} />
                  <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tight mb-6">
                    {t.contactPage.title}
                  </h2>
                  <p className="text-white/60 text-lg mb-12 max-w-md leading-relaxed">
                    {t.contactPage.desc}
                  </p>

                  <div className="space-y-6 text-sm font-bold text-white/80">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded">
                        <Phone className="w-5 h-5 text-[#A65E44]" />
                      </div>
                      <span className="text-lg">+1 (800) 555-APEX</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded">
                        <Mail className="w-5 h-5 text-[#A65E44]" />
                      </div>
                      <span className="text-lg">bids@apexconstruct.com</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded p-10 shadow-2xl">
                  <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setCurrentView('landing'); }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-[#162D59]/60 uppercase tracking-widest mb-2">
                          {t.contactPage.form.fn}
                        </label>
                        <input type="text" className="w-full bg-[#F2F2F2] border border-[#162D59]/10 rounded p-4 text-[#162D59] focus:outline-none focus:border-[#A65E44] transition-colors" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#162D59]/60 uppercase tracking-widest mb-2">
                          {t.contactPage.form.ln}
                        </label>
                        <input type="text" className="w-full bg-[#F2F2F2] border border-[#162D59]/10 rounded p-4 text-[#162D59] focus:outline-none focus:border-[#A65E44] transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#162D59]/60 uppercase tracking-widest mb-2">
                        {t.contactPage.form.email}
                      </label>
                      <input type="email" className="w-full bg-[#F2F2F2] border border-[#162D59]/10 rounded p-4 text-[#162D59] focus:outline-none focus:border-[#A65E44] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#162D59]/60 uppercase tracking-widest mb-2">
                        {t.contactPage.form.scope}
                      </label>
                      <textarea rows={5} className="w-full bg-[#F2F2F2] border border-[#162D59]/10 rounded p-4 text-[#162D59] focus:outline-none focus:border-[#A65E44] transition-colors"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#A65E44] text-white font-bold py-5 rounded hover:bg-[#8A4A33] transition-colors uppercase tracking-wide shadow-lg">
                      {t.contactPage.form.submit}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}

          {currentView === 'catalog' && (
            <motion.div 
              key="catalog"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-grow flex flex-col bg-[#F2F2F2] py-24 px-6"
            >
              <div className="max-w-7xl mx-auto w-full">
                <div className="mb-16">
                  <SectionTag text={t.catalogPage.tag} />
                  <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tight mb-6 text-[#162D59]">
                    {t.catalogPage.title}
                  </h2>
                  <p className="text-[#162D59]/70 text-lg mb-12 max-w-2xl leading-relaxed">
                    {t.catalogPage.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {t.catalogPage.filters.map(f => (
                      <button 
                        key={f}
                        onClick={() => setCatalogFilter(f)}
                        className={`px-4 py-2 rounded text-sm font-bold transition-all ${
                          catalogFilter === f ? 'bg-[#162D59] text-white shadow-md' : 'bg-white text-[#162D59]/60 hover:bg-white/50 border border-[#162D59]/10'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-12">
                  {t.catalogPage.projects
                    .filter(p => catalogFilter === 'All Sectors' || catalogFilter === 'Todos los Sectores' || p.cat === catalogFilter || (catalogFilter === 'Salud' && p.cat === 'Healthcare') || (catalogFilter === 'Cívico' && p.cat === 'Civic') || (catalogFilter === 'Almacen' && p.cat === 'Industrial'))
                    .map((project, i) => (
                    <motion.div 
                      layout
                      key={project.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={springTransition}
                      className="bg-white border border-[#162D59]/10 rounded shadow-lg overflow-hidden flex flex-col md:flex-row group"
                    >
                      <div className="md:w-1/3 aspect-square md:aspect-auto border-r border-[#162D59]/10 bg-[#F2F2F2] relative overflow-hidden">
                        <CADWireframe type="card" />
                        <div className="absolute inset-0 bg-[#162D59]/0 group-hover:bg-[#162D59]/5 transition-colors duration-500" />
                        <div className="absolute top-6 left-6 flex flex-col gap-2">
                          <div className="bg-[#162D59] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest shadow-sm self-start">
                            {project.scale}
                          </div>
                          <div className="bg-[#A65E44] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest shadow-sm self-start">
                            {project.budget}
                          </div>
                        </div>
                      </div>

                      <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <div className="text-[10px] font-bold text-[#A65E44] uppercase tracking-widest">{project.cat}</div>
                            <div className="flex items-center gap-1 text-[#162D59]/50 text-xs font-bold uppercase tracking-widest">
                              <MapPin className="w-3 h-3" /> {project.location}
                            </div>
                          </div>
                          <h3 className="text-3xl font-serif font-black mb-4 text-[#162D59]">{project.title}</h3>
                          <p className="text-[#162D59]/70 leading-relaxed mb-8">{project.desc}</p>
                        </div>

                        <div className="bg-[#F2F2F2] border border-[#162D59]/5 p-6 rounded relative">
                          <div className="absolute -top-3 left-6 bg-[#162D59] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-sm flex items-center gap-2">
                            <Star className="w-3 h-3 fill-current" /> CLIENT REVIEW
                          </div>
                          <p className="text-[#162D59]/80 font-medium italic mb-4 mt-2">
                            {project.comment}
                          </p>
                          <div className="flex justify-between items-end">
                            <div>
                              <div className="text-xs font-bold uppercase tracking-widest text-[#162D59]">{project.client}</div>
                            </div>
                            <div className="flex gap-1">
                              {Array.from({ length: 5 }).map((_, idx) => (
                                <Star key={idx} className={`w-4 h-4 ${idx < Math.floor(project.rating) ? 'fill-[#A65E44] text-[#A65E44]' : 'fill-[#A65E44]/20 text-[#A65E44]/20'}`} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Corporate Footer */}
      <footer className="pt-20 pb-10 bg-[#162D59] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="font-serif font-black text-2xl flex items-center gap-3 mb-6">
                 <Building2 className="w-5 h-5 text-[#A65E44]" />
                 APEX<span className="font-light opacity-80">CONSTRUCT</span>
              </div>
              <p className="text-white/60 text-sm max-w-sm leading-relaxed">
                {t.footer.desc}
              </p>
            </div>
            
            <div>
              <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-6">{t.footer.contact}</div>
              <ul className="space-y-4 text-sm font-medium text-white/70">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-white/30" /> {t.footer.loc1}
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-white/30" /> {t.footer.loc2}
                </li>
              </ul>
            </div>

            <div>
              <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-6">{t.footer.legal}</div>
              <ul className="space-y-3 text-sm font-medium text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sub-Contractor Portal</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-xs font-bold text-white/40 uppercase tracking-widest flex flex-col md:flex-row justify-between gap-4">
            <div>{t.footer.rights}</div>
            <div className="text-[#A65E44]">{t.footer.tag}</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
