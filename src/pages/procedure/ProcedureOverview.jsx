import React from 'react';
import PageHeader from '../../components/PageHeader';
import './Procedure.css';

export default function ProcedureOverview() {
  return (
    <div>
      <PageHeader
        title="감리수행절차 개요"
        subtitle="한길정보기술의 체계적인 감리 수행 방법론을 소개합니다."
        breadcrumbs={[{ label: '감리수행절차' }, { label: '개요' }]}
      />

      <section className="page-section">
        <div className="container">
          <div className="section-divider" />
          <h2 className="section-title">감리 수행 개요</h2>
          <p className="section-subtitle">
            한길정보기술은 전자정부법 및 관련 고시에 따른 법적 요건을 충족하면서도,
            AI 기술을 활용한 혁신적인 감리 방법론을 적용합니다.
          </p>

          {/* 감리 근거 */}
          <div className="overview-box-grid">
            {[
              {
                icon: '⚖️',
                title: '법적 근거',
                items: [
                  '전자정부법 제57조 (정보시스템의 감리)',
                  '행정기관 및 공공기관 정보시스템 감리 지침 (행정안전부 고시)',
                  '소프트웨어 진흥법',
                ],
              },
              {
                icon: '🏆',
                title: '감리 원칙',
                items: [
                  '독립성: 발주기관·사업자와 독립적 위치에서 공정하게 수행',
                  '전문성: 자격을 갖춘 전문 감리사 배치',
                  '객관성: 데이터와 증거 기반의 객관적 판단',
                  'AI 활용: 최신 AI 기술로 정밀도·효율성 향상',
                ],
              },
              {
                icon: '📐',
                title: '감리 대상',
                items: [
                  '40억원 이상 정보화 사업 (의무 감리)',
                  '20억원 이상 ~ 40억원 미만 (선택적 의무)',
                  '20억원 미만 (임의 감리)',
                  '클라우드 전환, 운영 사업 등',
                ],
              },
            ].map((box) => (
              <div key={box.title} className="overview-box card">
                <div className="overview-box-icon">{box.icon}</div>
                <h3 className="overview-box-title">{box.title}</h3>
                <ul className="overview-box-list">
                  {box.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 감리 유형별 시점 */}
          <div style={{ marginTop: 60 }}>
            <div className="section-divider" />
            <h2 className="section-title">감리 시점 및 유형</h2>
            <div className="phase-timeline">
              {[
                { phase: '사업 초기', label: '요구사항 감리', color: '#1a4fa0', desc: '사업 계획의 적정성, 요구사항 명확성 검토' },
                { phase: '설계 단계', label: '설계 감리', color: '#0052b4', desc: '시스템 설계의 완전성 및 구현 가능성 확인' },
                { phase: '개발 단계', label: '개발 감리', color: '#0066cc', desc: '개발 표준 준수, 코드 품질, 테스트 점검' },
                { phase: '종료 단계', label: '종료 감리', color: '#1a7fd4', desc: '인수 테스트, 이행 계획, 운영 전환 준비 확인' },
                { phase: '운영 단계', label: '운영 감리', color: '#3399e0', desc: '운영 안정성, 성능, 보안 수준 주기적 점검' },
              ].map((p, i) => (
                <div key={p.label} className="phase-item">
                  <div className="phase-bar" style={{ background: p.color }}>
                    <span className="phase-phase">{p.phase}</span>
                    <span className="phase-label">{p.label}</span>
                  </div>
                  <div className="phase-desc">{p.desc}</div>
                  {i < 4 && <div className="phase-arrow">→</div>}
                </div>
              ))}
            </div>
          </div>

          {/* AI 감리 특징 */}
          <div style={{ marginTop: 60 }}>
            <div className="section-divider" />
            <h2 className="section-title">AI 감리의 특징</h2>
            <div className="ai-features-grid">
              {[
                { icon: '⚡', title: '신속한 문서 분석', desc: '수백~수천 페이지의 산출물을 AI가 자동으로 분석하여 감리 시간을 획기적으로 단축합니다.' },
                { icon: '🎯', title: '높은 정확도', desc: '인간이 놓칠 수 있는 미세한 불일치나 오류를 AI가 빠짐없이 탐지합니다.' },
                { icon: '📊', title: '데이터 기반 결과', desc: '감리 결과를 정량화하여 객관적인 품질 수준 지표와 추이를 제공합니다.' },
                { icon: '🔄', title: '지속적 학습', desc: '감리 데이터가 축적될수록 AI 모델이 고도화되어 감리 품질이 계속 향상됩니다.' },
              ].map((item) => (
                <div key={item.title} className="ai-feature-card card">
                  <div className="ai-feature-icon">{item.icon}</div>
                  <h3 className="ai-feature-title">{item.title}</h3>
                  <p className="ai-feature-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
