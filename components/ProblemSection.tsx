
import React from 'react';
import { CurrencyDollarIcon, ChatBubbleIcon, UsersIcon, TargetIcon, LightbulbIcon } from '../constants';

const problems = [
  { id: 1, text: "Investasi iklan terasa berat, namun hasilnya belum sepadan?", icon: <CurrencyDollarIcon className="w-10 h-10 text-icon-blue" /> },
  { id: 2, text: "Mayoritas leads hanya 'bertanya', menghabiskan waktu tanpa hasil konkret?", icon: <ChatBubbleIcon className="w-10 h-10 text-icon-blue" /> },
  { id: 3, text: "Tim sales mengeluh, leads yang masuk kurang teredukasi dan tidak siap transaksi?", icon: <UsersIcon className="w-10 h-10 text-icon-blue" /> },
  { id: 4, text: "Strategi targeting terasa seperti 'tebak buah manggis', sering meleset?", icon: <TargetIcon className="w-10 h-10 text-icon-blue" /> },
  { id: 5, text: "Kompetitor terlihat melaju, sementara Anda merasa terjebak dalam strategi 'aman'?", icon: <LightbulbIcon className="w-10 h-10 text-icon-blue" /> },
];

const ProblemSection: React.FC = () => {
  return (
    <section id="tentang" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-section-heading font-semibold text-center text-brand-text-light mb-12 md:mb-16 tracking-tight leading-section-heading"> {}
          Apakah <span className="text-brand-primary">Pantulan Cermin Ini</span> Terasa Familiar? {}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem) => (
            <div 
              key={problem.id} 
              className="bg-gradient-to-br from-brand-bg-card-start to-brand-bg-card-end p-8 rounded-3xl shadow-brand-shadow-medium border border-brand-border hover:border-brand-border-hover transition-all duration-300 transform hover:-translate-y-1 hover:shadow-brand-shadow-strong" 
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-black/20 rounded-full mb-4 inline-block shadow-md">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold text-brand-text-light leading-snug">{problem.text}</h3> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;