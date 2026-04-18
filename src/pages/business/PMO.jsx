import React from 'react';
import PageHeader from '../../components/PageHeader';
import './Business.css';

const PMO_STEPS = [
  {
    num: '01',
    title: '착수 및 계획 수립',
    sub: '사업 리스크를 진단하고 최적의 PMO를 설계합니다',
    desc: '착수 전 AI 분석으로 RFP·사업계획서를 자동 분석하여 리스크 요소와 핵심 관리 항목을 사전에 도출합니다. 사업 규모·성격에 맞는 맞춤형 PMO 계획을 수립하여 성공의 토대를 만듭니다.',
  },
  {
    num: '02',
    title: '일정·비용 통합 관리',
    sub: '숫자로 증명하는 투명한 관리',
    desc: 'WBS 기반 일정 추적과 예산 집행 현황 모니터링을 병행합니다. FP Code Analyzer을 활용한 기능점수 기반 객관적 비용 산정으로 예산 왜곡과 범위 초과을 방지합니다.',
  },
  {
    num: '03',
    title: '품질·리스크 관리',
    sub: '감리 전문가의 눈으로 품질을 지킵니다',
    desc: '정보시스템 감리에서 축적된 품질 검증 역량을 PMO에 그대로 적용합니다. 잠재 위험을 사전에 식별하고, 산출물 검토와 이슈 조정을 통해 사업의 완성도를 높입니다.',
  },
  {
    num: '04',
    title: '종료 및 성과 평가',
    sub: '사업 완료 이후까지 책임집니다',
    desc: '단순 완료 보고로 끝나지 않습니다. 목표 달성 여부를 객관적으로 평가하고, 미결 이슈 이행 확인과 운영 전환 지원까지 프로젝트의 완전한 성공을 함께 완성합니다.',
  },
];

const SERVICE_AREAS = [
  {
    icon: '📅',
    title: '일정 관리',
    desc: 'WBS 기반으로 전체 일정을 계획하고, 주기적 모니터링으로 지연을 선제적으로 예방합니다.',
  },
  {
    icon: '💰',
    title: '비용 관리',
    desc: 'FP Code 기반 객관적 비용 산정과 예산 집행 추적으로 비용 효율성을 극대화합니다.',
  },
  {
    icon: '🛡️',
    title: '품질 관리',
    desc: '감리 전문 역량을 기반으로 산출물 검토부터 테스트 관리까지 체계적 품질 보증을 수행합니다.',
  },
  {
    icon: '⚠️',
    title: '리스크 관리',
    desc: 'AI 분석과 축적된 감리 경험으로 잠재 위험을 사전에 식별하고 대응 방안을 마련합니다.',
  },
  {
    icon: '🔗',
    title: '범위 관리',
    desc: '요구사항 변경을 체계적으로 관리하고 범위 초과을 방지하여 목표 범위를 유지합니다.',
  },
  {
    icon: '📢',
    title: '의사소통 관리',
    desc: '이해관계자별 맞춤형 보고 체계를 구축하고 발주기관·사업자 간 원활한 소통을 촉진합니다.',
  },
];

const BENEFITS = [
  {
    icon: '✅',
    title: '사업 성공률 향상',
    desc: '20년 이상 정보화 사업 경험을 보유한 전문 PMO 조직이 체계적으로 관리하여 사업 성공 가능성을 획기적으로 높입니다.',
  },
  {
    icon: '🔍',
    title: '감리에서 시작한 PMO 통찰',
    desc: '정보시스템 감리 전문가의 독립적 시각으로 일정·비용 관리를 넘어 품질까지 통합 관리합니다.',
  },
  {
    icon: '📊',
    title: '투명한 사업 관리',
    desc: '실시간 진행 현황 보고와 객관적 지표 기반 관리로 발주기관의 사업 가시성을 확보합니다.',
  },
  {
    icon: '🚀',
    title: '납기 및 예산 준수',
    desc: 'AI 기반 리스크 사전 진단과 FP Code Analyzer으로 납기와 예산 준수율을 체계적으로 높입니다.',
  },
];

export default function PMO() {
  return (
    <div>
      <PageHeader
        title="정보시스템 PMO"
        subtitle="감리 전문가의 통찰력으로 프로젝트 전 영역을 통합 관리합니다."
        breadcrumbs={[{ label: '사업 분야' }, { label: '정보시스템 PMO' }]}
      />

      <section className="page-section">
        <div className="container">

          {/* PMO 서비스란? */}
          <div className="biz-page-intro">
            <div>
              <div className="section-divider" />
              <h2 className="section-title">PMO 서비스란?</h2>
              <p className="biz-page-desc">
                PMO(Project Management Office)는 정보화 사업의 성공적인 수행을 위해
                발주기관을 대신하여 프로젝트를 전문적으로 관리·지원하는 서비스입니다.
              </p>
              <p className="biz-page-desc">
                일정·비용·품질·리스크·범위·의사소통 등 프로젝트의 전 영역을 체계적으로
                관리하여 사업 목표 달성을 보장합니다.
              </p>
              <div className="biz-highlight-box">
                <p>
                  발주기관의 PM 역량이 부족하거나 대규모·복잡 사업의 경우,
                  전문 PMO 조직을 활용하면 사업 성공률을 획기적으로 높일 수 있습니다.
                </p>
              </div>
            </div>
            <div className="biz-visual">
              {[
                '착수 및 계획 수립',
                '요구사항 및 범위 관리',
                '일정·비용 모니터링',
                '품질·리스크 관리',
                '변경 관리 및 의사소통',
                '종료 및 성과 평가',
              ].map((step, i) => (
                <div key={step} className="biz-visual-item">
                  <div className="biz-visual-num">{i + 1}</div>
                  <span className="biz-visual-text">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 한길에이아이 PMO가 다른 이유 */}
          <div className="ism-about">
            <div className="ism-about-header">
              <p className="section-eyebrow">WHY HANGIL AI</p>
              <h2 className="section-title">한길에이아이 PMO</h2>
              <p className="ism-about-lead">한길에이아이는 감리 전문가의 통찰력으로 성공을 만드는 PMO를 수행합니다.</p>
            </div>
            <p className="biz-page-desc">
              한길에이아이의 PMO는 단순한 일정·비용 관리를 넘어섭니다.
              정보시스템 감리 전문가의 독립적 시각과 20년 이상의 정보화 사업 경험을 바탕으로,
              AI 기술로 리스크를 선제적으로 진단하고 자체 개발한 <strong>FP Code Analyzer</strong>으로
              기능점수 산정의 객관성을 확보합니다.
              발주기관과 사업자 모두가 신뢰할 수 있는 투명하고 실질적인 PMO를 수행합니다.
            </p>
          </div>

          {/* PMO 수행 단계 */}
          <div className="section-block">
            <div className="section-divider" />
            <h2 className="section-title">PMO 수행 단계</h2>
            <div className="ism-steps" style={{ marginTop: 32 }}>
              {PMO_STEPS.map((step, i) => (
                <div key={step.num} className="ism-step">
                  <div className="ism-step-num">{step.num}</div>
                  <div>
                    <h3 className="ism-step-title">{step.title}</h3>
                    <p className="ism-step-sub">{step.sub}</p>
                    <p className="ism-step-desc">{step.desc}</p>
                  </div>
                  {i < PMO_STEPS.length - 1 && <div className="ism-step-arrow">›</div>}
                </div>
              ))}
            </div>
          </div>

          {/* PMO 서비스 영역 */}
          <div className="service-scope">
            <div className="section-divider" />
            <h2 className="section-title">PMO 서비스 영역</h2>
            <div className="scope-grid">
              {SERVICE_AREAS.map((item) => (
                <div key={item.title} className="scope-card">
                  <div className="scope-icon">{item.icon}</div>
                  <h3 className="scope-title">{item.title}</h3>
                  <p className="scope-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 도입 기대 효과 */}
          <div className="section-block">
            <div className="section-divider" />
            <h2 className="section-title">도입 기대 효과</h2>
            <div className="expectation-grid">
              {BENEFITS.map((item) => (
                <div key={item.title} className="expectation-item">
                  <div className="expectation-icon">{item.icon}</div>
                  <div>
                    <div className="expectation-title">{item.title}</div>
                    <div className="expectation-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
