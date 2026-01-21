import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    interest: 'Análisis Clínicos',
    message: ''
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestSelect = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interest
    }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.');
  };

  return (
    <section className="bg-white flex w-full flex-col items-center mt-14 pt-24 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex w-[832px] max-w-full flex-col items-center">
        <div className="text-[rgba(255,67,27,1)] text-xs font-semibold leading-none tracking-[0.3px] text-center uppercase">
          Contáctanos
        </div>
        
        <h2 className="text-gray-900 text-3xl font-bold leading-[1.2] tracking-[-0.75px] text-center mt-[17px] max-md:max-w-full">
          Agenda tu cita o solicita informes
        </h2>
        
        <form onSubmit={handleSubmit} className="bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)] border-gray-100 border self-stretch flex w-full flex-col overflow-hidden items-stretch mt-[49px] pt-[53px] px-[49px] rounded-3xl border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-6/12 max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col text-sm text-gray-700 font-medium max-md:mt-[25px]">
                  <label htmlFor="fullName" className="leading-none">
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
                    className="bg-gray-50 border border self-stretch flex flex-col overflow-hidden text-gray-600 font-normal justify-center mt-2.5 px-[17px] py-[18px] rounded-lg border-solid max-md:pr-5 focus:outline-none focus:ring-2 focus:ring-[rgba(255,67,27,1)] focus:border-transparent"
                  />
                  <label htmlFor="email" className="leading-none mt-7">
                    Correo Electrónico
                  </label>
                </div>
              </div>
              
              <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col text-sm text-gray-700 font-medium max-md:mt-6">
                  <label htmlFor="phone" className="leading-none">
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
                    className="bg-gray-50 border border self-stretch flex flex-col overflow-hidden text-gray-600 font-normal justify-center mt-2.5 px-[17px] py-[18px] rounded-lg border-solid max-md:pr-5 focus:outline-none focus:ring-2 focus:ring-[rgba(255,67,27,1)] focus:border-transparent"
                  />
                  <label htmlFor="interest" className="leading-none mt-7">
                    Interés
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex w-full items-stretch gap-6 text-sm font-normal flex-wrap mt-[13px] max-md:max-w-full">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="juan@email.com"
              required
              className="bg-gray-50 border border flex flex-col overflow-hidden text-gray-600 whitespace-nowrap justify-center grow shrink-0 basis-0 w-fit p-[17px] rounded-lg border-solid max-md:pr-5 focus:outline-none focus:ring-2 focus:ring-[rgba(255,67,27,1)] focus:border-transparent"
            />
            
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-gray-50 border border flex items-stretch gap-[40px_100px] text-gray-600 leading-none grow shrink basis-auto px-[17px] py-[15px] rounded-lg border-solid focus:outline-none focus:ring-2 focus:ring-[rgba(255,67,27,1)] focus:border-transparent"
              >
                <div className="my-auto">{formData.interest}</div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/17a2f9aaa96bb05b8ed9c4fb73742d3d17550f59?placeholderIfAbsent=true"
                  className={`aspect-[1] object-contain w-4 shrink-0 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  alt="Dropdown arrow"
                />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 mt-1">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => handleInterestSelect(interest)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-600 text-sm first:rounded-t-lg last:rounded-b-lg"
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <label htmlFor="message" className="text-gray-700 text-sm font-medium leading-none mt-7">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="¿En qué podemos ayudarte?"
            rows={4}
            className="bg-gray-50 border border flex flex-col overflow-hidden text-sm text-gray-600 font-normal leading-none mt-2.5 pt-[17px] pb-[17px] px-[17px] rounded-lg border-solid max-md:max-w-full max-md:pr-5 focus:outline-none focus:ring-2 focus:ring-[rgba(255,67,27,1)] focus:border-transparent resize-none"
          />
          
          <button
            type="submit"
            className="bg-gray-900 flex w-full flex-col items-center text-base text-white font-semibold text-center mt-10 pt-[19px] pb-1 px-[70px] rounded-lg max-md:max-w-full max-md:px-5 hover:bg-gray-800 transition-colors"
          >
            <div className="flex w-[142px] max-w-full items-stretch gap-[9px]">
              <div className="grow">Enviar Mensaje</div>
              <img
                src="https://api.builder.io/api/v1/image/assets/413fd2a717aa45d7a34f3279e1fd598d/6e3c1a38ae6c63c76530e591d5aca17d4699d49c?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[18px] shrink-0"
                alt="Send icon"
              />
            </div>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
