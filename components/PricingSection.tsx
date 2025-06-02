
import React from 'react';
import CountdownTimer from './CountdownTimer';
import { CheckIcon, AcademicCapIcon, PresentationChartLineIcon, BuildingStorefrontIcon, CogIcon, ChatBubbleIcon, ArrowRightIcon } from '../constants';

const PricingSection: React.FC = () => {
  const threeHoursFromNow = new Date(Date.now() + 3 * 60 * 60 * 1000);
  const whatsappLink = "https://api.whatsapp.com/send?phone=6288988988918&text=Halo%20saya%20serius%20ingin%20berkomitmen%20Rp.%20300.000%20untuk%20transformasi%20dengan%20Zenith%20Growth%20Framework";

  const moduleValuesSimplified = [
    { name: "Persona Presisi 2.0 (Nilai Riil: Rp 5jt)", icon: <AcademicCapIcon className="w-5 h-5 text-icon-blue" /> },
    { name: "Blueprint Iklan AI & Psikologi (Nilai Riil: Rp 7jt)", icon: <PresentationChartLineIcon className="w-5 h-5 text-icon-blue" /> },
    { name: "Arsitektur Landing Page Konversi (Nilai Riil: Rp 8jt)", icon: <BuildingStorefrontIcon className="w-5 h-5 text-icon-blue" /> },
    { name: "Peta Jalan Follow-Up Presisi (Nilai Riil: Rp 6jt)", icon: <CogIcon className="w-5 h-5 text-icon-blue" /> },
    { name: "Komunitas & Panduan AI Pendukung (Nilai Riil: Rp 3jt)", icon: <ChatBubbleIcon className="w-5 h-5 text-icon-blue" /> },
  ];
  const totalRealValueFormatted = "Rp 29.000.000"; 

  const bonusValuesSimplified = [
    { name: "Checklist Iklan Anti Gagal (Senilai Rp 500rb)" },
    { name: "Template Copywriting AI Eksklusif (Senilai Rp 1jt)" },
    { name: "Sesi Q&A Implementasi Intensif (Senilai Rp 2,5jt)" },
  ];
  
  return (
    <section id="pricing" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-section-heading font-bold text-center text-brand-text-light mb-6 tracking-tight leading-section-heading"> {}
          Investasi Cerdas untuk <span className="text-brand-primary">Pertumbuhan Eksponensial Anda.</span> {}
        </h2>
        <p className="text-body-text text-brand-text-medium text-center max-w-3xl mx-auto mb-12 md:mb-16 leading-body-text"> {}
          Lupakan harga normal puluhan juta. Ini adalah kesempatan eksklusif untuk mendapatkan transfer ilmu dan sistem lengkap dengan investasi yang setara 'jamuan makan siang strategis'.
        </p>

        <div 
          className="max-w-2xl mx-auto bg-gradient-to-br from-brand-bg-card-start to-brand-bg-card-end rounded-3xl shadow-brand-shadow-medium p-8 md:p-10 lg:p-12 border border-brand-border-hover relative overflow-hidden" 
        >
          <div className="absolute -top-px -right-px md:top-0 md:right-0 bg-icon-yellow text-black font-bold py-2 px-6 text-xs shadow-lg transform md:rotate-45 md:translate-x-12 md:-translate-y-5 origin-center md:origin-top-right z-10 tracking-wide">
            KOMITMEN TERBATAS!
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-center text-brand-text-light mb-2">Zenith Growth Framework™</h3>
          <p className="text-center text-brand-primary mb-6 text-lg font-medium">Total Nilai Riil Sistem & Bonus: <strong className="text-brand-text-light">{totalRealValueFormatted}++</strong></p>

          <div className="mb-6 p-4 bg-brand-bg-hero-start/50 rounded-xl border border-brand-border"> {}
            <h4 className="text-lg font-semibold text-brand-text-light mb-3 text-center">Strategi & Blueprint Komprehensif yang Anda Dapatkan:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {moduleValuesSimplified.map((item, index) => (
                <div key={`mod-val-${index}`} className="flex items-center text-brand-text-medium">
                   <CheckIcon className="w-4 h-4 text-icon-blue inline mr-2 shrink-0" /> {item.name}
                </div>
              ))}
              {bonusValuesSimplified.map((bonus, index) => (
                 <div key={`bonus-val-${index}`} className="flex items-center text-brand-text-medium">
                   <CheckIcon className="w-4 h-4 text-icon-blue inline mr-2 shrink-0" /> {bonus.name}
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-center text-icon-yellow text-2xl line-through mb-1 font-medium">Nilai Riil Sistem: Rp 6.000.000+</p>

          <p className="text-center text-brand-primary text-xl mb-1 font-semibold">Investasi Khusus <span className='text-brand-text-light'>Praktisi Serius</span> (Slot Terbatas):</p>
          <p 
            className="text-5xl md:text-6xl font-extrabold text-center text-brand-primary my-1 mb-4" 
            style={{textShadow: '0 0 10px rgba(59, 130, 246, 0.3)'}} 
          >
            Rp 300.000
          </p>
          <div className="text-center text-base font-semibold text-brand-text-light mb-4 bg-brand-primary/80 py-2 px-3 rounded-md shadow-md">
             Amankan Strategi Bernilai Puluhan Juta Dengan Komitmen Simbolis!
          </div>
          
          <div className="my-4">
            <CountdownTimer targetDate={threeHoursFromNow} />
          </div>
           <p className="text-center text-xs text-icon-yellow mt-1 mb-4 animate-pulse font-semibold">Kesempatan dengan komitmen ini sangat terbatas untuk menjaga kualitas interaksi.</p>

          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cta-start to-brand-cta-end text-brand-text-light font-bold py-4 px-6 rounded-card text-xl md:text-2xl shadow-brand-shadow-glow-blue hover:shadow-brand-shadow-glow-blue-hover hover:bg-gradient-to-r hover:from-brand-cta-hover-start hover:to-brand-cta-hover-end transition-all duration-300 transform hover:-translate-y-px my-5 tracking-wide text-button-text"
          >
            <span>Amankan Akses Eksklusif Anda Sekarang!</span>
            <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6" />
          </a>

          <div className="mt-8 p-4 bg-brand-bg-hero-start/50 rounded-xl border border-brand-border">
            <h4 className="text-base font-semibold text-brand-text-light mb-2 text-center">Mengapa Komitmen Simbolis Rp 300.000 Ini?</h4>
            <p className="text-brand-text-medium text-center text-xs leading-relaxed">
            Kami ingin berbagi strategi ini dengan lingkaran terbatas praktisi properti yang <strong className="text-brand-text-light">benar-benar serius & siap action</strong>. Anggap ini 'biaya komitmen' Anda (setara traktiran makan siang) untuk sebuah sesi transfer ilmu intensif bernilai puluhan juta. Kesuksesan Anda adalah kepuasan terbesar kami. Slot untuk harga ini kami batasi agar <strong className="text-brand-text-light">fokus & kualitas interaksi terjaga</strong>.
            </p>
          </div>
           <p className="text-center text-xs text-brand-text-dark opacity-70 mt-6">Akses Instan | Garansi 'Tantang Kami' 7 Hari.</p> {}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;