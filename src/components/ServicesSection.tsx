import React from 'react';
import { Link } from 'react-router-dom';

const staticServices = [
  {
    id: 1,
    nombre: 'Análisis Clínicos',
    descripcion: 'Hematología, química sanguínea, hormonas y marcadores tumorales.',
    icon: (
      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: 2,
    nombre: 'Rayos X e Imagen',
    descripcion: 'Radiografía digital de alta resolución y ultrasonidos especializados.',
    icon: (
      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    id: 3,
    nombre: 'Cardiología',
    descripcion: 'Electrocardiogramas en reposo interpretados por especialistas.',
    icon: (
      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    nombre: 'Consulta Médica',
    descripcion: 'Medicina general y preventiva para interpretación de resultados.',
    icon: (
      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: 5,
    nombre: 'Audiometrías',
    descripcion: 'Estudios de capacidad auditiva en cabina sonoamortiguada.',
    icon: (
      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072M12 6a7 7 0 010 12M9 10a3 3 0 010 4" />
      </svg>
    ),
  },
  {
    id: 6,
    nombre: 'Espirometrías',
    descripcion: 'Evaluación de la función pulmonar con equipos de última generación.',
    icon: (
      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    id: 7,
    nombre: 'Odontología',
    descripcion: 'Diagnóstico dental básico y radiografías periapicales.',
    icon: (
      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 8,
    nombre: 'A Domicilio',
    descripcion: 'Toma de muestras gratuita hasta tu hogar u oficina.',
    icon: (
      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="bg-slate-50/50 py-16 px-20 max-md:px-5">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200/50 text-amber-600 text-xs font-medium px-3 py-1.5 rounded-full">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Abrimos los Domingos
            </span>
            <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200/50 text-blue-600 text-xs font-medium px-3 py-1.5 rounded-full">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Servicio a Domicilio GRATIS
            </span>
          </div>

          <h2 className="text-slate-900 text-2xl font-semibold tracking-tight mb-3">
            Nuestros Servicios
          </h2>
          <p className="text-slate-500 text-base">
            Un ecosistema integral de diagnóstico clínico y gabinete en un solo lugar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {staticServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-md p-5 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-slate-900 text-sm font-semibold leading-snug">
                  {service.nombre}
                </h3>
                <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0 ml-3">
                  {service.icon}
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                {service.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 bg-[#FF431B] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#e63a17] transition-colors shadow-md shadow-orange-200"
          >
            <span>Ver catálogo completo de estudios</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/paquetes"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 px-6 py-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
          >
            <span>Ver paquetes</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
