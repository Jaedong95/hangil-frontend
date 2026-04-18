import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const NAV_ITEMS = [
  {
    label: '회사 소개',
    key: 'company',
    children: [
      { label: '인사말', path: '/company/greeting' },
      { label: '회사 연혁', path: '/company/history' },
      { label: '조직도', path: '/company/orgchart' },
      { label: '주요 고객사', path: '/company/clients' },
      { label: '오시는 길', path: '/company/location' },
      { label: '감리 실적', path: '/company/performance' },
    ],
  },
  {
    label: '사업 분야',
    key: 'business',
    children: [
      { label: '정보시스템 감리', path: '/business/is-management' },
      { label: '정보시스템 PMO', path: '/business/pmo' },
      { label: '정보시스템 컨설팅', path: '/business/consulting' },
      { label: 'IT 품질 진단', path: '/business/quality' },
    ],
  },
  {
    label: '감리정보',
    key: 'procedure',
    children: [
      { label: '개요', path: '/procedure/overview' },
      { label: '감리 수행절차', path: '/procedure/process' },
      { label: '감리 기준', path: '/procedure/standards' },
      { label: '감리 품질보증 체계', path: '/procedure/quality' },
    ],
  },
  {
    label: '대가 산정',
    key: 'pricing',
    children: [
      { label: '대가 산정 안내', path: '/pricing/info' },
      { label: '대가 산정 계산기', path: '/pricing/calculator' },
    ],
  },
  {
    label: '솔루션',
    key: 'solutions',
    children: [
      { label: 'FP Code Analyzer', path: '/solutions/fpcode' },
      { label: '추가 예정', path: '#', disabled: true },
    ],
  },
];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [location]);

  const isActive = (item) => {
    if (item.path) return location.pathname === item.path;
    return item.children?.some((c) => location.pathname.startsWith(`/${item.key}`));
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="HANGIL AI 로고" className="logo-img" />
        </Link>

        <nav className="main-nav">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.key}
              className={`nav-item ${isActive(item) ? 'active' : ''}`}
              onMouseEnter={() => item.children.length && setActiveMenu(item.key)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {item.path && !item.children.length ? (
                <Link to={item.path} className="nav-label">{item.label}</Link>
              ) : (
                <span className="nav-label">
                  {item.label}
                  {item.children.length > 0 && <span className="nav-arrow">▾</span>}
                </span>
              )}

              {item.children.length > 0 && activeMenu === item.key && (
                <div className="dropdown">
                  <div className="dropdown-inner">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.disabled ? '#' : child.path}
                        className={`dropdown-item ${child.disabled ? 'disabled' : ''} ${location.pathname === child.path ? 'current' : ''}`}
                        onClick={child.disabled ? (e) => e.preventDefault() : undefined}
                      >
                        {child.label}
                        {child.disabled && <span className="badge-soon">준비중</span>}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <div key={item.key} className="mobile-nav-group">
            {item.path && !item.children.length ? (
              <Link to={item.path} className="mobile-nav-label">{item.label}</Link>
            ) : (
              <>
                <button
                  className="mobile-nav-label"
                  onClick={() => setMobileExpanded(mobileExpanded === item.key ? null : item.key)}
                >
                  {item.label}
                  <span className={`mobile-arrow ${mobileExpanded === item.key ? 'up' : ''}`}>▾</span>
                </button>
                {mobileExpanded === item.key && (
                  <div className="mobile-sub">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.disabled ? '#' : child.path}
                        className={`mobile-sub-item ${child.disabled ? 'disabled' : ''}`}
                        onClick={child.disabled ? (e) => e.preventDefault() : undefined}
                      >
                        {child.label}
                        {child.disabled && <span className="badge-soon">준비중</span>}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </header>
  );
}
