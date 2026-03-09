import { Link } from 'react-router-dom';
import { FileText, Users, Home as HomeIcon, Map, ArrowRight, Calendar, Megaphone } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-emerald-800 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/village/1920/1080?blur=2')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Selamat Datang di Portal Resmi Desa Nusantara
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 mb-8 leading-relaxed">
              Mewujudkan pelayanan publik yang transparan, cepat, dan mudah diakses oleh seluruh lapisan masyarakat demi kemajuan bersama.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/layanan" className="bg-white text-emerald-800 hover:bg-emerald-50 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                Layanan Online <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/profil" className="bg-emerald-700 hover:bg-emerald-600 border border-emerald-500 px-6 py-3 rounded-lg font-semibold transition-colors">
                Profil Desa
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-1">4.521</h3>
              <p className="text-slate-500 text-sm font-medium">Total Penduduk</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <HomeIcon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-1">1.205</h3>
              <p className="text-slate-500 text-sm font-medium">Kepala Keluarga</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600 mb-4">
                <Map className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-1">12 / 4</h3>
              <p className="text-slate-500 text-sm font-medium">RT / RW</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                <Map className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-1">450 Ha</h3>
              <p className="text-slate-500 text-sm font-medium">Luas Wilayah</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sambutan Kepala Desa */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="h-64 md:h-auto bg-slate-200 relative">
                <img 
                  src="https://picsum.photos/seed/kades/600/800" 
                  alt="Kepala Desa" 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 md:p-12 md:col-span-2 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Sambutan Kepala Desa</h2>
                <h3 className="text-emerald-600 font-medium mb-6">Bpk. Budi Santoso, S.E.</h3>
                <blockquote className="text-slate-600 italic mb-6 leading-relaxed">
                  "Puji syukur kita panjatkan kehadirat Tuhan Yang Maha Esa. Melalui website ini, kami berharap dapat memberikan pelayanan yang lebih baik, transparan, dan akuntabel kepada seluruh warga Desa Nusantara. Mari bersama-sama membangun desa kita tercinta menjadi desa yang mandiri dan sejahtera."
                </blockquote>
                <Link to="/profil" className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center gap-1 w-fit">
                  Baca selengkapnya <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan Cepat */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Layanan Publik</h2>
            <p className="text-slate-600">Akses berbagai layanan administrasi desa secara online tanpa harus datang ke kantor desa.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Surat Keterangan Usaha', icon: FileText, color: 'bg-blue-50 text-blue-600 border-blue-100', link: '/layanan/sku' },
              { title: 'Surat Domisili', icon: HomeIcon, color: 'bg-emerald-50 text-emerald-600 border-emerald-100', link: '/layanan/domisili' },
              { title: 'Surat Pengantar Nikah', icon: Users, color: 'bg-rose-50 text-rose-600 border-rose-100', link: '/layanan/nikah' },
              { title: 'Surat Keterangan Tidak Mampu', icon: FileText, color: 'bg-amber-50 text-amber-600 border-amber-100', link: '/layanan/sktm' },
            ].map((service, idx) => (
              <Link key={idx} to={service.link} className={`block p-6 rounded-xl border ${service.color} hover:shadow-md transition-all hover:-translate-y-1 bg-white`}>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${service.color.split(' ')[0]} ${service.color.split(' ')[1]}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-500 flex items-center gap-1 mt-4 font-medium">
                  Ajukan sekarang <ArrowRight className="w-4 h-4" />
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/layanan" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-colors">
              Lihat Semua Layanan
            </Link>
          </div>
        </div>
      </section>

      {/* Berita & Pengumuman */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Berita & Pengumuman</h2>
              <p className="text-slate-600">Informasi terbaru seputar kegiatan desa.</p>
            </div>
            <Link to="/berita" className="hidden sm:flex text-emerald-600 font-medium hover:text-emerald-700 items-center gap-1">
              Lihat semua <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Berita Utama */}
            <div className="md:col-span-2">
              <Link to="/berita/1" className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="aspect-video bg-slate-200 relative overflow-hidden">
                  <img src="https://picsum.photos/seed/gotongroyong/800/450" alt="Gotong Royong" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Kegiatan
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 12 Okt 2023</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors">Kerja Bakti Massal Persiapan Musim Penghujan</h3>
                  <p className="text-slate-600 line-clamp-2">Warga Desa Nusantara bergotong royong membersihkan saluran air dan lingkungan sekitar untuk mengantisipasi banjir di musim penghujan yang akan datang.</p>
                </div>
              </Link>
            </div>

            {/* Pengumuman List */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2 mb-4">
                <Megaphone className="w-5 h-5 text-amber-500" /> Pengumuman Penting
              </h3>
              {[
                { id: 2, title: 'Jadwal Pembagian BLT Dana Desa Tahap III', date: '10 Okt 2023' },
                { id: 3, title: 'Pelayanan Perekaman E-KTP Keliling', date: '08 Okt 2023' },
                { id: 4, title: 'Pendaftaran Lomba Desa Bersih Tingkat RT', date: '05 Okt 2023' },
                { id: 5, title: 'Sosialisasi Pencegahan Stunting di Balai Desa', date: '01 Okt 2023' },
              ].map((item) => (
                <Link key={item.id} to={`/berita/${item.id}`} className="block bg-white p-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all">
                  <div className="text-xs text-emerald-600 font-medium mb-1">{item.date}</div>
                  <h4 className="font-semibold text-slate-800 text-sm line-clamp-2 hover:text-emerald-600 transition-colors">{item.title}</h4>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 sm:hidden text-center">
            <Link to="/berita" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-colors w-full">
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
