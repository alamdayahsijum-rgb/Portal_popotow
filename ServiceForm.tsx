import { useState, FormEvent } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ServiceForm() {
  const { jenis } = useParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [reqNumber, setReqNumber] = useState('');

  const serviceTitles: Record<string, string> = {
    'sku': 'Surat Keterangan Usaha (SKU)',
    'domisili': 'Surat Keterangan Domisili',
    'nikah': 'Surat Pengantar Nikah',
    'sktm': 'Surat Keterangan Tidak Mampu (SKTM)',
  };

  const title = serviceTitles[jenis || ''] || 'Layanan Administrasi';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Generate random request number
      setReqNumber(`REQ-${Math.floor(100000 + Math.random() * 900000)}`);
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
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Pengajuan Berhasil!</h2>
            <p className="text-slate-600 mb-6">
              Permohonan {title} Anda telah berhasil dikirim dan sedang diproses oleh petugas desa.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-8">
              <p className="text-sm text-slate-500 mb-1">Nomor Permohonan Anda:</p>
              <p className="text-2xl font-mono font-bold text-slate-800 tracking-wider">{reqNumber}</p>
              <p className="text-xs text-slate-400 mt-2">Simpan nomor ini untuk mengecek status permohonan.</p>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/status" className="w-full inline-flex justify-center items-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition-colors">
                Cek Status Permohonan
              </Link>
              <Link to="/layanan" className="w-full inline-flex justify-center items-center px-4 py-2.5 border border-slate-300 text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors">
                Kembali ke Layanan
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/layanan" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Kembali ke Daftar Layanan
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-emerald-700 p-6 md:p-8 text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Formulir Pengajuan</h1>
            <p className="text-emerald-100 text-lg">{title}</p>
          </div>

          <div className="p-6 md:p-8">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 mb-8 text-blue-800 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p>Pastikan data yang Anda masukkan sesuai dengan KTP dan Kartu Keluarga. Dokumen persyaratan yang diunggah harus jelas dan dapat terbaca.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Data Diri */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4 border-b border-slate-200 pb-2">Data Pemohon</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-2">
                    <label htmlFor="nama" className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap (Sesuai KTP) <span className="text-red-500">*</span></label>
                    <input type="text" id="nama" required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="Masukkan nama lengkap" />
                  </div>
                  <div>
                    <label htmlFor="nik" className="block text-sm font-medium text-slate-700 mb-1">Nomor Induk Kependudukan (NIK) <span className="text-red-500">*</span></label>
                    <input type="text" id="nik" required pattern="[0-9]{16}" title="NIK harus 16 digit angka" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="16 digit NIK" />
                  </div>
                  <div>
                    <label htmlFor="kk" className="block text-sm font-medium text-slate-700 mb-1">Nomor Kartu Keluarga (KK) <span className="text-red-500">*</span></label>
                    <input type="text" id="kk" required pattern="[0-9]{16}" title="No KK harus 16 digit angka" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="16 digit No KK" />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="alamat" className="block text-sm font-medium text-slate-700 mb-1">Alamat Lengkap <span className="text-red-500">*</span></label>
                    <textarea id="alamat" rows={3} required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="Nama jalan, RT/RW, Dusun"></textarea>
                  </div>
                  <div>
                    <label htmlFor="telepon" className="block text-sm font-medium text-slate-700 mb-1">Nomor Telepon / WhatsApp <span className="text-red-500">*</span></label>
                    <input type="tel" id="telepon" required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="08xxxxxxxxxx" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email (Opsional)</label>
                    <input type="email" id="email" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="email@contoh.com" />
                  </div>
                </div>
              </div>

              {/* Keterangan Tambahan */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4 border-b border-slate-200 pb-2 mt-8">Keterangan Tambahan</h3>
                <div className="col-span-2">
                  <label htmlFor="keterangan" className="block text-sm font-medium text-slate-700 mb-1">Keperluan Pembuatan Surat <span className="text-red-500">*</span></label>
                  <textarea id="keterangan" rows={3} required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="Jelaskan secara singkat untuk keperluan apa surat ini dibuat"></textarea>
                </div>
              </div>

              {/* Upload Dokumen */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4 border-b border-slate-200 pb-2 mt-8">Unggah Dokumen Persyaratan</h3>
                <div className="space-y-4">
                  {[
                    { id: 'file-ktp', label: 'Foto/Scan KTP' },
                    { id: 'file-kk', label: 'Foto/Scan Kartu Keluarga' },
                    { id: 'file-pengantar', label: 'Surat Pengantar RT/RW' }
                  ].map((doc) => (
                    <div key={doc.id}>
                      <label className="block text-sm font-medium text-slate-700 mb-1">{doc.label} <span className="text-red-500">*</span></label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-8 w-8 text-slate-400" />
                          <div className="flex text-sm text-slate-600 justify-center">
                            <label htmlFor={doc.id} className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500">
                              <span>Unggah file</span>
                              <input id={doc.id} name={doc.id} type="file" className="sr-only" accept="image/*,.pdf" required />
                            </label>
                            <p className="pl-1">atau drag and drop</p>
                          </div>
                          <p className="text-xs text-slate-500">PNG, JPG, PDF maksimal 2MB</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6 border-t border-slate-200">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? 'Memproses Pengajuan...' : 'Kirim Pengajuan'}
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
