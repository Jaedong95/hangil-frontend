import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const LINKS = [
  {
    title: '회사 소개',
    items: [
      { label: '인사말', path: '/company/greeting' },
      { label: '회사 연혁', path: '/company/history' },
      { label: '조직도', path: '/company/orgchart' },
      { label: '주요 고객사', path: '/company/clients' },
      { label: '오시는 길', path: '/company/location' },
      { label: '감리 실적', path: '/company/performance' },
    ],
  },
  {
    title: '사업 분야',
    items: [
      { label: '정보시스템 감리', path: '/business/is-management' },
      { label: '정보시스템 PMO', path: '/business/pmo' },
      { label: '정보시스템 컨설팅', path: '/business/consulting' },
      { label: 'IT 품질 진단', path: '/business/quality' },
      { label: '기능점수 산정', path: '/business/fpcode' },
    ],
  },
  {
    title: '감리수행절차',
    items: [
      { label: '개요', path: '/procedure/overview' },
      { label: '감리 수행절차', path: '/procedure/process' },
    ],
  },
  {
    title: '기타',
    items: [
      { label: '대가 산정', path: '/pricing' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container footer-inner">
          <div className="footer-brand">
            <p className="footer-tagline">
              대한민국 최초 AI를 활용한<br />감리 서비스
            </p>
            <div className="footer-contact">
              {[
                { icon: '📞', text: '02-6953-7183' },
                { icon: '📧', text: 'info@hangil.ai.kr' },
                { icon: '📍', text: '서울특별시 마포구 월드컵로 196, 비 105-씨 79호 (성산동)' },
              ].map((c) => (
                <div key={c.text} className="footer-contact-row">
                  <span>{c.icon}</span>
                  <span>{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          <nav className="footer-nav">
            {LINKS.map((group) => (
              <div key={group.title} className="footer-nav-group">
                <h4 className="footer-nav-title">{group.title}</h4>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.path}>
                      <Link to={item.path} className="footer-nav-link">{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2025 주식회사 한길에이아이. All rights reserved.</span>
          <div className="footer-bottom-links">
            <button type="button" className="footer-link-btn">개인정보처리방침</button>
            <button type="button" className="footer-link-btn">이용약관</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
