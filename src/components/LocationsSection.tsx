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
      address: "C. 28ᴰ 238, Itzimná 108, 97143 Mérida,\nYucatán",
      phone: "999-XXX-XXXX",
      hours: "Lun-Vie: 7:00 AM - 7:00 PM",
      isMain: true
    },
    {
      name: "Sucursal Las Américas",
      address: "C. 108 134-Y 49, Fraccionamiento Las\nAméricas 2, 97302 Mérida, Yucatán",
      phone: "999-XXX-XXXX",
      hours: "Lun-Vie: 7:00 AM - 7:00 PM",
      isMain: false
    }
  ];

  return (
    <section id="sucursales" className="bg-slate-50 border-slate-200 flex w-full flex-col items-stretch justify-center px-20 py-[100px] border-t max-md:max-w-full max-md:px-5">
      <div className="flex flex-col items-center max-md:max-w-full">
        <h2 className="text-slate-900 text-4xl font-bold leading-none tracking-[-0.9px] text-center">
          Nuestras Sucursales
        </h2>
        <p className="text-slate-500 text-lg font-normal leading-loose text-center mt-[30px] max-md:max-w-full">
          Ubica tu sucursal más cercana en Mérida, Yucatán.
        </p>
        
        <div className="self-stretch mt-[52px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {locations.map((location, index) => (
              <article key={index} className="w-[33%] max-md:w-full max-md:ml-0">
                <div className={`bg-white border-slate-200 border flex w-full flex-col text-sm text-slate-500 font-normal leading-none mx-auto ${location.isMain ? 'pt-px pb-[33px]' : 'px-[33px] py-9'} rounded-xl border-solid max-md:mt-6 max-md:px-5`}>
                  {location.isMain && (
                    <div className="bg-[rgba(255,67,27,1)] flex flex-col items-stretch text-[10px] text-white font-bold whitespace-nowrap uppercase justify-center px-3.5 py-2 rounded-[0px_0px_0px_8px]">
                      <div>Matriz</div>
                    </div>
                  )}
                  
                  <div className={`flex w-full flex-col text-sm text-slate-500 font-normal leading-none ${location.isMain ? 'mt-[15px] px-[33px]' : ''} max-md:px-5`}>
                    <h3 className="text-slate-900 text-xl font-bold leading-[1.4]">
                      {location.name}
                    </h3>
                    
                    <div className={`flex items-stretch gap-3 ${location.isMain ? 'leading-5' : ''} mt-[35px]`}>
                      <img
                        src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/81b0eda0e525233252cbf1c05fdf72ff2b22e264?placeholderIfAbsent=true"
                        className="aspect-[1] object-contain w-4 shrink-0"
                        alt="Location icon"
                      />
                      <div className="basis-auto grow shrink">
                        {location.address.split('\n').map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < location.address.split('\n').length - 1 && <br />}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className={`flex items-stretch gap-3 whitespace-nowrap ${location.isMain ? 'mt-[25px]' : 'mt-5'}`}>
                      <img
                        src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/99e4a92713b91795eeb3ba4a7fca8674e7528ee6?placeholderIfAbsent=true"
                        className="aspect-[1] object-contain w-4 shrink-0"
                        alt="Phone icon"
                      />
                      <div>{location.phone}</div>
                    </div>
                    
                    <div className="flex items-stretch gap-3 mt-5">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/ff3391b33be399e186f6387b053561c8a284668e?placeholderIfAbsent=true"
                        className="aspect-[1] object-contain w-4 shrink-0"
                        alt="Clock icon"
                      />
                      <div className="basis-auto">{location.hours}</div>
                    </div>
                    
                    <button className={`border self-stretch flex flex-col items-center text-[rgba(230,169,60,1)] font-semibold text-center justify-center ${location.isMain ? 'mt-8' : 'mt-[52px] max-md:mt-10'} px-[70px] py-[17px] rounded-lg border-[rgba(230,169,60,1)] border-solid max-md:px-5 hover:bg-[rgba(230,169,60,0.1)] transition-colors`}>
                      <div>Ver en Google Maps</div>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
