import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-sakura-pink text-center px-4">
      <h1 className="text-6xl font-bold text-sakura-greenDark mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-6">Halaman yang kamu cari tidak ditemukan.</p>
      <Link 
        to="/" 
        className="bg-sakura-green text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}