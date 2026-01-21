import React from 'react';

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
              src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/64f76a02b1e881e887195248f8d2113db3a5cae9?placeholderIfAbsent=true"
              className="h-10 object-contain"
              alt="IMEDILAB Logo"
            />
            <div className="flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#empresas" className="hover:text-slate-900 transition-colors">Empresas</a>
              <a href="#nosotros" className="hover:text-slate-900 transition-colors">Nosotros</a>
              <a href="#servicios" className="hover:text-slate-900 transition-colors">Servicios</a>
              <a href="#paquetes" className="hover:text-slate-900 transition-colors">Paquetes</a>
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
                <div className="inline-flex items-center bg-orange-50 border border-orange-200/50 text-orange-600 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
                  Tecnología médica avanzada
                </div>
                
                <h1 className="text-[52px] font-semibold leading-[1.1] tracking-tight text-slate-900 mb-6">
                  Precisión que inspira<br />confianza.
                </h1>
                
                <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-[440px]">
                  Resultados clínicos exactos, atención humana y la tecnología más moderna para el cuidado de tu salud y el de tu familia.
                </p>
                
                <div className="flex items-center gap-3 mb-10">
                  <button className="bg-[#FF431B] flex items-center gap-2 text-white text-sm font-medium px-6 py-3.5 rounded-lg hover:bg-[#e63a17] transition-colors">
                    <span>Agendar estudio</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <button className="bg-white border border-slate-200 text-slate-700 text-sm font-medium px-6 py-3.5 rounded-lg hover:bg-slate-50 transition-colors">
                    Ver servicios
                  </button>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
                  </div>
                  <span className="text-sm text-slate-400">+2,000 Pacientes atendidos este mes</span>
                </div>
              </div>
              
              {/* Right Content - Hero Image Card */}
              <div className="flex-1 relative max-md:mt-10">
                <div className="relative">
                  {/* Main Image Container */}
                  <div className="bg-slate-100 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 w-[480px] h-[520px] relative">
                    {/* Orange accent bar at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#FF431B]"></div>
                    
                    {/* Placeholder for lab tubes image */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center">
                      <div className="text-slate-300 text-center">
                        <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Floating Card */}
                    <div className="absolute bottom-8 left-4 right-4 bg-white rounded-xl shadow-xl border border-slate-100 p-4 flex items-center gap-3 z-10">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-slate-900 text-sm font-semibold">Resultados en línea</div>
                        <div className="text-slate-500 text-xs">Consulta segura 24/7</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* WhatsApp Button */}
                  <a 
                    href="#" 
                    className="absolute -right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
                  >
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
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
