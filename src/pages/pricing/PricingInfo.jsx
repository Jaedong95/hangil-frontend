import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Link } from 'react-router-dom';
import './Pricing.css';

const COST_ITEMS = [
  { key: 'sw', label: '소프트웨어 개발비 및 유지보수비, 정보시스템 운영 용역비', rate: 1.000 },
  { key: 'hw', label: '하드웨어·소프트웨어 구입비 및 유지보수비', rate: 0.456 },
  { key: 'db', label: '지식정보자원·행정정보 등 데이터베이스 구축비', rate: 0.422 },
  { key: 'etc', label: '기타 전산 설비·시설물 공사·이전·임차, 센서·단말장치 설치비, 통신회선·전기 사용료, 재료비 등', rate: 0.000 },
];

const DIFFICULTY_FACTORS = [
  {
    key: 'tech',
    label: '신기술 적용 수준',
    levels: [
      { label: '보통', desc: '감리대상사업 및 감리 점검의 복잡성을 증가시키는 주요 신기술이 적용되지 않은 경우', value: 0 },
      { label: '복잡', desc: '감리대상사업 및 감리 점검의 복잡성을 증가시키는 주요 신기술이 1개가 적용된 경우', value: 0.05 },
      { label: '매우복잡', desc: '감리대상사업 및 감리 점검의 복잡성을 증가시키는 서로 다른 분야의 주요 신기술이 2개 이상 적용된 경우', value: 0.10 },
    ],
  },
  {
    key: 'region',
    label: '감리현장 지역 다중성',
    levels: [
      { label: '보통', desc: '점검활동이 수행되는 감리현장이 단일 지역인 경우', value: 0 },
      { label: '복잡', desc: '점검활동이 수행되는 감리현장이 2~3개 지역인 경우', value: 0.05 },
      { label: '매우복잡', desc: '점검활동이 수행되는 감리현장이 4개 지역 이상인 경우', value: 0.10 },
    ],
  },
];

export default function PricingInfo() {
  return (
    <div>
      <PageHeader
        title="대가 산정 안내"
        subtitle="정보시스템 감리 대가 산정 기준 및 산정 방법을 안내합니다."
        breadcrumbs={[{ label: '대가 산정' }, { label: '대가 산정 안내' }]}
      />

      <section className="page-section">
        <div className="container">

          {/* 산정 개요 */}
          <div className="section-divider" />
          <h2 className="section-title">감리 대가 산정 개요</h2>
          <p className="section-subtitle">
            감리대가는 보정 후 기본감리비, 상주 및 추가감리비, 직접경비, 부가가치세의 합계액으로 산정합니다.
          </p>

          <div className="pricing-overview-grid">
            {['보정 후\n기본감리비', '상주 및\n추가감리비', '직접경비', '부가가치세'].map((item, i) => (
              <React.Fragment key={item}>
                <div className="pricing-overview-item">
                  <div className="pricing-overview-num">0{i + 1}</div>
                  <div className="pricing-overview-label">{item}</div>
                </div>
                {i < 3 && <div className="pricing-overview-plus">+</div>}
              </React.Fragment>
            ))}
          </div>

          <div className="pricing-notice card" style={{ marginTop: 32 }}>
            <div className="pricing-notice-icon">⚖️</div>
            <div>
              <h3 className="pricing-notice-title">법적 근거</h3>
              <ul className="pricing-notice-list">
                <li>소프트웨어 진흥법 시행령 제38조에 따라 공표되는 소프트웨어기술자 평균임금 중 IT감리 직무의 평균임금</li>
                <li>소프트웨어 진흥법 제10조제1항에 따라 설립된 한국소프트웨어산업협회의 소프트웨어사업 대가기준(FP 단가)</li>
                <li>행정기관 및 공공기관 정보시스템 감리 지침 (행정안전부 고시)</li>
              </ul>
            </div>
          </div>

          {/* 기본감리비 산정 공식 */}
          <div style={{ marginTop: 56 }}>
            <div className="section-divider" />
            <h2 className="section-title">기본감리비 산정 공식</h2>
            <p className="section-subtitle">
              감리 유형에 따라 계수를 달리 적용하며, 난이도 요인을 반영하여 최종 기본감리비를 산정합니다.
            </p>
            <div className="formula-cards">
              <div className="formula-card">
                <div className="formula-badge">3단계 감리 — 보정 전</div>
                <div className="formula-expr">
                  <strong>0.9307</strong> &times; IT감리 평균임금 &times; (사업비 보정금액 &divide; FP단가)<sup>0.6335</sup> &times; (1 + 제경비율) &times; (1 + 기술료율)
                </div>
              </div>
              <div className="formula-card">
                <div className="formula-badge">2단계 감리 — 보정 전</div>
                <div className="formula-expr">
                  <strong>0.8516</strong> &times; IT감리 평균임금 &times; (사업비 보정금액 &divide; FP단가)<sup>0.6335</sup> &times; (1 + 제경비율) &times; (1 + 기술료율)
                </div>
              </div>
              <div className="formula-card formula-card-accent">
                <div className="formula-badge">보정 후 기본감리비</div>
                <div className="formula-expr">
                  보정 전 기본감리비 &times; (1 + <strong>난이도계수 합</strong>)
                </div>
              </div>
            </div>
            <p className="pricing-section-sub" style={{ marginTop: 12 }}>
              ※ 제경비율 110%, 기술료율 20% 적용 &nbsp;|&nbsp; IT감리 평균임금 및 FP단가는 매년 공표되는 기준을 따름
            </p>
          </div>

          {/* 상주 및 추가감리비 */}
          <div style={{ marginTop: 40 }}>
            <h3 className="pricing-section-title">상주 및 추가감리비 산정</h3>
            <div className="formula-card" style={{ maxWidth: 600 }}>
              <div className="formula-badge">상주 및 추가감리</div>
              <div className="formula-expr">
                &sum; (투입공수 &times; 해당 IT직무 평균임금) &times; (1 + 제경비율) &times; (1 + 기술료율)
              </div>
            </div>
          </div>

          {/* 사업비 보정비율 */}
          <div style={{ marginTop: 48 }}>
            <div className="section-divider" />
            <h2 className="section-title">감리대상사업비 보정비율</h2>
            <p className="section-subtitle">
              감리대상사업비(부가가치세 제외)에 구성항목별 보정비율을 곱한 후 합산하여 보정금액을 산정합니다.
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table className="pricing-table">
                <thead>
                  <tr><th>구성항목</th><th style={{ width: 100 }}>보정비율</th></tr>
                </thead>
                <tbody>
                  {COST_ITEMS.map(item => (
                    <tr key={item.key}>
                      <td>{item.label}</td>
                      <td><strong>{item.rate.toFixed(3)}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 난이도 요인 */}
          <div style={{ marginTop: 48 }}>
            <div className="section-divider" />
            <h2 className="section-title">난이도 요인 및 계수</h2>
            <p className="section-subtitle">
              난이도계수 합은 난이도요인별 계수값을 합산하여 산정합니다.
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table className="pricing-table">
                <thead>
                  <tr><th>난이도 요인</th><th>수준</th><th>기준</th><th style={{ width: 80 }}>계수값</th></tr>
                </thead>
                <tbody>
                  {DIFFICULTY_FACTORS.map(factor =>
                    factor.levels.map((level, i) => (
                      <tr key={`${factor.key}-${i}`}>
                        {i === 0 && (
                          <td rowSpan={3} style={{ fontWeight: 700, verticalAlign: 'middle' }}>
                            {factor.label}
                          </td>
                        )}
                        <td>{level.label}</td>
                        <td style={{ fontSize: '0.83rem', color: 'var(--text-light)' }}>{level.desc}</td>
                        <td><strong>{level.value}</strong></td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* 계산기 CTA */}
          <div className="pricing-cta-box">
            <div className="pricing-cta-text">
              <strong>대가 산정 계산기</strong>를 이용하면 감리대상사업비를 입력하여 기본감리비를 바로 산출할 수 있습니다.
            </div>
            <Link to="/pricing/calculator" className="btn-primary pricing-cta-btn">
              계산기 바로가기 →
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
