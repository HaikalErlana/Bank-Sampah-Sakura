import { Sprout, ArrowUp, Camera, MessageCircle, Globe } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E291A] text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-700">
        {/* Kolom 1: Brand + Ikon Sosial Media */}
        <div>
          <div className="flex items-center gap-2 text-white mb-4">
            <div className="bg-[#FDE8E9] p-2 rounded-full text-[#65A30D]">
              <Sprout size={20} />
            </div>
            <div>
              <span className="font-bold block leading-tight">Bank Sampah Sakura</span>
              <span className="text-xs text-gray-400">RW 05 Srengseng Sawah</span>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Menabung dari sampah, menjaga lingkungan Srengseng Sawah, Jakarta Selatan. Pilah di rumah, setor ke kami, dan lihat saldomu tumbuh.
          </p>
          {/* 3 Kotak Ikon Kecil */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-lg border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition"
            >
              <Camera size={16} />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-lg border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition"
            >
              <MessageCircle size={16} />
            </a>
            <a
              href="#"
              aria-label="Website"
              className="w-9 h-9 rounded-lg border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition"
            >
              <Globe size={16} />
            </a>
          </div>
        </div>

        {/* Kolom 2: Menu */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">MENU</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#tentang" className="hover:text-white transition">• Tentang</a></li>
            <li><a href="#cara-kerja" className="hover:text-white transition">• Cara Kerja</a></li>
            <li><a href="#jenis-sampah" className="hover:text-white transition">• Jenis Sampah</a></li>
            <li><a href="#jadwal-lokasi" className="hover:text-white transition">• Jadwal & Lokasi</a></li>
            <li><a href="#daftar" className="hover:text-white transition">• Daftar Nasabah</a></li>
          </ul>
        </div>

        {/* Kolom 3: Jadwal Setor */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">JADWAL SETOR</h4>
          <p className="text-xs text-gray-400">Hari</p>
          <p className="text-sm text-white font-semibold mb-3">Sabtu & Minggu</p>
          <p className="text-xs text-gray-400">Jam</p>
          <p className="text-sm text-white font-semibold mb-4">08.00 – 11.00 WIB</p>
          <a
            href="#daftar"
            className="inline-block bg-[#65A30D] text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-opacity-90 transition"
          >
            Daftar sekarang
          </a>
        </div>

        {/* Kolom 4: Kontak */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">KONTAK</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>RW 05, Kelurahan Srengseng Sawah, Kec. Jagakarsa, Jakarta Selatan</li>
            <li>WhatsApp: 0812-3456-7890</li>
            <li>Instagram: @banksampahsakura.rw05</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
        <p>© 2026 Bank Sampah Sakura RW 05 Srengseng Sawah</p>
        <span className="border border-gray-600 px-4 py-1.5 rounded-full text-gray-300">
          Pilah • Setor • Tabung
        </span>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 hover:text-white transition"
        >
          Kembali ke atas <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}