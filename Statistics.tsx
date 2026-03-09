import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Users, GraduationCap, Briefcase, HeartPulse } from 'lucide-react';

export default function Statistics() {
  const genderData = [
    { name: 'Laki-laki', value: 2310, color: '#3b82f6' },
    { name: 'Perempuan', value: 2211, color: '#ec4899' },
  ];

  const educationData = [
    { name: 'Tidak/Belum Sekolah', value: 450, color: '#94a3b8' },
    { name: 'SD/Sederajat', value: 1200, color: '#f59e0b' },
    { name: 'SMP/Sederajat', value: 1150, color: '#10b981' },
    { name: 'SMA/Sederajat', value: 1300, color: '#3b82f6' },
    { name: 'Diploma/Sarjana', value: 421, color: '#8b5cf6' },
  ];

  const occupationData = [
    { name: 'Petani/Pekebun', value: 1500 },
    { name: 'Wiraswasta/Pedagang', value: 850 },
    { name: 'Karyawan Swasta', value: 620 },
    { name: 'PNS/TNI/Polri', value: 180 },
    { name: 'Pelajar/Mahasiswa', value: 950 },
    { name: 'Lainnya/Belum Bekerja', value: 421 },
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Data & Statistik Desa</h1>
          <p className="text-lg text-slate-600">
            Informasi demografi dan statistik kependudukan Desa Nusantara berdasarkan data terbaru tahun 2023.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-1">4.521</h3>
            <p className="text-slate-500 text-sm font-medium">Total Penduduk</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-1">1.721</h3>
            <p className="text-slate-500 text-sm font-medium">Lulusan SMA/PT</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-1">3.150</h3>
            <p className="text-slate-500 text-sm font-medium">Usia Produktif</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-1">350</h3>
            <p className="text-slate-500 text-sm font-medium">Lansia</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Gender Chart */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
            <h2 className="text-xl font-bold text-slate-800 mb-6 text-center">Berdasarkan Jenis Kelamin</h2>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Education Chart */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
            <h2 className="text-xl font-bold text-slate-800 mb-6 text-center">Berdasarkan Tingkat Pendidikan</h2>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={educationData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    labelLine={false}
                  >
                    {educationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Occupation Chart */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-800 mb-6 text-center">Berdasarkan Mata Pencaharian</h2>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={occupationData}
                margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} tick={{fontSize: 12}} />
                <YAxis />
                <Tooltip cursor={{fill: '#f1f5f9'}} />
                <Bar dataKey="value" fill="#059669" radius={[4, 4, 0, 0]} name="Jumlah Penduduk" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
