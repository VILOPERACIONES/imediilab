import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    interest: 'Análisis Clínicos',
    message: ''
  });

  const interests = [
    'Análisis Clínicos',
    'Rayos X e Imagen',
    'Cardiología',
    'Consulta Médica',
    'Audiometrías',
    'Espirometrías',
    'Odontología',
    'Servicio a Domicilio'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.');
  };

  return (
    <section className="bg-white py-24 px-20 max-md:px-5">
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-[#FF431B] text-xs font-semibold uppercase tracking-wider">
            Contáctanos
          </span>
          <h2 className="text-slate-900 text-2xl font-bold tracking-tight mt-3">
            Agenda tu cita o solicita informes
          </h2>
        </div>
        
        {/* Form Card */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl border border-slate-100 p-10 max-md:p-6">
          <div className="grid grid-cols-2 gap-6 mb-6 max-md:grid-cols-1">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Juan Pérez"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF431B] focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                Teléfono / WhatsApp
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="55 1234 5678"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF431B] focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-6 max-md:grid-cols-1">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="juan@email.com"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF431B] focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-2">
                Interés
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#FF431B] focus:border-transparent appearance-none cursor-pointer"
              >
                {interests.map((interest) => (
                  <option key={interest} value={interest}>{interest}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="¿En qué podemos ayudarte?"
              rows={4}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF431B] focus:border-transparent resize-none"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-slate-900 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
          >
            <span>Enviar Mensaje</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
