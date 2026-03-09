import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Search, Tag } from 'lucide-react';

export default function News() {
  const newsList = [
    {
      id: 1,
      title: 'Kerja Bakti Massal Persiapan Musim Penghujan',
      excerpt: 'Warga Desa Nusantara bergotong royong membersihkan saluran air dan lingkungan sekitar untuk mengantisipasi banjir di musim penghujan yang akan datang.',
      date: '12 Okt 2023',
      category: 'Kegiatan',
      image: 'https://picsum.photos/seed/gotongroyong/800/450'
    },
    {
      id: 2,
      title: 'Jadwal Pembagian BLT Dana Desa Tahap III',
      excerpt: 'Pemerintah Desa Nusantara akan menyalurkan Bantuan Langsung Tunai (BLT) Dana Desa Tahap III pada hari Senin minggu depan di Balai Desa.',
      date: '10 Okt 2023',
      category: 'Pengumuman',
      image: 'https://picsum.photos/seed/blt/800/450'
    },
    {
      id: 3,
      title: 'Pelayanan Perekaman E-KTP Keliling',
      excerpt: 'Dinas Dukcapil Kabupaten akan mengadakan pelayanan perekaman E-KTP keliling di Desa Nusantara untuk mempermudah warga yang belum memiliki KTP.',
      date: '08 Okt 2023',
      category: 'Layanan',
      image: 'https://picsum.photos/seed/ktp/800/450'
    },
    {
      id: 4,
      title: 'Pendaftaran Lomba Desa Bersih Tingkat RT',
      excerpt: 'Dalam rangka menyambut Hari Jadi Desa, Pemerintah Desa mengadakan lomba kebersihan tingkat RT dengan hadiah menarik.',
      date: '05 Okt 2023',
      category: 'Pengumuman',
      image: 'https://picsum.photos/seed/lomba/800/450'
    },
    {
      id: 5,
      title: 'Sosialisasi Pencegahan Stunting di Balai Desa',
      excerpt: 'Puskesmas setempat bekerja sama dengan kader Posyandu desa mengadakan sosialisasi pentingnya gizi seimbang untuk mencegah stunting pada balita.',
      date: '01 Okt 2023',
      category: 'Kesehatan',
      image: 'https://picsum.photos/seed/stunting/800/450'
    },
    {
      id: 6,
      title: 'Pelatihan Kewirausahaan untuk Pemuda Karang Taruna',
      excerpt: 'Meningkatkan kapasitas pemuda desa melalui pelatihan kewirausahaan digital dan pemasaran online produk UMKM lokal.',
      date: '28 Sep 2023',
      category: 'Pemberdayaan',
      image: 'https://picsum.photos/seed/pelatihan/800/450'
    }
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Berita & Pengumuman</h1>
            <p className="text-lg text-slate-600">
              Dapatkan informasi terbaru seputar kegiatan, program, dan pengumuman resmi dari Pemerintah Desa Nusantara.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Cari berita..." 
                className="w-full md:w-80 pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button className="px-4 py-1.5 rounded-full bg-emerald-600 text-white text-sm font-medium">Semua</button>
          <button className="px-4 py-1.5 rounded-full bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 text-sm font-medium transition-colors">Pengumuman</button>
          <button className="px-4 py-1.5 rounded-full bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 text-sm font-medium transition-colors">Kegiatan</button>
          <button className="px-4 py-1.5 rounded-full bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 text-sm font-medium transition-colors">Layanan</button>
          <button className="px-4 py-1.5 rounded-full bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 text-sm font-medium transition-colors">Pemberdayaan</button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsList.map((news) => (
            <Link key={news.id} to={`/berita/${news.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col h-full">
              <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden shrink-0">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Tag className="w-3 h-3" /> {news.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <Calendar className="w-4 h-4" /> {news.date}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">
                  {news.excerpt}
                </p>
                <div className="text-emerald-600 font-medium text-sm flex items-center gap-1 mt-auto">
                  Baca selengkapnya <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-lg border border-slate-300 flex items-center justify-center text-slate-500 hover:bg-slate-50 disabled:opacity-50" disabled>
              &laquo;
            </button>
            <button className="w-10 h-10 rounded-lg bg-emerald-600 text-white font-medium flex items-center justify-center">
              1
            </button>
            <button className="w-10 h-10 rounded-lg border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-50 font-medium">
              2
            </button>
            <button className="w-10 h-10 rounded-lg border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-50 font-medium">
              3
            </button>
            <button className="w-10 h-10 rounded-lg border border-slate-300 flex items-center justify-center text-slate-500 hover:bg-slate-50">
              &raquo;
            </button>
          </nav>
        </div>

      </div>
    </div>
  );
}
