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
    teams: ['제3자 테스트', '보안약점/취약점 진단', '성능 진단', '클라우드 진단', '데이터품질 진단', '기능점수 산정'],
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


        </div>
      </section>
    </div>
  );
}
