import React from 'react';
import PageHeader from '../../components/PageHeader';
import './Business.css';

export default function QualityDiagnosis() {
  return (
    <div>
      <PageHeader
        title="IT 품질 진단"
        subtitle="현행 시스템의 아키텍처·코드·보안·성능을 종합 진단하고 개선 방향을 제시합니다."
        breadcrumbs={[{ label: '사업 분야' }, { label: 'IT 품질 진단' }]}
      />

      <section className="page-section">
        <div className="container">
          <div className="biz-page-intro">
            <div>
              <div className="section-divider" />
              <h2 className="section-title">IT 품질 진단이란?</h2>
              <p className="biz-page-desc">
                IT 품질 진단은 운영 중인 정보시스템의 전반적인 품질 수준을 체계적으로 측정하고,
                문제점과 개선 방향을 도출하는 서비스입니다.
              </p>
              <p className="biz-page-desc">
                AI 기반 자동화 진단 도구와 전문가 수동 진단을 결합하여,
                코드 품질부터 아키텍처, 보안, 성능까지 전방위적인 진단을 제공합니다.
              </p>
              <div className="biz-highlight-box">
                <p>
                  시스템 노후화, 유지보수 어려움, 잦은 장애 등으로 고민하고 계신다면
                  IT 품질 진단을 통해 근본 원인을 파악하고 개선 방향을 찾으세요.
                </p>
              </div>
            </div>
            <div className="biz-visual">
              {[
                '진단 범위 및 계획 수립',
                '자동화 도구 기반 분석',
                '전문가 심층 검토',
                '취약점 및 위험 분류',
                '개선 우선순위 도출',
                '종합 진단 보고서 제출',
              ].map((step, i) => (
                <div key={step} className="biz-visual-item">
                  <div className="biz-visual-num">{i + 1}</div>
                  <span className="biz-visual-text">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 진단 영역 */}
          <div className="service-scope">
            <div className="section-divider" />
            <h2 className="section-title">진단 영역</h2>
            <div className="scope-grid">
              {[
                { icon: '🏗️', title: '아키텍처 진단', desc: '시스템 구조의 안정성, 확장성, 유지보수성을 검토하고 구조적 개선 방향을 제시합니다.' },
                { icon: '💻', title: '소스코드 진단', desc: 'AI 기반 정적 분석으로 코드 복잡도, 중복 코드, 잠재적 결함을 자동으로 탐지합니다.' },
                { icon: '🔐', title: '보안 취약점 진단', desc: 'OWASP Top 10, 주요정보통신기반시설 취약점 기준으로 보안 취약점을 점검합니다.' },
                { icon: '⚡', title: '성능 진단', desc: '응답 시간, 처리량, 자원 사용률 등 성능 지표를 측정하고 병목 구간을 파악합니다.' },
                { icon: '📦', title: '데이터 품질 진단', desc: '데이터의 정확성, 완전성, 일관성을 점검하고 데이터 품질 개선 방안을 제시합니다.' },
                { icon: '📋', title: '운영 프로세스 진단', desc: 'ITSM 체계, 변경 관리, 장애 대응 절차 등 운영 프로세스의 성숙도를 평가합니다.' },
              ].map((item) => (
                <div key={item.title} className="scope-card">
                  <div className="scope-icon">{item.icon}</div>
                  <h3 className="scope-title">{item.title}</h3>
                  <p className="scope-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 진단 결과물 */}
          <div style={{ marginTop: 60 }}>
            <div className="section-divider" />
            <h2 className="section-title">진단 결과물</h2>
            <div className="expectation-grid">
              {[
                { icon: '📊', title: '종합 품질 보고서', desc: '진단 전 영역의 결과를 종합하여 현황, 문제점, 개선 권고안을 담은 보고서를 제공합니다.' },
                { icon: '🗺️', title: '개선 로드맵', desc: '우선순위와 예상 효과를 고려한 단계별 개선 실행 계획을 수립하여 제공합니다.' },
                { icon: '📈', title: '품질 수준 평가표', desc: '각 진단 영역별 점수와 벤치마크 비교를 통해 현재 품질 수준을 객관적으로 제시합니다.' },
                { icon: '🔧', title: '기술 개선 가이드', desc: '발견된 취약점과 문제점에 대한 구체적인 기술적 해결 방법을 상세히 제공합니다.' },
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
