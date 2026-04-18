import React from 'react';
import PageHeader from '../../components/PageHeader';
import './Business.css';

const DIAG_STEPS = [
  {
    num: '01',
    title: '진단 계획 수립',
    sub: '범위와 방법을 먼저 설계합니다',
    desc: '진단 대상 시스템의 특성과 고객 요구사항을 파악하여 영역별 진단 범위, 일정, 투입 인력을 계획합니다. 자동화 도구와 전문가 심층 점검의 최적 조합을 설계합니다.',
  },
  {
    num: '02',
    title: '환경 분석 및 현황 파악',
    sub: '시스템 구조를 정확히 이해합니다',
    desc: '시스템 아키텍처, 운영 환경, 기술 스택을 분석하고 관련 산출물과 운영 현황을 검토합니다. 진단 전 시스템 전체 구조를 파악하여 실효성 있는 진단 기반을 마련합니다.',
  },
  {
    num: '03',
    title: '영역별 전문가 심층 진단',
    sub: '각 분야 전문가가 직접 투입됩니다',
    desc: '기능/UI·UX, 데이터, 성능, 보안 각 영역에 특화된 전문가가 자체 개발 검증 스크립트와 자동화 도구를 활용하여 취약점과 문제점을 정밀하게 식별합니다.',
  },
  {
    num: '04',
    title: '결과 보고 및 이행 점검',
    sub: '진단 이후까지 책임집니다',
    desc: '영역별 진단 결과와 개선 우선순위, 구체적 조치 방안을 담은 종합 품질 보고서를 제출합니다. 보고서 제출로 끝나지 않고 개선 조치 이행 여부까지 점검합니다.',
  },
];

const DIAG_AREAS = [
  {
    icon: '🖥️',
    title: '기능 / UI·UX',
    desc: '구현된 기능의 요구사항 충족 여부, 입출력 데이터 정확성, 기능의 직관성·일관성·편의성 등을 전문가 경험과 테스트 시나리오 기반으로 면밀히 점검합니다.',
  },
  {
    icon: '📦',
    title: '데이터 표준 / 품질',
    desc: '자체 개발 검증 스크립트와 칼럼·날짜·패턴·상관·코드 분석 등 데이터 프로파일링 기법 및 자동화 도구를 활용하여 데이터 표준 및 품질을 점검합니다.',
  },
  {
    icon: '⚡',
    title: '시스템 성능',
    desc: '웹페이지별 응답속도, 피크타임·과부하에 대한 안정성, 장애 대비 백업·복구 체계, 인프라 아키텍처 성능 최적화 적정성을 종합적으로 점검합니다.',
  },
  {
    icon: '🔐',
    title: '보안',
    desc: '관련 법·지침·가이드 기반으로 자격 보유 전문가가 자동화 도구와 경험을 결합하여 보안 취약점을 점검하고, 발견된 문제에 대해 조치 방안 제시 및 이행 여부까지 확인합니다.',
  },
];

const BENEFITS = [
  {
    icon: '🎯',
    title: '근본 원인 파악',
    desc: '시스템 노후화, 잦은 장애, 성능 저하의 근본 원인을 영역별 전문가가 정확히 진단하여 제시합니다.',
  },
  {
    icon: '🔧',
    title: '구체적인 해결 방안',
    desc: '문제 발견에 그치지 않고 각 취약점에 대한 구체적인 기술적 조치 방안을 함께 제공합니다.',
  },
  {
    icon: '📊',
    title: '객관적 품질 수준 확인',
    desc: '영역별 진단 결과와 개선 우선순위를 담은 종합 품질 보고서로 현재 시스템 상태를 명확히 파악합니다.',
  },
  {
    icon: '✅',
    title: '이행까지 책임지는 지원',
    desc: '진단 보고서 제출로 끝나지 않고, 개선 조치 이행 여부까지 점검하여 실질적인 품질 향상을 보장합니다.',
  },
];

export default function QualityDiagnosis() {
  return (
    <div>
      <PageHeader
        title="IT 품질진단"
        subtitle="영역별 특화된 전문가의 시스템 진단 및 구체적인 해결 방안을 제시합니다."
      />

      <section className="page-section">
        <div className="container">

          {/* IT 품질진단이란? */}
          <div className="biz-page-intro">
            <div>
              <div className="section-divider" />
              <h2 className="section-title">IT 품질진단이란?</h2>
              <p className="biz-page-desc">
                IT 품질진단은 구축되었거나 운영 중인 정보시스템의 아키텍처 성능, 데이터 품질,
                기능/UI·UX, 보안 등의 영역에 대해 해당 영역별 전문가가 시스템의 문제점을
                파악하고 구체적인 해결 방안을 제시하는 활동입니다.
              </p>
              <div className="biz-highlight-box">
                <p>
                  시스템 노후화, 유지보수 어려움, 잦은 장애 등으로 고민하고 계신다면
                  IT 품질진단을 통해 근본 원인을 파악하고 개선 방향을 찾으세요.
                </p>
              </div>
            </div>
            <div className="biz-visual">
              {[
                '진단 범위 및 계획 수립',
                '환경 분석 및 현황 파악',
                '영역별 전문가 심층 진단',
                '취약점 및 문제점 분류',
                '개선 우선순위 및 방안 도출',
                '종합 진단 보고서 및 이행 점검',
              ].map((step, i) => (
                <div key={step} className="biz-visual-item">
                  <div className="biz-visual-num">{i + 1}</div>
                  <span className="biz-visual-text">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 한길에이아이 IT 품질진단 */}
          <div className="ism-about">
            <div className="ism-about-header">
              <p className="section-eyebrow">WHY HANGIL AI</p>
              <h2 className="section-title">한길에이아이 IT 품질진단</h2>
              <p className="ism-about-lead">한길에이아이는 관련 자격과 실적을 보유한 전문가가 진단부터 이행 점검까지 책임지고 지원합니다.</p>
            </div>
            <p className="biz-page-desc">
              기능/UI·UX, 데이터, 성능, 보안 각 영역에 특화된 전문가가 직접 투입되어 시스템의 문제점을 정확히 파악합니다.
              자체 개발한 검증 스크립트와 자동화 도구를 활용하여 객관적인 진단 결과를 도출하고,
              발견된 문제에 대해서는 구체적인 조치 방안과 함께 이행 여부까지 확인하여 실질적인 품질 향상을 이끌어냅니다.
            </p>
          </div>

          {/* 수행 단계 */}
          <div className="section-block">
            <div className="section-divider" />
            <h2 className="section-title">품질진단 수행 단계</h2>
            <div className="ism-steps" style={{ marginTop: 32 }}>
              {DIAG_STEPS.map((step, i) => (
                <div key={step.num} className="ism-step">
                  <div className="ism-step-num">{step.num}</div>
                  <div>
                    <h3 className="ism-step-title">{step.title}</h3>
                    <p className="ism-step-sub">{step.sub}</p>
                    <p className="ism-step-desc">{step.desc}</p>
                  </div>
                  {i < DIAG_STEPS.length - 1 && <div className="ism-step-arrow">›</div>}
                </div>
              ))}
            </div>
          </div>

          {/* 진단 영역 */}
          <div className="service-scope">
            <div className="section-divider" />
            <h2 className="section-title">진단 영역</h2>
            <div className="scope-grid scope-grid-2">
              {DIAG_AREAS.map((item) => (
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
