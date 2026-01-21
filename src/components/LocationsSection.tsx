import React from 'react';

const LocationsSection = () => {
  const locations = [
    {
      name: "Sucursal Itzimná",
      address: "Calle 58 307 x 20c y 24, Mérida, Yucatán",
      phone: "999-XXX-XXXX",
      hours: "Lun-Vie: 7:00 AM - 7:00 PM",
      isMain: false
    },
    {
      name: "Sucursal Matriz",
      address: "C. 28ᴰ 238, Itzimná 108, 97143 Mérida, Yucatán",
      phone: "999-XXX-XXXX",
      hours: "Lun-Vie: 7:00 AM - 7:00 PM",
      isMain: true
    },
    {
      name: "Sucursal Las Américas",
      address: "C. 108 134-Y 49, Fraccionamiento Las Américas 2, 97302 Mérida, Yucatán",
      phone: "999-XXX-XXXX",
      hours: "Lun-Vie: 7:00 AM - 7:00 PM",
      isMain: false
    }
  ];

  return (
    <section id="sucursales" className="bg-slate-50 border-t border-slate-200 py-24 px-20 max-md:px-5">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-slate-900 text-3xl font-bold tracking-tight mb-4">
            Nuestras Sucursales
          </h2>
          <p className="text-slate-500 text-lg">
            Ubica tu sucursal más cercana en Mérida, Yucatán.
          </p>
        </div>
        
        {/* Locations Grid */}
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              {location.isMain && (
                <div className="flex justify-end">
                  <span className="bg-[#FF431B] text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-bl-lg">
                    Matriz
                  </span>
                </div>
              )}
              
              <div className={`p-7 ${location.isMain ? 'pt-3' : ''}`}>
                <h3 className="text-slate-900 text-xl font-bold mb-6">
                  {location.name}
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-slate-500 text-sm leading-relaxed">{location.address}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-slate-500 text-sm">{location.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-slate-500 text-sm">{location.hours}</span>
                  </div>
                </div>
                
                <button className="w-full border border-amber-400 text-amber-500 font-semibold text-sm py-3.5 rounded-lg hover:bg-amber-50 transition-colors">
                  Ver en Google Maps
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
