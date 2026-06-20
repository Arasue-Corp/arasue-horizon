"use client"
import Image from 'next/image'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Hammer, Ruler, Grid, ChevronRight, Star, ChevronDown, MapPin, Phone, Mail, FileSignature, ArrowLeft } from 'lucide-react'
import { useState } from 'react'

const dict = {
  usa: {
    nav: { srv: 'Craft', port: 'Masterworks', proc: 'Process', faq: 'FAQ', est: 'Estimator', book: 'Commission', back: 'Return to Atelier' },
    hero: { 
      t1: 'Shaped by Hand.', 
      t2: 'Built for Generations.', 
      p: 'Bespoke architectural millwork, custom cabinetry, and heritage woodwork for discerning estates and boutiques.',
      btn1: 'Commission a Piece',
      btn2: 'View Masterworks'
    },
    trust: 'Featured in Architectural Digest',
    srv: {
      title: 'Our Craft',
      p: 'Where traditional joinery meets modern precision engineering.',
      items: [
        { icon: Hammer, title: "Custom Cabinetry", desc: "Solid wood kitchens and built-ins perfectly tailored to your architectural space." },
        { icon: Ruler, title: "Architectural Millwork", desc: "Crown molding, wainscoting, and custom trim that defines luxury interiors." },
        { icon: Grid, title: "Heritage Doors", desc: "Grand entryways and interior doors crafted from exotic and domestic hardwoods." }
      ]
    },
    portfolio: {
      title: 'Masterworks Gallery',
      p: 'Explore our latest commissions across luxury residential and commercial spaces.',
      filters: ['All', 'Cabinetry', 'Millwork', 'Doors'],
      items: [
        { cat: 'Cabinetry', title: 'The Aspen Kitchen', desc: 'Rift-sawn white oak with hand-rubbed oil finish.', img: 'https://placehold.co/800x1000/2A1B12/FDFBF7?text=Oak+Kitchen' },
        { cat: 'Doors', title: 'Estate Entryway', desc: 'Solid walnut arched double doors with custom ironwork.', img: 'https://placehold.co/800x600/3E2723/FDFBF7?text=Walnut+Doors' },
        { cat: 'Millwork', title: 'Library Coffered Ceiling', desc: 'Mahogany ceiling grid with integrated indirect lighting.', img: 'https://placehold.co/800x600/1C120C/FDFBF7?text=Coffered+Ceiling' },
        { cat: 'Cabinetry', title: 'Penthouse Wardrobe', desc: 'Floor-to-ceiling ebonized ash with brass inlay.', img: 'https://placehold.co/800x1000/111111/FDFBF7?text=Wardrobe' }
      ]
    },
    process: {
      title: 'The Commission',
      p: 'A collaborative journey from raw timber to finished masterpiece.',
      steps: [
        { num: 'I', title: 'Design & Drafting', desc: 'We begin with hand sketches, evolving into exact 3D CAD models to ensure perfect spatial harmony.' },
        { num: 'II', title: 'Timber Selection', desc: 'Clients are invited to our shop to select the exact slabs and flitches used for their project.' },
        { num: 'III', title: 'Fabrication', desc: 'Traditional mortise-and-tenon joinery combined with CNC precision in our climate-controlled studio.' },
        { num: 'IV', title: 'White-Glove Install', desc: 'Our master carpenters personally deliver and scribe every piece to fit your home seamlessly.' }
      ]
    },
    testimonials: {
      title: 'Words from Patrons',
      items: [
        { name: 'Eleanor H.', role: 'Interior Architect', text: '"Oak & Iron does not just build cabinets; they create furniture that happens to be attached to the walls. Their understanding of grain matching is unparalleled."' },
        { name: 'James L.', role: 'Homeowner', text: '"The mahogany library they built for me is the centerpiece of my home. It feels like it has been there for a century. True artisans."' }
      ]
    },
    faq: {
      title: 'Curiosities & Details',
      items: [
        { q: 'How do you handle wood movement?', a: 'Solid wood breathes. We engineer all our pieces with floating panels and precise tolerances to allow for seasonal expansion and contraction without cracking.' },
        { q: 'What finishes do you use?', a: 'We specialize in hand-rubbed oils and hard-wax finishes that nourish the wood and age gracefully, rather than trapping it under plastic-like polyurethanes.' },
        { q: 'How long does a custom kitchen take?', a: 'A fully bespoke kitchen typically requires 8-12 weeks in our shop after final design approval. Quality cannot be rushed.' }
      ]
    },
    quote: {
      title: 'Investment Guide',
      p: 'Estimate your millwork based on linear footage and material selection.',
      areaTitle: 'Linear Footage',
      areaUnit: 'ft',
      reqTitle: 'Material & Finish',
      reqOptions: [
        { id: 'paint', label: 'Paint-Grade (Poplar/MDF)' },
        { id: 'hardwood', label: 'Domestic (Oak/Walnut)' },
        { id: 'exotic', label: 'Exotic / Quartersawn' }
      ],
      totalTitle: 'Estimated Investment',
      totalDesc: '*Includes shop drawing, fabrication, and standard finishing. Delivery and installation quoted separately.',
      ctaTitle: 'Request Consultation',
      ctaBtn: 'Begin the Dialogue'
    },
    footer: {
      desc: 'Preserving the soul of woodworking through uncompromising craftsmanship.',
      contact: 'Atelier',
      loc1: 'Brooklyn, NY',
      loc2: 'Hudson Valley, NY',
      legal: 'Details',
      rights: '© 2026 Arasue Forge LLC. All rights reserved.',
      tag: 'Carved in history.'
    },
    contactPage: {
      tag: 'Commission',
      title: 'Begin the Dialogue.',
      desc: 'Share the vision for your space. Our master carpenters review all inquiries personally to assess timeline and material feasibility.',
      form: {
        fn: 'First Name',
        ln: 'Last Name',
        email: 'Direct Email',
        scope: 'Project Vision / Architectural Notes',
        submit: 'Submit Inquiry to Atelier'
      }
    },
    catalogPage: {
      tag: 'Archive',
      title: 'The Masterworks.',
      desc: 'A curated selection of our finest commissions. From hand-planed mahogany libraries to rift-sawn oak kitchens.',
      filters: ['All Collections', 'Cabinetry', 'Millwork', 'Doors'],
      projects: [
        { cat: 'Cabinetry', title: 'The Aspen Kitchen', location: 'Aspen, CO', wood: 'Rift-Sawn White Oak', finish: 'Hand-Rubbed Danish Oil', desc: 'A minimalist yet profoundly warm kitchen execution. The grain was continuously matched across all 24 cabinet faces, requiring meticulous flitch selection at the lumber yard.', client: 'Private Estate Owner', comment: '"They treated our kitchen like a piece of fine furniture. The grain matching across the drawers is something I admire every single morning."', rating: 5, img: 'https://placehold.co/800x1000/2A1B12/FDFBF7?text=Oak+Kitchen' },
        { cat: 'Millwork', title: 'Library Coffered Ceiling', location: 'Upper East Side, NY', wood: 'Honduran Mahogany', finish: 'Satin Shellac', desc: 'A deeply traditional coffered ceiling with integrated indirect lighting and hand-carved egg-and-dart moldings. Installed over a rigorous 3-week period.', client: 'Eleanor H., Architect', comment: '"Their understanding of classical proportions and traditional joinery made this library the absolute centerpiece of the penthouse."', rating: 5, img: 'https://placehold.co/800x600/1C120C/FDFBF7?text=Coffered+Ceiling' },
        { cat: 'Doors', title: 'Estate Entryway', location: 'Greenwich, CT', wood: 'Solid Black Walnut', finish: 'Marine Spar Varnish', desc: 'Massive 10-foot arched double doors featuring true-divided lites and custom forged ironwork. Engineered with floating panels to accommodate extreme seasonal humidity shifts.', client: 'Heritage Properties', comment: '"These doors possess a weight and presence that sets the tone for the entire estate before you even step inside."', rating: 5, img: 'https://placehold.co/800x600/3E2723/FDFBF7?text=Walnut+Doors' },
        { cat: 'Cabinetry', title: 'Penthouse Wardrobe', location: 'Tribeca, NY', wood: 'Ebonized Ash', finish: 'Matte Hardwax', desc: 'Floor-to-ceiling modern wardrobes featuring solid brass inlay strips and leather-wrapped drawer bottoms. The ash was ebonized using an iron-acetate reactive stain to preserve the deep grain texture.', client: 'James L.', comment: '"Flawless execution. The way the brass catches the light against the matte black ash is breathtaking."', rating: 5, img: 'https://placehold.co/800x1000/111111/FDFBF7?text=Wardrobe' }
      ]
    }
  },
  mex: {
    nav: { srv: 'Arte', port: 'Obras Maestras', proc: 'Proceso', faq: 'FAQ', est: 'Estimador', book: 'Comisionar', back: 'Volver al Taller' },
    hero: { 
      t1: 'Tallado a Mano.', 
      t2: 'Hecho para Siempre.', 
      p: 'Carpintería arquitectónica a medida y ebanistería patrimonial para residencias y boutiques exigentes.',
      btn1: 'Comisionar una Pieza',
      btn2: 'Ver Obras Maestras'
    },
    trust: 'Destacado en Architectural Digest',
    srv: {
      title: 'Nuestro Oficio',
      p: 'Donde el ensamble tradicional se encuentra con la ingeniería de precisión moderna.',
      items: [
        { icon: Hammer, title: "Ebanistería a Medida", desc: "Cocinas de madera maciza y muebles empotrados perfectamente adaptados a tu espacio." },
        { icon: Ruler, title: "Carpintería Arquitectónica", desc: "Molduras, zoclos y recubrimientos personalizados que definen interiores de lujo." },
        { icon: Grid, title: "Puertas Patrimoniales", desc: "Entradas monumentales y puertas interiores elaboradas con maderas exóticas." }
      ]
    },
    portfolio: {
      title: 'Galería de Obras Maestras',
      p: 'Explora nuestras comisiones recientes en espacios residenciales y comerciales de lujo.',
      filters: ['Todos', 'Ebanisteria', 'Molduras', 'Puertas'],
      items: [
        { cat: 'Ebanisteria', title: 'La Cocina Aspen', desc: 'Roble blanco con acabado al aceite frotado a mano.', img: 'https://placehold.co/800x1000/2A1B12/FDFBF7?text=Cocina+de+Roble' },
        { cat: 'Puertas', title: 'Entrada Principal', desc: 'Puertas dobles arqueadas de nogal sólido con herrajes personalizados.', img: 'https://placehold.co/800x600/3E2723/FDFBF7?text=Puertas+de+Nogal' },
        { cat: 'Molduras', title: 'Techo Artesonado', desc: 'Retícula de techo en caoba con iluminación indirecta integrada.', img: 'https://placehold.co/800x600/1C120C/FDFBF7?text=Techo+Artesonado' },
        { cat: 'Ebanisteria', title: 'Armario Penthouse', desc: 'Fresno ebonizado de piso a techo con incrustaciones de latón.', img: 'https://placehold.co/800x1000/111111/FDFBF7?text=Armario' }
      ]
    },
    process: {
      title: 'La Comisión',
      p: 'Un viaje colaborativo desde la madera en bruto hasta la obra maestra terminada.',
      steps: [
        { num: 'I', title: 'Diseño y Dibujo', desc: 'Comenzamos con bocetos a mano, evolucionando a modelos CAD 3D exactos para asegurar la armonía espacial.' },
        { num: 'II', title: 'Selección de Madera', desc: 'Invitamos a los clientes a nuestro taller para seleccionar las placas exactas utilizadas en su proyecto.' },
        { num: 'III', title: 'Fabricación', desc: 'Ensamble tradicional de caja y espiga combinado con precisión CNC en nuestro estudio climatizado.' },
        { num: 'IV', title: 'Instalación de Lujo', desc: 'Nuestros maestros carpinteros entregan y ajustan personalmente cada pieza para que encaje perfectamente en su hogar.' }
      ]
    },
    testimonials: {
      title: 'Palabras de Mecenas',
      items: [
        { name: 'Eleanor H.', role: 'Arquitecta de Interiores', text: '"Oak & Iron no solo construye gabinetes; crean muebles que casualmente están unidos a las paredes. Su comprensión de las vetas es inigualable."' },
        { name: 'James L.', role: 'Propietario', text: '"La biblioteca de caoba que construyeron para mí es el centro de mi hogar. Se siente como si hubiera estado allí por un siglo. Verdaderos artesanos."' }
      ]
    },
    faq: {
      title: 'Curiosidades y Detalles',
      items: [
        { q: '¿Cómo manejan el movimiento de la madera?', a: 'La madera sólida respira. Diseñamos todas nuestras piezas con paneles flotantes y tolerancias precisas para permitir la expansión estacional sin agrietarse.' },
        { q: '¿Qué acabados utilizan?', a: 'Nos especializamos en aceites frotados a mano y ceras duras que nutren la madera y envejecen con gracia, en lugar de atraparla bajo poliuretanos plásticos.' },
        { q: '¿Cuánto tiempo toma una cocina a medida?', a: 'Una cocina totalmente personalizada generalmente requiere de 8 a 12 semanas en nuestro taller después de la aprobación final del diseño. La calidad no se puede apresurar.' }
      ]
    },
    quote: {
      title: 'Guía de Inversión',
      p: 'Estima tu ebanistería basándote en metros lineales y la selección de materiales.',
      areaTitle: 'Metros Lineales',
      areaUnit: 'm',
      reqTitle: 'Material y Acabado',
      reqOptions: [
        { id: 'paint', label: 'Para Pintar (Álamo/MDF)' },
        { id: 'hardwood', label: 'Nacional (Roble/Nogal)' },
        { id: 'exotic', label: 'Exótico / Corte Fino' }
      ],
      totalTitle: 'Inversión Estimada',
      totalDesc: '*Incluye plano de taller, fabricación y acabado estándar. Entrega e instalación se cotizan por separado.',
      ctaTitle: 'Solicitar Consultoría',
      ctaBtn: 'Iniciar el Diálogo'
    },
    footer: {
      desc: 'Preservando el alma de la ebanistería a través de una artesanía intransigente.',
      contact: 'Atelier',
      loc1: 'Ciudad de México',
      loc2: 'Valle de Bravo, MEX',
      legal: 'Detalles',
      rights: '© 2026 Arasue Forge LLC. Todos los derechos reservados.',
      tag: 'Tallado en la historia.'
    },
    contactPage: {
      tag: 'Comisión',
      title: 'Iniciar el Diálogo.',
      desc: 'Comparte la visión de tu espacio. Nuestros maestros carpinteros revisan todas las consultas personalmente para evaluar tiempos y factibilidad de materiales.',
      form: {
        fn: 'Nombre',
        ln: 'Apellido',
        email: 'Correo Directo',
        scope: 'Visión del Proyecto / Notas Arquitectónicas',
        submit: 'Enviar Consulta al Taller'
      }
    },
    catalogPage: {
      tag: 'Archivo',
      title: 'Obras Maestras.',
      desc: 'Una selección curada de nuestras mejores comisiones. Desde bibliotecas de caoba cepilladas a mano hasta cocinas de roble finamente aserrado.',
      filters: ['Todas las Colecciones', 'Ebanisteria', 'Molduras', 'Puertas'],
      projects: [
        { cat: 'Ebanisteria', title: 'La Cocina Aspen', location: 'Valle de Bravo, MEX', wood: 'Roble Blanco', finish: 'Aceite Danés a Mano', desc: 'Una ejecución de cocina minimalista pero profundamente cálida. La veta se emparejó continuamente en los 24 frentes de gabinetes, requiriendo una meticulosa selección en el aserradero.', client: 'Propietario Privado', comment: '"Trataron nuestra cocina como un mueble fino. La continuidad de la veta en los cajones es algo que admiro cada mañana."', rating: 5, img: 'https://placehold.co/800x1000/2A1B12/FDFBF7?text=Cocina+de+Roble' },
        { cat: 'Molduras', title: 'Techo Artesonado', location: 'Polanco, CDMX', wood: 'Caoba Hondureña', finish: 'Goma Laca Satinada', desc: 'Un techo artesonado profundamente tradicional con iluminación indirecta integrada y molduras talladas a mano. Instalado durante un riguroso período de 3 semanas.', client: 'Eleanor H., Arquitecta', comment: '"Su comprensión de las proporciones clásicas y la unión tradicional hizo de esta biblioteca el centro absoluto del penthouse."', rating: 5, img: 'https://placehold.co/800x600/1C120C/FDFBF7?text=Techo+Artesonado' },
        { cat: 'Puertas', title: 'Entrada Principal', location: 'San Pedro, NL', wood: 'Nogal Negro Sólido', finish: 'Barniz Marino Espato', desc: 'Puertas dobles arqueadas masivas de 3 metros con luces divididas verdaderas y herrajes de hierro forjado a medida. Diseñadas con paneles flotantes para acomodar cambios extremos de humedad.', client: 'Heritage Properties', comment: '"Estas puertas poseen un peso y una presencia que marcan el tono de toda la propiedad antes de siquiera entrar."', rating: 5, img: 'https://placehold.co/800x600/3E2723/FDFBF7?text=Puertas+de+Nogal' },
        { cat: 'Ebanisteria', title: 'Armario Penthouse', location: 'Santa Fe, CDMX', wood: 'Fresno Ebonizado', finish: 'Cera Dura Mate', desc: 'Armarios modernos de piso a techo con incrustaciones de latón sólido y fondos de cajón forrados en cuero. El fresno fue ebonizado usando un tinte reactivo para preservar la textura profunda de la veta.', client: 'James L.', comment: '"Ejecución impecable. La forma en que el latón capta la luz contra el fresno negro mate es impresionante."', rating: 5, img: 'https://placehold.co/800x1000/111111/FDFBF7?text=Armario' }
      ]
    }
  }
}

export function Carpentry() {
  const [region, setRegion] = useState<'usa' | 'mex'>('usa')
  const [currentView, setCurrentView] = useState<'landing' | 'contact' | 'catalog'>('landing')
  const [length, setLength] = useState(30) 
  const [material, setMaterial] = useState('hardwood')
  const [isCalculating, setIsCalculating] = useState(false)
  const [filter, setFilter] = useState('All')
  const [catalogFilter, setCatalogFilter] = useState('All Collections')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  
  const reduce = useReducedMotion()
  const t = dict[region]

  // Kowalski Spring Physics
  const springTransition = { type: "spring", stiffness: 300, damping: 30 }

  const toggleRegion = () => {
    setIsCalculating(true)
    setTimeout(() => {
      if (region === 'usa') {
        setRegion('mex')
        setLength(Math.round(length / 3.28084))
        setFilter('Todos')
        setCatalogFilter('Todas las Colecciones')
      } else {
        setRegion('usa')
        setLength(Math.round(length * 3.28084))
        setFilter('All')
        setCatalogFilter('All Collections')
      }
      setIsCalculating(false)
    }, 300)
  }

  const getPrice = () => {
    let pricePerUnit = 0;
    if (material === 'paint') pricePerUnit = region === 'usa' ? 800 : 2600;
    if (material === 'hardwood') pricePerUnit = region === 'usa' ? 1500 : 4900;
    if (material === 'exotic') pricePerUnit = region === 'usa' ? 2500 : 8200;
    
    return (length * pricePerUnit).toLocaleString();
  }

  const filteredPortfolio = filter === 'All' || filter === 'Todos' 
    ? t.portfolio.items 
    : t.portfolio.items.filter(item => item.cat === filter || 
      (filter === 'Ebanisteria' && item.cat === 'Cabinetry') || 
      (filter === 'Molduras' && item.cat === 'Millwork') || 
      (filter === 'Puertas' && item.cat === 'Doors'))

  const filteredCatalog = catalogFilter === 'All Collections' || catalogFilter === 'Todas las Colecciones'
    ? t.catalogPage.projects
    : t.catalogPage.projects.filter(item => item.cat === catalogFilter || 
      (catalogFilter === 'Ebanisteria' && item.cat === 'Cabinetry') || 
      (catalogFilter === 'Molduras' && item.cat === 'Millwork') || 
      (catalogFilter === 'Puertas' && item.cat === 'Doors'))

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2A1B12] font-serif selection:bg-[#5C3A21] selection:text-[#FDFBF7] flex flex-col overflow-x-hidden">
      
      {/* Navigation - Editorial */}
      <nav className="w-full bg-[#FDFBF7] border-b border-[#E8E1D5] sticky top-0 z-50">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <div 
            className="font-bold text-3xl tracking-tight cursor-pointer"
            onClick={() => setCurrentView('landing')}
          >
            OAK <span className="font-light italic text-[#8B7355]">&</span> IRON
          </div>
          
          {currentView === 'landing' ? (
            <div className="hidden lg:flex gap-10 text-sm tracking-[0.2em] uppercase text-[#5C3A21]">
              <a href="#services" className="hover:text-[#8B7355] transition-colors duration-300">{t.nav.srv}</a>
              <button onClick={() => { window.scrollTo(0,0); setCurrentView('catalog') }} className="hover:text-[#8B7355] transition-colors duration-300">{t.nav.port}</button>
              <a href="#process" className="hover:text-[#8B7355] transition-colors duration-300">{t.nav.proc}</a>
              <a href="#quote" className="hover:text-[#8B7355] transition-colors duration-300">{t.nav.est}</a>
            </div>
          ) : (
            <div className="hidden lg:flex" />
          )}

          <div className="flex items-center gap-6">
            <button 
              onClick={toggleRegion}
              className="font-sans text-xs font-bold tracking-widest uppercase text-[#8B7355] hover:text-[#2A1B12] transition-colors active:scale-95"
            >
              {region === 'usa' ? 'USA' : 'MEX'}
            </button>
            {currentView === 'landing' ? (
              <button 
                onClick={() => { window.scrollTo(0,0); setCurrentView('contact') }}
                className="hidden sm:inline-block border border-[#2A1B12] text-[#2A1B12] px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#2A1B12] hover:text-[#FDFBF7] transition-all duration-300"
              >
                {t.nav.book}
              </button>
            ) : (
              <button 
                onClick={() => { window.scrollTo(0,0); setCurrentView('landing') }}
                className="hidden sm:inline-flex items-center gap-2 border border-[#E8E1D5] text-[#8B7355] px-8 py-3 text-sm tracking-widest uppercase hover:border-[#2A1B12] hover:text-[#2A1B12] transition-all duration-300"
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
              <section className="pt-24 pb-32 px-6 relative">
                <div className="container mx-auto text-center max-w-4xl">
                  <motion.div
                    initial={reduce ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={springTransition}
                  >
                    <div className="font-sans text-[#8B7355] tracking-[0.3em] uppercase text-xs mb-8">
                      {t.trust}
                    </div>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-tight leading-[0.9] mb-8 text-[#1A110B]">
                      {t.hero.t1}<br/>
                      <span className="italic text-[#5C3A21]">{t.hero.t2}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[#5C3A21] mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                      {t.hero.p}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center font-sans">
                      <button 
                        onClick={() => { window.scrollTo(0,0); setCurrentView('contact') }}
                        className="bg-[#2A1B12] text-[#FDFBF7] px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#1A110B] transition-colors duration-300"
                      >
                        {t.hero.btn1}
                      </button>
                      <button 
                        onClick={() => { window.scrollTo(0,0); setCurrentView('catalog') }}
                        className="border border-[#E8E1D5] text-[#2A1B12] px-10 py-4 text-sm tracking-[0.2em] uppercase hover:border-[#2A1B12] transition-colors duration-300"
                      >
                        {t.hero.btn2}
                      </button>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Image Break */}
              <section className="px-6 pb-24">
                <div className="container mx-auto">
                  <div className="w-full aspect-[21/9] bg-[#2A1B12] overflow-hidden group">
                     <div className="relative w-full h-full"><Image src="https://placehold.co/1600x600/2A1B12/FDFBF7?text=Woodshop+Details" alt="Woodshop" fill className="object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-[2s] ease-out" /></div>
                  </div>
                </div>
              </section>

              {/* Services Section */}
              <section id="services" className="py-24 px-6 bg-[#F4EFE6]">
                <div className="container mx-auto">
                  <div className="text-center mb-20 max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-normal mb-6 text-[#1A110B]">{t.srv.title}</h2>
                    <p className="text-xl text-[#5C3A21] font-light italic">{t.srv.p}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {t.srv.items.map((srv, i) => {
                      const Icon = srv.icon
                      return (
                        <div key={i} className="text-center group">
                          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-[#D5C6B1] mb-8 group-hover:border-[#8B7355] transition-colors duration-500">
                            <Icon className="w-8 h-8 text-[#5C3A21]" strokeWidth={1} />
                          </div>
                          <h3 className="text-2xl font-normal mb-4 text-[#1A110B]">{srv.title}</h3>
                          <p className="text-[#5C3A21] font-sans leading-relaxed">{srv.desc}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </section>

              {/* Portfolio Highlights */}
              <section id="portfolio" className="py-32 px-6">
                <div className="container mx-auto">
                  <div className="flex flex-col items-center mb-20 text-center">
                    <h2 className="text-4xl md:text-6xl font-normal mb-6 text-[#1A110B]">{t.portfolio.title}</h2>
                    <p className="text-xl text-[#5C3A21] font-light italic max-w-2xl mb-12">{t.portfolio.p}</p>
                    
                    <div className="flex flex-wrap justify-center gap-6 font-sans">
                      {t.portfolio.filters.map(f => (
                        <button 
                          key={f}
                          onClick={() => setFilter(f)}
                          className={`text-sm tracking-[0.2em] uppercase pb-2 border-b-2 transition-colors ${filter === f ? 'border-[#2A1B12] text-[#2A1B12]' : 'border-transparent text-[#8B7355] hover:text-[#2A1B12]'}`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="columns-1 md:columns-2 gap-8 space-y-8">
                    {filteredPortfolio.map((item, i) => (
                      <div key={i} className="break-inside-avoid group cursor-pointer" onClick={() => { window.scrollTo(0,0); setCurrentView('catalog') }}>
                        <div className="relative overflow-hidden mb-4">
                          <div className="relative w-full h-full"><Image src={item.img} alt={item.title} fill className="object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out" /></div>
                        </div>
                        <div>
                          <span className="font-sans text-[#8B7355] text-xs tracking-[0.2em] uppercase mb-2 block">{item.cat}</span>
                          <h3 className="text-2xl text-[#1A110B] mb-2">{item.title}</h3>
                          <p className="font-sans text-[#5C3A21] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* The Process */}
              <section id="process" className="py-32 px-6 bg-[#2A1B12] text-[#FDFBF7]">
                <div className="container mx-auto">
                  <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-normal mb-6 text-[#E8E1D5]">{t.process.title}</h2>
                    <p className="text-xl text-[#8B7355] font-light italic">{t.process.p}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {t.process.steps.map((step, i) => (
                      <div key={i} className="border-t border-[#5C3A21] pt-8">
                        <span className="font-sans text-[#8B7355] tracking-[0.2em] uppercase mb-4 block">Fase {step.num}</span>
                        <h3 className="text-2xl font-normal mb-4 text-[#E8E1D5]">{step.title}</h3>
                        <p className="font-sans text-[#A89886] text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Social Proof / Testimonials */}
              <section className="py-32 px-6 bg-[#F4EFE6]">
                <div className="container mx-auto">
                  <div className="max-w-4xl mx-auto text-center">
                    <Star className="w-8 h-8 text-[#8B7355] mx-auto mb-12" strokeWidth={1} />
                    <h2 className="text-3xl md:text-4xl font-normal text-[#1A110B] mb-16">{t.testimonials.title}</h2>
                    
                    <div className="space-y-16">
                      {t.testimonials.items.map((test, i) => (
                        <div key={i}>
                          <p className="text-2xl md:text-3xl text-[#5C3A21] font-light italic leading-relaxed mb-8">
                            {test.text}
                          </p>
                          <div className="font-sans">
                            <h4 className="font-bold text-[#1A110B] uppercase tracking-widest text-sm mb-1">{test.name}</h4>
                            <p className="text-[#8B7355] text-xs tracking-widest uppercase">{test.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="py-32 px-6">
                <div className="container mx-auto max-w-3xl">
                  <h2 className="text-4xl md:text-5xl font-normal text-[#1A110B] mb-16 text-center">{t.faq.title}</h2>
                  <div className="border-t border-[#E8E1D5]">
                    {t.faq.items.map((faq, i) => (
                      <div key={i} className="border-b border-[#E8E1D5]">
                        <button 
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full flex items-center justify-between py-8 text-left hover:text-[#8B7355] transition-colors"
                        >
                          <span className="font-normal text-xl">{faq.q}</span>
                          <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-[#8B7355]' : 'text-[#D5C6B1]'}`} />
                        </button>
                        <motion.div 
                          initial={false}
                          animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 text-[#5C3A21] font-sans leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Quote Estimator */}
              <section id="quote" className="py-32 px-6 bg-[#2A1B12] text-[#FDFBF7]">
                <div className="container mx-auto max-w-5xl">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-normal mb-6 text-[#E8E1D5]">{t.quote.title}</h2>
                    <p className="text-xl text-[#8B7355] font-light italic">{t.quote.p}</p>
                  </div>

                  <div className="bg-[#1C120C] p-8 md:p-16 border border-[#5C3A21]/30">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 font-sans">
                      
                      <div className="space-y-12">
                        <div>
                          <div className="flex justify-between items-end mb-6">
                            <label className="text-xs font-bold text-[#8B7355] tracking-[0.2em] uppercase">{t.quote.areaTitle}</label>
                            <span className="text-2xl font-serif text-[#E8E1D5]">{length} <span className="text-sm font-sans text-[#8B7355]">{t.quote.areaUnit}</span></span>
                          </div>
                          <input 
                            type="range" 
                            min={10} 
                            max={100} 
                            step={5}
                            value={length} 
                            onChange={(e) => setLength(Number(e.target.value))}
                            className="w-full h-1 bg-[#2A1B12] appearance-none cursor-pointer focus:outline-none accent-[#E8E1D5]"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-bold text-[#8B7355] tracking-[0.2em] uppercase block mb-6">{t.quote.reqTitle}</label>
                          <div className="space-y-3">
                            {t.quote.reqOptions.map(opt => (
                              <button 
                                key={opt.id}
                                onClick={() => {
                                  setIsCalculating(true); 
                                  setTimeout(() => { setMaterial(opt.id); setIsCalculating(false) }, 300)
                                }}
                                className={`w-full p-4 border text-left transition-colors text-sm tracking-wide uppercase ${
                                  material === opt.id 
                                  ? 'border-[#E8E1D5] text-[#E8E1D5] bg-[#2A1B12]' 
                                  : 'border-[#5C3A21]/30 text-[#8B7355] hover:border-[#8B7355]'
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-[#5C3A21]/30 pt-12 md:pt-0 md:pl-16">
                        <div className="text-xs font-bold text-[#8B7355] tracking-[0.2em] uppercase mb-6">{t.quote.totalTitle}</div>
                        
                        <div className={`mb-8 transition-all duration-300 ${isCalculating ? 'opacity-30 blur-sm scale-95' : 'opacity-100 blur-0 scale-100'}`}>
                          <div className="text-5xl md:text-6xl font-normal font-serif text-[#E8E1D5]">
                            ${getPrice()}
                          </div>
                        </div>
                        
                        <p className="text-[#8B7355] text-xs leading-relaxed mb-10">
                          {t.quote.totalDesc}
                        </p>
                        
                        <button 
                          onClick={() => { window.scrollTo(0,0); setCurrentView('contact') }}
                          className="w-full bg-[#E8E1D5] text-[#1C120C] font-bold text-sm py-5 uppercase tracking-[0.2em] hover:bg-white transition-colors"
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

          {/* Catalog View (Archive) */}
          {currentView === 'catalog' && (
            <motion.div 
              key="catalog"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-grow flex flex-col bg-[#FDFBF7] py-24 px-6"
            >
              <div className="container mx-auto">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                  <div className="font-sans text-[#8B7355] tracking-[0.3em] uppercase text-xs mb-8">
                    {t.catalogPage.tag}
                  </div>
                  <h2 className="text-5xl md:text-7xl font-normal mb-8 text-[#1A110B]">
                    {t.catalogPage.title}
                  </h2>
                  <p className="text-[#5C3A21] text-xl font-light italic leading-relaxed mb-12">
                    {t.catalogPage.desc}
                  </p>

                  <div className="flex flex-wrap justify-center gap-8 font-sans">
                    {t.catalogPage.filters.map(f => (
                      <button 
                        key={f}
                        onClick={() => setCatalogFilter(f)}
                        className={`text-sm tracking-[0.2em] uppercase pb-2 border-b-2 transition-colors ${
                          catalogFilter === f ? 'border-[#2A1B12] text-[#2A1B12]' : 'border-transparent text-[#8B7355] hover:text-[#2A1B12]'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-24 max-w-6xl mx-auto">
                  {filteredCatalog.map((project, i) => (
                    <motion.div 
                      layout
                      key={project.title}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={springTransition}
                      className="flex flex-col lg:flex-row gap-12 group"
                    >
                      <div className="lg:w-1/2 aspect-[4/5] bg-[#2A1B12] relative overflow-hidden">
                        <div className="relative w-full h-full"><Image src={project.img} alt={project.title} fill className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" /></div>
                      </div>

                      <div className="lg:w-1/2 flex flex-col justify-center">
                        <div className="font-sans flex justify-between items-start mb-6">
                          <span className="text-[#8B7355] text-xs tracking-[0.2em] uppercase">{project.cat}</span>
                          <span className="flex items-center gap-2 text-[#5C3A21] text-xs tracking-[0.1em] uppercase">
                            <MapPin className="w-3 h-3" /> {project.location}
                          </span>
                        </div>
                        
                        <h3 className="text-4xl md:text-5xl font-normal mb-8 text-[#1A110B]">{project.title}</h3>
                        
                        <div className="font-sans grid grid-cols-2 gap-6 mb-10 py-8 border-y border-[#E8E1D5]">
                          <div>
                            <div className="text-[10px] text-[#8B7355] tracking-[0.2em] uppercase mb-2">Wood Species</div>
                            <div className="text-sm text-[#2A1B12] font-semibold">{project.wood}</div>
                          </div>
                          <div>
                            <div className="text-[10px] text-[#8B7355] tracking-[0.2em] uppercase mb-2">Artisan Finish</div>
                            <div className="text-sm text-[#2A1B12] font-semibold">{project.finish}</div>
                          </div>
                        </div>

                        <p className="text-[#5C3A21] font-sans leading-relaxed mb-12">
                          {project.desc}
                        </p>

                        <div className="bg-[#F4EFE6] p-8 relative mt-auto">
                          <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#2A1B12] text-[#FDFBF7] text-[10px] font-sans font-bold uppercase tracking-[0.2em] px-4 py-2 flex items-center gap-2">
                            <Star className="w-3 h-3 fill-current" /> Client Note
                          </div>
                          <p className="text-[#5C3A21] text-lg font-light italic mb-6">
                            {project.comment}
                          </p>
                          <div className="flex justify-between items-end font-sans">
                            <div className="text-xs font-bold tracking-[0.1em] text-[#1A110B] uppercase">{project.client}</div>
                            <div className="flex gap-1">
                              {Array.from({ length: 5 }).map((_, idx) => (
                                <Star key={idx} className={`w-4 h-4 ${idx < Math.floor(project.rating) ? 'fill-[#8B7355] text-[#8B7355]' : 'fill-[#8B7355]/20 text-[#8B7355]/20'}`} />
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

          {/* Contact View (Commission) */}
          {currentView === 'contact' && (
            <motion.div 
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-grow flex items-center bg-[#2A1B12] py-24 px-6 relative"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                 {/* Subtle dark wood texture implication via background image/overlay can go here. Using a very dark solid color for now to keep it clean. */}
                 <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-[#1A110B] blur-[100px] opacity-50" />
              </div>
              
              <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                <div>
                  <div className="font-sans text-[#A89886] tracking-[0.3em] uppercase text-xs mb-8">
                    {t.contactPage.tag}
                  </div>
                  <h2 className="text-5xl md:text-7xl font-normal tracking-tight mb-8 text-[#FDFBF7]">
                    {t.contactPage.title}
                  </h2>
                  <p className="text-[#A89886] text-xl font-light italic leading-relaxed mb-12 max-w-md">
                    {t.contactPage.desc}
                  </p>

                  <div className="space-y-8 font-sans">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 border border-[#5C3A21] rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-[#E8E1D5]" strokeWidth={1} />
                      </div>
                      <span className="text-lg text-[#E8E1D5] tracking-widest">+1 (800) 555-WOOD</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 border border-[#5C3A21] rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-[#E8E1D5]" strokeWidth={1} />
                      </div>
                      <span className="text-lg text-[#E8E1D5] tracking-widest">atelier@oakandiron.com</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1C120C] border border-[#5C3A21]/30 p-12">
                  <form className="space-y-8 font-sans" onSubmit={(e) => { e.preventDefault(); setCurrentView('landing'); }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-xs font-bold text-[#A89886] uppercase tracking-[0.2em] mb-3">
                          {t.contactPage.form.fn}
                        </label>
                        <input type="text" className="w-full bg-transparent border-b border-[#5C3A21] p-3 text-[#FDFBF7] focus:outline-none focus:border-[#E8E1D5] transition-colors" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#A89886] uppercase tracking-[0.2em] mb-3">
                          {t.contactPage.form.ln}
                        </label>
                        <input type="text" className="w-full bg-transparent border-b border-[#5C3A21] p-3 text-[#FDFBF7] focus:outline-none focus:border-[#E8E1D5] transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#A89886] uppercase tracking-[0.2em] mb-3">
                        {t.contactPage.form.email}
                      </label>
                      <input type="email" className="w-full bg-transparent border-b border-[#5C3A21] p-3 text-[#FDFBF7] focus:outline-none focus:border-[#E8E1D5] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#A89886] uppercase tracking-[0.2em] mb-3">
                        {t.contactPage.form.scope}
                      </label>
                      <textarea rows={4} className="w-full bg-transparent border-b border-[#5C3A21] p-3 text-[#FDFBF7] focus:outline-none focus:border-[#E8E1D5] transition-colors resize-none"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#E8E1D5] text-[#1C120C] font-bold py-5 hover:bg-white transition-colors uppercase tracking-[0.2em] flex items-center justify-center gap-3">
                      <FileSignature className="w-5 h-5" /> {t.contactPage.form.submit}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-16 border-t border-[#E8E1D5] bg-[#FDFBF7]">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-[#2A1B12]">
          <div className="md:col-span-2">
            <div className="font-bold text-2xl tracking-tight mb-6">
              OAK <span className="font-light italic text-[#8B7355]">&</span> IRON
            </div>
            <p className="text-[#5C3A21] font-sans text-sm max-w-sm leading-relaxed">
              {t.footer.desc}
            </p>
          </div>
          
          <div className="font-sans text-sm">
            <div className="text-[#8B7355] text-xs font-bold tracking-[0.2em] uppercase mb-6">{t.footer.contact}</div>
            <ul className="space-y-4 text-[#5C3A21]">
              <li>{t.footer.loc1}</li>
              <li>{t.footer.loc2}</li>
            </ul>
          </div>

          <div className="font-sans text-sm">
            <div className="text-[#8B7355] text-xs font-bold tracking-[0.2em] uppercase mb-6">{t.footer.legal}</div>
            <ul className="space-y-4 text-[#5C3A21]">
              <li><a href="#" className="hover:text-[#2A1B12]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#2A1B12]">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-[#E8E1D5] flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-xs">
          <div className="text-[#8B7355] tracking-widest">{t.footer.rights}</div>
          <div className="text-[#2A1B12] font-bold tracking-[0.2em] uppercase">{t.footer.tag}</div>
        </div>
      </footer>
    </div>
  )
}
