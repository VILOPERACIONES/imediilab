import React from 'react';

const HealthPackages = () => {
  const packages = [
    {
      category: "PREVENTIVOS",
      categoryColor: "bg-blue-50 text-blue-600",
      title: "Check Up Total Salud",
      price: "$1,403",
      items: ["BHC", "QS47", "EGO"],
    },
    {
      category: "MUJERES",
      categoryColor: "bg-pink-50 text-pink-500",
      title: "Perfil Ginecológico",
      price: "$480",
      items: ["Estradiol", "Hormona Folículo Estimulante", "Prolactina", "Testosterona Total", "Progesterona y Hormona luteinizante"],
    },
    {
      category: "ADULTO MAYOR",
      categoryColor: "bg-purple-50 text-purple-600",
      title: "Paquete Adulto Mayor",
      price: "$1,954",
      items: ["RX Tórax", "ECG", "BHC", "EGO", "QS6"],
    }
  ];

  return (
    <section id="paquetes" className="bg-white py-24 px-20 max-md:px-5">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-slate-900 text-2xl font-bold tracking-tight mb-3">
            Paquetes de Salud
          </h2>
          <p className="text-slate-500 text-base">
            Chequeos preventivos diseñados para tu bienestar.
          </p>
        </div>
        
        {/* Packages Grid */}
        <div className="grid grid-cols-3 gap-5 mb-14 max-md:grid-cols-1">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
              <span className={`inline-block ${pkg.categoryColor} text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-md mb-4`}>
                {pkg.category}
              </span>
              
              <h3 className="text-slate-900 text-lg font-bold mb-3">
                {pkg.title}
              </h3>
              
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-slate-900 text-2xl font-bold">{pkg.price}</span>
                <span className="text-slate-400 text-xs">MXN</span>
              </div>
              
              <div className="border-t border-slate-100 pt-4 mb-6">
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-3">
                  Incluye:
                </p>
                <div className="space-y-2">
                  {pkg.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2 text-xs text-slate-600">
                      <svg className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 text-xs font-semibold py-3 rounded-xl hover:bg-slate-50 transition-colors">
                <span>Solicitar Info</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-3 bg-[#FF431B] text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg shadow-orange-200 hover:bg-[#e63a17] transition-colors">
            <span>Ver Más Paquetes</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HealthPackages;
