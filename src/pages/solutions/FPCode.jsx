import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import './Solutions.css';

const FEATURES = [
  { icon: '🤖', title: 'AI 자동 산정', desc: '자연어 처리 기반으로 요구사항 문서를 분석하여 기능점수(FP)를 자동으로 산정합니다.' },
  { icon: '📊', title: '실시간 대시보드', desc: '프로젝트별 기능점수 현황, 변경 이력, 추이를 실시간으로 시각화하여 보여줍니다.' },
  { icon: '🔍', title: '요구사항 추적', desc: '기능점수와 요구사항을 연계하여 변경 발생 시 영향도를 자동으로 분석합니다.' },
  { icon: '📝', title: '보고서 자동 생성', desc: 'IFPUG/NESMA 국제 표준에 맞는 기능점수 산정 보고서를 클릭 한 번에 생성합니다.' },
  { icon: '🔗', title: 'API 연동', desc: 'REST API를 통해 기존 PM/감리 시스템과 손쉽게 연동하여 데이터를 공유합니다.' },
  { icon: '🛡️', title: '보안 강화', desc: '역할 기반 접근 제어와 감사 로그로 중요 데이터를 안전하게 관리합니다.' },
];

const PROCESS = [
  { step: '01', title: '문서 업로드', desc: '요구사항 정의서, 기능 명세서 등을 업로드', icon: '📤' },
  { step: '02', title: 'AI 분석', desc: 'AI가 기능 항목을 자동으로 식별하고 분류', icon: '🤖' },
  { step: '03', title: '검토 및 조정', desc: '전문가가 AI 결과를 검토하고 필요시 수정', icon: '👨‍💼' },
  { step: '04', title: '보고서 생성', desc: '표준 기능점수 산정서 및 사업 규모 산출서 발행', icon: '📄' },
];

const STANDARDS = [
  { name: 'IFPUG', desc: '국제기능점수사용자그룹 표준 지원' },
  { name: 'NESMA', desc: '네덜란드 SW메트릭협회 표준 지원' },
  { name: '간이법', desc: '행정안전부 간이 기능점수 산정 방법 지원' },
  { name: 'FPA', desc: '기능점수 분석 방법론 완전 지원' },
];

const COMPARE = [
  { item: '산정 시간', before: '수일 ~ 수주', after: '수 시간 이내', better: true },
  { item: '산정 정확도', before: '전문가별 편차 존재', after: 'AI 표준화로 일관성 확보', better: true },
  { item: '비용', before: '높은 인건비', after: '자동화로 대폭 절감', better: true },
  { item: '추적 관리', before: '수동 관리 (오류 위험)', after: '자동 이력 관리', better: true },
  { item: '보고서 생성', before: '수작업 (오래 걸림)', after: '원클릭 자동 생성', better: true },
];

export default function FPCode() {
  const [activeTab, setActiveTab] = useState('features');

  return (
    <div>
      <PageHeader
        title="FP Code"
        subtitle="한길정보기술이 자체 개발한 AI 기반 기능점수(Function Point) 산정 솔루션"
        breadcrumbs={[{ label: '솔루션' }, { label: 'FP Code' }]}
      />

      <section className="page-section">
        <div className="container">

          {/* Hero Section */}
          <div className="fp-hero">
            <div className="fp-hero-content">
              <div className="fp-badge">자체 개발 솔루션</div>
              <h2 className="fp-hero-title">FP Code</h2>
              <p className="fp-hero-subtitle">AI Function Point Estimation System</p>
              <p className="fp-hero-desc">
                대한민국 최초로 AI를 접목한 기능점수 산정 솔루션으로,
                정보시스템 사업 규모 산정의 정확성과 효율성을 혁신적으로 향상시킵니다.
              </p>
              <div className="fp-hero-stats">
                {[
                  { value: '90%↑', label: '시간 절감' },
                  { value: '±3%', label: '산정 오차율' },
                  { value: '50+', label: '도입 기관' },
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
                  <span />
                  <span />
                  <span />
                  <span className="fp-mock-title">FP Code — 기능점수 분석</span>
                </div>
                <div className="fp-mock-body">
                  <div className="fp-mock-chart">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
                      <span>기능점수 현황</span>
                      <span>실시간</span>
                    </div>
                    {['EI', 'EO', 'EQ', 'ILF', 'EIF'].map((type, i) => {
                      const vals = [35, 28, 20, 42, 15];
                      return (
                        <div key={type} style={{ marginBottom: 10 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>
                            <span>{type}</span>
                            <span>{vals[i]} FP</span>
                          </div>
                          <div style={{ height: 8, background: 'rgba(255,255,255,0.1)', borderRadius: 4, overflow: 'hidden' }}>
                            <div style={{ height: '100%', width: `${vals[i] / 42 * 100}%`, background: 'linear-gradient(to right, #4da6ff, #80ccff)', borderRadius: 4 }} />
                          </div>
                        </div>
                      );
                    })}
                    <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between' }}>
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
              { key: 'features', label: '주요 기능' },
              { key: 'process', label: '동작 방식' },
              { key: 'standards', label: '지원 표준' },
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

          {/* Tab Content */}
          {activeTab === 'features' && (
            <div className="fp-tab-content">
              <div className="grid-3" style={{ gap: 20 }}>
                {FEATURES.map((f) => (
                  <div key={f.title} className="fp-feature-card card">
                    <div className="fp-feature-icon">{f.icon}</div>
                    <h3 className="fp-feature-title">{f.title}</h3>
                    <p className="fp-feature-desc">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

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
                <h3 className="fp-tech-title">적용 기술</h3>
                <div className="fp-tech-tags">
                  {['NLP (자연어 처리)', 'Transformer', 'Fine-tuned LLM', 'Python', 'Spring Boot', 'React', 'PostgreSQL', 'Docker / K8s'].map((tech) => (
                    <span key={tech} className="fp-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'standards' && (
            <div className="fp-tab-content">
              <div className="grid-4" style={{ gap: 20 }}>
                {STANDARDS.map((s) => (
                  <div key={s.name} className="fp-std-card card" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-dark)', marginBottom: 8 }}>{s.name}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-mid)' }}>{s.desc}</div>
                  </div>
                ))}
              </div>
              <div className="fp-cert-box card" style={{ marginTop: 32 }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 12 }}>인증 및 특허</h3>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {['특허 등록 (제10-XXXXXXX호)', 'GS 인증 (1등급)', '공공기관 도입 실적 50+ 건'].map((cert) => (
                    <span key={cert} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 14px', background: 'var(--bg-light)', color: 'var(--text-dark)', borderRadius: 2, fontSize: '0.84rem', fontWeight: 600, border: '1px solid var(--border)' }}>
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'compare' && (
            <div className="fp-tab-content">
              <div style={{ overflowX: 'auto' }}>
                <table className="fp-compare-table">
                  <thead>
                    <tr>
                      <th>항목</th>
                      <th>기존 방식</th>
                      <th>FP Code 도입 후</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARE.map((row) => (
                      <tr key={row.item}>
                        <td style={{ fontWeight: 600 }}>{row.item}</td>
                        <td style={{ color: 'var(--text-light)' }}>{row.before}</td>
                        <td>
                          <span style={{ color: 'var(--text-dark)', fontWeight: 600 }}>✓ {row.after}</span>
                        </td>
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
                    { value: '60%', label: '비용 절감' },
                    { value: '97%', label: '고객 만족도' },
                  ].map((r) => (
                    <div key={r.label} style={{ textAlign: 'center', padding: 32, background: 'white' }}>
                      <div style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--text-dark)', marginBottom: 6, letterSpacing: '-0.03em' }}>{r.value}</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="fp-cta">
            <h2>FP Code 도입 문의</h2>
            <p>무료 데모와 상세 설명회를 신청하시면 전문가가 직접 방문하여 안내해 드립니다.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button className="btn-primary" style={{ padding: '14px 40px', fontSize: '1rem' }}>데모 신청하기</button>
              <button className="btn-outline" style={{ padding: '14px 40px', fontSize: '1rem', borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>
                02-0000-0000
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
