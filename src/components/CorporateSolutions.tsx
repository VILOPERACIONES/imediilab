import React from 'react';

const CorporateSolutions = () => {
  return (
    <section id="empresas" className="bg-[rgba(248,250,252,0.5)] flex flex-col items-stretch justify-center px-20 py-[86px] border-[rgba(226,232,240,0.6)] border-t border-b max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <div className="flex flex-col items-stretch max-md:max-w-full">
        <h2 className="text-slate-900 text-3xl font-semibold leading-[1.2] tracking-[-0.75px]">
          Soluciones Empresariales
        </h2>
        <div className="flex w-full items-stretch gap-5 flex-wrap justify-between mt-[23px] max-md:max-w-full">
          <p className="text-slate-500 text-base font-normal leading-6 max-md:max-w-full">
            Optimizamos la salud ocupacional de su empresa con convenios a medida y<br />
            atención prioritaria.
          </p>
          <button className="flex items-stretch gap-1.5 text-sm text-[rgba(218,103,25,1)] font-medium leading-none mt-[25px] hover:text-[rgba(218,103,25,0.8)] transition-colors">
            <div className="grow">Solicitar propuesta</div>
            <img
              src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/338b4c8edb5ef9b4fb730948ca94b99dabbf01e0?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-3.5 shrink-0"
              alt="Arrow icon"
            />
          </button>
        </div>
        
        <div className="mt-[50px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <article className="w-[33%] max-md:w-full max-md:ml-0">
              <div className="bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border-slate-200 border flex grow flex-col w-full pt-[33px] pb-[51px] px-[33px] rounded-xl border-solid max-md:mt-6 max-md:px-5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/4cceb79281b26b99ed4fb74bee7924fb974807d9?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-10 rounded-lg"
                  alt="Corporate agreements icon"
                />
                <h3 className="text-slate-900 text-lg font-semibold leading-loose mt-[31px]">
                  Convenios Corporativos
                </h3>
                <p className="text-slate-500 text-sm font-normal leading-5 self-stretch mt-[15px]">
                  Tarifas preferenciales y facturación centralizada
                  <br />
                  para el control total de sus recursos.
                </p>
              </div>
            </article>
            
            <article className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border-slate-200 border flex grow flex-col w-full pt-[33px] pb-[51px] px-[33px] rounded-xl border-solid max-md:mt-6 max-md:px-5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/ef491fe985f092db2520d4d5ab859e834962033c?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-10 rounded-lg"
                  alt="Executive checkups icon"
                />
                <h3 className="text-slate-900 text-lg font-semibold leading-loose mt-[31px]">
                  Chequeos Ejecutivos
                </h3>
                <p className="text-slate-500 text-sm font-normal leading-5 self-stretch mt-[15px]">
                  Perfiles de admisión y check-ups anuales
                  <br />
                  diseñados para cada nivel de su organización.
                </p>
              </div>
            </article>
            
            <article className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border-slate-200 border flex grow flex-col w-full pt-[33px] pb-[51px] px-[33px] rounded-xl border-solid max-md:mt-6 max-md:px-5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/4bb464d81cd2dae6e2c1fd24033bcc7eeb8fc537?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-10 rounded-lg"
                  alt="Corporate portal icon"
                />
                <h3 className="text-slate-900 text-lg font-semibold leading-loose mt-8">
                  Portal de Empresas
                </h3>
                <p className="text-slate-500 text-sm font-normal leading-5 self-stretch mt-4">
                  Acceso digital inmediato a los resultados de sus
                  <br />
                  colaboradores con máxima seguridad.
                </p>
              </div>
            </article>
          </div>
        </div>
        
        <div className="flex flex-col items-stretch mt-[55px] pt-[43px] border-[rgba(67,67,67,0.1)] border-t max-md:max-w-full max-md:mt-10">
          <div className="text-gray-500 text-sm font-medium leading-none tracking-[1.4px] text-center uppercase self-center">
            Confían en nosotros
          </div>
          <div className="bg-white flex w-full flex-col items-stretch text-xl text-[rgba(122,122,122,1)] font-bold leading-[1.4] justify-center mt-[29px] px-[70px] py-1 max-md:max-w-full max-md:px-5">
            <div className="flex w-full max-w-[1011px] items-stretch gap-[40px_46px] max-md:max-w-full">
              <div className="grow my-auto">CORPORATIVO A</div>
              <div className="leading-none grow shrink w-[124px]">Grupo Industrial</div>
              <div className="leading-none grow shrink w-[113px]">TECH_SYSTEMS</div>
              <div className="grow shrink w-[129px]">Logística Global</div>
              <div className="grow shrink w-[154px]">BANCO NACIONAL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateSolutions;
