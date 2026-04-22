import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import { Link } from 'react-router-dom';
import './Pricing.css';

const FILE_NAME = 'Audit_Cost_Calculator(2025.1)_ver.2.5.xlsx';

/* ── 기초 상수 (한국소프트웨어산업협회 2025.1 공표값) ── */
const FP_UNIT   = 605784;   // 기능점수(FP) 단가
const IT_MD     = 502494;   // IT감리 평균임금(MD)
const EXP_RATE  = 1.10;     // 제경비율 기본값 (110%)
const TECH_RATE = 1.20;     // 기술료율 기본값 (20%) → (1+0.20)
const EXPONENT  = 0.6385;

/* ── 보정사업비 항목 ── */
const COST_ITEMS = [
  { key: 'sw', label: 'SW 개발비 / 유지관리비 / 운영용역비', rate: 1.000 },
  { key: 'hw', label: 'HW·SW 구입비 / 유지보수비',          rate: 0.456 },
  { key: 'db', label: 'DB 구축비',                          rate: 0.422 },
];

/* ── 감리 단계 ── */
const STAGE_OPTS = [
  { value: '3', label: '3단계 감리', note: '요구정의·설계·종료', coeff: 0.9307 },
  { value: '2', label: '2단계 감리', note: '설계·종료',          coeff: 0.8516 },
];

/* ── 난이도 요인 ── */
const DIFF1_OPTS = [
  { value: 'n', label: '보통',     note: '신기술 미적용',           coeff: 0.00 },
  { value: 'c', label: '복잡',     note: '신기술 1가지 이상',       coeff: 0.05 },
  { value: 'h', label: '매우 복잡', note: '서로 다른 신기술 2가지+', coeff: 0.10 },
];
const DIFF2_OPTS = [
  { value: 'n', label: '보통',     note: '단일 지역',    coeff: 0.00 },
  { value: 'c', label: '복잡',     note: '2개 지역 이상', coeff: 0.05 },
  { value: 'h', label: '매우 복잡', note: '4개 지역 이상', coeff: 0.10 },
];

function calcFee(adjustedSum, stageCoeff, diffSum) {
  return stageCoeff * IT_MD * Math.pow(adjustedSum / FP_UNIT, EXPONENT)
    * EXP_RATE * TECH_RATE * (1 + diffSum);
}

function fmt(n) {
  return Math.round(n).toLocaleString('ko-KR') + ' 원';
}

function parseWon(str) {
  const n = parseFloat(String(str).replace(/,/g, ''));
  return isNaN(n) ? 0 : n * 10_000;
}

const INIT_INPUTS = Object.fromEntries(COST_ITEMS.map((c) => [c.key, '']));

export default function PricingCalc() {
  const [tab, setTab]       = useState('download');
  const [inputs, setInputs] = useState(INIT_INPUTS);
  const [vat, setVat]       = useState('excl');   // 'incl' | 'excl'
  const [stage, setStage]   = useState('3');
  const [diff1, setDiff1]   = useState('n');
  const [diff2, setDiff2]   = useState('n');
  const [result, setResult] = useState(null);

  function handleCalc() {
    const adjustedSum = COST_ITEMS.reduce((acc, item) => {
      const raw = parseWon(inputs[item.key]);
      const base = vat === 'incl' ? raw / 1.1 : raw;
      return acc + base * item.rate;
    }, 0);
    if (adjustedSum <= 0) return;

    const stageCoeff = STAGE_OPTS.find((s) => s.value === stage).coeff;
    const d1 = DIFF1_OPTS.find((d) => d.value === diff1).coeff;
    const d2 = DIFF2_OPTS.find((d) => d.value === diff2).coeff;
    const diffSum  = d1 + d2;

    const basicFee = calcFee(adjustedSum, stageCoeff, diffSum);
    const vatAmt   = basicFee * 0.1;
    const total    = basicFee + vatAmt;

    const itemDetails = COST_ITEMS.map((item) => {
      const raw  = parseWon(inputs[item.key]);
      const base = vat === 'incl' ? raw / 1.1 : raw;
      return { label: item.label, adjusted: base * item.rate, rate: item.rate };
    }).filter((d) => d.adjusted > 0);

    setResult({ adjustedSum, basicFee, vatAmt, total, itemDetails });
  }

  function handleReset() {
    setInputs(INIT_INPUTS);
    setVat('excl');
    setStage('3');
    setDiff1('n');
    setDiff2('n');
    setResult(null);
  }

  return (
    <div>
      <PageHeader
        title="대가 산정 계산기"
        subtitle="엑셀 계산기 다운로드 및 웹 계산기를 제공합니다."
      />

      <section className="page-section">
        <div className="container">

          {/* ── 탭 ── */}
          <div className="calc-tabs">
            <button
              className={`calc-tab${tab === 'download' ? ' active' : ''}`}
              onClick={() => setTab('download')}
            >
              📊 엑셀 다운로드
            </button>
            <button
              className={`calc-tab${tab === 'calc' ? ' active' : ''}`}
              onClick={() => setTab('calc')}
            >
              🧮 웹 계산기
            </button>
          </div>

          {/* ── 다운로드 탭 ── */}
          {tab === 'download' && (
            <>
              <div className="download-card card" style={{ marginTop: 32 }}>
                <div className="download-icon">📊</div>
                <div className="download-info">
                  <div className="download-desc">
                    감리대상사업비 입력 시 보정금액, 기본감리비, 부가가치세를 자동 산출합니다.<br />
                    3단계·2단계 감리, 난이도 요인 적용 포함.
                  </div>
                </div>
                <a
                  href={`${process.env.PUBLIC_URL}/${FILE_NAME}`}
                  download={FILE_NAME}
                  className="btn-primary download-btn"
                >
                  ⬇ 엑셀 다운로드
                </a>
              </div>

              <div className="download-guide">
                <h3 className="download-guide-title">사용 방법</h3>
                <ol className="download-guide-list">
                  <li>엑셀 파일을 다운로드한 후 열기</li>
                  <li>감리대상사업비 VAT 포함 여부 선택</li>
                  <li>사업비 구성항목별 금액 입력 (SW 개발비, HW·SW 구입비, DB 구축비)</li>
                  <li>감리 단계(2단계/3단계) 및 난이도 요인 선택</li>
                  <li>보정금액·기본감리비·부가가치세 자동 산출 확인</li>
                </ol>
                <p className="download-guide-note">
                  ※ FP단가(605,784원) 및 IT감리 평균임금(502,494원)은 한국소프트웨어산업협회 2025.1 공표값 기준입니다.<br />
                  ※ 정확한 견적은 전문가 상담을 통해 안내드립니다.
                </p>
              </div>
            </>
          )}

          {/* ── 웹 계산기 탭 ── */}
          {tab === 'calc' && (
            <>
              <div className="calc-widget" style={{ marginTop: 32 }}>
                {/* 입력 폼 */}
                <div className="calc-form">

                  {/* VAT 선택 */}
                  <div className="calc-section-label">사업비 VAT 포함 여부</div>
                  <div className="calc-form-group">
                    <div className="calc-radio-group">
                      <div
                        className={`calc-radio${vat === 'incl' ? ' active' : ''}`}
                        onClick={() => setVat('incl')}
                      >
                        VAT 포함
                        <span className="calc-radio-note">입력금액 ÷ 1.1 처리</span>
                      </div>
                      <div
                        className={`calc-radio${vat === 'excl' ? ' active' : ''}`}
                        onClick={() => setVat('excl')}
                      >
                        VAT 미포함
                        <span className="calc-radio-note">입력금액 그대로 적용</span>
                      </div>
                    </div>
                  </div>

                  {/* 사업비 입력 */}
                  <div className="calc-section-label">감리대상사업비 입력 (단위: 만원)</div>
                  {COST_ITEMS.map((item) => (
                    <div className="calc-form-group" key={item.key}>
                      <label className="calc-label">
                        {item.label}
                        <span className="calc-rate-badge">보정비율 {item.rate.toFixed(3)}</span>
                      </label>
                      <div className="calc-input-wrap">
                        <input
                          className="calc-input"
                          type="number"
                          min="0"
                          placeholder="0"
                          value={inputs[item.key]}
                          onChange={(e) => setInputs((prev) => ({ ...prev, [item.key]: e.target.value }))}
                        />
                        <span className="calc-unit">만원</span>
                      </div>
                    </div>
                  ))}

                  {/* 감리 단계 */}
                  <div className="calc-section-label" style={{ marginTop: 8 }}>감리 단계</div>
                  <div className="calc-form-group">
                    <div className="calc-radio-group">
                      {STAGE_OPTS.map((s) => (
                        <div
                          key={s.value}
                          className={`calc-radio${stage === s.value ? ' active' : ''}`}
                          onClick={() => setStage(s.value)}
                        >
                          {s.label}
                          <span className="calc-radio-note">{s.note}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 난이도 요인 1 */}
                  <div className="calc-section-label">난이도 ① 신기술 적용 수준</div>
                  <div className="calc-form-group">
                    <div className="calc-radio-group">
                      {DIFF1_OPTS.map((d) => (
                        <div
                          key={d.value}
                          className={`calc-radio${diff1 === d.value ? ' active' : ''}`}
                          onClick={() => setDiff1(d.value)}
                        >
                          {d.label}
                          <span className="calc-radio-note">{d.note}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 난이도 요인 2 */}
                  <div className="calc-section-label">난이도 ② 현장감리 지역 다중성</div>
                  <div className="calc-form-group">
                    <div className="calc-radio-group">
                      {DIFF2_OPTS.map((d) => (
                        <div
                          key={d.value}
                          className={`calc-radio${diff2 === d.value ? ' active' : ''}`}
                          onClick={() => setDiff2(d.value)}
                        >
                          {d.label}
                          <span className="calc-radio-note">{d.note}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="calc-btn-row">
                    <button className="btn-primary calc-btn" onClick={handleCalc}>산출하기</button>
                    <button className="btn-outline calc-btn-reset" onClick={handleReset}>초기화</button>
                  </div>
                </div>

                {/* 결과 패널 */}
                {result ? (
                  <div className="calc-result calc-result-panel">
                    <div className="calc-result-title">감리 대가 산출 결과</div>
                    <div className="calc-result-meta">
                      <span>{STAGE_OPTS.find((s) => s.value === stage).label}</span>
                      <span>신기술: {DIFF1_OPTS.find((d) => d.value === diff1).label}</span>
                      <span>지역: {DIFF2_OPTS.find((d) => d.value === diff2).label}</span>
                    </div>

                    <div className="calc-result-section-label">보정사업비 상세</div>
                    <div className="calc-result-rows">
                      {result.itemDetails.map((d) => (
                        <div className="calc-result-row" key={d.label}>
                          <span>{d.label}</span>
                          <span>{fmt(d.adjusted)}</span>
                        </div>
                      ))}
                      <div className="calc-result-row subtotal">
                        <span>보정사업비 합계</span>
                        <span>{fmt(result.adjustedSum)}</span>
                      </div>
                    </div>

                    <div className="calc-result-section-label">감리 대가</div>
                    <div className="calc-result-rows">
                      <div className="calc-result-row">
                        <span>기본감리비</span>
                        <span>{fmt(result.basicFee)}</span>
                      </div>
                      <div className="calc-result-row">
                        <span>부가가치세 (10%)</span>
                        <span>{fmt(result.vatAmt)}</span>
                      </div>
                      <div className="calc-result-row total">
                        <span>합계</span>
                        <span>{fmt(result.total)}</span>
                      </div>
                    </div>

                    <p className="calc-disclaimer">
                      ※ FP단가 605,784원 · IT감리 평균임금 502,494원 기준 (2025.1)<br />
                      ※ 제경비율 110%, 기술료율 20% 기본값 적용<br />
                      ※ 상주감리비·추가감리비·직접경비는 별도 산정
                    </p>
                  </div>
                ) : (
                  <div className="calc-placeholder">
                    <div className="calc-placeholder-icon">🧮</div>
                    <div>
                      사업비 항목을 입력하고<br />
                      <strong>산출하기</strong>를 클릭하세요.
                    </div>
                    <Link to="/pricing/info" className="calc-placeholder-link">
                      산정 기준 확인하기 →
                    </Link>
                  </div>
                )}
              </div>

              <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginTop: 16, lineHeight: 1.7 }}>
                ※ 산출식: 단계계수 × IT감리평균임금(502,494) × (보정사업비 ÷ FP단가(605,784))^0.6385 × 1.1(제경비) × 1.2(기술료) × (1+난이도계수합계)
              </p>
            </>
          )}

        </div>
      </section>
    </div>
  );
}
