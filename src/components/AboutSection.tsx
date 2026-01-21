import React from 'react';

const AboutSection = () => {
  return (
    <section id="nosotros" className="bg-white flex w-full flex-col overflow-hidden items-stretch justify-center px-[70px] py-24 max-md:max-w-full max-md:px-5">
      <div className="max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/8251a34f7dbbde1b2e459318b93d5c9c6162d8c7?placeholderIfAbsent=true"
              className="aspect-[1.5] object-contain w-full grow rounded-2xl max-md:max-w-full max-md:mt-10"
              alt="IMEDILAB laboratory facilities"
            />
          </div>
          
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col items-stretch mt-[5px] max-md:max-w-full max-md:mt-10">
              <div className="text-[rgba(255,67,27,1)] text-sm font-semibold leading-none tracking-[0.35px] uppercase">
                Sobre IMEDILAB
              </div>
              
              <h2 className="text-slate-900 text-4xl font-semibold leading-10 tracking-[-0.9px] mt-[21px] max-md:max-w-full">
                Más que un laboratorio, somos
                <br />
                aliados de tu salud.
              </h2>
              
              <p className="text-slate-500 text-base font-normal leading-6 mr-11 mt-9 max-md:max-w-full max-md:mr-2.5">
                En IMEDILAB, fusionamos la calidez humana con la precisión científica.
                <br />
                Entendemos que detrás de cada muestra hay una persona esperando
                <br />
                respuestas confiables para tomar decisiones importantes.
              </p>
              
              <p className="text-slate-500 text-base font-normal leading-6 mt-8 max-md:max-w-full max-md:mr-1.5">
                Nuestro equipo de especialistas trabaja con equipos de última generación,
                <br />
                garantizando resultados exactos. La modernización no es solo una meta, es
                <br />
                nuestro estándar diario.
              </p>
              
              <div className="flex items-stretch gap-4 leading-none flex-wrap mt-[37px] max-md:max-w-full">
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit pl-[18px] pr-14 py-1.5 max-md:pr-5 border-l-2 border-[rgba(255,67,27,1)]">
                  <div className="text-slate-900 text-2xl font-bold">15+</div>
                  <div className="text-slate-500 text-xs font-normal tracking-[0.3px] uppercase mt-[7px]">
                    Años de experiencia
                  </div>
                </div>
                
                <div className="flex flex-col whitespace-nowrap flex-1 grow shrink-0 basis-0 w-fit pl-[18px] pr-14 py-[5px] max-md:pr-5 border-l-2 border-[rgba(255,67,27,1)]">
                  <div className="text-slate-900 text-2xl font-bold">100%</div>
                  <div className="text-slate-500 text-xs font-normal tracking-[0.3px] uppercase mt-2.5">
                    Certificados
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
