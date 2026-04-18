import React from 'react';
import PageHeader from '../../components/PageHeader';
import './Company.css';

const CLIENT_CATEGORIES = [
  {
    category: '중앙정부·공공기관',
    clients: [
      { name: '행정안전부', icon: '🏛️' },
      { name: '관세청', icon: '📦' },
      { name: '해양수산부', icon: '🌊' },
      { name: '산림청', icon: '🌲' },
      { name: '산림청 국립산림과학원', icon: '🔬' },
      { name: '문화재청', icon: '🏯' },
      { name: '환경부', icon: '🌿' },
      { name: '환경부 온실가스종합정보센터', icon: '🌡️' },
      { name: '문화체육관광부 국립장애인도서관', icon: '📚' },
    ],
  },
  {
    category: '지방자치단체',
    clients: [
      { name: '울산광역시교육청', icon: '🎓' },
      { name: '인천광역시 강화군', icon: '🏝️' },
      { name: '경상북도 경주시', icon: '🏛️' },
      { name: '강원도 양양군', icon: '🏔️' },
    ],
  },
  {
    category: '공기업·준정부기관',
    clients: [
      { name: '한국지능정보사회진흥원', icon: '💻' },
      { name: '한국문화정보원', icon: '🎨' },
      { name: '한국환경공단', icon: '♻️' },
      { name: '한국과학창의재단', icon: '🔭' },
      { name: '울산광역시도시공사', icon: '🏗️' },
      { name: '재단법인울산문화관광재단', icon: '🎭' },
      { name: '한국부동산원 서울사무소', icon: '🏢' },
      { name: '한국골재산업연구원', icon: '⛏️' },
      { name: '인천스마트시티', icon: '🏙️' },
      { name: '도로교통공단', icon: '🚦' },
      { name: '한국교통연구원', icon: '🚌' },
      { name: '인공지능산업융합사업단', icon: '🤖' },
      { name: '국립공원공단', icon: '🏕️' },
    ],
  },
];

export default function Clients() {
  return (
    <div>
      <PageHeader
        title="주요 고객사"
        subtitle="다양한 분야의 기관과 함께 신뢰받는 감리 서비스를 제공합니다."
      />
      <section className="page-section">
        <div className="container">
          {CLIENT_CATEGORIES.map((cat) => (
            <div key={cat.category} style={{ marginBottom: 56 }}>
              <div className="section-divider" />
              <h2 className="section-title" style={{ fontSize: '1.4rem', marginBottom: 24 }}>{cat.category}</h2>
              <div className="clients-grid">
                {cat.clients.map((client) => (
                  <div key={client.name} className="client-card">
                    <div className="client-logo-placeholder">{client.icon}</div>
                    <span className="client-name">{client.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
