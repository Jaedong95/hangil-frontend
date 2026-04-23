import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';
import ContactModal from './ContactModal';
import './Hero.css';


const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '정보시스템 감리',
    desc: '독립적이고 전문적인 제3자의 시각으로 정보시스템 구축 전반을 점검합니다.',
    path: '/business/is-management',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: '정보시스템 PMO',
    desc: '프로젝트 일정·비용·품질·리스크를 전문 PM이 체계적으로 통합 관리합니다.',
    path: '/business/pmo',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '정보시스템 컨설팅',
    desc: '정보화 전략 수립부터 시스템 도입, 클라우드 전환까지 전문 컨설팅을 제공합니다.',
    path: '/business/consulting',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'IT 품질 진단',
    desc: '아키텍처·코드·보안·성능을 종합 진단하고 실질적인 개선 방향을 제시합니다.',
    path: '/business/quality',
  },
];

const WHY_ITEMS = [
  { num: '01', title: '대한민국 최초 AI 감리', desc: 'AI 기술을 접목한 차세대 감리 플랫폼으로 정확성과 효율을 동시에 달성합니다.' },
  { num: '02', title: '다양한 분야의 전문 인력', desc: '수석감리원·기술사·AI 전문가·클라우드·데이터 등 각 분야 자격 보유 전문가가 함께합니다.' },
  { num: '03', title: '법적 요건 완전 충족', desc: '전자정부법 등 관련 법규에 따른 의무 감리 요건을 빈틈없이 충족시킵니다.' },
];

export default function Hero() {
  const ref = useRef(null);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.fade-up').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
    <main ref={ref} style={{ paddingTop: '72px' }}>

      {/* ── Hero ── */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <div className="hero-left">
            <div className="hero-kicker fade-up">대한민국 최초 AI 감리 서비스</div>
            <h1 className="hero-heading fade-up">
              AI를 활용한<br />
              <span>신뢰할 수 있는</span><br />
              감리 서비스
            </h1>
            <p className="hero-body fade-up">
              주식회사 한길에이아이는 인공지능 기술과 전문 감리사의 협업으로<br />
              더 정확하고 투명한 정보시스템 감리를 실현합니다.
            </p>
            <div className="hero-actions fade-up">
              <Link to="/company/greeting" className="btn-white">회사 소개</Link>
              <Link to="/procedure/overview" className="btn-white-outline">감리 절차 알아보기</Link>
            </div>
          </div>
          <div className="hero-right fade-up">
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Why ── */}
      <section className="page-section why-section">
        <div className="container">
          <div className="why-layout">
            <div className="why-left fade-up">
              <p className="section-eyebrow">Why HANGIL AI</p>
              <h2 className="section-title">왜 한길에이아이인가요?</h2>
              <p className="why-desc">
                수석감리원·기술사·AI 전문가 등 각 분야 전문 인력과 대한민국 최초 AI 감리 기술을 결합하여 최고의 감리 서비스를 제공합니다.
              </p>
              <Link to="/company/greeting" className="btn-primary" style={{ marginTop: 8 }}>
                회사 소개 보기
              </Link>
            </div>
            <div className="why-right">
              {WHY_ITEMS.map((item, i) => (
                <div key={item.num} className="why-item fade-up" style={{ transitionDelay: `${i * 0.07}s` }}>
                  <div className="wi-num">{item.num}</div>
                  <div className="wi-body">
                    <h3 className="wi-title">{item.title}</h3>
                    <p className="wi-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="page-section">
        <div className="container">
          <div className="section-header fade-up">
            <p className="section-eyebrow">Our Services</p>
            <h2 className="section-title">전문 감리 서비스</h2>
            <p className="section-subtitle">한길에이아이의 체계적인 서비스로 정보화 사업의 성공을 지원합니다.</p>
          </div>
          <div className="grid-4 services-grid">
            {SERVICES.map((s, i) => (
              <Link to={s.path} key={s.title} className="service-card fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="sc-icon">{s.icon}</div>
                <h3 className="sc-title">{s.title}</h3>
                <p className="sc-desc">{s.desc}</p>
                <span className="sc-link">자세히 보기 →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>



    </main>

    {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </>
  );
}
