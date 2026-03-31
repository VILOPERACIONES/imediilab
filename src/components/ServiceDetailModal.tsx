import React from 'react';
import { X } from 'lucide-react';
import { Servicio } from '@/lib/supabase';

interface ServiceDetailModalProps {
  service: Servicio | null;
  open: boolean;
  onClose: () => void;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, open, onClose }) => {
  if (!open || !service) return null;

  const whatsappMessage = `Hola, me gustaría solicitar información sobre el estudio *${service.nombre}*${service.precio && service.precio > 0 ? ` ($${service.precio.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN)` : ''}. ¿Me pueden dar más detalles?`;
  const whatsappLink = `https://wa.me/529993185571?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        {service.icono && (
          <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-4 text-3xl">
            {service.icono}
          </div>
        )}

        {/* Name */}
        <h2 className="text-slate-900 text-xl md:text-2xl font-bold mb-3 pr-8">
          {service.nombre}
        </h2>

        {/* Description */}
        {service.descripcion && (
          <div className="bg-amber-50/60 border border-amber-100 rounded-xl p-4 mb-4">
            <span className="text-xs text-amber-600 uppercase tracking-wider font-semibold mb-1.5 block">Descripción</span>
            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
              {service.descripcion}
            </p>
          </div>
        )}

        {/* Price */}
        <div className="bg-slate-50 rounded-xl p-4 mb-6">
          <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Precio</span>
          {service.precio != null && service.precio > 0 ? (
            <p className="text-amber-600 text-2xl font-bold mt-1">
              ${service.precio.toLocaleString('es-MX', { minimumFractionDigits: 2 })} <span className="text-sm font-medium">MXN</span>
            </p>
          ) : (
            <p className="text-slate-500 text-base mt-1">Consultar disponibilidad y precio</p>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-[#20bd5a] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Solicitar información</span>
          </a>
          <button
            onClick={onClose}
            className="flex-1 sm:flex-none px-5 py-3 text-sm font-medium rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;
