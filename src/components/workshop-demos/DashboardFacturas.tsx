"use client"
import { motion } from 'framer-motion'
import { LayoutDashboard, FileText, Users, Settings, Bell, Search, ArrowUpRight, ArrowDownRight, MoreVertical } from 'lucide-react'

export function DashboardFacturas() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] text-slate-900 font-sans flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-200">
          <div className="font-black text-xl tracking-tighter">FINA<span className="text-indigo-600">.</span></div>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 bg-indigo-50 text-indigo-700 rounded-lg font-bold">
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg font-semibold transition-colors">
            <FileText className="w-5 h-5" /> Facturas
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg font-semibold transition-colors">
            <Users className="w-5 h-5" /> Clientes
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg font-semibold transition-colors">
            <Settings className="w-5 h-5" /> Configuración
          </a>
        </nav>
        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
              <img src="https://placehold.co/100x100/111/fff?text=User" alt="User" />
            </div>
            <div>
              <p className="text-sm font-bold">Admin User</p>
              <p className="text-xs text-slate-500">Plan Pro</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="relative w-64 hidden sm:block">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input type="text" placeholder="Buscar facturas..." className="w-full pl-9 pr-4 py-2 bg-slate-100 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all" />
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/20 transition-all active:scale-95">
              Nueva Factura
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 md:p-8 flex-1 overflow-auto">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-2xl font-black mb-8">Resumen Financiero</h1>
            
            {/* KPI Cards (Gamification / Progress) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-500 font-semibold text-sm mb-2">Ingresos (Este mes)</p>
                <div className="flex items-end gap-4">
                  <h2 className="text-3xl font-black">$45,231.89</h2>
                  <span className="flex items-center text-sm font-bold text-green-600 mb-1 bg-green-50 px-2 py-0.5 rounded-md">
                    <ArrowUpRight className="w-4 h-4 mr-1" /> +12.5%
                  </span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-500 font-semibold text-sm mb-2">Facturas Pendientes</p>
                <div className="flex items-end gap-4">
                  <h2 className="text-3xl font-black">12</h2>
                  <span className="flex items-center text-sm font-bold text-red-600 mb-1 bg-red-50 px-2 py-0.5 rounded-md">
                    <ArrowDownRight className="w-4 h-4 mr-1" /> -2%
                  </span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-500 font-semibold text-sm mb-2">Tasa de Cobro</p>
                <div className="flex items-end gap-4">
                  <h2 className="text-3xl font-black">94.2%</h2>
                  <span className="flex items-center text-sm font-bold text-green-600 mb-1 bg-green-50 px-2 py-0.5 rounded-md">
                    <ArrowUpRight className="w-4 h-4 mr-1" /> +1.1%
                  </span>
                </div>
              </div>
            </div>

            {/* Main Data Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-200 flex justify-between items-center">
                <h3 className="font-bold text-lg">Actividad Reciente</h3>
                <button className="text-indigo-600 font-semibold text-sm hover:underline">Ver todas</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-200">
                      <th className="px-6 py-4 font-semibold">Cliente</th>
                      <th className="px-6 py-4 font-semibold">Monto</th>
                      <th className="px-6 py-4 font-semibold">Estado</th>
                      <th className="px-6 py-4 font-semibold">Fecha</th>
                      <th className="px-6 py-4 font-semibold"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { client: "Acme Corp", amount: "$3,400.00", status: "Pagado", date: "Hoy, 10:42 AM" },
                      { client: "Global Industries", amount: "$1,250.00", status: "Pendiente", date: "Ayer" },
                      { client: "TechFlow LLC", amount: "$8,900.00", status: "Pagado", date: "15 Jun, 2026" },
                      { client: "Vanguard Studios", amount: "$450.00", status: "Vencido", date: "10 Jun, 2026" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-sm">{row.client}</td>
                        <td className="px-6 py-4 font-semibold text-slate-600 text-sm">{row.amount}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                            row.status === 'Pagado' ? 'bg-green-100 text-green-700' :
                            row.status === 'Pendiente' ? 'bg-amber-100 text-amber-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">{row.date}</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-slate-900"><MoreVertical className="w-5 h-5" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
