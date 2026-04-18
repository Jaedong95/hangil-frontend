export const IT_AVG_WAGE_DEFAULT = 7920000;
export const FP_UNIT_PRICE_DEFAULT = 547000;
export const EXPENSE_RATE = 1.10;
export const TECH_FEE_RATE = 0.20;
export const VAT_RATE = 0.10;

export const AUDIT_STAGE_COEFF = { '3': 0.9307, '2': 0.8516 };

export const COST_ITEMS = [
  { key: 'sw', shortLabel: 'SW 개발·유지보수·운영 용역비', label: '소프트웨어 개발비 및 유지보수비, 정보시스템 운영 용역비', rate: 1.000 },
  { key: 'hw', shortLabel: 'HW·SW 구입 및 유지보수비', label: '하드웨어·소프트웨어 구입비 및 유지보수비', rate: 0.456 },
  { key: 'db', shortLabel: 'DB 구축비', label: '지식정보자원·행정정보 등 데이터베이스 구축비', rate: 0.422 },
  { key: 'etc', shortLabel: '기타 전산설비·시설 등', label: '기타 전산 설비·시설물 공사·이전·임차, 센서·단말장치 설치비, 통신회선·전기 사용료, 재료비 등', rate: 0.000 },
];

export const DIFFICULTY_FACTORS = [
  {
    key: 'tech',
    label: '신기술 적용 수준',
    levels: [
      { label: '보통', desc: '주요 신기술이 적용되지 않은 경우', value: 0 },
      { label: '복잡', desc: '주요 신기술이 1개 적용된 경우', value: 0.05 },
      { label: '매우복잡', desc: '서로 다른 분야의 주요 신기술이 2개 이상 적용된 경우', value: 0.10 },
    ],
  },
  {
    key: 'region',
    label: '감리현장 지역 다중성',
    levels: [
      { label: '보통', desc: '감리현장이 단일 지역인 경우', value: 0 },
      { label: '복잡', desc: '감리현장이 2~3개 지역인 경우', value: 0.05 },
      { label: '매우복잡', desc: '감리현장이 4개 지역 이상인 경우', value: 0.10 },
    ],
  },
];
