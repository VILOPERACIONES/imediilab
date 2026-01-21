import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/imedilab-logo.svg';
import { Menu, X, ChevronDown } from 'lucide-react';

const packagesData = [
  {
    id: 1,
    category: "MUJERES",
    categoryColor: "bg-pink-50 text-pink-500",
    title: "Perfil Climaterio",
    price: "$480",
    items: ["Estradiol", "Hormona Folículo Estimulante", "Prolactina, Luteinizante"],
  },
  {
    id: 2,
    category: "MUJERES",
    categoryColor: "bg-pink-50 text-pink-500",
    title: "Perfil Ginecológico",
    price: "$480",
    items: ["Estradiol", "Hormona Folículo Estimulante", "Prolactina", "Testosterona Total", "Progesterona y Hormona Luteinizante"],
  },
  {
    id: 3,
    category: "EMBARAZO",
    categoryColor: "bg-orange-50 text-orange-500",
    title: "Check Up Embarazo Básico",
    price: "$1,380",
    items: ["USG", "BHC", "EGO"],
  },
  {
    id: 4,
    category: "EMBARAZO",
    categoryColor: "bg-orange-50 text-orange-500",
    title: "Check Up Embarazo Completo",
    price: "$1,554",
    items: ["USG", "BHC", "EGO", "VIH"],
  },
  {
    id: 5,
    category: "EMBARAZO",
    categoryColor: "bg-orange-50 text-orange-500",
    title: "Paquete Prenatal",
    price: "$644",
    items: ["BHC", "GS/RH", "VDRL", "AC. Anti VIH 1, 2, 3", "EGO"],
  },
  {
    id: 6,
    category: "ADULTO MAYOR",
    categoryColor: "bg-purple-50 text-purple-600",
    title: "Paquete Adulto Mayor",
    price: "$1,954",
    items: ["RX Tórax", "ECG", "EGO", "BHC", "QS6", "APP"],
  },
  {
    id: 7,
    category: "PREVENTIVOS",
    categoryColor: "bg-blue-50 text-blue-600",
    title: "Paquete Cardiopulmonar",
    price: "$1,700",
    items: ["RX Tórax", "ECG"],
  },
  {
    id: 8,
    category: "PREVENTIVOS",
    categoryColor: "bg-blue-50 text-blue-600",
    title: "Check Up Laboratorio Completo",
    price: "$1,349",
    items: ["BHC", "QS6", "Perfil de Lípidos, Hepático y Tiroideo", "EGO"],
  },
  {
    id: 9,
    category: "PREVENTIVOS",
    categoryColor: "bg-blue-50 text-blue-600",
    title: "Check Up Bienestar Integral",
    price: "$1,374",
    items: ["Glucosa", "HbA1c", "Perfil de Lípidos y Hepático", "Creatina, Ac. Úrico", "Vitamina D"],
  },
  {
    id: 10,
    category: "PREVENTIVOS",
    categoryColor: "bg-blue-50 text-blue-600",
    title: "Check Up Básico",
    price: "$1,021",
    items: ["BHC", "EGO", "Perfil de Lípidos y Hepático", "EGO"],
  },
  {
    id: 11,
    category: "PREVENTIVOS",
    categoryColor: "bg-blue-50 text-blue-600",
    title: "Check Up Total Salud",
    price: "$1,403",
    items: ["BHC", "QS47", "EGO"],
  },
  {
    id: 12,
    category: "SALUD SEXUAL",
    categoryColor: "bg-green-50 text-green-600",
    title: "Check Up Prevención Sexual Plus",
    price: "$413",
    items: ["VIH", "VDRL", "EGO"],
  },
  {
    id: 13,
    category: "SALUD SEXUAL",
    categoryColor: "bg-green-50 text-green-600",
    title: "Check Up Sexual Completo",
    price: "$767",
    items: ["VIH", "VDRL", "AG Hepatitis B", "AC Hepatitis C"],
  },
  {
    id: 14,
    category: "PEDIÁTRICOS",
    categoryColor: "bg-amber-50 text-amber-600",
    title: "Check Up Pediátrico Básico",
    price: "$0",
    items: ["BHC", "EGO", "Glucosa"],
  },
  {
    id: 15,
    category: "PEDIÁTRICOS",
    categoryColor: "bg-amber-50 text-amber-600",
    title: "Check Up Pediátrico Metabólico",
    price: "$0",
    items: ["BHC, Glucosa, Urea", "Creatinina", "Ácido Úrico", "EGO"],
  },
  {
    id: 16,
    category: "PEDIÁTRICOS",
    categoryColor: "bg-amber-50 text-amber-600",
    title: "Check Up Pediátrico Nutricional",
    price: "$0",
    items: ["BHC", "Perfil de Hierro", "Vitamina D"],
  },
];

const categories = [
  { id: "todos", label: "Todos" },
  { id: "embarazo", label: "Embarazo" },
  { id: "mujeres", label: "Mujeres" },
  { id: "adulto-mayor", label: "Adulto Mayor" },
  { id: "preventivos", label: "Preventivos" },
  { id: "salud-sexual", label: "Salud Sexual" },
  { id: "pediatricos", label: "Pediátricos" },
];

const Packages = () => {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedPackages, setExpandedPackages] = useState<number[]>([]);

  const togglePackageExpand = (id: number) => {
    setExpandedPackages(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const filteredPackages = activeCategory === "todos" 
    ? packagesData 
    : packagesData.filter(pkg => 
        pkg.category.toLowerCase().replace(" ", "-") === activeCategory ||
        (activeCategory === "mujeres" && pkg.category === "MUJERES") ||
        (activeCategory === "embarazo" && pkg.category === "EMBARAZO") ||
        (activeCategory === "adulto-mayor" && pkg.category === "ADULTO MAYOR") ||
        (activeCategory === "preventivos" && pkg.category === "PREVENTIVOS") ||
        (activeCategory === "salud-sexual" && pkg.category === "SALUD SEXUAL") ||
        (activeCategory === "pediatricos" && pkg.category === "PEDIÁTRICOS")
      );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 px-5 md:px-20 py-4">
        <nav className="flex max-w-[1200px] mx-auto items-center justify-between">
          <Link to="/">
            <img
              src={logo}
              className="h-8 md:h-10 object-contain px-2"
              alt="IMEDILAB Logo"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link to="/#empresas" className="hover:text-slate-900 transition-colors">Empresas</Link>
            <Link to="/#nosotros" className="hover:text-slate-900 transition-colors">Nosotros</Link>
            <Link to="/#servicios" className="hover:text-slate-900 transition-colors">Servicios</Link>
            <Link to="/paquetes" className="text-[#FF431B] font-semibold">Paquetes</Link>
            <Link to="/#sucursales" className="hover:text-slate-900 transition-colors">Sucursales</Link>
          </div>
          
          {/* Desktop CTA */}
          <button className="hidden md:flex bg-slate-900 items-center gap-2 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Agendar Cita</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-5 py-6 shadow-lg">
          <div className="flex flex-col gap-4 text-base font-medium text-slate-600">
            <Link to="/#empresas" className="py-2 hover:text-slate-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Empresas</Link>
            <Link to="/#nosotros" className="py-2 hover:text-slate-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Nosotros</Link>
            <Link to="/#servicios" className="py-2 hover:text-slate-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Servicios</Link>
            <Link to="/paquetes" className="py-2 text-[#FF431B] font-semibold" onClick={() => setMobileMenuOpen(false)}>Paquetes</Link>
            <Link to="/#sucursales" className="py-2 hover:text-slate-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Sucursales</Link>
            <button className="mt-4 bg-slate-900 flex items-center justify-center gap-2 text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-slate-800 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Agendar Cita</span>
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-10 md:py-16 px-5 md:px-20 text-center">
        <span className="inline-flex items-center gap-1.5 text-[#FF431B] text-xs font-medium mb-3 md:mb-4">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Precios actualizados 100%
        </span>
        <h1 className="text-slate-900 text-2xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4">
          Nuestros Paquetes de Salud
        </h1>
        <p className="text-slate-500 text-sm md:text-base max-w-[500px] mx-auto">
          Selecciona el estudio ideal para tu cuidado preventivo. Tecnología de punta y resultados confiables para ti y tu familia.
        </p>
      </section>

      {/* Category Tabs - Horizontal scrollable on mobile */}
      <section className="bg-slate-50 py-4 md:py-6 px-5 md:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 md:justify-center md:flex-wrap scrollbar-hide">
            <span className="hidden md:block text-slate-500 text-xs font-medium uppercase tracking-wide mr-4">Categorías:</span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id 
                    ? 'bg-[#FF431B] text-white' 
                    : 'bg-white text-slate-600 hover:bg-[#FF431B] hover:text-white border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-8 md:py-12 px-5 md:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 mb-6 md:mb-8">
            <p className="text-slate-500 text-sm">
              Mostrando: <span className="font-semibold text-slate-700">{filteredPackages.length} paquetes</span>
            </p>
            <p className="text-slate-400 text-xs flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Precios sujetos a cambio sin previo aviso
            </p>
          </div>

          {/* Desktop Grid / Mobile List */}
          <div className="hidden md:grid grid-cols-3 gap-6 max-lg:grid-cols-2">
            {filteredPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow p-7 flex flex-col h-full">
                <span className={`inline-block ${pkg.categoryColor} text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md mb-5 w-fit`}>
                  {pkg.category}
                </span>
                
                <h3 className="text-slate-900 text-xl font-bold mb-4">
                  {pkg.title}
                </h3>
                
                <div className="flex items-baseline gap-1.5 mb-6">
                  <span className="text-slate-900 text-3xl font-bold">{pkg.price}</span>
                  <span className="text-slate-400 text-sm font-medium">MXN</span>
                </div>
                
                <div className="flex-1">
                  <p className="text-slate-400 text-[11px] font-semibold uppercase tracking-wider mb-4">
                    Incluye:
                  </p>
                  <div className="space-y-3">
                    {pkg.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="9" stroke="#22c55e" strokeWidth="2" />
                          <path d="M6 10l2.5 2.5L14 7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 text-sm font-semibold py-3.5 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all">
                    <span>Solicitar Info</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Cards - Compact Accordion Style */}
          <div className="md:hidden space-y-3">
            {filteredPackages.map((pkg) => {
              const isExpanded = expandedPackages.includes(pkg.id);
              return (
                <div key={pkg.id} className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                  {/* Header - Always Visible */}
                  <button 
                    onClick={() => togglePackageExpand(pkg.id)}
                    className="w-full p-4 flex items-center justify-between text-left"
                  >
                    <div className="flex-1">
                      <span className={`inline-block ${pkg.categoryColor} text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded mb-2`}>
                        {pkg.category}
                      </span>
                      <h3 className="text-slate-900 text-base font-semibold">
                        {pkg.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#FF431B] text-lg font-bold">{pkg.price}</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                      />
                    </div>
                  </button>
                  
                  {/* Expandable Content */}
                  {isExpanded && (
                    <div className="px-4 pb-4 border-t border-slate-100 pt-3">
                      <p className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider mb-3">
                        Incluye:
                      </p>
                      <div className="space-y-2 mb-4">
                        {pkg.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-2 text-sm text-slate-600">
                            <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                              <circle cx="10" cy="10" r="9" stroke="#22c55e" strokeWidth="2" />
                              <path d="M6 10l2.5 2.5L14 7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                      <button className="w-full flex items-center justify-center gap-2 bg-[#FF431B] text-white text-sm font-semibold py-3 rounded-lg hover:bg-[#e63a17] transition-colors">
                        <span>Solicitar Info</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-12 md:py-24 px-5 md:px-20">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-[#FF431B] text-xs font-semibold uppercase tracking-wider">
              Contáctanos
            </span>
            <h2 className="text-slate-900 text-xl md:text-2xl font-bold tracking-tight mt-3">
              Agenda tu cita o solicita informes
            </h2>
          </div>
          
          <form className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-slate-100 p-5 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  placeholder="Juan Pérez"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF431B] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Teléfono / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="55 1234 5678"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF431B] focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  placeholder="juan@email.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF431B] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Interés
                </label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#FF431B] focus:border-transparent">
                  <option>Análisis Clínicos</option>
                  <option>Paquetes de Salud</option>
                  <option>Consulta Médica</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6 md:mb-8">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Mensaje
              </label>
              <textarea
                placeholder="¿En qué podemos ayudarte?"
                rows={4}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF431B] focus:border-transparent resize-none"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-slate-900 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
            >
              <span>Enviar Mensaje</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
            
            <p className="text-center text-slate-400 text-xs mt-4">
              Al enviar, aceptas nuestra política de privacidad.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto px-5 md:px-20 py-10 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-4 px-2">
                <img
                  src={logo}
                  className="h-10 md:h-12 object-contain"
                  alt="IMEDILAB Logo"
                />
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Innovación y cuidado al servicio de tu salud. Laboratorio certificado con tecnología de punta.
              </p>
            </div>
            
            <div>
              <h3 className="text-slate-900 text-base font-semibold mb-4 md:mb-5">Servicios</h3>
              <nav className="flex flex-col gap-2 md:gap-3 text-sm text-slate-500">
                <a href="#" className="hover:text-slate-900 transition-colors">Análisis Clínicos</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Rayos X</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Ultrasonidos</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Salud Ocupacional</a>
              </nav>
            </div>
            
            <div>
              <h3 className="text-slate-900 text-base font-semibold mb-4 md:mb-5">Empresa</h3>
              <nav className="flex flex-col gap-2 md:gap-3 text-sm text-slate-500">
                <a href="#" className="hover:text-slate-900 transition-colors">Nosotros</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Sucursales</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Médicos</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Contacto</a>
              </nav>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-slate-900 text-base font-semibold mb-4 md:mb-5">Legal</h3>
              <nav className="flex flex-col gap-2 md:gap-3 text-sm text-slate-500">
                <span>Aviso de Funcionamiento: <span className="text-slate-700">#234567</span></span>
                <span>Resp. Sanitario: <span className="text-slate-700">Q.F.B. 12345</span></span>
                <a href="#" className="hover:text-slate-900 transition-colors">Aviso de Privacidad</a>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto px-5 md:px-20 py-4 md:py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-400 text-xs md:text-sm text-center md:text-left">
                © 2026 IMEDILAB. Todos los derechos reservados. | Diseñado y Desarrollado por <a href="#" className="text-slate-500 underline hover:text-slate-700">Búho Solutions.</a>
              </p>
              <div className="flex items-center gap-5">
                <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Packages;