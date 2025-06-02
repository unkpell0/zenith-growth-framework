
import React from 'react';
import type { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Bapak Haryanto",
    role: "Direktur Pemasaran, Properti Jaya Group",
    feedback: "\"Jujur, awalnya saya anggap ini 'angin surga' lagi. Tapi setelah kami terapkan modul Persona & Targeting, kualitas leads melonjak 300%, bukan sekadar kuantitas. Angka di rekening tidak pernah bohong.\"",
    avatar: "https://picsum.photos/seed/haryanto/100/100" 
  },
  {
    id: 2,
    name: "Ibu Amelia Sari",
    role: "Principal Agent, Mitra Properti Elit",
    feedback: "\"Lelah dengan teori tanpa eksekusi. Framework ini 'memaksa' kami membangun sistem yang disiplin. Investasi iklan tetap, tapi closing rate meroket. Ini bukan sihir, ini logika sistematis yang bekerja.\"",
    avatar: "https://picsum.photos/seed/amelia/100/100"
  },
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-section-heading font-semibold text-center text-brand-text-light mb-12 md:mb-16 tracking-tight leading-section-heading"> {}
          Kisah Sukses dari Mereka yang Telah Merintis Jalan Baru:
        </h2>
        <div className={`grid grid-cols-1 ${testimonialsData.length > 1 ? 'sm:grid-cols-2' : 'sm:grid-cols-1'} gap-8 lg:gap-10 max-w-4xl mx-auto`}>
          {testimonialsData.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gradient-to-br from-brand-bg-quote-card-start to-brand-bg-quote-card-end p-8 rounded-3xl shadow-brand-shadow-medium border border-brand-border flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-brand-shadow-strong hover:border-brand-border-hover"
            >
              <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4 border-2 border-brand-text-link object-cover shadow-md"/> {}
              <p className="text-body-text text-brand-text-medium italic mb-4 flex-grow leading-body-text">"{testimonial.feedback}"</p> {}
              <div className="mt-auto">
                <h4 className="text-lg font-semibold text-brand-text-link">{testimonial.name}</h4> {}
                <p className="text-brand-text-dark text-sm font-medium opacity-80">{testimonial.role}</p> {}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;