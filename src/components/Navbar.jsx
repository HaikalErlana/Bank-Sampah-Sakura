import { useState } from 'react';
import { Menu, X, Sprout } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="bg-sakura-pink p-2 rounded-full text-sakura-green">
              <Sprout size={24} />
            </div>
            <div>
              <span className="font-bold text-gray-900 block leading-tight">Bank Sampah Sakura</span>
              <span className="text-xs text-gray-500 block">RW 05 Srengseng Sawah</span>
            </div>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#tentang" className="text-gray-600 hover:text-sakura-green text-sm font-medium">Tentang</a>
            <a href="#cara-kerja" className="text-gray-600 hover:text-sakura-green text-sm font-medium">Cara Kerja</a>
            <a href="#jenis-sampah" className="text-gray-600 hover:text-sakura-green text-sm font-medium">Jenis Sampah</a>
            <a href="#jadwal-lokasi" className="text-gray-600 hover:text-sakura-green text-sm font-medium">Jadwal & Lokasi</a>
            <a 
              href="#daftar" 
              className="bg-sakura-green text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-opacity-90 transition"
            >
              Daftar Nasabah
            </a>
          </div>

          {/* Tombol Hamburger Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 border-t">
          <a href="#tentang" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600">Tentang</a>
          <a href="#cara-kerja" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600">Cara Kerja</a>
          <a href="#jenis-sampah" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600">Jenis Sampah</a>
          <a href="#jadwal-lokasi" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600">Jadwal & Lokasi</a>
          <a href="#daftar" onClick={() => setIsOpen(false)} className="block text-center bg-sakura-green text-white py-2.5 rounded-full font-semibold">
            Daftar Nasabah
          </a>
        </div>
      )}
    </nav>
  );
}