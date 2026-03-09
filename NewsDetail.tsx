import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowLeft, Share2 } from 'lucide-react';

export default function NewsDetail() {
  const { id } = useParams();

  // Mock data for demonstration
  const news = {
    id: id,
    title: 'Kerja Bakti Massal Persiapan Musim Penghujan',
    content: `
      <p>Menjelang datangnya musim penghujan, Pemerintah Desa Nusantara bersama seluruh elemen masyarakat mengadakan kegiatan kerja bakti massal pada hari Minggu, 12 Oktober 2023. Kegiatan ini difokuskan pada pembersihan saluran air (drainase) utama desa dan area pemukiman warga yang rawan genangan air.</p>
      <p>Kepala Desa Nusantara, Bapak Budi Santoso, S.E., yang turut hadir dan memimpin langsung kegiatan ini menyampaikan bahwa kerja bakti ini merupakan langkah antisipasi dini. "Kita tidak ingin menunggu sampai banjir terjadi. Dengan membersihkan saluran air sekarang, kita berharap aliran air akan lancar saat hujan lebat turun," ujarnya.</p>
      <p>Kegiatan yang dimulai sejak pukul 07.00 WIB ini diikuti oleh ratusan warga dari 12 RT. Selain membersihkan selokan, warga juga bergotong royong memangkas dahan pohon yang rawan tumbang dan membersihkan fasilitas umum desa.</p>
      <p>Pemerintah Desa juga menghimbau kepada seluruh warga untuk terus menjaga kebersihan lingkungan masing-masing dan tidak membuang sampah sembarangan, terutama ke sungai atau saluran air. "Kerja bakti ini bukan hanya kegiatan seremonial, tapi harus menjadi budaya kita sehari-hari," tambah Bapak Budi.</p>
      <p>Kegiatan ditutup pada pukul 11.00 WIB dengan makan siang bersama yang disediakan oleh ibu-ibu PKK Desa Nusantara, menambah keakraban dan semangat gotong royong antar warga.</p>
    `,
    date: '12 Okt 2023',
    author: 'Admin Desa',
    category: 'Kegiatan',
    image: 'https://picsum.photos/seed/gotongroyong/1200/600'
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link to="/berita" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Kembali ke Daftar Berita
        </Link>

        {/* Article Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
          <div className="aspect-video bg-slate-200 relative">
            <img 
              src={news.image} 
              alt={news.title} 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer" 
            />
          </div>
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
              <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full font-medium">
                <Tag className="w-4 h-4" /> {news.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> {news.date}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" /> {news.author}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              {news.title}
            </h1>

            {/* Content */}
            <div 
              className="prose prose-slate prose-lg max-w-none prose-p:leading-relaxed prose-a:text-emerald-600 hover:prose-a:text-emerald-700"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-slate-200 flex items-center justify-between">
              <span className="text-slate-600 font-medium">Bagikan berita ini:</span>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
