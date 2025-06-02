
import React from 'react';
import { XCircleIcon, LightbulbIcon, PresentationChartLineIcon } from '../constants';

const RevelationSection: React.FC = () => {
  // const pricingSectionLink = "#pricing"; // Link removed

  const revelations = [
    {
      icon: <XCircleIcon className="w-12 h-12 text-icon-red filter drop-shadow-md" />, 
      title: "Akar Masalah #1: Fokus Pada 'Triks', Bukan Fondasi Sistem",
      text: "Banyak yang terjebak mengejar 'leads' instan, namun abai membangun sistem presisi yang menghasilkan & mengkonversi secara berkelanjutan."
    },
    {
      icon: <LightbulbIcon className="w-12 h-12 text-icon-blue filter drop-shadow-md" />, 
      title: "Kunci #2: Presisi Targeting, Bukan Sekadar 'Jangkauan Luas'",
      text: "Pasar properti menuntut pembedahan audiens mikro. Tanpa ini, iklan Anda hanya menjadi 'noise' mahal yang terabaikan oleh calon pembeli ideal."
    },
    {
      icon: <PresentationChartLineIcon className="w-12 h-12 text-icon-cyan filter drop-shadow-md" />, 
      title: "Fondasi #3: Alur Konversi Terukur, Bukan 'Semoga Closing'",
      text: "Dari klik pertama hingga transaksi, setiap tahap adalah mata rantai krusial. Tanpa optimasi terukur, Anda membocorkan profit di setiap celah."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-bg-navbar backdrop-blur-md"> {}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-section-heading font-semibold text-brand-text-light mb-12 leading-section-heading tracking-tight"> {}
          Menguak Akar Permasalahan: Mengapa Jalan Terasa Buntu, dan <span className='text-brand-primary'>Peta Menuju Pembebasan.</span> {}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12">
            {revelations.map((revelation, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center bg-gradient-to-br from-brand-bg-card-start to-brand-bg-card-end p-6 md:p-8 rounded-3xl shadow-brand-shadow-medium border border-brand-border hover:border-brand-border-hover transition-all duration-300 transform hover:-translate-y-1 hover:shadow-brand-shadow-strong"
              >
                <div className="p-2 mb-3">{revelation.icon}</div>
                <h3 className="text-lg font-semibold text-brand-text-light mb-2 text-center">{revelation.title}</h3>
                <p className="text-body-text text-brand-text-medium text-sm leading-body-text text-center">{revelation.text}</p> {}
              </div>
            ))}
          </div>
          
          <p className="text-xl text-brand-text-light mb-10 font-medium leading-relaxed">
          Anda skeptis? Itu pertanda kecerdasan. Kami tidak menawarkan 'sihir', melainkan <strong className="text-brand-primary">logika sistematis yang terbukti</strong>, dirancang untuk transformasi nyata. {}
          </p>

          {}
        </div>
      </div>
    </section>
  );
};

export default RevelationSection;