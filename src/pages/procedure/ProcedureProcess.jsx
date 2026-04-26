import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import auditBg from '../../assets/AuditInformation.png';
import './Procedure.css';

const PROC_STEPS = [
  {
    num: '01',
    title: '감리 계획 수립',
    icon: '📋',
    activities: [
      '감리 범위 및 목표 확정',
      '감리단 구성 및 역할 배정',
      '사업계획서·계약서·과업지시서 검토',
      '감리 일정 및 체크리스트 작성',
      '실증점검 템플릿 작성 및 감리 착수 회의 개최',
    ],
    outputs: ['감리계획서', '감리 착수보고서', '실증점검 템플릿'],
  },
  {
    num: '02',
    title: '현장 감리',
    icon: '🔍',
    activities: [
      '분야별 감리원 현장 감리 수행',
      '산출물 품질 점검 및 증거 자료 확보',
      '요구사항 추적 매트릭스 확인',
      '동료검토 및 이슈 목록 관리',
      '총괄감리원 증거 충분성·완전성 검토',
    ],
    outputs: ['중간점검 결과서', '이슈 목록', '감리 증거 자료'],
  },
  {
    num: '03',
    title: '감리보고서 작성',
    icon: '📝',
    activities: [
      '발견 이슈 분류 및 심각도 평가',
      '개선 권고안 도출',
      '감리수행결과보고서 초안 작성',
      '품질 기준에 따른 보고서 검토·승인',
    ],
    outputs: ['감리수행결과보고서'],
  },
  {
    num: '04',
    title: '사후 관리',
    icon: '✅',
    activities: [
      '사업자 시정조치 계획 확인',
      '시정조치 이행 결과 점검',
      '시정조치 계획·결과확인서 승인',
      '발주기관 최종 보고 및 문서 보관',
    ],
    outputs: ['시정조치계획서', '시정조치 결과확인서'],
  },
];

const SWIMLANE_ROLES = [
  {
    role: '단계\n감리팀',
    cols: [
      ['실증점검 템플릿 작성'],
      ['감리 증거 자료 확보', '분야별 감리 수행'],
      ['감리수행 결과보고서 작성', '동료검토'],
      ['시정조치 계획·결과 확인', '시정조치 결과 확인 제출'],
    ],
  },
  {
    role: '총괄\n감리원',
    cols: [
      ['보고서 작성 표준 검토/승인', '실증점검 템플릿 승인'],
      ['실증점검 템플릿 검토', '증거 자료 검토 및 승인', '업종 전문 지식 제공'],
      ['감리수행결과보고서 승인', '증거 충분성·완전성 검토'],
      ['시정조치계획 및 결과확인서 승인'],
    ],
  },
  {
    role: '감리\n지원팀\n(QA)',
    cols: [
      ['표준 Repository', '실증점검 템플릿 제공'],
      ['감리 기술 자문', '유사 감리 사례 제공', '감리 증거 자료 검토'],
      ['감리수행결과보고서 분류·보관', '감리수행결과보고서 검토 및 승인'],
      ['시정조치계획 및 결과확인서 보관'],
    ],
  },
  {
    role: '주관\n기관',
    cols: [
      [],
      ['감리 증거 자료 검토'],
      ['감리수행결과보고서 검토 및 승인'],
      ['시정조치 결과확인서 승인'],
    ],
  },
];

export default function ProcedureProcess() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <PageHeader
        title="감리 수행절차"
        subtitle="한길에이아이의 체계적인 감리 수행 절차와 품질보증 활동을 안내합니다."
        bgImage={auditBg}
      />

      <section className="page-section">
        <div className="container">

          {/* 감리 수행 절차 */}
          <div className="section-divider" />
          <h2 className="section-title">감리 수행 절차</h2>
          <p className="section-subtitle">각 단계를 선택하면 주요 활동과 역할별 수행 내용을 확인할 수 있습니다.</p>

          <div className="proc-steps-nav" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {PROC_STEPS.map((step, i) => (
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

          <div className="proc-detail">
            <div className="proc-detail-header">
              <div className="proc-detail-icon">{PROC_STEPS[active].icon}</div>
              <div>
                <div className="proc-detail-step">Step {PROC_STEPS[active].num}</div>
                <h3 className="proc-detail-title">{PROC_STEPS[active].title}</h3>
              </div>
            </div>

            <div className="proc-detail-body">
              <div className="proc-detail-section">
                <h4>주요 활동</h4>
                <ul className="proc-activity-list">
                  {PROC_STEPS[active].activities.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
              <div className="proc-detail-section">
                <h4>산출물</h4>
                <div className="proc-outputs">
                  {PROC_STEPS[active].outputs.map((o) => (
                    <span key={o} className="proc-output-badge">{o}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="proc-roles">
              <h4>역할별 수행 활동</h4>
              <div className="proc-roles-grid">
                {SWIMLANE_ROLES.map((row) => (
                  <div key={row.role} className="proc-role-col">
                    <div className="proc-role-name">{row.role.replace(/\n/g, ' ')}</div>
                    {row.cols[active].length > 0 ? (
                      <ul className="proc-activity-list">
                        {row.cols[active].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="proc-role-empty">—</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
