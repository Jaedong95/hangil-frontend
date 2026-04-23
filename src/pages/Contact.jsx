import React from 'react';
import PageHeader from '../components/PageHeader';
import './Contact.css';

export default function Contact() {
  return (
    <div>
      <PageHeader title="문의하기" subtitle="한길에이아이와 함께 시작하세요." />
      <section className="page-section">
        <div className="container contact-page">
          <div className="contact-card">
            <div className="contact-card-header">
              <div className="contact-card-icon">💬</div>
              <h2 className="contact-card-title">상담 문의 / 견적서 요청</h2>
              <p className="contact-card-sub">아래 연락처로 문의 주시면 빠르게 안내드리겠습니다.</p>
            </div>

            <div className="contact-card-items">
              <a href="tel:02-6953-7183" className="contact-card-item">
                <span className="contact-card-item-icon">📞</span>
                <div>
                  <div className="contact-card-item-label">전화 문의</div>
                  <div className="contact-card-item-value">02-6953-7183</div>
                </div>
              </a>
              <a href="mailto:info@hangil.ai.kr" className="contact-card-item">
                <span className="contact-card-item-icon">📧</span>
                <div>
                  <div className="contact-card-item-label">이메일 문의</div>
                  <div className="contact-card-item-value">info@hangil.ai.kr</div>
                </div>
              </a>
            </div>

            <p className="contact-card-note">
              견적서 요청 시 사업명, 사업비 규모, 감리 단계를 함께 알려주시면<br />
              보다 정확한 안내가 가능합니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
