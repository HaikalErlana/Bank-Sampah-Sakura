export default function Stats() {
  const statsData = [
    { value: '120+', label: 'Nasabah terdaftar' },
    { value: '1.450 kg', label: 'Sampah terkumpul' },
    { value: 'Rp 4.250.000', label: 'Saldo tersalurkan ke nasabah' },
    { value: '2024', label: 'Mulai beroperasi' },
  ];

  return (
    <section className="bg-sakura-green py-10 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {statsData.map((item, idx) => (
          <div key={idx}>
            <div className="text-2xl md:text-4xl font-extrabold mb-1">{item.value}</div>
            <div className="text-xs md:text-sm text-green-100">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}