
import React from 'react';
import { ChevronDownIcon } from '../constants'; // Import the icon

const HeroSection: React.FC = () => {
  // const pricingSectionLink = "#pricing"; // Link removed
  // const heroImageUrl = "https://storage.googleapis.com/generativeai-downloads/images/project_guidelines/b09b9e1564f84a380b8d195f7d76913d.png"; // Image removed

  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden"> {}
      {}
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <h1 className="text-hero-heading font-bold text-brand-text-light mb-6 leading-hero-heading tracking-tight"> {}
          Merasa Strategi Properti Anda Kehilangan Arah? Ada <span className="text-brand-primary">Realita Baru</span> Menanti. {}
        </h1>

        {/* Image removed from here */}

        <p className="text-body-text text-brand-text-medium mb-8 max-w-3xl mx-auto leading-body-text"> {}
          Ini bukan 'solusi biasa'. Ini adalah transfer ilmu intensif dengan <strong className="text-brand-text-light font-semibold">komitmen simbolis</strong> untuk Anda yang serius mendambakan leads berkualitas dan membangun sistem konversi presisi tinggi.
        </p>
        
        {/* Scroll Down Arrow Re-added */}
        <div className="mt-10 animate-pulse">
          <ChevronDownIcon className="w-10 h-10 md:w-12 md:h-12 text-brand-text-link mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;