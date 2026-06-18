"use client"
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ThermometerSnowflake, Wind, Flame, ChevronRight, Star, ChevronDown, ShieldCheck } from 'lucide-react'
import { useState } from 'react'

const dict = {
  usa: {
    nav: { srv: 'Services', port: 'Installations', proc: 'Process', faq: 'FAQ', est: 'Sizing Calc', book: 'Emergency' },
    hero: { 
      t1: 'Absolute Climate', 
      t2: 'Control.', 
      p: 'High-efficiency heating, ventilation, and air conditioning systems engineered for perfect indoor air quality and zero downtime.',
      btn1: 'Get a System Quote',
      btn2: '24/7 Emergency Service'
    },
    trust: 'A+ Rated & EPA Certified',
    srv: {
      title: 'Our Capabilities',
      p: 'From residential split systems to commercial chiller plants. We master the thermodynamics of comfort.',
      items: [
        { icon: ThermometerSnowflake, title: "AC Installation", desc: "Ultra-high SEER variable speed systems that drop energy bills while maximizing cooling." },
        { icon: Flame, title: "Furnace & Heat Pumps", desc: "Reliable winter heating solutions including dual-fuel systems and geothermal heat pumps." },
        { icon: Wind, title: "Air Quality (IAQ)", desc: "HEPA filtration, UV scrubbers, and whole-home humidification for clinical-grade air." }
      ]
    },
    portfolio: {
      title: 'Recent Installations',
      p: 'Precision ductwork and immaculate equipment staging. Filter by system type.',
      filters: ['All', 'Residential', 'Commercial', 'Ductless'],
      items: [
        { cat: 'Residential', title: '20 SEER Variable Speed', desc: 'Complete system replacement with custom fabricated sheet metal plenums.', img: 'https://placehold.co/800x600/0EA5E9/ffffff?text=AC+Condenser' },
        { cat: 'Commercial', title: 'Rooftop RTU Swap', desc: 'Helicopter lift installation of two 15-ton packaged units for a retail center.', img: 'https://placehold.co/800x600/0284C7/ffffff?text=Commercial+RTU' },
        { cat: 'Ductless', title: 'Multi-Zone Mini Split', desc: '5-zone heat pump system providing independent climate control for an older home.', img: 'https://placehold.co/800x600/38BDF8/ffffff?text=Mini+Split' },
        { cat: 'Residential', title: 'Furnace & IAQ', desc: '98% AFUE modulating gas furnace paired with a hospital-grade UV air scrubber.', img: 'https://placehold.co/800x600/EF4444/ffffff?text=Furnace+System' }
      ]
    },
    process: {
      title: 'The Installation Protocol',
      p: 'We do not guess. We engineer your comfort using strict Manual J load calculations.',
      steps: [
        { num: '01', title: 'Thermal Load Calc', desc: 'We measure your windows, insulation, and square footage to calculate the exact BTUs required.' },
        { num: '02', title: 'System Selection', desc: 'We present Good/Better/Best options based on your desired SEER rating and budget.' },
        { num: '03', title: 'Precision Install', desc: 'Our technicians braze with nitrogen, pull deep vacuums, and fabricate custom transitions.' },
        { num: '04', title: 'Efficiency Audit', desc: 'We test static pressure and airflow across all registers to ensure the system performs at 100% capacity.' }
      ]
    },
    testimonials: {
      title: 'Client Comfort',
      items: [
        { name: 'Sarah L.', role: 'Homeowner', text: '"Our AC died on a 100-degree Sunday. Aerotherm answered the phone at 2 AM, brought temporary spot coolers, and had a new 18-SEER system installed by Tuesday. Lifesavers."' },
        { name: 'Thomas G.', role: 'Restaurant Owner', text: '"The humidity in our dining room was terrible. Aerotherm diagnosed a severely oversized unit installed by a previous contractor. They resized it, fixed the ductwork, and our energy bills dropped 30%."' }
      ]
    },
    faq: {
      title: 'HVAC Knowledge Base',
      items: [
        { q: 'What does SEER mean?', a: 'Seasonal Energy Efficiency Ratio. Think of it like MPG for your car. A 14 SEER is standard, while a 20+ SEER system uses significantly less electricity to produce the same amount of cooling.' },
        { q: 'Why is my second floor always hotter?', a: 'This is usually a ductwork or sizing issue. Heat rises, and single-stage systems often satisfy the thermostat downstairs before pushing enough air upstairs. A variable-speed system or a zoned damper system fixes this.' },
        { q: 'How often should I service my system?', a: 'Bi-annually. We recommend an AC tune-up in the Spring (checking refrigerant levels and washing coils) and a Furnace tune-up in the Fall (checking the heat exchanger and burners).' }
      ]
    },
    quote: {
      title: 'System Sizing Tool',
      p: 'Estimate the required AC Tonnage based on square footage and calculate preliminary costs.',
      areaTitle: 'Conditioned Space',
      areaUnit: 'sq ft',
      areaMin: 'Small Condo (800)',
      areaMax: 'Large Home (4,000+)',
      reqTitle: 'Efficiency Goal (SEER)',
      reqOptions: [
        { id: '14', label: 'Standard (14-15 SEER)' },
        { id: '16', label: 'High (16-17 SEER)' },
        { id: '20', label: 'Ultra (18-22 SEER)' }
      ],
      totalTitle: 'Estimated Investment',
      totalDesc: '*This is a baseline estimate for equipment and standard installation. Complex ductwork modifications are extra.',
      ctaTitle: 'Schedule In-Home Audit',
      ctaBtn: 'Book Technician'
    },
    footer: {
      desc: 'Mastering thermodynamics to deliver perfect indoor environments.',
      contact: 'Dispatch Center',
      legal: 'Licenses & Legal',
      rights: '© 2026 Arasue Forge LLC. All rights reserved.',
      tag: 'Breathe easy.'
    }
  },
  mex: {
    nav: { srv: 'Servicios', port: 'Instalaciones', proc: 'Proceso', faq: 'FAQ', est: 'Calculadora', book: 'Urgencias' },
    hero: { 
      t1: 'Control Climático', 
      t2: 'Absoluto.', 
      p: 'Sistemas de calefacción, ventilación y aire acondicionado de alta eficiencia diseñados para una calidad de aire interior perfecta.',
      btn1: 'Cotizar un Sistema',
      btn2: 'Servicio de Emergencia 24/7'
    },
    trust: 'Certificados por la EPA',
    srv: {
      title: 'Nuestras Capacidades',
      p: 'Desde minisplits residenciales hasta chillers comerciales. Dominamos la termodinámica del confort.',
      items: [
        { icon: ThermometerSnowflake, title: "Instalación de AC", desc: "Sistemas Inverter de alto SEER que reducen la factura de luz mientras maximizan el enfriamiento." },
        { icon: Flame, title: "Calefacción y Bombas", desc: "Soluciones confiables para el invierno, incluyendo sistemas de bomba de calor de alta eficiencia." },
        { icon: Wind, title: "Calidad de Aire (IAQ)", desc: "Filtración HEPA, purificadores UV y control de humedad para un aire de grado clínico." }
      ]
    },
    portfolio: {
      title: 'Instalaciones Recientes',
      p: 'Conductos de precisión y montaje de equipo inmaculado. Filtra por tipo de sistema.',
      filters: ['Todos', 'Residencial', 'Comercial', 'Minisplit'],
      items: [
        { cat: 'Residencial', title: 'Sistema Inverter 20 SEER', desc: 'Reemplazo completo con conductos de lámina galvanizada fabricados a medida.', img: 'https://placehold.co/800x600/0EA5E9/ffffff?text=Condensadora+AC' },
        { cat: 'Comercial', title: 'Cambio de Equipo RTU', desc: 'Instalación con grúa de dos unidades paquete de 15 toneladas para una plaza comercial.', img: 'https://placehold.co/800x600/0284C7/ffffff?text=Equipo+Paquete' },
        { cat: 'Minisplit', title: 'Multi-Split Inverter', desc: 'Sistema de 5 zonas que proporciona control climático independiente para una casa antigua.', img: 'https://placehold.co/800x600/38BDF8/ffffff?text=Minisplit' },
        { cat: 'Residencial', title: 'Calefacción e IAQ', desc: 'Horno de gas modulante emparejado con un purificador de aire UV de grado hospitalario.', img: 'https://placehold.co/800x600/EF4444/ffffff?text=Sistema+Calefaccion' }
      ]
    },
    process: {
      title: 'Protocolo de Instalación',
      p: 'No adivinamos. Diseñamos tu confort utilizando estrictos cálculos de carga térmica Manual J.',
      steps: [
        { num: '01', title: 'Cálculo Térmico', desc: 'Medimos ventanas, aislamiento y metros cuadrados para calcular los BTUs exactos requeridos.' },
        { num: '02', title: 'Selección de Equipo', desc: 'Presentamos opciones Bueno/Mejor/Premium basadas en la eficiencia SEER deseada.' },
        { num: '03', title: 'Instalación de Precisión', desc: 'Nuestros técnicos soldan con nitrógeno, hacen vacío profundo y fabrican transiciones a medida.' },
        { num: '04', title: 'Auditoría de Eficiencia', desc: 'Medimos presión estática y flujo de aire en todas las rejillas para asegurar el 100% de capacidad.' }
      ]
    },
    testimonials: {
      title: 'Confort del Cliente',
      items: [
        { name: 'Sarah L.', role: 'Propietaria', text: '"Nuestro AC murió un domingo a 40 grados. Aerotherm contestó a las 2 AM, trajo enfriadores portátiles temporales y para el martes instalaron un sistema nuevo de 18 SEER. Nos salvaron."' },
        { name: 'Thomas G.', role: 'Dueño de Restaurante', text: '"La humedad en el comedor era terrible. Aerotherm diagnosticó una unidad severamente sobredimensionada por un contratista anterior. La cambiaron, arreglaron los ductos y la luz bajó un 30%."' }
      ]
    },
    faq: {
      title: 'Base de Conocimientos HVAC',
      items: [
        { q: '¿Qué significa SEER?', a: 'Ratio de Eficiencia Energética Estacional. Piénsalo como los km/litro de tu auto. 14 SEER es estándar, mientras que un sistema 20+ SEER usa significativamente menos electricidad para enfriar lo mismo.' },
        { q: '¿Por qué mi segundo piso siempre está más caliente?', a: 'Generalmente es un problema de ductos o tamaño. El calor sube, y los sistemas de una etapa a menudo apagan el termostato abajo antes de empujar suficiente aire arriba. Un sistema Inverter o zonas separadas lo soluciona.' },
        { q: '¿Cada cuánto debo dar mantenimiento?', a: 'Dos veces al año. Recomendamos un servicio al AC en primavera (revisar gas y lavar serpentines) y a la calefacción en otoño (revisar quemadores y seguridad).' }
      ]
    },
    quote: {
      title: 'Calculadora de Tonelaje',
      p: 'Estima el Tonelaje de AC requerido basado en los metros cuadrados y calcula costos preliminares.',
      areaTitle: 'Área a Climatizar',
      areaUnit: 'm²',
      areaMin: 'Depto (80)',
      areaMax: 'Casa Grande (400+)',
      reqTitle: 'Meta de Eficiencia (SEER)',
      reqOptions: [
        { id: '14', label: 'Estándar (14-15 SEER)' },
        { id: '16', label: 'Alta (16-17 SEER)' },
        { id: '20', label: 'Ultra (18-22 SEER)' }
      ],
      totalTitle: 'Inversión Estimada',
      totalDesc: '*Esta es una estimación base para equipo e instalación estándar. Las modificaciones complejas de ductos tienen costo extra.',
      ctaTitle: 'Programar Auditoría',
      ctaBtn: 'Solicitar Técnico'
    },
    footer: {
      desc: 'Dominando la termodinámica para entregar entornos interiores perfectos.',
      contact: 'Centro de Despacho',
      legal: 'Licencias y Legal',
      rights: '© 2026 Arasue Forge LLC. Todos los derechos reservados.',
      tag: 'Respira tranquilo.'
    }
  }
}

export function HVAC() {
  const [region, setRegion] = useState<'usa' | 'mex'>('usa')
  const [areaSize, setAreaSize] = useState(2000) 
  const [seer, setSeer] = useState('16')
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

  const handleSeerChange = (val: string) => {
    setIsCalculating(true)
    setTimeout(() => {
      setSeer(val)
      setIsCalculating(false)
    }, 200)
  }

  const calculateTonnageAndPrice = () => {
    // Basic rule of thumb: 1 Ton per 500 sq ft
    let sqFt = areaSize;
    if (region === 'mex') sqFt = areaSize * 10.764;
    
    // Round to nearest 0.5 ton
    let tonnage = Math.round((sqFt / 500) * 2) / 2;
    if (tonnage < 1.5) tonnage = 1.5;
    if (tonnage > 5) tonnage = 5; // Max residential single unit size usually 5 tons
    
    // Price per ton based on SEER
    let pricePerTon = 0;
    if (seer === '14') pricePerTon = 1800;
    if (seer === '16') pricePerTon = 2400;
    if (seer === '20') pricePerTon = 3500;
    
    const totalPrice = tonnage * pricePerTon;
    
    return {
      tons: tonnage,
      price: totalPrice
    }
  }

  const estimate = calculateTonnageAndPrice();

  const filteredPortfolio = filter === 'All' || filter === 'Todos' 
    ? t.portfolio.items 
    : t.portfolio.items.filter(item => item.cat === filter || 
      (filter === 'Residencial' && item.cat === 'Residential') || 
      (filter === 'Comercial' && item.cat === 'Commercial') || 
      (filter === 'Minisplit' && item.cat === 'Ductless'))

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans selection:bg-[#0EA5E9] selection:text-white">
      {/* Navigation - Climate Aesthetic (Cool Blue / Warm Red) */}
      <nav className="w-full bg-white border-b border-[#E0F2FE] sticky top-0 z-40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-black text-2xl tracking-tighter flex items-center gap-2">
            <ThermometerSnowflake className="w-7 h-7 text-[#0EA5E9]" />
            AERO<span className="text-[#EF4444]">THERM</span>
          </div>
          <div className="hidden lg:flex gap-8 font-bold text-sm text-[#334155] uppercase tracking-wide">
            <a href="#services" className="hover:text-[#0EA5E9] transition-colors duration-200">{t.nav.srv}</a>
            <a href="#portfolio" className="hover:text-[#0EA5E9] transition-colors duration-200">{t.nav.port}</a>
            <a href="#process" className="hover:text-[#0EA5E9] transition-colors duration-200">{t.nav.proc}</a>
            <a href="#quote" className="hover:text-[#0EA5E9] transition-colors duration-200">{t.nav.est}</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleRegion}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border-2 border-[#E0F2FE] text-[#0EA5E9] hover:bg-[#F0F9FF] transition-colors text-xs font-black uppercase tracking-wider active:scale-[0.97]"
            >
              {region === 'usa' ? 'USA' : 'MEX'}
            </button>
            <a href="#quote" className="hidden sm:inline-flex items-center gap-2 bg-[#EF4444] text-white px-6 py-2.5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#DC2626] transition-all duration-200 active:scale-[0.97] shadow-lg shadow-red-500/20">
              <Flame className="w-4 h-4" />
              {t.nav.book}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 relative overflow-hidden bg-[#F8FAFC]">
        {/* Abstract airflow background */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-30">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-transparent stroke-[#0EA5E9] stroke-[0.2]">
            <path d="M0,50 Q25,20 50,50 T100,50" />
            <path d="M0,60 Q25,30 50,60 T100,60" />
            <path d="M0,70 Q25,40 50,70 T100,70" />
          </svg>
        </div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E0F2FE] text-[#0EA5E9] font-black text-xs tracking-widest uppercase mb-6 rounded-full shadow-sm">
              <ShieldCheck className="w-4 h-4" /> {t.trust}
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1] mb-6 text-[#0F172A]">
              {t.hero.t1}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#EF4444]">{t.hero.t2}</span>
            </h1>
            <p className="text-lg md:text-xl text-[#475569] mb-10 max-w-lg leading-relaxed font-medium">
              {t.hero.p}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="bg-[#0EA5E9] text-white px-8 py-4 rounded-full font-black uppercase tracking-wider text-sm hover:bg-[#0284C7] transition-all duration-200 active:scale-[0.97] flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25">
                {t.hero.btn1} <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="bg-white text-[#EF4444] border-2 border-[#FEE2E2] px-8 py-4 rounded-full font-black uppercase tracking-wider text-sm hover:bg-[#FEF2F2] transition-all duration-200 active:scale-[0.97] text-center">
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
            <div className="aspect-square rounded-full bg-gradient-to-br from-[#E0F2FE] to-[#FEE2E2] p-8 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden border-8 border-white bg-white">
                <img src="https://placehold.co/800x800/0F172A/ffffff?text=HVAC+System" alt="HVAC" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="mb-16 max-w-2xl text-center mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] mb-4 tracking-tighter uppercase">{t.srv.title}</h2>
            <p className="text-lg text-[#64748B] font-medium">{t.srv.p}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.srv.items.map((srv, i) => {
              const Icon = srv.icon
              const color = i === 0 ? 'text-[#0EA5E9] bg-[#E0F2FE]' : (i === 1 ? 'text-[#EF4444] bg-[#FEE2E2]' : 'text-[#10B981] bg-[#D1FAE5]')
              
              return (
                <div key={i} className="p-10 rounded-[2rem] bg-[#F8FAFC] hover:bg-white border border-[#E2E8F0] hover:shadow-2xl transition-all duration-300 group">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ${color} transition-transform group-hover:scale-110 duration-300`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-[#0F172A] uppercase tracking-tight">{srv.title}</h3>
                  <p className="text-[#475569] leading-relaxed font-medium">{srv.desc}</p>
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
              <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase">{t.portfolio.title}</h2>
              <p className="text-lg text-[#94A3B8] font-medium">{t.portfolio.p}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {t.portfolio.filters.map(f => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2.5 rounded-full font-black uppercase text-xs tracking-widest transition-colors ${filter === f ? 'bg-[#0EA5E9] text-white' : 'bg-[#1E293B] text-[#94A3B8] hover:bg-[#334155]'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPortfolio.map((item, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden cursor-pointer bg-[#1E293B]">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out mix-blend-luminosity group-hover:mix-blend-normal" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent flex flex-col justify-end p-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="bg-white text-[#0F172A] w-fit px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-widest mb-3">{item.cat}</span>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{item.title}</h3>
                  <p className="text-[#94A3B8] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2: The Process */}
      <section id="process" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] mb-4 tracking-tighter uppercase">{t.process.title}</h2>
            <p className="text-lg text-[#64748B] font-medium">{t.process.p}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {t.process.steps.map((step, i) => (
              <div key={i} className="bg-[#F8FAFC] p-8 rounded-3xl border border-[#E2E8F0] relative overflow-hidden group hover:border-[#0EA5E9] transition-colors">
                <div className="text-7xl font-black text-[#E2E8F0] absolute -top-2 -right-2 pointer-events-none group-hover:text-[#E0F2FE] transition-colors">
                  {step.num}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-[#0F172A] mb-4 relative z-10">{step.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed font-medium relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2: Social Proof / Testimonials */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] text-center tracking-tighter uppercase mb-16">{t.testimonials.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {t.testimonials.items.map((test, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 relative">
                <div className="absolute top-8 right-8 flex gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 text-[#0EA5E9] fill-current" />)}
                </div>
                <p className="text-lg text-[#334155] font-medium leading-relaxed italic mb-8 pr-12">
                  {test.text}
                </p>
                <div>
                  <h4 className="font-black uppercase tracking-wide text-[#0F172A]">{test.name}</h4>
                  <p className="text-[#64748B] text-xs font-bold uppercase tracking-widest">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2: FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] mb-12 text-center tracking-tighter uppercase">{t.faq.title}</h2>
          <div className="space-y-4">
            {t.faq.items.map((item, i) => (
              <div key={i} className="border-2 border-[#F1F5F9] rounded-2xl bg-white overflow-hidden hover:border-[#E0F2FE] transition-colors">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-black uppercase tracking-wide text-[#0F172A] text-lg pr-8">{item.q}</span>
                  <ChevronDown className={`w-6 h-6 text-[#0EA5E9] flex-shrink-0 transform transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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
      <section id="quote" className="py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto">
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col xl:flex-row">
            
            <div className="flex-1 p-10 lg:p-16">
              <div className="mb-12">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-[#0F172A]">{t.quote.title}</h2>
                <p className="text-[#64748B] text-lg font-medium">{t.quote.p}</p>
              </div>

              <div className="space-y-12">
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="font-black uppercase tracking-widest text-xs text-[#94A3B8]">{t.quote.areaTitle}</label>
                    <span className="font-black text-[#0EA5E9] text-xl">{areaSize.toLocaleString()} {t.quote.areaUnit}</span>
                  </div>
                  <input 
                    type="range" 
                    min={region === 'usa' ? 800 : 80} 
                    max={region === 'usa' ? 5000 : 500} 
                    step={region === 'usa' ? 100 : 10}
                    value={areaSize} 
                    onChange={(e) => setAreaSize(Number(e.target.value))}
                    className="w-full accent-[#0EA5E9] h-3 bg-[#F1F5F9] rounded-full appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-[#94A3B8] mt-4 font-bold uppercase tracking-widest">
                    <span>{t.quote.areaMin}</span>
                    <span>{t.quote.areaMax}</span>
                  </div>
                </div>

                <div>
                  <label className="font-black uppercase tracking-widest text-xs text-[#94A3B8] block mb-6">{t.quote.reqTitle}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {t.quote.reqOptions.map(opt => (
                      <button 
                        key={opt.id}
                        onClick={() => handleSeerChange(opt.id)}
                        className={`p-5 rounded-2xl border-2 font-black uppercase text-xs tracking-wider transition-all duration-200 ease-out active:scale-[0.97] ${
                          seer === opt.id 
                          ? 'border-[#0EA5E9] bg-[#F0F9FF] text-[#0EA5E9]' 
                          : 'border-[#F1F5F9] text-[#64748B] hover:border-[#CBD5E1]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:w-[450px] bg-[#0EA5E9] text-white p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
              
              <h3 className="font-black uppercase tracking-widest text-xs text-[#E0F2FE] mb-8">{t.quote.totalTitle}</h3>
              
              <div className={`mb-6 transition-all duration-200 ${isCalculating ? 'blur-md opacity-50' : 'blur-0 opacity-100'}`}>
                <div className="text-4xl md:text-5xl font-black tracking-tighter mb-2">
                  ${estimate.price.toLocaleString()}
                </div>
                <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-bold tracking-widest uppercase">
                  {estimate.tons} Tons Required
                </div>
              </div>
              
              <p className="text-[#E0F2FE] text-xs mb-12 pb-10 border-b border-[#38BDF8] leading-relaxed font-semibold uppercase tracking-wide">
                {t.quote.totalDesc}
              </p>
              
              <div className="space-y-4">
                <label className="block text-[10px] font-black uppercase tracking-widest text-[#E0F2FE]">{t.quote.ctaTitle}</label>
                <input 
                  type="text" 
                  placeholder="Zip Code / Código Postal" 
                  className="w-full bg-white border-none rounded-2xl px-5 py-5 text-[#0F172A] placeholder-[#94A3B8] outline-none focus:ring-4 focus:ring-white/30 font-bold" 
                />
                <button className="w-full bg-[#0F172A] text-white font-black uppercase tracking-widest text-xs py-5 rounded-2xl hover:bg-[#1E293B] active:scale-[0.97] transition-all duration-200">
                  {t.quote.ctaBtn}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-[#94A3B8] pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="font-black text-2xl tracking-tighter flex items-center gap-2 mb-6 text-white">
                <ThermometerSnowflake className="w-6 h-6 text-[#0EA5E9]" />
                AERO<span className="text-[#EF4444]">THERM</span>
              </div>
              <p className="max-w-sm mb-6 leading-relaxed font-medium">
                {t.footer.desc}
              </p>
            </div>
            <div>
              <h4 className="font-black mb-4 tracking-widest text-[10px] uppercase text-[#475569]">{t.footer.contact}</h4>
              <ul className="space-y-3 font-bold text-sm tracking-wide">
                <li>+1 (555) AIR-HVAC</li>
                <li>service@aerotherm.io</li>
                <li>Austin, TX</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4 tracking-widest text-[10px] uppercase text-[#475569]">{t.footer.legal}</h4>
              <ul className="space-y-3 font-bold text-sm tracking-wide">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Maintenance Plans</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#1E293B] flex justify-between items-center text-[10px] font-black tracking-widest text-[#475569] uppercase">
            <p>{t.footer.rights}</p>
            <p className="text-[#0EA5E9]">{t.footer.tag}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
