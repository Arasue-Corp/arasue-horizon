"use client"
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, ShieldCheck, Truck, RefreshCw, ChevronLeft, Maximize2, Star, ArrowRight, LifeBuoy, Send, X, Plus, Minus, Ruler, Zap, Layers } from 'lucide-react'
import { useState } from 'react'

const dict = {
  usa: {
    nav: { shop: 'Boutique', atelier: 'L\'Atelier', support: 'Support', cart: 'Bag' },
    hero: { 
      t1: 'Sartorial', t2: 'Armor.', 
      p: 'Engineered in Tokyo. Crafted in Italy. The ultimate Everyday Carry for the modern operator.',
      btn1: 'Explore Collection',
    },
    values: {
      title: 'The Arasue Standard',
      p: 'Uncompromising quality meets sustainable practices.',
      items: [
        { icon: Truck, title: "Global Fulfillment", desc: "Complimentary express delivery via DHL on all orders over $500." },
        { icon: ShieldCheck, title: "Lifetime Warranty", desc: "Hardware and stitching guaranteed. We repair or replace, forever." },
        { icon: RefreshCw, title: "30-Day Returns", desc: "Unused items can be returned hassle-free within 30 days." }
      ]
    },
    process: {
      title: 'Artisanal Craftsmanship',
      p: 'Every piece takes over 40 hours of meticulous handcrafting by master artisans.',
      steps: [
        { num: '01', title: 'Sourcing', desc: 'Aerospace-grade titanium and top 1% full-grain Italian leather.' },
        { num: '02', title: 'Precision', desc: 'Laser-cut templates ensure structural integrity down to the millimeter.' },
        { num: '03', title: 'Assembly', desc: 'Hand-stitched using waxed ballistic nylon thread for unbreakable seams.' }
      ]
    },
    testimonials: {
      title: 'Field Reports',
      items: [
        { name: 'Elena V.', role: 'Creative Director', text: '"The quality rivals heritage brands that charge five times as much. It\'s my go-to daily bag."' },
        { name: 'James T.', role: 'Architect', text: '"Finally, a brief that fits my laptop, sketches, and looks incredibly sharp in client meetings. Flawless."' }
      ]
    },
    faq: {
      title: 'Support & FAQ',
      items: [
        { q: 'How do I care for full-grain leather?', a: 'Keep away from direct heat. Use our complimentary conditioner every 6 months.' },
        { q: 'Do you ship internationally?', a: 'Yes, we ship to over 100 countries. Customs are calculated at checkout.' },
        { q: 'Can I personalize my item?', a: 'Absolutely. We offer complimentary blind or gold foil monogramming.' }
      ]
    },
    contact: {
      title: 'Concierge Desk',
      desc: 'Our specialists are available 24/7 to assist with bespoke orders and inquiries.',
      fields: { name: 'Full Name', email: 'Email Address', msg: 'Your Message', btn: 'Transmit Message' }
    },
    catalog: {
      title: 'The Collection',
      filters: ['All', 'Carry', 'Tech', 'Wallets'],
      items: [
        { id: 'c1', cat: 'Carry', title: 'Aegis Weekender', price: 850, priceStr: '$850', img: 'https://placehold.co/800x1000/111111/ffffff?text=Weekender' },
        { id: 'c2', cat: 'Carry', title: 'Carbon Brief', price: 650, priceStr: '$650', img: 'https://placehold.co/800x1000/222222/ffffff?text=Briefcase' },
        { id: 't1', cat: 'Tech', title: 'MacBook Shield', price: 220, priceStr: '$220', img: 'https://placehold.co/800x1000/1a1a1a/ffffff?text=Laptop+Sleeve' },
        { id: 'w1', cat: 'Wallets', title: 'Titanium Cardholder', price: 150, priceStr: '$150', img: 'https://placehold.co/800x1000/0a0a0a/ffffff?text=Cardholder' }
      ]
    },
    product: {
      details: 'Product Details', add: 'Add to Bag',
      shipping: 'Complimentary Global Shipping on orders over $500.',
      warranty: 'Covered by the Arasue Lifetime Guarantee.',
      specs: {
        title: 'Technical Specifications',
        dim: 'Dimensions',
        mat: 'Materials',
        hw: 'Hardware'
      },
      related: 'Complete your Loadout'
    },
    cart: {
      title: 'Your Bag',
      empty: 'Your bag is currently empty.',
      subtotal: 'Subtotal',
      checkout: 'Proceed to Secure Checkout'
    },
    lookbook: {
      title: 'The Lookbook',
      p: 'Field-tested aesthetics. Tag @ArasueAtelier to be featured.'
    },
    footer: '© 2026 Arasue Atelier. All rights reserved. Crafted for the relentless.'
  },
  mex: {
    nav: { shop: 'Boutique', atelier: 'El Taller', support: 'Soporte', cart: 'Bolsa' },
    hero: { 
      t1: 'Armadura', t2: 'Sartorial.', 
      p: 'Ingeniería en Tokio. Manufactura en Italia. El equipamiento definitivo para el operador moderno.',
      btn1: 'Explorar Colección',
    },
    values: {
      title: 'El Estándar Arasue',
      p: 'Calidad intransigente combinada con ingeniería de precisión.',
      items: [
        { icon: Truck, title: "Cobertura Global", desc: "Entrega exprés de cortesía vía DHL en todos los pedidos superiores a $10,000 MXN." },
        { icon: ShieldCheck, title: "Garantía Vitalicia", desc: "Herrajes y costuras garantizados. Reparamos o reemplazamos de por vida." },
        { icon: RefreshCw, title: "30 Días de Prueba", desc: "Devoluciones sin fricción en artículos sin usar durante 30 días." }
      ]
    },
    process: {
      title: 'Artesanía Táctica',
      p: 'Cada pieza requiere más de 40 horas de minucioso trabajo por maestros artesanos.',
      steps: [
        { num: '01', title: 'Selección', desc: 'Titanio aeroespacial y el 1% superior de cuero italiano de grano completo.' },
        { num: '02', title: 'Precisión', desc: 'Corte por láser asegura una integridad estructural milimétrica.' },
        { num: '03', title: 'Ensamblaje', desc: 'Cosido a mano usando hilo de nylon balístico para costuras irrompibles.' }
      ]
    },
    testimonials: {
      title: 'Reportes de Campo',
      items: [
        { name: 'Elena V.', role: 'Directora Creativa', text: '"La calidad compite con marcas de herencia que cobran cinco veces más. Es mi bolso diario."' },
        { name: 'James T.', role: 'Arquitecto', text: '"Por fin, un maletín en el que caben mis bocetos y luce increíble en reuniones. Impecable."' }
      ]
    },
    faq: {
      title: 'Soporte y FAQ',
      items: [
        { q: '¿Cómo cuido el cuero de grano completo?', a: 'Mantenlo alejado del calor directo. Usa nuestro bálsamo de cortesía cada 6 meses.' },
        { q: '¿Hacen envíos internacionales?', a: 'Sí, a más de 100 países. Los impuestos se calculan al pagar.' },
        { q: '¿Puedo personalizar mi pieza?', a: 'Absolutamente. Ofrecemos monogramas en relieve ciego de cortesía.' }
      ]
    },
    contact: {
      title: 'Mesa de Concierge',
      desc: 'Nuestros especialistas están disponibles 24/7 para pedidos a medida y consultas.',
      fields: { name: 'Nombre Completo', email: 'Correo Electrónico', msg: 'Mensaje', btn: 'Transmitir' }
    },
    catalog: {
      title: 'La Colección',
      filters: ['Todos', 'Bolsos', 'Tech', 'Billeteras'],
      items: [
        { id: 'c1', cat: 'Bolsos', title: 'Aegis Weekender', price: 17000, priceStr: '$17,000', img: 'https://placehold.co/800x1000/111111/ffffff?text=Weekender' },
        { id: 'c2', cat: 'Bolsos', title: 'Maletín Carbono', price: 13000, priceStr: '$13,000', img: 'https://placehold.co/800x1000/222222/ffffff?text=Maletin' },
        { id: 't1', cat: 'Tech', title: 'Escudo MacBook', price: 4400, priceStr: '$4,400', img: 'https://placehold.co/800x1000/1a1a1a/ffffff?text=Funda+Laptop' },
        { id: 'w1', cat: 'Billeteras', title: 'Tarjetero Titanio', price: 3000, priceStr: '$3,000', img: 'https://placehold.co/800x1000/0a0a0a/ffffff?text=Tarjetero' }
      ]
    },
    product: {
      details: 'Detalles del Producto', add: 'Añadir a la Bolsa',
      shipping: 'Envío Global de Cortesía en pedidos superiores a $10,000 MXN.',
      warranty: 'Protegido por la Garantía Vitalicia Arasue.',
      specs: {
        title: 'Especificaciones Técnicas',
        dim: 'Dimensiones',
        mat: 'Materiales',
        hw: 'Herrajes'
      },
      related: 'Completa tu Equipamiento'
    },
    cart: {
      title: 'Tu Bolsa',
      empty: 'Tu bolsa está vacía actualmente.',
      subtotal: 'Subtotal',
      checkout: 'Proceder a Pago Seguro'
    },
    lookbook: {
      title: 'El Lookbook',
      p: 'Estética probada en campo. Etiqueta a @ArasueAtelier para ser destacado.'
    },
    footer: '© 2026 Arasue Atelier. Todos los derechos reservados. Diseñado para implacables.'
  }
}

const springConfig = { type: "spring", stiffness: 300, damping: 30 } as const
const layoutSpring = { type: "spring", stiffness: 200, damping: 25 } as const

export function Ecommerce() {
  const [region, setRegion] = useState<'usa' | 'mex'>('usa')
  const [currentView, setCurrentView] = useState<'landing' | 'atelier' | 'support' | 'catalog' | 'product'>('landing')
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  
  // Cart State
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<any[]>([])

  const t = dict[region]

  const filterMap: Record<string, string> = {
    'All': 'Todos', 'Todos': 'All',
    'Carry': 'Bolsos', 'Bolsos': 'Carry',
    'Tech': 'Tech', 
    'Wallets': 'Billeteras', 'Billeteras': 'Wallets'
  }

  const toggleRegion = () => {
    const newRegion = region === 'usa' ? 'mex' : 'usa'
    setRegion(newRegion)
    if (activeFilter !== 'All' && activeFilter !== 'Todos' && activeFilter !== 'Tech') {
       setActiveFilter(filterMap[activeFilter] || (newRegion === 'usa' ? 'All' : 'Todos'))
    } else if (activeFilter === 'All' || activeFilter === 'Todos') {
       setActiveFilter(newRegion === 'usa' ? 'All' : 'Todos')
    }
  }

  const handleProductClick = (product: any) => {
    setSelectedProduct(product)
    setCurrentView('product')
    window.scrollTo(0, 0)
  }

  const addToCart = (product: any) => {
    const existing = cartItems.find(item => item.id === product.id)
    if (existing) {
      setCartItems(cartItems.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item))
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
    setIsCartOpen(true)
  }

  const updateCartQty = (id: string, delta: number) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta
        return newQty > 0 ? { ...item, qty: newQty } : item
      }
      return item
    }))
  }

  const removeCartItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0)
  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0)

  const filteredItems = t.catalog.items.filter(item => 
    activeFilter === t.catalog.filters[0] || item.cat === activeFilter
  )

  const relatedItems = selectedProduct 
    ? t.catalog.items.filter(item => item.id !== selectedProduct.id).slice(0, 3) 
    : []

  return (
    <div className="min-h-screen bg-[#050505] text-[#F2F2F2] font-sans overflow-x-hidden flex flex-col selection:bg-[#F2D3AC] selection:text-[#050505]">
      
      {/* Top Promotional Bar */}
      <div className="bg-[#F2D3AC] text-[#050505] text-[10px] font-bold uppercase tracking-widest text-center py-2 z-50 relative">
        {region === 'usa' ? 'Complimentary Monogramming on all orders this week.' : 'Monograma de cortesía en todos los pedidos esta semana.'}
      </div>

      {/* Universal Navigation */}
      <nav className="sticky top-0 w-full z-40 bg-[#050505]/90 backdrop-blur-md border-b border-[#222] px-6 py-4 flex justify-between items-center transition-all">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentView('landing')}>
          <div className="w-4 h-4 bg-[#F2F2F2] rounded-full"></div>
          <span className="font-black text-lg tracking-tighter uppercase">ARASUE <span className="font-light">ATELIER</span></span>
        </div>
        
        <div className="hidden md:flex gap-8 font-bold text-xs tracking-widest uppercase">
          <button onClick={() => setCurrentView('catalog')} className={`hover:text-[#F2D3AC] transition-colors ${currentView === 'catalog' ? 'text-[#F2D3AC]' : ''}`}>{t.nav.shop}</button>
          <button onClick={() => setCurrentView('atelier')} className={`hover:text-[#F2D3AC] transition-colors ${currentView === 'atelier' ? 'text-[#F2D3AC]' : ''}`}>{t.nav.atelier}</button>
          <button onClick={() => setCurrentView('support')} className={`hover:text-[#F2D3AC] transition-colors ${currentView === 'support' ? 'text-[#F2D3AC]' : ''}`}>{t.nav.support}</button>
        </div>

        <div className="flex items-center gap-6">
          <button onClick={toggleRegion} className="text-[10px] font-mono font-bold uppercase tracking-widest hover:text-[#F2D3AC] transition-colors">
            {region.toUpperCase()}
          </button>
          <button onClick={() => setIsCartOpen(true)} className="flex items-center gap-2 hover:text-[#F2D3AC] transition-colors">
            <span className="hidden md:block font-bold text-xs tracking-widest uppercase">{t.nav.cart}</span>
            <div className="relative">
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#F2D3AC] text-[#050505] text-[8px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 relative flex flex-col w-full">
        <AnimatePresence mode="wait">
          
          {/* LANDING VIEW (Hero + Lookbook + Values) */}
          {currentView === 'landing' && (
            <motion.div 
              key="landing"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col"
            >
              {/* Hero Section */}
              <div className="relative h-[85vh] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                  <div className="relative w-full h-full"><Image src="https://placehold.co/1920x1080/050505/1a1a1a?text=Minimal+Atelier" alt="Background" fill className="object-cover opacity-50 mix-blend-luminosity" /></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-[#050505]/60"></div>
                </div>
                <div className="relative z-10 text-center max-w-4xl px-6">
                  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, ...springConfig }}>
                    <p className="font-mono text-[10px] text-[#F2D3AC] uppercase tracking-[0.3em] mb-4">Object No. 01</p>
                    <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.85] mb-6">
                      {t.hero.t1}<br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] to-[#555555]">{t.hero.t2}</span>
                    </h1>
                    <p className="text-base md:text-lg text-[#A0A0A0] max-w-xl mx-auto mb-10 font-light">{t.hero.p}</p>
                    <button onClick={() => setCurrentView('catalog')} className="group bg-[#F2F2F2] text-[#050505] px-8 py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-[#F2D3AC] transition-all flex items-center gap-4 mx-auto">
                      {t.hero.btn1} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                </div>
              </div>

              {/* Lookbook Grid (Visual Commerce) */}
              <div className="py-24 px-6 bg-[#050505]">
                <div className="max-w-[1600px] mx-auto">
                  <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                      <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2">{t.lookbook.title}</h2>
                      <p className="text-[#888] font-light">{t.lookbook.p}</p>
                    </div>
                    <button onClick={() => setCurrentView('catalog')} className="hidden md:flex font-mono text-xs uppercase tracking-widest hover:text-[#F2D3AC] transition-colors items-center gap-2">
                      Shop Lookbook <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className={`relative overflow-hidden group ${i === 1 || i === 4 ? 'aspect-square' : 'aspect-[3/4]'}`}>
                        <div className="relative w-full h-full"><Image src={`https://placehold.co/600x800/${i%2===0?'111111':'222222'}/ffffff?text=Look+0${i}`} alt={`Look ${i}`} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" /></div>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <ShoppingBag className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trust & Values Section */}
              <div className="py-24 px-6 bg-[#0A0A0A] border-y border-[#222]">
                <div className="max-w-[1600px] mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">{t.values.title}</h2>
                    <p className="text-[#A0A0A0]">{t.values.p}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {t.values.items.map((item, i) => (
                      <div key={i} className="text-center md:text-left group">
                        <div className="w-12 h-12 bg-[#111] border border-[#333] rounded-sm flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:border-[#F2D3AC] transition-colors">
                          <item.icon className="w-5 h-5 text-[#F2D3AC]" />
                        </div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-3">{item.title}</h3>
                        <p className="text-[#888] font-light leading-relaxed text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Highlighted Testimonials */}
              <div className="py-24 px-6 bg-[#050505]">
                <div className="max-w-[1600px] mx-auto text-center">
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-16">{t.testimonials.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {t.testimonials.items.map((test, i) => (
                      <div key={i} className="p-8 bg-[#0A0A0A] border border-[#222] relative hover:border-[#333] transition-colors">
                        <div className="flex gap-1 mb-6 justify-center">
                          {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-[#F2D3AC] fill-current" />)}
                        </div>
                        <p className="text-[#F2F2F2] font-light text-base md:text-lg mb-8 italic">"{test.text}"</p>
                        <div className="text-center">
                          <p className="font-bold uppercase tracking-widest text-[10px]">{test.name}</p>
                          <p className="text-[#888] font-mono text-[10px] uppercase mt-1">{test.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <footer className="py-12 border-t border-[#222] text-center font-mono text-[10px] text-[#555] uppercase">
                {t.footer}
              </footer>
            </motion.div>
          )}

          {/* ATELIER (ABOUT) VIEW */}
          {currentView === 'atelier' && (
            <motion.div 
              key="atelier"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={springConfig}
              className="flex-1 pt-16 px-6 pb-24 max-w-[1600px] w-full mx-auto"
            >
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">{t.process.title}</h1>
                <p className="text-lg text-[#A0A0A0] font-light mb-16">{t.process.p}</p>

                <div className="space-y-12">
                  {t.process.steps.map((step, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-8 items-start pb-12 border-b border-[#222]">
                      <div className="font-mono text-3xl text-[#F2D3AC] font-light">{step.num}</div>
                      <div>
                        <h3 className="text-xl font-bold uppercase tracking-widest mb-3">{step.title}</h3>
                        <p className="text-[#888] text-base leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* SUPPORT VIEW */}
          {currentView === 'support' && (
            <motion.div 
              key="support"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={springConfig}
              className="flex-1 pt-16 px-6 pb-24 max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16"
            >
              <div>
                <div className="mb-12">
                  <LifeBuoy className="w-6 h-6 text-[#F2D3AC] mb-6" />
                  <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">{t.faq.title}</h1>
                </div>
                <div className="space-y-6">
                  {t.faq.items.map((faq, i) => (
                    <div key={i} className="bg-[#0A0A0A] border border-[#222] p-6 hover:border-[#333] transition-colors">
                      <h3 className="text-xs font-bold uppercase tracking-widest mb-2 text-[#F2F2F2]">{faq.q}</h3>
                      <p className="text-[#888] font-light text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0A0A0A] border border-[#222] p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#F2D3AC]"></div>
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-2">{t.contact.title}</h2>
                <p className="text-[#888] font-light text-sm mb-10">{t.contact.desc}</p>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-[10px] font-mono text-[#888] uppercase tracking-widest mb-2">{t.contact.fields.name}</label>
                    <input type="text" className="w-full bg-[#050505] border border-[#333] p-3 text-sm focus:outline-none focus:border-[#F2D3AC] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-[#888] uppercase tracking-widest mb-2">{t.contact.fields.email}</label>
                    <input type="email" className="w-full bg-[#050505] border border-[#333] p-3 text-sm focus:outline-none focus:border-[#F2D3AC] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-[#888] uppercase tracking-widest mb-2">{t.contact.fields.msg}</label>
                    <textarea rows={4} className="w-full bg-[#050505] border border-[#333] p-3 text-sm focus:outline-none focus:border-[#F2D3AC] transition-colors"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#F2F2F2] text-[#050505] py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-[#F2D3AC] transition-colors flex items-center justify-center gap-3">
                    {t.contact.fields.btn} <Send className="w-3 h-3" />
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {/* CATALOG VIEW */}
          {currentView === 'catalog' && (
            <motion.div 
              key="catalog"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={springConfig}
              className="flex-1 pt-16 px-6 pb-24 max-w-[1600px] w-full mx-auto"
            >
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">{t.catalog.title}</h1>
                <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar border-b border-[#222]">
                  {t.catalog.filters.map(f => (
                    <button 
                      key={f} onClick={() => setActiveFilter(f)}
                      className={`pb-3 px-2 font-mono text-[10px] uppercase tracking-widest whitespace-nowrap transition-colors relative ${activeFilter === f ? 'text-[#F2F2F2]' : 'text-[#555555] hover:text-[#A0A0A0]'}`}
                    >
                      {f}
                      {activeFilter === f && <motion.div layoutId="activeFilter" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F2D3AC]" />}
                    </button>
                  ))}
                </div>
              </div>

              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredItems.map(item => (
                    <motion.div 
                      layout key={item.id} layoutId={`card-${item.id}`}
                      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                      transition={layoutSpring} className="group cursor-pointer" onClick={() => handleProductClick(item)}
                    >
                      <div className="relative aspect-[4/5] bg-[#111111] overflow-hidden mb-6">
                        <motion.img layoutId={`image-${item.id}`} src={item.img} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"/>
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-[#F2F2F2] text-black px-6 py-3 font-bold uppercase tracking-widest text-[10px]">Ver Detalles</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-mono text-[10px] text-[#A0A0A0] uppercase tracking-widest mb-1">{item.cat}</p>
                          <motion.h3 layoutId={`title-${item.id}`} className="text-lg font-bold uppercase tracking-tight">{item.title}</motion.h3>
                        </div>
                        <motion.p layoutId={`price-${item.id}`} className="font-mono text-sm">{item.priceStr}</motion.p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}

          {/* PRODUCT DETAIL VIEW (Expanded) */}
          {currentView === 'product' && selectedProduct && (
            <motion.div 
              key="product"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={springConfig}
              className="flex-1 pt-12 px-6 md:px-12 pb-24 max-w-[1600px] w-full mx-auto"
            >
              <button onClick={() => setCurrentView('catalog')} className="mb-8 font-mono text-[10px] text-[#A0A0A0] uppercase tracking-widest hover:text-[#F2F2F2] flex items-center gap-2">
                <ChevronLeft className="w-3 h-3" /> Back to Collection
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-24">
                <motion.div layoutId={`card-${selectedProduct.id}`} className="relative aspect-[4/5] lg:aspect-auto lg:h-[80vh] bg-[#111111] w-full overflow-hidden sticky top-24">
                  <motion.img layoutId={`image-${selectedProduct.id}`} src={selectedProduct.img} alt={selectedProduct.title} className="w-full h-full object-cover"/>
                  <div className="absolute top-6 right-6">
                    <Maximize2 className="w-5 h-5 text-[#F2F2F2]/50 hover:text-[#F2F2F2] cursor-pointer transition-colors" />
                  </div>
                </motion.div>

                <div className="flex flex-col justify-center py-12">
                  <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-mono text-[10px] text-[#A0A0A0] uppercase tracking-[0.2em] mb-4">
                    {selectedProduct.cat} // 001
                  </motion.p>
                  <motion.h1 layoutId={`title-${selectedProduct.id}`} className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 leading-none">
                    {selectedProduct.title}
                  </motion.h1>
                  <motion.p layoutId={`price-${selectedProduct.id}`} className="font-mono text-xl text-[#F2D3AC] mb-8">
                    {selectedProduct.priceStr}
                  </motion.p>
                  
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-[#A0A0A0] text-base font-light mb-10 leading-relaxed">
                    Designed for absolute resilience and minimalist aesthetics. Constructed with military-grade ballistic nylon, aerospace-grade titanium hardware, and hand-finished Italian calfskin accents. Perfect for high-stakes urban environments.
                  </motion.p>

                  <motion.button 
                    onClick={() => addToCart(selectedProduct)}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} 
                    className="w-full bg-[#F2F2F2] text-[#050505] py-4 mb-10 font-black uppercase tracking-[0.2em] hover:bg-[#F2D3AC] transition-colors flex items-center justify-center gap-3"
                  >
                    <ShoppingBag className="w-4 h-4" />{t.product.add}
                  </motion.button>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="w-full h-[1px] bg-[#222] mb-10" />

                  {/* Tech Specs accordion/list */}
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="space-y-6 mb-10">
                    <h3 className="font-bold uppercase tracking-widest text-sm mb-4">{t.product.specs.title}</h3>
                    
                    <div className="grid grid-cols-[auto_1fr] gap-4 items-start pb-4 border-b border-[#222]">
                      <Ruler className="w-4 h-4 text-[#888] mt-0.5" />
                      <div>
                        <p className="font-mono text-[10px] text-[#A0A0A0] uppercase">{t.product.specs.dim}</p>
                        <p className="text-sm font-light">45cm (L) x 30cm (H) x 15cm (W) — 20L Capacity</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-[auto_1fr] gap-4 items-start pb-4 border-b border-[#222]">
                      <Layers className="w-4 h-4 text-[#888] mt-0.5" />
                      <div>
                        <p className="font-mono text-[10px] text-[#A0A0A0] uppercase">{t.product.specs.mat}</p>
                        <p className="text-sm font-light">Full-grain Tuscan Leather, 1680D Ballistic Nylon</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
                      <Zap className="w-4 h-4 text-[#888] mt-0.5" />
                      <div>
                        <p className="font-mono text-[10px] text-[#A0A0A0] uppercase">{t.product.specs.hw}</p>
                        <p className="text-sm font-light">Gunmetal Titanium YKK Zippers, Anodized Clasps</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="bg-[#0A0A0A] p-6 border border-[#222] space-y-4">
                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#F2F2F2]">
                      <Truck className="w-4 h-4 text-[#F2D3AC]" /><span>{t.product.shipping}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#F2F2F2]">
                      <ShieldCheck className="w-4 h-4 text-[#F2D3AC]" /><span>{t.product.warranty}</span>
                    </div>
                  </motion.div>

                </div>
              </div>

              {/* Related Products / Cross-Selling */}
              {relatedItems.length > 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="border-t border-[#222] pt-24">
                  <h2 className="text-2xl font-black uppercase tracking-tighter mb-10 text-center">{t.product.related}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {relatedItems.map(item => (
                      <div key={item.id} className="group cursor-pointer" onClick={() => handleProductClick(item)}>
                        <div className="relative aspect-[4/5] bg-[#111111] overflow-hidden mb-4">
                          <div className="relative w-full h-full"><Image src={item.img} alt={item.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700" /></div>
                        </div>
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-mono text-[10px] text-[#A0A0A0] uppercase tracking-widest mb-1">{item.cat}</p>
                            <h3 className="text-sm font-bold uppercase tracking-tight">{item.title}</h3>
                          </div>
                          <p className="font-mono text-xs">{item.priceStr}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Slide-out Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-[#050505] border-l border-[#222] z-[101] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-[#222] flex justify-between items-center">
                <h2 className="font-black text-xl uppercase tracking-tighter flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#F2D3AC]" /> {t.cart.title}
                </h2>
                <button onClick={() => setIsCartOpen(false)} className="text-[#888] hover:text-[#F2F2F2] transition-colors p-2">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center text-[#888]">
                    <ShoppingBag className="w-12 h-12 mb-4 opacity-20" />
                    <p className="font-light">{t.cart.empty}</p>
                    <button 
                      onClick={() => { setIsCartOpen(false); setCurrentView('catalog'); }}
                      className="mt-6 font-bold uppercase tracking-widest text-[10px] text-[#F2F2F2] border-b border-[#F2D3AC] pb-1 hover:text-[#F2D3AC] transition-colors"
                    >
                      {t.hero.btn1}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 bg-[#0A0A0A] border border-[#222] p-4">
                        <div className="w-20 h-24 bg-[#111] overflow-hidden flex-shrink-0">
                          <div className="relative w-full h-full"><Image src={item.img} alt={item.title} fill className="object-cover" /></div>
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold uppercase tracking-tight text-sm mb-1">{item.title}</h3>
                              <p className="font-mono text-[10px] text-[#888] uppercase">{item.cat}</p>
                            </div>
                            <button onClick={() => removeCartItem(item.id)} className="text-[#555] hover:text-[#F2055C] transition-colors">
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <div className="flex justify-between items-end">
                            <div className="flex items-center gap-3 border border-[#333] px-2 py-1">
                              <button onClick={() => updateCartQty(item.id, -1)} className="text-[#888] hover:text-white"><Minus className="w-3 h-3"/></button>
                              <span className="font-mono text-xs w-4 text-center">{item.qty}</span>
                              <button onClick={() => updateCartQty(item.id, 1)} className="text-[#888] hover:text-white"><Plus className="w-3 h-3"/></button>
                            </div>
                            <p className="font-mono text-sm text-[#F2D3AC]">{region === 'usa' ? '$' : '$'}{(item.price * item.qty).toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-6 border-t border-[#222] bg-[#0A0A0A]">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-bold uppercase tracking-widest text-xs text-[#888]">{t.cart.subtotal}</span>
                    <span className="font-mono text-xl text-[#F2F2F2]">{region === 'usa' ? '$' : '$'}{cartTotal.toLocaleString()}</span>
                  </div>
                  <button className="w-full bg-[#F2F2F2] text-[#050505] py-4 font-black uppercase tracking-widest text-[10px] hover:bg-[#F2D3AC] transition-colors flex items-center justify-center gap-2">
                    {t.cart.checkout} <Lock className="w-3 h-3" />
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  )
}

// Quick Lock icon polyfill since it wasn't imported at top
function Lock(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  )
}
