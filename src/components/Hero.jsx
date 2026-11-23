import { CheckCircle2, Flower2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-sakura-pink py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Kiri: Teks */}
        <div>
          <span className="inline-block bg-white text-sakura-green text-xs font-semibold px-3 py-1 rounded-full mb-4 shadow-sm">
            • Srengseng Sawah, Jakarta Selatan
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Sampah dipilah, <br /> tabungan bertambah.
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
            Bank Sampah Sakura RW 05 mengajak warga Srengseng Sawah mengubah sampah rumah tangga menjadi tabungan, sambil menjaga lingkungan tetap bersih dan hijau.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <a 
              href="#daftar" 
              className="bg-sakura-green text-white px-7 py-3.5 rounded-full font-semibold hover:bg-opacity-90 transition shadow-md"
            >
              Daftar jadi nasabah
            </a>
            <a 
              href="#jenis-sampah" 
              className="bg-white text-gray-800 px-7 py-3.5 rounded-full font-semibold hover:bg-gray-50 transition border border-gray-200"
            >
              Lihat jenis sampah
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle2 size={18} className="text-sakura-green" />
            <span>Terbuka untuk seluruh warga RW 05 Srengseng Sawah</span>
          </div>
        </div>

        {/* Kanan: Ilustrasi Bunga Sakura + 2 Daun Hijau */}
        <div className="flex justify-center relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            {/* Daun Kiri Atas */}
            <div className="absolute -top-6 -left-4 w-24 h-36 bg-sakura-green rounded-tl-full rounded-br-full -rotate-45 opacity-90"></div>
            {/* Daun Kanan Atas */}
            <div className="absolute -top-6 -right-4 w-24 h-36 bg-sakura-green rounded-tr-full rounded-bl-full rotate-45 opacity-90"></div>
            
            {/* Lingkaran Utama */}
            <div className="relative z-10 w-full h-full bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-green-500/30 p-4">
              <div className="w-full h-full rounded-full border-2 border-pink-300 flex items-center justify-center">
                <Flower2 size={130} className="text-pink-400" strokeWidth={1.5} />
              </div>
            </div>

            {/* Badge Mengambang */}
            <div className="z-20 absolute -bottom-2 right-2 bg-white px-5 py-2.5 rounded-full shadow-md border border-pink-100 text-sm font-bold text-gray-800">
              Pilah • Setor • Tabung
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}