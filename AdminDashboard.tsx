import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, FileText, MessageSquare, PlusCircle, LogOut, CheckCircle2, XCircle, Clock } from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('pengajuan');

  // Mock Data
  const pengajuanList = [
    { id: 'REQ-123456', nama: 'Ahmad Fauzi', jenis: 'SKU', tanggal: '15 Okt 2023', status: 'pending' },
    { id: 'REQ-654321', nama: 'Siti Aminah', jenis: 'Domisili', tanggal: '14 Okt 2023', status: 'processing' },
    { id: 'REQ-987654', nama: 'Budi Santoso', jenis: 'SKTM', tanggal: '12 Okt 2023', status: 'completed' },
  ];

  const laporanList = [
    { id: 'LAP-001', kategori: 'Infrastruktur', lokasi: 'Jl. Merdeka RT 02', deskripsi: 'Jalan berlubang cukup dalam, membahayakan pengendara motor.', tanggal: '16 Okt 2023', status: 'baru' },
    { id: 'LAP-002', kategori: 'Lingkungan', lokasi: 'Sungai Brantas', deskripsi: 'Tumpukan sampah menyumbat aliran sungai.', tanggal: '15 Okt 2023', status: 'diproses' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
      case 'baru':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">Menunggu</span>;
      case 'processing':
      case 'diproses':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Diproses</span>;
      case 'completed':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">Selesai</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">Unknown</span>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-slate-900 text-white flex flex-col shrink-0">
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-sm">D</div>
            Admin Desa
          </h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('pengajuan')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'pengajuan' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <FileText className="w-5 h-5 shrink-0" /> <span className="text-left">Pengajuan Surat</span>
          </button>
          <button 
            onClick={() => setActiveTab('laporan')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'laporan' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <MessageSquare className="w-5 h-5 shrink-0" /> <span className="text-left">Laporan Warga</span>
          </button>
          <button 
            onClick={() => setActiveTab('berita')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'berita' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <LayoutDashboard className="w-5 h-5 shrink-0" /> <span className="text-left">Kelola Berita</span>
          </button>
        </nav>
        <div className="p-4 border-t border-slate-800 mt-auto">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-lg text-rose-400 hover:bg-slate-800 hover:text-rose-300 transition-colors">
            <LogOut className="w-5 h-5 shrink-0" /> Keluar
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          
          <header className="mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 capitalize">
                {activeTab === 'pengajuan' && 'Daftar Pengajuan Surat'}
                {activeTab === 'laporan' && 'Laporan Masyarakat'}
                {activeTab === 'berita' && 'Kelola Berita & Pengumuman'}
              </h2>
              <p className="text-slate-500 mt-1">Kelola data layanan desa dengan mudah.</p>
            </div>
            {activeTab === 'berita' && (
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors">
                <PlusCircle className="w-5 h-5" /> Tambah Berita
              </button>
            )}
          </header>

          {/* Content Area */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            
            {/* Pengajuan Tab */}
            {activeTab === 'pengajuan' && (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-600 text-sm uppercase tracking-wider border-b border-slate-200">
                      <th className="p-4 font-semibold">ID Permohonan</th>
                      <th className="p-4 font-semibold">Nama Pemohon</th>
                      <th className="p-4 font-semibold">Jenis Surat</th>
                      <th className="p-4 font-semibold">Tanggal</th>
                      <th className="p-4 font-semibold">Status</th>
                      <th className="p-4 font-semibold text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {pengajuanList.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50">
                        <td className="p-4 font-mono text-sm text-slate-600">{item.id}</td>
                        <td className="p-4 font-medium text-slate-800">{item.nama}</td>
                        <td className="p-4 text-slate-600">{item.jenis}</td>
                        <td className="p-4 text-slate-500 text-sm">{item.tanggal}</td>
                        <td className="p-4">{getStatusBadge(item.status)}</td>
                        <td className="p-4 text-right space-x-2">
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Detail</button>
                          <button className="text-emerald-600 hover:text-emerald-800 text-sm font-medium">Proses</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Laporan Tab */}
            {activeTab === 'laporan' && (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-600 text-sm uppercase tracking-wider border-b border-slate-200">
                      <th className="p-4 font-semibold">ID Laporan</th>
                      <th className="p-4 font-semibold">Kategori</th>
                      <th className="p-4 font-semibold">Lokasi</th>
                      <th className="p-4 font-semibold">Tanggal</th>
                      <th className="p-4 font-semibold">Status</th>
                      <th className="p-4 font-semibold text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {laporanList.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50">
                        <td className="p-4 font-mono text-sm text-slate-600">{item.id}</td>
                        <td className="p-4 font-medium text-slate-800">{item.kategori}</td>
                        <td className="p-4 text-slate-600 text-sm">{item.lokasi}</td>
                        <td className="p-4 text-slate-500 text-sm">{item.tanggal}</td>
                        <td className="p-4">{getStatusBadge(item.status)}</td>
                        <td className="p-4 text-right space-x-2">
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Lihat</button>
                          <button className="text-emerald-600 hover:text-emerald-800 text-sm font-medium">Tanggapi</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Berita Tab */}
            {activeTab === 'berita' && (
              <div className="p-8 text-center text-slate-500">
                <LayoutDashboard className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                <h3 className="text-xl font-medium text-slate-800 mb-2">Belum ada berita yang ditambahkan</h3>
                <p>Klik tombol "Tambah Berita" di pojok kanan atas untuk membuat artikel baru.</p>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}
