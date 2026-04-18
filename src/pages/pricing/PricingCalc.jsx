import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import { Link } from 'react-router-dom';
import './Pricing.css';

const DEFAULT_IT_AVG_WAGE = 7920000;
const DEFAULT_FP_UNIT_PRICE = 547000;
const EXPENSE_RATE = 1.10;
const TECH_FEE_RATE = 0.20;
const VAT_RATE = 0.10;

const COST_ITEMS = [
  { key: 'sw', shortLabel: 'SW 개발·유지보수·운영 용역비', label: '소프트웨어 개발비 및 유지보수비, 정보시스템 운영 용역비', rate: 1.000 },
  { key: 'hw', shortLabel: 'HW·SW 구입 및 유지보수비', label: '하드웨어·소프트웨어 구입비 및 유지보수비', rate: 0.456 },
  { key: 'db', shortLabel: 'DB 구축비', label: '지식정보자원·행정정보 등 데이터베이스 구축비', rate: 0.422 },
  { key: 'etc', shortLabel: '기타 전산설비·시설 등', label: '기타 전산 설비·시설물 공사·이전·임차, 센서·단말장치 설치비, 통신회선·전기 사용료, 재료비 등', rate: 0.000 },
];

const DIFFICULTY_FACTORS = [
  {
    key: 'tech',
    label: '신기술 적용 수준',
    levels: [
      { label: '보통', desc: '주요 신기술이 적용되지 않은 경우', value: 0 },
      { label: '복잡', desc: '주요 신기술이 1개 적용된 경우', value: 0.05 },
      { label: '매우복잡', desc: '서로 다른 분야의 주요 신기술이 2개 이상 적용된 경우', value: 0.10 },
    ],
  },
  {
    key: 'region',
    label: '감리현장 지역 다중성',
    levels: [
      { label: '보통', desc: '감리현장이 단일 지역인 경우', value: 0 },
      { label: '복잡', desc: '감리현장이 2~3개 지역인 경우', value: 0.05 },
      { label: '매우복잡', desc: '감리현장이 4개 지역 이상인 경우', value: 0.10 },
    ],
  },
];

export default function PricingCalc() {
  const [costs, setCosts] = useState({ sw: '', hw: '', db: '', etc: '' });
  const [auditStage, setAuditStage] = useState('3');
  const [difficulty, setDifficulty] = useState({ tech: 0, region: 0 });
  const [itWage, setItWage] = useState(DEFAULT_IT_AVG_WAGE);
  const [fpPrice, setFpPrice] = useState(DEFAULT_FP_UNIT_PRICE);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [result, setResult] = useState(null);

  const fmt = (n) => Math.round(n).toLocaleString('ko-KR');

  const handleCostChange = (key, value) => {
    const raw = value.replace(/[^0-9]/g, '');
    setCosts(prev => ({ ...prev, [key]: raw ? parseInt(raw, 10).toLocaleString('ko-KR') : '' }));
  };

  const handleCalc = () => {
    const correctedAmount = COST_ITEMS.reduce((sum, item) => {
      const raw = parseFloat((costs[item.key] || '0').replace(/,/g, ''));
      return sum + raw * item.rate;
    }, 0);
    if (correctedAmount <= 0) return;

    const coeff = auditStage === '3' ? 0.9307 : 0.8516;
    const baseFee = coeff * itWage * Math.pow(correctedAmount / fpPrice, 0.6335)
      * (1 + EXPENSE_RATE) * (1 + TECH_FEE_RATE);

    const diffSum = difficulty.tech + difficulty.region;
    const adjustedFee = baseFee * (1 + diffSum);
    const vat = adjustedFee * VAT_RATE;

    const costBreakdown = COST_ITEMS.map(item => {
      const raw = parseFloat((costs[item.key] || '0').replace(/,/g, ''));
      return { ...item, amount: raw, corrected: raw * item.rate };
    }).filter(item => item.amount > 0);

    setResult({ correctedAmount, baseFee, diffSum, adjustedFee, vat, total: adjustedFee + vat, coeff, costBreakdown });
  };

  const handleReset = () => {
    setCosts({ sw: '', hw: '', db: '', etc: '' });
    setAuditStage('3');
    setDifficulty({ tech: 0, region: 0 });
    setResult(null);
  };

  return (
    <div>
      <PageHeader
        title="대가 산정 계산기"
        subtitle="감리대상사업비를 입력하면 기본감리비를 자동으로 산출합니다."
        breadcrumbs={[{ label: '대가 산정' }, { label: '대가 산정 계산기' }]}
      />

      <section className="page-section">
        <div className="container">

          <div className="section-divider" />
          <div className="calc-page-header">
            <div>
              <h2 className="section-title" style={{ marginBottom: 6 }}>감리 대가 산정 계산기</h2>
              <p className="section-subtitle" style={{ marginBottom: 0 }}>
                상주 및 추가감리비, 직접경비는 포함되지 않으며 정확한 견적은 상담을 통해 안내드립니다.
              </p>
            </div>
            <Link to="/pricing/info" className="btn-outline pricing-info-link">
              산정 기준 안내 →
            </Link>
          </div>

          <div className="calc-widget calc-widget-full">
            <div className="calc-form">

              <div className="calc-section-label">1. 감리대상사업비 입력 (VAT 제외)</div>
              {COST_ITEMS.map(item => (
                <div className="calc-form-group" key={item.key}>
                  <label className="calc-label">
                    {item.shortLabel}
                    <span className="calc-rate-badge">보정비율 {item.rate.toFixed(3)}</span>
                  </label>
                  <div className="calc-input-wrap">
                    <input
                      type="text"
                      className="calc-input"
                      value={costs[item.key]}
                      onChange={e => handleCostChange(item.key, e.target.value)}
                      placeholder={item.rate === 0 ? '보정비율 0 — 산정 미반영' : '0'}
                      disabled={item.rate === 0}
                    />
                    <span className="calc-unit">원</span>
                  </div>
                </div>
              ))}

              <div className="calc-section-label" style={{ marginTop: 8 }}>2. 감리 단계</div>
              <div className="calc-form-group">
                <div className="calc-radio-group">
                  {[
                    { v: '3', label: '3단계 감리', note: '계수 0.9307' },
                    { v: '2', label: '2단계 감리', note: '계수 0.8516' },
                  ].map(opt => (
                    <label key={opt.v} className={`calc-radio ${auditStage === opt.v ? 'active' : ''}`}>
                      <input type="radio" name="auditStage" value={opt.v} checked={auditStage === opt.v}
                        onChange={() => setAuditStage(opt.v)} style={{ display: 'none' }} />
                      {opt.label}
                      <span className="calc-radio-note">{opt.note}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="calc-section-label" style={{ marginTop: 8 }}>3. 난이도 요인</div>
              {DIFFICULTY_FACTORS.map(factor => (
                <div className="calc-form-group" key={factor.key}>
                  <label className="calc-label">{factor.label}</label>
                  <div className="calc-radio-group">
                    {factor.levels.map(level => (
                      <label key={level.value} className={`calc-radio ${difficulty[factor.key] === level.value ? 'active' : ''}`}>
                        <input type="radio" name={factor.key} value={level.value}
                          checked={difficulty[factor.key] === level.value}
                          onChange={() => setDifficulty(prev => ({ ...prev, [factor.key]: level.value }))}
                          style={{ display: 'none' }} />
                        {level.label}
                        <span className="calc-radio-note">+{(level.value * 100).toFixed(0)}%</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <button className="calc-advanced-toggle" onClick={() => setShowAdvanced(v => !v)}>
                {showAdvanced ? '▲' : '▼'} 기준 단가 설정 (고급)
              </button>
              {showAdvanced && (
                <div className="calc-advanced-box">
                  <div className="calc-form-group">
                    <label className="calc-label">IT감리 평균임금 (원/월)</label>
                    <div className="calc-input-wrap">
                      <input type="number" className="calc-input" value={itWage}
                        onChange={e => setItWage(Number(e.target.value))} />
                      <span className="calc-unit">원</span>
                    </div>
                  </div>
                  <div className="calc-form-group" style={{ marginBottom: 0 }}>
                    <label className="calc-label">FP 단가 (원/FP)</label>
                    <div className="calc-input-wrap">
                      <input type="number" className="calc-input" value={fpPrice}
                        onChange={e => setFpPrice(Number(e.target.value))} />
                      <span className="calc-unit">원/FP</span>
                    </div>
                  </div>
                  <div className="calc-advanced-note">제경비율 110% · 기술료율 20% (고정)</div>
                </div>
              )}

              <div className="calc-btn-row">
                <button className="btn-primary calc-btn" onClick={handleCalc}>
                  감리 대가 산정하기
                </button>
                <button className="btn-outline calc-btn-reset" onClick={handleReset}>
                  초기화
                </button>
              </div>
            </div>

            <div className="calc-result-panel">
              {result ? (
                <div className="calc-result">
                  <h3 className="calc-result-title">산정 결과</h3>
                  <div className="calc-result-meta">
                    <span>{auditStage}단계 감리 · 계수 {result.coeff}</span>
                    <span>난이도계수 합 {result.diffSum} (+{(result.diffSum * 100).toFixed(0)}%)</span>
                  </div>

                  <div className="calc-result-section-label">사업비 보정금액</div>
                  <div className="calc-result-rows">
                    {result.costBreakdown.map(item => (
                      <div className="calc-result-row" key={item.key}>
                        <span>{item.shortLabel} &times; {item.rate}</span>
                        <span>{fmt(item.corrected)}원</span>
                      </div>
                    ))}
                    <div className="calc-result-row subtotal">
                      <span>보정금액 합계</span>
                      <span>{fmt(result.correctedAmount)}원</span>
                    </div>
                  </div>

                  <div className="calc-result-section-label">기본감리비 산정</div>
                  <div className="calc-result-rows">
                    <div className="calc-result-row">
                      <span>보정 전 기본감리비</span>
                      <span>{fmt(result.baseFee)}원</span>
                    </div>
                    {result.diffSum > 0 && (
                      <div className="calc-result-row">
                        <span>난이도 보정 (+{(result.diffSum * 100).toFixed(0)}%)</span>
                        <span>+{fmt(result.baseFee * result.diffSum)}원</span>
                      </div>
                    )}
                    <div className="calc-result-row subtotal">
                      <span>보정 후 기본감리비 (공급가액)</span>
                      <span>{fmt(result.adjustedFee)}원</span>
                    </div>
                    <div className="calc-result-row">
                      <span>부가가치세 (10%)</span>
                      <span>{fmt(result.vat)}원</span>
                    </div>
                    <div className="calc-result-row total">
                      <span>기본감리비 합계 (VAT 포함)</span>
                      <span>{fmt(result.total)}원</span>
                    </div>
                  </div>

                  <p className="calc-disclaimer">
                    * 상주 및 추가감리비, 직접경비는 투입공수 및 실비에 따라 별도 산정됩니다.<br />
                    * IT감리 평균임금 {fmt(itWage)}원/월, FP단가 {fmt(fpPrice)}원/FP 기준으로 산정되었습니다.<br />
                    * 정확한 견적은 전문가 상담을 통해 안내드립니다.
                  </p>
                  <button className="btn-outline" style={{ width: '100%', marginTop: 16 }}>
                    상담 문의하기
                  </button>
                </div>
              ) : (
                <div className="calc-placeholder">
                  <div className="calc-placeholder-icon">📋</div>
                  <p>감리대상사업비를 입력하고<br />산정 버튼을 누르면<br />결과가 표시됩니다.</p>
                  <Link to="/pricing/info" className="calc-placeholder-link">
                    산정 기준 확인하기 →
                  </Link>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
