"use client"
import Image from 'next/image'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ThermometerSnowflake, Wind, Flame, ChevronRight, Star, ChevronDown, ShieldCheck, ArrowLeft, Activity, Gauge, Navigation } from 'lucide-react'
import { useState } from 'react'

const dict = {
  usa: {
    nav: { srv: 'Systems', port: 'Grid', proc: 'Protocol', faq: 'FAQ', est: 'Load Calc', book: 'Dispatch', back: 'Terminate' },
    hero: { 
      t1: 'ABSOLUTE', 
      t2: 'CLIMATE.', 
      p: 'High-efficiency thermodynamics engineered for perfect indoor air quality and zero operational downtime.',
      btn1: 'Request Dispatch',
      btn2: 'View Grid Operations'
    },
    trust: 'EPA Certified / Class A',
    srv: {
      title: 'Thermal Capabilities',
      p: 'From residential VRF systems to commercial chiller plants. We master the thermodynamics of comfort.',
      items: [
        { icon: ThermometerSnowflake, title: "Cryo / Cooling", desc: "Ultra-high SEER variable speed systems that drop energy loads while maximizing heat extraction." },
        { icon: Flame, title: "Thermal / Heating", desc: "Reliable winter heating solutions including dual-fuel systems and geothermal heat pump arrays." },
        { icon: Wind, title: "Atmosphere (IAQ)", desc: "HEPA filtration, UV scrubbers, and whole-building humidification for clinical-grade air." }
      ]
    },
    portfolio: {
      title: 'Active Operations',
      p: 'Precision ductwork and immaculate equipment staging. Filter by thermal system type.',
      filters: ['All Nodes', 'Residential', 'Commercial', 'VRF / Ductless'],
      items: [
        { cat: 'Residential', title: '20 SEER Variable Speed', desc: 'Complete system replacement with custom fabricated sheet metal plenums.', img: 'https://placehold.co/800x600/082F49/0EA5E9?text=Condenser+Unit' },
        { cat: 'Commercial', title: 'Rooftop RTU Swap', desc: 'Helicopter lift installation of two 15-ton packaged units for a retail center.', img: 'https://placehold.co/800x600/0F172A/0EA5E9?text=Commercial+RTU' },
        { cat: 'VRF / Ductless', title: 'Multi-Zone Mini Split', desc: '5-zone heat pump system providing independent climate control for an older home.', img: 'https://placehold.co/800x600/1E1B4B/0EA5E9?text=VRF+System' },
        { cat: 'Residential', title: 'Furnace & IAQ', desc: '98% AFUE modulating gas furnace paired with a hospital-grade UV air scrubber.', img: 'https://placehold.co/800x600/450A0A/EA580C?text=Thermal+Core' }
      ]
    },
    process: {
      title: 'Engineering Protocol',
      p: 'We do not guess. We engineer your environment using strict Manual J thermal load calculations.',
      steps: [
        { num: '01', title: 'Thermal Load Calc', desc: 'We scan your envelope—windows, insulation, and volume—to calculate exact BTU requirements.' },
        { num: '02', title: 'System Architecture', desc: 'We present Good/Better/Best configurations based on your desired SEER rating and payload.' },
        { num: '03', title: 'Precision Install', desc: 'Our technicians braze with nitrogen, pull deep vacuums, and fabricate custom transitions.' },
        { num: '04', title: 'Efficiency Audit', desc: 'We test static pressure and airflow across all nodes to ensure the system operates at 100% capacity.' }
      ]
    },
    testimonials: {
      title: 'Occupant Feedback',
      items: [
        { name: 'Sarah L.', role: 'Residential Node', text: '"Our AC failed on a 100-degree Sunday. Aerotherm responded at 2 AM, deployed temporary spot coolers, and had a new 18-SEER system online by Tuesday. Total lifesavers."' },
        { name: 'Thomas G.', role: 'Commercial Operator', text: '"The humidity in our dining room was out of control. Aerotherm diagnosed a severely oversized unit installed by a previous contractor. They re-engineered it, fixed the ductwork, and our energy draw dropped 30%."' }
      ]
    },
    faq: {
      title: 'Database / FAQ',
      items: [
        { q: 'What does SEER mean in your specs?', a: 'Seasonal Energy Efficiency Ratio. Think of it like MPG for your car. A 14 SEER is standard, while a 20+ SEER system uses significantly less electrical load to extract the same amount of heat.' },
        { q: 'Why is my upper level constantly out of thermal range?', a: 'This is usually a volumetric airflow or sizing issue. Heat rises, and single-stage systems often satisfy the lower node thermostat before pushing enough CFM upstairs. A variable-speed system or a zoned damper array corrects this.' },
        { q: 'What is the required maintenance interval?', a: 'Bi-annually. We execute a Cooling audit in the Spring (checking refrigerant pressures and coil Delta-T) and a Thermal audit in the Fall (checking the heat exchanger and burner array).' }
      ]
    },
    quote: {
      title: 'Load Calculator',
      p: 'Estimate the required thermal extraction (Tonnage) based on square footage and calculate baseline deployment costs.',
      areaTitle: 'Conditioned Volume',
      areaUnit: 'sq ft',
      reqTitle: 'Efficiency Target (SEER)',
      reqOptions: [
        { id: '14', label: 'Standard (14-15 SEER)' },
        { id: '16', label: 'High (16-17 SEER)' },
        { id: '20', label: 'Ultra (18-22 SEER)' }
      ],
      totalTitle: 'Estimated Investment',
      totalDesc: '*This is a baseline calculation for equipment and standard deployment. Complex ductwork modifications require an on-site audit.',
      ctaTitle: 'Schedule In-Home Audit',
      ctaBtn: 'Request Audit'
    },
    footer: {
      desc: 'Mastering thermodynamics to deliver perfect indoor environments.',
      contact: 'Command Hub',
      legal: 'Clearances',
      rights: '© 2026 Arasue Forge LLC. All rights reserved.',
      tag: 'Thermal superiority.'
    },
    contactPage: {
      tag: 'Dispatch',
      title: 'Initiate Service.',
      desc: 'Transmit your coordinates and system symptoms. Our dispatch center will route the closest available technician to your sector.',
      form: {
        fn: 'Operator / First Name',
        ln: 'Last Name',
        email: 'Comms / Email',
        address: 'Sector Coordinates / Address',
        scope: 'System Symptoms / Goal',
        submit: 'Transmit Dispatch'
      }
    },
    catalogPage: {
      tag: 'Grid Operations',
      title: 'Deployment Log.',
      desc: 'Technical readouts on our most recent thermal grid installations, from residential ultra-high SEER upgrades to heavy commercial chiller plants.',
      filters: ['All Nodes', 'Residential', 'Commercial', 'VRF / Ductless'],
      projects: [
        { cat: 'Residential', title: '20 SEER Variable Speed Upgrade', location: 'Austin, TX', specs: '20 SEER / 4 Ton / Inverter', tech: 'Unit Alpha', desc: 'Complete teardown of an inefficient 10 SEER system. Deployed an ultra-high efficiency variable speed inverter condenser with custom sheet metal plenums. System now modulates capacity in 1% increments to match exact thermal load.', client: 'Sarah L.', comment: '"The new system is so quiet we have to check the thermostat to see if it\'s running. Our electric bill was cut in half."', rating: 5, img: 'https://placehold.co/800x1000/082F49/0EA5E9?text=Condenser+Unit' },
        { cat: 'Commercial', title: 'Rooftop RTU Helicopter Lift', location: 'Dallas, TX', specs: 'Dual 15-Ton Packaged Units', tech: 'Unit Commercial', desc: 'Coordinated a complex helicopter lift to swap two failing 15-ton rooftop units on a 3-story retail center. Executed the swap on a Sunday morning to ensure zero downtime for the tenants below. Integrated with existing Building Management System (BMS).', client: 'Retail Operations Group', comment: '"Aerotherm executed this with military precision. The crane couldn\'t reach, so they organized the chopper and got it done flawlessly."', rating: 5, img: 'https://placehold.co/800x600/0F172A/0EA5E9?text=Commercial+RTU' },
        { cat: 'VRF / Ductless', title: 'Multi-Zone Heat Pump Array', location: 'Denver, CO', specs: '5-Zone / Hyper-Heating', tech: 'Unit Bravo', desc: 'Installed a 5-zone ductless VRF system in a 1920s historic home where ductwork was impossible. Utilized hyper-heating technology capable of extracting heat from the ambient air even at -13°F.', client: 'Historic Home Trust', comment: '"We finally have AC in the summer and independent heating in every room without ruining the original plaster ceilings."', rating: 5, img: 'https://placehold.co/800x600/1E1B4B/0EA5E9?text=VRF+System' },
        { cat: 'Residential', title: 'Thermal Core & Clinical IAQ', location: 'Chicago, IL', specs: '98% AFUE / HEPA / UV-C', tech: 'Unit Alpha', desc: 'Replaced a cracked heat exchanger with a 98% modulating gas furnace. Integrated a bypass humidifier, a MERV 16 media cabinet, and a UV-C air purifier to neutralize airborne pathogens and VOCs.', client: 'Dr. Thomas E.', comment: '"As a physician with severe allergies, the air quality in my home was paramount. Aerotherm delivered a true clinical-grade atmosphere."', rating: 5, img: 'https://placehold.co/800x1000/450A0A/EA580C?text=Thermal+Core' }
      ]
    }
  },
  mex: {
    nav: { srv: 'Sistemas', port: 'Red', proc: 'Protocolo', faq: 'FAQ', est: 'Carga Térmica', book: 'Despacho', back: 'Terminar' },
    hero: { 
      t1: 'CLIMA', 
      t2: 'ABSOLUTO.', 
      p: 'Termodinámica de alta eficiencia diseñada para una calidad de aire perfecta y cero tiempo de inactividad operativo.',
      btn1: 'Solicitar Despacho',
      btn2: 'Ver Operaciones de Red'
    },
    trust: 'Certificado EPA / Clase A',
    srv: {
      title: 'Capacidades Térmicas',
      p: 'Desde sistemas residenciales VRF hasta plantas enfriadoras comerciales. Dominamos la termodinámica del confort.',
      items: [
        { icon: ThermometerSnowflake, title: "Crio / Enfriamiento", desc: "Sistemas Inverter de alto SEER que reducen cargas energéticas maximizando la extracción de calor." },
        { icon: Flame, title: "Térmico / Calefacción", desc: "Soluciones confiables de invierno incluyendo sistemas de bomba de calor de ultra eficiencia." },
        { icon: Wind, title: "Atmósfera (IAQ)", desc: "Filtración HEPA, purificadores UV y humidificación para un aire de grado clínico." }
      ]
    },
    portfolio: {
      title: 'Operaciones Activas',
      p: 'Conductos de precisión y montaje de equipo inmaculado. Filtra por tipo de sistema.',
      filters: ['Nodos Totales', 'Residencial', 'Comercial', 'Minisplit / VRF'],
      items: [
        { cat: 'Residencial', title: 'Sistema Inverter 20 SEER', desc: 'Reemplazo completo con conductos de lámina galvanizada fabricados a medida.', img: 'https://placehold.co/800x600/082F49/0EA5E9?text=Condensadora' },
        { cat: 'Comercial', title: 'Cambio de Equipo RTU', desc: 'Instalación con grúa de dos unidades paquete de 15 toneladas para una plaza.', img: 'https://placehold.co/800x600/0F172A/0EA5E9?text=Equipo+Paquete' },
        { cat: 'Minisplit / VRF', title: 'Multi-Split Inverter', desc: 'Sistema de 5 zonas proporcionando control independiente para una casa antigua.', img: 'https://placehold.co/800x600/1E1B4B/0EA5E9?text=VRF' },
        { cat: 'Residencial', title: 'Calefacción e IAQ', desc: 'Horno de gas modulante emparejado con un purificador UV de grado clínico.', img: 'https://placehold.co/800x600/450A0A/EA580C?text=Nucleo+Termico' }
      ]
    },
    process: {
      title: 'Protocolo de Ingeniería',
      p: 'No adivinamos. Diseñamos tu entorno utilizando estrictos cálculos de carga térmica Manual J.',
      steps: [
        { num: '01', title: 'Cálculo Térmico', desc: 'Escaneamos tu envolvente—ventanas, aislamiento y volumen—para calcular los BTUs exactos.' },
        { num: '02', title: 'Arquitectura', desc: 'Presentamos configuraciones Bueno/Mejor/Premium basadas en tu SEER deseado.' },
        { num: '03', title: 'Instalación', desc: 'Soldamos con nitrógeno, hacemos vacío profundo y fabricamos transiciones a medida.' },
        { num: '04', title: 'Auditoría', desc: 'Medimos presión estática y flujo de aire en todos los nodos para asegurar 100% de capacidad.' }
      ]
    },
    testimonials: {
      title: 'Retroalimentación de Ocupantes',
      items: [
        { name: 'Sarah L.', role: 'Nodo Residencial', text: '"Nuestro AC murió un domingo a 40 grados. Aerotherm contestó a las 2 AM, desplegó enfriadores portátiles y para el martes instalaron un sistema 18 SEER nuevo. Nos salvaron."' },
        { name: 'Thomas G.', role: 'Operador Comercial', text: '"La humedad en el comedor estaba fuera de control. Aerotherm diagnosticó una unidad severamente sobredimensionada. La re-diseñaron, arreglaron los ductos y la carga de energía bajó 30%."' }
      ]
    },
    faq: {
      title: 'Base de Datos / FAQ',
      items: [
        { q: '¿Qué significa SEER en sus especificaciones?', a: 'Ratio de Eficiencia Energética Estacional. Es como los km/litro de tu auto. 14 SEER es estándar, mientras que un sistema 20+ usa mucha menos carga eléctrica para extraer el mismo calor.' },
        { q: '¿Por qué mi segundo nivel siempre está fuera de rango térmico?', a: 'Suele ser un problema de volumen de flujo de aire o tamaño. El calor sube, y los sistemas simples satisfacen el termostato de abajo antes de empujar suficientes CFM arriba. Un sistema Inverter o zonas controladas corrige esto.' },
        { q: '¿Cuál es el intervalo de mantenimiento requerido?', a: 'Dos veces al año. Ejecutamos una auditoría de Enfriamiento en primavera (revisando presiones y Delta-T) y una Térmica en otoño (revisando quemadores).' }
      ]
    },
    quote: {
      title: 'Calculadora de Carga',
      p: 'Estima la extracción térmica requerida (Tonelaje) basada en el área y calcula costos base de despliegue.',
      areaTitle: 'Volumen Condicionado',
      areaUnit: 'm²',
      reqTitle: 'Meta de Eficiencia (SEER)',
      reqOptions: [
        { id: '14', label: 'Estándar (14-15 SEER)' },
        { id: '16', label: 'Alta (16-17 SEER)' },
        { id: '20', label: 'Ultra (18-22 SEER)' }
      ],
      totalTitle: 'Inversión Estimada',
      totalDesc: '*Cálculo base para equipo y despliegue estándar. Modificaciones complejas requieren una auditoría en sitio.',
      ctaTitle: 'Programar Auditoría',
      ctaBtn: 'Solicitar Auditoría'
    },
    footer: {
      desc: 'Dominando la termodinámica para entregar entornos interiores perfectos.',
      contact: 'Centro de Comando',
      legal: 'Permisos',
      rights: '© 2026 Arasue Forge LLC. Todos los derechos reservados.',
      tag: 'Superioridad térmica.'
    },
    contactPage: {
      tag: 'Despacho',
      title: 'Iniciar Servicio.',
      desc: 'Transmite tus coordenadas y síntomas del sistema. Nuestro centro enrutará al técnico disponible más cercano a tu sector.',
      form: {
        fn: 'Operador / Nombre',
        ln: 'Apellido',
        email: 'Comunicaciones / Email',
        address: 'Coordenadas / Dirección',
        scope: 'Síntomas / Objetivo',
        submit: 'Transmitir Despacho'
      }
    },
    catalogPage: {
      tag: 'Operaciones de Red',
      title: 'Registro de Despliegue.',
      desc: 'Lecturas técnicas sobre nuestras instalaciones térmicas más recientes, desde actualizaciones Inverter hasta chillers comerciales.',
      filters: ['Nodos Totales', 'Residencial', 'Comercial', 'Minisplit / VRF'],
      projects: [
        { cat: 'Residencial', title: 'Actualización Inverter 20 SEER', location: 'Monterrey, NL', specs: '20 SEER / 4 Ton / Inverter', tech: 'Unidad Alfa', desc: 'Desmontaje de sistema ineficiente de 10 SEER. Desplegamos una condensadora Inverter de ultra alta eficiencia con transiciones de lámina a medida. El sistema modula en incrementos de 1% para igualar la carga térmica.', client: 'Sarah L.', comment: '"El nuevo sistema es tan silencioso que tenemos que revisar el termostato para ver si está encendido. Nuestro recibo de luz se redujo a la mitad."', rating: 5, img: 'https://placehold.co/800x1000/082F49/0EA5E9?text=Condensadora' },
        { cat: 'Comercial', title: 'Elevación de RTU con Grúa', location: 'CDMX', specs: 'Dos Equipos Paquete 15-Ton', tech: 'Unidad Comercial', desc: 'Coordinamos una elevación compleja para cambiar dos unidades de techo fallando en una plaza de 3 pisos. Se ejecutó en domingo por la mañana para asegurar cero inactividad. Integrado al Sistema de Gestión de Edificios (BMS).', client: 'Grupo Operativo', comment: '"Aerotherm ejecutó esto con precisión militar. Lo organizaron impecablemente y el enfriamiento es superior."', rating: 5, img: 'https://placehold.co/800x600/0F172A/0EA5E9?text=Equipo+Paquete' },
        { cat: 'Minisplit / VRF', title: 'Arreglo VRF Multi-Zona', location: 'Puebla, PUE', specs: '5 Zonas / Hyper-Heating', tech: 'Unidad Bravo', desc: 'Instalación de sistema VRF de 5 zonas en casa histórica donde los ductos eran imposibles. Utilizamos tecnología capaz de extraer calor del aire ambiente incluso a -10°C.', client: 'Fideicomiso Histórico', comment: '"Por fin tenemos AC en verano y calefacción en cada cuarto sin arruinar los techos originales de yeso."', rating: 5, img: 'https://placehold.co/800x600/1E1B4B/0EA5E9?text=VRF' },
        { cat: 'Residencial', title: 'Núcleo Térmico e IAQ Clínico', location: 'Toluca, MEX', specs: '98% AFUE / HEPA / UV-C', tech: 'Unidad Alfa', desc: 'Reemplazamos un intercambiador agrietado con un horno de gas 98%. Integramos humidificador de desvío, gabinete MERV 16 y purificador UV-C para neutralizar patógenos y COVs.', client: 'Dr. Thomas E.', comment: '"Como médico con alergias severas, la calidad del aire era vital. Aerotherm entregó una atmósfera de grado verdaderamente clínico."', rating: 5, img: 'https://placehold.co/800x1000/450A0A/EA580C?text=Nucleo+Termico' }
      ]
    }
  }
}

// Thermal HUD Element
const ThermalTag = ({ icon: Icon, text, type = 'cooling' }: { icon: any, text: string, type?: 'cooling' | 'heating' }) => (
  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border text-[10px] font-mono font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(0,0,0,0.2)] ${
    type === 'cooling' 
    ? 'border-[#0EA5E9]/30 bg-[#082F49] text-[#0EA5E9] shadow-[0_0_15px_rgba(14,165,233,0.15)]' 
    : 'border-[#EA580C]/30 bg-[#450A0A] text-[#EA580C] shadow-[0_0_15px_rgba(234,88,12,0.15)]'
  }`}>
    <Icon className="w-3 h-3" /> {text}
  </div>
)

export function HVAC() {
  const [region, setRegion] = useState<'usa' | 'mex'>('usa')
  const [currentView, setCurrentView] = useState<'landing' | 'contact' | 'catalog'>('landing')
  const [areaSize, setAreaSize] = useState(2000) 
  const [seer, setSeer] = useState('16')
  const [isCalculating, setIsCalculating] = useState(false)
  const [filter, setFilter] = useState('All')
  const [catalogFilter, setCatalogFilter] = useState('All Nodes')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  
  const reduce = useReducedMotion()
  const t = dict[region]

  const springTransition = { type: "spring", stiffness: 300, damping: 30 }

  const toggleRegion = () => {
    setIsCalculating(true)
    setTimeout(() => {
      if (region === 'usa') {
        setRegion('mex')
        setAreaSize(Math.round(areaSize / 10.764))
        setFilter('Nodos Totales')
        setCatalogFilter('Nodos Totales')
      } else {
        setRegion('usa')
        setAreaSize(Math.round(areaSize * 10.764))
        setFilter('All Nodes')
        setCatalogFilter('All Nodes')
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

  const getPrice = () => {
    let tonnage = 0;
    
    // Rule of thumb: 1 ton per 500 sq ft (USA) or 1 ton per ~46 sq meters (MEX)
    if (region === 'usa') {
      tonnage = Math.ceil(areaSize / 500);
    } else {
      tonnage = Math.ceil(areaSize / 46);
    }
    
    // Base cost per ton based on SEER
    let costPerTon = 0;
    if (seer === '14') costPerTon = region === 'usa' ? 1800 : 25000;
    if (seer === '16') costPerTon = region === 'usa' ? 2400 : 35000;
    if (seer === '20') costPerTon = region === 'usa' ? 3200 : 50000;
    
    const min = Math.round((tonnage * costPerTon) * 0.9);
    const max = Math.round((tonnage * costPerTon) * 1.1);
    
    return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
  }

  const filteredPortfolio = filter === 'All' || filter === 'All Nodes' || filter === 'Nodos Totales'
    ? t.portfolio.items 
    : t.portfolio.items.filter(item => item.cat === filter || 
      (filter === 'Residencial' && item.cat === 'Residential') || 
      (filter === 'Comercial' && item.cat === 'Commercial') ||
      (filter === 'Minisplit / VRF' && item.cat === 'VRF / Ductless'))

  const filteredCatalog = catalogFilter === 'All Nodes' || catalogFilter === 'Nodos Totales'
    ? t.catalogPage.projects
    : t.catalogPage.projects.filter(item => item.cat === catalogFilter || 
      (catalogFilter === 'Residencial' && item.cat === 'Residential') || 
      (catalogFilter === 'Comercial' && item.cat === 'Commercial') ||
      (catalogFilter === 'Minisplit / VRF' && item.cat === 'VRF / Ductless'))

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-[#0EA5E9] selection:text-white flex flex-col overflow-x-hidden">
      
      {/* Navigation - Thermal Dark */}
      <nav className="w-full bg-[#0F172A]/90 backdrop-blur-md border-b border-[#1E293B] sticky top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="font-black text-2xl tracking-tighter flex items-center gap-2 cursor-pointer uppercase"
            onClick={() => setCurrentView('landing')}
          >
            <ThermometerSnowflake className="w-6 h-6 text-[#0EA5E9]" />
            AERO<span className="text-[#0EA5E9]">THERM</span>
          </div>
          
          {currentView === 'landing' ? (
            <div className="hidden lg:flex gap-8 font-bold text-[10px] tracking-widest uppercase text-[#64748B]">
              <a href="#services" className="hover:text-white transition-colors">{t.nav.srv}</a>
              <button onClick={() => { window.scrollTo(0,0); setCurrentView('catalog') }} className="hover:text-white transition-colors">{t.nav.port}</button>
              <a href="#process" className="hover:text-white transition-colors">{t.nav.proc}</a>
              <a href="#quote" className="hover:text-[#0EA5E9] transition-colors">{t.nav.est}</a>
            </div>
          ) : (
            <div className="hidden lg:flex" />
          )}

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleRegion}
              className="flex items-center gap-2 px-3 py-1.5 border border-[#1E293B] bg-[#020617] hover:bg-[#1E293B] transition-colors text-[10px] font-bold uppercase tracking-widest rounded-sm"
            >
              {region === 'usa' ? 'USA' : 'MEX'}
            </button>
            {currentView === 'landing' ? (
              <button 
                onClick={() => { window.scrollTo(0,0); setCurrentView('contact') }}
                className="hidden sm:inline-flex bg-[#0EA5E9] text-white px-6 py-2 rounded-sm font-black text-xs uppercase tracking-wider hover:bg-[#0284C7] transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)]"
              >
                {t.nav.book}
              </button>
            ) : (
              <button 
                onClick={() => { window.scrollTo(0,0); setCurrentView('landing') }}
                className="hidden sm:inline-flex items-center gap-2 border border-[#0EA5E9]/50 text-[#0EA5E9] px-6 py-2 rounded-sm font-black text-xs uppercase tracking-wider hover:bg-[#082F49] transition-all"
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
              <section className="pt-32 pb-24 px-6 relative overflow-hidden bg-[#020617]">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#0EA5E9] blur-[150px] opacity-10 rounded-full pointer-events-none"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-[#EA580C] blur-[150px] opacity-10 rounded-full pointer-events-none"></div>
                
                <div className="container mx-auto relative z-10 text-center">
                  <motion.div
                    initial={reduce ? false : { opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={springTransition}
                  >
                    <ThermalTag icon={ShieldCheck} text={t.trust} />
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-6">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#94A3B8]">{t.hero.t1}</span><br/>
                      <span className="text-[#0EA5E9]">{t.hero.t2}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#94A3B8] mb-12 max-w-2xl mx-auto font-mono text-sm leading-relaxed">
                      {t.hero.p}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <button 
                        onClick={() => { window.scrollTo(0,0); setCurrentView('contact') }}
                        className="bg-[#0EA5E9] text-white px-10 py-4 rounded-sm font-black text-xs uppercase tracking-wider hover:bg-[#0284C7] transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(14,165,233,0.3)]"
                      >
                        <Activity className="w-4 h-4" /> {t.hero.btn1}
                      </button>
                      <button 
                        onClick={() => { window.scrollTo(0,0); setCurrentView('catalog') }}
                        className="border border-[#1E293B] bg-[#0F172A] text-white px-10 py-4 rounded-sm font-black text-xs uppercase tracking-wider hover:border-[#0EA5E9] transition-colors"
                      >
                        {t.hero.btn2}
                      </button>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Capabilities Section */}
              <section id="services" className="py-24 px-6 bg-[#0F172A] border-t border-[#1E293B]">
                <div className="container mx-auto">
                  <div className="mb-16 md:w-2/3">
                    <ThermalTag icon={Gauge} text="Specs" type="heating" />
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">{t.srv.title}</h2>
                    <p className="text-[#94A3B8] font-mono text-sm">{t.srv.p}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {t.srv.items.map((srv, i) => {
                      const Icon = srv.icon
                      const isHeating = i === 1;
                      return (
                        <div key={i} className="bg-[#020617] p-10 border border-[#1E293B] hover:border-[#0EA5E9] transition-colors duration-300 rounded-sm relative overflow-hidden group">
                           <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full pointer-events-none ${isHeating ? 'from-[#EA580C]' : 'from-[#0EA5E9]'}`}></div>
                          <Icon className={`w-10 h-10 mb-8 ${isHeating ? 'text-[#EA580C]' : 'text-[#0EA5E9]'}`} strokeWidth={1.5} />
                          <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-white">{srv.title}</h3>
                          <p className="text-[#64748B] font-mono text-xs leading-relaxed">{srv.desc}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </section>

              {/* Portfolio Highlights */}
              <section id="portfolio" className="py-24 px-6 bg-[#020617] border-t border-[#1E293B]">
                <div className="container mx-auto">
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                      <ThermalTag icon={Activity} text="Visual Data" />
                      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">{t.portfolio.title}</h2>
                      <p className="text-[#94A3B8] font-mono text-sm max-w-xl">{t.portfolio.p}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {t.portfolio.filters.map(f => (
                        <button 
                          key={f}
                          onClick={() => setFilter(f)}
                          className={`px-4 py-2 border rounded-sm font-bold uppercase text-[10px] tracking-widest transition-colors ${filter === f ? 'bg-[#0EA5E9] text-white border-[#0EA5E9]' : 'bg-[#0F172A] text-[#64748B] border-[#1E293B] hover:border-[#334155]'}`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPortfolio.map((item, i) => {
                      const isHeating = item.cat.includes('Heating') || item.title.includes('Furnace') || item.title.includes('Calefacción');
                      return (
                        <div key={i} className="group relative aspect-video bg-[#0F172A] overflow-hidden border border-[#1E293B] rounded-sm cursor-pointer" onClick={() => { window.scrollTo(0,0); setCurrentView('catalog') }}>
                          <div className="relative w-full h-full"><Image src={item.img} alt={item.title} fill className="object-cover opacity-50 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" /></div>
                          <div className={`absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent flex flex-col justify-end p-8 border-b-2 border-transparent transition-colors duration-500 ${isHeating ? 'group-hover:border-[#EA580C]' : 'group-hover:border-[#0EA5E9]'}`}>
                            <span className={`${isHeating ? 'text-[#EA580C]' : 'text-[#0EA5E9]'} font-mono font-bold uppercase tracking-widest text-[10px] mb-2`}>{item.cat}</span>
                            <h3 className="text-xl font-black uppercase tracking-tight mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                            <p className="text-[#94A3B8] text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </section>

              {/* The Process */}
              <section id="process" className="py-24 px-6 bg-[#0F172A] border-t border-[#1E293B]">
                <div className="container mx-auto">
                  <div className="mb-20 text-center">
                    <ThermalTag icon={ThermometerSnowflake} text="Architecture" />
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">{t.process.title}</h2>
                    <p className="text-[#94A3B8] font-mono text-sm max-w-2xl mx-auto">{t.process.p}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {t.process.steps.map((step, i) => (
                      <div key={i} className="bg-[#020617] p-8 border border-[#1E293B] rounded-sm relative">
                        <div className="text-5xl font-black text-[#1E293B] absolute top-4 right-4 pointer-events-none">
                          {step.num}
                        </div>
                        <h3 className="text-lg font-black uppercase tracking-tight mb-4 text-[#0EA5E9] relative z-10">{step.title}</h3>
                        <p className="text-[#64748B] font-mono text-xs leading-relaxed relative z-10">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Social Proof / Testimonials */}
              <section className="py-24 px-6 bg-[#020617] border-t border-[#1E293B]">
                <div className="container mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">{t.testimonials.title}</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {t.testimonials.items.map((test, i) => (
                      <div key={i} className="bg-[#0F172A] p-10 border border-[#1E293B] rounded-sm relative">
                        <div className="absolute top-6 right-6 text-[#1E293B]">
                          <Wind className="w-8 h-8 fill-current" />
                        </div>
                        <p className="text-sm text-white font-mono leading-relaxed italic mb-8 relative z-10">
                          {test.text}
                        </p>
                        <div>
                          <h4 className="font-black uppercase tracking-wider text-[#0EA5E9] text-sm">{test.name}</h4>
                          <p className="text-[#64748B] font-mono text-[10px] font-bold uppercase">{test.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="py-24 px-6 bg-[#0F172A] border-t border-[#1E293B]">
                <div className="container mx-auto max-w-3xl">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">{t.faq.title}</h2>
                  </div>
                  <div className="space-y-4">
                    {t.faq.items.map((faq, i) => (
                      <div key={i} className="bg-[#020617] border border-[#1E293B] rounded-sm overflow-hidden">
                        <button 
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-[#082F49]/50 transition-colors"
                        >
                          <span className="font-black uppercase tracking-tight text-sm">{faq.q}</span>
                          <ChevronDown className={`w-5 h-5 text-[#0EA5E9] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                        </button>
                        <motion.div 
                          initial={false}
                          animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 text-[#94A3B8] font-mono text-xs leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Quote Estimator */}
              <section id="quote" className="py-24 px-6 bg-[#020617] border-t border-[#1E293B]">
                <div className="container mx-auto max-w-5xl">
                  <div className="text-center mb-16">
                    <ThermalTag icon={Gauge} text="Calculation" type="heating" />
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">{t.quote.title}</h2>
                    <p className="text-[#94A3B8] font-mono text-sm max-w-2xl mx-auto">{t.quote.p}</p>
                  </div>

                  <div className="bg-[#0F172A] p-8 md:p-12 border border-[#1E293B] rounded-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      
                      <div className="space-y-10">
                        <div>
                          <div className="flex justify-between items-end mb-6">
                            <label className="text-[10px] font-mono font-bold text-[#0EA5E9] tracking-widest uppercase">{t.quote.areaTitle}</label>
                            <span className="text-2xl font-black text-white">{areaSize} <span className="text-xs font-mono text-[#94A3B8] uppercase">{t.quote.areaUnit}</span></span>
                          </div>
                          <input 
                            type="range" 
                            min={region === 'usa' ? 800 : 80} 
                            max={region === 'usa' ? 5000 : 500} 
                            step={region === 'usa' ? 100 : 10}
                            value={areaSize} 
                            onChange={(e) => setAreaSize(Number(e.target.value))}
                            className="w-full h-1 bg-[#1E293B] appearance-none cursor-pointer focus:outline-none accent-[#0EA5E9]"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] font-mono font-bold text-[#0EA5E9] tracking-widest uppercase block mb-4">{t.quote.reqTitle}</label>
                          <div className="grid grid-cols-1 gap-3">
                            {t.quote.reqOptions.map(opt => (
                              <button 
                                key={opt.id}
                                onClick={() => handleSeerChange(opt.id)}
                                className={`p-4 border rounded-sm transition-colors text-xs font-black uppercase tracking-wider text-left ${
                                  seer === opt.id 
                                  ? 'border-[#0EA5E9] bg-[#0EA5E9]/10 text-[#0EA5E9]' 
                                  : 'border-[#1E293B] bg-[#020617] text-[#64748B] hover:border-[#334155]'
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-center bg-[#020617] border border-[#1E293B] p-8 rounded-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-1 bg-[#0EA5E9]"></div>
                        <div className="text-[10px] font-mono font-bold text-[#0EA5E9] tracking-widest uppercase mb-4 flex items-center gap-2">
                          <Activity className="w-3 h-3" /> {t.quote.totalTitle}
                        </div>
                        
                        <div className={`mb-6 transition-all duration-300 ${isCalculating ? 'opacity-30 blur-sm scale-95' : 'opacity-100 blur-0 scale-100'}`}>
                          <div className="text-4xl md:text-5xl font-black tracking-tighter text-white">
                            {getPrice()}
                          </div>
                        </div>
                        
                        <p className="text-[#64748B] font-mono text-[10px] leading-relaxed mb-8">
                          {t.quote.totalDesc}
                        </p>
                        
                        <button 
                          onClick={() => { window.scrollTo(0,0); setCurrentView('contact') }}
                          className="w-full bg-[#0EA5E9] text-white font-black text-xs py-4 rounded-sm uppercase tracking-wider hover:bg-[#0284C7] transition-colors shadow-[0_0_15px_rgba(14,165,233,0.3)]"
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

          {/* Catalog View (Grid Operations) */}
          {currentView === 'catalog' && (
            <motion.div 
              key="catalog"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-grow flex flex-col bg-[#0F172A] py-24 px-6 relative"
            >
              {/* Technical Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:64px_64px] opacity-20 pointer-events-none" />

              <div className="container mx-auto relative z-10">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                  <ThermalTag icon={Activity} text={t.catalogPage.tag} />
                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-white">
                    {t.catalogPage.title}
                  </h2>
                  <p className="text-[#94A3B8] font-mono text-sm leading-relaxed mb-12">
                    {t.catalogPage.desc}
                  </p>

                  <div className="flex flex-wrap justify-center gap-4">
                    {t.catalogPage.filters.map(f => (
                      <button 
                        key={f}
                        onClick={() => setCatalogFilter(f)}
                        className={`px-4 py-2 border rounded-sm font-bold uppercase text-[10px] tracking-widest transition-colors ${
                          catalogFilter === f ? 'bg-[#0EA5E9] text-white border-[#0EA5E9]' : 'bg-[#020617] text-[#64748B] border-[#1E293B] hover:border-[#334155]'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-16 max-w-6xl mx-auto">
                  {filteredCatalog.map((project, i) => {
                    const isHeating = project.cat.includes('Heating') || project.title.includes('Furnace') || project.title.includes('Calefacción');
                    const accentColor = isHeating ? '#EA580C' : '#0EA5E9';
                    const bgAccent = isHeating ? 'bg-[#450A0A]' : 'bg-[#082F49]';

                    return (
                    <motion.div 
                      layout
                      key={project.title}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={springTransition}
                      className="flex flex-col lg:flex-row gap-10 bg-[#020617] border border-[#1E293B] p-6 rounded-sm group hover:border-[#334155] transition-colors"
                    >
                      <div className={`lg:w-1/2 aspect-video ${bgAccent} relative overflow-hidden rounded-sm border border-[#1E293B]`}>
                        <div className="relative w-full h-full"><Image src={project.img} alt={project.title} fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] grayscale group-hover:grayscale-0" /></div>
                        <div className="absolute top-4 left-4 text-white text-[10px] font-black uppercase px-2 py-1 tracking-widest" style={{ backgroundColor: accentColor }}>
                          {project.cat}
                        </div>
                      </div>

                      <div className="lg:w-1/2 flex flex-col justify-center">
                        <div className="font-mono flex justify-between items-center mb-4">
                          <span className="text-[#64748B] text-[10px] tracking-widest uppercase">[{project.location}]</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6 text-white">{project.title}</h3>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="bg-[#0F172A] p-4 border border-[#1E293B] rounded-sm">
                            <div className="text-[10px] font-mono text-[#64748B] uppercase tracking-widest mb-1">System Specs</div>
                            <div className="text-sm font-black uppercase" style={{ color: accentColor }}>{project.specs}</div>
                          </div>
                          <div className="bg-[#0F172A] p-4 border border-[#1E293B] rounded-sm">
                            <div className="text-[10px] font-mono text-[#64748B] uppercase tracking-widest mb-1">Execution Node</div>
                            <div className="text-sm font-black text-white uppercase">{project.tech}</div>
                          </div>
                        </div>

                        <p className="text-[#94A3B8] font-mono text-xs leading-relaxed mb-8">
                          {project.desc}
                        </p>

                        <div className="mt-auto border-l-2 pl-6 py-2" style={{ borderColor: accentColor }}>
                          <p className="text-white font-mono text-xs italic mb-4">
                            {project.comment}
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="text-[10px] font-bold tracking-widest text-[#64748B] uppercase">{project.client}</div>
                            <div className="flex gap-1">
                              {Array.from({ length: 5 }).map((_, idx) => (
                                <Star key={idx} className={`w-3 h-3 ${idx < Math.floor(project.rating) ? `fill-[${accentColor}] text-[${accentColor}]` : 'fill-[#1E293B] text-[#1E293B]'}`} style={idx < Math.floor(project.rating) ? { fill: accentColor, color: accentColor } : {}} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* Contact View (Dispatch) */}
          {currentView === 'contact' && (
            <motion.div 
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-grow flex items-center bg-[#020617] py-24 px-6 relative"
            >
              <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                <div>
                  <ThermalTag icon={Navigation} text={t.contactPage.tag} />
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 text-white">
                    {t.contactPage.title}
                  </h2>
                  <p className="text-[#94A3B8] font-mono text-sm leading-relaxed mb-12 max-w-md">
                    {t.contactPage.desc}
                  </p>

                  <div className="space-y-6 font-mono font-bold text-white">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#0F172A] border border-[#1E293B] rounded-sm flex items-center justify-center">
                        <Activity className="w-5 h-5 text-[#0EA5E9]" />
                      </div>
                      <span className="text-sm tracking-widest">+1 (800) 555-TEMP</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0F172A] border border-[#1E293B] p-10 rounded-sm shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-1 bg-[#0EA5E9]"></div>
                  <form className="space-y-6 font-mono" onSubmit={(e) => { e.preventDefault(); setCurrentView('landing'); }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-bold text-[#64748B] uppercase tracking-widest mb-2">
                          {t.contactPage.form.fn}
                        </label>
                        <input type="text" className="w-full bg-[#020617] border border-[#1E293B] p-4 text-white text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors rounded-sm" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-[#64748B] uppercase tracking-widest mb-2">
                          {t.contactPage.form.ln}
                        </label>
                        <input type="text" className="w-full bg-[#020617] border border-[#1E293B] p-4 text-white text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors rounded-sm" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#64748B] uppercase tracking-widest mb-2">
                        {t.contactPage.form.email}
                      </label>
                      <input type="email" className="w-full bg-[#020617] border border-[#1E293B] p-4 text-white text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors rounded-sm" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#64748B] uppercase tracking-widest mb-2">
                        {t.contactPage.form.address}
                      </label>
                      <input type="text" className="w-full bg-[#020617] border border-[#1E293B] p-4 text-white text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors rounded-sm" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#64748B] uppercase tracking-widest mb-2">
                        {t.contactPage.form.scope}
                      </label>
                      <textarea rows={4} className="w-full bg-[#020617] border border-[#1E293B] p-4 text-white text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors resize-none rounded-sm"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#0EA5E9] text-white font-black text-xs py-5 rounded-sm uppercase tracking-wider hover:bg-[#0284C7] transition-colors flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
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
      <footer className="py-16 border-t border-[#1E293B] bg-[#0F172A]">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-[#64748B]">
          <div className="md:col-span-2">
            <div className="font-black text-xl tracking-tighter flex items-center gap-2 mb-6 text-white uppercase">
              <ThermometerSnowflake className="w-5 h-5 text-[#0EA5E9]" />
              AERO<span className="text-[#0EA5E9]">THERM</span>
            </div>
            <p className="font-mono text-xs max-w-sm leading-relaxed">
              {t.footer.desc}
            </p>
          </div>
          
          <div className="font-mono text-xs">
            <div className="text-white font-bold tracking-widest uppercase mb-6">{t.footer.contact}</div>
            <ul className="space-y-4">
              <li>1 (800) 555-TEMP</li>
              <li>dispatch@aerotherm.com</li>
            </ul>
          </div>

          <div className="font-mono text-xs">
            <div className="text-white font-bold tracking-widest uppercase mb-6">{t.footer.legal}</div>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Operating License</a></li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-[#1E293B] flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] font-bold">
          <div className="tracking-widest uppercase text-[#475569]">{t.footer.rights}</div>
          <div className="text-[#0EA5E9] tracking-[0.3em] uppercase">{t.footer.tag}</div>
        </div>
      </footer>
    </div>
  )
}
