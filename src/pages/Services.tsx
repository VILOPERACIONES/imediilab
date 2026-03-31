import React, { useEffect, useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Search, X } from 'lucide-react';
import { supabase, Servicio } from '@/lib/supabase';
import { Skeleton } from '@/components/ui/skeleton';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ServiceDetailModal from '@/components/ServiceDetailModal';
import logo from '@/assets/imedilab-logo.svg';

const ITEMS_PER_PAGE = 50;

const Services = () => {
  const [services, setServices] = useState<Servicio[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<Servicio | null>(null);
  const [searchParams] = useSearchParams();

  // Pre-fill search from URL query param
  useEffect(() => {
    const q = searchParams.get('q');
    if (q) setSearchQuery(q);
  }, [searchParams]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data, error } = await supabase
          .from('servicios')
          .select('*');

        if (error) {
          console.error('Error fetching services:', error);
          setServices([]);
        } else {
          const sorted = (data || []).sort((a, b) =>
            (a.nombre || '').localeCompare(b.nombre || '', 'es')
          );
          setServices(sorted);
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

  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return services;
    const q = searchQuery.toLowerCase().trim();
    return services.filter((s) => s.nombre.toLowerCase().includes(q));
  }, [services, searchQuery]);

  const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);
  const paginatedServices = filteredServices.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    const pages: (number | 'ellipsis')[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('ellipsis');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('ellipsis');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-5 md:px-20 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Volver al inicio</span>
          </Link>
          <Link to="/">
            <img src={logo} className="h-8 md:h-10 object-contain px-2" alt="IMEDILAB Logo" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-10 md:py-16 px-5 md:px-20">
        <div className="max-w-[1200px] mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-slate-900 text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Catálogo de Estudios
            </h1>
            <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
              Encuentra el estudio que necesitas. Contamos con más de {services.length > 0 ? services.length.toLocaleString('es-MX') : '800'} estudios disponibles.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar estudio por nombre..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-sm text-slate-500 mt-2 text-center">
                {filteredServices.length} resultado{filteredServices.length !== 1 ? 's' : ''} encontrado{filteredServices.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>

          {/* Results info */}
          {!loading && filteredServices.length > 0 && (
            <div className="flex items-center justify-between mb-4 text-sm text-slate-500">
              <span>
                Mostrando {((currentPage - 1) * ITEMS_PER_PAGE) + 1}-{Math.min(currentPage * ITEMS_PER_PAGE, filteredServices.length)} de {filteredServices.length}
              </span>
              {totalPages > 1 && (
                <span>Página {currentPage} de {totalPages}</span>
              )}
            </div>
          )}

          {/* Services Table */}
          {loading ? (
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-4 border-b border-slate-50">
                  <Skeleton className="h-5 w-2/3" />
                  <Skeleton className="h-5 w-24" />
                </div>
              ))}
            </div>
          ) : filteredServices.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-100">
              <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h2 className="text-slate-900 text-lg font-semibold mb-2">
                {searchQuery ? 'Sin resultados' : 'No hay estudios disponibles'}
              </h2>
              <p className="text-slate-500 text-sm">
                {searchQuery
                  ? `No se encontraron estudios con "${searchQuery}". Intenta con otro término.`
                  : 'Aún no se han configurado estudios en el sistema.'}
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-sm text-[#FF431B] font-medium hover:underline"
                >
                  Limpiar búsqueda
                </button>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              {/* Table Header */}
              <div className="hidden md:flex items-center px-6 py-3 bg-slate-50 border-b border-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <span className="flex-1">Estudio</span>
                <span className="w-36 text-right">Precio</span>
              </div>

              {/* Table Rows */}
              {paginatedServices.map((service, index) => (
                <div
                  key={service.id}
                  className={`flex flex-col md:flex-row md:items-center px-6 py-4 hover:bg-amber-50/40 transition-colors ${
                    index < paginatedServices.length - 1 ? 'border-b border-slate-50' : ''
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-900 text-sm font-medium truncate">
                      {service.nombre}
                    </p>
                    {service.descripcion && (
                      <p className="text-slate-400 text-xs mt-0.5 truncate">
                        {service.descripcion}
                      </p>
                    )}
                  </div>
                  <div className="md:w-36 md:text-right mt-1 md:mt-0">
                    {service.precio != null && service.precio > 0 ? (
                      <span className="text-amber-600 text-sm font-bold">
                        ${service.precio.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN
                      </span>
                    ) : (
                      <span className="text-slate-400 text-xs">Consultar precio</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-1.5 mt-8">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm font-medium rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Anterior
              </button>
              {getPageNumbers().map((page, i) =>
                page === 'ellipsis' ? (
                  <span key={`e-${i}`} className="px-2 text-slate-400">…</span>
                ) : (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`w-9 h-9 text-sm font-medium rounded-lg transition-colors ${
                      currentPage === page
                        ? 'bg-[#FF431B] text-white shadow-sm'
                        : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm font-medium rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Siguiente
              </button>
            </div>
          )}

          {/* Contact CTA */}
          {services.length > 0 && (
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
                <h2 className="text-slate-900 text-xl md:text-2xl font-bold mb-3">
                  ¿No encuentras tu estudio?
                </h2>
                <p className="text-slate-600 text-base mb-6 max-w-xl mx-auto">
                  Contáctanos y con gusto te ayudamos a encontrar el estudio que necesitas.
                </p>
                <a
                  href="https://wa.me/529993185571?text=Hola%2C%20busco%20un%20estudio%20que%20no%20encuentro%20en%20el%20cat%C3%A1logo"
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
