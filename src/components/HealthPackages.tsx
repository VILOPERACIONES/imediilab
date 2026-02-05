import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { supabase, Paquete } from '@/lib/supabase';
import { Skeleton } from '@/components/ui/skeleton';

// Mapeo de colores por categoría
const categoryColors: Record<string, string> = {
  'PREVENTIVOS': 'bg-blue-50 text-blue-600',
  'MUJERES': 'bg-pink-50 text-pink-500',
  'ADULTO MAYOR': 'bg-purple-50 text-purple-600',
  'HOMBRES': 'bg-emerald-50 text-emerald-600',
  'NIÑOS': 'bg-amber-50 text-amber-600',
  'DEPORTIVO': 'bg-orange-50 text-orange-600',
  'EMPRESARIAL': 'bg-slate-100 text-slate-600',
};

const HealthPackages = () => {
  const [expandedPackages, setExpandedPackages] = useState<number[]>([]);
  const [packages, setPackages] = useState<Paquete[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        // 1. Fetch Packages
        const { data: packagesData, error: pkgError } = await supabase
          .from('paquetes')
          .select('*');

        if (pkgError) {
          console.error('Error fetching packages:', pkgError);
          setPackages([]);
          return;
        }

        // 2. Fetch Categories
        const { data: categoriesData } = await supabase
          .from('categorias')
          .select('*');

        const categoriesMap = new Map(categoriesData?.map(c => [c.id, c]));

        // 3. Manual Join & Client-side Sort
        const joinedData = (packagesData || []).map(pkg => ({
          ...pkg,
          categorias: categoriesMap.get(pkg.categoria_id)
        })).sort((a, b) => (a.orden || 0) - (b.orden || 0));

        setPackages(joinedData.slice(0, 3));
      } catch (err) {
        console.error('Error:', err);
        setPackages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const togglePackageExpand = (id: number) => {
    setExpandedPackages(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const getCategoryColor = (categoryName?: string) => {
    if (!categoryName) return 'bg-slate-100 text-slate-600';
    return categoryColors[categoryName.toUpperCase()] || 'bg-slate-100 text-slate-600';
  };

  const formatPrice = (price: number) => {
    return `$${price.toLocaleString('es-MX')}`;
  };

  // Si está cargando, mostrar skeletons
  if (loading) {
    return (
      <section id="paquetes" className="bg-white py-16 md:py-24 px-5 md:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-slate-900 text-xl md:text-2xl font-bold tracking-tight mb-3">
              Paquetes de Salud
            </h2>
          </div>
          <div className="hidden md:grid grid-cols-3 gap-5 mb-14">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
                <Skeleton className="h-6 w-24 mb-5" />
                <Skeleton className="h-7 w-3/4 mb-4" />
                <Skeleton className="h-10 w-1/2 mb-6" />
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Si no hay paquetes, mostramos mensaje

  return (
    <section id="paquetes" className="bg-white py-16 md:py-24 px-5 md:px-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-slate-900 text-xl md:text-2xl font-bold tracking-tight mb-3">
            Paquetes de Salud
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            Chequeos preventivos diseñados para tu bienestar.
          </p>
        </div>

        {packages.length > 0 ? (
          <>
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-3 gap-5 mb-14">
              {packages.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow p-7 flex flex-col h-full">
                  <span className={`inline-block ${getCategoryColor(pkg.categorias?.nombre)} text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md mb-5 w-fit`}>
                    {pkg.categorias?.nombre || 'GENERAL'}
                  </span>

                  <h3 className="text-slate-900 text-xl font-bold mb-4">
                    {pkg.nombre}
                  </h3>

                  <div className="flex items-baseline gap-1.5 mb-6">
                    <span className="text-slate-900 text-3xl font-bold">{formatPrice(pkg.precio)}</span>
                    <span className="text-slate-400 text-sm font-medium">MXN</span>
                  </div>

                  <div className="flex-1">
                    <p className="text-slate-400 text-[11px] font-semibold uppercase tracking-wider mb-4">
                      Incluye:
                    </p>
                    <div className="space-y-3">
                      {pkg.incluye?.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <svg className="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="9" stroke="#22c55e" strokeWidth="2" />
                            <path d="M6 10l2.5 2.5L14 7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 text-sm font-semibold py-3.5 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all">
                      <span>Solicitar Info</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Cards - Compact Accordion Style */}
            <div className="md:hidden space-y-3 mb-10">
              {packages.map((pkg) => {
                const isExpanded = expandedPackages.includes(pkg.id);
                return (
                  <div key={pkg.id} className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                    {/* Header - Always Visible */}
                    <button
                      onClick={() => togglePackageExpand(pkg.id)}
                      className="w-full p-4 flex items-center justify-between text-left"
                    >
                      <div className="flex-1">
                        <span className={`inline-block ${getCategoryColor(pkg.categorias?.nombre)} text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded mb-2`}>
                          {pkg.categorias?.nombre || 'GENERAL'}
                        </span>
                        <h3 className="text-slate-900 text-base font-semibold">
                          {pkg.nombre}
                        </h3>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[#FF431B] text-lg font-bold">{formatPrice(pkg.precio)}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </div>
                    </button>

                    {/* Expandable Content */}
                    {isExpanded && (
                      <div className="px-4 pb-4 border-t border-slate-100 pt-3">
                        <p className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider mb-3">
                          Incluye:
                        </p>
                        <div className="space-y-2 mb-4">
                          {pkg.incluye?.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-2 text-sm text-slate-600">
                              <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="10" r="9" stroke="#22c55e" strokeWidth="2" />
                                <path d="M6 10l2.5 2.5L14 7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                        <button className="w-full flex items-center justify-center gap-2 bg-[#FF431B] text-white text-sm font-semibold py-3 rounded-lg hover:bg-[#e63a17] transition-colors">
                          <span>Solicitar Info</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="text-center py-10 bg-slate-50 rounded-xl border border-slate-200 mb-14">
            <p className="text-slate-500 text-lg">Aún no hay paquetes disponibles.</p>
          </div>
        )}

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/paquetes"
            className="inline-flex items-center gap-3 bg-[#FF431B] text-white text-base md:text-lg font-semibold px-6 md:px-8 py-3.5 md:py-4 rounded-full shadow-lg shadow-orange-200 hover:bg-[#e63a17] transition-colors"
          >
            <span>Ver Más Paquetes</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HealthPackages;
