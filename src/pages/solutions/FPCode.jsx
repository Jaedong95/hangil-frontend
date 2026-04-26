import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import servicesBg from '../../assets/Services.png';
import ContactModal from '../../components/ContactModal';
import './Solutions.css';

const FEATURES = [
  {
    key: 'data',
    title: '데이터 기능',
    icon: '🗄️',
    items: [
      'MyBatis, JPA 소스 분석을 통해 데이터기능 자동 추출',
      '내부 논리파일(ILF) 및 외부 연계파일(EIF) 자동 식별',
    ],
  },
  {
    key: 'transaction',
    title: '트랜잭션 기능',
    icon: '⚙️',
    items: [
      '소스 코드 주석 및 쿼리 구문 분석을 통한 자동 산출',
      'EI(외부 입력), EO(외부 출력), EQ(외부 조회) 정량적 산출',
    ],
  },
  {
    key: 'report',
    title: '결과 보고서',
    icon: '📄',
    items: [
      '소스코드 기반 산정 결과를 분석하여 전문보고서 생성',
      'SW개발비 산출 내역 등 표준 양식 자동 출력',
    ],
  },
];

const FP_SCOPE = [
  {
    category: '데이터 기능',
    color: '#1a56b0',
    items: ['내부 논리파일 (ILF)', '외부 연계파일 (EIF)'],
  },
  {
    category: '트랜잭션 기능',
    color: '#2e7d32',
    items: ['외부 입력 (EI)', '외부 출력 (EO)', '외부 조회 (EQ)'],
  },
];

const PROCESS = [
  { step: '01', title: '소스코드 업로드', desc: 'Java, MyBatis, JPA 등 소스코드 및 쿼리 파일 업로드', icon: '📤' },
  { step: '02', title: '자동 분석', desc: '주석·쿼리 구문 파싱 → 데이터·트랜잭션 기능 자동 분류', icon: '🔍' },
  { step: '03', title: '검토 및 조정', desc: '전문가가 산정 결과를 검토하고 필요 시 수정', icon: '👨‍💼' },
  { step: '04', title: '보고서 출력', desc: 'FP 산정서, SW개발비 산출 내역 등 전문보고서 생성', icon: '📋' },
];

const COMPARE = [
  { item: '산정 방식', before: '수동 문서 분석', after: '소스코드 자동 파싱' },
  { item: '데이터 기능 식별', before: '전문가 수작업', after: 'MyBatis/JPA 분석 자동화' },
  { item: '트랜잭션 기능 식별', before: '수동 코드 리뷰', after: '주석·쿼리 구문 자동 추출' },
  { item: '산정 시간', before: '수일 ~ 수주', after: '수 시간 이내' },
  { item: '보고서 생성', before: '수작업 작성', after: '원클릭 자동 생성' },
];

export default function FPCode() {
  const [activeTab, setActiveTab] = useState('features');
  const [showContact, setShowContact] = useState(false);

  return (
    <div>
      <PageHeader
        title="FP Code Analyzer"
        subtitle="소스기반 Function Point(기능점수) 측정 도구"
        bgImage={servicesBg}
      />

      <section className="page-section">
        <div className="container">

          {/* Hero */}
          <div className="fp-hero">
            <div className="fp-hero-content">
              <div className="fp-badge">제안사 자체 개발 도구</div>
              <h2 className="fp-hero-title">FP Code Analyzer</h2>
              <p className="fp-hero-subtitle">Source-based Function Point Measurement System</p>
              <p className="fp-hero-desc">
                소스 코드를 직접 분석하여 데이터 기능과 트랜잭션 기능을 자동으로 추출·산정하는
                한길에이아이의 자체 개발 기능점수 측정 도구입니다.
              </p>
              <div className="fp-hero-stats">
                {[
                  { value: 'MyBatis', label: 'JPA 분석' },
                  { value: '5종', label: 'FP 유형 지원' },
                  { value: '자동화', label: '보고서 생성' },
                ].map((s) => (
                  <div key={s.label} className="fp-stat">
                    <span className="fp-stat-value">{s.value}</span>
                    <span className="fp-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                <button className="btn-primary">데모 신청</button>
                <button className="btn-outline">소개서 다운로드</button>
              </div>
            </div>
            <div className="fp-hero-visual">
              <div className="fp-screen-mock">
                <div className="fp-mock-titlebar">
                  <span /><span /><span />
                  <span className="fp-mock-title">FP Code Analyzer — 기능점수 분석</span>
                </div>
                <div className="fp-mock-body">
                  <div className="fp-mock-chart">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
                      <span>기능점수 현황</span>
                      <span>실시간</span>
                    </div>
                    {[
                      { type: 'ILF (내부 논리파일)', val: 42, max: 42 },
                      { type: 'EIF (외부 연계파일)', val: 15, max: 42 },
                      { type: 'EI (외부 입력)', val: 35, max: 42 },
                      { type: 'EO (외부 출력)', val: 28, max: 42 },
                      { type: 'EQ (외부 조회)', val: 20, max: 42 },
                    ].map((item) => (
                      <div key={item.type} style={{ marginBottom: 10 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'rgba(255,255,255,0.65)', marginBottom: 4 }}>
                          <span>{item.type}</span>
                          <span>{item.val} FP</span>
                        </div>
                        <div style={{ height: 7, background: 'rgba(255,255,255,0.1)', borderRadius: 4, overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${item.val / item.max * 100}%`, background: 'linear-gradient(to right, #4da6ff, #80ccff)', borderRadius: 4 }} />
                        </div>
                      </div>
                    ))}
                    <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>총 기능점수</span>
                      <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#80ccff' }}>140 FP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="fp-tabs">
            {[
              { key: 'features', label: '주요 특징' },
              { key: 'scope', label: '적용 범위' },
              { key: 'process', label: '동작 방식' },
              { key: 'compare', label: '도입 효과' },
            ].map((tab) => (
              <button
                key={tab.key}
                className={`fp-tab ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 주요 특징 */}
          {activeTab === 'features' && (
            <div className="fp-tab-content">
              <div className="fp-features-grid">
                {FEATURES.map((f) => (
                  <div key={f.key} className="fp-feature-card card">
                    <div className="fp-feature-header">
                      <span className="fp-feature-icon">{f.icon}</span>
                      <h3 className="fp-feature-title">{f.title}</h3>
                    </div>
                    <ul className="fp-feature-list">
                      {f.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="fp-apply-box card" style={{ marginTop: 32 }}>
                <div className="fp-apply-badge">적용 방안</div>
                <h3 className="fp-apply-title">제안사 기술연구소 자체 개발 점검 도구 (FP Code Analyzer)</h3>
                <p className="fp-apply-desc">
                  감리 수행 시 소스코드를 직접 업로드하여 기능점수를 자동으로 산정하고,
                  산정 결과를 기반으로 SW개발비 적정성 검토 및 전문 보고서를 즉시 생성합니다.
                </p>
                <div className="fp-apply-tags">
                  {['Java 소스 분석', 'MyBatis XML', 'JPA Entity', '쿼리 구문 파싱', '보고서 자동화'].map(tag => (
                    <span key={tag} className="fp-tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 적용 범위 */}
          {activeTab === 'scope' && (
            <div className="fp-tab-content">
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                기능점수(FP)는 데이터 기능과 트랜잭션 기능으로 구성되며, FP Code Analyzer는 5가지 유형 모두를 자동으로 측정합니다.
              </p>
              <div className="fp-scope-diagram">
                <div className="fp-scope-root">
                  <div className="fp-scope-root-label">기능점수 (FP)</div>
                </div>
                <div className="fp-scope-branches">
                  {FP_SCOPE.map((branch) => (
                    <div key={branch.category} className="fp-scope-branch">
                      <div className="fp-scope-branch-connector" />
                      <div className="fp-scope-category" style={{ borderColor: branch.color, color: branch.color }}>
                        {branch.category}
                      </div>
                      <div className="fp-scope-items">
                        {branch.items.map(item => (
                          <div key={item} className="fp-scope-item" style={{ borderColor: branch.color }}>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ overflowX: 'auto', marginTop: 40 }}>
                <table className="fp-compare-table">
                  <thead>
                    <tr><th>FP 유형</th><th>분류</th><th>분석 방법</th></tr>
                  </thead>
                  <tbody>
                    {[
                      { type: 'ILF (내부 논리파일)', cat: '데이터 기능', method: 'JPA Entity, MyBatis resultMap 분석' },
                      { type: 'EIF (외부 연계파일)', cat: '데이터 기능', method: '외부 API 연동 및 연계 테이블 분석' },
                      { type: 'EI (외부 입력)', cat: '트랜잭션 기능', method: 'INSERT/UPDATE 쿼리 및 주석 파싱' },
                      { type: 'EO (외부 출력)', cat: '트랜잭션 기능', method: 'SELECT 결과 가공 로직 분석' },
                      { type: 'EQ (외부 조회)', cat: '트랜잭션 기능', method: 'SELECT 단순 조회 쿼리 파싱' },
                    ].map(row => (
                      <tr key={row.type}>
                        <td style={{ fontWeight: 600 }}>{row.type}</td>
                        <td>{row.cat}</td>
                        <td style={{ fontSize: '0.85rem', color: 'var(--text-mid)' }}>{row.method}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 동작 방식 */}
          {activeTab === 'process' && (
            <div className="fp-tab-content">
              <div className="fp-process">
                {PROCESS.map((p, i) => (
                  <React.Fragment key={p.step}>
                    <div className="fp-proc-item">
                      <div className="fp-proc-icon">{p.icon}</div>
                      <div className="fp-proc-num">STEP {p.step}</div>
                      <div className="fp-proc-title">{p.title}</div>
                      <div className="fp-proc-desc">{p.desc}</div>
                    </div>
                    {i < PROCESS.length - 1 && <div className="fp-proc-arrow">→</div>}
                  </React.Fragment>
                ))}
              </div>
              <div className="fp-tech-stack">
                <h3 className="fp-tech-title">분석 지원 기술 스택</h3>
                <div className="fp-tech-tags">
                  {['Java', 'MyBatis XML', 'JPA / Hibernate', 'Spring Boot', 'SQL 쿼리 파싱', '소스 주석 분석', 'React', 'PostgreSQL'].map((tech) => (
                    <span key={tech} className="fp-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 도입 효과 */}
          {activeTab === 'compare' && (
            <div className="fp-tab-content">
              <div style={{ overflowX: 'auto' }}>
                <table className="fp-compare-table">
                  <thead>
                    <tr>
                      <th>항목</th>
                      <th>기존 방식</th>
                      <th>FP Code Analyzer 도입 후</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARE.map((row) => (
                      <tr key={row.item}>
                        <td style={{ fontWeight: 600 }}>{row.item}</td>
                        <td style={{ color: 'var(--text-light)' }}>{row.before}</td>
                        <td><span style={{ color: 'var(--text-dark)', fontWeight: 600 }}>✓ {row.after}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="fp-roi-box card" style={{ marginTop: 32 }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 16 }}>투자 대비 효과 (ROI)</h3>
                <div className="grid-3" style={{ gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
                  {[
                    { value: '90%', label: '산정 시간 단축' },
                    { value: '자동화', label: '보고서 생성' },
                    { value: '5종', label: 'FP 유형 지원' },
                  ].map((r) => (
                    <div key={r.label} style={{ textAlign: 'center', padding: 32, background: 'white' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-dark)', marginBottom: 6, letterSpacing: '-0.03em' }}>{r.value}</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="fp-cta">
            <h2>FP Code Analyzer 도입 문의</h2>
            <p>무료 데모와 상세 설명회를 신청하시면 전문가가 직접 방문하여 안내해 드립니다.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button className="btn-primary" style={{ padding: '14px 40px', fontSize: '1rem' }}>데모 신청하기</button>
              <button
                className="btn-outline"
                style={{ padding: '14px 40px', fontSize: '1rem', borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}
                onClick={() => setShowContact(true)}
              >
                상담 문의하기 (견적서 요청)
              </button>
            </div>
          </div>

        </div>
      </section>

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </div>
  );
}
