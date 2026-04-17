import React from 'react';
import PageHeader from '../../components/PageHeader';
import './Business.css';

const CONSULT_STEPS = [
  {
    num: '01',
    title: '환경 분석',
    sub: '내·외부 환경과 기술 동향을 먼저 읽습니다',
    desc: '사업 목표에 대한 정확한 이해를 기반으로 기관 내부 및 외부 환경을 분석하고, 최신 정보 기술 동향과 관련 선진 사례를 함께 검토합니다.',
  },
  {
    num: '02',
    title: '현황 분석',
    sub: '업무 프로세스와 이슈를 정확히 진단합니다',
    desc: '산출물 검토와 현업 인터뷰를 병행하여 업무 프로세스 및 정보시스템 현황을 분석하고, 이슈사항을 정리하여 개선 방향을 도출합니다.',
  },
  {
    num: '03',
    title: '목표 모델 설계',
    sub: '정보화 비전과 목표 시스템을 설계합니다',
    desc: '정보화 비전·전략을 수립하고 개선 기회를 종합하여 개선과제를 도출한 후, 이를 바탕으로 목표 정보시스템을 설계합니다.',
  },
  {
    num: '04',
    title: '이행 계획 수립',
    sub: '단계별 로드맵으로 실행력을 확보합니다',
    desc: '개선과제로부터 이행과제를 도출하고, 우선순위와 선후관계를 고려하여 단계별 로드맵 및 실행계획을 수립합니다.',
  },
];

const SERVICE_AREAS = [
  {
    icon: '🗺️',
    title: 'BPR/ISP',
    desc: '업무 프로세스 재설계와 중장기 정보화 전략 계획 수립으로 조직의 정보화 방향을 제시합니다.',
  },
  {
    icon: '📐',
    title: 'ISMP',
    desc: '정보시스템 마스터플랜 수립을 통해 체계적이고 일관성 있는 시스템 구축 방향을 설계합니다.',
  },
  {
    icon: '📈',
    title: '데이터 컨설팅',
    desc: '데이터 표준화, 품질 관리, 거버넌스 체계 수립으로 데이터 기반 의사결정 환경을 구축합니다.',
  },
  {
    icon: '⚙️',
    title: '정보시스템 운영 컨설팅',
    desc: '운영 중인 정보시스템의 현황을 진단하고 효율적인 운영 방안과 개선 전략을 제시합니다.',
  },
  {
    icon: '🤖',
    title: 'AI 도입 컨설팅',
    desc: 'AI 적용 가능 업무 발굴부터 도입 로드맵 수립, PoC 수행까지 AI 전환을 단계적으로 지원합니다.',
  },
  {
    icon: '🔐',
    title: '정보보호 컨설팅',
    desc: '정보보호 현황을 진단하고 법규 준수 및 보안 체계 강화를 위한 실질적인 개선 방안을 제시합니다.',
  },
];

const BENEFITS = [
  {
    icon: '🎯',
    title: '전략적 방향 확보',
    desc: '중장기 정보화 방향을 명확히 수립하여 일관성 있는 IT 투자와 의사결정을 가능하게 합니다.',
  },
  {
    icon: '💡',
    title: '투자 효율성 향상',
    desc: '중복 투자를 방지하고 우선순위에 따른 효율적인 IT 자원 배분을 실현합니다.',
  },
  {
    icon: '🔮',
    title: '미래 대응력 강화',
    desc: '디지털 전환 트렌드를 선제적으로 반영한 목표 모델로 조직의 경쟁력을 높입니다.',
  },
  {
    icon: '🤝',
    title: '실행력 확보',
    desc: '현실적이고 구체적인 단계별 로드맵을 바탕으로 실질적인 변화를 이끌어냅니다.',
  },
];

export default function Consulting() {
  return (
    <div>
      <PageHeader
        title="정보시스템 컨설팅"
        subtitle="BPR/ISP, ISMP, 데이터 컨설팅 등 종합적인 IT 컨설팅 서비스를 제공합니다."
        breadcrumbs={[{ label: '사업 분야' }, { label: '정보시스템 컨설팅' }]}
      />

      <section className="page-section">
        <div className="container">

          {/* IT 컨설팅이란? */}
          <div className="biz-page-intro">
            <div>
              <div className="section-divider" />
              <h2 className="section-title">IT 컨설팅이란?</h2>
              <p className="biz-page-desc">
                정보시스템 컨설팅은 정보화 전략 수립, 업무 프로세스 재설계, 데이터 표준화 및 품질,
                정보시스템 구축·운영 등 정보시스템 전반에 관한 고객의 문제에 대해 IT 전문가들이
                지식과 경험을 활용하여 객관적이고 현실 가능한 솔루션을 제시하는 활동입니다.
              </p>
              <div className="biz-highlight-box">
                <p>
                  고객이 당면한 문제 해결과 사업 추진에 대한 의사결정을 지원하여
                  정보화 사업의 성공적인 목표 달성을 함께 이끌어냅니다.
                </p>
              </div>
            </div>
            <div className="biz-visual">
              {[
                '환경 분석',
                '현황 분석 및 이슈 도출',
                '목표 모델 설계',
                '이행 계획 수립',
                '단계별 로드맵 수립',
                '실행 지원 및 피드백',
              ].map((step, i) => (
                <div key={step} className="biz-visual-item">
                  <div className="biz-visual-num">{i + 1}</div>
                  <span className="biz-visual-text">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 한길에이아이 컨설팅 */}
          <div className="ism-about">
            <div className="ism-about-header">
              <p className="section-eyebrow">WHY HANGIL AI</p>
              <h2 className="section-title">한길에이아이 컨설팅</h2>
              <p className="ism-about-lead">한길에이아이는 전문가 관점에서 문제를 파악하고 해결 과정에 적극 참여하는 실용적인 컨설팅을 제공합니다.</p>
            </div>
            <p className="biz-page-desc">
              풍부한 인적 자원과 우수한 IT 개발 기술, 시스템 운영의 축적된 경험을 토대로
              고객이 당면하고 있는 문제와 현안 과제를 진단합니다.
              감리·PMO 수행에서 쌓은 현장 통찰력을 바탕으로 단순 보고서 제출에 그치지 않고,
              효율적으로 극복할 수 있는 정보 전략과 방안을 체계적으로 제시합니다.
            </p>
          </div>

          {/* 컨설팅 수행 단계 */}
          <div className="section-block">
            <div className="section-divider" />
            <h2 className="section-title">컨설팅 수행 단계</h2>
            <div className="ism-steps" style={{ marginTop: 32 }}>
              {CONSULT_STEPS.map((step, i) => (
                <div key={step.num} className="ism-step">
                  <div className="ism-step-num">{step.num}</div>
                  <div>
                    <h3 className="ism-step-title">{step.title}</h3>
                    <p className="ism-step-sub">{step.sub}</p>
                    <p className="ism-step-desc">{step.desc}</p>
                  </div>
                  {i < CONSULT_STEPS.length - 1 && <div className="ism-step-arrow">›</div>}
                </div>
              ))}
            </div>
          </div>

          {/* 컨설팅 서비스 영역 */}
          <div className="service-scope">
            <div className="section-divider" />
            <h2 className="section-title">컨설팅 서비스 영역</h2>
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
