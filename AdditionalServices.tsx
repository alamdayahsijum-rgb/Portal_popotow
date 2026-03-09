import { ExternalLink, Car, HeartPulse, Wallet, ShieldCheck, BookOpen } from 'lucide-react';

export default function AdditionalServices() {
  const externalLinks = [
    {
      title: 'Cek Pajak Kendaraan',
      description: 'Layanan pengecekan pajak kendaraan bermotor (E-Samsat) provinsi.',
      icon: Car,
      url: '#',
      color: 'blue'
    },
    {
      title: 'BPJS Kesehatan',
      description: 'Portal layanan peserta Jaminan Kesehatan Nasional (JKN-KIS).',
      icon: HeartPulse,
      url: '#',
      color: 'emerald'
    },
    {
      title: 'Cek Bansos Kemensos',
      description: 'Pengecekan data penerima Bantuan Sosial dari Kementerian Sosial RI.',
      icon: Wallet,
      url: '#',
      color: 'amber'
    },
    {
      title: 'Lapor Polisi (Polsek)',
      description: 'Layanan pelaporan tindak kriminal atau gangguan Kamtibmas secara online.',
      icon: ShieldCheck,
      url: '#',
      color: 'rose'
    },
    {
      title: 'Portal Pendidikan',
      description: 'Informasi beasiswa dan pendaftaran sekolah (PPDB) tingkat daerah.',
      icon: BookOpen,
      url: '#',
      color: 'purple'
    }
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Layanan Publik Tambahan</h1>
          <p className="text-lg text-slate-600">
            Akses cepat menuju berbagai layanan publik dari instansi pemerintah daerah maupun pusat untuk mempermudah urusan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {externalLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-emerald-300 transition-all group flex flex-col h-full"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-${link.color}-50 text-${link.color}-600`}>
                <link.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                {link.title}
              </h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow">
                {link.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 mt-auto">
                Kunjungi Situs <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 bg-emerald-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Butuh Bantuan Lainnya?</h2>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Jika Anda tidak menemukan layanan yang dicari, silakan hubungi petugas desa melalui fitur Chatbot di pojok kanan bawah atau datang langsung ke Balai Desa Nusantara.
          </p>
          <div className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-lg text-white hover:bg-emerald-700 transition-colors">
            Hubungi Kami
          </div>
        </div>

      </div>
    </div>
  );
}
