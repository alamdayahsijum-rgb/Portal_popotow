import { useState, FormEvent } from 'react';
import { AlertTriangle, Upload, CheckCircle2, MapPin, Camera } from 'lucide-react';

export default function Complaints() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="py-12 bg-slate-50 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Laporan Terkirim!</h2>
            <p className="text-slate-600 mb-6">
              Terima kasih atas laporan Anda. Kami akan segera menindaklanjuti pengaduan ini demi kenyamanan bersama.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="w-full inline-flex justify-center items-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
            >
              Buat Laporan Baru
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Pengaduan Masyarakat</h1>
          <p className="text-lg text-slate-600">
            Laporkan masalah infrastruktur, pelayanan, atau lingkungan di sekitar Anda. Partisipasi Anda sangat berarti bagi kemajuan desa.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-rose-600 p-6 md:p-8 text-white flex items-center gap-4">
            <AlertTriangle className="w-10 h-10 shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-1">Formulir Pengaduan</h2>
              <p className="text-rose-100">Kerahasiaan identitas pelapor dijamin oleh Pemerintah Desa.</p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Kategori */}
              <div>
                <label htmlFor="kategori" className="block text-sm font-medium text-slate-700 mb-1">Kategori Laporan <span className="text-red-500">*</span></label>
                <select id="kategori" required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 bg-white">
                  <option value="">Pilih kategori masalah...</option>
                  <option value="infrastruktur">Infrastruktur (Jalan Rusak, Jembatan, dll)</option>
                  <option value="lingkungan">Lingkungan (Sampah, Banjir, dll)</option>
                  <option value="pelayanan">Pelayanan Publik</option>
                  <option value="keamanan">Keamanan & Ketertiban</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>

              {/* Lokasi */}
              <div>
                <label htmlFor="lokasi" className="block text-sm font-medium text-slate-700 mb-1">Lokasi Kejadian <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-slate-400" />
                  </div>
                  <input type="text" id="lokasi" required className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500" placeholder="Contoh: Jl. Merdeka RT 02/RW 01" />
                </div>
              </div>

              {/* Deskripsi */}
              <div>
                <label htmlFor="deskripsi" className="block text-sm font-medium text-slate-700 mb-1">Deskripsi Laporan <span className="text-red-500">*</span></label>
                <textarea id="deskripsi" rows={5} required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500" placeholder="Jelaskan secara detail masalah yang Anda temui..."></textarea>
              </div>

              {/* Foto */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Unggah Foto Bukti <span className="text-red-500">*</span></label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                  <div className="space-y-1 text-center">
                    <Camera className="mx-auto h-12 w-12 text-slate-400" />
                    <div className="flex text-sm text-slate-600 justify-center">
                      <label htmlFor="foto" className="relative cursor-pointer bg-white rounded-md font-medium text-rose-600 hover:text-rose-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-rose-500">
                        <span>Pilih foto</span>
                        <input id="foto" name="foto" type="file" className="sr-only" accept="image/*" required />
                      </label>
                      <p className="pl-1">atau ambil gambar</p>
                    </div>
                    <p className="text-xs text-slate-500">Maksimal 5MB (JPG, PNG)</p>
                  </div>
                </div>
              </div>

              {/* Identitas (Opsional) */}
              <div className="pt-6 border-t border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Identitas Pelapor (Opsional)</h3>
                <p className="text-sm text-slate-500 mb-4">Anda dapat mengosongkan bagian ini jika ingin melapor secara anonim.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nama" className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                    <input type="text" id="nama" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500" placeholder="Nama Anda" />
                  </div>
                  <div>
                    <label htmlFor="telepon" className="block text-sm font-medium text-slate-700 mb-1">Nomor Telepon / WA</label>
                    <input type="tel" id="telepon" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500" placeholder="08xxxxxxxxxx" />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? 'Mengirim Laporan...' : 'Kirim Laporan'}
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
