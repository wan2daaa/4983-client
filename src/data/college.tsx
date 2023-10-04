export type Category = {
  id: number;
  name: string;
  children: Category[] | [];
  collapsed?: boolean;
  value?: string; // "value" 필드 추가
};

export const Categories = [
  {
    id: 1,
    name: "경영경제대학",
    value: "BUSINESS_AND_ECONOMICS",
    children: [
      { id: 2, name: "경영학과", value: "BUSINESS", children: [] },
      { id: 3, name: "경제학과", value: "ECONOMICS", children: [] },
      {
        id: 4,
        name: "국제경영학전공",
        value: "INTERNATIONAL_BUSINESS",
        children: [],
      },
      { id: 5, name: "무역학과", value: "TRADE", children: [] },
      {
        id: 6,
        name: "산업경영학과",
        value: "INDUSTRIAL_BUSINESS",
        children: [],
      },
      { id: 7, name: "회계학과", value: "ACCOUNTING", children: [] },
    ],
    collapsed: true,
  },
  {
    id: 8,
    name: "SW융합대학",
    value: "SW_CONVERGENCE",
    children: [
      { id: 9, name: "소프트웨어학과", value: "SOFTWARE", children: [] },
      { id: 10, name: "컴퓨터공학과", value: "COMPUTER", children: [] },
      {
        id: 11,
        name: "모바일시스템공학과",
        value: "MOBILE_SYSTEM",
        children: [],
      },
      { id: 12, name: "정보통계학과", value: "STATISTICS", children: [] },
      { id: 13, name: "산업보안학과", value: "SECURITY", children: [] },
    ],
    collapsed: true,
  },
  {
    id: 14,
    name: "사회과학대학",
    value: "SOCIAL_SCIENCES",
    children: [
      { id: 15, name: "정치외교학과", value: "POLITICAL", children: [] },
      {
        id: 16,
        name: "행정학과",
        value: "PUBLIC_ADMINISTRATION",
        children: [],
      },
      {
        id: 17,
        name: "도시계획부동산학부",
        value: "URBAN_PLANNING",
        children: [],
      },
      {
        id: 18,
        name: "미디어커뮤니케이션학부",
        value: "MEDIA_COMMUNICATION",
        children: [],
      },
      { id: 19, name: "상담학과", value: "CONSULTING", children: [] },
    ],
    collapsed: true,
  },
  {
    id: 20,
    name: "문과대학",
    value: "LITERAL_ARTS",
    children: [
      { id: 21, name: "국어국문과", value: "KOREAN", children: [] },
      { id: 22, name: "사학과", value: "HISTORY", children: [] },
      { id: 23, name: "철학과", value: "PHILOSOPHY", children: [] },
      {
        id: 24,
        name: "영미인문학과",
        value: "AMERICAN_HUMANITY",
        children: [],
      },
    ],
    collapsed: true,
  },
  {
    id: 25,
    name: "법과대학",
    value: "LAW",
    children: [
      { id: 26, name: "법학과", value: "DEPARTMENT_OF_LAW", children: [] },
    ],
    collapsed: true,
  },
  {
    id: 27,
    name: "공과대학",
    value: "ENGINEERING",
    children: [
      { id: 28, name: "전자전기공학전공", value: "ELECTRICAL", children: [] },
      { id: 29, name: "고분자공학전공", value: "POLYMER", children: [] },
      {
        id: 30,
        name: "융합반도체공학전공",
        value: "FUSION_SEMICONDUCTOR",
        children: [],
      },
      { id: 31, name: "파이버융합소재공학전공", value: "FIBER", children: [] },
      { id: 32, name: "화학공학과", value: "CHEMICAL", children: [] },
      {
        id: 33,
        name: "건축공학전공",
        value: "ARCHITECTURE_ENGINEER",
        children: [],
      },
      { id: 34, name: "건축학전공", value: "ARCHITECTURE", children: [] },
    ],
    collapsed: true,
  },
  {
    id: 35,
    name: "사범대학",
    value: "EDUCATION",
    children: [
      { id: 36, name: "수학교육과", value: "MATH", children: [] },
      { id: 37, name: "과학교육과", value: "SCIENCE", children: [] },
      { id: 38, name: "체육교육과", value: "ATHLETIC", children: [] },
      { id: 39, name: "한문교육과", value: "CHINESE", children: [] },
      { id: 40, name: "특수교육과", value: "SPECIAL", children: [] },
    ],
    collapsed: true,
  },
  {
    id: 41,
    name: "음악예술대학",
    value: "MUSIC_AND_ARTS",
    children: [
      { id: 42, name: "영화전공", value: "MOVIE", children: [] },
      { id: 43, name: "연극전공", value: "THEATER", children: [] },
      { id: 44, name: "뮤지컬전공", value: "MUSICAL", children: [] },
      { id: 45, name: "도예과", value: "CERAMICS", children: [] },
      {
        id: 46,
        name: "커뮤니케이션디자인전공",
        value: "COMMUNICATION_DESIGN",
        children: [],
      },
      {
        id: 47,
        name: "패션산업디자인전공",
        value: "INDUSTRIAL_DESIGN",
        children: [],
      },
      { id: 48, name: "무용과", value: "DANCING", children: [] },
      { id: 49, name: "피아노전공", value: "PIANO", children: [] },
      { id: 50, name: "성악전공", value: "VOCAL", children: [] },
      { id: 51, name: "관현악전공", value: "ORCHESTRA", children: [] },
      { id: 52, name: "작곡전공", value: "COMPOSITION", children: [] },
      { id: 53, name: "국악전공", value: "GUGAK", children: [] },
    ],
    collapsed: true,
  },
  // 다른 대학과 학과들도 위와 같은 패턴으로 "value" 값을 추가합니다.
];
