import React from 'react';
import PageHeader from '../../components/PageHeader';
import aboutBg from '../../assets/AboutUs.png';
import './Company.css';

const DEPTS = [
  {
    name: '감리 사업본부',
    teams: ['정보시스템 감리', '공공/금융사업 감리', '운영/유지보수 감리', 'ERP 감리', 'PMO'],
  },
  {
    name: '품질/진단 컨설팅',
    teams: ['제3자 테스트', '보안약점/취약점 진단', '성능 진단', '클라우드 진단', '데이터품질 진단'],
  },
  {
    name: '정보화 교육팀',
    teams: ['구축 방법론', '품질 관리', '개발 가이드', '감리 가이드'],
  },
  {
    name: 'IT 컨설팅',
    teams: ['BPR / ISP', 'ISMP', 'SW 사업대가 산정', '정보보안/개인정보보호'],
  },
];

const GRADE_ROWS = [
  { grade: '기술사', count: '3', bold: true },
  { grade: '특급 기술자', count: '10', bold: true },
  { grade: '고급 기술자', count: '-', bold: false },
  { grade: '중급 기술자', count: '-', bold: false },
  { grade: '초급 기술자', count: '-', bold: false },
  { grade: '합계', count: '13', bold: true, total: true },
];

const CERT_ROWS_1 = [
  { name: '수석감리원', count: 9, desc: '정보시스템 수석감리원' },
  { name: '기술사', count: 3, desc: '정보관리/통신 기술사' },
  { name: '감리사', count: 7, desc: '정보시스템 감리사' },
  { name: '감리원', count: 4, desc: '정보시스템 감리원' },
  { name: '인공지능(AI)전문가', count: 6, desc: '민간 인공지능 전문가' },
  { name: 'AICE', count: 2, desc: '국가공인 인공지능능력시험' },
];

const CERT_ROWS_2 = [
  { name: 'K-PaaS', count: 4, desc: '오픈클라우드플랫폼 전문가' },
  { name: 'DAP', count: 3, desc: '데이터아키텍처 전문가' },
  { name: 'DQC-V', count: 2, desc: '데이터품질인증 심사원' },
  { name: 'SW보안약점진단원', count: 1, desc: '소프트웨어 개발보안' },
  { name: 'CFPS', count: 3, desc: '기능점수산정 전문가' },
];

export default function OrgChart() {
  return (
    <div>
      <PageHeader
        title="조직도"
        subtitle="한길에이아이의 전문 조직 구성을 소개합니다."
        bgImage={aboutBg}
      />
      <section className="page-section">
        <div className="container">

          {/* ── 조직도 ── */}
          <div className="org-chart-container">
            <div className="org-layout">

              {/* 메인 트리 */}
              <div className="org-main">
                <div className="org-ceo-wrap">
                  <div className="org-node-top">대표이사</div>
                </div>
                <div className="org-depts">
                  {DEPTS.map((dept) => (
                    <div key={dept.name} className="org-branch">
                      <div className="org-dept">{dept.name}</div>
                      <div className="org-sub-group">
                        {dept.teams.map((team) => (
                          <div key={team} className="org-team">{team}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 전문위원 / 기술자문 */}
              <div className="org-advisors">
                <div className="org-advisor-box">전문 위원</div>
                <div className="org-advisor-box">기술 자문 그룹</div>
              </div>

            </div>
          </div>

          {/* ── 등급별/자격별 인력 현황 ── */}
          <div style={{ marginTop: 64 }}>
            <div className="section-divider" />
            <h2 className="section-title">등급별/자격별 인력 현황</h2>

            <div className="org-stats-wrap">
              {/* 기술 등급 */}
              <table className="org-stats-table">
                <thead>
                  <tr>
                    <th>기술 등급</th>
                    <th>인원(명)</th>
                  </tr>
                </thead>
                <tbody>
                  {GRADE_ROWS.map((r) => (
                    <tr key={r.grade} className={r.total ? 'org-stats-total' : ''}>
                      <td style={{ fontWeight: r.bold ? 700 : 400 }}>{r.grade}</td>
                      <td style={{ fontWeight: r.bold ? 700 : 400, textAlign: 'center' }}>{r.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* 자격명 1 */}
              <table className="org-stats-table">
                <thead>
                  <tr>
                    <th>자격명</th>
                    <th>인원(명)</th>
                    <th>설명</th>
                  </tr>
                </thead>
                <tbody>
                  {CERT_ROWS_1.map((r) => (
                    <tr key={r.name}>
                      <td style={{ fontWeight: 600 }}>{r.name}</td>
                      <td style={{ textAlign: 'center' }}>{r.count}</td>
                      <td>{r.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* 자격명 2 */}
              <table className="org-stats-table">
                <thead>
                  <tr>
                    <th>자격명</th>
                    <th>인원(명)</th>
                    <th>설명</th>
                  </tr>
                </thead>
                <tbody>
                  {CERT_ROWS_2.map((r) => (
                    <tr key={r.name}>
                      <td style={{ fontWeight: 600 }}>{r.name}</td>
                      <td style={{ textAlign: 'center' }}>{r.count}</td>
                      <td>{r.desc}</td>
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
