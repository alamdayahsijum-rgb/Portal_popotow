import { Link } from 'react-router-dom';
import { FileText, Home, Users, Search, ArrowRight, FileCheck, FileSignature } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'sku',
      title: 'Surat Keterangan Usaha (SKU)',
      description: 'Surat pengantar untuk keperluan pembuatan izin usaha atau pengajuan pinjaman modal usaha.',
      icon: FileText,
      color: 'blue',
      requirements: ['KTP Pemohon', 'KK Pemohon', 'Surat Pengantar RT/RW', 'Foto Tempat Usaha']
    },
    {
      id: 'domisili',
      title: 'Surat Keterangan Domisili',
      description: 'Surat yang menerangkan bahwa seseorang benar-benar bertempat tinggal di Desa Nusantara.',
      icon: Home,
      color: 'emerald',
      requirements: ['KTP Pemohon', 'KK Pemohon', 'Surat Pengantar RT/RW']
    },
    {
      id: 'nikah',
      title: 'Surat Pengantar Nikah',
      description: 'Surat pengantar dari desa sebagai syarat administrasi pendaftaran pernikahan di KUA.',
      icon: Users,
      color: 'rose',
      requirements: ['KTP Calon Suami/Istri', 'KK Calon Suami/Istri', 'Surat Pengantar RT/RW', 'Pas Foto 3x4']
    },
    {
      id: 'sktm',
      title: 'Surat Keterangan Tidak Mampu (SKTM)',
      description: 'Surat keterangan bagi warga kurang mampu untuk keperluan pendidikan, kesehatan, atau bantuan sosial.',
      icon: FileSignature,
      color: 'amber',
      requirements: ['KTP Pemohon', 'KK Pemohon', 'Surat Pengantar RT/RW', 'Foto Rumah (Depan & Dalam)']
    }
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Layanan Administrasi Online</h1>
          <p className="text-lg text-slate-600 mb-8">
            Ajukan permohonan surat keterangan secara online tanpa harus antre di kantor desa. Cepat, mudah, dan transparan.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/status" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-colors gap-2">
              <Search className="w-5 h-5" /> Cek Status Permohonan
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="p-8 flex-grow">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-${service.color}-50 text-${service.color}-600 border border-${service.color}-100`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h2>
                <p className="text-slate-600 mb-6">{service.description}</p>
                
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2 text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" /> Persyaratan:
                  </h3>
                  <ul className="space-y-2">
                    {service.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <Link 
                  to={`/layanan/${service.id}`} 
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-slate-800 hover:bg-slate-900 transition-colors gap-2"
                >
                  Ajukan Surat Ini <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
