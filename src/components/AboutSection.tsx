import React from 'react';

const AboutSection = () => {
  return (
    <section id="nosotros" className="bg-white py-24 px-20 max-md:px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 gap-16 items-center max-md:grid-cols-1">
          {/* Left - Image */}
          <div className="relative">
            <div className="bg-slate-100 rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/8251a34f7dbbde1b2e459318b93d5c9c6162d8c7?placeholderIfAbsent=true"
                className="w-full h-full object-cover"
                alt="IMEDILAB laboratory facilities"
              />
            </div>
          </div>
          
          {/* Right - Content */}
          <div>
            <span className="text-[#FF431B] text-xs font-semibold uppercase tracking-wider">
              Sobre IMEDILAB
            </span>
            
            <h2 className="text-slate-900 text-3xl font-semibold leading-tight tracking-tight mt-4 mb-6">
              Más que un laboratorio, somos<br />aliados de tu salud.
            </h2>
            
            <p className="text-slate-500 text-base leading-relaxed mb-6">
              En IMEDILAB, fusionamos la calidez humana con la precisión científica. Entendemos que detrás de cada muestra hay una persona esperando respuestas confiables para tomar decisiones importantes.
            </p>
            
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              Nuestro equipo de especialistas trabaja con equipos de última generación, garantizando resultados exactos. La modernización no es solo una meta, es nuestro estándar diario.
            </p>
            
            {/* Stats */}
            <div className="flex gap-8">
              <div className="border-l-2 border-[#FF431B] pl-4">
                <div className="text-slate-900 text-2xl font-bold">15+</div>
                <div className="text-slate-500 text-xs uppercase tracking-wide mt-1">Años de experiencia</div>
              </div>
              <div className="border-l-2 border-[#FF431B] pl-4">
                <div className="text-slate-900 text-2xl font-bold">100%</div>
                <div className="text-slate-500 text-xs uppercase tracking-wide mt-1">Certificados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
