import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';

// 회사 소개
import Greeting from './pages/company/Greeting';
import History from './pages/company/History';
import OrgChart from './pages/company/OrgChart';
import Clients from './pages/company/Clients';
import Location from './pages/company/Location';
import Performance from './pages/company/Performance';

// 사업 분야
import ISManagement from './pages/business/ISManagement';
import PMO from './pages/business/PMO';
import Consulting from './pages/business/Consulting';
import QualityDiagnosis from './pages/business/QualityDiagnosis';

// 감리수행절차
import ProcedureOverview from './pages/procedure/ProcedureOverview';
import ProcedureProcess from './pages/procedure/ProcedureProcess';

// 대가 산정
import Pricing from './pages/pricing/Pricing';

// 솔루션
import FPCode from './pages/solutions/FPCode';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />

          {/* 회사 소개 */}
          <Route path="/company/greeting" element={<Greeting />} />
          <Route path="/company/history" element={<History />} />
          <Route path="/company/orgchart" element={<OrgChart />} />
          <Route path="/company/clients" element={<Clients />} />
          <Route path="/company/location" element={<Location />} />
          <Route path="/company/performance" element={<Performance />} />

          {/* 사업 분야 */}
          <Route path="/business/is-management" element={<ISManagement />} />
          <Route path="/business/pmo" element={<PMO />} />
          <Route path="/business/consulting" element={<Consulting />} />
          <Route path="/business/quality" element={<QualityDiagnosis />} />

          {/* 감리수행절차 */}
          <Route path="/procedure/overview" element={<ProcedureOverview />} />
          <Route path="/procedure/process" element={<ProcedureProcess />} />

          {/* 대가 산정 */}
          <Route path="/pricing" element={<Pricing />} />

          {/* 솔루션 */}
          <Route path="/solutions/fpcode" element={<FPCode />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
