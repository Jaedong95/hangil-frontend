import React from 'react';
import PageHeader from '../../components/PageHeader';
import './Business.css';

const STEPS = [
  {
    num: '01',
    title: '사전 분석',
    sub: 'AI로 사업 구조를 먼저 읽습니다',
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
    desc: '산출물 검토와 면담을 병행하되, 문제 발견에만 그치지 않고 개선 방향을 함께 제시합니다. FP Code 솔루션으로 기능점수 산정의 객관성을 확보하고, 사업자와 발주기관 모두가 신뢰할 수 있는 감리 결과를 도출합니다.',
  },
  {
    num: '04',
    title: '완료 및 사후관리',
    sub: '감리 완료 후에도 책임지는 사후 지원',
    desc: '감리 보고서 제출로 끝나지 않습니다. 지적 사항 이행 여부 확인, 운영 전환 지원, 추가 이슈 발생 시 신속 대응 등 사업의 완전한 완료까지 함께합니다.',
  },
];

export default function ISManagement() {
  return (
    <div>
      <PageHeader
        title="정보시스템 감리"
        subtitle="AI와 전문 감리사가 함께, 사업의 성공을 끝까지 책임집니다."
      />

      <section className="page-section">
        <div className="container">

          {/* 정의 */}
          <div className="ism-intro">
            <div className="section-divider" />
            <h2 className="section-title">정보시스템 감리란?</h2>
            <p className="biz-page-desc">
              정보시스템 감리는 발주자·사업자의 이해관계로부터 독립된 제3자가 정보시스템의
              효율성 향상과 안전성 확보를 위해 구축·운영 전반을 종합적으로 점검하고
              문제점을 개선하는 <strong>용역(서비스) 사업</strong>입니다.
              「전자정부법」 제57조에 따라 일정 규모 이상의 공공 정보화 사업은 의무적으로 감리를 받아야 합니다.
            </p>
          </div>

          {/* 한길에이아이 차별점 */}
          <div className="ism-about">
            <div className="ism-about-header">
              <p className="section-eyebrow">WHY HANGIL AI</p>
              <h2 className="section-title">한길에이아이 감리가 다른 이유</h2>
              <p className="ism-about-lead">"지적하는 감리"가 아닌, "성공을 만드는 감리"</p>
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
                <div className="ism-step-body">
                  <h3 className="ism-step-title">{step.title}</h3>
                  <p className="ism-step-sub">{step.sub}</p>
                  <p className="ism-step-desc">{step.desc}</p>
                </div>
                {i < STEPS.length - 1 && <div className="ism-step-arrow">›</div>}
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
