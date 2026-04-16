import React from 'react';
import PageHeader from '../../components/PageHeader';
import './Business.css';

export default function PMO() {
  return (
    <div>
      <PageHeader
        title="정보시스템 PMO"
        subtitle="전문 PM이 프로젝트 전반의 일정·비용·품질·리스크를 통합 관리합니다."
        breadcrumbs={[{ label: '사업 분야' }, { label: '정보시스템 PMO' }]}
      />

      <section className="page-section">
        <div className="container">
          <div className="biz-page-intro">
            <div>
              <div className="section-divider" />
              <h2 className="section-title">PMO 서비스란?</h2>
              <p className="biz-page-desc">
                PMO(Project Management Office)는 정보화 사업의 성공적인 수행을 위해
                발주기관을 대신하여 프로젝트를 전문적으로 관리·지원하는 서비스입니다.
              </p>
              <p className="biz-page-desc">
                일정 관리, 품질 보증, 리스크 대응, 이해관계자 소통까지 프로젝트의 전 영역을
                체계적으로 관리하여 사업 목표 달성을 보장합니다.
              </p>
              <div className="biz-highlight-box">
                <p>
                  발주기관의 PM 역량이 부족하거나 대규모·복잡 사업의 경우, 전문 PMO 조직을 활용하면
                  사업 성공률을 획기적으로 높일 수 있습니다.
                </p>
              </div>
            </div>
            <div className="biz-visual">
              {[
                '착수 및 계획 수립',
                '요구사항 및 범위 관리',
                '일정·비용 모니터링',
                '품질·리스크 관리',
                '변경 관리 및 의사소통',
                '종료 및 성과 평가',
              ].map((step, i) => (
                <div key={step} className="biz-visual-item">
                  <div className="biz-visual-num">{i + 1}</div>
                  <span className="biz-visual-text">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PMO 서비스 영역 */}
          <div className="service-scope">
            <div className="section-divider" />
            <h2 className="section-title">PMO 서비스 영역</h2>
            <div className="scope-grid">
              {[
                { icon: '📅', title: '일정 관리', desc: 'WBS 기반으로 전체 일정을 계획하고, 진행 현황을 주기적으로 모니터링하여 지연을 예방합니다.' },
                { icon: '💲', title: '비용 관리', desc: '예산 집행 현황을 추적하고 원가 분석을 통해 비용 효율성을 극대화합니다.' },
                { icon: '🛡️', title: '품질 관리', desc: '품질 계획 수립부터 산출물 검토, 테스트 관리까지 체계적인 품질 보증을 수행합니다.' },
                { icon: '⚠️', title: '리스크 관리', desc: '잠재적 위험 요소를 사전에 식별하고 대응 방안을 마련하여 사업 지연 및 실패를 방지합니다.' },
                { icon: '🔗', title: '범위 관리', desc: '요구사항 변경을 체계적으로 관리하고 scope creep을 방지하여 목표 범위를 유지합니다.' },
                { icon: '📢', title: '의사소통 관리', desc: '이해관계자별 맞춤형 보고 체계를 구축하고 원활한 커뮤니케이션을 촉진합니다.' },
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
                { icon: '✅', title: '사업 성공률 향상', desc: '전문 PMO 조직이 체계적으로 관리함으로써 정보화 사업의 성공 가능성을 높입니다.' },
                { icon: '💡', title: '발주기관 역량 보완', desc: 'PM 전문 인력이 부족한 발주기관을 위해 전문 역량을 제공하여 사업을 지원합니다.' },
                { icon: '📊', title: '투명한 사업 관리', desc: '실시간 진행 현황 대시보드와 정기 보고를 통해 사업 가시성을 확보합니다.' },
                { icon: '🚀', title: '납기 및 예산 준수', desc: '체계적인 일정·비용 관리로 프로젝트의 납기와 예산 준수율을 높입니다.' },
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
