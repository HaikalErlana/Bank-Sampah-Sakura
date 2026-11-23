export default function HowItWorks() {
  const steps = [
    {
      num: '1',
      title: 'Pilah di rumah',
      desc: 'Pisahkan plastik, kertas, logam, dan kaca. Pastikan dalam keadaan bersih dan kering.',
      color: 'bg-pink-100 text-pink-600',
    },
    {
      num: '2',
      title: 'Setor ke bank sampah',
      desc: 'Bawa sampah yang sudah terpilah ke lokasi pos RW 05 pada jadwal penyetoran.',
      color: 'bg-green-100 text-sakura-green',
    },
    {
      num: '3',
      title: 'Ditimbang & dicatat',
      desc: 'Petugas menimbang sampah dan mencatatnya di buku tabungan nasabah.',
      color: 'bg-pink-100 text-pink-600',
    },
    {
      num: '4',
      title: 'Saldo bertambah',
      desc: 'Saldo dapat dicairkan atau diakumulasikan sesuai ketentuan pengurus.',
      color: 'bg-green-100 text-sakura-green',
    },
  ];

  return (
    <section id="cara-kerja" className="bg-sakura-greenLight py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs font-bold tracking-wider uppercase text-sakura-green block mb-2">
          CARA KERJA
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Empat langkah mudah menabung sampah.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="bg-white p-6 rounded-2xl shadow-sm border border-green-100">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold mb-4 ${step.color}`}>
                {step.num}
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}