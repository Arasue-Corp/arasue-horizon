"use client"
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Home, Shield, Droplets, ChevronRight, Star, ChevronDown, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

const dict = {
  usa: {
    nav: { srv: 'Protection', port: 'Gallery', proc: 'Process', faq: 'FAQ', est: 'Estimator', book: 'Inspection' },
    hero: { 
      t1: 'Uncompromising', 
      t2: 'Protection.', 
      p: 'Premium residential and commercial roofing systems engineered to withstand the most severe weather events.',
      btn1: 'Get an Estimate',
      btn2: 'Book Drone Inspection'
    },
    trust: 'Platinum Preferred Contractor',
    srv: {
      title: 'Our Defense Systems',
      p: 'More than just shingles. We install complete, integrated weatherproofing systems.',
      items: [
        { icon: Home, title: "Architectural Asphalt", desc: "High-dimensional shingles with a 50-year warranty and severe wind resistance." },
        { icon: Shield, title: "Standing Seam Metal", desc: "The ultimate lifetime roof. Reflective, durable, and structurally superior." },
        { icon: Droplets, title: "Total Waterproofing", desc: "Ice and water shields, premium synthetic underlayment, and ridge ventilation." }
      ]
    },
    portfolio: {
      title: 'Recent Installations',
      p: 'See how a premium roof transforms the curb appeal and security of a home. Filter by material.',
      filters: ['All', 'Asphalt', 'Metal', 'Flat'],
      items: [
        { cat: 'Asphalt', title: 'Estate Shingle Replacement', desc: 'Installed Owen\'s Corning Duration shingles in Onyx Black.', img: 'https://placehold.co/800x600/2563EB/ffffff?text=Asphalt+Roof' },
        { cat: 'Metal', title: 'Modern Farmhouse', desc: 'Standing seam metal roof in Matte Black for maximum longevity.', img: 'https://placehold.co/800x600/1E3A8A/ffffff?text=Metal+Roof' },
        { cat: 'Flat', title: 'Commercial TPO', desc: '10,000 sq ft heat-welded TPO membrane for a retail center.', img: 'https://placehold.co/800x600/DBEAFE/1E3A8A?text=TPO+Membrane' },
        { cat: 'Asphalt', title: 'Suburban Upgrade', desc: 'Complete tear-off and replacement with upgraded ridge vents.', img: 'https://placehold.co/800x600/3B82F6/ffffff?text=Residential+Roof' }
      ]
    },
    process: {
      title: 'The Replacement Process',
      p: 'Fast, clean, and completely stress-free. Most residential roofs are completed in a single day.',
      steps: [
        { num: '01', title: 'Drone Inspection', desc: 'We use AI-assisted drones to safely measure your roof and detect microscopic hail or wind damage.' },
        { num: '02', title: 'The Tear-Off', desc: 'We strip the roof down to the bare decking to inspect for rot and structural integrity.' },
        { num: '03', title: 'System Installation', desc: 'Applying underlayment, drip edges, and shingles according to strict manufacturer specifications.' },
        { num: '04', title: 'Magnetic Sweep', desc: 'We sweep your entire property with industrial magnets to ensure zero nails are left behind.' }
      ]
    },
    testimonials: {
      title: 'Homeowner Reviews',
      items: [
        { name: 'Jessica T.', role: 'Homeowner', text: '"After the hail storm, we were overwhelmed. Shelter Pro handled everything, including meeting with our insurance adjuster. The new roof looks amazing and their crew left the yard spotless."' },
        { name: 'Robert K.', role: 'Property Manager', text: '"I\'ve managed properties for 20 years. Shelter Pro is the only roofer I\'ve seen actually finish a 50-square tear-off and install in one day without cutting corners. Phenomenal speed."' }
      ]
    },
    faq: {
      title: 'Common Questions',
      items: [
        { q: 'Do you help with insurance claims?', a: 'Yes. If your roof was damaged by wind or hail, we provide a detailed damage report and can meet with your insurance adjuster on-site to ensure all necessary repairs are approved.' },
        { q: 'How long does a roof replacement take?', a: 'For a standard residential home (25-40 squares), our experienced crews can complete the entire tear-off, installation, and cleanup in a single day.' },
        { q: 'What is your warranty?', a: 'Because we are a Platinum Certified contractor, we can offer the manufacturer\'s 50-year non-prorated warranty, plus our own 10-year workmanship guarantee.' }
      ]
    },
    quote: {
      title: 'Roofing Estimator',
      p: 'Calculate approximate replacement costs based on "Squares" (1 Square = 100 sq ft).',
      areaTitle: 'Roof Size (Squares)',
      areaUnit: 'Squares',
      areaMin: 'Small House (15)',
      areaMax: 'Large Estate (60+)',
      reqTitle: 'Material Grade',
      reqOptions: [
        { id: '3tab', label: '3-Tab (Basic)' },
        { id: 'arch', label: 'Architectural (Premium)' },
        { id: 'metal', label: 'Standing Seam Metal' }
      ],
      totalTitle: 'Estimated Cost Range',
      totalDesc: '*Prices are estimates for complete tear-off and replacement. Pitch, accessibility, and wood rot repair will affect final pricing.',
      ctaTitle: 'Ready for an exact quote?',
      ctaBtn: 'Schedule Inspection'
    },
    footer: {
      desc: 'Protecting your most valuable asset from the top down.',
      contact: 'Main Office',
      legal: 'Legal',
      rights: '© 2026 Arasue Forge LLC. All rights reserved.',
      tag: 'Weather any storm.'
    }
  },
  mex: {
    nav: { srv: 'Protección', port: 'Galería', proc: 'Proceso', faq: 'FAQ', est: 'Estimador', book: 'Inspección' },
    hero: { 
      t1: 'Protección', 
      t2: 'Sin Concesiones.', 
      p: 'Sistemas de techado residenciales y comerciales premium, diseñados para soportar los eventos climáticos más severos.',
      btn1: 'Obtener Estimación',
      btn2: 'Agendar Inspección con Dron'
    },
    trust: 'Contratista Platino Certificado',
    srv: {
      title: 'Sistemas de Defensa',
      p: 'Más que solo tejas. Instalamos sistemas integrales de impermeabilización.',
      items: [
        { icon: Home, title: "Teja Asfáltica", desc: "Tejas arquitectónicas tridimensionales con garantía de 50 años y resistencia a vientos severos." },
        { icon: Shield, title: "Techo de Metal", desc: "El techo definitivo para toda la vida. Reflectivo, duradero y estructuralmente superior." },
        { icon: Droplets, title: "Impermeabilización", desc: "Barreras contra agua y hielo, base sintética premium y ventilación de cumbrera." }
      ]
    },
    portfolio: {
      title: 'Instalaciones Recientes',
      p: 'Mira cómo un techo premium transforma el atractivo y la seguridad de un hogar. Filtra por material.',
      filters: ['Todos', 'Asfaltica', 'Metal', 'Plano'],
      items: [
        { cat: 'Asfaltica', title: 'Reemplazo de Tejas', desc: 'Instalación de tejas Owen\'s Corning Duration en Negro Ónix.', img: 'https://placehold.co/800x600/2563EB/ffffff?text=Techo+Asfaltico' },
        { cat: 'Metal', title: 'Casa de Campo Moderna', desc: 'Techo de metal engargolado en Negro Mate para máxima longevidad.', img: 'https://placehold.co/800x600/1E3A8A/ffffff?text=Techo+Metalico' },
        { cat: 'Plano', title: 'TPO Comercial', desc: 'Membrana TPO de 1,000 m² soldada por calor para un centro comercial.', img: 'https://placehold.co/800x600/DBEAFE/1E3A8A?text=Membrana+TPO' },
        { cat: 'Asfaltica', title: 'Actualización Suburbana', desc: 'Desmontaje completo y reemplazo con ventilación de cumbrera mejorada.', img: 'https://placehold.co/800x600/3B82F6/ffffff?text=Techo+Residencial' }
      ]
    },
    process: {
      title: 'Proceso de Reemplazo',
      p: 'Rápido, limpio y sin estrés. La mayoría de los techos residenciales se completan en un solo día.',
      steps: [
        { num: '01', title: 'Inspección con Dron', desc: 'Usamos drones asistidos por IA para medir tu techo y detectar daños microscópicos por granizo o viento.' },
        { num: '02', title: 'El Desmontaje', desc: 'Retiramos el techo hasta la base de madera para inspeccionar la integridad estructural y buscar pudrición.' },
        { num: '03', title: 'Instalación del Sistema', desc: 'Aplicación de bases, bordes de goteo y tejas de acuerdo con las estrictas especificaciones del fabricante.' },
        { num: '04', title: 'Barrido Magnético', desc: 'Barremos toda la propiedad con imanes industriales para asegurar que no quede ni un solo clavo.' }
      ]
    },
    testimonials: {
      title: 'Reseñas de Propietarios',
      items: [
        { name: 'Jessica T.', role: 'Propietaria', text: '"Después de la tormenta de granizo, estábamos abrumados. Shelter Pro se encargó de todo, incluido hablar con nuestro ajustador del seguro. El nuevo techo se ve increíble y dejaron el patio impecable."' },
        { name: 'Robert K.', role: 'Administrador', text: '"He administrado propiedades por 20 años. Shelter Pro es el único techador que he visto terminar un desmontaje e instalación de 500 m² en un día sin tomar atajos. Velocidad fenomenal."' }
      ]
    },
    faq: {
      title: 'Preguntas Comunes',
      items: [
        { q: '¿Ayudan con los reclamos de seguros?', a: 'Sí. Si tu techo fue dañado por viento o granizo, proporcionamos un informe detallado y podemos reunirnos con tu ajustador en el lugar para asegurar que se aprueben todas las reparaciones.' },
        { q: '¿Cuánto tarda el reemplazo de un techo?', a: 'Para una casa residencial estándar, nuestros equipos experimentados pueden completar el desmontaje, instalación y limpieza en un solo día.' },
        { q: '¿Cuál es su garantía?', a: 'Como somos un contratista Certificado Platino, podemos ofrecer la garantía del fabricante de 50 años, más nuestra propia garantía de mano de obra de 10 años.' }
      ]
    },
    quote: {
      title: 'Estimador de Techos',
      p: 'Calcula costos de reemplazo basados en Metros Cuadrados.',
      areaTitle: 'Tamaño del Techo',
      areaUnit: 'm²',
      areaMin: 'Casa Pequeña (150)',
      areaMax: 'Finca Grande (600+)',
      reqTitle: 'Grado de Material',
      reqOptions: [
        { id: '3tab', label: 'Económica (Básica)' },
        { id: 'arch', label: 'Arquitectónica (Premium)' },
        { id: 'metal', label: 'Metal Engargolado' }
      ],
      totalTitle: 'Rango de Costo Estimado',
      totalDesc: '*Los precios son estimados para desmontaje y reemplazo completo. La pendiente, accesibilidad y reparación de madera afectarán el precio.',
      ctaTitle: '¿Listo para una cotización exacta?',
      ctaBtn: 'Agendar Inspección'
    },
    footer: {
      desc: 'Protegiendo tu activo más valioso de arriba hacia abajo.',
      contact: 'Oficina Principal',
      legal: 'Legal',
      rights: '© 2026 Arasue Forge LLC. Todos los derechos reservados.',
      tag: 'Supera cualquier tormenta.'
    }
  }
}

export function Roofing() {
  const [region, setRegion] = useState<'usa' | 'mex'>('usa')
  const [size, setSize] = useState(30) 
  const [material, setMaterial] = useState('arch')
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
        setSize(Math.round(size * 9.29)) // 1 Square = ~9.29 sq meters
        setFilter('Todos')
      } else {
        setRegion('usa')
        setSize(Math.round(size / 9.29))
        setFilter('All')
      }
      setIsCalculating(false)
    }, 300)
  }

  const handleMaterialChange = (val: string) => {
    setIsCalculating(true)
    setTimeout(() => {
      setMaterial(val)
      setIsCalculating(false)
    }, 200)
  }

  const getPriceRange = () => {
    let pricePerUnit = 0;
    
    if (region === 'usa') {
      // Pricing per Square (100 sq ft)
      if (material === '3tab') pricePerUnit = 350;
      if (material === 'arch') pricePerUnit = 550;
      if (material === 'metal') pricePerUnit = 1200;
    } else {
      // Pricing per Square Meter
      if (material === '3tab') pricePerUnit = 37;
      if (material === 'arch') pricePerUnit = 59;
      if (material === 'metal') pricePerUnit = 129;
    }
    
    const base = size * pricePerUnit;
    const min = Math.round(base * 0.9);
    const max = Math.round(base * 1.2); // +20% for steep pitch/repairs
    
    return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
  }

  const filteredPortfolio = filter === 'All' || filter === 'Todos' 
    ? t.portfolio.items 
    : t.portfolio.items.filter(item => item.cat === filter || 
      (filter === 'Asfaltica' && item.cat === 'Asphalt') || 
      (filter === 'Plano' && item.cat === 'Flat'))

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      {/* Navigation - Premium Consumer */}
      <nav className="w-full bg-white border-b border-[#E2E8F0] sticky top-0 z-40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-bold text-2xl tracking-tight flex items-center gap-2 text-[#1E3A8A]">
            <Shield className="w-6 h-6 text-[#2563EB]" />
            SHELTER<span className="text-[#3B82F6]">PRO</span>
          </div>
          <div className="hidden lg:flex gap-8 font-semibold text-sm text-[#475569]">
            <a href="#services" className="hover:text-[#2563EB] transition-colors duration-200">{t.nav.srv}</a>
            <a href="#portfolio" className="hover:text-[#2563EB] transition-colors duration-200">{t.nav.port}</a>
            <a href="#process" className="hover:text-[#2563EB] transition-colors duration-200">{t.nav.proc}</a>
            <a href="#quote" className="hover:text-[#2563EB] transition-colors duration-200">{t.nav.est}</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleRegion}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0] transition-colors text-xs font-bold active:scale-[0.97]"
            >
              {region === 'usa' ? 'USA' : 'MEX'}
            </button>
            <a href="#quote" className="hidden sm:inline-block bg-[#2563EB] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#1D4ED8] transition-all duration-200 active:scale-[0.97] shadow-lg shadow-blue-500/20">
              {t.nav.book}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 bg-gradient-to-b from-[#EFF6FF] to-white relative overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DBEAFE] text-[#1D4ED8] font-bold text-xs tracking-widest mb-6 rounded-full">
              <CheckCircle2 className="w-4 h-4" /> {t.trust}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-[#1E3A8A]">
              {t.hero.t1}<br/>
              <span className="text-[#2563EB]">{t.hero.t2}</span>
            </h1>
            <p className="text-lg md:text-xl text-[#475569] mb-10 max-w-lg leading-relaxed">
              {t.hero.p}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="bg-[#2563EB] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1D4ED8] transition-all duration-200 active:scale-[0.97] flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25">
                {t.hero.btn1} <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="bg-white text-[#1E3A8A] border-2 border-[#DBEAFE] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F8FAFC] transition-all duration-200 active:scale-[0.97] text-center">
                {t.hero.btn2}
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/3] rounded-3xl bg-[#1E3A8A] overflow-hidden shadow-2xl relative">
              <img src="https://placehold.co/800x600/1E3A8A/ffffff?text=Premium+Roof" alt="Roof" className="w-full h-full object-cover" />
              {/* Trust Badge Overlay */}
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-[#EFF6FF] rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#2563EB] fill-current" />
                </div>
                <div>
                  <div className="font-bold text-[#1E3A8A]">5.0 Rating</div>
                  <div className="text-xs text-[#64748B] font-semibold">100+ Reviews</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="mb-16 max-w-2xl text-center mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A8A] mb-4 tracking-tight">{t.srv.title}</h2>
            <p className="text-lg text-[#64748B]">{t.srv.p}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.srv.items.map((srv, i) => {
              const Icon = srv.icon
              return (
                <div key={i} className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-[#2563EB]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#1E3A8A]">{srv.title}</h3>
                  <p className="text-[#64748B] leading-relaxed">{srv.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* V2: Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-[#1E3A8A] text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">{t.portfolio.title}</h2>
              <p className="text-lg text-[#BFDBFE]">{t.portfolio.p}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {t.portfolio.filters.map(f => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2.5 rounded-full font-bold text-sm transition-colors ${filter === f ? 'bg-white text-[#1E3A8A]' : 'bg-[#1E40AF] text-[#BFDBFE] hover:bg-[#2563EB]'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPortfolio.map((item, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden cursor-pointer bg-[#1E40AF]">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent flex flex-col justify-end p-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="bg-[#2563EB] text-white w-fit px-3 py-1 rounded-full font-bold text-xs uppercase mb-3">{item.cat}</span>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-[#BFDBFE] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2: The Process */}
      <section id="process" className="py-24 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A8A] mb-4 tracking-tight">{t.process.title}</h2>
            <p className="text-lg text-[#64748B]">{t.process.p}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.process.steps.map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-[#E2E8F0] relative overflow-hidden">
                <div className="text-6xl font-black text-[#F1F5F9] absolute top-4 right-4 pointer-events-none">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-3 relative z-10">{step.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2: Social Proof / Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-16">
            <div className="flex gap-1 mb-4">
              {[1,2,3,4,5].map(star => <Star key={star} className="w-6 h-6 text-[#F59E0B] fill-current" />)}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] text-center tracking-tight">{t.testimonials.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {t.testimonials.items.map((test, i) => (
              <div key={i} className="bg-[#F8FAFC] p-10 rounded-3xl border border-[#E2E8F0]">
                <p className="text-lg text-[#334155] font-medium leading-relaxed italic mb-8">
                  {test.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#DBEAFE] rounded-full flex items-center justify-center text-[#1D4ED8] font-bold text-xl">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1E3A8A]">{test.name}</h4>
                    <p className="text-[#64748B] text-sm font-semibold">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2: FAQ */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A8A] mb-12 text-center tracking-tight">{t.faq.title}</h2>
          <div className="space-y-4">
            {t.faq.items.map((item, i) => (
              <div key={i} className="border border-[#E2E8F0] rounded-2xl bg-white overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F8FAFC] transition-colors"
                >
                  <span className="font-bold text-[#1E3A8A] text-lg pr-8">{item.q}</span>
                  <ChevronDown className={`w-6 h-6 text-[#2563EB] flex-shrink-0 transform transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="p-6 pt-0 text-[#64748B] leading-relaxed font-medium">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="quote" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="bg-[#1E3A8A] rounded-3xl shadow-2xl overflow-hidden flex flex-col xl:flex-row">
            
            <div className="flex-1 p-10 lg:p-16 text-white">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{t.quote.title}</h2>
                <p className="text-[#BFDBFE] text-lg">{t.quote.p}</p>
              </div>

              <div className="space-y-12">
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="font-bold text-[#BFDBFE]">{t.quote.areaTitle}</label>
                    <span className="font-bold text-white text-xl">{size} {t.quote.areaUnit}</span>
                  </div>
                  <input 
                    type="range" 
                    min={region === 'usa' ? 15 : 150} 
                    max={region === 'usa' ? 80 : 800} 
                    step={region === 'usa' ? 1 : 10}
                    value={size} 
                    onChange={(e) => setSize(Number(e.target.value))}
                    className="w-full accent-white h-2 bg-[#1E40AF] rounded appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-[#93C5FD] mt-4 font-semibold">
                    <span>{t.quote.areaMin}</span>
                    <span>{t.quote.areaMax}</span>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-[#BFDBFE] block mb-6">{t.quote.reqTitle}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {t.quote.reqOptions.map(opt => (
                      <button 
                        key={opt.id}
                        onClick={() => handleMaterialChange(opt.id)}
                        className={`p-4 rounded-2xl border-2 font-bold text-sm transition-all duration-200 ease-out active:scale-[0.97] ${
                          material === opt.id 
                          ? 'border-white bg-white text-[#1E3A8A]' 
                          : 'border-[#1E40AF] text-[#BFDBFE] hover:border-[#3B82F6]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:w-[450px] bg-white text-[#0F172A] p-10 lg:p-16 flex flex-col justify-center border-l border-[#E2E8F0]">
              <h3 className="font-bold uppercase tracking-widest text-sm text-[#64748B] mb-8">{t.quote.totalTitle}</h3>
              
              <div className={`mb-8 transition-all duration-200 ${isCalculating ? 'blur-md opacity-50' : 'blur-0 opacity-100'}`}>
                <span className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1E3A8A]">
                  {getPriceRange()}
                </span>
              </div>
              
              <p className="text-[#64748B] text-sm mb-12 border-b border-[#E2E8F0] pb-10 leading-relaxed font-medium">
                {t.quote.totalDesc}
              </p>
              
              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-widest text-[#64748B]">{t.quote.ctaTitle}</label>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-[#F8FAFC] border-2 border-[#E2E8F0] rounded-2xl px-5 py-5 text-[#0F172A] placeholder-[#94A3B8] outline-none focus:border-[#2563EB] transition-colors font-semibold" 
                />
                <button className="w-full bg-[#2563EB] text-white font-bold py-5 rounded-2xl hover:bg-[#1D4ED8] active:scale-[0.97] transition-all duration-200 text-lg shadow-lg shadow-blue-500/25">
                  {t.quote.ctaBtn}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8FAFC] text-[#475569] pt-20 pb-10 border-t border-[#E2E8F0]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="font-bold text-2xl tracking-tight flex items-center gap-2 mb-6 text-[#1E3A8A]">
                <Shield className="w-5 h-5 text-[#2563EB]" />
                SHELTER<span className="text-[#3B82F6]">PRO</span>
              </div>
              <p className="text-[#64748B] max-w-sm mb-6 leading-relaxed">
                {t.footer.desc}
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 tracking-widest text-xs uppercase text-[#94A3B8]">{t.footer.contact}</h4>
              <ul className="space-y-3 font-semibold text-[#475569] text-sm">
                <li>+1 (555) 222-ROOF</li>
                <li>quotes@shelterpro.com</li>
                <li>Dallas, TX</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 tracking-widest text-xs uppercase text-[#94A3B8]">{t.footer.legal}</h4>
              <ul className="space-y-3 font-semibold text-[#475569] text-sm">
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Warranties</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#E2E8F0] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold tracking-widest text-[#94A3B8] uppercase">
            <p>{t.footer.rights}</p>
            <p className="text-[#2563EB]">{t.footer.tag}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
