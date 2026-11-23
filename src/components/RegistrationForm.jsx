import { useState } from 'react';
import axiosInstance from '../api/axiosInstance';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    nama: '',
    whatsapp: '',
    alamat: '',
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: '', text: '' });

    try {
      // Sesuaikan endpoint '/nasabah' dengan route RESTful API dari tim Backend
      await axiosInstance.post('/nasabah', formData);
      setStatusMessage({
        type: 'success',
        text: 'Pendaftaran berhasil! Pengurus akan segera menghubungi via WhatsApp.',
      });
      setFormData({ nama: '', whatsapp: '', alamat: '' });
    } catch (error) {
      // Mencegah aplikasi crash jika backend belum siap / error
      console.error('Error submitting form:', error);
      setStatusMessage({
        type: 'error',
        text: 'Gagal mengirim data. Pastikan server Backend aktif atau coba beberapa saat lagi.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="daftar" className="bg-sakura-pinkDark/70 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Kiri: Ajakan */}
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Siap jadi nasabah Bank Sampah Sakura?
          </h2>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            Isi data singkat di samping, atau datang langsung saat jadwal penyetoran. Pengurus akan menghubungi untuk membuatkan buku tabungan.
          </p>
        </div>

        {/* Kanan: Form Card */}
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Nama lengkap</label>
              <input
                type="text"
                name="nama"
                required
                value={formData.nama}
                onChange={handleChange}
                placeholder="Nama sesuai KTP"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sakura-green text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Nomor WhatsApp</label>
              <input
                type="tel"
                name="whatsapp"
                required
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="08xx-xxxx-xxxx"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sakura-green text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">RT / alamat rumah</label>
              <input
                type="text"
                name="alamat"
                required
                value={formData.alamat}
                onChange={handleChange}
                placeholder="Contoh: RT 03 / Jl. Sakura No. 12"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sakura-green text-sm"
              />
            </div>

            {statusMessage.text && (
              <div
                className={`p-3 rounded-xl text-sm ${
                  statusMessage.type === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {statusMessage.text}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-sakura-green text-white font-bold py-3.5 rounded-full hover:bg-opacity-90 transition disabled:opacity-50 mt-2"
            >
              {loading ? 'Mengirim...' : 'Kirim pendaftaran'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}