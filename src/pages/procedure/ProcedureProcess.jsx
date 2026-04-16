import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import './Procedure.css';

const STEPS = [
  {
    num: '01',
    title: '감리 계획 수립',
    duration: '착수 후 1주',
    icon: '📋',
    details: [
      '감리 범위 및 목표 확정',
      '감리단 구성 및 역할 배정',
      '감리 일정 및 체크리스트 작성',
      '감리 착수 회의 개최',
    ],
    outputs: ['감리 계획서', '감리 착수 보고서'],
  },
  {
    num: '02',
    title: '사전 자료 검토',
    duration: '1~2주차',
    icon: '📂',
    details: [
      '사업 계획서, 제안요청서(RFP) 검토',
      '계약서 및 과업지시서 분석',
      '이전 감리 결과(해당 시) 참조',
      'AI 기반 문서 자동 분석 수행',
    ],
    outputs: ['사전 검토 결과서', '주요 위험 목록'],
  },
  {
    num: '03',
    title: '현장 감리 수행',
    duration: '2~4주차',
    icon: '🔍',
    details: [
      '산출물 품질 검토 (설계서, 코드, 테스트 계획 등)',
      '요구사항 추적 매트릭스 확인',
      '인터뷰 및 현장 확인',
      'AI 도구를 활용한 산출물 정밀 분석',
      '이슈 목록 실시간 관리',
    ],
    outputs: ['중간 점검 결과서', '이슈 목록'],
  },
  {
    num: '04',
    title: '감리 결과 분석',
    duration: '4~5주차',
    icon: '📊',
    details: [
      '발견 이슈 분류 및 심각도 평가',
      '개선 권고안 도출',
      '조치 우선순위 결정',
      '정량적 품질 수준 산출',
    ],
    outputs: ['이슈 분석 보고서', '개선 권고안'],
  },
  {
    num: '05',
    title: '감리 결과 보고',
    duration: '5~6주차',
    icon: '📝',
    details: [
      '감리 결과 보고서 작성',
      '감리 결과 발표 회의',
      '발주기관 및 사업자 의견 수렴',
      '최종 감리 보고서 제출',
    ],
    outputs: ['최종 감리 결과보고서', '감리 의견서'],
  },
  {
    num: '06',
    title: '조치 이행 확인',
    duration: '보고 후 2~4주',
    icon: '✅',
    details: [
      '사업자의 조치 계획 수립 확인',
      '조치 이행 여부 점검',
      '미이행 이슈 지속 관리',
      '발주기관 최종 보고',
    ],
    outputs: ['조치확인 보고서', '감리 종료 확인서'],
  },
];

export default function ProcedureProcess() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <PageHeader
        title="감리 수행절차"
        subtitle="한길정보기술의 단계별 감리 수행 절차를 상세히 안내합니다."
        breadcrumbs={[{ label: '감리수행절차' }, { label: '감리 수행절차' }]}
      />

      <section className="page-section">
        <div className="container">
          <div className="section-divider" />
          <h2 className="section-title">감리 수행 단계</h2>
          <p className="section-subtitle">총 6단계의 체계적인 절차로 감리를 수행합니다. 각 단계를 클릭하면 상세 내용을 확인할 수 있습니다.</p>

          {/* Step Tabs */}
          <div className="proc-steps-nav">
            {STEPS.map((step, i) => (
              <button
                key={step.num}
                className={`proc-step-tab ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="proc-tab-num">{step.num}</span>
                <span className="proc-tab-title">{step.title}</span>
              </button>
            ))}
          </div>

          {/* Step Detail */}
          <div className="proc-detail">
            <div className="proc-detail-header">
              <div className="proc-detail-icon">{STEPS[active].icon}</div>
              <div>
                <div className="proc-detail-step">Step {STEPS[active].num}</div>
                <h3 className="proc-detail-title">{STEPS[active].title}</h3>
                <span className="proc-detail-duration">⏱ 소요기간: {STEPS[active].duration}</span>
              </div>
            </div>

            <div className="proc-detail-body">
              <div className="proc-detail-section">
                <h4>주요 활동</h4>
                <ul className="proc-activity-list">
                  {STEPS[active].details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
              <div className="proc-detail-section">
                <h4>산출물</h4>
                <div className="proc-outputs">
                  {STEPS[active].outputs.map((o) => (
                    <span key={o} className="proc-output-badge">{o}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Full Flow Diagram */}
          <div style={{ marginTop: 60 }}>
            <div className="section-divider" />
            <h2 className="section-title">전체 수행 흐름</h2>
            <div className="full-flow">
              {STEPS.map((step, i) => (
                <React.Fragment key={step.num}>
                  <div className="flow-box" onClick={() => setActive(i)} style={{ cursor: 'pointer', borderColor: active === i ? 'var(--text-dark)' : 'transparent', background: active === i ? 'var(--bg-light)' : 'white' }}>
                    <div className="flow-num">{step.num}</div>
                    <div className="flow-icon">{step.icon}</div>
                    <div className="flow-label">{step.title}</div>
                    <div className="flow-duration">{step.duration}</div>
                  </div>
                  {i < STEPS.length - 1 && <div className="flow-connector">→</div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
