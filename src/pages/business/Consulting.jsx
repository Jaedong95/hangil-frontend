import React from 'react';
import PageHeader from '../../components/PageHeader';
import './Business.css';

export default function Consulting() {
  return (
    <div>
      <PageHeader
        title="정보시스템 컨설팅"
        subtitle="조직의 정보화 전략부터 시스템 도입, 최적화까지 전문 컨설팅을 제공합니다."
        breadcrumbs={[{ label: '사업 분야' }, { label: '정보시스템 컨설팅' }]}
      />

      <section className="page-section">
        <div className="container">
          <div className="biz-page-intro">
            <div>
              <div className="section-divider" />
              <h2 className="section-title">컨설팅 서비스란?</h2>
              <p className="biz-page-desc">
                정보시스템 컨설팅은 조직의 비즈니스 목표와 IT 전략을 연계하여 최적의 정보화
                방향을 제시하고 실현을 지원하는 서비스입니다.
              </p>
              <p className="biz-page-desc">
                전략 수립부터 시스템 도입, 구축 지원, 운영 최적화까지 전 단계에 걸쳐
                전문 컨설턴트가 함께합니다.
              </p>
              <div className="biz-highlight-box">
                <p>
                  20년 이상의 공공·금융 분야 경험과 AI 기술 역량을 결합하여,
                  현실적이고 실행 가능한 컨설팅 결과물을 제공합니다.
                </p>
              </div>
            </div>
            <div className="biz-visual">
              {[
                '현황 진단 및 분석',
                'As-Is / To-Be 도출',
                '정보화 전략 수립',
                '실행 로드맵 설계',
                '도입·구축 지원',
                '효과 측정 및 피드백',
              ].map((step, i) => (
                <div key={step} className="biz-visual-item">
                  <div className="biz-visual-num">{i + 1}</div>
                  <span className="biz-visual-text">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 컨설팅 서비스 영역 */}
          <div className="service-scope">
            <div className="section-divider" />
            <h2 className="section-title">컨설팅 서비스 영역</h2>
            <div className="scope-grid">
              {[
                { icon: '🗺️', title: 'ISP (정보화 전략 계획)', desc: '조직의 중장기 정보화 방향을 수립하고 전략적 우선순위와 실행 로드맵을 제시합니다.' },
                { icon: '🔄', title: '시스템 전환 컨설팅', desc: '레거시 시스템에서 최신 아키텍처로의 전환 전략을 수립하고 마이그레이션을 지원합니다.' },
                { icon: '☁️', title: '클라우드 전략 컨설팅', desc: '클라우드 도입 타당성 검토부터 전환 계획, 보안 설계까지 종합적인 지원을 제공합니다.' },
                { icon: '🔐', title: '정보보호 컨설팅', desc: '정보보호 현황을 진단하고 법규 준수 및 보안 체계 강화를 위한 개선 방안을 제시합니다.' },
                { icon: '📈', title: '데이터 전략 컨설팅', desc: '데이터 거버넌스 체계 수립, 데이터 품질 관리, 빅데이터·AI 활용 전략을 수립합니다.' },
                { icon: '🤖', title: 'AI 도입 컨설팅', desc: 'AI 적용 가능 업무 발굴부터 도입 로드맵 수립, PoC 수행까지 AI 전환을 지원합니다.' },
              ].map((item) => (
                <div key={item.title} className="scope-card">
                  <div className="scope-icon">{item.icon}</div>
                  <h3 className="scope-title">{item.title}</h3>
                  <p className="scope-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 기대 효과 */}
          <div style={{ marginTop: 60 }}>
            <div className="section-divider" />
            <h2 className="section-title">도입 기대 효과</h2>
            <div className="expectation-grid">
              {[
                { icon: '🎯', title: '전략적 방향 확보', desc: '중장기 정보화 방향을 명확히 수립하여 일관성 있는 IT 투자를 가능하게 합니다.' },
                { icon: '💡', title: '투자 효율성 향상', desc: '중복 투자를 방지하고 우선순위에 따른 효율적인 IT 자원 배분을 실현합니다.' },
                { icon: '🔮', title: '미래 대응력 강화', desc: '디지털 전환 트렌드를 선제적으로 대응하여 경쟁력을 높입니다.' },
                { icon: '🤝', title: '실행력 확보', desc: '현실적이고 구체적인 실행 계획을 바탕으로 실질적인 변화를 이끌어냅니다.' },
              ].map((item) => (
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
