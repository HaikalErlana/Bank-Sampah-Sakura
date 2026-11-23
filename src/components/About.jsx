import { Camera, Wallet, Leaf, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="tentang" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Kiri: Placeholder Foto */}
        <div className="bg-sakura-pink/60 border-2 border-dashed border-pink-300 rounded-3xl h-80 md:h-96 flex flex-col items-center justify-center text-pink-500 p-6 text-center">
          <Camera size={48} className="mb-3" />
          <p className="font-semibold text-sm">[FOTO: Kegiatan penimbangan di Bank Sampah Sakura]</p>
          <span className="text-xs text-gray-500 mt-1">Ganti bagian ini dengan tag &lt;img&gt; dokumentasi asli</span>
        </div>

        {/* Kanan: Penjelasan */}
        <div>
          <span className="text-xs font-bold tracking-wider uppercase text-sakura-green block mb-2">
            TENTANG KAMI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dari warga, untuk warga RW 05.
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Bank Sampah Sakura adalah inisiatif warga RW 05, Kelurahan Srengseng Sawah, Jakarta Selatan. Kami mengelola sampah yang sudah dipilah dan mencatatnya sebagai tabungan warga demi menciptakan lingkungan yang bersih dan mandiri.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-2.5 rounded-xl text-sakura-green mt-1">
                <Wallet size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Tabungan dari sampah</h4>
                <p className="text-sm text-gray-600">Sampah bernilai ditimbang dan dicatat sebagai saldo tabungan nasabah.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-2.5 rounded-xl text-sakura-green mt-1">
                <Leaf size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Lingkungan lebih bersih</h4>
                <p className="text-sm text-gray-600">Memilah dari rumah mengurangi sampah yang berakhir di tempat pembuangan.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-2.5 rounded-xl text-sakura-green mt-1">
                <Users size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Kebersamaan warga</h4>
                <p className="text-sm text-gray-600">Dikelola bersama oleh pengurus dan relawan warga RW 05 Srengseng Sawah.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}