
import React from 'react';
import { UsersIcon, PresentationChartLineIcon, BuildingStorefrontIcon, CogIcon, ChatBubbleIcon } from '../constants';
import type { ProductModule } from '../types';

const modulesData: ProductModule[] = [
  { 
    id: 1, 
    title: "Mesin Persona Presisi 2.0", 
    description: "Mekanisme untuk membedah & menarik audiens ideal (daya beli tinggi, niat serius). Ini fondasi untuk leads berkualitas tinggi yang siap dikonversi.",
    icon: <UsersIcon className="w-9 h-9 text-icon-blue" /> 
  },
  { 
    id: 2, 
    title: "Blueprint Iklan Berbasis AI & Psikologi Penjualan", 
    description: "Strategi, prinsip, dan contoh *prompt* untuk memanfaatkan AI (tools umum) dalam merancang materi iklan yang tidak hanya menarik tapi juga menjual. Fokus pada cara pakai AI, bukan tool-nya, untuk iklan yang menghasilkan leads berkualitas.",
    icon: <PresentationChartLineIcon className="w-9 h-9 text-icon-blue" />
  },
  { 
    id: 3, 
    title: "Arsitektur Landing Page Konversi Tinggi", 
    description: "Blueprint halaman penjualan digital yang dirancang untuk mengubah trafik menjadi leads panas, langkah demi langkah dengan contoh konkret yang mudah diadaptasi.",
    icon: <BuildingStorefrontIcon className="w-9 h-9 text-icon-blue" />
  },
  { 
    id: 4, 
    title: "Peta Jalan & Skrip Follow-Up Presisi Tinggi", 
    description: "Logika, alur, dan contoh skrip untuk membangun sistem follow-up (semi) otomatis yang menjaga leads tetap 'hangat' dan siap transaksi. Implementasikan dengan tools umum yang Anda miliki.",
    icon: <CogIcon className="w-9 h-9 text-icon-blue" />
  },
   { 
    id: 5, 
    title: "Komunitas & Panduan AI Pendukung", 
    description: "Akses komunitas eksklusif untuk diskusi strategis, serta panduan praktis & rekomendasi 'AI Agents' (tools AI pilihan) untuk membantu eksekusi seluruh framework dengan efektif dan efisien.",
    icon: <ChatBubbleIcon className="w-9 h-9 text-icon-blue" />
  },
];

const ProductOverview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-section-heading font-semibold text-center text-brand-text-light mb-4 tracking-tight leading-section-heading"> {}
          Membangun Fondasi Kesuksesan Anda:
        </h2>
        <p className="text-xl md:text-2xl text-brand-primary text-center font-semibold mb-12 md:mb-16"> {}
          Komponen Inti Zenith Growth Framework.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {modulesData.map((module) => (
            <div 
              key={module.id} 
              className="bg-gradient-to-br from-brand-bg-card-start to-brand-bg-card-end p-8 rounded-3xl shadow-brand-shadow-medium border border-brand-border hover:border-brand-border-hover transition-all duration-300 transform hover:-translate-y-1 hover:shadow-brand-shadow-strong"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-black/20 rounded-md mr-4 shadow-sm">
                  {module.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-brand-text-light">{module.title}</h3>
              </div>
              <p className="text-body-text text-brand-text-medium leading-body-text text-sm lg:text-base">{module.description}</p> {}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;