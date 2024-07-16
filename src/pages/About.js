// src/pages/About.js

import React from 'react';

const About = () => (
  <div className="p-4 bg-white min-h-screen">
    <div className="container mx-auto py-8 px-4 mt-20"> {/* Menurunkan konten lebih jauh */}
      <h1 className="text-3xl font-bold text-black mb-4">Tentang Aplikasi Lindungi Kita</h1>
      <p className="text-lg text-black mb-4">
        Aplikasi ini, Lindungi Kita, merupakan aplikasi pendataan lokasi pengungsian yang bertujuan untuk memberikan informasi akurat dan tepat waktu tentang lokasi-lokasi pengungsian saat terjadi bencana atau keadaan darurat.
      </p>
      <p className="text-lg text-black mb-4">
        Aplikasi ini dikembangkan oleh Destio Wahyu Lanio (NIM: A11.2021.13568) dan Ariq Khamiluddin Ismawan (NIM: A11.2021.13573), mahasiswa dari Universitas Dian Nuswantoro, dengan tujuan untuk membantu masyarakat mendapatkan informasi yang diperlukan dalam situasi darurat.
      </p>
    </div>
  </div>
);

export default About;
