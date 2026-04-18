import React from 'react';
import PageHeader from '../../components/PageHeader';
import './Company.css';

const HISTORY = [
  {
    year: '2025',
    events: [
      { month: '08월', desc: '주식회사 한길에이아이 설립' },
    ],
  },
];

export default function History() {
  return (
    <div>
      <PageHeader
        title="회사 연혁"
        subtitle="한길에이아이의 성장 발자취를 소개합니다."
      />
      <section className="page-section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="section-divider" />
          <h2 className="section-title">주요 연혁</h2>
          <p className="section-subtitle">한길에이아이의 주요 연혁입니다.</p>

          <div className="history-timeline">
            {HISTORY.map((group) => (
              <div key={group.year} className="history-year-group">
                <div className="history-year-label">
                  <div className="history-dot" />
                  <span className="history-year">{group.year}</span>
                </div>
                <div className="history-events">
                  {group.events.map((ev) => (
                    <div key={ev.desc} className="history-event">
                      <span className="event-month">{ev.month}</span>
                      <span className="event-desc">{ev.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
