import React, { useEffect, useState } from 'react';
import { supabase, Servicio } from '@/lib/supabase';
import { Skeleton } from '@/components/ui/skeleton';

const ServicesSection = () => {
  const [services, setServices] = useState<Servicio[]>([]);
  const [loading, setLoading] = useState(true);

  // Servicios por defecto en caso de que la base de datos esté vacía
  const defaultServices = [
    {
      id: 1,
      nombre: "Análisis Clínicos",
      descripcion: "Hematología, química sanguínea, hormonas y marcadores tumorales.",
      activo: true
    },
    {
      id: 2,
      nombre: "Rayos X e Imagen",
      descripcion: "Radiografía digital de alta resolución y ultrasonidos especializados.",
      activo: true
    },
    {
      id: 3,
      nombre: "Cardiología",
      descripcion: "Electrocardiogramas en reposo interpretados por especialistas.",
      activo: true
    },
    {
      id: 4,
      nombre: "Consulta Médica",
      descripcion: "Medicina general y preventiva para interpretación de resultados.",
      activo: true
    },
    {
      id: 5,
      nombre: "Audiometrías",
      descripcion: "Estudios de capacidad auditiva en cabina sonoamortiguada.",
      activo: true
    },
    {
      id: 6,
      nombre: "Espirometrías",
      descripcion: "Evaluación de la función pulmonar con equipos de última generación.",
      activo: true
    },
    {
      id: 7,
      nombre: "Odontología",
      descripcion: "Diagnóstico dental básico y radiografías periapicales.",
      activo: true
    },
    {
      id: 8,
      nombre: "A Domicilio",
      descripcion: "Toma de muestras gratuita hasta tu hogar u oficina.",
      activo: true
    }
  ];

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data, error } = await supabase
          .from('servicios')
          .select('*')
          .eq('activo', true)
          .order('orden', { ascending: true });

        if (error) {
          console.error('Error fetching services:', error);
          setServices(defaultServices);
        } else if (data && data.length > 0) {
          setServices(data);
        } else {
          setServices(defaultServices);
        }
      } catch (err) {
        console.error('Error:', err);
        setServices(defaultServices);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section id="servicios" className="bg-slate-50/50 py-16 px-20 max-md:px-5">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center gap-4 mb-6">
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
        <div className="grid grid-cols-4 gap-4 mb-10 max-md:grid-cols-2 max-sm:grid-cols-1">
          {loading ? (
            // Skeleton loading state
            Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 p-5">
                <Skeleton className="h-5 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))
          ) : (
            services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl border border-amber-300 p-5">
                <h3 className="text-slate-900 text-base font-semibold mb-2">
                  {service.nombre}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.descripcion}
                </p>
              </div>
            ))
          )}
        </div>
        
        {/* CTA Link */}
        <div className="text-center">
          <button className="inline-flex items-center gap-1 text-sm text-[#FF431B] font-medium hover:text-[#e63a17] transition-colors">
            <span>Ver catálogo completo de estudios</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
