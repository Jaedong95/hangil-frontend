import React from 'react';
import PageHeader from '../../components/PageHeader';
import aboutBg from '../../assets/AboutUs.png';
import './Company.css';

import logo행정안전부 from '../../assets/mois.png';
import logo관세청 from '../../assets/customs.png';
import logo해양수산부 from '../../assets/mof.png';
import logo산림청 from '../../assets/forest.png';
import logo산림청국립산림과학원 from '../../assets/nifos.png';
import logo문화재청 from '../../assets/cha.png';
import logo환경부 from '../../assets/me.png';
import logo환경부온실가스 from '../../assets/gir.png';
import logo국립장애인도서관 from '../../assets/nlid.jpeg';
import logo울산광역시교육청 from '../../assets/ulsan-edu.png';
import logo인천강화군 from '../../assets/ganghwa.svg';
import logo경주시 from '../../assets/gyeongju.png';
import logo양양군 from '../../assets/yangyang.jpeg';
import logo한국지능정보사회진흥원 from '../../assets/nia.png';
import logo한국문화정보원 from '../../assets/kcisa.png';
import logo한국환경공단 from '../../assets/keco.jpeg';
import logo한국과학창의재단 from '../../assets/kofac.jpeg';
import logo울산광역시도시공사 from '../../assets/ulsan-urban.png';
import logo울산문화관광재단 from '../../assets/ulsan-culture.png';
import logo한국부동산원 from '../../assets/kab.png';
import logo한국골재산업연구원 from '../../assets/kaafi.png';
import logo인천스마트시티 from '../../assets/incheon-smart.png';
import logo도로교통공단 from '../../assets/koroad.png';
import logo한국교통연구원 from '../../assets/koti.png';
import logo인공지능산업융합사업단 from '../../assets/aica.png';
import logo국립공원공단 from '../../assets/knps.png';

const CLIENT_CATEGORIES = [
  {
    category: '중앙정부·공공기관',
    clients: [
      { name: '행정안전부', logo: logo행정안전부 },
      { name: '관세청', logo: logo관세청 },
      { name: '해양수산부', logo: logo해양수산부 },
      { name: '산림청', logo: logo산림청 },
      { name: '산림청 국립산림과학원', logo: logo산림청국립산림과학원 },
      { name: '문화재청', logo: logo문화재청 },
      { name: '환경부', logo: logo환경부 },
      { name: '환경부 온실가스종합정보센터', logo: logo환경부온실가스 },
      { name: '문화체육관광부 국립장애인도서관', logo: logo국립장애인도서관 },
    ],
  },
  {
    category: '지방자치단체',
    clients: [
      { name: '울산광역시교육청', logo: logo울산광역시교육청 },
      { name: '인천광역시 강화군', logo: logo인천강화군 },
      { name: '경상북도 경주시', logo: logo경주시 },
      { name: '강원도 양양군', logo: logo양양군 },
    ],
  },
  {
    category: '공기업·준정부기관',
    clients: [
      { name: '한국지능정보사회진흥원', logo: logo한국지능정보사회진흥원 },
      { name: '한국문화정보원', logo: logo한국문화정보원 },
      { name: '한국환경공단', logo: logo한국환경공단 },
      { name: '한국과학창의재단', logo: logo한국과학창의재단 },
      { name: '울산광역시도시공사', logo: logo울산광역시도시공사 },
      { name: '재단법인울산문화관광재단', logo: logo울산문화관광재단 },
      { name: '한국부동산원 서울사무소', logo: logo한국부동산원 },
      { name: '한국골재산업연구원', logo: logo한국골재산업연구원 },
      { name: '인천스마트시티', logo: logo인천스마트시티 },
      { name: '도로교통공단', logo: logo도로교통공단 },
      { name: '한국교통연구원', logo: logo한국교통연구원 },
      { name: '인공지능산업융합사업단', logo: logo인공지능산업융합사업단 },
      { name: '국립공원공단', logo: logo국립공원공단 },
    ],
  },
];

export default function Clients() {
  return (
    <div>
      <PageHeader
        title="주요 고객사"
        subtitle="다양한 분야의 기관과 함께 신뢰받는 감리 서비스를 제공합니다."
        bgImage={aboutBg}
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
                    <div className="client-logo-wrap">
                      <img src={client.logo} alt={client.name} className="client-logo-img" />
                    </div>
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
