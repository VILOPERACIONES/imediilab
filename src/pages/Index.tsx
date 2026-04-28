import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '@/components/Hero';
import CorporateSolutions from '@/components/CorporateSolutions';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import HealthPackages from '@/components/HealthPackages';
import LocationsSection from '@/components/LocationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Wait a tick for sections to render
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <CorporateSolutions />
      <AboutSection />
      <HealthPackages />
      <ServicesSection />
      <LocationsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
