import { MapPin } from 'lucide-react';

export default function ScheduleLocation() {
  return (
    <section id="jadwal-lokasi" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs font-bold tracking-wider uppercase text-sakura-green block mb-2">
          JADWAL & LOKASI
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Datang saat kami buka.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Kiri: Kartu Jadwal */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Jadwal penyetoran</h3>
            <div className="space-y-5">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase block">HARI</span>
                <p className="font-semibold text-gray-900 text-lg">Setiap Sabtu & Minggu</p>
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase block">JAM</span>
                <p className="font-semibold text-gray-900 text-lg">08.00 – 11.00 WIB</p>
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase block">TEMPAT</span>
                <p className="font-semibold text-gray-900 text-lg">Pos Sekretariat RW 05 Srengseng Sawah</p>
              </div>
            </div>
          </div>

          {/* Kanan: Kartu Peta */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="bg-sakura-greenLight rounded-2xl h-56 flex flex-col items-center justify-center text-sakura-green p-4 text-center mb-4">
              <MapPin size={36} className="mb-2" />
              <p className="font-semibold text-sm">[PETA LOKASI: Srengseng Sawah, Jakarta Selatan]</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-sm text-gray-600">
                RW 05, Kelurahan Srengseng Sawah, Kec. Jagakarsa, Jakarta Selatan
              </p>
              <a 
                href="https://maps.google.com/?q=Srengseng+Sawah+Jakarta+Selatan" 
                target="_blank" 
                rel="noreferrer"
                className="bg-sakura-green text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center hover:bg-opacity-90 transition shrink-0"
              >
                Buka rute di peta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}