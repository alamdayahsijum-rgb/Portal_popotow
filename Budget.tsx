import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { DollarSign, TrendingUp, Activity, PieChart as PieChartIcon } from 'lucide-react';

export default function Budget() {
  const budgetData = [
    { name: 'Penyelenggaraan Pemerintahan', value: 450000000, color: '#059669' },
    { name: 'Pelaksanaan Pembangunan', value: 850000000, color: '#2563eb' },
    { name: 'Pembinaan Kemasyarakatan', value: 150000000, color: '#d97706' },
    { name: 'Pemberdayaan Masyarakat', value: 250000000, color: '#7c3aed' },
    { name: 'Penanggulangan Bencana', value: 100000000, color: '#e11d48' },
  ];

  const incomeData = [
    { name: 'Dana Desa (DD)', value: 1200000000, color: '#059669' },
    { name: 'Alokasi Dana Desa (ADD)', value: 450000000, color: '#2563eb' },
    { name: 'Bagi Hasil Pajak', value: 80000000, color: '#d97706' },
    { name: 'Pendapatan Asli Desa', value: 70000000, color: '#7c3aed' },
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
  };

  const totalBudget = budgetData.reduce((sum, item) => sum + item.value, 0);
  const totalIncome = incomeData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Transparansi Anggaran</h1>
          <p className="text-lg text-slate-600">
            Laporan Anggaran Pendapatan dan Belanja Desa (APBDes) Tahun Anggaran 2023. Kami berkomitmen untuk mengelola dana desa secara transparan dan akuntabel.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Total Pendapatan</p>
                <h3 className="text-2xl font-bold text-slate-800">{formatCurrency(totalIncome)}</h3>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Total Belanja</p>
                <h3 className="text-2xl font-bold text-slate-800">{formatCurrency(totalBudget)}</h3>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Sisa Lebih Perhitungan (SiLPA)</p>
                <h3 className="text-2xl font-bold text-slate-800">{formatCurrency(totalIncome - totalBudget)}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Pendapatan Chart */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <PieChartIcon className="w-5 h-5 text-emerald-600" /> Rincian Pendapatan Desa
            </h2>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={incomeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {incomeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => formatCurrency(value)} />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Belanja Chart */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <PieChartIcon className="w-5 h-5 text-blue-600" /> Rincian Belanja Desa
            </h2>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={budgetData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" tickFormatter={(value) => `Rp ${value / 1000000}Jt`} />
                  <YAxis dataKey="name" type="category" width={150} tick={{fontSize: 12}} />
                  <Tooltip formatter={(value: number) => formatCurrency(value)} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {budgetData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Proyek Pembangunan */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 md:p-8 border-b border-slate-200 bg-slate-50">
            <h2 className="text-2xl font-bold text-slate-800">Daftar Proyek Pembangunan 2023</h2>
            <p className="text-slate-600">Status pelaksanaan proyek fisik di Desa Nusantara.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 text-sm uppercase tracking-wider">
                  <th className="p-4 font-semibold">Nama Proyek</th>
                  <th className="p-4 font-semibold">Lokasi</th>
                  <th className="p-4 font-semibold">Anggaran</th>
                  <th className="p-4 font-semibold">Sumber Dana</th>
                  <th className="p-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="text-slate-600 divide-y divide-slate-200">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-800">Pengaspalan Jalan Poros Desa</td>
                  <td className="p-4">Dusun Krajan RT 01-05</td>
                  <td className="p-4 font-mono">{formatCurrency(350000000)}</td>
                  <td className="p-4">Dana Desa</td>
                  <td className="p-4"><span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">Selesai 100%</span></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-800">Pembangunan Saluran Drainase</td>
                  <td className="p-4">Dusun Sukamaju RT 02</td>
                  <td className="p-4 font-mono">{formatCurrency(120000000)}</td>
                  <td className="p-4">Dana Desa</td>
                  <td className="p-4"><span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">Berjalan 75%</span></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-800">Rehabilitasi Gedung PAUD</td>
                  <td className="p-4">Komplek Balai Desa</td>
                  <td className="p-4 font-mono">{formatCurrency(85000000)}</td>
                  <td className="p-4">ADD</td>
                  <td className="p-4"><span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">Persiapan</span></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-800">Pemasangan Lampu Penerangan Jalan</td>
                  <td className="p-4">Sepanjang Jalan Utama</td>
                  <td className="p-4 font-mono">{formatCurrency(45000000)}</td>
                  <td className="p-4">PADes</td>
                  <td className="p-4"><span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">Selesai 100%</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
