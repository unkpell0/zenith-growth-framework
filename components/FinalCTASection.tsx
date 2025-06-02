
import React from 'react';
import { ArrowRightIcon } from '../constants';

const FinalCTASection: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=6288988988918&text=Halo%20saya%20serius%20ingin%20berkomitmen%20Rp.%20300.000%20untuk%20transformasi%20dengan%20Zenith%20Growth%20Framework";
  
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-brand-bg-card-start via-brand-primary/10 to-brand-bg-card-end text-brand-text-light"> {}
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-[3.2rem] font-bold mb-8 leading-tight tracking-tight"> 
          Sebuah Keputusan Strategis: Rp 300rb untuk Potensi <span className="text-brand-primary">Mesin Deals Otomatis</span>. <br className="hidden sm:block md:hidden"/> Atau Tetap Dalam Lingkaran <span className="text-icon-red">Ketidakpastian yang Merugikan</span>. <br className="sm:hidden"/> Pilihan Logis Ada di Tangan Anda. {}
        </h2>
        <p className="text-body-text text-brand-text-medium mb-10 max-w-2xl mx-auto leading-body-text"> {}
          Ini bukan sekadar 'pembelian'. Ini adalah <strong className="text-brand-text-light">komitmen Anda pada pertumbuhan berkelanjutan</strong>, mendapatkan akses ke blueprint, peta jalan, contoh eksekusi, dan dukungan komunitas dengan investasi simbolis yang <strong className="text-icon-yellow">sangat terbatas kuotanya</strong>.
        </p>
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cta-start to-brand-cta-end text-brand-text-light font-bold py-4 md:py-5 px-10 md:px-12 rounded-card text-xl md:text-2xl shadow-brand-shadow-glow-blue hover:shadow-brand-shadow-glow-blue-hover hover:bg-gradient-to-r hover:from-brand-cta-hover-start hover:to-brand-cta-hover-end transition-all duration-300 transform hover:-translate-y-px animate-pulse text-button-text tracking-wide"
        >
          <span>Ambil Kendali Pertumbuhan Anda Sekarang!</span>
          <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <p className="mt-6 text-brand-text-medium text-xs md:text-sm">
          Garansi 'Tantang Kami' 7 Hari | Kuota Komitmen Khusus Sangat Terbatas.
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;