import React from 'react';
import Hero from '@/components/Hero';
import CorporateSolutions from '@/components/CorporateSolutions';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import HealthPackages from '@/components/HealthPackages';
import LocationsSection from '@/components/LocationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <CorporateSolutions />
      <AboutSection />
      <ServicesSection />
      <HealthPackages />
      <LocationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
