import { useState, FormEvent } from 'react';
import { Search, FileText, CheckCircle2, Clock, XCircle } from 'lucide-react';

export default function CheckStatus() {
  const [reqNumber, setReqNumber] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Mock status result
  const statusResult = {
    number: reqNumber,
    type: 'Surat Keterangan Usaha (SKU)',
    date: '15 Okt 2023',
    applicant: 'Ahmad Fauzi',
    status: 'processing', // pending, processing, completed, rejected
    notes: 'Dokumen sedang diverifikasi oleh Kepala Desa.'
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!reqNumber.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setHasSearched(true);
    }, 1000);
  };

  const getStatusDisplay = (status: string) => {
    switch (status) {
      case 'pending':
        return { icon: Clock, color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-200', text: 'Menunggu Verifikasi' };
      case 'processing':
        return { icon: FileText, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-200', text: 'Sedang Diproses' };
      case 'completed':
        return { icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'Selesai / Siap Diambil' };
      case 'rejected':
        return { icon: XCircle, color: 'text-rose-500', bg: 'bg-rose-50', border: 'border-rose-200', text: 'Ditolak' };
      default:
        return { icon: Clock, color: 'text-slate-500', bg: 'bg-slate-50', border: 'border-slate-200', text: 'Tidak Diketahui' };
    }
  };

  const statusDisplay = getStatusDisplay(statusResult.status);
  const StatusIcon = statusDisplay.icon;

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Cek Status Permohonan</h1>
          <p className="text-lg text-slate-600">
            Masukkan nomor permohonan Anda untuk melihat status pengajuan surat secara real-time.
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 mb-8">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow">
              <label htmlFor="reqNumber" className="sr-only">Nomor Permohonan</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  id="reqNumber"
                  value={reqNumber}
                  onChange={(e) => setReqNumber(e.target.value.toUpperCase())}
                  className="block w-full pl-11 pr-4 py-4 border border-slate-300 rounded-xl leading-5 bg-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 sm:text-lg font-mono uppercase tracking-wider"
                  placeholder="Contoh: REQ-123456"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading || !reqNumber.trim()}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-70 transition-colors sm:w-auto w-full"
            >
              {isLoading ? 'Mencari...' : 'Cek Status'}
            </button>
          </form>
        </div>

        {/* Result */}
        {hasSearched && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-slate-800 p-6 text-white flex justify-between items-center flex-wrap gap-4">
              <div>
                <p className="text-slate-400 text-sm mb-1">Nomor Permohonan</p>
                <p className="text-2xl font-mono font-bold tracking-wider">{statusResult.number}</p>
              </div>
              <div className={`px-4 py-2 rounded-full flex items-center gap-2 border ${statusDisplay.bg} ${statusDisplay.border} ${statusDisplay.color} bg-opacity-20 backdrop-blur-sm`}>
                <StatusIcon className="w-5 h-5" />
                <span className="font-semibold">{statusDisplay.text}</span>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Jenis Layanan</p>
                  <p className="font-semibold text-slate-800">{statusResult.type}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Tanggal Pengajuan</p>
                  <p className="font-semibold text-slate-800">{statusResult.date}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Nama Pemohon</p>
                  <p className="font-semibold text-slate-800">{statusResult.applicant}</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <h3 className="text-sm font-medium text-slate-500 mb-3">Catatan Petugas:</h3>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 text-slate-700 italic">
                  "{statusResult.notes}"
                </div>
              </div>

              {statusResult.status === 'completed' && (
                <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
                  <h3 className="text-lg font-bold text-emerald-800 mb-2">Dokumen Siap Diambil</h3>
                  <p className="text-emerald-700 mb-4">Silakan datang ke Kantor Desa Nusantara pada jam kerja dengan membawa KTP asli.</p>
                  <p className="text-sm text-emerald-600 font-medium">Jam Pelayanan: Senin - Jumat (08:00 - 15:00 WIB)</p>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
