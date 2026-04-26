import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import pricingBg from '../../assets/Pricing.png';
import { Link } from 'react-router-dom';
import './Pricing.css';

const FILE_NAME = 'Audit_Cost_Calculator(2025.1)_ver.2.5.xlsx';

/* ── 기초 상수 (한국소프트웨어산업협회 2025.1) ── */
const FP_UNIT  = 605_784;   // 기능점수(FP) 단가
const IT_MD    = 502_494;   // IT감리 평균임금(MD)
const EXPONENT = 0.6385;

/* ── 보정사업비 항목 ── */
const COST_ITEMS = [
  { key: 'sw',    label: '① SW 개발비 / 유지관리비 / 운영용역비',          rate: 1.000 },
  { key: 'hw',    label: '② HW·SW 구입비 / 유지보수비',                   rate: 0.456 },
  { key: 'db',    label: '③ DB 구축비',                                   rate: 0.422 },
  { key: 'other', label: '④ 기타 (전산설비·통신회선·시설물 공사 등)',        rate: 0.000 },
];

const STAGE_OPTS = [
  { value: '3', label: '3단계 감리', note: '요구정의·설계·종료', coeff: 0.9307 },
  { value: '2', label: '2단계 감리', note: '설계·종료',           coeff: 0.8516 },
];

const DIFF1_OPTS = [
  { value: 'n', label: '보통',      note: '신기술 미적용',           coeff: 0.00 },
  { value: 'c', label: '복잡',      note: '신기술 1가지 이상',       coeff: 0.05 },
  { value: 'h', label: '매우 복잡', note: '서로 다른 신기술 2가지+', coeff: 0.10 },
];
const DIFF2_OPTS = [
  { value: 'n', label: '보통',      note: '단일 지역',     coeff: 0.00 },
  { value: 'c', label: '복잡',      note: '2개 지역 이상', coeff: 0.05 },
  { value: 'h', label: '매우 복잡', note: '4개 지역 이상', coeff: 0.10 },
];

function parseMan(str) {            // 만원 단위 → 원
  const n = parseFloat(String(str).replace(/,/g, ''));
  return isNaN(n) ? 0 : n * 10_000;
}
function parseNum(str) {            // 그대로 숫자
  const n = parseFloat(String(str).replace(/,/g, ''));
  return isNaN(n) ? 0 : n;
}
function fmt(n) {
  return Math.round(n).toLocaleString('ko-KR') + ' 원';
}
function fmtMD(n) {
  return n.toLocaleString('ko-KR') + ' MD';
}
function fmtInput(val) {
  const digits = String(val).replace(/[^\d]/g, '');
  if (!digits) return '';
  return Number(digits).toLocaleString('ko-KR');
}

const INIT_INPUTS = Object.fromEntries(COST_ITEMS.map((c) => [c.key, '']));

export default function PricingCalc() {
  const [tab, setTab] = useState('download');

  /* 입력 상태 */
  const [inputs, setInputs]           = useState(INIT_INPUTS);
  const [vat, setVat]                 = useState('excl');   // 'incl' | 'excl'
  const [stage, setStage]             = useState('3');
  const [diff1, setDiff1]             = useState('n');
  const [diff2, setDiff2]             = useState('n');
  const [expRate, setExpRate]         = useState('110');     // 제경비율 (%)
  const [techRate, setTechRate]       = useState('20');      // 기술료율 (%)
  const [directCost, setDirectCost]   = useState('');        // 직접경비 (만원)
  const [resMD, setResMD]             = useState('');        // 상주감리 투입공수
  const [resWage, setResWage]         = useState('');        // 상주감리 평균임금 (원)
  const [extMD, setExtMD]             = useState('');        // 추가감리 투입공수
  const [extWage, setExtWage]         = useState('');        // 추가감리 평균임금 (원)
  const [result, setResult]           = useState(null);

  function handleCalc() {
    /* ① 보정사업비 */
    const adjustedSum = COST_ITEMS.reduce((acc, item) => {
      const raw  = parseMan(inputs[item.key]);
      const base = vat === 'incl' ? raw / 1.1 : raw;
      return acc + base * item.rate;
    }, 0);
    if (adjustedSum <= 0) return;

    const stageCoeff = STAGE_OPTS.find((s) => s.value === stage).coeff;
    const d1 = DIFF1_OPTS.find((d) => d.value === diff1).coeff;
    const d2 = DIFF2_OPTS.find((d) => d.value === diff2).coeff;
    const diffSum = d1 + d2;

    const exp  = parseFloat(expRate)  / 100 || 1.10;  // 110 → 1.10
    const tech = parseFloat(techRate) / 100 || 0.20;  // 20  → 0.20

    /* ② 표준공수(MD) */
    const stdMD = Math.ceil(stageCoeff * Math.pow(adjustedSum / FP_UNIT, EXPONENT) * (1 + diffSum));

    /* ③ 기본감리비: 직접인건비 × (1+제경비율) × (1+기술료율) */
    const basicFee = stageCoeff * IT_MD
      * Math.pow(adjustedSum / FP_UNIT, EXPONENT)
      * (1 + exp) * (1 + tech) * (1 + diffSum);

    /* ④ 직접경비 */
    const direct = parseMan(directCost);

    /* ⑤ 상주감리비 */
    const resFee = parseNum(resMD) * parseNum(resWage) * (1 + exp) * (1 + tech);

    /* ⑥ 추가감리비 */
    const extFee = parseNum(extMD) * parseNum(extWage) * (1 + exp) * (1 + tech);

    /* ⑦ 최종 감리비 */
    const totalExcl = basicFee + direct + resFee + extFee;
    const totalIncl = Math.round(totalExcl * 1.1);
    const vatAmt    = totalIncl - Math.round(totalExcl);

    const itemDetails = COST_ITEMS.map((item) => {
      const raw  = parseMan(inputs[item.key]);
      const base = vat === 'incl' ? raw / 1.1 : raw;
      return { label: item.label, adjusted: base * item.rate };
    }).filter((d) => d.adjusted > 0);

    setResult({ adjustedSum, stdMD, basicFee, direct, resFee, extFee, totalExcl, vatAmt, totalIncl, itemDetails });
  }

  function handleReset() {
    setInputs(INIT_INPUTS);
    setVat('excl'); setStage('3'); setDiff1('n'); setDiff2('n');
    setExpRate('110'); setTechRate('20'); setDirectCost('');
    setResMD(''); setResWage(''); setExtMD(''); setExtWage('');
    setResult(null);
  }

  return (
    <div>
      <PageHeader
        title="대가 산정 계산기"
        subtitle="엑셀 계산기 다운로드 및 웹 계산기를 제공합니다."
        bgImage={pricingBg}
      />

      <section className="page-section">
        <div className="container">

          {/* ── 탭 ── */}
          <div className="calc-tabs">
            <button className={`calc-tab${tab === 'download' ? ' active' : ''}`} onClick={() => setTab('download')}>
              📊 엑셀 다운로드
            </button>
            <button className={`calc-tab${tab === 'calc' ? ' active' : ''}`} onClick={() => setTab('calc')}>
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
                    3단계·2단계 감리, 난이도 요인, 상주·추가 감리비 적용 포함.
                  </div>
                </div>
                <a href={`${process.env.PUBLIC_URL}/${FILE_NAME}`} download={FILE_NAME} className="btn-primary download-btn">
                  ⬇ 엑셀 다운로드
                </a>
              </div>
              <div className="download-guide">
                <h3 className="download-guide-title">사용 방법</h3>
                <ol className="download-guide-list">
                  <li>엑셀 파일을 다운로드한 후 열기</li>
                  <li>감리대상사업비 VAT 포함 여부 선택 후 항목별 금액 입력</li>
                  <li>감리 단계(2단계/3단계) 및 난이도 요인 선택</li>
                  <li>제경비율·기술료율·직접경비 입력</li>
                  <li>필요 시 상주·추가 감리 투입공수 및 평균임금 입력</li>
                  <li>최종 감리비 자동 산출 확인</li>
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

                {/* ── 입력 폼 ── */}
                <div className="calc-form">

                  {/* 섹션 1: VAT */}
                  <div className="calc-section-label">① 사업비 VAT 포함 여부</div>
                  <div className="calc-form-group">
                    <div className="calc-radio-group">
                      <div className={`calc-radio${vat === 'incl' ? ' active' : ''}`} onClick={() => setVat('incl')}>
                        VAT 포함<span className="calc-radio-note">입력금액 ÷ 1.1</span>
                      </div>
                      <div className={`calc-radio${vat === 'excl' ? ' active' : ''}`} onClick={() => setVat('excl')}>
                        VAT 미포함<span className="calc-radio-note">입력금액 그대로</span>
                      </div>
                    </div>
                  </div>

                  {/* 섹션 1: 사업비 입력 */}
                  <div className="calc-section-label">감리대상사업비 (단위: 만원)</div>
                  {COST_ITEMS.map((item) => (
                    <div className="calc-form-group" key={item.key}>
                      <label className="calc-label">
                        {item.label}
                        <span className="calc-rate-badge">보정비율 {item.rate.toFixed(3)}</span>
                      </label>
                      <div className="calc-input-wrap">
                        <input
                          className="calc-input"
                          type="text" inputMode="numeric" placeholder="0"
                          value={inputs[item.key]}
                          disabled={item.rate === 0}
                          onChange={(e) => {
                            const v = fmtInput(e.target.value);
                            setInputs((p) => ({ ...p, [item.key]: v }));
                          }}
                        />
                        <span className="calc-unit">만원</span>
                      </div>
                    </div>
                  ))}

                  {/* 섹션 2: 감리 단계 */}
                  <div className="calc-section-label" style={{ marginTop: 8 }}>② 감리 적용단계</div>
                  <div className="calc-form-group">
                    <div className="calc-radio-group">
                      {STAGE_OPTS.map((s) => (
                        <div key={s.value} className={`calc-radio${stage === s.value ? ' active' : ''}`} onClick={() => setStage(s.value)}>
                          {s.label}<span className="calc-radio-note">{s.note}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 섹션 3: 난이도 */}
                  <div className="calc-section-label">③ 난이도 — 신기술 적용 수준</div>
                  <div className="calc-form-group">
                    <div className="calc-radio-group">
                      {DIFF1_OPTS.map((d) => (
                        <div key={d.value} className={`calc-radio${diff1 === d.value ? ' active' : ''}`} onClick={() => setDiff1(d.value)}>
                          {d.label}<span className="calc-radio-note">{d.note}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="calc-section-label">③ 난이도 — 현장감리 지역 다중성</div>
                  <div className="calc-form-group">
                    <div className="calc-radio-group">
                      {DIFF2_OPTS.map((d) => (
                        <div key={d.value} className={`calc-radio${diff2 === d.value ? ' active' : ''}`} onClick={() => setDiff2(d.value)}>
                          {d.label}<span className="calc-radio-note">{d.note}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 섹션 4: 제경비율·기술료율·직접경비 */}
                  <div className="calc-section-label">④ 제경비율 / 기술료율 / 직접경비</div>
                  <div className="calc-form-group">
                    <label className="calc-label">제경비율 <span className="calc-rate-badge">110% ~ 120%</span></label>
                    <div className="calc-input-wrap">
                      <input className="calc-input" type="number" min="110" max="120" step="0.1"
                        value={expRate} onChange={(e) => setExpRate(e.target.value)} />
                      <span className="calc-unit">%</span>
                    </div>
                  </div>
                  <div className="calc-form-group">
                    <label className="calc-label">기술료율 <span className="calc-rate-badge">20% ~ 40%</span></label>
                    <div className="calc-input-wrap">
                      <input className="calc-input" type="number" min="20" max="40" step="0.1"
                        value={techRate} onChange={(e) => setTechRate(e.target.value)} />
                      <span className="calc-unit">%</span>
                    </div>
                  </div>
                  <div className="calc-form-group">
                    <label className="calc-label">직접경비 <span className="calc-rate-badge">여비·도구사용료·자문비 등</span></label>
                    <div className="calc-input-wrap">
                      <input className="calc-input" type="text" inputMode="numeric" placeholder="0"
                        value={directCost} onChange={(e) => setDirectCost(fmtInput(e.target.value))} />
                      <span className="calc-unit">만원</span>
                    </div>
                  </div>

                  {/* 섹션 6: 상주·추가 감리비 */}
                  <div className="calc-section-label">⑥ 상주감리비 (선택)</div>
                  <div className="calc-form-group">
                    <label className="calc-label">투입공수</label>
                    <div className="calc-input-wrap">
                      <input className="calc-input" type="number" min="0" placeholder="0"
                        value={resMD} onChange={(e) => setResMD(e.target.value)} />
                      <span className="calc-unit">MD</span>
                    </div>
                  </div>
                  <div className="calc-form-group">
                    <label className="calc-label">해당 IT직무 평균임금</label>
                    <div className="calc-input-wrap">
                      <input className="calc-input" type="text" inputMode="numeric" placeholder="0"
                        value={resWage} onChange={(e) => setResWage(fmtInput(e.target.value))} />
                      <span className="calc-unit">원/MD</span>
                    </div>
                  </div>

                  <div className="calc-section-label">추가감리비 (선택)</div>
                  <div className="calc-form-group">
                    <label className="calc-label">투입공수</label>
                    <div className="calc-input-wrap">
                      <input className="calc-input" type="number" min="0" placeholder="0"
                        value={extMD} onChange={(e) => setExtMD(e.target.value)} />
                      <span className="calc-unit">MD</span>
                    </div>
                  </div>
                  <div className="calc-form-group">
                    <label className="calc-label">해당 IT직무 평균임금</label>
                    <div className="calc-input-wrap">
                      <input className="calc-input" type="text" inputMode="numeric" placeholder="0"
                        value={extWage} onChange={(e) => setExtWage(fmtInput(e.target.value))} />
                      <span className="calc-unit">원/MD</span>
                    </div>
                  </div>

                  <div className="calc-btn-row">
                    <button className="btn-primary calc-btn" onClick={handleCalc}>산출하기</button>
                    <button className="btn-outline calc-btn-reset" onClick={handleReset}>초기화</button>
                  </div>
                </div>

                {/* ── 결과 패널 ── */}
                {result ? (
                  <div className="calc-result calc-result-panel">
                    <div className="calc-result-title">감리 대가 산출 결과</div>
                    <div className="calc-result-meta">
                      <span>{STAGE_OPTS.find((s) => s.value === stage).label}</span>
                      <span>신기술: {DIFF1_OPTS.find((d) => d.value === diff1).label}</span>
                      <span>지역: {DIFF2_OPTS.find((d) => d.value === diff2).label}</span>
                    </div>

                    {/* 보정사업비 */}
                    <div className="calc-result-section-label">① 보정사업비</div>
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

                    {/* 표준공수·기본감리비 */}
                    <div className="calc-result-section-label">⑤ 기본감리비</div>
                    <div className="calc-result-rows">
                      <div className="calc-result-row">
                        <span>표준공수(MD)</span>
                        <span>{fmtMD(result.stdMD)}</span>
                      </div>
                      <div className="calc-result-row subtotal">
                        <span>기본감리비 (VAT 제외)</span>
                        <span>{fmt(result.basicFee)}</span>
                      </div>
                    </div>

                    {/* 상주·추가·직접 */}
                    {(result.resFee > 0 || result.extFee > 0 || result.direct > 0) && (
                      <>
                        <div className="calc-result-section-label">⑥ 추가 항목</div>
                        <div className="calc-result-rows">
                          {result.resFee > 0 && (
                            <div className="calc-result-row">
                              <span>상주감리비 (VAT 제외)</span>
                              <span>{fmt(result.resFee)}</span>
                            </div>
                          )}
                          {result.extFee > 0 && (
                            <div className="calc-result-row">
                              <span>추가감리비 (VAT 제외)</span>
                              <span>{fmt(result.extFee)}</span>
                            </div>
                          )}
                          {result.direct > 0 && (
                            <div className="calc-result-row">
                              <span>직접경비</span>
                              <span>{fmt(result.direct)}</span>
                            </div>
                          )}
                        </div>
                      </>
                    )}

                    {/* 최종 감리비 */}
                    <div className="calc-result-section-label">⑦ 최종 감리비</div>
                    <div className="calc-result-rows">
                      <div className="calc-result-row subtotal">
                        <span>최종 감리비 (VAT 제외)</span>
                        <span>{fmt(result.totalExcl)}</span>
                      </div>
                      <div className="calc-result-row">
                        <span>부가가치세 (10%)</span>
                        <span>{fmt(result.vatAmt)}</span>
                      </div>
                      <div className="calc-result-row total">
                        <span>최종 감리비 (VAT 포함)</span>
                        <span>{fmt(result.totalIncl)}</span>
                      </div>
                    </div>

                    <p className="calc-disclaimer">
                      ※ FP단가 605,784원 · IT감리 평균임금 502,494원 (2025.1 공표값)<br />
                      ※ 제경비율 {expRate}% · 기술료율 {techRate}% 적용<br />
                      ※ 본 결과는 참고용이며, 정확한 견적은 전문가 상담을 통해 확인하시기 바랍니다.
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
                ※ 산출식: 단계계수 × 502,494(MD) × (보정사업비 ÷ 605,784)^0.6385 × (1+제경비율) × (1+기술료율) × (1+난이도계수합계)
              </p>
            </>
          )}

        </div>
      </section>
    </div>
  );
}
