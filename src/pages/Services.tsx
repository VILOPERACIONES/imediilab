import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { supabase, Servicio } from '@/lib/supabase';
import { Skeleton } from '@/components/ui/skeleton';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Services = () => {
  const [services, setServices] = useState<Servicio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data, error } = await supabase
          .from('servicios')
          .select('*')
          .order('orden', { ascending: true });

        if (error) {
          console.error('Error fetching services:', error);
          setServices([]);
        } else {
          setServices(data || []);
        }
      } catch (err) {
        console.error('Error:', err);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-5 md:px-20 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Volver al inicio</span>
          </Link>
          <Link to="/" className="text-xl font-bold text-[#FF431B]">
            IMEDILAB
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 md:py-20 px-5 md:px-20">
        <div className="max-w-[1200px] mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-slate-900 text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Catálogo de Servicios
            </h1>
            <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
              Descubre todos nuestros servicios de diagnóstico clínico y gabinete disponibles para ti.
            </p>
          </div>

          {/* Services Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              ))}
            </div>
          ) : services.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h2 className="text-slate-900 text-xl font-semibold mb-2">
                No hay servicios disponibles
              </h2>
              <p className="text-slate-500 text-base mb-6">
                Aún no se han configurado servicios en el sistema.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-[#FF431B] font-medium hover:text-[#e63a17] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver al inicio</span>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-amber-200 transition-all p-6"
                >
                  {service.icono && (
                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4 text-2xl">
                      {service.icono}
                    </div>
                  )}
                  <h3 className="text-slate-900 text-lg font-semibold mb-2">
                    {service.nombre}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {service.descripcion}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Contact CTA */}
          {services.length > 0 && (
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
                <h2 className="text-slate-900 text-xl md:text-2xl font-bold mb-3">
                  ¿Necesitas más información?
                </h2>
                <p className="text-slate-600 text-base mb-6 max-w-xl mx-auto">
                  Contáctanos y con gusto te asesoraremos sobre el servicio que necesitas.
                </p>
                <a
                  href="https://wa.me/5212345678901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white text-base font-semibold px-6 py-3.5 rounded-full hover:bg-[#20bd5a] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Contáctanos por WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
