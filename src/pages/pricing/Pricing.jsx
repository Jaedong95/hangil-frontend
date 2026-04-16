import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import './Pricing.css';

// 감리 대가 산정 기준 (행정안전부 고시 기반 예시)
const GRADE_RATES = [
  { grade: '특급 감리원', daily: '700,000', monthly: '18,200,000' },
  { grade: '고급 감리원', daily: '620,000', monthly: '16,120,000' },
  { grade: '중급 감리원', daily: '530,000', monthly: '13,780,000' },
  { grade: '초급 감리원', daily: '420,000', monthly: '10,920,000' },
];

const CALC_STEPS = [
  { step: '01', title: '사업 규모 파악', desc: '총 사업비 및 사업 특성을 확인합니다.' },
  { step: '02', title: '감리 유형 결정', desc: '설계·개발·종료 등 감리 시점과 횟수를 결정합니다.' },
  { step: '03', title: '투입 인력 산정', desc: '감리원 등급별 투입 기간 및 인원을 산정합니다.' },
  { step: '04', title: '대가 계산', desc: '투입 인원 × 등급별 단가 × 기간으로 산출합니다.' },
  { step: '05', title: '제경비 산출', desc: '직접 경비(교통, 출장 등) 및 제경비를 추가합니다.' },
  { step: '06', title: '최종 견적 확정', desc: '부가세 포함 최종 견적금액을 확정합니다.' },
];

export default function Pricing() {
  const [bizCost, setBizCost] = useState('');
  const [bizType, setBizType] = useState('일반');
  const [auditCount, setAuditCount] = useState(3);
  const [result, setResult] = useState(null);

  const handleCalc = () => {
    const cost = parseFloat(bizCost.replace(/,/g, ''));
    if (!cost || cost <= 0) return;

    // 간략화된 감리 대가 산정 공식 (예시)
    // 감리 대가 = 총 사업비 × 요율
    let rate = 0;
    if (cost < 500000000) rate = 0.04;
    else if (cost < 1000000000) rate = 0.035;
    else if (cost < 3000000000) rate = 0.028;
    else if (cost < 5000000000) rate = 0.022;
    else rate = 0.018;

    if (bizType === '긴급') rate *= 1.2;
    if (bizType === '복잡') rate *= 1.15;

    const base = cost * rate;
    const expense = base * 0.1; // 제경비 10%
    const total = base + expense;
    const vat = total * 0.1;

    setResult({
      base: Math.round(base),
      expense: Math.round(expense),
      total: Math.round(total),
      vat: Math.round(vat),
      grand: Math.round(total + vat),
      rate: (rate * 100).toFixed(1),
    });
  };

  const fmt = (n) => n?.toLocaleString('ko-KR') || '0';

  const handleBizCostChange = (e) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    setBizCost(raw ? parseInt(raw).toLocaleString('ko-KR') : '');
  };

  return (
    <div>
      <PageHeader
        title="대가 산정"
        subtitle="감리 서비스 대가 산정 기준과 견적 계산기를 제공합니다."
        breadcrumbs={[{ label: '대가 산정' }]}
      />

      <section className="page-section">
        <div className="container">

          {/* 대가 산정 근거 */}
          <div className="section-divider" />
          <h2 className="section-title">감리 대가 산정 근거</h2>
          <p className="section-subtitle">
            정보시스템 감리 대가는 「소프트웨어 사업 대가의 기준」 및 「행정기관 정보시스템 감리 대가 기준」에 따라 산정합니다.
          </p>

          <div className="pricing-notice card">
            <div className="pricing-notice-icon">⚖️</div>
            <div>
              <h3 className="pricing-notice-title">법적 근거</h3>
              <ul className="pricing-notice-list">
                <li>소프트웨어 사업 대가의 기준 (과학기술정보통신부 고시)</li>
                <li>행정기관 및 공공기관 정보시스템 감리 지침 (행정안전부 고시)</li>
                <li>감리원의 등급별 노임단가 (한국SW산업협회 공표)</li>
              </ul>
            </div>
          </div>

          {/* 등급별 단가 */}
          <div style={{ marginTop: 48 }}>
            <h3 className="pricing-section-title">감리원 등급별 노임단가 (예시)</h3>
            <p className="pricing-section-sub">※ 실제 단가는 매년 고시되는 기준에 따르며 변동될 수 있습니다.</p>
            <div style={{ overflowX: 'auto' }}>
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>등급</th>
                    <th>일 단가</th>
                    <th>월 단가 (22일 기준)</th>
                    <th>자격 기준 (예시)</th>
                  </tr>
                </thead>
                <tbody>
                  {GRADE_RATES.map((r) => (
                    <tr key={r.grade}>
                      <td><strong>{r.grade}</strong></td>
                      <td>{r.daily}원</td>
                      <td>{r.monthly}원</td>
                      <td style={{ fontSize: '0.82rem', color: 'var(--text-light)' }}>기술사 또는 동급 이상</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 대가 산정 절차 */}
          <div style={{ marginTop: 60 }}>
            <div className="section-divider" />
            <h2 className="section-title">대가 산정 절차</h2>
            <div className="calc-steps">
              {CALC_STEPS.map((s, i) => (
                <React.Fragment key={s.step}>
                  <div className="calc-step">
                    <div className="calc-step-num">{s.step}</div>
                    <div className="calc-step-title">{s.title}</div>
                    <div className="calc-step-desc">{s.desc}</div>
                  </div>
                  {i < CALC_STEPS.length - 1 && (
                    <div className="calc-step-arrow">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* 간단 견적 계산기 */}
          <div style={{ marginTop: 60 }}>
            <div className="section-divider" />
            <h2 className="section-title">간단 견적 계산기</h2>
            <p className="section-subtitle">기본적인 정보를 입력하면 개략적인 감리 대가를 산출합니다. 정확한 견적은 상담을 통해 안내드립니다.</p>

            <div className="calc-widget">
              <div className="calc-form">
                <div className="calc-form-group">
                  <label className="calc-label">총 사업비</label>
                  <div className="calc-input-wrap">
                    <input
                      type="text"
                      className="calc-input"
                      value={bizCost}
                      onChange={handleBizCostChange}
                      placeholder="예: 500,000,000"
                    />
                    <span className="calc-unit">원</span>
                  </div>
                </div>

                <div className="calc-form-group">
                  <label className="calc-label">사업 유형</label>
                  <div className="calc-radio-group">
                    {['일반', '긴급', '복잡'].map((t) => (
                      <label key={t} className={`calc-radio ${bizType === t ? 'active' : ''}`}>
                        <input
                          type="radio"
                          name="bizType"
                          value={t}
                          checked={bizType === t}
                          onChange={() => setBizType(t)}
                          style={{ display: 'none' }}
                        />
                        {t}
                        <span className="calc-radio-note">
                          {t === '긴급' ? '+20%' : t === '복잡' ? '+15%' : '기본'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="calc-form-group">
                  <label className="calc-label">감리 횟수</label>
                  <div className="calc-stepper">
                    <button onClick={() => setAuditCount(Math.max(1, auditCount - 1))}>−</button>
                    <span>{auditCount}회</span>
                    <button onClick={() => setAuditCount(Math.min(5, auditCount + 1))}>+</button>
                  </div>
                </div>

                <button className="btn-primary calc-btn" onClick={handleCalc}>
                  견적 계산하기
                </button>
              </div>

              {result && (
                <div className="calc-result">
                  <h3 className="calc-result-title">견적 결과</h3>
                  <div className="calc-result-note">적용 요율: {result.rate}%</div>
                  <div className="calc-result-rows">
                    <div className="calc-result-row">
                      <span>감리 기본 대가</span>
                      <span>{fmt(result.base)}원</span>
                    </div>
                    <div className="calc-result-row">
                      <span>제경비 (10%)</span>
                      <span>{fmt(result.expense)}원</span>
                    </div>
                    <div className="calc-result-row">
                      <span>공급가액 합계</span>
                      <span>{fmt(result.total)}원</span>
                    </div>
                    <div className="calc-result-row">
                      <span>부가가치세 (10%)</span>
                      <span>{fmt(result.vat)}원</span>
                    </div>
                    <div className="calc-result-row total">
                      <span>최종 견적 (VAT 포함)</span>
                      <span>{fmt(result.grand)}원</span>
                    </div>
                  </div>
                  <p className="calc-disclaimer">
                    * 본 계산 결과는 참고용이며, 실제 대가는 사업 특성에 따라 달라질 수 있습니다.
                    정확한 견적은 전문가 상담을 통해 안내드립니다.
                  </p>
                  <button className="btn-outline" style={{ width: '100%', marginTop: 16 }}>
                    상담 문의하기
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
