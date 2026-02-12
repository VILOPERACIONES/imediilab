import React from 'react';
import logo from '@/assets/imedilab-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-20 py-16 max-md:px-5">
        <div className="grid grid-cols-4 gap-12 max-md:grid-cols-2 max-sm:grid-cols-1">
          {/* Brand */}
          <div>
            <div className="mb-4 px-2">
              <img
                src={logo}
                className="h-12 object-contain"
                alt="IMEDILAB Logo"
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Innovación y cuidado al servicio de tu salud. Laboratorio certificado con tecnología de punta.
            </p>
          </div>
          
          {/* Servicios */}
          <div>
            <h3 className="text-slate-900 text-base font-semibold mb-5">
              Servicios
            </h3>
            <nav className="flex flex-col gap-3 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-900 transition-colors">Análisis Clínicos</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Rayos X</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Ultrasonidos</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Salud Ocupacional</a>
            </nav>
          </div>
          
          {/* Empresa */}
          <div>
            <h3 className="text-slate-900 text-base font-semibold mb-5">
              Empresa
            </h3>
            <nav className="flex flex-col gap-3 text-sm text-slate-500">
              <a href="#nosotros" className="hover:text-slate-900 transition-colors">Nosotros</a>
              <a href="#sucursales" className="hover:text-slate-900 transition-colors">Sucursales</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Médicos</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Contacto</a>
            </nav>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-slate-900 text-base font-semibold mb-5">
              Legal
            </h3>
            <nav className="flex flex-col gap-3 text-sm text-slate-500">
              <span>Aviso de Funcionamiento: <span className="text-slate-700">#234567</span></span>
              <span>Resp. Sanitario: <span className="text-slate-700">Q.F.B. 12345</span></span>
              <a href="#" className="hover:text-slate-900 transition-colors">Aviso de Privacidad</a>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto px-20 py-6 max-md:px-5">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-slate-400 text-sm">
              © 2026 IMEDILAB. Todos los derechos reservados. | Diseñado y Desarrollado por <a href="#" className="text-slate-500 underline hover:text-slate-700">Búho Solutions.</a>
            </p>
            <div className="flex items-center gap-5">
              <a href="https://www.facebook.com/share/1B9im3Xv28/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/imedilabmid?igsh=cGJ3b3dwNHFsOWFx" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
