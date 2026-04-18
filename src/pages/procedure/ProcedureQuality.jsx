import React from 'react';
import PageHeader from '../../components/PageHeader';
import './Procedure.css';

const QA_PHASES = [
  {
    title: '품질기준 수립 및\n보증 계획',
    icon: '📐',
    process: ['품질보증 계획 수립', '품질 및 평가기준 수립', '표준 및 절차 수립', '품질 목표 설정'],
    activities: ['품질 검토 회의', '고객 만족도 조사'],
  },
  {
    title: '품질 검토 및\n보증 활동',
    icon: '🔍',
    process: ['품질관리 이행 확인', '품질 검토 (동료간 검토 등)', '품질위원회 보증 활동'],
    activities: ['내부 품질심사', '중간 검토 시행'],
  },
  {
    title: '품질 관리 및\n통제',
    icon: '⚙️',
    process: ['품질 관리 표준 준수', '품질 기반 프로세스 준수'],
    activities: ['최종 보고서 검사'],
  },
  {
    title: '품질 개선',
    icon: '📈',
    process: ['품질보증 활동', '전사 품질지원 체계 운영'],
    activities: [],
  },
];

const QA_APPROACH = [
  {
    icon: '🏗️',
    title: '철저한 품질보증 수행체계 수립',
    items: [
      '감리 조직, 전사 품질 보증 조직을 통한 최적의 품질 보증 조직 구성',
      '표준 절차, 기술 표준, 가이드라인 및 양식 제시 등 수행사 맞춤형 표준 체계 수립',
    ],
  },
  {
    icon: '📋',
    title: '단계적 품질보증 및 개선 활동',
    items: [
      '감리 착수 전 RFP·제안서·사업수행계획서 사전 배포 및 검토회의 진행',
      '사업수행사에 필요한 가이드라인 및 양식 제시',
      '감리 중 일일 미팅으로 중점사항 전달 및 이견 조정',
      '중간 점검 회의 실시 (종료회의 D-2일): 보고서 일관성·중복 점검',
      '중간 점검 회의 (종료회의 D-1일): 추가 검토사항 교환 및 의견 조정',
      '감리보고서 제출 전 종합 검토 및 최종 품질 검토',
    ],
  },
  {
    icon: '⚖️',
    title: '품질 보증 기준 및 지침 준수',
    items: [
      '품질기준 법적 요건 준수, 감독기관 요구사항 준수',
      '기준 지침에 따른 객관적 감리 활동 수행 및 점검',
    ],
  },
];

const QUALITY_ATTRS = [
  {
    attr: '완전성',
    method: '점검사항의 누락 없음을 보증',
    detail: '감리 제안 및 감리계획서에 의한 검토항목에 대한 감리활동 추적',
    primary: '담당 감리원',
    secondary: '총괄 감리원, 감리지원팀',
  },
  {
    attr: '정확성',
    method: '감리 내용에 오류가 없음을 보증',
    detail: '사실적 내용의 오류 발견 여부와 잘못 판단한 사항에 대한 오류 확인',
    primary: '담당 감리원',
    secondary: '총괄 감리원',
  },
  {
    attr: '非중복성',
    method: '감리 결과에 내용의 중복이 없음을 보증',
    detail: '중간 검토, 동료 검토, 품질 활동을 통한 중복성 제거 확인',
    primary: '담당 감리원',
    secondary: '동료 감리원',
  },
  {
    attr: '일관성',
    method: '중점 검토항목에 대한 감리 결과의 정합성 보증',
    detail: '담당/동료 감리원, 감리지원팀에 의한 중점 검토항목 추적성 검토',
    primary: '담당 감리원',
    secondary: '총괄 감리원',
  },
  {
    attr: '적시성',
    method: '감리 결과가 향후 사업에 대한 가치 제공 보증',
    detail: '감리 결과의 시기 유효성 및 계획에 의한 보고서 작성 확인',
    primary: '담당 감리원',
    secondary: '총괄 감리원, 감리지원팀',
  },
  {
    attr: '신뢰성',
    method: '결과 증적에 대한 충분성 보증',
    detail: '감리 보고서 등 감리 증적에 대한 추적성 확인',
    primary: '담당 감리원',
    secondary: '총괄 감리원',
  },
];

const QA_METRICS = [
  { attr: '완전성', metric: '점검항목 완전률', code: 'AAMQO', formula: '점검항목 / (요구사항 + 제안사항) × 100' },
  { attr: '정확성', metric: '점검항목 오류율', code: 'AAMQF', formula: '100 − 점검항목 오류 개수 / 전체 점검항목 × 100' },
  { attr: '非중복성', metric: '점검내용 중복률', code: 'AAMQR', formula: '100 − 개선사항 중복 개수 / 전체 개선사항 × 100' },
  { attr: '일관성', metric: '점검내용 정합률', code: 'AAMQC', formula: '100 − 개선사항 불일치 개수 / 전체 개선사항 × 100' },
  { attr: '적시성', metric: '점검결과 유효율', code: 'AAMQV', formula: '100 − 개선사항 非유효 개수 / 전체 개선사항 × 100' },
  { attr: '신뢰성', metric: '점검결과 증적률', code: 'AAMQE', formula: '100 − 개선사항 非증적 개수 / 전체 개선사항 × 100' },
];

export default function ProcedureQuality() {
  return (
    <div>
      <PageHeader
        title="감리 품질보증 체계"
        subtitle="한길에이아이의 체계적인 품질보증 프로세스와 보고서 품질 관리 기준을 안내합니다."
      />

      <section className="page-section">
        <div className="container">

          {/* 품질방침 callout */}
          <div className="section-divider" />
          <div className="qa-callout">
            <div className="qa-callout-icon">🎯</div>
            <p className="qa-callout-text">
              국내외 표준 준수, 모범 사례 수용, 수행사 수준에 맞춘 감리수행으로 본 사업의 목적달성을 지향합니다.
            </p>
          </div>

          {/* 품질보증 프로세스 */}
          <div className="section-block">
            <div className="section-divider" />
            <h2 className="section-title">품질보증 프로세스</h2>
            <div className="qa-phase-grid">
              {QA_PHASES.map((phase, i) => (
                <div key={i} className="qa-phase-card card">
                  <div className="qa-phase-header">
                    <span className="qa-phase-icon">{phase.icon}</span>
                    <span className="qa-phase-title">{phase.title.replace(/\n/g, ' ')}</span>
                  </div>
                  <div className="qa-phase-section">
                    <div className="qa-phase-label">품질보증 프로세스</div>
                    <ul className="overview-box-list">
                      {phase.process.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  {phase.activities.length > 0 && (
                    <div className="qa-phase-section">
                      <div className="qa-phase-label">단계별 품질 활동</div>
                      <ul className="overview-box-list">
                        {phase.activities.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 품질보증 수행 체계 */}
          <div className="section-block">
            <div className="section-divider" />
            <h2 className="section-title">품질보증 수행 체계</h2>
            <div className="audit-type-grid">
              {QA_APPROACH.map((item) => (
                <div key={item.title} className="audit-type-card card">
                  <div className="audit-type-icon">{item.icon}</div>
                  <h3 className="audit-type-title">{item.title}</h3>
                  <ul className="overview-box-list" style={{ marginTop: 12 }}>
                    {item.items.map((li) => <li key={li}>{li}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 보고서 품질 속성 및 보증 방법 */}
          <div className="section-block">
            <div className="section-divider" />
            <h2 className="section-title">보고서 품질 속성 및 보증 방법</h2>
            <div className="quality-table-wrap">
              <table className="quality-table">
                <thead>
                  <tr>
                    <th>품질 속성</th>
                    <th>품질보증 방법</th>
                    <th>정(主) 담당</th>
                    <th>부(副) 담당</th>
                  </tr>
                </thead>
                <tbody>
                  {QUALITY_ATTRS.map((q) => (
                    <tr key={q.attr}>
                      <td className="quality-attr">{q.attr}</td>
                      <td>
                        <strong>{q.method}</strong>
                        <p>{q.detail}</p>
                      </td>
                      <td className="quality-role-primary">{q.primary}</td>
                      <td className="quality-role-secondary">{q.secondary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 보고서 품질 지표 */}
          <div className="section-block">
            <div className="section-divider" />
            <h2 className="section-title">보고서 품질 지표</h2>
            <div className="quality-table-wrap">
              <table className="quality-table">
                <thead>
                  <tr>
                    <th>품질 속성</th>
                    <th>측정 방법</th>
                    <th>코드</th>
                    <th>측정 산출식</th>
                  </tr>
                </thead>
                <tbody>
                  {QA_METRICS.map((q) => (
                    <tr key={q.attr}>
                      <td className="quality-attr">{q.attr}</td>
                      <td><strong>{q.metric}</strong></td>
                      <td className="quality-role-primary">
                        AAM<sub className="qa-code-sub">{q.code.slice(3)}</sub>
                      </td>
                      <td className="qa-formula">{q.formula}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
