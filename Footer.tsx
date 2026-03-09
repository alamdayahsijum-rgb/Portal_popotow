import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                D
              </div>
              <div>
                <h2 className="text-white font-bold text-lg">Pemerintah Desa Nusantara</h2>
                <p className="text-sm text-slate-400">Kabupaten Maju Jaya</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Portal resmi layanan publik dan informasi Desa Nusantara. Mewujudkan desa yang mandiri, sejahtera, dan berbudaya.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Kontak Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Jl. Raya Desa Nusantara No. 1, Kec. Makmur, Kab. Maju Jaya, 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>(021) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>kontak@desanusantara.go.id</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/layanan" className="hover:text-emerald-400 transition-colors">Layanan Online</Link></li>
              <li><Link to="/pengaduan" className="hover:text-emerald-400 transition-colors">Pengaduan Masyarakat</Link></li>
              <li><Link to="/anggaran" className="hover:text-emerald-400 transition-colors">Transparansi Anggaran</Link></li>
              <li><Link to="/admin" className="hover:text-emerald-400 transition-colors">Login Admin</Link></li>
            </ul>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Pemerintah Desa Nusantara. Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  );
}
