import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/b113cff99eb9e2d813d8f976217b319ddf524228?placeholderIfAbsent=true",
      title: "Análisis Clínicos",
      description: "Hematología, química sanguínea,\nhormonas y marcadores tumorales."
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/984ef8bd8592b0157d11f0fbc73d3936c78ac386?placeholderIfAbsent=true",
      title: "Rayos X e Imagen",
      description: "Radiografía digital de alta resolución\ny ultrasonidos especializados."
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/acce8a1b2d84ad89262abd89586b98b3dcbac5d8?placeholderIfAbsent=true",
      title: "Cardiología",
      description: "Electrocardiogramas en reposo\ninterpretados por especialistas."
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/c34eab2d8051cf1c1da7f5000ab82d252f59a191?placeholderIfAbsent=true",
      title: "Consulta Médica",
      description: "Medicina general y preventiva para\ninterpretación de resultados."
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/1834a2d422d9aaeec9f83f1cd0f04632e125e0b4?placeholderIfAbsent=true",
      title: "Audiometrías",
      description: "Estudios de capacidad auditiva en\ncabina sonoamortiguada."
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/ba71f5e2de1389faa1dac87c29e163821bb06cc4?placeholderIfAbsent=true",
      title: "Espirometrías",
      description: "Evaluación de la función pulmonar\ncon equipos de última generación."
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/7336b09243cd519d163680a08445f6833ed498eb?placeholderIfAbsent=true",
      title: "Odontología",
      description: "Diagnóstico dental básico y\nradiografías periapicales."
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/47172f57fd3b887c6945ef9a4451d3e2af7bf9a7?placeholderIfAbsent=true",
      title: "A Domicilio",
      description: "Toma de muestras gratuita hasta tu\nhogar u oficina."
    }
  ];

  return (
    <section id="servicios" className="bg-[rgba(248,250,252,0.5)] flex flex-col items-stretch justify-center px-20 py-[57px] max-md:max-w-full max-md:px-5">
      <div className="flex flex-col items-center max-md:max-w-full">
        <div className="flex w-[396px] max-w-full gap-5 text-xs font-medium text-center leading-none justify-between ml-[13px]">
          <div className="bg-[rgba(230,169,60,0.1)] border flex items-stretch gap-[7px] text-[rgba(218,103,25,1)] px-[13px] py-[7px] rounded-full border-[rgba(230,169,60,0.2)] border-solid">
            <img
              src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/65d03f069761fcce1ab01705dd34ef94893cd7b7?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-3 shrink-0"
              alt="Calendar icon"
            />
            <div className="basis-auto">Abrimos los Domingos</div>
          </div>
          <div className="bg-blue-50 border flex items-stretch gap-2 text-blue-600 px-[13px] py-[7px] rounded-full border-[rgba(66,133,244,0.7)] border-solid">
            <img
              src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/d56307982419947aadb0aeb92ddd1c3e579d09e4?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-3 shrink-0"
              alt="Home service icon"
            />
            <div className="basis-auto">Servicio a Domicilio GRATIS</div>
          </div>
        </div>
        
        <h2 className="text-slate-900 text-3xl font-semibold leading-[1.2] tracking-[-0.75px] text-center mt-[26px]">
          Nuestros Servicios
        </h2>
        
        <p className="text-slate-500 text-base font-normal text-center mt-7 max-md:max-w-full">
          Un ecosistema integral de diagnóstico clínico y gabinete en un solo lugar.
        </p>
        
        <div className="self-stretch mt-[67px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {services.slice(0, 4).map((service, index) => (
              <article key={index} className="w-3/12 max-md:w-full max-md:ml-0">
                <div className="bg-white border flex grow flex-col items-stretch w-full py-[26px] rounded-xl border-[rgba(241,204,91,1)] border-solid max-md:mt-4">
                  <img
                    src={service.icon}
                    className="aspect-[1] object-contain w-4 mr-[25px] max-md:mr-2.5"
                    alt={`${service.title} icon`}
                  />
                  <div className="flex flex-col items-stretch mt-[7px] px-[25px] max-md:px-5">
                    <h3 className="text-slate-900 text-lg font-semibold leading-loose">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-normal leading-5 mt-[19px]">
                      {service.description.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < service.description.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        
        <div className="self-stretch mt-4 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {services.slice(4, 8).map((service, index) => (
              <article key={index + 4} className="w-3/12 max-md:w-full max-md:ml-0">
                <div className="bg-white border flex grow flex-col items-stretch w-full py-[26px] rounded-xl border-[rgba(241,204,91,1)] border-solid max-md:mt-4">
                  <img
                    src={service.icon}
                    className="aspect-[1] object-contain w-4 mr-[25px] max-md:mr-2.5"
                    alt={`${service.title} icon`}
                  />
                  <div className="flex flex-col items-stretch mt-[7px] px-[25px] max-md:px-5">
                    <h3 className="text-slate-900 text-lg font-semibold leading-loose">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-normal leading-5 mt-[15px]">
                      {service.description.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < service.description.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        
        <button className="flex w-[252px] max-w-full items-stretch gap-1 text-sm text-[rgba(255,67,27,1)] font-medium text-center leading-none mt-[73px] max-md:mt-10 hover:text-[rgba(255,67,27,0.8)] transition-colors">
          <div className="grow">Ver catálogo completo de estudios</div>
          <img
            src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/d01772fbe05e7608cd4e62e911c5fde642d929bf?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 shrink-0"
            alt="Arrow icon"
          />
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
