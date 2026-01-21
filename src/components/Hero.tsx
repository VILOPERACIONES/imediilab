import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/imedilab-logo.svg';

const Hero = () => {
  return (
    <div className="bg-white w-full">
      <div className="flex flex-col relative min-h-[850px] w-full">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-orange-50/30" />
        
        {/* Header */}
        <header className="relative bg-white/95 backdrop-blur-sm flex w-full items-center justify-center px-20 py-4 border-b border-slate-100 max-md:px-5">
          <nav className="flex w-full max-w-[1200px] items-center justify-between">
            <img
              src={logo}
              className="h-10 object-contain px-2"
              alt="IMEDILAB Logo"
            />
            <div className="flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#empresas" className="hover:text-slate-900 transition-colors">Empresas</a>
              <a href="#nosotros" className="hover:text-slate-900 transition-colors">Nosotros</a>
              <a href="#servicios" className="hover:text-slate-900 transition-colors">Servicios</a>
              <Link to="/paquetes" className="hover:text-slate-900 transition-colors">Paquetes</Link>
              <a href="#sucursales" className="hover:text-slate-900 transition-colors">Sucursales</a>
            </div>
            <button className="bg-slate-900 flex items-center gap-2 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Agendar Cita</span>
            </button>
          </nav>
        </header>
        
        {/* Hero Content */}
        <main className="relative flex-1 flex items-center px-20 max-md:px-5">
          <div className="w-full max-w-[1200px] mx-auto">
            <div className="flex items-center gap-16 max-md:flex-col">
              {/* Left Content */}
              <div className="flex-1 max-w-[520px]">
                <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200/50 text-[#FF431B] text-xs font-medium px-4 py-1.5 rounded-full mb-6">
                  <span className="w-2 h-2 bg-[#FF431B] rounded-full"></span>
                  Tecnología médica avanzada
                </div>
                
                <h1 className="text-[52px] font-semibold leading-[1.1] tracking-tight text-slate-900 mb-6">
                  Precisión que inspira<br /><span className="text-[#FF431B]">confianza.</span>
                </h1>
                
                <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-[440px]">
                  Resultados clínicos exactos, atención humana y la tecnología más moderna para el cuidado de tu salud y el de tu familia.
                </p>
                
                <div className="flex items-center gap-3 mb-10">
                  <button className="bg-[#FF431B] flex items-center gap-2 text-white text-sm font-medium px-6 py-3.5 rounded-lg hover:bg-[#e63a17] transition-colors">
                    <span>Agendar estudio</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <button className="bg-white border border-slate-200 text-slate-700 text-sm font-medium px-6 py-3.5 rounded-lg hover:bg-slate-50 transition-colors">
                    Ver servicios
                  </button>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="Patient" />
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="Patient" />
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="Patient" />
                  </div>
                  <span className="text-sm text-slate-400">+2,000 Pacientes atendidos este mes</span>
                </div>
              </div>
              
              {/* Right Content - Hero Image Card */}
              <div className="flex-1 relative max-md:mt-10">
                <div className="relative">
                  {/* Main Orange Rectangle */}
                  <div className="bg-[#FF431B] rounded-2xl w-[500px] h-[480px] relative max-md:w-full">
                    {/* Floating Card */}
                    <div className="absolute -bottom-6 left-4 right-4 bg-white rounded-xl shadow-xl border border-slate-100 p-4 flex items-center gap-3 z-10">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#FF431B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
