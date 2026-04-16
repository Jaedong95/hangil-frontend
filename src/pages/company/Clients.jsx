import React from 'react';
import PageHeader from '../../components/PageHeader';
import './Company.css';

const CLIENT_CATEGORIES = [
  {
    category: '중앙정부·공공기관',
    clients: [
      { name: '행정안전부', icon: '🏛️' },
      { name: '과학기술정보통신부', icon: '🔬' },
      { name: '국방부', icon: '🪖' },
      { name: '기획재정부', icon: '💼' },
      { name: '한국정보화진흥원', icon: '💻' },
    ],
  },
  {
    category: '지방자치단체',
    clients: [
      { name: '서울특별시', icon: '🏙️' },
      { name: '경기도', icon: '🌿' },
      { name: '부산광역시', icon: '🌊' },
      { name: '인천광역시', icon: '✈️' },
      { name: '대구광역시', icon: '🏔️' },
    ],
  },
  {
    category: '공기업·준정부기관',
    clients: [
      { name: '한국전력공사', icon: '⚡' },
      { name: '건강보험심사평가원', icon: '🏥' },
      { name: '국민건강보험공단', icon: '💊' },
      { name: '한국수자원공사', icon: '💧' },
      { name: '근로복지공단', icon: '🤝' },
    ],
  },
  {
    category: '금융기관',
    clients: [
      { name: '한국은행', icon: '🏦' },
      { name: '금융감독원', icon: '📊' },
      { name: '예금보험공사', icon: '🛡️' },
      { name: '한국산업은행', icon: '💰' },
      { name: '신용보증기금', icon: '📋' },
    ],
  },
];

export default function Clients() {
  return (
    <div>
      <PageHeader
        title="주요 고객사"
        subtitle="다양한 분야의 기관과 함께 신뢰받는 감리 서비스를 제공합니다."
        breadcrumbs={[{ label: '회사 소개' }, { label: '주요 고객사' }]}
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
