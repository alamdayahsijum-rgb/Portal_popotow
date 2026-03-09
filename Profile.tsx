import { Users, Map, Target, Award, Building } from 'lucide-react';

export default function Profile() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Profil Desa Nusantara</h1>
          <p className="text-lg text-slate-600">
            Mengenal lebih dekat sejarah, visi misi, dan struktur pemerintahan Desa Nusantara.
          </p>
        </div>

        {/* Sejarah */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Building className="w-6 h-6 text-emerald-600" /> Sejarah Desa
              </h2>
              <div className="prose prose-slate text-slate-600">
                <p className="mb-4">
                  Desa Nusantara didirikan pada tahun 1945, bersamaan dengan kemerdekaan Republik Indonesia. Nama "Nusantara" dipilih oleh para tetua desa sebagai simbol persatuan dan keberagaman warga yang berasal dari berbagai suku bangsa yang menetap di wilayah ini.
                </p>
                <p>
                  Awalnya, desa ini merupakan kawasan pertanian yang subur. Seiring berjalannya waktu dan perkembangan zaman, Desa Nusantara bertransformasi menjadi desa semi-perkotaan yang mandiri, dengan tetap mempertahankan nilai-nilai gotong royong dan kearifan lokal.
                </p>
              </div>
            </div>
            <div className="bg-slate-200 min-h-[300px] relative">
              <img 
                src="https://picsum.photos/seed/sejarahdesa/800/600" 
                alt="Sejarah Desa" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Visi Misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-emerald-600" /> Visi
            </h2>
            <p className="text-xl text-slate-700 font-medium italic leading-relaxed">
              "Terwujudnya Desa Nusantara yang Mandiri, Sejahtera, Berbudaya, dan Berwawasan Lingkungan melalui Tata Kelola Pemerintahan yang Baik."
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-emerald-600" /> Misi
            </h2>
            <ul className="space-y-4 text-slate-600 list-disc list-inside">
              <li>Meningkatkan kualitas pelayanan publik yang cepat, tepat, dan transparan.</li>
              <li>Membangun infrastruktur desa yang memadai dan berwawasan lingkungan.</li>
              <li>Meningkatkan perekonomian masyarakat melalui pemberdayaan UMKM dan BUMDes.</li>
              <li>Melestarikan nilai-nilai budaya dan kearifan lokal dalam kehidupan bermasyarakat.</li>
              <li>Meningkatkan kualitas pendidikan dan kesehatan masyarakat.</li>
            </ul>
          </div>
        </div>

        {/* Struktur Organisasi */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center flex items-center justify-center gap-2">
            <Users className="w-6 h-6 text-emerald-600" /> Struktur Organisasi Pemerintahan
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Kades */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-emerald-100 mb-3">
                <img src="https://picsum.photos/seed/kades/200/200" alt="Kepala Desa" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="font-bold text-slate-800">Budi Santoso, S.E.</h3>
              <p className="text-sm text-emerald-600 font-medium">Kepala Desa</p>
            </div>

            {/* Sekdes */}
            <div className="flex flex-col items-center mb-12 relative">
              <div className="absolute w-px h-8 bg-slate-300 -top-8"></div>
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-slate-100 mb-3">
                <img src="https://picsum.photos/seed/sekdes/200/200" alt="Sekretaris Desa" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="font-bold text-slate-800">Siti Aminah, S.AP.</h3>
              <p className="text-sm text-slate-500">Sekretaris Desa</p>
            </div>

            {/* Kasi & Kaur */}
            <div className="relative">
              <div className="absolute w-full h-px bg-slate-300 top-0 left-0"></div>
              <div className="absolute w-px h-8 bg-slate-300 top-0 left-1/2 -translate-x-1/2 -mt-8"></div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {[
                  { name: 'Ahmad Fauzi', role: 'Kaur Keuangan', seed: 'kaur1' },
                  { name: 'Dewi Lestari', role: 'Kaur Umum', seed: 'kaur2' },
                  { name: 'Rudi Hermawan', role: 'Kasi Pemerintahan', seed: 'kasi1' },
                  { name: 'Hendra Saputra', role: 'Kasi Kesejahteraan', seed: 'kasi2' },
                ].map((person, idx) => (
                  <div key={idx} className="flex flex-col items-center relative">
                    <div className="absolute w-px h-8 bg-slate-300 -top-8"></div>
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 mb-3">
                      <img src={`https://picsum.photos/seed/${person.seed}/200/200`} alt={person.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <h3 className="font-semibold text-slate-800 text-sm text-center">{person.name}</h3>
                    <p className="text-xs text-slate-500 text-center">{person.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Peta Wilayah */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Map className="w-6 h-6 text-emerald-600" /> Peta Wilayah Desa
          </h2>
          <div className="aspect-video bg-slate-200 rounded-xl overflow-hidden relative">
            {/* Placeholder for actual map */}
            <img src="https://picsum.photos/seed/map/1200/600?blur=2" alt="Peta Wilayah" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <Map className="w-12 h-12 text-slate-400 mb-2" />
              <p className="text-slate-500 font-medium">Integrasi Google Maps dapat ditambahkan di sini</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-600">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <span className="font-semibold block mb-1 text-slate-800">Batas Utara:</span>
              Desa Makmur Jaya
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <span className="font-semibold block mb-1 text-slate-800">Batas Selatan:</span>
              Sungai Brantas
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <span className="font-semibold block mb-1 text-slate-800">Batas Timur:</span>
              Kecamatan Sejahtera
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
