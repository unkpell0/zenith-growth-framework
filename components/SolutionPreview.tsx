
import React from 'react';
import { CheckIcon, TargetIcon, UsersIcon, PresentationChartLineIcon } from '../constants';
import type { ValueProposition } from '../types';

const propositions: ValueProposition[] = [
  { id: 1, text: "Audiens ideal (pembeli serius, bukan 'turis properti') ditemukan & dijangkau dengan presisi laser.", icon: <UsersIcon className="w-8 h-8 text-icon-blue" /> },
  { id: 2, text: "Anggaran iklan Anda bekerja 2x-5x lebih efisien, menghasilkan leads berkualitas tinggi, bukan sekadar klik kosong.", icon: <PresentationChartLineIcon className="w-8 h-8 text-icon-blue" /> },
  { id: 3, text: "Tim sales Anda menerima 'aliran emas' prospek teredukasi yang siap transaksi, bukan 'leads basi'.", icon: <TargetIcon className="w-8 h-8 text-icon-blue" /> },
  { id: 4, text: "10-20 deals/bulan menjadi standar operasional baru Anda, bukan lagi sekadar target ambisius di atas kertas.", icon: <CheckIcon className="w-8 h-8 text-icon-blue" /> },
];

const SolutionPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-section-heading font-semibold text-center text-brand-text-light mb-12 md:mb-16 tracking-tight leading-section-heading"> {}
          Mari Berimajinasi Sejenak: Sebuah <span className="text-brand-primary">Realita Baru untuk Bisnis Anda...</span> {}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {propositions.map((prop) => (
            <div 
              key={prop.id} 
              className="flex items-center bg-gradient-to-br from-brand-bg-card-start to-brand-bg-card-end p-6 md:p-8 rounded-3xl shadow-brand-shadow-medium border border-brand-border hover:border-brand-border-hover transition-all duration-300 transform hover:-translate-y-1 hover:shadow-brand-shadow-strong" 
            >
              <div className="p-2.5 bg-black/20 rounded-full mr-4 shrink-0 shadow-md">
                {prop.icon}
              </div>
              <p className="text-lg text-brand-text-light font-medium">{prop.text}</p> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionPreview;