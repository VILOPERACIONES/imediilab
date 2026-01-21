import React from 'react';

const HealthPackages = () => {
  const packages = [
    {
      category: "PREVENTIVOS",
      categoryColor: "bg-blue-50 text-blue-600",
      title: "Check Up Total Salud",
      price: "$1,403",
      currency: "MXN",
      items: ["BHC", "QS47", "EGO"],
      iconColor: "27f3af0d9f3470918ec1aa09ca99ecefc872d453"
    },
    {
      category: "Mujeres",
      categoryColor: "bg-[rgba(255,225,241,1)] text-[rgba(238,90,156,1)]",
      title: "Perfil Ginecológico",
      price: "$480",
      currency: "MXN",
      items: ["Estradiol", "Hormona Folículo Estimulante", "Prolactina", "Testosterona Total", "Progesterona y Hormona luteinizante"],
      iconColor: "e07320d27ada1dfca4eaf0a10be31dddc1ac64d0"
    },
    {
      category: "Adulto Mayor",
      categoryColor: "bg-purple-50 text-purple-600",
      title: "Paquete Adulto Mayor",
      price: "$1,954",
      currency: "MXN",
      items: ["RX Tórax", "ECG", "BHC", "EGO", "QS6"],
      iconColor: "e07320d27ada1dfca4eaf0a10be31dddc1ac64d0"
    }
  ];

  return (
    <section id="paquetes" className="bg-white w-full max-md:max-w-full">
      <div className="bg-white flex w-full flex-col items-stretch justify-center px-20 py-[100px] max-md:max-w-full max-md:px-5">
        <div className="flex flex-col items-center max-md:max-w-full">
          <h2 className="text-gray-900 text-3xl font-bold leading-[1.2] tracking-[-0.75px] text-center">
            Paquetes de Salud
          </h2>
          <p className="text-gray-600 text-base font-normal text-center mt-[23px]">
            Chequeos preventivos diseñados para tu bienestar.
          </p>
          
          <div className="self-stretch mt-[66px] max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              {packages.map((pkg, index) => (
                <article key={index} className="w-[33%] max-md:w-full max-md:ml-0">
                  <div className="bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border-gray-100 border flex w-full flex-col mx-auto px-[25px] py-[26px] rounded-2xl border-solid max-md:mt-7 max-md:px-5">
                    <div className={`${pkg.categoryColor} flex flex-col items-stretch text-[10px] font-bold whitespace-nowrap uppercase tracking-[0.5px] justify-center px-2.5 py-2 rounded-md`}>
                      <div>{pkg.category}</div>
                    </div>
                    
                    <h3 className="text-gray-900 text-lg font-bold leading-none mt-[19px]">
                      {pkg.title}
                    </h3>
                    
                    <div className="flex items-stretch gap-1.5 whitespace-nowrap leading-none mt-4">
                      <div className="text-gray-900 text-2xl font-bold grow">
                        {pkg.price}
                      </div>
                      <div className="text-gray-400 text-xs font-medium my-auto">
                        {pkg.currency}
                      </div>
                    </div>
                    
                    <div className="bg-gray-100 self-stretch flex shrink-0 h-px mt-[19px]" />
                    
                    <div className="text-gray-400 text-[10px] font-bold tracking-[1px] uppercase mt-[19px]">
                      Incluye:
                    </div>
                    
                    <div className="space-y-2.5 mt-[18px]">
                      {pkg.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-stretch gap-2 text-xs text-gray-600 font-medium leading-none">
                          <img
                            src={`https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/${pkg.iconColor}?placeholderIfAbsent=true`}
                            className="aspect-[1] object-contain w-3.5 shrink-0"
                            alt="Check icon"
                          />
                          <div className={item.length > 20 ? "basis-auto" : ""}>{item}</div>
                        </div>
                      ))}
                    </div>
                    
                    <button className="bg-white border border self-stretch flex w-full flex-col items-center text-xs text-gray-700 font-semibold text-center leading-none justify-center mt-[72px] px-[70px] py-3.5 rounded-xl border-solid max-md:mt-10 max-md:px-5 hover:bg-gray-50 transition-colors">
                      <div className="flex w-[94px] items-stretch gap-2">
                        <div className="grow">Solicitar Info</div>
                        <img
                          src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/d2ed002fbe86604ad5e6131f6592ed5103aad8eb?placeholderIfAbsent=true"
                          className="aspect-[1] object-contain w-3.5 shrink-0"
                          alt="Arrow icon"
                        />
                      </div>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
          
          <button className="bg-[rgba(255,67,27,1)] shadow-[0px_10px_15px_-3px_rgba(254,215,170,1)] flex w-[252px] max-w-full items-stretch gap-[13px] overflow-hidden text-lg text-white font-semibold text-center leading-loose mt-[82px] px-[33px] py-[19px] rounded-full max-md:mt-10 max-md:px-5 hover:bg-[rgba(255,67,27,0.9)] transition-colors">
            <div className="grow">Ver Más Paquetes</div>
            <img
              src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/e955443020140c2377cc23fd64f0cbc73cc294e3?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[18px] shrink-0"
              alt="Arrow icon"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HealthPackages;
