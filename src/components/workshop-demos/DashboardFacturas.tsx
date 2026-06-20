"use client"
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutDashboard, FileText, Users, Settings, Bell, Search, ArrowUpRight, ArrowDownRight, MoreHorizontal, Plus, ChevronLeft, CreditCard, CheckCircle2, AlertCircle, FilePlus, Download } from 'lucide-react'
import { useState } from 'react'

// Mock Data
const INVOICES = [
  { id: "INV-2026-892", client: "Acme Corp", amount: "$3,400.00", status: "Pagado", date: "Hoy, 10:42 AM", avatar: "AC" },
  { id: "INV-2026-891", client: "Global Industries", amount: "$12,250.00", status: "Pendiente", date: "Ayer", avatar: "GI" },
  { id: "INV-2026-890", client: "TechFlow LLC", amount: "$8,900.00", status: "Pagado", date: "15 Jun, 2026", avatar: "TF" },
  { id: "INV-2026-889", client: "Vanguard Studios", amount: "$450.00", status: "Vencido", date: "10 Jun, 2026", avatar: "VS" },
  { id: "INV-2026-888", client: "Stark Dynamics", amount: "$45,000.00", status: "Pendiente", date: "08 Jun, 2026", avatar: "SD" },
]

// Smooth Spring Physics
const springConfig = { type: "spring", stiffness: 300, damping: 30 } as const

export function DashboardFacturas() {
  const [currentView, setCurrentView] = useState<'overview' | 'invoices' | 'new'>('overview')

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans flex selection:bg-indigo-500 selection:text-white">
      {/* Sidebar - Clean & Friendly */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col relative z-20">
        <div className="h-20 flex items-center px-6 border-b border-slate-100">
          <div className="font-black text-2xl tracking-tight text-slate-900 flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-600/20">
              <span className="text-white text-sm">A</span>
            </div>
            Arasue<span className="text-indigo-600">Pay</span>
          </div>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-1.5">
          <button 
            onClick={() => setCurrentView('overview')}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
              currentView === 'overview' 
              ? 'bg-indigo-50 text-indigo-700' 
              : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" /> Resumen
          </button>
          
          <button 
            onClick={() => setCurrentView('invoices')}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
              currentView === 'invoices' || currentView === 'new'
              ? 'bg-indigo-50 text-indigo-700' 
              : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <FileText className="w-4 h-4" /> Facturas
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-semibold text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all">
            <Users className="w-4 h-4" /> Clientes
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-semibold text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all">
            <Settings className="w-4 h-4" /> Configuración
          </button>
        </nav>

        <div className="p-4 border-t border-slate-100 m-4 bg-slate-50 rounded-2xl border border-slate-200/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
              JS
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Josue Admin</p>
              <p className="text-xs font-medium text-slate-500">Plan Profesional</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Workspace */}
      <main className="flex-1 flex flex-col relative overflow-hidden bg-[#F8FAFC]">
        {/* Top Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 hidden sm:block">
            {currentView === 'overview' ? 'Hola, Josue 👋' : currentView === 'invoices' ? 'Facturas' : 'Nueva Factura'}
          </h2>

          <div className="flex items-center gap-6 ml-auto">
            <div className="relative w-64 hidden md:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar clientes o ID..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-100 border border-transparent rounded-full text-sm text-slate-900 outline-none focus:bg-white focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 transition-all placeholder-slate-400" 
              />
            </div>
            <button className="relative text-slate-400 hover:text-slate-600 transition-colors bg-slate-100 p-2 rounded-full">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
            <button 
              onClick={() => setCurrentView('new')}
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-sm hover:shadow-md hover:shadow-indigo-600/20 active:scale-95"
            >
              <Plus className="w-4 h-4" /> Crear Factura
            </button>
          </div>
        </header>

        {/* Dynamic Content Area */}
        <div className="flex-1 overflow-auto p-8 relative z-10">
          <AnimatePresence mode="wait">
            
            {/* OVERVIEW VIEW */}
            {currentView === 'overview' && (
              <motion.div 
                key="overview"
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -10 }}
                transition={springConfig}
                className="max-w-7xl mx-auto"
              >
                {/* KPI Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                      <span className="flex items-center text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
                        +12.5%
                      </span>
                    </div>
                    <p className="text-slate-500 font-medium text-sm mb-1">Ingresos (30 Días)</p>
                    <h2 className="text-4xl font-black tracking-tight text-slate-900">$45,231.<span className="text-slate-400">89</span></h2>
                  </div>

                  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl">
                        <AlertCircle className="w-5 h-5" />
                      </div>
                      <span className="flex items-center text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full">
                        2 Vencidas
                      </span>
                    </div>
                    <p className="text-slate-500 font-medium text-sm mb-1">Facturas Pendientes</p>
                    <h2 className="text-4xl font-black tracking-tight text-slate-900">12</h2>
                  </div>

                  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="flex items-center text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
                        Excelente
                      </span>
                    </div>
                    <p className="text-slate-500 font-medium text-sm mb-1">Tasa de Cobro a Tiempo</p>
                    <h2 className="text-4xl font-black tracking-tight text-slate-900">94.2%</h2>
                  </div>
                </div>

                {/* Main Data Table */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="font-bold text-lg text-slate-900">Actividad Reciente</h3>
                    <button 
                      onClick={() => setCurrentView('invoices')}
                      className="text-indigo-600 font-semibold text-sm hover:text-indigo-800 transition-colors"
                    >
                      Ver todas
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50/50 text-slate-500 text-xs uppercase tracking-wider font-semibold border-b border-slate-100">
                          <th className="px-6 py-4">Cliente</th>
                          <th className="px-6 py-4">Monto</th>
                          <th className="px-6 py-4">Estado</th>
                          <th className="px-6 py-4">Fecha</th>
                          <th className="px-6 py-4"></th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        {INVOICES.slice(0,4).map((row, i) => (
                          <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/80 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 border border-slate-200">
                                  {row.avatar}
                                </div>
                                <span className="font-bold text-slate-900">{row.client}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 font-semibold text-slate-700">{row.amount}</td>
                            <td className="px-6 py-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                                row.status === 'Pagado' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                                row.status === 'Pendiente' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                                'bg-red-50 text-red-700 border-red-200'
                              }`}>
                                {row.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-slate-500">{row.date}</td>
                            <td className="px-6 py-4 text-right">
                              <button className="text-slate-400 hover:text-slate-600 bg-white p-1 rounded-md border border-slate-200 shadow-sm"><MoreHorizontal className="w-4 h-4" /></button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {/* FULL LEDGER VIEW */}
            {currentView === 'invoices' && (
              <motion.div 
                key="invoices"
                initial={{ opacity: 0, scale: 0.98 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.98 }}
                transition={springConfig}
                className="max-w-7xl mx-auto h-full flex flex-col"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
                  <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Todas las Facturas</h1>
                    <p className="text-slate-500 text-sm mt-1">Gestiona y da seguimiento a tus cobros.</p>
                  </div>
                  <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-xl font-semibold text-sm hover:bg-slate-50 hover:text-slate-900 transition-colors flex items-center gap-2 shadow-sm">
                    <Download className="w-4 h-4" /> Exportar CSV
                  </button>
                </div>

                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex-1">
                  <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input type="text" placeholder="Buscar por cliente, ID o monto..." className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 transition-all" />
                    </div>
                    <select className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-xl font-semibold text-sm outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100">
                      <option>Todos los Estados</option>
                      <option>Pagado</option>
                      <option>Pendiente</option>
                      <option>Vencido</option>
                    </select>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50/50 text-slate-500 text-xs uppercase tracking-wider font-semibold border-b border-slate-100">
                          <th className="px-6 py-4">ID Factura</th>
                          <th className="px-6 py-4">Cliente</th>
                          <th className="px-6 py-4">Monto</th>
                          <th className="px-6 py-4">Estado</th>
                          <th className="px-6 py-4">Fecha Emisión</th>
                          <th className="px-6 py-4"></th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        {[...INVOICES, ...INVOICES].map((row, i) => ( 
                          <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/80 transition-colors">
                            <td className="px-6 py-4 font-mono text-xs text-slate-500">{row.id}-{i}</td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 border border-slate-200">
                                  {row.avatar}
                                </div>
                                <span className="font-bold text-slate-900">{row.client}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 font-semibold text-slate-700">{row.amount}</td>
                            <td className="px-6 py-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                                row.status === 'Pagado' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                                row.status === 'Pendiente' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                                'bg-red-50 text-red-700 border-red-200'
                              }`}>
                                {row.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-slate-500">{row.date}</td>
                            <td className="px-6 py-4 text-right">
                              <button className="text-slate-400 hover:text-indigo-600 bg-white p-1.5 rounded-md border border-slate-200 shadow-sm transition-colors"><ArrowUpRight className="w-4 h-4" /></button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {/* NEW INVOICE VIEW */}
            {currentView === 'new' && (
              <motion.div 
                key="new"
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: -20 }}
                transition={springConfig}
                className="max-w-4xl mx-auto"
              >
                <button 
                  onClick={() => setCurrentView('overview')}
                  className="mb-6 flex items-center gap-2 text-slate-500 font-semibold text-sm hover:text-slate-900 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Volver al Resumen
                </button>

                <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                  <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
                    <div className="w-12 h-12 bg-indigo-50 border border-indigo-100 flex items-center justify-center rounded-2xl">
                      <FilePlus className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-slate-900 tracking-tight">Crear Factura</h2>
                      <p className="text-sm text-slate-500 mt-1">Completa los detalles para generar y enviar a tu cliente.</p>
                    </div>
                  </div>

                  <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setCurrentView('invoices'); }}>
                    {/* Entity Data */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">Información del Cliente</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Cliente</label>
                          <select className="w-full bg-slate-50 border border-slate-200 p-3 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 rounded-xl transition-all">
                            <option>Seleccionar cliente existente...</option>
                            <option>Acme Corp</option>
                            <option>Stark Dynamics</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Email de Contacto</label>
                          <input type="email" placeholder="facturacion@cliente.com" className="w-full bg-slate-50 border border-slate-200 p-3 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 rounded-xl transition-all placeholder-slate-400" />
                        </div>
                      </div>
                    </div>

                    {/* Invoice Data */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">Detalles del Cobro</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Fecha de Emisión</label>
                          <input type="date" className="w-full bg-slate-50 border border-slate-200 p-3 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 rounded-xl transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Vencimiento</label>
                          <select className="w-full bg-slate-50 border border-slate-200 p-3 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 rounded-xl transition-all">
                            <option>Net 15</option>
                            <option>Net 30</option>
                            <option>Net 60</option>
                            <option>Al recibir</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Moneda</label>
                          <select className="w-full bg-slate-50 border border-slate-200 p-3 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 rounded-xl transition-all">
                            <option>USD - Dólar Estadounidense</option>
                            <option>MXN - Peso Mexicano</option>
                            <option>EUR - Euro</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Line Items */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">Conceptos</h3>
                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                        <div className="grid grid-cols-12 gap-4 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200 pb-2">
                          <div className="col-span-6">Descripción</div>
                          <div className="col-span-2">Cant</div>
                          <div className="col-span-2">Precio U.</div>
                          <div className="col-span-2 text-right">Total</div>
                        </div>
                        <div className="grid grid-cols-12 gap-4 items-center">
                          <div className="col-span-6">
                            <input type="text" placeholder="Servicio de Consultoría IT..." className="w-full bg-white border border-slate-200 p-2.5 text-slate-900 text-sm focus:outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 rounded-lg transition-all" />
                          </div>
                          <div className="col-span-2">
                            <input type="number" defaultValue="1" className="w-full bg-white border border-slate-200 p-2.5 text-slate-900 text-sm focus:outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 rounded-lg transition-all" />
                          </div>
                          <div className="col-span-2">
                            <input type="number" defaultValue="1500" className="w-full bg-white border border-slate-200 p-2.5 text-slate-900 text-sm focus:outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 rounded-lg transition-all" />
                          </div>
                          <div className="col-span-2 text-right text-slate-900 font-bold text-sm">
                            $1,500.00
                          </div>
                        </div>
                        <button type="button" className="mt-4 text-indigo-600 font-bold text-sm hover:text-indigo-800 transition-colors flex items-center gap-1">
                          <Plus className="w-4 h-4" /> Añadir Concepto
                        </button>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-center justify-end gap-6 pt-6 border-t border-slate-100">
                      <div className="text-right">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total a Facturar</p>
                        <p className="text-3xl font-black text-slate-900">$1,500.00</p>
                      </div>
                      <button 
                        type="submit"
                        className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:shadow-indigo-600/20 active:scale-95"
                      >
                        <CreditCard className="w-4 h-4" /> Emitir Factura
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}
