import React from 'react';
import PageHeader from '../../components/PageHeader';
import './Procedure.css';

const DEF_ITEMS = [
  { label: '주체', text: '감리발주자 및 피감리인의 이해관계로부터 독립된 자가' },
  { label: '목적', text: '정보시스템의 효율성을 향상시키고 안전성을 확보하기 위하여' },
  { label: '관점', text: '제3자적 관점에서' },
  { label: '감리대상', text: '정보시스템의 구축 및 운영 등에 관한 사항을' },
  { label: '감리활동', text: '종합적으로 점검하고 문제점을 개선하도록 하는 것' },
];


const TARGETS = [
  {
    icon: '🖥️',
    title: '정보시스템 특성',
    items: [
      '대국민 서비스를 위한 행정업무 또는 민원업무 처리용으로 사용하는 경우',
      '여러 행정기관 등이 공동으로 구축하거나 사용하는 경우',
    ],
    note: '사업비 1억원 미만 소규모 사업으로 비용 대비 효과가 낮다고 인정하는 경우 제외',
  },
  {
    icon: '💰',
    title: '사업비 규모',
    items: [
      '정보시스템 구축사업으로서 사업비가 5억원 이상인 경우',
      '단순 하드웨어·소프트웨어 구입비는 사업비에서 제외',
    ],
    note: '단순 구입비 여부는 행정기관 등의 장이 판단',
  },
  {
    icon: '📋',
    title: '행정기관 장의 필요성 인정',
    items: [
      'IT아키텍처 또는 정보화전략계획 수립 사업',
      '정보시스템 개발 또는 운영 등을 위한 사업',
    ],
    note: '해당 행정기관 등의 장이 감리 시행이 필요하다고 인정하는 경우',
  },
];

const EFFECTS = [
  {
    icon: '⚖️',
    title: '법적 요건 준수',
    desc: '업무 처리 관련 규정, 정보화 사업 추진 관련 규정 등 법적 요건을 충족합니다.',
  },
  {
    icon: '🎯',
    title: '효과성 확보',
    desc: '정보시스템이 사전에 설정된 목표를 달성하도록 하여 사업의 효과성을 보장합니다.',
  },
  {
    icon: '⚡',
    title: '효율성 확보',
    desc: '응답시간, 처리량, CPU·디스크 등 자원 이용도를 최적화하여 시스템 운영 효율성을 높입니다.',
  },
  {
    icon: '🔐',
    title: '안전성 확보',
    desc: '무결성(정확성·완전성·일관성), 가용성, 기밀성을 확보하여 시스템 안전성을 보장합니다.',
  },
];

const SUBJECTS = [
  {
    icon: '🏢',
    title: '감리법인',
    desc: '재정능력과 기술능력을 갖추고 등록한 법인이 감리 결과에 대한 책임의 주체가 됩니다.',
    items: ['재정능력 및 기술능력 보유', '정식 등록 감리법인', '감리 결과 최종 책임'],
    note: '예외: 국가안전보장 등 특수한 경우, 발주기관에서 지정한 기관',
  },
  {
    icon: '👤',
    title: '감리원',
    desc: '기술자격과 IT업무경력을 갖추고 감리원증을 교부받은 자가 감리업무를 직접 수행합니다.',
    items: ['기술자격 및 IT업무경력 보유', '감리원증 교부받은 자', '감리업무 직접 수행'],
    note: '예외: 특정 분야 전문가를 30% 범위 내에서 보조인력으로 활용 가능',
  },
];

export default function ProcedureOverview() {
  return (
    <div>
      <PageHeader
        title="정보시스템 감리 개요"
        subtitle="감리의 정의, 대상, 기대효과를 안내합니다."
        breadcrumbs={[{ label: '감리정보' }, { label: '개요' }]}
      />

      <section className="page-section">
        <div className="container">

          {/* 정보시스템 감리란? */}
          <div className="section-divider" />
          <h2 className="section-title">정보시스템 감리란?</h2>
          <div className="def-flow">
            {DEF_ITEMS.map((item) => (
              <div key={item.label} className="def-item">
                <span className="def-label">{item.label}</span>
                <p className="def-text">{item.text}</p>
              </div>
            ))}
          </div>

          {/* 정보시스템 감리의 개념 */}
          <div className="section-block">
            <div className="section-divider" />
            <h2 className="section-title">정보시스템 감리의 개념</h2>

            {/* 3자 관계도 */}
            <div className="audit-rel">
              <div className="audit-rel-top">
                <div className="ar-party">
                  <div className="ar-icon">🏛️</div>
                  <div className="ar-label">발주기관</div>
                  <div className="ar-sub">과업 제시</div>
                </div>
                <div className="ar-conn">
                  <span className="ar-conn-label">점검 의뢰</span>
                  <div className="ar-conn-line">→</div>
                  <span className="ar-conn-label ar-conn-reverse">← 시정 권고</span>
                </div>
                <div className="ar-party ar-party-main">
                  <div className="ar-icon">🔍</div>
                  <div className="ar-label">감리법인</div>
                  <div className="ar-sub">독립적 제3자 점검</div>
                </div>
                <div className="ar-conn">
                  <span className="ar-conn-label">점검 수행</span>
                  <div className="ar-conn-line">→</div>
                  <span className="ar-conn-label ar-conn-reverse">← 시정 조치</span>
                </div>
                <div className="ar-party">
                  <div className="ar-icon">💼</div>
                  <div className="ar-label">사업자</div>
                  <div className="ar-sub">시스템 구축</div>
                </div>
              </div>
              <div className="audit-rel-bottom">
                <div className="ar-down-line" />
                <div className="ar-report">
                  <span className="ar-report-title">감리보고서</span>
                  <span className="ar-report-sub">감리수행결과 · 시정조치확인</span>
                </div>
              </div>
            </div>

            {/* 4개 속성 카드 */}
            <div className="ai-features-grid" style={{ marginTop: 24 }}>
              {[
                { icon: '🎯', title: '목적', desc: '정보시스템의 효율(효과)성 향상 및 안전성 확보' },
                { icon: '⚖️', title: '독립성', desc: '발주자·사업자의 이해관계로부터 독립적인 제3자의 관점' },
                { icon: '🔍', title: '대상', desc: '정보시스템의 구축 및 운영 등에 관한 사항' },
                { icon: '📋', title: '방법', desc: '종합적으로 점검하고 문제점을 개선토록 하는 것' },
              ].map((item) => (
                <div key={item.title} className="ai-feature-card card">
                  <div className="ai-feature-icon">{item.icon}</div>
                  <h3 className="ai-feature-title">{item.title}</h3>
                  <p className="ai-feature-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 관련 법령 */}
          <div className="section-block">
            <div className="section-divider" />
            <h2 className="section-title">관련 법령 및 지침</h2>
            <div className="law-tree-wrap">
              <div className="law-tree">
                <div className="lt-col">
                  <div className="lt-node lt-primary">전자정부법</div>
                  <div className="lt-v" />
                  <div className="lt-node">전자정부법 시행령</div>
                </div>
                <div className="lt-h" />
                <div className="lt-col">
                  <div className="lt-node">정보시스템 감리기준</div>
                </div>
                <div className="lt-h" />
                <div className="lt-col">
                  <div className="lt-node">감리기준 조문별 해설서</div>
                  <div className="lt-v" />
                  <div className="lt-siblings">
                    <div className="lt-sib-col">
                      <div className="lt-node lt-sm">정보시스템감리<br />발주·관리 가이드</div>
                    </div>
                    <div className="lt-sib-col">
                      <div className="lt-node lt-sm">정보시스템감리수행<br />가이드</div>
                      <div className="lt-v lt-v-sm" />
                      <div className="lt-node lt-sm lt-muted">사업유형별<br />감리점검가이드 (46건)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 감리 대상 */}
          <div className="section-block">
            <div className="section-divider" />
            <h2 className="section-title">감리 대상</h2>
            <div className="overview-box-grid">
              {TARGETS.map((t) => (
                <div key={t.title} className="overview-box card">
                  <div className="overview-box-icon">{t.icon}</div>
                  <h3 className="overview-box-title">{t.title}</h3>
                  <ul className="overview-box-list">
                    {t.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="target-note">{t.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 감리 기대효과 */}
          <div className="section-block">
            <div className="section-divider" />
            <h2 className="section-title">감리 기대효과</h2>
            <div className="ai-features-grid">
              {EFFECTS.map((item) => (
                <div key={item.title} className="ai-feature-card card">
                  <div className="ai-feature-icon">{item.icon}</div>
                  <h3 className="ai-feature-title">{item.title}</h3>
                  <p className="ai-feature-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 감리 주체 */}
          <div className="section-block">
            <div className="section-divider" />
            <h2 className="section-title">감리 주체</h2>
            <div className="subject-grid">
              {SUBJECTS.map((s) => (
                <div key={s.title} className="subject-card card">
                  <div className="subject-header">
                    <div className="subject-icon">{s.icon}</div>
                    <h3 className="subject-title">{s.title}</h3>
                  </div>
                  <p className="subject-desc">{s.desc}</p>
                  <ul className="overview-box-list" style={{ marginTop: 16 }}>
                    {s.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <p className="target-note">{s.note}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
