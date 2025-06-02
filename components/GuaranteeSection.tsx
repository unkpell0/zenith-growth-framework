
import React from 'react';
import { ShieldCheckIcon } from '../constants';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-transparent text-brand-text-light"> {}
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="flex justify-center mb-6">
          <ShieldCheckIcon className="w-16 h-16 text-icon-green filter drop-shadow-lg" /> {}
        </div>
        <h2 className="text-section-heading font-semibold mb-6 tracking-tight leading-section-heading">  {}
          Komitmen Kami: Kepuasan Anda Adalah Prioritas, <span className="text-brand-primary">Investasi Anda Aman.</span> {}
        </h2>
        <p className="text-body-text text-brand-text-medium max-w-3xl mx-auto mb-6 leading-body-text"> {}
          Kami sangat yakin sistem ini akan mengubah cara Anda beriklan. Terapkan modul <strong className="text-brand-text-light">Persona Presisi 2.0 & Blueprint Iklan Berbasis AI</strong>. Jika dalam 7 hari Anda tidak merasakan kejelasan strategi yang radikal dan potensi hasil signifikan, kami kembalikan investasi Rp 300.000 Anda <strong className="text-brand-text-light">100% UTUH</strong>. Plus, Anda boleh simpan <strong className="text-icon-green">Checklist Iklan Anti Gagal & Template Copywriting AI Eksklusif</strong> (senilai Rp 1.500.000) sebagai kompensasi waktu Anda. Tidak ada pertanyaan, tidak ada kerumitan.
        </p>
        <div className="text-sm md:text-base font-medium text-brand-text-medium mb-4">
          Ini bukan sekadar janji. Ini adalah komitmen kami untuk membuktikan nilainya bagi Anda.
        </div>
        <p className="text-xs text-brand-text-dark opacity-70"> {}
          Syarat & ketentuan berlaku.
        </p>
      </div>
    </section>
  );
};

export default GuaranteeSection;