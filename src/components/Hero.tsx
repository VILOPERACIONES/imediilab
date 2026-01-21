import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white w-full max-md:max-w-full">
      <div className="flex flex-col relative min-h-[912px] w-full items-stretch pb-9 max-md:max-w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/62142b1e8124155ce305c4ef84864d06ed13be81?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Medical laboratory background"
        />
        <header className="relative bg-[rgba(255,255,255,0.9)] flex w-full flex-col items-stretch text-sm font-medium leading-none justify-center px-[70px] py-3 max-md:max-w-full max-md:px-5">
          <nav className="flex w-full max-w-[1232px] items-center gap-5 flex-wrap justify-between max-md:max-w-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/64f76a02b1e881e887195248f8d2113db3a5cae9?placeholderIfAbsent=true"
              className="aspect-[3.18] object-contain w-[153px] self-stretch shrink-0 max-w-full"
              alt="IMEDILAB Logo"
            />
            <div className="self-stretch flex items-center gap-[31px] text-slate-600 whitespace-nowrap my-auto max-md:max-w-full">
              <a href="#empresas" className="rounded self-stretch flex flex-col items-stretch justify-center w-[66px] my-auto px-px py-1 hover:text-slate-900 transition-colors">
                <div>Empresas</div>
              </a>
              <a href="#nosotros" className="rounded self-stretch flex flex-col items-stretch justify-center w-[61px] my-auto px-px py-[5px] hover:text-slate-900 transition-colors">
                <div>Nosotros</div>
              </a>
              <a href="#servicios" className="rounded self-stretch flex flex-col items-stretch justify-center w-[62px] my-auto px-px py-[5px] hover:text-slate-900 transition-colors">
                <div>Servicios</div>
              </a>
              <a href="#paquetes" className="rounded self-stretch flex flex-col items-stretch justify-center w-[63px] my-auto px-px py-1 hover:text-slate-900 transition-colors">
                <div>Paquetes</div>
              </a>
              <a href="#sucursales" className="rounded self-stretch flex flex-col items-stretch justify-center w-[74px] my-auto px-px py-[5px] hover:text-slate-900 transition-colors">
                <div>Sucursales</div>
              </a>
            </div>
            <button className="bg-slate-900 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border self-stretch flex items-stretch gap-2 text-white text-center my-auto px-[21px] py-3 rounded-full border-[rgba(0,0,0,0)] border-solid max-md:px-5 hover:bg-slate-800 transition-colors">
              <img
                src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/95f91532ede65fa87f0daf022db8c583e348a49b?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-3.5 shrink-0"
                alt="Calendar icon"
              />
              <div>Agendar Cita</div>
            </button>
          </nav>
        </header>
        
        <main className="relative w-full max-w-[1304px] mr-6 mt-[121px] max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <section className="w-[45%] max-md:w-full max-md:ml-0">
              <div className="relative flex w-full flex-col self-stretch font-medium my-auto max-md:max-w-full max-md:mt-10">
                <div className="bg-[rgba(255,67,27,0.05)] border flex flex-col items-stretch text-xs text-[rgba(218,103,25,1)] leading-none justify-center px-[27px] py-[7px] rounded-full border-[rgba(255,67,27,0.2)] border-solid max-md:pl-5">
                  <div>Tecnología médica avanzada</div>
                </div>
                <h1 className="text-slate-900 text-6xl font-semibold leading-[60px] tracking-[-1.5px] self-stretch mt-[29px] max-md:max-w-full max-md:text-[40px] max-md:leading-[44px]">
                  Precisión que inspira
                  <br />
                  confianza.
                </h1>
                <p className="text-slate-500 text-lg font-normal leading-[29px] mt-[38px] max-md:max-w-full">
                  Resultados clínicos exactos, atención humana y la
                  <br />
                  tecnología más moderna para el cuidado de tu salud y el de
                  <br />
                  tu familia.
                </p>
                <div className="flex items-stretch gap-4 text-sm text-center leading-none mt-10">
                  <button className="bg-[rgba(255,67,27,1)] flex items-stretch gap-2 text-white px-6 py-4 rounded-lg max-md:px-5 hover:bg-[rgba(255,67,27,0.9)] transition-colors">
                    <div className="grow">Agendar estudio</div>
                    <img
                      src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/1760855b4f1ee769651cdbc814bb4821f7c986dd?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-3.5 shrink-0"
                      alt="Arrow icon"
                    />
                  </button>
                  <button className="bg-white border-slate-200 border flex flex-col items-stretch text-slate-700 justify-center px-[26px] py-[18px] rounded-lg border-solid max-md:px-5 hover:bg-slate-50 transition-colors">
                    <div>Ver servicios</div>
                  </button>
                </div>
                <div className="flex items-stretch gap-4 text-sm text-slate-400 font-normal leading-none mt-10">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/cb6e6e390112dbae3afff1d2ea5cedc8fae792e9?placeholderIfAbsent=true"
                    className="aspect-[2.5] object-contain w-20 shrink-0 rounded-full"
                    alt="Patient avatars"
                  />
                  <div className="basis-auto my-auto">
                    +2,000 Pacientes atendidos este mes
                  </div>
                </div>
              </div>
            </section>
            
            <section className="w-[55%] ml-5 max-md:w-full max-md:ml-0">
              <div className="relative flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="bg-slate-100 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] border-slate-200 border flex w-[592px] max-w-full flex-col overflow-hidden items-stretch justify-center p-px rounded-2xl border-solid">
                  <div className="bg-[rgba(255,67,27,1)] flex w-full flex-col pt-[533px] max-md:max-w-full max-md:pr-5 max-md:pt-[100px]">
                    <div className="bg-white shadow-[0px_20px_50px_rgba(0,0,0,0.1)] border-slate-100 border z-10 flex mb-[-25px] gap-3 px-[18px] py-[21px] rounded-xl border-solid max-md:mb-2.5">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/a5d3a64b28df04f60d7bcce11e61f2dd5fb6a9c5?placeholderIfAbsent=true"
                        className="aspect-[1] object-contain w-10 shrink-0 rounded-full"
                        alt="Results icon"
                      />
                      <div className="mt-1.5">
                        <div className="text-slate-900 text-sm font-semibold leading-none">
                          Resultados en línea
                        </div>
                        <div className="text-slate-500 text-xs font-normal leading-none mt-2 max-md:mr-2.5">
                          Consulta segura 24/7
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/3e3ef010cef55ea379290deef140b8a512afce40?placeholderIfAbsent=true"
                  className="aspect-[1.01] object-contain w-[75px] shadow-[0px_4px_14px_rgba(255,68,26,1)] mt-[18px] rounded-[43px]"
                  alt="Medical equipment"
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
