import React from 'react';
import PageHeader from '../../components/PageHeader';
import './Company.css';

export default function Greeting() {
  return (
    <div>
      <PageHeader
        title="인사말"
        subtitle="한길에이아이를 찾아주셔서 감사합니다."
        breadcrumbs={[{ label: '회사 소개' }, { label: '인사말' }]}
      />

      <section className="page-section">
        <div className="container greeting-layout">
          <div className="greeting-portrait">
            <div className="portrait-placeholder">
              <span>대표이사</span>
            </div>
          </div>
          <div className="greeting-body">
            <div className="section-divider" />
            <h2 className="section-title">안녕하십니까,<br />주식회사 한길에이아이 대표이사입니다.</h2>
            <div className="greeting-text">
              <p>
                한길정보기술은 대한민국 정보시스템 감리 분야에서 20여 년간 쌓아온 전문성을 바탕으로,
                고객의 정보화 사업이 성공적으로 완수될 수 있도록 최선을 다해 지원하고 있습니다.
              </p>
              <p>
                우리 회사는 <strong>대한민국 최초로 AI 기술을 감리 서비스에 접목</strong>하여,
                더욱 정밀하고 신속한 감리 수행을 실현하고 있습니다. 인공지능과 전문 감리사의 협업을 통해
                기존 감리의 한계를 뛰어넘는 새로운 패러다임을 제시합니다.
              </p>
              <p>
                자체 개발한 <strong>FP Code 솔루션</strong>을 통해 기능점수 산정의 정확성을 높이고,
                객관적이고 투명한 사업 규모 산정 서비스를 제공합니다. 이를 통해 발주기관과 사업자 모두
                신뢰할 수 있는 감리 결과를 도출합니다.
              </p>
              <p>
                앞으로도 지속적인 기술 혁신과 서비스 개선을 통해 고객 여러분의 기대에 부응하는
                한길정보기술이 되겠습니다. 감사합니다.
              </p>
            </div>
            <div className="greeting-signature">
              <span className="sig-company">주식회사 한길에이아이</span>
              <span className="sig-title">대표이사 원대길</span>
            </div>
          </div>
        </div>
      </section>

      {/* 회사 개요 */}
      <section className="page-section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-divider" />
          <h2 className="section-title">회사 개요</h2>
          <div className="overview-grid">
            {[
              { label: '회사명', value: '주식회사 한길에이아이' },
              { label: '대표자', value: '원대길' },
              { label: '설립일', value: '2025년 08월 28일' },
              { label: '사업분야', value: '정보시스템 감리 · PMO 및 정보기술 컨설팅' },
              { label: '소재지', value: '서울특별시 마포구 월드컵로 196, 비 105-씨 79호 (성산동)' },
              { label: '전화번호', value: '010-3462-7817' },
              { label: '해당부문 종사기간', value: '2025.08 ~ 현재' },
              { label: '자체 솔루션', value: 'FP Code (기능점수 산정 솔루션)' },
            ].map((item) => (
              <div key={item.label} className="overview-row">
                <span className="overview-label">{item.label}</span>
                <span className="overview-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
