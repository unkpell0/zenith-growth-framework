
import React from 'react';
import { CurrencyDollarIcon } from '../constants'; 

const AgitationSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="flex justify-center mb-6">
          <CurrencyDollarIcon className="w-20 h-20 text-icon-red filter drop-shadow-lg" />
        </div>
        <h2 className="text-section-heading font-semibold text-brand-text-light mb-6 leading-section-heading tracking-tight"> {}
          Setiap Peluang yang Terlewat Adalah <span className="text-icon-red">Simfoni Penyesalan di Era Dinamis Ini.</span> {}
        </h2>
        <p className="text-body-text text-brand-text-medium max-w-3xl mx-auto leading-body-text"> {}
          Bukan hanya angka di laporan keuangan. Ini tentang potensi yang menguap, energi tim yang terkuras, dan dominasi pasar yang kian menjauh. Di tengah persaingan ketat 2025, stagnasi adalah kemunduran yang mahal.
        </p>
      </div>
    </section>
  );
};

export default AgitationSection;