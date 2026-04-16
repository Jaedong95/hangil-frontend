import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import './Company.css';

const PERFORMANCE_DATA = [
  { no: 45, name: '2025우리아이교육학습플랫폼 고도화 감리', date: '진행중', amount: 18000000, org: '울산광역시교육청' },
  { no: 44, name: '보세판매장 화물관리시스템 구축 고도화 사업', date: '2026.02.02', amount: 112800000, org: '관세청' },
  { no: 43, name: '전세사기 근절, AI 기반 거래 안전망 솔루션 구축 위탁감리', date: '2026.03.01', amount: 52525000, org: '한국지능정보사회진흥원' },
  { no: 42, name: '스마트시티 통합플랫폼 구축 사업 감리 용역', date: '2025.12.19', amount: 73557000, org: '인천광역시 강화군' },
  { no: 41, name: '2025년 문화데이터 개방체계 구축 및 문화기반 가상융합세계 조성 사업 감리용역', date: '2025.11.21', amount: 41360000, org: '한국문화정보원' },
  { no: 40, name: '최적요금제 추천 챗봇 시스템 구축 및 활성화 지원 위탁감리', date: '2025.11.17', amount: 36356100, org: '한국지능정보사회진흥원' },
  { no: 39, name: '범정부 데이터분석시스템 고도화 위탁감리', date: '2025.04.17', amount: 78925000, org: '한국지능정보사회진흥원' },
  { no: 38, name: '재난안전데이터 공유플랫폼 3단계 구축 감리용역', date: '2025.01.23', amount: 46500000, org: '행정안전부' },
  { no: 37, name: '2024년 화학물질정보처리시스템 고도화 감리', date: '2025.01.07', amount: 100800000, org: '한국환경공단' },
  { no: 36, name: '초중등 인공지능(AI) 교육용 디지털 콘텐츠 사용성 평가 용역', date: '2024.12.27', amount: 97000000, org: '한국과학창의재단' },
  { no: 35, name: '국가안전정보 통합공개시스템 고도화 감리', date: '2024.10.31', amount: 48000000, org: '행정안전부' },
  { no: 34, name: '2023년 경주시 디지털 트윈국토 시범사업 감리 용역', date: '2024.10.04', amount: 16490000, org: '경상북도 경주시' },
  { no: 33, name: '수소 시범도시 통합 안전모니터링·운영 시스템 감리 용역', date: '2024.07.31', amount: 73224000, org: '울산광역시도시공사' },
  { no: 32, name: '스마트관광도시 조성사업 고도화 1차 감리용역', date: '2024.04.30', amount: 54000000, org: '재단법인울산문화관광재단' },
  { no: 31, name: '2023년 지능형 해상교통정보시스템 안정화 사업 감리', date: '2024.02.22', amount: 74400000, org: '해양수산부' },
  { no: 30, name: '재난안전데이터 공유플랫폼 2단계 구축 감리', date: '2024.02.14', amount: 50815200, org: '행정안전부' },
  { no: 29, name: '건축서비스산업 정보체계 구축(2차) 감리', date: '2024.01.31', amount: 105600000, org: '한국부동산원 서울사무소' },
  { no: 28, name: '국가안전정보 통합공개시스템 구축(4차) 감리', date: '2023.12.31', amount: 68800000, org: '행정안전부' },
  { no: 27, name: '23년 골재자원정보관리시스템 운영 및 고도화 감리용역', date: '2023.12.31', amount: 12990000, org: '한국골재산업연구원' },
  { no: 26, name: 'AI기반 다중이용시설 재난대피 안내시스템 구축사업 감리', date: '2023.12.31', amount: 19800000, org: '인천스마트시티' },
  { no: 25, name: '교통사고 원인조사 대상 및 사고다발지점 정보 개방체계 구축 위탁감리', date: '2023.12.23', amount: 31483100, org: '한국지능정보사회진흥원' },
  { no: 24, name: '2023년 도시교통정보센터 SW고도화사업 감리용역', date: '2023.12.16', amount: 36106100, org: '도로교통공단' },
  { no: 23, name: '모빌리티 빅데이터 DB 구축 및 데이터 분석·활용 체계 개선 감리', date: '2023.12.15', amount: 42000000, org: '한국교통연구원' },
  { no: 22, name: '2023년 장애인 전자책 서비스 개방 및 접근성 검증서비스 고도화 사업 감리', date: '2023.12.04', amount: 48536000, org: '문화체육관광부 국립장애인도서관' },
  { no: 21, name: '양양군 스마트관광도시 조성사업 감리 용역', date: '2023.05.14', amount: 115000000, org: '강원도 양양군' },
  { no: 20, name: '풍수해관리시스템 클라우드 전환 감리용역', date: '2023.03.31', amount: 79000000, org: '행정안전부' },
  { no: 19, name: '환경성보장제(EcoAS)시스템 재활용실적증명관리시스템 구축 및 기능개선 감리', date: '2023.01.27', amount: 57500000, org: '한국환경공단' },
  { no: 18, name: '차세대 산림과학 연구정보시스템 구축(1단계) 감리용역', date: '2023.01.25', amount: 52383200, org: '산림청 국립산림과학원' },
  { no: 17, name: '2022년 지능형 해상교통정보시스템 안정화 감리', date: '2023.01.13', amount: 81300000, org: '해양수산부' },
  { no: 16, name: '지능형 해상교통정보 제2운영센터 구축 감리', date: '2022.12.24', amount: 147200000, org: '해양수산부' },
  { no: 15, name: 'ICT 기반 스마트 산림재해 대응체계 구축(3차) 감리', date: '2022.12.23', amount: 35500000, org: '산림청' },
  { no: 14, name: '2022년 산업활용 기반 전통문양 콘텐츠 구축 및 전통문양 활용 메타버스 콘텐츠 구축 감리 용역', date: '2022.12.23', amount: 22000000, org: '한국문화정보원' },
  { no: 13, name: '광주 AI 특화 클라우드 서비스 임차 감리용역', date: '2022.12.23', amount: 128100000, org: '인공지능산업융합사업단' },
  { no: 12, name: '2022년 한양도성 타임머신 감리', date: '2022.12.16', amount: 160000000, org: '문화재청' },
  { no: 11, name: '목표관리제·배출권거래제 통합정보시스템 재구축(2단계) PMO사업', date: '2022.12.16', amount: 20000000, org: '환경부 온실가스종합정보센터' },
  { no: 10, name: '2022년도 해양수산정보 공동활용체계 구축 감리', date: '2022.12.15', amount: 43100000, org: '해양수산부' },
  { no: 9, name: '2022년도 연안관리정보시스템 개선 감리', date: '2022.12.15', amount: 31100000, org: '해양수산부' },
  { no: 8, name: '임야대상 농업경영체 통합정보체계 구축(22년) 감리용역', date: '2022.10.28', amount: 107730000, org: '산림청' },
  { no: 7, name: '미래폐자원 거점수거센터(4개권역) 운영관리시스템 구축 감리', date: '2022.02.16', amount: 71812000, org: '한국환경공단' },
  { no: 6, name: '환경부 홈페이지(PC, 모바일) 고도화 사업 감리', date: '2021.12.31', amount: 17000000, org: '환경부' },
  { no: 5, name: '모빌리티 빅데이터 DB구축 및 온라인 서비스 유지보수 사업 감리', date: '2021.12.31', amount: 36000000, org: '한국교통연구원' },
  { no: 4, name: '2021년 문화데이터 연계 통합관리 체계 구축 및 데이터 서비스 개발 사업 감리', date: '2021.12.24', amount: 22000000, org: '한국문화정보원' },
  { no: 3, name: '2021년 5G기반 실감형 전시플랫폼 구축 감리용역', date: '2021.12.17', amount: 121000000, org: '한국문화정보원' },
  { no: 2, name: '임야대상 농업경영체 통합정보체계 구축 감리', date: '2021.12.17', amount: 97000000, org: '산림청' },
  { no: 1, name: '국립공원 디지털트윈 시범사업 감리', date: '2021.12.10', amount: 60270000, org: '국립공원공단' },
];

const fmtAmount = (n) => `₩${n.toLocaleString('ko-KR')}`;

export default function Performance() {
  const [page, setPage] = useState(1);
  const PER_PAGE = 15;

  const totalPages = Math.ceil(PERFORMANCE_DATA.length / PER_PAGE);
  const paged = PERFORMANCE_DATA.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div>
      <PageHeader
        title="감리 실적"
        subtitle="한길에이아이가 수행한 공공기관 정보시스템 감리 실적입니다."
        breadcrumbs={[{ label: '회사 소개' }, { label: '감리 실적' }]}
      />

      <section className="page-section">
        <div className="container">

          {/* 요약 통계 */}
          <div className="perf-stats">
            {[
              { value: '45건', label: '총 수행 건수' },
              { value: '28.4억', label: '총 계약금액' },
              { value: '4년+', label: '공공부문 집중' },
              { value: '100%', label: '공공기관 대상' },
            ].map((s) => (
              <div key={s.label} className="perf-stat-card">
                <span className="perf-stat-value">{s.value}</span>
                <span className="perf-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <p className="perf-note">
            ※ 모든 실적은 공공기관 발주 정보시스템 감리 사업 기준입니다. (2021년 이후 기준)
          </p>

          {/* 실적 테이블 */}
          <div className="perf-table-wrap">
            <table className="perf-table">
              <colgroup>
                <col style={{ width: '60px' }} />
                <col />
                <col style={{ width: '110px' }} />
                <col style={{ width: '160px' }} />
                <col style={{ width: '220px' }} />
              </colgroup>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>사업명</th>
                  <th>계약일</th>
                  <th>계약금액</th>
                  <th>주관기관</th>
                </tr>
              </thead>
              <tbody>
                {paged.map((row) => (
                  <tr key={row.no}>
                    <td className="perf-td-num">{row.no}</td>
                    <td className="perf-td-name">{row.name}</td>
                    <td>
                      {row.date === '진행중'
                        ? <span className="perf-badge-active">진행중</span>
                        : row.date}
                    </td>
                    <td className="perf-td-amount">{fmtAmount(row.amount)}</td>
                    <td className="perf-td-org">{row.org}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 페이지네이션 */}
          {totalPages > 1 && (
            <div className="perf-pagination">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="perf-page-btn"
              >
                ‹
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`perf-page-btn ${page === p ? 'active' : ''}`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="perf-page-btn"
              >
                ›
              </button>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
