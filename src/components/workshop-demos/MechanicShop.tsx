"use client"
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Wrench, Zap, Settings, ChevronRight, Star, ChevronDown, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

const dict = {
  usa: {
    nav: { srv: 'Diagnostics', port: 'Projects', proc: 'Protocol', faq: 'FAQ', est: 'Estimator', book: 'Book Bay' },
    hero: { 
      t1: 'PRECISION', 
      t2: 'TUNING.', 
      p: 'Advanced diagnostics and performance engineering for European and luxury vehicles. No guesswork, just data.',
      btn1: 'Book Diagnostics',
      btn2: 'View Shop'
    },
    trust: 'Certified Master Technicians',
    srv: {
      title: 'Our Capabilities',
      p: 'We do not swap parts. We diagnose, engineer, and repair with absolute certainty.',
      items: [
        { icon: Zap, title: "Electrical Diagnostics", desc: "Pinpoint accuracy in finding parasitic drains, CAN bus faults, and module programming." },
        { icon: Settings, title: "Powertrain Overhaul", desc: "Engine rebuilds, transmission tuning, and forced induction installations." },
        { icon: Wrench, title: "Preventative Maint.", desc: "Factory-scheduled services using only OEM fluids, filters, and components." }
      ]
    },
    portfolio: {
      title: 'Shop Gallery',
      p: 'From routine carbon cleaning to full engine-out services. Filter by operation.',
      filters: ['All', 'Engine', 'Electrical', 'Performance'],
      items: [
        { cat: 'Engine', title: 'Porsche 911 Engine Out', desc: 'Complete IMS bearing upgrade and rear main seal replacement.', img: 'https://placehold.co/800x600/1A1A1A/DC2626?text=Engine+Drop' },
        { cat: 'Performance', title: 'M4 Dyno Tuning', desc: 'Stage 2 ECU flash with catless downpipes yielding +120whp.', img: 'https://placehold.co/800x600/0A0A0A/DC2626?text=Dyno+Run' },
        { cat: 'Electrical', title: 'Audi CAN Bus Repair', desc: 'Diagnosed and repaired severed wiring harness behind the firewall.', img: 'https://placehold.co/800x600/222222/DC2626?text=Wiring+Harness' },
        { cat: 'Engine', title: 'AMG Carbon Cleaning', desc: 'Walnut blasting intake valves to restore lost horsepower.', img: 'https://placehold.co/800x600/111111/DC2626?text=Carbon+Clean' }
      ]
    },
    process: {
      title: 'The Protocol',
      p: 'A systematic approach to vehicle repair that eliminates misdiagnosis and saves you money.',
      steps: [
        { num: '01', title: 'Digital Check-in', desc: 'We connect our proprietary scanners to pull historical data, current faults, and freeze-frame logs.' },
        { num: '02', title: 'Visual Inspection', desc: 'A technician performs a 40-point digital inspection, sending you photos and videos of the issue.' },
        { num: '03', title: 'Approval & Repair', desc: 'You approve the exact scope of work via SMS. We repair using strict factory torque specs and OEM parts.' },
        { num: '04', title: 'Quality Control', desc: 'The vehicle is test-driven, re-scanned, and washed before the keys are handed back.' }
      ]
    },
    testimonials: {
      title: 'Driver Feedback',
      items: [
        { name: 'Michael C.', role: 'BMW M3 Owner', text: '"Three other shops told me I needed a new transmission. Velocity traced the issue to a $40 speed sensor wire that had rubbed bare. Honest, brilliant technicians."' },
        { name: 'Daniel R.', role: 'Fleet Manager', text: '"Their digital inspection system is a game-changer. I get a link on my phone showing me exactly what the tech sees, with a transparent price quote attached. No surprises."' }
      ]
    },
    faq: {
      title: 'Technical Inquiries',
      items: [
        { q: 'Will taking my car here void my factory warranty?', a: 'Absolutely not. The Magnuson-Moss Warranty Act protects you. We are fully authorized to perform scheduled maintenance, and we stamp your service book to maintain warranty compliance.' },
        { q: 'Do you use OEM parts?', a: 'Exclusively. We use Original Equipment Manufacturer (OEM) or Original Equipment Supplier (OES) parts. We refuse to install cheap aftermarket alternatives that compromise performance.' },
        { q: 'Can I supply my own parts?', a: 'For quality control and liability reasons, we do not install customer-supplied parts. We cannot warranty a repair if we cannot guarantee the origin and quality of the component.' }
      ]
    },
    quote: {
      title: 'Diagnostics Estimator',
      p: 'Select your vehicle class and issue type to generate a baseline diagnostic fee.',
      areaTitle: 'Vehicle Class',
      areaUnit: '',
      areaMin: '',
      areaMax: '',
      reqTitle: 'System Issue',
      reqOptions: [
        { id: 'maint', label: 'Routine Maintenance' },
        { id: 'engine', label: 'Engine / Powertrain' },
        { id: 'elec', label: 'Complex Electrical' }
      ],
      totalTitle: 'Initial Diagnostic Fee',
      totalDesc: '*This fee covers the initial 1-2 hours of testing. If the repair is approved, this fee is credited toward the labor cost.',
      ctaTitle: 'Secure Your Slot',
      ctaBtn: 'Book Appointment'
    },
    footer: {
      desc: 'Engineering the ultimate driving experience through uncompromising technical excellence.',
      contact: 'Service Desk',
      legal: 'Terms',
      rights: '© 2026 Arasue Forge LLC. All rights reserved.',
      tag: 'Redline engineered.'
    }
  },
  mex: {
    nav: { srv: 'Diagnóstico', port: 'Proyectos', proc: 'Protocolo', faq: 'FAQ', est: 'Estimador', book: 'Reservar' },
    hero: { 
      t1: 'AFINACIÓN DE', 
      t2: 'PRECISIÓN.', 
      p: 'Diagnóstico avanzado e ingeniería de rendimiento para vehículos europeos y de lujo. Sin adivinanzas, solo datos.',
      btn1: 'Reservar Diagnóstico',
      btn2: 'Ver Taller'
    },
    trust: 'Técnicos Maestros Certificados',
    srv: {
      title: 'Nuestras Capacidades',
      p: 'No somos cambia-piezas. Diagnosticamos, diseñamos y reparamos con absoluta certeza.',
      items: [
        { icon: Zap, title: "Diagnóstico Eléctrico", desc: "Precisión milimétrica para encontrar fugas parásitas, fallas del bus CAN y programación de módulos." },
        { icon: Settings, title: "Reparación de Motor", desc: "Reconstrucción de motores, ajuste de transmisiones e instalaciones de inducción forzada." },
        { icon: Wrench, title: "Mantenimiento Prev.", desc: "Servicios programados de fábrica usando solo fluidos, filtros y componentes OEM." }
      ]
    },
    portfolio: {
      title: 'Galería del Taller',
      p: 'Desde limpieza rutinaria de carbón hasta servicios completos de motor. Filtra por operación.',
      filters: ['Todos', 'Motor', 'Electrico', 'Rendimiento'],
      items: [
        { cat: 'Motor', title: 'Extracción Motor Porsche', desc: 'Actualización completa de rodamiento IMS y reemplazo del sello principal trasero.', img: 'https://placehold.co/800x600/1A1A1A/DC2626?text=Motor+Afuera' },
        { cat: 'Rendimiento', title: 'Reprogramación M4', desc: 'Flasheo de ECU Stage 2 con downpipes sin catalizador, logrando +120whp.', img: 'https://placehold.co/800x600/0A0A0A/DC2626?text=Prueba+Dyno' },
        { cat: 'Electrico', title: 'Reparación Bus CAN Audi', desc: 'Diagnóstico y reparación de arnés de cableado cortado detrás de la pared de fuego.', img: 'https://placehold.co/800x600/222222/DC2626?text=Arnes+Electrico' },
        { cat: 'Motor', title: 'Limpieza de Carbón AMG', desc: 'Limpieza de válvulas de admisión con cáscara de nuez para restaurar caballos de fuerza.', img: 'https://placehold.co/800x600/111111/DC2626?text=Limpieza+Carbon' }
      ]
    },
    process: {
      title: 'El Protocolo',
      p: 'Un enfoque sistemático para la reparación de vehículos que elimina diagnósticos erróneos y te ahorra dinero.',
      steps: [
        { num: '01', title: 'Recepción Digital', desc: 'Conectamos nuestros escáneres propietarios para extraer datos históricos, fallas actuales y registros.' },
        { num: '02', title: 'Inspección Visual', desc: 'Un técnico realiza una inspección digital de 40 puntos, enviándote fotos y videos del problema.' },
        { num: '03', title: 'Aprobación y Reparación', desc: 'Apruebas el alcance exacto del trabajo por SMS. Reparamos usando especificaciones de torque de fábrica.' },
        { num: '04', title: 'Control de Calidad', desc: 'El vehículo es probado, escaneado nuevamente y lavado antes de devolverte las llaves.' }
      ]
    },
    testimonials: {
      title: 'Feedback de Pilotos',
      items: [
        { name: 'Michael C.', role: 'Dueño de BMW M3', text: '"Otros tres talleres me dijeron que necesitaba una transmisión nueva. Velocity rastreó el problema hasta un cable de sensor de velocidad de $40 que se había pelado. Honestidad brutal."' },
        { name: 'Daniel R.', role: 'Gerente de Flotilla', text: '"Su sistema de inspección digital cambia las reglas del juego. Recibo un enlace en mi teléfono mostrándome exactamente lo que ve el técnico, con un presupuesto transparente. Sin sorpresas."' }
      ]
    },
    faq: {
      title: 'Consultas Técnicas',
      items: [
        { q: '¿Traer mi auto aquí anulará la garantía de fábrica?', a: 'Absolutamente no. Estás protegido por ley. Estamos totalmente autorizados para realizar mantenimiento programado, y sellamos tu libro de servicio para mantener el cumplimiento de la garantía.' },
        { q: '¿Utilizan repuestos originales (OEM)?', a: 'Exclusivamente. Utilizamos piezas del Fabricante de Equipo Original (OEM) o Proveedor (OES). Nos rehusamos a instalar alternativas baratas que comprometan el rendimiento.' },
        { q: '¿Puedo traer mis propias piezas?', a: 'Por razones de control de calidad y responsabilidad legal, no instalamos piezas provistas por el cliente. No podemos garantizar una reparación si no podemos garantizar el origen del componente.' }
      ]
    },
    quote: {
      title: 'Estimador de Diagnóstico',
      p: 'Selecciona tu clase de vehículo y tipo de problema para generar una tarifa de diagnóstico base.',
      areaTitle: 'Clase de Vehículo',
      areaUnit: '',
      areaMin: '',
      areaMax: '',
      reqTitle: 'Problema del Sistema',
      reqOptions: [
        { id: 'maint', label: 'Mantenimiento de Rutina' },
        { id: 'engine', label: 'Motor / Tren Motriz' },
        { id: 'elec', label: 'Eléctrico Complejo' }
      ],
      totalTitle: 'Tarifa de Diagnóstico Inicial',
      totalDesc: '*Esta tarifa cubre las primeras 1-2 horas de pruebas. Si se aprueba la reparación, esta tarifa se abona al costo de mano de obra.',
      ctaTitle: 'Asegura tu Espacio',
      ctaBtn: 'Reservar Cita'
    },
    footer: {
      desc: 'Diseñando la experiencia de conducción definitiva a través de excelencia técnica intransigente.',
      contact: 'Recepción',
      legal: 'Términos',
      rights: '© 2026 Arasue Forge LLC. Todos los derechos reservados.',
      tag: 'Diseñado al límite.'
    }
  }
}

export function MechanicShop() {
  const [region, setRegion] = useState<'usa' | 'mex'>('usa')
  const [vehicleClass, setVehicleClass] = useState(1) // 1 = Domestic/Asian, 2 = Euro Luxury, 3 = Exotic
  const [issueType, setIssueType] = useState('engine')
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

  const handleIssueChange = (val: string) => {
    setIsCalculating(true)
    setTimeout(() => {
      setIssueType(val)
      setIsCalculating(false)
    }, 200)
  }

  const getPrice = () => {
    let base = 0;
    if (issueType === 'maint') base = region === 'usa' ? 85 : 900;
    if (issueType === 'engine') base = region === 'usa' ? 150 : 1800;
    if (issueType === 'elec') base = region === 'usa' ? 220 : 2500;
    
    // Multipliers for vehicle class
    const multiplier = vehicleClass === 1 ? 1 : (vehicleClass === 2 ? 1.5 : 2.5);
    
    return Math.round(base * multiplier);
  }

  const getVehicleLabel = () => {
    if (vehicleClass === 1) return region === 'usa' ? 'Domestic / Asian' : 'Nacional / Asiático'
    if (vehicleClass === 2) return region === 'usa' ? 'Euro / Luxury' : 'Europeo / Lujo'
    return region === 'usa' ? 'Exotic / Supercar' : 'Exótico / Superdeportivo'
  }

  const filteredPortfolio = filter === 'All' || filter === 'Todos' 
    ? t.portfolio.items 
    : t.portfolio.items.filter(item => item.cat === filter || 
      (filter === 'Motor' && item.cat === 'Engine') || 
      (filter === 'Electrico' && item.cat === 'Electrical') || 
      (filter === 'Rendimiento' && item.cat === 'Performance'))

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#DC2626] selection:text-white">
      {/* Navigation - Dark Tech */}
      <nav className="w-full bg-[#0A0A0A] border-b border-[#222222] sticky top-0 z-40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-black text-2xl tracking-tighter uppercase flex items-center gap-2">
            <Zap className="w-6 h-6 text-[#DC2626]" />
            VELOCITY
          </div>
          <div className="hidden lg:flex gap-8 font-bold text-xs tracking-widest uppercase text-[#888888]">
            <a href="#services" className="hover:text-white transition-colors duration-200">{t.nav.srv}</a>
            <a href="#portfolio" className="hover:text-white transition-colors duration-200">{t.nav.port}</a>
            <a href="#process" className="hover:text-white transition-colors duration-200">{t.nav.proc}</a>
            <a href="#quote" className="hover:text-[#DC2626] transition-colors duration-200">{t.nav.est}</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleRegion}
              className="flex items-center gap-2 px-3 py-1 border border-[#333333] hover:bg-[#222222] transition-colors text-xs font-bold uppercase active:scale-[0.97] rounded-sm"
            >
              {region === 'usa' ? 'USA' : 'MEX'}
            </button>
            <a href="#quote" className="hidden sm:inline-block bg-[#DC2626] text-white px-6 py-2 rounded-sm font-black uppercase tracking-wider hover:bg-[#B91C1C] transition-all duration-200 active:scale-[0.97] shadow-[0_0_15px_rgba(220,38,38,0.4)]">
              {t.nav.book}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#DC2626] blur-[150px] opacity-20 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-[#2563EB] blur-[150px] opacity-10 rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#333333] bg-[#111111] rounded-full text-xs font-bold uppercase tracking-widest text-[#888888] mb-8">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> {t.trust}
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-6">
              {t.hero.t1}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#CCCCCC] to-[#555555]">
                {t.hero.t2}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#888888] mb-12 max-w-2xl mx-auto font-medium">
              {t.hero.p}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#quote" className="bg-[#DC2626] text-white px-10 py-4 rounded-sm font-black text-sm uppercase tracking-wider hover:bg-[#B91C1C] transition-all duration-200 active:scale-[0.97] flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                {t.hero.btn1} <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#portfolio" className="border border-[#333333] bg-[#111111] text-white px-10 py-4 rounded-sm font-black text-sm uppercase tracking-wider hover:bg-[#222222] transition-all duration-200 active:scale-[0.97]">
                {t.hero.btn2}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-[#0A0A0A] border-t border-[#222222]">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">{t.srv.title}</h2>
            <p className="text-[#888888] max-w-2xl">{t.srv.p}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.srv.items.map((srv, i) => {
              const Icon = srv.icon
              return (
                <div key={i} className="bg-[#111111] p-10 border border-[#222222] hover:border-[#DC2626] transition-colors duration-300 rounded-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#DC2626]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none"></div>
                  <Icon className="w-10 h-10 text-[#DC2626] mb-8" strokeWidth={1.5} />
                  <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-white">{srv.title}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">{srv.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* V2: Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-[#050505] border-t border-[#222222]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">{t.portfolio.title}</h2>
              <p className="text-[#888888] max-w-xl">{t.portfolio.p}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {t.portfolio.filters.map(f => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 border rounded-sm font-bold uppercase text-xs tracking-widest transition-colors ${filter === f ? 'bg-[#DC2626] text-white border-[#DC2626]' : 'bg-[#111111] text-[#888888] border-[#222222] hover:border-[#444444]'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPortfolio.map((item, i) => (
              <div key={i} className="group relative aspect-video bg-[#111111] overflow-hidden border border-[#222222] rounded-sm cursor-pointer">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent flex flex-col justify-end p-8 border-b-2 border-transparent group-hover:border-[#DC2626] transition-colors duration-500">
                  <span className="text-[#DC2626] font-black uppercase tracking-widest text-[10px] mb-2">{item.cat}</span>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                  <p className="text-[#888888] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2: The Process */}
      <section id="process" className="py-24 px-6 bg-[#0A0A0A] border-t border-[#222222]">
        <div className="container mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">{t.process.title}</h2>
            <p className="text-[#888888] max-w-2xl mx-auto">{t.process.p}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {t.process.steps.map((step, i) => (
              <div key={i} className="bg-[#111111] p-8 border border-[#222222] rounded-sm relative">
                <div className="text-5xl font-black text-[#222222] absolute top-4 right-4 pointer-events-none">
                  {step.num}
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight mb-4 text-[#DC2626] relative z-10">{step.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2: Social Proof / Testimonials */}
      <section className="py-24 px-6 bg-[#050505] border-t border-[#222222]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-16 text-center">{t.testimonials.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {t.testimonials.items.map((test, i) => (
              <div key={i} className="bg-[#0A0A0A] p-10 border border-[#222222] rounded-sm relative">
                <div className="absolute top-6 right-6 text-[#222222]">
                  <Star className="w-8 h-8 fill-current" />
                </div>
                <p className="text-lg text-white font-medium leading-relaxed italic mb-8 relative z-10">
                  {test.text}
                </p>
                <div>
                  <h4 className="font-black uppercase tracking-wider text-[#DC2626] text-sm">{test.name}</h4>
                  <p className="text-[#666666] text-xs font-bold uppercase">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V2: FAQ */}
      <section className="py-24 px-6 bg-[#0A0A0A] border-t border-[#222222]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12 text-center">{t.faq.title}</h2>
          <div className="space-y-4">
            {t.faq.items.map((item, i) => (
              <div key={i} className="border border-[#222222] bg-[#111111] rounded-sm overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#1A1A1A] transition-colors"
                >
                  <span className="font-black uppercase tracking-wide text-sm md:text-base">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#DC2626] flex-shrink-0 transform transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="p-6 pt-0 text-[#888888] text-sm leading-relaxed font-medium">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="quote" className="py-24 px-6 bg-[#050505] border-t border-[#222222]">
        <div className="container mx-auto">
          <div className="bg-[#111111] border border-[#333333] flex flex-col xl:flex-row rounded-sm overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            
            <div className="flex-1 p-10 lg:p-16">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-3 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-[#DC2626]" />
                  {t.quote.title}
                </h2>
                <p className="text-[#888888] text-sm">{t.quote.p}</p>
              </div>

              <div className="space-y-12">
                <div>
                  <div className="flex justify-between mb-6">
                    <label className="font-black uppercase tracking-widest text-xs text-[#888888]">{t.quote.areaTitle}</label>
                    <span className="font-black text-[#DC2626] uppercase">{getVehicleLabel()}</span>
                  </div>
                  <input 
                    type="range" 
                    min={1} 
                    max={3} 
                    step={1}
                    value={vehicleClass} 
                    onChange={(e) => setVehicleClass(Number(e.target.value))}
                    className="w-full accent-[#DC2626] h-1 bg-[#333333] appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#555555] mt-4 font-bold uppercase tracking-widest">
                    <span>Level 1</span>
                    <span>Level 3</span>
                  </div>
                </div>

                <div>
                  <label className="font-black uppercase tracking-widest text-xs text-[#888888] block mb-6">{t.quote.reqTitle}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {t.quote.reqOptions.map(opt => (
                      <button 
                        key={opt.id}
                        onClick={() => handleIssueChange(opt.id)}
                        className={`p-4 border-2 font-black uppercase text-xs transition-all duration-200 ease-out active:scale-[0.97] rounded-sm ${
                          issueType === opt.id 
                          ? 'border-[#DC2626] bg-[#DC2626]/10 text-white' 
                          : 'border-[#333333] text-[#888888] hover:border-[#555555]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            <div className="xl:w-[400px] bg-[#0A0A0A] border-l border-[#222222] p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent to-[#DC2626]"></div>
              
              <h3 className="font-black uppercase tracking-widest text-[10px] text-[#666666] mb-6">{t.quote.totalTitle}</h3>
              
              <div className={`flex items-start gap-1 mb-6 transition-all duration-200 ${isCalculating ? 'blur-md opacity-50 text-[#DC2626]' : 'blur-0 opacity-100 text-white'}`}>
                <span className="text-2xl font-black mt-2 text-[#555555]">$</span>
                <span className="text-6xl md:text-7xl font-black tracking-tighter leading-none">
                  {getPrice().toLocaleString()}
                </span>
              </div>
              
              <p className="text-[#555555] text-[10px] font-bold mb-12 pb-12 border-b border-[#222222] leading-relaxed uppercase tracking-wide">
                {t.quote.totalDesc}
              </p>
              
              <div className="space-y-4">
                <label className="block text-[10px] font-black uppercase tracking-widest text-[#666666]">{t.quote.ctaTitle}</label>
                <input 
                  type="text" 
                  placeholder="VIN # or License Plate" 
                  className="w-full bg-[#111111] border border-[#333333] px-4 py-4 text-white placeholder-[#555555] outline-none focus:border-[#DC2626] font-bold text-sm transition-colors rounded-sm" 
                />
                <button className="w-full bg-[#DC2626] text-white font-black uppercase tracking-widest text-xs py-4 hover:bg-[#B91C1C] active:scale-[0.97] transition-all duration-200 ease-out rounded-sm shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                  {t.quote.ctaBtn}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] text-[#888888] pt-24 pb-12 border-t border-[#111111]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="font-black text-2xl tracking-tighter uppercase flex items-center gap-2 mb-6 text-white">
                <Zap className="w-5 h-5 text-[#DC2626]" />
                VELOCITY
              </div>
              <p className="text-[#666666] font-medium max-w-sm mb-8 leading-relaxed text-sm">
                {t.footer.desc}
              </p>
            </div>
            <div>
              <h4 className="font-black mb-6 tracking-widest text-[10px] uppercase text-[#444444]">{t.footer.contact}</h4>
              <ul className="space-y-4 font-bold text-xs uppercase tracking-wide">
                <li>+1 (555) 900-VLCY</li>
                <li>service@velocity.tech</li>
                <li>Bay Area, CA</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-6 tracking-widest text-[10px] uppercase text-[#444444]">{t.footer.legal}</h4>
              <ul className="space-y-4 font-bold text-xs uppercase tracking-wide">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.legal}</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#111111] flex justify-between items-center text-[10px] font-black tracking-widest text-[#444444] uppercase">
            <p>{t.footer.rights}</p>
            <p className="text-[#DC2626]">{t.footer.tag}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
