"use client"
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, HardHat, Pickaxe, Ruler, Truck, ChevronDown, Star, CheckCircle2, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const dict = {
  usa: {
    nav: { srv: 'Services', port: 'Projects', proc: 'Process', faq: 'FAQ', est: 'Calculator', book: 'Get Quote' },
    hero: { 
      t1: 'SOLID.', 
      t2: 'UNBREAKABLE.', 
      p: 'Industrial-grade concrete solutions for commercial and residential foundations. Built to withstand everything.',
      btn1: 'Calculate Volume',
      btn2: 'View Past Work'
    },
    trust: 'Engineered For',
    srv: {
      title: 'Our Capabilities',
      p: 'Heavy-duty pours and structural reinforcement executed with absolute precision.',
      items: [
        { icon: Truck, title: "Commercial Pouring", desc: "Large-scale continuous pours for warehouses, parking structures, and industrial facilities." },
        { icon: Ruler, title: "Precision Flatwork", desc: "Driveways, patios, and sidewalks with perfect grading and flawless finishing." },
        { icon: Pickaxe, title: "Demolition & Prep", desc: "Complete site clearing, excavation, and structural reinforcement before the pour." }
      ]
    },
    portfolio: {
      title: 'Selected Projects',
      p: 'We let our structural integrity speak for itself. Filter by project scope.',
      filters: ['All', 'Commercial', 'Residential', 'Infrastructure'],
      items: [
        { cat: 'Commercial', title: 'Logistics Hub Alpha', desc: '15,000 sq ft warehouse floor poured in a single continuous 24-hour shift.', img: 'https://placehold.co/800x600/222222/ffffff?text=Warehouse+Floor' },
        { cat: 'Infrastructure', title: 'Highway 42 Retaining', desc: 'Reinforced 30ft retaining walls engineered for extreme soil pressure.', img: 'https://placehold.co/800x600/333333/ffffff?text=Retaining+Wall' },
        { cat: 'Residential', title: 'Estate Driveway', desc: 'Premium exposed aggregate finish for a luxury 400ft driveway.', img: 'https://placehold.co/800x600/444444/ffffff?text=Exposed+Aggregate' },
        { cat: 'Commercial', title: 'Downtown Plaza', desc: 'Colored and stamped concrete designed for heavy pedestrian traffic.', img: 'https://placehold.co/800x600/111111/ffffff?text=Stamped+Concrete' }
      ]
    },
    process: {
      title: 'How We Pour',
      p: 'Eliminating delays and costly mistakes through rigorous planning and execution.',
      steps: [
        { num: '01', title: 'Site Engineering & Specs', desc: 'We verify soil conditions, load requirements, and grading before a single truck is dispatched.' },
        { num: '02', title: 'Prep, Forms & Rebar', desc: 'Flawless formwork and dense rebar grids laid out by master steelworkers for maximum tensile strength.' },
        { num: '03', title: 'The Pour & Cure', desc: 'Continuous pouring with industrial vibrators to eliminate air pockets, followed by chemical curing for surface hardness.' }
      ]
    },
    testimonials: {
      title: 'Built on Trust',
      items: [
        { name: 'David R.', role: 'General Contractor', text: '"Other crews delayed our warehouse schedule for weeks due to logistics. Slabworks coordinated 40 trucks and poured 15,000 sq ft perfectly in one weekend. Unbelievable efficiency."' },
        { name: 'Sarah M.', role: 'Property Developer', text: '"Their attention to the sub-base preparation is what separates them. No cracking, no settling. Just a perfectly level foundation that passed inspection instantly."' }
      ]
    },
    faq: {
      title: 'Common Questions',
      items: [
        { q: 'How do you prevent the concrete from cracking?', a: 'All concrete eventually experiences micro-cracking, but we control it strategically using perfectly spaced expansion joints, high-grade rebar grids, and proper chemical curing compounds to minimize shrinkage.' },
        { q: 'Can you pour in cold or rainy weather?', a: 'Yes, but it requires specific additives. We use accelerators and thermal blankets in winter, and vapor retarders during rain to ensure the water-cement ratio is never compromised.' },
        { q: 'Do you handle the excavation and site prep?', a: 'Absolutely. We prefer handling the excavation and sub-base grading ourselves. If the base isn\'t perfect, the concrete won\'t last. We control the whole process.' }
      ]
    },
    quote: {
      title: 'Concrete Calculator',
      p: 'Calculate your required cubic yardage and estimate costs instantly.',
      areaTitle: 'Surface Area',
      areaUnit: 'sq ft',
      areaMin: 'Small Patio (100)',
      areaMax: 'Warehouse (10,000+)',
      reqTitle: 'Thickness / Depth',
      reqOptions: [
        { id: '4', label: '4 Inches (Standard)' },
        { id: '6', label: '6 Inches (Heavy)' },
        { id: '8', label: '8 Inches (Industrial)' }
      ],
      totalTitle: 'Material Estimate',
      totalDesc: '*Price includes standard mix and delivery. Labor and site prep are quoted separately.',
      ctaTitle: 'Schedule Site Visit',
      ctaBtn: 'Dispatch Estimator'
    },
    footer: {
      desc: 'The backbone of modern infrastructure. We pour the foundations of the future.',
      contact: 'Dispatch',
      legal: 'Legal',
      rights: '© 2026 Arasue Forge LLC. All rights reserved.',
      tag: 'Forged in concrete.'
    }
  },
  mex: {
    nav: { srv: 'Servicios', port: 'Proyectos', proc: 'Proceso', faq: 'FAQ', est: 'Calculadora', book: 'Cotizar' },
    hero: { 
      t1: 'SÓLIDO.', 
      t2: 'IRROMPIBLE.', 
      p: 'Soluciones de concreto de grado industrial para cimientos comerciales y residenciales. Construido para resistir todo.',
      btn1: 'Calcular Volumen',
      btn2: 'Ver Trabajo Previo'
    },
    trust: 'Diseñado Para',
    srv: {
      title: 'Nuestras Capacidades',
      p: 'Colados de uso rudo y refuerzo estructural ejecutados con absoluta precisión.',
      items: [
        { icon: Truck, title: "Colado Comercial", desc: "Colados continuos a gran escala para almacenes, estructuras de estacionamiento e instalaciones industriales." },
        { icon: Ruler, title: "Trabajo Plano de Precisión", desc: "Entradas, patios y aceras con nivelación perfecta y acabados impecables." },
        { icon: Pickaxe, title: "Demolición y Prep", desc: "Limpieza completa del sitio, excavación y refuerzo estructural antes del colado." }
      ]
    },
    portfolio: {
      title: 'Proyectos Seleccionados',
      p: 'Dejamos que nuestra integridad estructural hable por sí misma. Filtra por tipo de proyecto.',
      filters: ['Todos', 'Comercial', 'Residencial', 'Infraestructura'],
      items: [
        { cat: 'Comercial', title: 'Centro Logístico Alfa', desc: 'Piso de almacén de 1,500 m² colado en un solo turno continuo de 24 horas.', img: 'https://placehold.co/800x600/222222/ffffff?text=Piso+Industrial' },
        { cat: 'Infraestructura', title: 'Muro Autopista 42', desc: 'Muros de contención de 9 metros diseñados para extrema presión de suelo.', img: 'https://placehold.co/800x600/333333/ffffff?text=Muro+de+Contencion' },
        { cat: 'Residencial', title: 'Entrada de Finca', desc: 'Acabado premium de agregado expuesto para una entrada de lujo de 120m.', img: 'https://placehold.co/800x600/444444/ffffff?text=Concreto+Lavado' },
        { cat: 'Comercial', title: 'Plaza Centro', desc: 'Concreto coloreado y estampado diseñado para tráfico peatonal pesado.', img: 'https://placehold.co/800x600/111111/ffffff?text=Concreto+Estampado' }
      ]
    },
    process: {
      title: 'Cómo Colamos',
      p: 'Eliminamos retrasos y errores costosos a través de una planeación y ejecución rigurosa.',
      steps: [
        { num: '01', title: 'Ingeniería de Sitio', desc: 'Verificamos condiciones del suelo, carga y nivelación antes de enviar un solo camión.' },
        { num: '02', title: 'Cimbras y Acero', desc: 'Cimbrado impecable y parrillas de varilla armadas por maestros fierreros para máxima fuerza de tensión.' },
        { num: '03', title: 'Colado y Curado', desc: 'Colado continuo con vibradores industriales para eliminar bolsas de aire, seguido de curado químico.' }
      ]
    },
    testimonials: {
      title: 'Construido con Confianza',
      items: [
        { name: 'David R.', role: 'Contratista General', text: '"Otros contratistas retrasaron nuestra bodega por semanas. Slabworks coordinó 40 ollas y coló 1,500 m² a la perfección en un fin de semana. Eficiencia increíble."' },
        { name: 'Sarah M.', role: 'Desarrolladora Inmobiliaria', text: '"Su atención a la preparación de la base es lo que los separa del resto. Sin grietas, sin hundimientos. Solo una cimentación perfectamente nivelada."' }
      ]
    },
    faq: {
      title: 'Preguntas Comunes',
      items: [
        { q: '¿Cómo evitan que el concreto se agriete?', a: 'Todo el concreto experimenta micro-fisuras, pero las controlamos estratégicamente usando juntas de dilatación perfectas, acero de alta resistencia y curado químico.' },
        { q: '¿Pueden colar en clima frío o con lluvia?', a: 'Sí, pero requiere aditivos. Usamos acelerantes y mantas térmicas en invierno, y retardadores de vapor en la lluvia para asegurar que la proporción agua-cemento no se altere.' },
        { q: '¿Se encargan de la excavación y preparación del terreno?', a: 'Absolutamente. Preferimos hacer el movimiento de tierras nosotros mismos. Si la base no es perfecta, el concreto fallará. Nosotros controlamos todo el proceso.' }
      ]
    },
    quote: {
      title: 'Calculadora de Concreto',
      p: 'Calcula los metros cúbicos requeridos y estima costos al instante.',
      areaTitle: 'Área de Superficie',
      areaUnit: 'm²',
      areaMin: 'Patio Pequeño (10)',
      areaMax: 'Almacén (1,000+)',
      reqTitle: 'Grosor / Profundidad',
      reqOptions: [
        { id: '10', label: '10 cm (Estándar)' },
        { id: '15', label: '15 cm (Pesado)' },
        { id: '20', label: '20 cm (Industrial)' }
      ],
      totalTitle: 'Presupuesto de Material',
      totalDesc: '*El precio incluye mezcla estándar y entrega. La mano de obra y prep se cotizan por separado.',
      ctaTitle: 'Programar Visita',
      ctaBtn: 'Enviar Estimador'
    },
    footer: {
      desc: 'La columna vertebral de la infraestructura moderna. Colamos los cimientos del futuro.',
      contact: 'Despacho',
      legal: 'Legal',
      rights: '© 2026 Arasue Forge LLC. Todos los derechos reservados.',
      tag: 'Forjado en concreto.'
    }
  }
}

export function ConcreteCompany() {
  const [region, setRegion] = useState<'usa' | 'mex'>('usa')
  const [yardSize, setYardSize] = useState(1000) 
  const [thickness, setThickness] = useState(region === 'usa' ? '4' : '10')
  const [isCalculating, setIsCalculating] = useState(false)
  const [filter, setFilter] = useState('All')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  
  const reduce = useReducedMotion()
  const t = dict[region]

  // Translation sync
  const toggleRegion = () => {
    setIsCalculating(true)
    setTimeout(() => {
      if (region === 'usa') {
        setRegion('mex')
        setYardSize(Math.round(yardSize / 10.764))
        setThickness('10')
        setFilter('Todos')
      } else {
        setRegion('usa')
        setYardSize(Math.round(yardSize * 10.764))
        setThickness('4')
        setFilter('All')
      }
      setIsCalculating(false)
    }, 300)
  }

  const handleThicknessChange = (val: string) => {
    setIsCalculating(true)
    setTimeout(() => {
      setThickness(val)
      setIsCalculating(false)
    }, 200)
  }

  const getPrice = () => {
    if (region === 'usa') {
      const areaSqFt = yardSize;
      const thickInches = parseInt(thickness);
      const cubicYards = (areaSqFt * (thickInches / 12)) / 27;
      return Math.round(cubicYards * 150);
    } else {
      const areaM2 = yardSize;
      const thickCm = parseInt(thickness);
      const cubicMeters = areaM2 * (thickCm / 100);
      return Math.round(cubicMeters * 130);
    }
  }

  const filteredPortfolio = filter === 'All' || filter === 'Todos' 
    ? t.portfolio.items 
    : t.portfolio.items.filter(item => item.cat === filter)

  return (
    <div className="min-h-screen bg-[#111111] text-[#EEEEEE] font-sans selection:bg-[#FF3300] selection:text-white">
      {/* Navigation - Brutalist */}
      <nav className="w-full bg-[#111111] border-b border-[#333333] sticky top-0 z-40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-black text-2xl tracking-tighter uppercase flex items-center gap-2">
            SLAB<span className="text-[#666666]">WORKS</span>
          </div>
          <div className="hidden lg:flex gap-6 font-bold text-xs tracking-widest uppercase text-[#888888]">
            <a href="#services" className="hover:text-white transition-colors duration-200">{t.nav.srv}</a>
            <a href="#portfolio" className="hover:text-white transition-colors duration-200">{t.nav.port}</a>
            <a href="#process" className="hover:text-white transition-colors duration-200">{t.nav.proc}</a>
            <a href="#quote" className="hover:text-white transition-colors duration-200">{t.nav.est}</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleRegion}
              className="flex items-center gap-2 px-3 py-1.5 border border-[#333333] hover:bg-[#222222] transition-colors text-sm font-bold uppercase active:scale-[0.97]"
            >
              {region === 'usa' ? '🇺🇸 USA' : '🇲🇽 MEX'}
            </button>
            <a href="#quote" className="hidden sm:inline-block bg-[#EEEEEE] text-[#111111] px-6 py-2.5 font-black uppercase tracking-wider hover:bg-white transition-all duration-200 active:scale-[0.97]">
              {t.nav.book}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/concrete-wall.png")' }}></div>
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-[#555555]">
              {t.hero.t1}<br/>{t.hero.t2}
            </h1>
            <p className="text-xl md:text-2xl text-[#888888] mb-12 max-w-2xl mx-auto font-medium">
              {t.hero.p}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#quote" className="bg-[#EEEEEE] text-[#111111] px-10 py-5 font-black text-xl uppercase tracking-wider hover:bg-white transition-all duration-200 active:scale-[0.97] flex items-center justify-center gap-3">
                {t.hero.btn1} <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-[#0A0A0A] border-t border-[#333333]">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">{t.srv.title}</h2>
            <p className="text-xl text-[#888888] max-w-2xl">{t.srv.p}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.srv.items.map((srv, i) => {
              const Icon = srv.icon
              return (
                <div key={i} className="bg-[#111111] p-10 border border-[#333333] hover:border-[#666666] transition-colors duration-300">
                  <Icon className="w-12 h-12 text-[#EEEEEE] mb-8" strokeWidth={1.5} />
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{srv.title}</h3>
                  <p className="text-[#888888] font-medium leading-relaxed">{srv.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* V2: Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-[#111111] border-t border-[#333333]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">{t.portfolio.title}</h2>
              <p className="text-xl text-[#888888] max-w-xl">{t.portfolio.p}</p>
            </div>
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {t.portfolio.filters.map(f => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 border font-bold uppercase text-xs tracking-widest transition-colors ${filter === f ? 'bg-[#EEEEEE] text-[#111111] border-[#EEEEEE]' : 'bg-transparent text-[#888888] border-[#333333] hover:border-[#666666]'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPortfolio.map((item, i) => (
              <div key={i} className="group relative aspect-video bg-[#222222] overflow-hidden border border-[#333333] cursor-pointer">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent flex flex-col justify-end p-8">
                  <span className="text-[#FF3300] font-black uppercase tracking-widest text-xs mb-2">{item.cat}</span>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                  <p className="text-[#888888] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2: The Process */}
      <section id="process" className="py-24 px-6 bg-[#0A0A0A] border-t border-[#333333]">
        <div className="container mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">{t.process.title}</h2>
            <p className="text-xl text-[#888888] max-w-2xl mx-auto">{t.process.p}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-[#333333] -z-10"></div>
            
            {t.process.steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[#111111] border-2 border-[#EEEEEE] rounded-full flex items-center justify-center text-3xl font-black text-[#EEEEEE] mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                  {step.num}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{step.title}</h3>
                <p className="text-[#888888] font-medium leading-relaxed max-w-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2: Social Proof / Testimonials */}
      <section className="py-24 px-6 bg-[#111111] border-t border-[#333333]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-16 text-center">{t.testimonials.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.testimonials.items.map((test, i) => (
              <div key={i} className="bg-[#0A0A0A] p-10 border border-[#333333] relative">
                <div className="absolute top-6 right-6 text-[#333333]">
                  <Star className="w-8 h-8 fill-current" />
                </div>
                <p className="text-xl text-[#EEEEEE] font-medium leading-relaxed italic mb-8">
                  {test.text}
                </p>
                <div>
                  <h4 className="font-black uppercase tracking-wider">{test.name}</h4>
                  <p className="text-[#888888] text-sm font-bold uppercase">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2: FAQ */}
      <section className="py-24 px-6 bg-[#0A0A0A] border-t border-[#333333]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12 text-center">{t.faq.title}</h2>
          <div className="space-y-4">
            {t.faq.items.map((item, i) => (
              <div key={i} className="border border-[#333333] bg-[#111111] overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left active:bg-[#1A1A1A] transition-colors"
                >
                  <span className="font-black uppercase tracking-wide text-lg">{item.q}</span>
                  <ChevronDown className={`w-6 h-6 text-[#666666] transform transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="p-6 pt-0 text-[#888888] leading-relaxed font-medium">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="quote" className="py-24 px-6 bg-[#111111] border-t border-[#333333]">
        <div className="container mx-auto">
          <div className="bg-[#0A0A0A] border border-[#333333] flex flex-col xl:flex-row shadow-2xl">
            
            <div className="flex-1 p-10 lg:p-16">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-3">{t.quote.title}</h2>
                <p className="text-[#888888] text-lg">{t.quote.p}</p>
              </div>

              <div className="space-y-12">
                <div>
                  <div className="flex justify-between mb-6">
                    <label className="font-black uppercase tracking-widest text-[#666666]">{t.quote.areaTitle}</label>
                    <span className="font-black text-2xl">{yardSize.toLocaleString()} {t.quote.areaUnit}</span>
                  </div>
                  <input 
                    type="range" 
                    min={region === 'usa' ? 100 : 10} 
                    max={region === 'usa' ? 10000 : 1000} 
                    step={region === 'usa' ? 100 : 10}
                    value={yardSize} 
                    onChange={(e) => setYardSize(Number(e.target.value))}
                    className="w-full accent-[#EEEEEE] h-1 bg-[#333333] appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-[#555555] mt-4 font-bold uppercase tracking-widest">
                    <span>{t.quote.areaMin}</span>
                    <span>{t.quote.areaMax}</span>
                  </div>
                </div>

                <div>
                  <label className="font-black uppercase tracking-widest text-[#666666] block mb-6">{t.quote.reqTitle}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {t.quote.reqOptions.map(opt => (
                      <button 
                        key={opt.id}
                        onClick={() => handleThicknessChange(opt.id)}
                        className={`p-5 border-2 font-black uppercase text-sm transition-all duration-200 ease-out active:scale-[0.97] ${
                          thickness === opt.id 
                          ? 'border-[#EEEEEE] bg-[#EEEEEE] text-[#111111]' 
                          : 'border-[#333333] text-[#888888] hover:border-[#666666]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            <div className="xl:w-[450px] bg-[#EEEEEE] text-[#111111] p-10 lg:p-16 flex flex-col justify-center">
              <h3 className="font-black uppercase tracking-widest text-[#666666] mb-6">{t.quote.totalTitle}</h3>
              
              <div className={`flex items-start gap-1 mb-6 transition-all duration-200 ${isCalculating ? 'blur-md opacity-50' : 'blur-0 opacity-100'}`}>
                <span className="text-3xl font-black mt-2 text-[#666666]">$</span>
                <span className="text-7xl md:text-8xl font-black tracking-tighter leading-none">
                  {getPrice().toLocaleString()}
                </span>
              </div>
              
              <p className="text-[#666666] text-sm font-bold mb-12 pb-12 border-b border-[#CCCCCC] leading-relaxed">
                {t.quote.totalDesc}
              </p>
              
              <div className="space-y-4">
                <label className="block text-xs font-black uppercase tracking-widest text-[#666666]">{t.quote.ctaTitle}</label>
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full bg-white border-2 border-[#CCCCCC] px-5 py-5 text-[#111111] placeholder-[#999999] outline-none focus:border-[#111111] font-bold transition-colors" 
                />
                <button className="w-full bg-[#111111] text-[#EEEEEE] font-black uppercase tracking-wider py-5 hover:bg-[#333333] active:scale-[0.97] transition-all duration-200 ease-out">
                  {t.quote.ctaBtn}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] text-[#EEEEEE] pt-24 pb-12 border-t border-[#333333]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="font-black text-3xl tracking-tighter uppercase mb-6">
                SLAB<span className="text-[#666666]">WORKS</span>
              </div>
              <p className="text-[#888888] font-medium max-w-sm mb-8 leading-relaxed">
                {t.footer.desc}
              </p>
            </div>
            <div>
              <h4 className="font-black mb-6 tracking-widest text-xs uppercase text-[#555555]">{t.footer.contact}</h4>
              <ul className="space-y-4 font-bold text-[#888888]">
                <li>+1 (555) CON-CRET</li>
                <li>dispatch@slabworks.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-6 tracking-widest text-xs uppercase text-[#555555]">{t.footer.legal}</h4>
              <ul className="space-y-4 font-bold text-[#888888]">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#333333] flex justify-between items-center text-xs font-black tracking-widest text-[#555555] uppercase">
            <p>{t.footer.rights}</p>
            <p>{t.footer.tag}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
