"use client"
import Image from 'next/image'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Wrench, Zap, Settings, ChevronRight, Star, ChevronDown, CheckCircle2, ArrowLeft, Activity, Target, Cpu, Calendar } from 'lucide-react'
import { useState } from 'react'

const dict = {
  usa: {
    nav: { srv: 'Diagnostics', port: 'Telemetry', proc: 'Protocol', faq: 'FAQ', est: 'Estimator', book: 'Book Bay', back: 'Abort & Return' },
    hero: { 
      t1: 'PRECISION', 
      t2: 'TUNING.', 
      p: 'Advanced diagnostics and performance engineering for European and luxury vehicles. No guesswork, just data.',
      btn1: 'Book Diagnostics',
      btn2: 'View Telemetry'
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
    },
    contactPage: {
      tag: 'Bay Reservation',
      title: 'Request Telemetry Slot.',
      desc: 'Enter your vehicle specifications and issue details. Our service advisors will align your vehicle with the correct master technician.',
      form: {
        fn: 'Pilot / First Name',
        ln: 'Last Name',
        email: 'Comms / Email',
        vin: 'Vehicle VIN (Optional)',
        scope: 'Symptoms / Upgrade Goals',
        submit: 'Transmit Request'
      }
    },
    catalogPage: {
      tag: 'Telemetry Log',
      title: 'Project Data.',
      desc: 'Hard data on our latest engine-out services, ECU tunes, and track-prep builds.',
      filters: ['All Operations', 'Engine', 'Electrical', 'Performance'],
      projects: [
        { cat: 'Engine', title: 'Porsche 911 (997) Engine Out', specs: 'IMS Upgrade / RMS', tech: 'Master Tech A.', desc: 'Complete engine drop to perform the critical IMS bearing upgrade and replace the rear main seal. We utilized the LN Engineering dual-row retrofit kit to bulletproof this flat-six.', client: 'Porsche Club Member', comment: '"Velocity executed this flawlessly. I received photos of my engine out of the car, and the re-installation looks cleaner than factory."', rating: 5, img: 'https://placehold.co/800x1000/1A1A1A/DC2626?text=Engine+Drop' },
        { cat: 'Performance', title: 'BMW M4 (F82) Dyno Tune', specs: '+120 WHP / +150 TQ', tech: 'Lead Tuner M.', desc: 'Installed catless downpipes, upgraded charge pipes, and executed a custom Stage 2 ECU flash. The vehicle now aggressively targets 22psi of boost on 93 octane.', client: 'Michael C.', comment: '"The car is an absolute monster now, but drives like stock when in Comfort mode. The power delivery is incredibly smooth."', rating: 5, img: 'https://placehold.co/800x600/0A0A0A/DC2626?text=Dyno+Run' },
        { cat: 'Electrical', title: 'Audi S4 CAN Bus Repair', specs: 'Parasitic Draw / Module Fault', tech: 'Diag Specialist R.', desc: 'Vehicle arrived with a dead battery and 14 module communication codes. We isolated a severed harness wire behind the firewall that was shorting the high-speed CAN network.', client: 'Daniel R.', comment: '"The dealer wanted to replace 3 modules for $4k. Velocity found the broken wire, fixed it for a fraction, and got my car back on the road."', rating: 5, img: 'https://placehold.co/800x600/222222/DC2626?text=Wiring+Harness' },
        { cat: 'Engine', title: 'Mercedes C63 AMG Carbon Clean', specs: 'Walnut Blast / M156', tech: 'Technician S.', desc: 'Removed intake manifold to perform a comprehensive walnut blasting of the intake valves, removing heavy carbon buildup and restoring 30hp of lost top-end power.', client: 'AMG Enthusiast', comment: '"The throttle response is back to how it was on day one. The before and after photos of the valves were shocking."', rating: 5, img: 'https://placehold.co/800x1000/111111/DC2626?text=Carbon+Clean' }
      ]
    }
  },
  mex: {
    nav: { srv: 'Diagnóstico', port: 'Telemetría', proc: 'Protocolo', faq: 'FAQ', est: 'Estimador', book: 'Reservar', back: 'Abortar y Volver' },
    hero: { 
      t1: 'AFINACIÓN DE', 
      t2: 'PRECISIÓN.', 
      p: 'Diagnóstico avanzado e ingeniería de rendimiento para vehículos europeos y de lujo. Sin adivinanzas, solo datos.',
      btn1: 'Reservar Diagnóstico',
      btn2: 'Ver Telemetría'
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
    },
    contactPage: {
      tag: 'Reserva de Rampa',
      title: 'Solicitar Espacio.',
      desc: 'Ingresa las especificaciones de tu vehículo y detalles del problema. Nuestros asesores asignarán tu vehículo al técnico maestro correcto.',
      form: {
        fn: 'Piloto / Nombre',
        ln: 'Apellido',
        email: 'Comunicaciones / Email',
        vin: 'VIN del Vehículo (Opcional)',
        scope: 'Síntomas / Metas de Rendimiento',
        submit: 'Transmitir Solicitud'
      }
    },
    catalogPage: {
      tag: 'Registro de Telemetría',
      title: 'Proyectos.',
      desc: 'Datos duros sobre nuestros últimos servicios de motor, reprogramaciones de ECU y preparaciones para pista.',
      filters: ['Todas las Operaciones', 'Motor', 'Electrico', 'Rendimiento'],
      projects: [
        { cat: 'Motor', title: 'Porsche 911 (997) Motor Afuera', specs: 'Mejora IMS / RMS', tech: 'Técnico Maestro A.', desc: 'Extracción completa del motor para realizar la actualización crítica del rodamiento IMS y reemplazar el sello principal trasero. Utilizamos el kit dual LN Engineering para blindar este motor bóxer.', client: 'Miembro Club Porsche', comment: '"Velocity ejecutó esto sin fallas. Recibí fotos de mi motor fuera del auto, y la reinstalación se ve más limpia que de fábrica."', rating: 5, img: 'https://placehold.co/800x1000/1A1A1A/DC2626?text=Motor+Afuera' },
        { cat: 'Rendimiento', title: 'BMW M4 (F82) Reprogramación', specs: '+120 WHP / +150 TQ', tech: 'Tuner Principal M.', desc: 'Instalación de downpipes sin catalizador, tuberías de carga mejoradas y flasheo de ECU Stage 2. El vehículo ahora apunta a 22psi de presión de turbo agresivamente.', client: 'Michael C.', comment: '"El auto es un monstruo ahora, pero se maneja como de agencia en modo Confort. La entrega de potencia es increíblemente suave."', rating: 5, img: 'https://placehold.co/800x600/0A0A0A/DC2626?text=Prueba+Dyno' },
        { cat: 'Electrico', title: 'Reparación Bus CAN Audi S4', specs: 'Fuga Parásita / Falla Módulo', tech: 'Especialista Diag R.', desc: 'El vehículo llegó con batería muerta y 14 códigos de comunicación de módulos. Aislamos un cable roto en el arnés detrás de la pared de fuego que estaba cortocircuitando la red CAN de alta velocidad.', client: 'Daniel R.', comment: '"El concesionario quería reemplazar 3 módulos por $4k. Velocity encontró el cable roto, lo arregló por una fracción y me devolvió el auto."', rating: 5, img: 'https://placehold.co/800x600/222222/DC2626?text=Arnes+Electrico' },
        { cat: 'Motor', title: 'Mercedes C63 AMG Limpieza Carbón', specs: 'Cáscara de Nuez / M156', tech: 'Técnico S.', desc: 'Removimos el colector de admisión para realizar una limpieza profunda de válvulas con cáscara de nuez, eliminando la acumulación severa de carbón y restaurando 30hp de potencia.', client: 'Entusiasta AMG', comment: '"La respuesta del acelerador volvió a ser como el primer día. Las fotos de antes y después de las válvulas fueron impactantes."', rating: 5, img: 'https://placehold.co/800x1000/111111/DC2626?text=Limpieza+Carbon' }
      ]
    }
  }
}

// Tactical HUD Element for Titles
const HUDTitle = ({ text, sub }: { text: string, sub?: string }) => (
  <div className="flex flex-col items-start mb-10">
    <div className="flex items-center gap-3 mb-2">
      <Target className="w-5 h-5 text-[#DC2626]" />
      <div className="h-[1px] w-12 bg-[#DC2626]"></div>
      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#DC2626]">SYSTEM ENGAGED</span>
    </div>
    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">{text}</h2>
    {sub && <p className="text-[#888888] font-mono text-sm mt-4 max-w-xl">{sub}</p>}
  </div>
)

export function MechanicShop() {
  const [region, setRegion] = useState<'usa' | 'mex'>('usa')
  const [currentView, setCurrentView] = useState<'landing' | 'contact' | 'catalog'>('landing')
  const [vehicleClass, setVehicleClass] = useState(1) // 1 = Domestic/Asian, 2 = Euro Luxury, 3 = Exotic
  const [issueType, setIssueType] = useState('engine')
  const [isCalculating, setIsCalculating] = useState(false)
  const [filter, setFilter] = useState('All')
  const [catalogFilter, setCatalogFilter] = useState('All Operations')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  
  const reduce = useReducedMotion()
  const t = dict[region]

  // Kowalski Spring Physics
  const springTransition = { type: "spring", stiffness: 300, damping: 30 } as const

  const toggleRegion = () => {
    setIsCalculating(true)
    setTimeout(() => {
      if (region === 'usa') {
        setRegion('mex')
        setFilter('Todos')
        setCatalogFilter('Todas las Operaciones')
      } else {
        setRegion('usa')
        setFilter('All')
        setCatalogFilter('All Operations')
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

  const filteredCatalog = catalogFilter === 'All Operations' || catalogFilter === 'Todas las Operaciones'
    ? t.catalogPage.projects
    : t.catalogPage.projects.filter(item => item.cat === catalogFilter || 
      (catalogFilter === 'Motor' && item.cat === 'Engine') || 
      (catalogFilter === 'Electrico' && item.cat === 'Electrical') || 
      (catalogFilter === 'Rendimiento' && item.cat === 'Performance'))

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#DC2626] selection:text-white flex flex-col overflow-x-hidden">
      
      {/* Navigation - Dark Tech */}
      <nav className="w-full bg-[#0A0A0A] border-b border-[#222222] sticky top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="font-black text-2xl tracking-tighter uppercase flex items-center gap-2 cursor-pointer"
            onClick={() => setCurrentView('landing')}
          >
            <Zap className="w-6 h-6 text-[#DC2626]" />
            VELOCITY
          </div>
          
          {currentView === 'landing' ? (
            <div className="hidden lg:flex gap-8 font-bold text-[10px] tracking-widest uppercase text-[#888888]">
              <a href="#services" className="hover:text-white transition-colors duration-200">{t.nav.srv}</a>
              <button onClick={() => { window.scrollTo(0,0); setCurrentView('catalog') }} className="hover:text-white transition-colors duration-200">{t.nav.port}</button>
              <a href="#process" className="hover:text-white transition-colors duration-200">{t.nav.proc}</a>
              <a href="#quote" className="hover:text-[#DC2626] transition-colors duration-200">{t.nav.est}</a>
            </div>
          ) : (
            <div className="hidden lg:flex" />
          )}

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleRegion}
              className="flex items-center gap-2 px-3 py-1.5 border border-[#333333] hover:bg-[#222222] transition-colors text-[10px] font-bold uppercase tracking-widest active:scale-[0.97] rounded-sm"
            >
              {region === 'usa' ? 'USA' : 'MEX'}
            </button>
            {currentView === 'landing' ? (
              <button 
                onClick={() => { window.scrollTo(0,0); setCurrentView('contact') }}
                className="hidden sm:inline-block bg-[#DC2626] text-white px-6 py-2 rounded-sm font-black text-xs uppercase tracking-wider hover:bg-[#B91C1C] transition-all duration-200 active:scale-[0.97] shadow-[0_0_15px_rgba(220,38,38,0.4)]"
              >
                {t.nav.book}
              </button>
            ) : (
              <button 
                onClick={() => { window.scrollTo(0,0); setCurrentView('landing') }}
                className="hidden sm:inline-flex items-center gap-2 border border-[#333333] text-white px-6 py-2 rounded-sm font-black text-xs uppercase tracking-wider hover:bg-[#111111] transition-all duration-200 active:scale-[0.97]"
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
              <section className="pt-32 pb-24 px-6 relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#DC2626] blur-[150px] opacity-20 rounded-full pointer-events-none"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-[#2563EB] blur-[150px] opacity-10 rounded-full pointer-events-none"></div>
                
                <div className="container mx-auto relative z-10 text-center">
                  <motion.div
                    initial={reduce ? false : { opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={springTransition}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#333333] bg-[#111111] rounded-full text-[10px] font-mono font-bold uppercase tracking-widest text-[#888888] mb-8">
                      <CheckCircle2 className="w-3 h-3 text-[#10B981]" /> {t.trust}
                    </div>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-6">
                      {t.hero.t1}<br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#CCCCCC] to-[#555555]">
                        {t.hero.t2}
                      </span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#888888] mb-12 max-w-2xl mx-auto font-mono text-sm leading-relaxed">
                      {t.hero.p}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <button 
                        onClick={() => { window.scrollTo(0,0); setCurrentView('contact') }}
                        className="bg-[#DC2626] text-white px-10 py-4 rounded-sm font-black text-xs uppercase tracking-wider hover:bg-[#B91C1C] transition-all duration-200 active:scale-[0.97] flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                      >
                        {t.hero.btn1} <ArrowRight className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => { window.scrollTo(0,0); setCurrentView('catalog') }}
                        className="border border-[#333333] bg-[#111111] text-white px-10 py-4 rounded-sm font-black text-xs uppercase tracking-wider hover:bg-[#222222] transition-all duration-200 active:scale-[0.97]"
                      >
                        {t.hero.btn2}
                      </button>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Services Section */}
              <section id="services" className="py-24 px-6 bg-[#0A0A0A] border-t border-[#222222]">
                <div className="container mx-auto">
                  <HUDTitle text={t.srv.title} sub={t.srv.p} />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {t.srv.items.map((srv, i) => {
                      const Icon = srv.icon
                      return (
                        <div key={i} className="bg-[#111111] p-10 border border-[#222222] hover:border-[#DC2626] transition-colors duration-300 rounded-sm relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#DC2626]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none"></div>
                          <Icon className="w-10 h-10 text-[#DC2626] mb-8" strokeWidth={1.5} />
                          <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-white">{srv.title}</h3>
                          <p className="text-[#888888] font-mono text-xs leading-relaxed">{srv.desc}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </section>

              {/* Portfolio Highlights */}
              <section id="portfolio" className="py-24 px-6 bg-[#050505] border-t border-[#222222]">
                <div className="container mx-auto">
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <HUDTitle text={t.portfolio.title} sub={t.portfolio.p} />
                    <div className="flex flex-wrap gap-2">
                      {t.portfolio.filters.map(f => (
                        <button 
                          key={f}
                          onClick={() => setFilter(f)}
                          className={`px-4 py-2 border rounded-sm font-bold uppercase text-[10px] tracking-widest transition-colors ${filter === f ? 'bg-[#DC2626] text-white border-[#DC2626]' : 'bg-[#111111] text-[#888888] border-[#222222] hover:border-[#444444]'}`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPortfolio.map((item, i) => (
                      <div key={i} className="group relative aspect-video bg-[#111111] overflow-hidden border border-[#222222] rounded-sm cursor-pointer" onClick={() => { window.scrollTo(0,0); setCurrentView('catalog') }}>
                        <div className="relative w-full h-full"><Image src={item.img} alt={item.title} fill className="object-cover opacity-50 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" /></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent flex flex-col justify-end p-8 border-b-2 border-transparent group-hover:border-[#DC2626] transition-colors duration-500">
                          <span className="text-[#DC2626] font-mono font-bold uppercase tracking-widest text-[10px] mb-2">{item.cat}</span>
                          <h3 className="text-xl font-black uppercase tracking-tight mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                          <p className="text-[#888888] text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* The Process */}
              <section id="process" className="py-24 px-6 bg-[#0A0A0A] border-t border-[#222222]">
                <div className="container mx-auto">
                  <HUDTitle text={t.process.title} sub={t.process.p} />
                  
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {t.process.steps.map((step, i) => (
                      <div key={i} className="bg-[#111111] p-8 border border-[#222222] rounded-sm relative">
                        <div className="text-5xl font-black text-[#222222] absolute top-4 right-4 pointer-events-none">
                          {step.num}
                        </div>
                        <h3 className="text-lg font-black uppercase tracking-tight mb-4 text-[#DC2626] relative z-10">{step.title}</h3>
                        <p className="text-[#888888] font-mono text-xs leading-relaxed relative z-10">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Social Proof / Testimonials */}
              <section className="py-24 px-6 bg-[#050505] border-t border-[#222222]">
                <div className="container mx-auto">
                  <HUDTitle text={t.testimonials.title} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {t.testimonials.items.map((test, i) => (
                      <div key={i} className="bg-[#0A0A0A] p-10 border border-[#222222] rounded-sm relative">
                        <div className="absolute top-6 right-6 text-[#222222]">
                          <Star className="w-8 h-8 fill-current" />
                        </div>
                        <p className="text-sm text-white font-mono leading-relaxed italic mb-8 relative z-10">
                          {test.text}
                        </p>
                        <div>
                          <h4 className="font-black uppercase tracking-wider text-[#DC2626] text-sm">{test.name}</h4>
                          <p className="text-[#666666] font-mono text-[10px] font-bold uppercase">{test.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="py-24 px-6 bg-[#0A0A0A] border-t border-[#222222]">
                <div className="container mx-auto max-w-3xl">
                  <HUDTitle text={t.faq.title} />
                  <div className="space-y-4">
                    {t.faq.items.map((faq, i) => (
                      <div key={i} className="bg-[#111111] border border-[#222222] rounded-sm overflow-hidden">
                        <button 
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-[#1A1A1A] transition-colors"
                        >
                          <span className="font-black uppercase tracking-tight text-sm">{faq.q}</span>
                          <ChevronDown className={`w-5 h-5 text-[#DC2626] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                        </button>
                        <motion.div 
                          initial={false}
                          animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 text-[#888888] font-mono text-xs leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Quote Estimator */}
              <section id="quote" className="py-24 px-6 bg-[#050505] border-t border-[#222222]">
                <div className="container mx-auto max-w-5xl">
                  <HUDTitle text={t.quote.title} sub={t.quote.p} />

                  <div className="bg-[#0A0A0A] p-8 md:p-12 border border-[#222222] rounded-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      
                      <div className="space-y-10">
                        <div>
                          <div className="flex justify-between items-end mb-6">
                            <label className="text-[10px] font-mono font-bold text-[#DC2626] tracking-widest uppercase">{t.quote.areaTitle}</label>
                            <span className="text-xl font-black uppercase">{getVehicleLabel()}</span>
                          </div>
                          <input 
                            type="range" 
                            min={1} 
                            max={3} 
                            step={1}
                            value={vehicleClass} 
                            onChange={(e) => setVehicleClass(Number(e.target.value))}
                            className="w-full h-1 bg-[#222222] appearance-none cursor-pointer focus:outline-none accent-[#DC2626]"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] font-mono font-bold text-[#DC2626] tracking-widest uppercase block mb-4">{t.quote.reqTitle}</label>
                          <div className="grid grid-cols-1 gap-3">
                            {t.quote.reqOptions.map(opt => (
                              <button 
                                key={opt.id}
                                onClick={() => handleIssueChange(opt.id)}
                                className={`p-4 border rounded-sm transition-colors text-xs font-black uppercase tracking-wider text-left ${
                                  issueType === opt.id 
                                  ? 'border-[#DC2626] bg-[#DC2626]/10 text-[#DC2626]' 
                                  : 'border-[#333333] bg-[#111111] text-[#888888] hover:border-[#555555]'
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-center bg-[#111111] border border-[#222222] p-8 rounded-sm">
                        <div className="text-[10px] font-mono font-bold text-[#DC2626] tracking-widest uppercase mb-4 flex items-center gap-2">
                          <Activity className="w-3 h-3" /> {t.quote.totalTitle}
                        </div>
                        
                        <div className={`mb-6 transition-all duration-300 ${isCalculating ? 'opacity-30 blur-sm scale-95' : 'opacity-100 blur-0 scale-100'}`}>
                          <div className="text-5xl font-black tracking-tighter text-white">
                            ${getPrice()}
                          </div>
                        </div>
                        
                        <p className="text-[#666666] font-mono text-[10px] leading-relaxed mb-8">
                          {t.quote.totalDesc}
                        </p>
                        
                        <button 
                          onClick={() => { window.scrollTo(0,0); setCurrentView('contact') }}
                          className="w-full bg-[#DC2626] text-white font-black text-xs py-4 rounded-sm uppercase tracking-wider hover:bg-[#B91C1C] transition-colors shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                        >
                          {t.quote.ctaBtn}
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* Catalog View (Telemetry) */}
          {currentView === 'catalog' && (
            <motion.div 
              key="catalog"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-grow flex flex-col bg-[#0A0A0A] py-24 px-6 relative"
            >
              {/* Technical Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

              <div className="container mx-auto relative z-10">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#333333] bg-[#111111] rounded-full text-[10px] font-mono font-bold uppercase tracking-widest text-[#DC2626] mb-8">
                    <Activity className="w-3 h-3" /> {t.catalogPage.tag}
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-white">
                    {t.catalogPage.title}
                  </h2>
                  <p className="text-[#888888] font-mono text-sm leading-relaxed mb-12">
                    {t.catalogPage.desc}
                  </p>

                  <div className="flex flex-wrap justify-center gap-4">
                    {t.catalogPage.filters.map(f => (
                      <button 
                        key={f}
                        onClick={() => setCatalogFilter(f)}
                        className={`px-4 py-2 border rounded-sm font-bold uppercase text-[10px] tracking-widest transition-colors ${
                          catalogFilter === f ? 'bg-[#DC2626] text-white border-[#DC2626]' : 'bg-[#111111] text-[#888888] border-[#333333] hover:border-[#555555]'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-16 max-w-6xl mx-auto">
                  {filteredCatalog.map((project, i) => (
                    <motion.div 
                      layout
                      key={project.title}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={springTransition}
                      className="flex flex-col lg:flex-row gap-10 bg-[#050505] border border-[#222222] p-6 rounded-sm group"
                    >
                      <div className="lg:w-1/2 aspect-video bg-[#111111] relative overflow-hidden rounded-sm border border-[#333333]">
                        <div className="relative w-full h-full"><Image src={project.img} alt={project.title} fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] grayscale group-hover:grayscale-0" /></div>
                        <div className="absolute top-4 left-4 bg-[#DC2626] text-white text-[10px] font-black uppercase px-2 py-1 tracking-widest">
                          {project.cat}
                        </div>
                      </div>

                      <div className="lg:w-1/2 flex flex-col justify-center">
                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6 text-white">{project.title}</h3>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="bg-[#111111] p-4 border border-[#222222] rounded-sm">
                            <div className="text-[10px] font-mono text-[#888888] uppercase tracking-widest mb-1">Telemetry Data</div>
                            <div className="text-sm font-black text-[#DC2626] uppercase">{project.specs}</div>
                          </div>
                          <div className="bg-[#111111] p-4 border border-[#222222] rounded-sm">
                            <div className="text-[10px] font-mono text-[#888888] uppercase tracking-widest mb-1">Assigned Operative</div>
                            <div className="text-sm font-black text-white uppercase">{project.tech}</div>
                          </div>
                        </div>

                        <p className="text-[#888888] font-mono text-xs leading-relaxed mb-8">
                          {project.desc}
                        </p>

                        <div className="mt-auto border-l-2 border-[#DC2626] pl-6 py-2">
                          <p className="text-white font-mono text-xs italic mb-4">
                            {project.comment}
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="text-[10px] font-bold tracking-widest text-[#888888] uppercase">{project.client}</div>
                            <div className="flex gap-1">
                              {Array.from({ length: 5 }).map((_, idx) => (
                                <Star key={idx} className={`w-3 h-3 ${idx < Math.floor(project.rating) ? 'fill-[#DC2626] text-[#DC2626]' : 'fill-[#333333] text-[#333333]'}`} />
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

          {/* Contact View (Book Bay) */}
          {currentView === 'contact' && (
            <motion.div 
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-grow flex items-center bg-[#050505] py-24 px-6 relative"
            >
              {/* Radar/Grid background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <div className="w-[800px] h-[800px] border border-[#DC2626] rounded-full absolute"></div>
                <div className="w-[600px] h-[600px] border border-[#DC2626] rounded-full absolute"></div>
                <div className="w-[400px] h-[400px] border border-[#DC2626] rounded-full absolute"></div>
                <div className="w-full h-[1px] bg-[#DC2626] absolute"></div>
                <div className="h-full w-[1px] bg-[#DC2626] absolute"></div>
              </div>
              
              <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#333333] bg-[#111111] rounded-full text-[10px] font-mono font-bold uppercase tracking-widest text-[#DC2626] mb-8">
                    <Calendar className="w-3 h-3" /> {t.contactPage.tag}
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 text-white">
                    {t.contactPage.title}
                  </h2>
                  <p className="text-[#888888] font-mono text-sm leading-relaxed mb-12 max-w-md">
                    {t.contactPage.desc}
                  </p>

                  <div className="space-y-6 font-mono font-bold text-white">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#111111] border border-[#333333] rounded-sm flex items-center justify-center">
                        <Activity className="w-5 h-5 text-[#DC2626]" />
                      </div>
                      <span className="text-sm tracking-widest">+1 (800) 555-TUNE</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#111111] border border-[#333333] rounded-sm flex items-center justify-center">
                        <Target className="w-5 h-5 text-[#DC2626]" />
                      </div>
                      <span className="text-sm tracking-widest">telemetry@velocitytech.com</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0A0A0A] border border-[#222222] p-10 rounded-sm shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-1 bg-[#DC2626]"></div>
                  <form className="space-y-6 font-mono" onSubmit={(e) => { e.preventDefault(); setCurrentView('landing'); }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-bold text-[#888888] uppercase tracking-widest mb-2">
                          {t.contactPage.form.fn}
                        </label>
                        <input type="text" className="w-full bg-[#111111] border border-[#333333] p-4 text-white text-sm focus:outline-none focus:border-[#DC2626] transition-colors rounded-sm" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-[#888888] uppercase tracking-widest mb-2">
                          {t.contactPage.form.ln}
                        </label>
                        <input type="text" className="w-full bg-[#111111] border border-[#333333] p-4 text-white text-sm focus:outline-none focus:border-[#DC2626] transition-colors rounded-sm" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#888888] uppercase tracking-widest mb-2">
                        {t.contactPage.form.email}
                      </label>
                      <input type="email" className="w-full bg-[#111111] border border-[#333333] p-4 text-white text-sm focus:outline-none focus:border-[#DC2626] transition-colors rounded-sm" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#888888] uppercase tracking-widest mb-2">
                        {t.contactPage.form.vin}
                      </label>
                      <input type="text" className="w-full bg-[#111111] border border-[#333333] p-4 text-white text-sm focus:outline-none focus:border-[#DC2626] transition-colors rounded-sm placeholder-[#444]" placeholder="WBA3C..." />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#888888] uppercase tracking-widest mb-2">
                        {t.contactPage.form.scope}
                      </label>
                      <textarea rows={4} className="w-full bg-[#111111] border border-[#333333] p-4 text-white text-sm focus:outline-none focus:border-[#DC2626] transition-colors resize-none rounded-sm"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#DC2626] text-white font-black text-xs py-5 rounded-sm uppercase tracking-wider hover:bg-[#B91C1C] transition-colors flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                      <Cpu className="w-4 h-4" /> {t.contactPage.form.submit}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-16 border-t border-[#222222] bg-[#0A0A0A]">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-[#888888]">
          <div className="md:col-span-2">
            <div className="font-black text-xl tracking-tighter uppercase flex items-center gap-2 mb-6 text-white">
              <Zap className="w-5 h-5 text-[#DC2626]" />
              VELOCITY
            </div>
            <p className="font-mono text-xs max-w-sm leading-relaxed">
              {t.footer.desc}
            </p>
          </div>
          
          <div className="font-mono text-xs">
            <div className="text-white font-bold tracking-widest uppercase mb-6">{t.footer.contact}</div>
            <ul className="space-y-4">
              <li>1 (800) 555-TUNE</li>
              <li>info@velocitytech.com</li>
            </ul>
          </div>

          <div className="font-mono text-xs">
            <div className="text-white font-bold tracking-widest uppercase mb-6">{t.footer.legal}</div>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-[#222222] flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] font-bold">
          <div className="tracking-widest uppercase text-[#666666]">{t.footer.rights}</div>
          <div className="text-[#DC2626] tracking-[0.3em] uppercase">{t.footer.tag}</div>
        </div>
      </footer>
    </div>
  )
}
