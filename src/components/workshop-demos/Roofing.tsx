"use client"
import Image from 'next/image'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Home, Shield, Droplets, ChevronRight, Star, ChevronDown, CheckCircle2, ArrowLeft, CloudRain, ShieldAlert, Hammer, Navigation } from 'lucide-react'
import { useState } from 'react'

const dict = {
  usa: {
    nav: { srv: 'Protection', port: 'Deployments', proc: 'Process', faq: 'FAQ', est: 'Estimator', book: 'Inspection', back: 'Abort & Return' },
    hero: { 
      t1: 'ATMOSPHERIC', 
      t2: 'DEFENSE.', 
      p: 'Premium residential and commercial roofing systems engineered to withstand the most severe weather events.',
      btn1: 'Book Drone Inspection',
      btn2: 'View Deployments'
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
        { cat: 'Asphalt', title: 'Estate Shingle Replacement', desc: 'Installed Owen\'s Corning Duration shingles in Onyx Black.', img: 'https://placehold.co/800x600/1E293B/3B82F6?text=Asphalt+Roof' },
        { cat: 'Metal', title: 'Modern Farmhouse', desc: 'Standing seam metal roof in Matte Black for maximum longevity.', img: 'https://placehold.co/800x600/0F172A/3B82F6?text=Metal+Roof' },
        { cat: 'Flat', title: 'Commercial TPO', desc: '10,000 sq ft heat-welded TPO membrane for a retail center.', img: 'https://placehold.co/800x600/334155/3B82F6?text=TPO+Membrane' },
        { cat: 'Asphalt', title: 'Suburban Upgrade', desc: 'Complete tear-off and replacement with upgraded ridge vents.', img: 'https://placehold.co/800x600/020617/3B82F6?text=Residential+Roof' }
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
      contact: 'Command Center',
      legal: 'Legal',
      rights: '© 2026 Arasue Forge LLC. All rights reserved.',
      tag: 'Weather any storm.'
    },
    contactPage: {
      tag: 'Deployment',
      title: 'Request Drone Recon.',
      desc: 'Deploy our aerial assessment team to your location. We utilize high-resolution drone topography to measure pitch and detect hail/wind damage.',
      form: {
        fn: 'Commander / First Name',
        ln: 'Last Name',
        email: 'Direct Comms / Email',
        address: 'Property Coordinates / Address',
        scope: 'Damage Report / Objective',
        submit: 'Deploy Recon Unit'
      }
    },
    catalogPage: {
      tag: 'Mission Archive',
      title: 'Recent Deployments.',
      desc: 'Declassified footage of our structural canopies. Review our latest atmospheric defense systems protecting high-value assets.',
      filters: ['All Systems', 'Asphalt', 'Metal', 'Flat'],
      projects: [
        { cat: 'Asphalt', title: 'Operation: Onyx Estate', location: 'Highland Park, IL', specs: 'Owens Corning / Class 4', tech: 'Squad Alpha', desc: 'Complete teardown and replacement of a hail-compromised roof. Upgraded the entire system to Class 4 Impact Resistant architectural shingles capable of withstanding 130mph wind shears.', client: 'Jessica T.', comment: '"The speed and precision of their crew was militaristic. They arrived at 7 AM, stripped the roof, installed the new one, and swept every nail by 5 PM."', rating: 5, img: 'https://placehold.co/800x1000/1E293B/3B82F6?text=Asphalt+Roof' },
        { cat: 'Metal', title: 'Farmhouse Grid Defense', location: 'Bozeman, MT', specs: '24 Gauge Standing Seam', tech: 'Squad Bravo', desc: 'Engineered and installed a lifetime standing seam metal roof in Matte Black. Designed specifically to shed heavy snow loads and reflect intense high-altitude UV radiation.', client: 'David L.', comment: '"Not only does it look incredibly sleek and modern, but we no longer have to worry about ice dams destroying our gutters."', rating: 5, img: 'https://placehold.co/800x600/0F172A/3B82F6?text=Metal+Roof' },
        { cat: 'Flat', title: 'Commercial Sector 7', location: 'Chicago, IL', specs: '60-mil TPO Membrane', tech: 'Commercial Unit', desc: 'Overhauled a leaking 15,000 sq ft retail center. Heat-welded a bright white 60-mil TPO membrane over ISO insulation to maximize energy efficiency and halt water intrusion permanently.', client: 'Retail Management Group', comment: '"Shelter Pro secured the perimeter and executed the job without interrupting our tenants\' business hours. Consummate professionals."', rating: 5, img: 'https://placehold.co/800x600/334155/3B82F6?text=TPO+Membrane' },
        { cat: 'Asphalt', title: 'Suburban Upgrade', location: 'Naperville, IL', specs: 'Timberline HDZ', tech: 'Squad Alpha', desc: 'Replaced an aging 3-tab roof with dimensional architectural shingles. Greatly improved attic circulation by installing continuous ridge vents and premium synthetic underlayment.', client: 'Robert K.', comment: '"The drone inspection sold me. They showed me exactly where the water was getting in. The new roof looks phenomenal."', rating: 5, img: 'https://placehold.co/800x1000/020617/3B82F6?text=Residential+Roof' }
      ]
    }
  },
  mex: {
    nav: { srv: 'Protección', port: 'Despliegues', proc: 'Proceso', faq: 'FAQ', est: 'Estimador', book: 'Inspección', back: 'Abortar y Volver' },
    hero: { 
      t1: 'DEFENSA', 
      t2: 'ATMOSFÉRICA.', 
      p: 'Sistemas de techado residenciales y comerciales premium, diseñados para soportar los eventos climáticos más severos.',
      btn1: 'Agendar Dron de Reconocimiento',
      btn2: 'Ver Despliegues'
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
        { cat: 'Asfaltica', title: 'Reemplazo de Tejas', desc: 'Instalación de tejas Owen\'s Corning Duration en Negro Ónix.', img: 'https://placehold.co/800x600/1E293B/3B82F6?text=Techo+Asfaltico' },
        { cat: 'Metal', title: 'Casa de Campo Moderna', desc: 'Techo de metal engargolado en Negro Mate para máxima longevidad.', img: 'https://placehold.co/800x600/0F172A/3B82F6?text=Techo+Metalico' },
        { cat: 'Plano', title: 'TPO Comercial', desc: 'Membrana TPO de 1,000 m² soldada por calor para un centro comercial.', img: 'https://placehold.co/800x600/334155/3B82F6?text=Membrana+TPO' },
        { cat: 'Asfaltica', title: 'Actualización Suburbana', desc: 'Desmontaje completo y reemplazo con ventilación de cumbrera mejorada.', img: 'https://placehold.co/800x600/020617/3B82F6?text=Techo+Residencial' }
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
      contact: 'Centro de Comando',
      legal: 'Legal',
      rights: '© 2026 Arasue Forge LLC. Todos los derechos reservados.',
      tag: 'Supera cualquier tormenta.'
    },
    contactPage: {
      tag: 'Despliegue',
      title: 'Solicitar Reconocimiento.',
      desc: 'Despliega nuestro equipo de evaluación aérea en tu ubicación. Utilizamos topografía de drones de alta resolución para medir pendientes y detectar daños por granizo.',
      form: {
        fn: 'Comandante / Nombre',
        ln: 'Apellido',
        email: 'Comunicaciones / Email',
        address: 'Coordenadas / Dirección',
        scope: 'Reporte de Daños / Objetivo',
        submit: 'Desplegar Unidad Dron'
      }
    },
    catalogPage: {
      tag: 'Archivo de Misiones',
      title: 'Despliegues Recientes.',
      desc: 'Imágenes desclasificadas de nuestras cúpulas estructurales. Revisa nuestros últimos sistemas de defensa atmosférica.',
      filters: ['Todos los Sistemas', 'Asfaltica', 'Metal', 'Plano'],
      projects: [
        { cat: 'Asfaltica', title: 'Operación: Finca Ónix', location: 'San Pedro, NL', specs: 'Owens Corning / Clase 4', tech: 'Escuadrón Alfa', desc: 'Desmontaje completo y reemplazo de un techo comprometido por granizo. Actualizamos el sistema a tejas arquitectónicas resistentes al impacto Clase 4, capaces de soportar ráfagas de 200 km/h.', client: 'Jessica T.', comment: '"La velocidad y precisión de su equipo fue militar. Llegaron a las 7 AM, quitaron el techo, instalaron el nuevo y barrieron cada clavo para las 5 PM."', rating: 5, img: 'https://placehold.co/800x1000/1E293B/3B82F6?text=Techo+Asfaltico' },
        { cat: 'Metal', title: 'Defensa de Casa de Campo', location: 'Valle de Bravo, MEX', specs: 'Metal Engargolado Calibre 24', tech: 'Escuadrón Bravo', desc: 'Diseñamos e instalamos un techo de metal engargolado de por vida en Negro Mate. Diseñado específicamente para repeler cargas pesadas de nieve y reflejar la intensa radiación UV.', client: 'David L.', comment: '"No solo se ve increíblemente elegante y moderno, sino que ya no tenemos que preocuparnos por represas de hielo destruyendo nuestras canaletas."', rating: 5, img: 'https://placehold.co/800x600/0F172A/3B82F6?text=Techo+Metalico' },
        { cat: 'Plano', title: 'Sector Comercial 7', location: 'Polanco, CDMX', specs: 'Membrana TPO 60-mil', tech: 'Unidad Comercial', desc: 'Renovación de un centro comercial con goteras de 1,500 m². Soldamos por calor una membrana TPO blanca brillante sobre aislamiento ISO para detener la intrusión de agua permanentemente.', client: 'Grupo de Gestión', comment: '"Shelter Pro aseguró el perímetro y ejecutó el trabajo sin interrumpir el horario comercial de nuestros inquilinos. Profesionales consumados."', rating: 5, img: 'https://placehold.co/800x600/334155/3B82F6?text=Membrana+TPO' },
        { cat: 'Asfaltica', title: 'Actualización Suburbana', location: 'Santa Fe, CDMX', specs: 'Timberline HDZ', tech: 'Escuadrón Alfa', desc: 'Reemplazamos un techo envejecido con tejas arquitectónicas dimensionales. Mejoramos la circulación del ático instalando ventilación continua de cumbrera.', client: 'Robert K.', comment: '"La inspección con dron me convenció. Me mostraron exactamente dónde estaba entrando el agua. El nuevo techo se ve fenomenal."', rating: 5, img: 'https://placehold.co/800x1000/020617/3B82F6?text=Techo+Residencial' }
      ]
    }
  }
}

const SlateTag = ({ icon: Icon, text }: { icon: React.ElementType, text: string }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#3B82F6]/30 bg-[#0F172A] text-[10px] font-mono font-bold uppercase tracking-widest text-[#3B82F6] mb-6 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
    <Icon className="w-3 h-3" /> {text}
  </div>
)

export function Roofing() {
  const [region, setRegion] = useState<'usa' | 'mex'>('usa')
  const [currentView, setCurrentView] = useState<'landing' | 'contact' | 'catalog'>('landing')
  const [size, setSize] = useState(30) 
  const [material, setMaterial] = useState('arch')
  const [isCalculating, setIsCalculating] = useState(false)
  const [filter, setFilter] = useState('All')
  const [catalogFilter, setCatalogFilter] = useState('All Systems')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  
  const reduce = useReducedMotion()
  const t = dict[region]

  // Spring physics
  const springTransition = { type: "spring", stiffness: 300, damping: 30 }

  const toggleRegion = () => {
    setIsCalculating(true)
    setTimeout(() => {
      if (region === 'usa') {
        setRegion('mex')
        setSize(Math.round(size * 9.29)) // 1 Square = ~9.29 sq meters
        setFilter('Todos')
        setCatalogFilter('Todos los Sistemas')
      } else {
        setRegion('usa')
        setSize(Math.round(size / 9.29))
        setFilter('All')
        setCatalogFilter('All Systems')
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

  const getPrice = () => {
    let pricePerUnit = 0;
    
    // USA: price per Square (100 sq ft)
    if (region === 'usa') {
      if (material === '3tab') pricePerUnit = 350;
      if (material === 'arch') pricePerUnit = 550;
      if (material === 'metal') pricePerUnit = 1100;
    } 
    // MEX: price per square meter
    else {
      if (material === '3tab') pricePerUnit = 400; // ~400 MXN per sq meter
      if (material === 'arch') pricePerUnit = 800;
      if (material === 'metal') pricePerUnit = 2000;
    }
    
    const min = Math.round((size * pricePerUnit) * 0.9);
    const max = Math.round((size * pricePerUnit) * 1.1);
    
    return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
  }

  const filteredPortfolio = filter === 'All' || filter === 'Todos' 
    ? t.portfolio.items 
    : t.portfolio.items.filter(item => item.cat === filter || 
      (filter === 'Asfaltica' && item.cat === 'Asphalt') || 
      (filter === 'Plano' && item.cat === 'Flat'))

  const filteredCatalog = catalogFilter === 'All Systems' || catalogFilter === 'Todos los Sistemas'
    ? t.catalogPage.projects
    : t.catalogPage.projects.filter(item => item.cat === catalogFilter || 
      (catalogFilter === 'Asfaltica' && item.cat === 'Asphalt') || 
      (catalogFilter === 'Plano' && item.cat === 'Flat'))

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-[#3B82F6] selection:text-white flex flex-col overflow-x-hidden">
      
      {/* Navigation - Slate Tech */}
      <nav className="w-full bg-[#0F172A]/90 backdrop-blur-md border-b border-[#1E293B] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="font-black text-2xl tracking-tighter flex items-center gap-2 cursor-pointer"
            onClick={() => setCurrentView('landing')}
          >
            <ShieldAlert className="w-6 h-6 text-[#3B82F6]" />
            SHELTER<span className="text-[#3B82F6]">PRO</span>
          </div>
          
          {currentView === 'landing' ? (
            <div className="hidden lg:flex gap-8 font-bold text-[11px] tracking-widest uppercase text-[#94A3B8]">
              <a href="#services" className="hover:text-white transition-colors">{t.nav.srv}</a>
              <button onClick={() => { window.scrollTo(0,0); setCurrentView('catalog') }} className="hover:text-white transition-colors">{t.nav.port}</button>
              <a href="#process" className="hover:text-white transition-colors">{t.nav.proc}</a>
              <a href="#quote" className="hover:text-[#3B82F6] transition-colors">{t.nav.est}</a>
            </div>
          ) : (
            <div className="hidden lg:flex" />
          )}

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleRegion}
              className="flex items-center gap-2 px-3 py-1.5 border border-[#1E293B] bg-[#020617] hover:bg-[#1E293B] transition-colors text-[10px] font-bold uppercase tracking-widest rounded-sm"
            >
              {region === 'usa' ? 'US' : 'MX'}
            </button>
            {currentView === 'landing' ? (
              <button 
                onClick={() => { window.scrollTo(0,0); setCurrentView('contact') }}
                className="hidden sm:inline-flex bg-[#3B82F6] text-white px-6 py-2 rounded-sm font-bold text-xs uppercase tracking-wider hover:bg-[#2563EB] transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] items-center gap-2"
              >
                <Navigation className="w-4 h-4" /> {t.nav.book}
              </button>
            ) : (
              <button 
                onClick={() => { window.scrollTo(0,0); setCurrentView('landing') }}
                className="hidden sm:inline-flex items-center gap-2 border border-[#3B82F6]/50 text-[#3B82F6] px-6 py-2 rounded-sm font-bold text-xs uppercase tracking-wider hover:bg-[#0F172A] transition-all"
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
              <section className="pt-32 pb-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#020617]">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3B82F6] blur-[200px] opacity-[0.07] rounded-full pointer-events-none"></div>
                
                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <motion.div
                    initial={reduce ? false : { opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={springTransition}
                  >
                    <SlateTag icon={CheckCircle2} text={t.trust} />
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
                      <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#94A3B8]">{t.hero.t1}</span><br/>
                      <span className="text-[#3B82F6]">{t.hero.t2}</span>
                    </h1>
                    <p className="text-lg text-[#94A3B8] mb-10 max-w-lg font-medium leading-relaxed">
                      {t.hero.p}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 font-mono text-xs font-bold uppercase tracking-widest">
                      <button 
                        onClick={() => { window.scrollTo(0,0); setCurrentView('contact') }}
                        className="bg-[#3B82F6] text-white px-8 py-4 rounded-sm hover:bg-[#2563EB] transition-colors flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                      >
                        <Navigation className="w-4 h-4" /> {t.hero.btn1}
                      </button>
                      <button 
                        onClick={() => { window.scrollTo(0,0); setCurrentView('catalog') }}
                        className="border border-[#1E293B] bg-[#0F172A] text-white px-8 py-4 rounded-sm hover:border-[#3B82F6] transition-colors"
                      >
                        {t.hero.btn2}
                      </button>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={reduce ? false : { opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ...springTransition, delay: 0.1 }}
                    className="relative aspect-square md:aspect-[4/3] bg-[#0F172A] border border-[#1E293B] rounded-lg overflow-hidden p-6 flex flex-col justify-between"
                  >
                     <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
                     <div className="relative z-10 flex justify-between items-start">
                       <div className="flex gap-2">
                         <div className="w-3 h-3 rounded-full bg-[#3B82F6] animate-pulse" />
                         <div className="text-[10px] font-mono font-bold text-[#3B82F6] tracking-widest">DRONE SAT-LINK ACTIVE</div>
                       </div>
                       <ShieldAlert className="w-6 h-6 text-[#1E293B]" />
                     </div>
                     <div className="relative z-10 mt-auto border border-[#1E293B] bg-[#020617]/80 backdrop-blur-sm p-4">
                       <div className="text-xs font-mono text-[#94A3B8] mb-2">SCANNING PERIMETER...</div>
                       <div className="h-1 w-full bg-[#1E293B] rounded-full overflow-hidden">
                         <motion.div 
                           animate={{ x: ["-100%", "100%"] }}
                           transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                           className="h-full w-1/2 bg-[#3B82F6] shadow-[0_0_10px_#3B82F6]" 
                         />
                       </div>
                     </div>
                  </motion.div>
                </div>
              </section>

              {/* Defense Systems Section */}
              <section id="services" className="py-24 px-6 border-t border-[#1E293B] bg-[#020617]">
                <div className="max-w-7xl mx-auto">
                  <div className="mb-16 md:w-2/3">
                    <SlateTag icon={Shield} text="Technology" />
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">{t.srv.title}</h2>
                    <p className="text-[#94A3B8] text-lg">{t.srv.p}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {t.srv.items.map((srv, i) => {
                      const Icon = srv.icon
                      return (
                        <div key={i} className="bg-[#0F172A] border border-[#1E293B] p-10 hover:border-[#3B82F6] transition-colors duration-300 rounded-lg group">
                          <Icon className="w-10 h-10 text-[#3B82F6] mb-8" strokeWidth={1.5} />
                          <h3 className="text-xl font-bold mb-4 text-white">{srv.title}</h3>
                          <p className="text-[#94A3B8] text-sm leading-relaxed">{srv.desc}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </section>

              {/* Portfolio Highlights */}
              <section id="portfolio" className="py-24 px-6 border-t border-[#1E293B] bg-[#0F172A]">
                <div className="max-w-7xl mx-auto">
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                      <SlateTag icon={CloudRain} text="Case Studies" />
                      <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">{t.portfolio.title}</h2>
                      <p className="text-[#94A3B8] max-w-xl">{t.portfolio.p}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {t.portfolio.filters.map(f => (
                        <button 
                          key={f}
                          onClick={() => setFilter(f)}
                          className={`px-4 py-2 border rounded-sm font-bold uppercase text-[10px] tracking-widest transition-colors ${filter === f ? 'bg-[#3B82F6] text-white border-[#3B82F6]' : 'bg-[#020617] text-[#94A3B8] border-[#1E293B] hover:border-[#334155]'}`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPortfolio.map((item, i) => (
                      <div key={i} className="group relative aspect-video bg-[#020617] overflow-hidden border border-[#1E293B] rounded-lg cursor-pointer" onClick={() => { window.scrollTo(0,0); setCurrentView('catalog') }}>
                        <div className="relative w-full h-full"><Image src={item.img} alt={item.title} fill className="object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out" /></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent flex flex-col justify-end p-8">
                          <span className="text-[#3B82F6] font-mono font-bold uppercase tracking-widest text-[10px] mb-2">{item.cat}</span>
                          <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                          <p className="text-[#94A3B8] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* The Process */}
              <section id="process" className="py-24 px-6 border-t border-[#1E293B] bg-[#020617]">
                <div className="max-w-7xl mx-auto">
                  <div className="mb-20 text-center">
                    <SlateTag icon={Hammer} text="Execution" />
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">{t.process.title}</h2>
                    <p className="text-[#94A3B8] max-w-2xl mx-auto">{t.process.p}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {t.process.steps.map((step, i) => (
                      <div key={i} className="bg-[#0F172A] p-8 border border-[#1E293B] rounded-lg relative overflow-hidden">
                        <div className="text-6xl font-black text-[#1E293B] absolute -top-2 -right-2 pointer-events-none">
                          {step.num}
                        </div>
                        <h3 className="text-lg font-bold mb-4 text-white relative z-10">{step.title}</h3>
                        <p className="text-[#94A3B8] text-sm leading-relaxed relative z-10">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Social Proof / Testimonials */}
              <section className="py-24 px-6 border-t border-[#1E293B] bg-[#0F172A]">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">{t.testimonials.title}</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {t.testimonials.items.map((test, i) => (
                      <div key={i} className="bg-[#020617] p-10 border border-[#1E293B] rounded-lg relative">
                        <div className="absolute top-6 right-6 text-[#1E293B]">
                          <Shield className="w-8 h-8 fill-current" />
                        </div>
                        <p className="text-sm text-[#94A3B8] leading-relaxed italic mb-8 relative z-10">
                          {test.text}
                        </p>
                        <div>
                          <h4 className="font-bold text-white text-sm">{test.name}</h4>
                          <p className="text-[#3B82F6] font-mono text-[10px] font-bold uppercase">{test.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="py-24 px-6 border-t border-[#1E293B] bg-[#020617]">
                <div className="max-w-3xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">{t.faq.title}</h2>
                  </div>
                  <div className="space-y-4">
                    {t.faq.items.map((faq, i) => (
                      <div key={i} className="bg-[#0F172A] border border-[#1E293B] rounded-lg overflow-hidden">
                        <button 
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-[#1E293B] transition-colors"
                        >
                          <span className="font-bold text-white text-sm">{faq.q}</span>
                          <ChevronDown className={`w-5 h-5 text-[#3B82F6] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                        </button>
                        <motion.div 
                          initial={false}
                          animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 text-[#94A3B8] text-sm leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Quote Estimator */}
              <section id="quote" className="py-24 px-6 border-t border-[#1E293B] bg-[#0F172A]">
                <div className="max-w-5xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">{t.quote.title}</h2>
                    <p className="text-[#94A3B8]">{t.quote.p}</p>
                  </div>

                  <div className="bg-[#020617] p-8 md:p-12 border border-[#1E293B] rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      
                      <div className="space-y-10">
                        <div>
                          <div className="flex justify-between items-end mb-6">
                            <label className="text-[10px] font-mono font-bold text-[#3B82F6] tracking-widest uppercase">{t.quote.areaTitle}</label>
                            <span className="text-2xl font-black text-white">{size} <span className="text-xs font-mono text-[#94A3B8]">{t.quote.areaUnit}</span></span>
                          </div>
                          <input 
                            type="range" 
                            min={10} 
                            max={100} 
                            step={1}
                            value={size} 
                            onChange={(e) => setSize(Number(e.target.value))}
                            className="w-full h-1 bg-[#1E293B] appearance-none cursor-pointer focus:outline-none accent-[#3B82F6]"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] font-mono font-bold text-[#3B82F6] tracking-widest uppercase block mb-4">{t.quote.reqTitle}</label>
                          <div className="space-y-3">
                            {t.quote.reqOptions.map(opt => (
                              <button 
                                key={opt.id}
                                onClick={() => handleMaterialChange(opt.id)}
                                className={`w-full p-4 border rounded-sm transition-colors text-xs font-bold text-left ${
                                  material === opt.id 
                                  ? 'border-[#3B82F6] bg-[#3B82F6]/10 text-[#3B82F6]' 
                                  : 'border-[#1E293B] bg-[#0F172A] text-[#94A3B8] hover:border-[#334155]'
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-center bg-[#0F172A] border border-[#1E293B] p-8 rounded-lg">
                        <div className="text-[10px] font-mono font-bold text-[#3B82F6] tracking-widest uppercase mb-4">{t.quote.totalTitle}</div>
                        
                        <div className={`mb-6 transition-all duration-300 ${isCalculating ? 'opacity-30 blur-sm scale-95' : 'opacity-100 blur-0 scale-100'}`}>
                          <div className="text-4xl md:text-5xl font-black tracking-tighter text-white">
                            {getPrice()}
                          </div>
                        </div>
                        
                        <p className="text-[#94A3B8] text-[10px] leading-relaxed mb-8">
                          {t.quote.totalDesc}
                        </p>
                        
                        <button 
                          onClick={() => { window.scrollTo(0,0); setCurrentView('contact') }}
                          className="w-full bg-[#3B82F6] text-white font-bold text-xs py-4 rounded-sm uppercase tracking-wider hover:bg-[#2563EB] transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2"
                        >
                          <Navigation className="w-4 h-4" /> {t.quote.ctaBtn}
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* Catalog View (Archive) */}
          {currentView === 'catalog' && (
            <motion.div 
              key="catalog"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-grow flex flex-col bg-[#0F172A] py-24 px-6 relative"
            >
              <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                  <SlateTag icon={ShieldAlert} text={t.catalogPage.tag} />
                  <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 text-white">
                    {t.catalogPage.title}
                  </h2>
                  <p className="text-[#94A3B8] text-lg leading-relaxed mb-12">
                    {t.catalogPage.desc}
                  </p>

                  <div className="flex flex-wrap justify-center gap-4">
                    {t.catalogPage.filters.map(f => (
                      <button 
                        key={f}
                        onClick={() => setCatalogFilter(f)}
                        className={`px-4 py-2 border rounded-sm font-bold uppercase text-[10px] tracking-widest transition-colors ${
                          catalogFilter === f ? 'bg-[#3B82F6] text-white border-[#3B82F6]' : 'bg-[#020617] text-[#94A3B8] border-[#1E293B] hover:border-[#334155]'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-16">
                  {filteredCatalog.map((project, i) => (
                    <motion.div 
                      layout
                      key={project.title}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={springTransition}
                      className="flex flex-col lg:flex-row gap-10 bg-[#020617] border border-[#1E293B] p-6 rounded-lg group"
                    >
                      <div className="lg:w-1/2 aspect-video bg-[#0F172A] relative overflow-hidden rounded-md border border-[#1E293B]">
                        <div className="relative w-full h-full"><Image src={project.img} alt={project.title} fill className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" /></div>
                        <div className="absolute top-4 left-4 bg-[#3B82F6] text-white text-[10px] font-bold uppercase px-3 py-1 tracking-widest rounded-sm">
                          {project.cat}
                        </div>
                      </div>

                      <div className="lg:w-1/2 flex flex-col justify-center">
                        <div className="font-mono flex justify-between items-center mb-4">
                          <span className="text-[#94A3B8] text-[10px] tracking-widest uppercase">{project.location}</span>
                        </div>
                        
                        <h3 className="text-3xl font-black tracking-tight mb-6 text-white">{project.title}</h3>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="bg-[#0F172A] p-4 border border-[#1E293B] rounded-sm">
                            <div className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest mb-1">Material Spec</div>
                            <div className="text-sm font-bold text-white">{project.specs}</div>
                          </div>
                          <div className="bg-[#0F172A] p-4 border border-[#1E293B] rounded-sm">
                            <div className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest mb-1">Execution Unit</div>
                            <div className="text-sm font-bold text-white">{project.tech}</div>
                          </div>
                        </div>

                        <p className="text-[#94A3B8] text-sm leading-relaxed mb-8">
                          {project.desc}
                        </p>

                        <div className="mt-auto border-l-2 border-[#3B82F6] pl-6 py-2">
                          <p className="text-white text-sm italic mb-4">
                            {project.comment}
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase">{project.client}</div>
                            <div className="flex gap-1">
                              {Array.from({ length: 5 }).map((_, idx) => (
                                <Star key={idx} className={`w-3 h-3 ${idx < Math.floor(project.rating) ? 'fill-[#3B82F6] text-[#3B82F6]' : 'fill-[#1E293B] text-[#1E293B]'}`} />
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

          {/* Contact View (Deployment) */}
          {currentView === 'contact' && (
            <motion.div 
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-grow flex items-center bg-[#020617] py-24 px-6 relative"
            >
              <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                <div>
                  <SlateTag icon={Navigation} text={t.contactPage.tag} />
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white">
                    {t.contactPage.title}
                  </h2>
                  <p className="text-[#94A3B8] text-lg leading-relaxed mb-12 max-w-md">
                    {t.contactPage.desc}
                  </p>

                  <div className="space-y-6 font-mono font-bold text-white">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#0F172A] border border-[#1E293B] rounded-sm flex items-center justify-center">
                        <Shield className="w-5 h-5 text-[#3B82F6]" />
                      </div>
                      <span className="text-sm tracking-widest">+1 (800) 555-ROOF</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0F172A] border border-[#1E293B] p-10 rounded-lg shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-1 bg-[#3B82F6]"></div>
                  <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setCurrentView('landing'); }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-mono font-bold text-[#94A3B8] uppercase tracking-widest mb-2">
                          {t.contactPage.form.fn}
                        </label>
                        <input type="text" className="w-full bg-[#020617] border border-[#1E293B] p-4 text-white text-sm focus:outline-none focus:border-[#3B82F6] transition-colors rounded-sm" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono font-bold text-[#94A3B8] uppercase tracking-widest mb-2">
                          {t.contactPage.form.ln}
                        </label>
                        <input type="text" className="w-full bg-[#020617] border border-[#1E293B] p-4 text-white text-sm focus:outline-none focus:border-[#3B82F6] transition-colors rounded-sm" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono font-bold text-[#94A3B8] uppercase tracking-widest mb-2">
                        {t.contactPage.form.email}
                      </label>
                      <input type="email" className="w-full bg-[#020617] border border-[#1E293B] p-4 text-white text-sm focus:outline-none focus:border-[#3B82F6] transition-colors rounded-sm" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono font-bold text-[#94A3B8] uppercase tracking-widest mb-2">
                        {t.contactPage.form.address}
                      </label>
                      <input type="text" className="w-full bg-[#020617] border border-[#1E293B] p-4 text-white text-sm focus:outline-none focus:border-[#3B82F6] transition-colors rounded-sm" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono font-bold text-[#94A3B8] uppercase tracking-widest mb-2">
                        {t.contactPage.form.scope}
                      </label>
                      <textarea rows={4} className="w-full bg-[#020617] border border-[#1E293B] p-4 text-white text-sm focus:outline-none focus:border-[#3B82F6] transition-colors resize-none rounded-sm"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#3B82F6] text-white font-bold text-xs py-5 rounded-sm uppercase tracking-wider hover:bg-[#2563EB] transition-colors flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                      <Navigation className="w-4 h-4" /> {t.contactPage.form.submit}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-16 border-t border-[#1E293B] bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-[#94A3B8]">
          <div className="md:col-span-2">
            <div className="font-black text-xl tracking-tighter flex items-center gap-2 mb-6 text-white">
              <ShieldAlert className="w-5 h-5 text-[#3B82F6]" />
              SHELTER<span className="text-[#3B82F6]">PRO</span>
            </div>
            <p className="text-sm max-w-sm leading-relaxed">
              {t.footer.desc}
            </p>
          </div>
          
          <div className="text-xs">
            <div className="text-white font-bold tracking-widest uppercase mb-6">{t.footer.contact}</div>
            <ul className="space-y-4">
              <li>1 (800) 555-ROOF</li>
              <li>hq@shelterpro.com</li>
            </ul>
          </div>

          <div className="text-xs">
            <div className="text-white font-bold tracking-widest uppercase mb-6">{t.footer.legal}</div>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#1E293B] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold">
          <div className="tracking-widest uppercase text-[#475569]">{t.footer.rights}</div>
          <div className="text-[#3B82F6] tracking-[0.2em] uppercase">{t.footer.tag}</div>
        </div>
      </footer>
    </div>
  )
}
