import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/imedilab-logo.svg';
import { Menu, X } from 'lucide-react';

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white w-full">
      <div className="flex flex-col relative min-h-[850px] md:min-h-[850px] w-full">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-orange-50/30" />
        
        {/* Header */}
        <header className="relative bg-white/95 backdrop-blur-sm flex w-full items-center justify-center px-5 md:px-20 py-4 border-b border-slate-100">
          <nav className="flex w-full max-w-[1200px] items-center justify-between">
            <img
              src={logo}
              className="h-8 md:h-10 object-contain px-2"
              alt="IMEDILAB Logo"
            />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#empresas" className="hover:text-slate-900 transition-colors">Empresas</a>
              <a href="#nosotros" className="hover:text-slate-900 transition-colors">Nosotros</a>
              <a href="#servicios" className="hover:text-slate-900 transition-colors">Servicios</a>
              <Link to="/paquetes" className="hover:text-slate-900 transition-colors">Paquetes</Link>
              <a href="#sucursales" className="hover:text-slate-900 transition-colors">Sucursales</a>
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
          <div className="md:hidden absolute top-[65px] left-0 right-0 bg-white border-b border-slate-100 z-50 px-5 py-6 shadow-lg">
            <div className="flex flex-col gap-4 text-base font-medium text-slate-600">
              <a href="#empresas" className="py-2 hover:text-slate-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Empresas</a>
              <a href="#nosotros" className="py-2 hover:text-slate-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Nosotros</a>
              <a href="#servicios" className="py-2 hover:text-slate-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
              <Link to="/paquetes" className="py-2 hover:text-slate-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Paquetes</Link>
              <a href="#sucursales" className="py-2 hover:text-slate-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Sucursales</a>
              <button className="mt-4 bg-slate-900 flex items-center justify-center gap-2 text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-slate-800 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Agendar Cita</span>
              </button>
            </div>
          </div>
        )}
        
        {/* Hero Content */}
        <main className="relative flex-1 flex items-center justify-center px-5 md:px-16 lg:px-24 py-10 md:py-0">
          <div className="w-full max-w-[1300px] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 lg:gap-20">
              {/* Left Content */}
              <div className="flex-1 max-w-[540px] text-center md:text-left order-1 md:order-1">
                <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200/50 text-[#FF431B] text-xs font-medium px-4 py-1.5 rounded-full mb-4 md:mb-6">
                  <span className="w-2 h-2 bg-[#FF431B] rounded-full"></span>
                  Tecnología médica avanzada
                </div>
                
                <h1 className="text-3xl md:text-[48px] lg:text-[52px] font-semibold leading-[1.15] md:leading-[1.12] tracking-tight text-slate-900 mb-4 md:mb-6">
                  Precisión que inspira <span className="text-[#FF431B]">confianza.</span>
                </h1>
                
                <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-[440px] mx-auto md:mx-0">
                  Resultados clínicos exactos, atención humana y la tecnología más moderna para el cuidado de tu salud y el de tu familia.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mb-8 md:mb-10">
                  <button className="w-full sm:w-auto bg-[#FF431B] flex items-center justify-center gap-2 text-white text-sm font-medium px-6 py-3.5 rounded-lg hover:bg-[#e63a17] transition-colors">
                    <span>Agendar estudio</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 text-sm font-medium px-6 py-3.5 rounded-lg hover:bg-slate-50 transition-colors">
                    Ver servicios
                  </button>
                </div>
                
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="flex -space-x-2">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="Patient" />
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="Patient" />
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="Patient" />
                  </div>
                  <span className="text-sm text-slate-400">+2,000 Pacientes atendidos este mes</span>
                </div>
              </div>
              
              {/* Right Content - Hero Image Card */}
              <div className="flex-1 flex justify-center md:justify-end order-2 md:order-2 w-full md:w-auto">
                <div className="relative w-full max-w-[320px] md:max-w-none">
                  {/* Main Orange Rectangle */}
                  <div className="bg-[#FF431B] rounded-2xl w-full md:w-[420px] lg:w-[480px] h-[280px] md:h-[440px] lg:h-[480px] relative">
                    {/* Floating Card */}
                    <div className="absolute -bottom-6 left-4 right-4 bg-white rounded-xl shadow-xl border border-slate-100 p-3 md:p-4 flex items-center gap-3 z-10">
                      <div className="w-8 md:w-10 h-8 md:h-10 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                        <svg className="w-4 md:w-5 h-4 md:h-5 text-[#FF431B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-slate-900 text-sm font-semibold">Resultados en línea</div>
                        <div className="text-slate-500 text-xs">Consulta segura 24/7</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;