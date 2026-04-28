import React from 'react';
import PageHeader from '../../components/PageHeader';
import aboutBg from '../../assets/AboutUs.png';
import './Company.css';

export default function Location() {
  return (
    <div>
      <PageHeader
        title="오시는 길"
        subtitle="한길에이아이를 방문하시는 방법을 안내해 드립니다."
        bgImage={aboutBg}
      />
      <section className="page-section">
        <div className="container">
          <div className="location-grid">
            {/* 지도 영역 */}
            <div className="map-wrap">
              <iframe
                title="회사 위치"
                src="https://maps.google.com/maps?q=서울특별시+마포구+월드컵로+196+성산동&hl=ko&output=embed"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: 'var(--radius-lg)', display: 'block' }}
                allowFullScreen
                loading="eager"
              />
            </div>

            {/* 주소 정보 */}
            <div>
              <div className="location-info-card">
                <div style={{ padding: '20px', background: 'var(--text-dark)', color: 'white' }}>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', marginBottom: 4 }}>본사</div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>주식회사 한길에이아이</div>
                </div>
                {[
                  { icon: '📍', label: '주소', value: '서울특별시 마포구 월드컵로 196, 비 105-씨 79호 (성산동)' },
                  { icon: '📞', label: '전화', value: '02-6953-7183' },
                  { icon: '📧', label: '이메일', value: 'info@hangil.ai.kr' },
                  { icon: '🕐', label: '업무시간', value: '평일 09:00 ~ 18:00\n(점심시간 12:00 ~ 13:00)' },
                ].map((info) => (
                  <div key={info.label} className="location-info-row">
                    <div className="location-info-icon">{info.icon}</div>
                    <div>
                      <div className="location-info-label">{info.label}</div>
                      <div className="location-info-value" style={{ whiteSpace: 'pre-line' }}>{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 교통 안내 */}
          <div style={{ marginTop: 60 }}>
            <div className="section-divider" />
            <h2 className="section-title">교통 안내</h2>
            <div className="grid-3" style={{ marginTop: 32 }}>
              {[
                {
                  icon: '🚇',
                  title: '지하철',
                  lines: [
                    '6호선 마포구청역 1번 출구 도보 1분',
                  ],
                },
                {
                  icon: '🚌',
                  title: '버스',
                  lines: [
                    '간선버스: 271, 710',
                    '지선버스: 7011, 7016, 7733',
                    '광역버스: 9711',
                    '마을버스: 마포08, 마포15',
                    '정류장: 마포구청역 정류장에서 하차',
                  ],
                },
                {
                  icon: '🚗',
                  title: '자가용',
                  lines: [
                    '내비게이션: "대명비첸시티 오피스텔" 검색',
                    '또는 "서울특별시 마포구 월드컵로 196" 검색',
                  ],
                },
              ].map((trans) => (
                <div key={trans.title} className="card">
                  <div style={{ fontSize: '2rem', marginBottom: 12 }}>{trans.icon}</div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 12 }}>{trans.title}</h3>
                  <ul style={{ listStyle: 'none' }}>
                    {trans.lines.map((line) => (
                      <li key={line} style={{ fontSize: '0.88rem', color: 'var(--text-mid)', padding: '4px 0', borderBottom: '1px solid var(--border)' }}>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
