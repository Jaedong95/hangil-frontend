import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Link } from 'react-router-dom';
import './Pricing.css';

const FILE_NAME = 'Audit_Cost_Calculator(2025.1)_ver.2.5.xlsx';

export default function PricingCalc() {
  return (
    <div>
      <PageHeader
        title="대가 산정 계산기"
        subtitle="감리 대가 산정 엑셀 계산기를 다운로드하여 사용하실 수 있습니다."
      />

      <section className="page-section">
        <div className="container">

          <div className="section-divider" />
          <div className="calc-page-header">
            <div>
              <h2 className="section-title" style={{ marginBottom: 6 }}>대가 산정 계산기 다운로드</h2>
              <p className="section-subtitle" style={{ marginBottom: 0 }}>
                행정안전부 고시 기준에 따른 감리 대가 산정 엑셀 계산기입니다.
              </p>
            </div>
            <Link to="/pricing/info" className="btn-outline pricing-info-link">
              산정 기준 안내 →
            </Link>
          </div>

          <div className="download-card card">
            <div className="download-icon">📊</div>
            <div className="download-info">
              <div className="download-desc">
                감리대상사업비 입력 시 보정금액, 기본감리비, 부가가치세를 자동 산출합니다.<br />
                3단계·2단계 감리, 난이도 요인 적용 포함.
              </div>
            </div>
            <a
              href={`${process.env.PUBLIC_URL}/${FILE_NAME}`}
              download={FILE_NAME}
              className="btn-primary download-btn"
            >
              ⬇ 엑셀 다운로드
            </a>
          </div>

          <div className="download-guide">
            <h3 className="download-guide-title">사용 방법</h3>
            <ol className="download-guide-list">
              <li>엑셀 파일을 다운로드한 후 열기</li>
              <li>감리대상사업비 구성항목별 금액 입력 (소프트웨어 개발비, HW 구입비, DB 구축비 등)</li>
              <li>감리 단계(2단계/3단계) 및 난이도 요인 선택</li>
              <li>보정금액·기본감리비·부가가치세 자동 산출 확인</li>
            </ol>
            <p className="download-guide-note">
              ※ IT감리 평균임금 및 FP단가는 매년 갱신되므로, 최신 고시 기준을 확인하여 입력하시기 바랍니다.<br />
              ※ 정확한 견적은 전문가 상담을 통해 안내드립니다.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
