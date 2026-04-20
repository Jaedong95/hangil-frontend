import React, { useEffect } from 'react';
import './ContactModal.css';

export default function ContactModal({ onClose }) {
  // ESC 키로 닫기
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="닫기">✕</button>

        <div className="modal-header">
          <div className="modal-icon">💬</div>
          <h2 className="modal-title">상담 문의 / 견적서 요청</h2>
          <p className="modal-subtitle">
            아래 연락처로 문의 주시면 빠르게 안내드리겠습니다.
          </p>
        </div>

        <div className="modal-contacts">
          <a href="tel:010-3462-7817" className="modal-contact-item">
            <span className="modal-contact-icon">📞</span>
            <div>
              <div className="modal-contact-label">전화 문의</div>
              <div className="modal-contact-value">010-3462-7817</div>
            </div>
          </a>
          <a href="mailto:info@hangil-ai.co.kr" className="modal-contact-item">
            <span className="modal-contact-icon">📧</span>
            <div>
              <div className="modal-contact-label">이메일 문의</div>
              <div className="modal-contact-value">info@hangil-ai.co.kr</div>
            </div>
          </a>
        </div>

        <p className="modal-note">
          견적서 요청 시 사업명, 사업비 규모, 감리 단계를 함께 알려주시면<br />
          보다 정확한 안내가 가능합니다.
        </p>
      </div>
    </div>
  );
}
