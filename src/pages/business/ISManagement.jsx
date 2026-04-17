import React from 'react';
import PageHeader from '../../components/PageHeader';
import './Business.css';

const STEPS = [
  {
    num: '01',
    title: '사전 분석',
    sub: '현장 투입 전, AI가 먼저 사업을 읽습니다',
    desc: '착수 전 AI 분석 엔진으로 제안요청서·사업계획서를 자동 분석하여 리스크 요소와 핵심 점검 항목을 사전에 도출합니다. 감리사가 현장에 투입되기 전부터 사업의 전체 구조를 파악합니다.',
  },
  {
    num: '02',
    title: '맞춤 감리 계획',
    sub: '획일적 체크리스트가 아닌, 사업 맞춤 감리',
    desc: '사업 규모·성격·발주기관 특성에 맞춰 감리 중점 항목과 투입 인력을 최적화합니다. 기술사·수석감리원이 직접 계획을 수립하여 실효성 있는 감리 방향을 설계합니다.',
  },
  {
    num: '03',
    title: '현장 감리 수행',
    sub: '지적이 아닌 성공을 위한 파트너',
    desc: '산출물 검토와 면담을 병행하되, 문제 발견에만 그치지 않고 개선 방향을 함께 제시합니다. FP Code 솔루션으로 기능점수 산정의 객관성을 확보하고, 발주기관과 사업자 모두가 신뢰할 수 있는 감리 결과를 도출합니다.',
  },
  {
    num: '04',
    title: '완료 및 사후관리',
    sub: '감리 완료 후에도 책임지는 사후 지원',
    desc: '감리 보고서 제출로 끝나지 않습니다. 지적 사항 이행 여부 확인, 운영 전환 지원, 추가 이슈 발생 시 신속 대응 등 사업의 완전한 완료까지 함께합니다.',
  },
];

const SERVICE_AREAS = [
  {
    icon: '🚀',
    title: '착수 단계 감리',
    desc: '사업계획서·제안서 검토 및 착수 요건 확인으로 사업 목표를 명확히 하고 성공의 토대를 다집니다.',
  },
  {
    icon: '🔍',
    title: '중간 단계 감리',
    desc: '설계·구현 산출물 검토와 진행 현황 점검으로 사업 중간의 품질과 방향을 검증합니다.',
  },
  {
    icon: '✅',
    title: '준공 단계 감리',
    desc: '시험·검수 결과 검토와 완료 기준 확인으로 시스템이 요구사항을 충족했는지 최종 검증합니다.',
  },
  {
    icon: '⚙️',
    title: '운영 단계 감리',
    desc: '운영 중인 시스템의 현황과 성과를 점검하고 지속적인 개선사항을 도출합니다.',
  },
  {
    icon: '🔐',
    title: '보안 감리',
    desc: '정보보호 법규 준수 여부와 보안 취약점을 전문가가 직접 점검하고 조치 방안을 제시합니다.',
  },
  {
    icon: '📐',
    title: '기능점수 산정',
    desc: 'FP Code 솔루션 기반 객관적 기능점수 산정으로 사업 규모의 공정한 측정을 지원합니다.',
  },
];

const BENEFITS = [
  {
    icon: '🛡️',
    title: '사업 리스크 조기 해소',
    desc: 'AI 사전 분석으로 착수 전에 리스크를 파악하여 사업 실패 가능성을 선제적으로 차단합니다.',
  },
  {
    icon: '🔎',
    title: '독립적·객관적 검증',
    desc: '이해관계로부터 독립된 제3자가 객관적으로 검증하여 발주기관과 사업자 모두가 신뢰할 수 있습니다.',
  },
  {
    icon: '💡',
    title: '발주기관 의사결정 지원',
    desc: '전문 감리 결과를 바탕으로 합리적 의사결정을 지원하고 사업의 방향을 바로잡습니다.',
  },
  {
    icon: '📋',
    title: '법적 의무 충족',
    desc: '「전자정부법」 제57조 기반 감리 의무를 전문적으로 이행하여 법적 리스크를 해소합니다.',
  },
];

export default function ISManagement() {
  return (
    <div>
      <PageHeader
        title="정보시스템 감리"
        subtitle="AI와 전문 감리사가 함께, 사업의 성공을 끝까지 책임집니다."
        breadcrumbs={[{ label: '사업 분야' }, { label: '정보시스템 감리' }]}
      />

      <section className="page-section">
        <div className="container">

          {/* 정보시스템 감리란? */}
          <div className="biz-page-intro">
            <div>
              <div className="section-divider" />
              <h2 className="section-title">정보시스템 감리란?</h2>
              <p className="biz-page-desc">
                정보시스템 감리는 발주자·사업자의 이해관계로부터 독립된 제3자가 정보시스템의
                효율성 향상과 안전성 확보를 위해 구축·운영 전반을 종합적으로 점검하고
                문제점을 개선하는 <strong>용역(서비스) 사업</strong>입니다.
              </p>
              <p className="biz-page-desc">
                「전자정부법」 제57조에 따라 일정 규모 이상의 공공 정보화 사업은
                의무적으로 감리를 받아야 합니다.
              </p>
              <div className="biz-highlight-box">
                <p>
                  단순 점검을 넘어 사업의 성공을 함께 만드는 파트너로서,
                  발주기관과 사업자 모두가 신뢰할 수 있는 감리를 수행합니다.
                </p>
              </div>
            </div>
            <div className="biz-visual">
              {[
                '착수 단계 감리',
                '중간 단계 감리',
                '준공 단계 감리',
                '운영 단계 감리',
                '보안 감리',
                '기능점수 산정',
              ].map((step, i) => (
                <div key={step} className="biz-visual-item">
                  <div className="biz-visual-num">{i + 1}</div>
                  <span className="biz-visual-text">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 한길에이아이 감리 */}
          <div className="ism-about">
            <div className="ism-about-header">
              <p className="section-eyebrow">WHY HANGIL AI</p>
              <h2 className="section-title">한길에이아이 감리</h2>
              <p className="ism-about-lead">한길에이아이는 AI 기술과 감리 전문가의 경험으로 사업의 성공을 끝까지 책임집니다.</p>
            </div>
            <p className="biz-page-desc">
              한길에이아이는 대한민국 최초로 AI 기술을 감리에 접목했습니다.
              착수 전 AI 분석으로 리스크를 선제적으로 파악하고, 기술사·수석감리원이 직접 현장을 수행합니다.
              자체 개발한 <strong>FP Code 솔루션</strong>으로 기능점수 산정의 객관성을 보장하며,
              단순 지적이 아닌 발주기관과 사업자 모두의 성공을 위한 실질적인 개선 방향을 제시합니다.
            </p>
          </div>

          {/* 수행 절차 4단계 */}
          <div className="ism-steps">
            {STEPS.map((step, i) => (
              <div key={step.num} className="ism-step">
                <div className="ism-step-num">{step.num}</div>
                <div>
                  <h3 className="ism-step-title">{step.title}</h3>
                  <p className="ism-step-sub">{step.sub}</p>
                  <p className="ism-step-desc">{step.desc}</p>
                </div>
                {i < STEPS.length - 1 && <div className="ism-step-arrow">›</div>}
              </div>
            ))}
          </div>

          {/* 감리 서비스 영역 */}
          <div className="service-scope">
            <div className="section-divider" />
            <h2 className="section-title">감리 서비스 영역</h2>
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
