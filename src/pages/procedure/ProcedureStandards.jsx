import React from 'react';
import PageHeader from '../../components/PageHeader';
import auditBg from '../../assets/AuditInformation.png';
import './Procedure.css';

const MANDATORY_ITEMS = [
  '사업수행계획의 계약내용 반영 여부, 일정·산출물 작성계획의 적정성 여부',
  '과업범위 및 요구사항의 설계 반영 및 구체화 여부',
  '과업 이행 여부',
  '관련 법령, 규정 및 지침 등의 준수',
  '그 밖에 감리기준에서 정하는 사항',
];

const RECOMMENDED_ITEMS = [
  '사업관리(PM), 품질보증(QA), 기타 정보시스템 구축 활동의 품질',
  '응용시스템, DB, 시스템 구조, 보안 등 정보시스템 구축 관련 산출물의 품질',
  '감리수행가이드(NIA)의 "정보화사업 유형별 표준 점검항목"',
  '그 밖에 정보시스템 효율성 향상, 안전성 확보를 위해 필요한 사항',
];

const AUDIT_TYPES = [
  {
    icon: '📅',
    title: '단계별 감리 (정기감리)',
    desc: '개발 공정의 주요 단계 완료 후 종합적으로 점검합니다.',
    note: '통상 요구정의, 설계, 종료 3단계로 수행',
  },
  {
    icon: '🏢',
    title: '상주감리',
    desc: '현장에 상주하거나 일정한 주기로 점검합니다.',
    note: '통상적으로 주간 단위로 점검 수행',
  },
  {
    icon: '➕',
    title: '추가감리',
    desc: '단계감리·상주감리 외 추가로 실시하는 감리입니다.',
    note: '필요에 따라 발주기관이 요청',
  },
];

export default function ProcedureStandards() {
  return (
    <div>
      <PageHeader
        title="감리 기준"
        subtitle="감리 업무 내용과 수행 형태를 안내합니다."
        bgImage={auditBg}
      />

      <section className="page-section">
        <div className="container">

          {/* 감리 업무 내용 */}
          <div className="section-divider" />
          <h2 className="section-title">감리 업무 내용</h2>
          <div className="audit-content-grid">
            <div className="audit-content-card card">
              <div className="audit-content-badge mandatory">필수점검 사항</div>
              <ul className="overview-box-list" style={{ marginTop: 16 }}>
                {MANDATORY_ITEMS.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="audit-content-card card">
              <div className="audit-content-badge recommended">권장 사항</div>
              <ul className="overview-box-list" style={{ marginTop: 16 }}>
                {RECOMMENDED_ITEMS.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>

          {/* 감리 수행 형태 */}
          <div className="section-block">
            <div className="section-divider" />
            <h2 className="section-title">감리 수행 형태</h2>
            <div className="audit-type-grid">
              {AUDIT_TYPES.map((t) => (
                <div key={t.title} className="audit-type-card card">
                  <div className="audit-type-icon">{t.icon}</div>
                  <h3 className="audit-type-title">{t.title}</h3>
                  <p className="audit-type-desc">{t.desc}</p>
                  <p className="target-note">{t.note}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
