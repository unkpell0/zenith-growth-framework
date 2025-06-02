
import React from 'react';
import { QuestionMarkCircleIcon, ChevronDownIcon } from '../constants';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Harga Rp 300.000? Apa 'jebakannya'?",
    answer: "Tidak ada 'jebakan'. Ini adalah komitmen simbolis (setara 'jamuan makan siang strategis') untuk Anda yang serius ingin mengubah cara kerja. Kami ingin berbagi strategi bernilai tinggi ini dengan lingkaran terbatas praktisi properti yang siap mengambil tindakan nyata. Kami membatasi slot untuk menjaga kualitas interaksi dan fokus. Nilai riil yang Anda dapatkan jauh melampaui angka ini."
  },
  {
    question: "Apakah saya dapat software AI atau sistem follow-up?",
    answer: "Anda akan mendapatkan *strategi, blueprint, peta jalan, dan contoh skrip*. Kami ajarkan cara kerja dan logika sistemnya, serta bagaimana Anda bisa mengimplementasikannya menggunakan tools AI dan follow-up yang umum tersedia (banyak yang gratis atau terjangkau). Fokus kami adalah pada *cara membangun sistemnya dan cara mengeksekusinya secara presisi*, bukan pada ketergantungan tool spesifik."
  },
  {
    question: "Apa yang dimaksud 'AI Agents' di komunitas?",
    answer: "Di komunitas eksklusif, kami akan berbagi panduan, rekomendasi tools AI terkini, serta *contoh prompt-prompt khusus* (seperti 'konsultan AI mini' Anda) yang bisa langsung Anda gunakan untuk membantu berbagai aspek implementasi framework ini—dari riset pasar mendalam, pembuatan konten iklan yang persuasif, hingga analisis data untuk optimasi berkelanjutan."
  },
  {
    question: "Saya sudah coba banyak hal dan gagal. Apa yang membuat ini benar-benar berbeda?",
    answer: "Zenith Growth adalah SISTEM TERINTEGRASI dari A-Z, mulai dari diagnosa akar masalah (leads tidak berkualitas, konversi rendah) hingga eksekusi presisi (cara membangun sistem & menjalankannya dengan detail). Kami berikan contoh konkret & langkah actionable yang mudah diikuti, bukan sekadar teori umum."
  },
  {
    question: "Apakah ini butuh waktu lama untuk dipelajari & diterapkan?",
    answer: "Sistem ini dirancang untuk efisiensi. Fokus pada tindakan berdampak tinggi. Dengan komitmen dan mengikuti panduan langkah demi langkah, Anda bisa mulai melihat perubahan signifikan dalam strategi Anda. Kami berikan langkah eksekusi yang jelas dan terukur."
  },
  {
    question: "Untuk siapa Zenith Growth Framework ini dirancang?",
    answer: "Untuk profesional properti (agen, developer, pemasar) yang AMBISIUS, siap bekerja CERDAS, dan MUAK dengan hasil 'biasa-biasa saja'. Jika Anda mencari 'pil ajaib' tanpa usaha, ini BUKAN untuk Anda. Jika Anda siap membangun sistem dan mengimplementasikan strategi teruji untuk leads berkualitas dan konversi tinggi, ini JALAN TOL Anda."
  },
  {
    question: "Apakah ada dukungan jika saya mengalami kendala?",
    answer: "Tentu. Anda mendapat akses ke Grup Komunitas Eksklusif tempat Anda bisa bertanya, berbagi pengalaman, dan mendapatkan panduan AI tools. Sesi Q&A Implementasi juga dirancang untuk memastikan Anda tidak salah langkah dan mendapatkan hasil maksimal. Kesuksesan Anda adalah prioritas kami."
  },
];

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <QuestionMarkCircleIcon className="w-12 h-12 text-brand-primary mb-4" /> {}
          <h2 className="text-section-heading font-semibold text-center text-brand-text-light tracking-tight leading-section-heading"> {}
            Mungkin Ada Pertanyaan di Benak Anda? <span className="text-brand-primary">Mari Kita Jernihkan:</span> {}
          </h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <details 
              key={index} 
              className="bg-gradient-to-br from-brand-bg-card-start to-brand-bg-card-end p-6 rounded-3xl shadow-brand-shadow-medium group border border-brand-border transition-all duration-300 hover:border-brand-border-hover hover:shadow-brand-shadow-strong"
            >
              <summary className="flex justify-between items-center font-semibold text-brand-text-light cursor-pointer text-lg hover:text-brand-text-link transition-colors">
                {item.question}
                <ChevronDownIcon className="w-5 h-5 text-brand-text-medium group-open:rotate-180 transition-transform shrink-0 ml-2" /> {}
              </summary>
              <p className="text-body-text text-brand-text-medium mt-3 text-sm leading-body-text"> {}
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;