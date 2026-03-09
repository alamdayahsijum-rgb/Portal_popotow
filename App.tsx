/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Services from './pages/Services';
import ServiceForm from './pages/ServiceForm';
import CheckStatus from './pages/CheckStatus';
import Complaints from './pages/Complaints';
import Budget from './pages/Budget';
import Statistics from './pages/Statistics';
import AdditionalServices from './pages/AdditionalServices';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profil" element={<Profile />} />
          <Route path="berita" element={<News />} />
          <Route path="berita/:id" element={<NewsDetail />} />
          <Route path="layanan" element={<Services />} />
          <Route path="layanan/:jenis" element={<ServiceForm />} />
          <Route path="status" element={<CheckStatus />} />
          <Route path="pengaduan" element={<Complaints />} />
          <Route path="anggaran" element={<Budget />} />
          <Route path="data" element={<Statistics />} />
          <Route path="layanan-tambahan" element={<AdditionalServices />} />
        </Route>
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
