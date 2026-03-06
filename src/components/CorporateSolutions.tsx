import React from "react";

const logos = [
  "https://res.cloudinary.com/diefluaw7/image/upload/v1771877351/Group_11_kneo1m.svg",
  "https://res.cloudinary.com/diefluaw7/image/upload/v1771877352/Group_10_xko2fc.svg",
  "https://res.cloudinary.com/diefluaw7/image/upload/v1771877350/Group_12_sl0lxu.svg",
  "https://res.cloudinary.com/diefluaw7/image/upload/v1771877350/Group_8_wap3db.svg",
  "https://res.cloudinary.com/diefluaw7/image/upload/v1771877349/Group_13_e7aozd.svg",
  "https://res.cloudinary.com/diefluaw7/image/upload/v1771877348/Group_7_sqfwei.svg",
  "https://res.cloudinary.com/diefluaw7/image/upload/v1771877349/Group_14_1_qlc3kl.svg",
  "https://res.cloudinary.com/diefluaw7/image/upload/v1771877352/Group_6_qc4qsi.svg",
  "https://res.cloudinary.com/diefluaw7/image/upload/v1771877349/Group_15_y8h0d6.svg",
  "https://res.cloudinary.com/diefluaw7/image/upload/v1771877349/Group_5_nljnrq.svg",
  "https://res.cloudinary.com/diefluaw7/image/upload/v1772806697/Group_16_feaavk.svg",
];

const CorporateSolutions = () => {
  return (
    <section id="empresas" className="bg-white border-y border-slate-200/60 py-20 px-20 max-md:px-5">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-12 max-md:flex-col max-md:gap-4">
          <div>
            <h2 className="text-slate-900 text-2xl font-semibold tracking-tight mb-3">Soluciones Empresariales</h2>
            <p className="text-slate-500 text-base leading-relaxed max-w-[480px]">
              Optimizamos la salud ocupacional de su empresa con convenios a medida y atención prioritaria.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-5 mb-14 max-md:grid-cols-1">
          <div className="bg-white rounded-xl border border-slate-200 p-7 shadow-sm">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-slate-900 text-lg font-semibold mb-3">Convenios Corporativos</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Tarifas preferenciales y facturación centralizada para el control total de sus recursos.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-7 shadow-sm">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </div>
            <h3 className="text-slate-900 text-lg font-semibold mb-3">Chequeos Ejecutivos</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Perfiles de admisión y check-ups anuales diseñados para cada nivel de su organización.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-7 shadow-sm">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-slate-900 text-lg font-semibold mb-3">Portal de Empresas</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Acceso digital inmediato a los resultados de sus colaboradores con máxima seguridad.
            </p>
          </div>
        </div>

        {/* Trusted Companies */}
        <div className="border-t border-slate-200/60 pt-10 overflow-hidden">
          <p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">
            Confían en nosotros
          </p>
          <div className="flex items-center justify-center gap-12 w-max animate-scroll hover:[animation-play-state:paused]">
            {/* Primera copia */}
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt="logo" className="h-16 w-auto object-contain" />
            ))}

            {/* Segunda copia (para efecto infinito) */}
            {logos.map((logo, index) => (
              <img key={`duplicate-${index}`} src={logo} alt="logo" className="h-16 w-auto object-contain" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateSolutions;
