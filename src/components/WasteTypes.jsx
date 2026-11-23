import { Milk, FileText, Wrench, Wine } from 'lucide-react';

export default function WasteTypes() {
  const wasteList = [
    {
      icon: <Milk size={24} className="text-pink-500" />,
      bgIcon: 'bg-pink-50',
      name: 'Plastik',
      desc: 'Botol PET, gelas plastik, dan kemasan plastik bersih.',
      price: 'Rp 3.000 / kg',
    },
    {
      icon: <FileText size={24} className="text-sakura-green" />,
      bgIcon: 'bg-green-50',
      name: 'Kertas & kardus',
      desc: 'Kardus, koran, majalah, dan kertas HVS bekas.',
      price: 'Rp 2.000 / kg',
    },
    {
      icon: <Wrench size={24} className="text-pink-500" />,
      bgIcon: 'bg-pink-50',
      name: 'Logam & kaleng',
      desc: 'Kaleng minuman, besi, dan aluminium bekas.',
      price: 'Rp 10.000 / kg',
    },
    {
      icon: <Wine size={24} className="text-sakura-green" />,
      bgIcon: 'bg-green-50',
      name: 'Kaca',
      desc: 'Botol dan toples kaca yang utuh dan bersih.',
      price: 'Rp 1.500 / kg',
    },
  ];

  return (
    <section id="jenis-sampah" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs font-bold tracking-wider uppercase text-sakura-green block mb-2">
          JENIS SAMPAH
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Apa saja yang bisa disetor?
        </h2>
        <p className="text-gray-600 mb-12">
          Setiap jenis sampah punya harga per kilogram. Pastikan sampah dalam keadaan bersih dan kering.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wasteList.map((item, idx) => (
            <div key={idx} className="border border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.bgIcon}`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-6">{item.desc}</p>
              </div>
              <div className="bg-gray-50 text-gray-800 font-bold text-sm py-2.5 px-4 rounded-xl text-center border border-gray-100">
                {item.price}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 mt-6">
          *Jenis sampah dan harga mengikuti ketentuan pengurus dan dapat berubah sewaktu-waktu.
        </p>
      </div>
    </section>
  );
}