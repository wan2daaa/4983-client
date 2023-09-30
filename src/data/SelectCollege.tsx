export interface Department {
  id: number;
  name: string;
  value: string;
}

export interface College {
  id: number;
  name: string;
  value: string;
  departments: Array<Department>;
}

export const SelectCollege: Array<College> = [
  {
    id: 1,
    name: "경영경제대학",
    value: "BUSINESS_AND_ECONOMICS",
    departments: [
      { id: 1, name: "경영학과", value: "BUSINESS" },
      { id: 2, name: "경제학과", value: "ECONOMICS" },
      { id: 3, name: "국제경영학전공", value: "INTERNATIONAL_BUSINESS" },
      { id: 4, name: "무역학과", value: "TRADE" },
      { id: 5, name: "산업경영학과", value: "INDUSTRIAL_BUSINESS" },
      { id: 6, name: "회계학과", value: "ACCOUNTING" },
    ],
  },
  {
    id: 2,
    name: "SW융합대학",
    value: "SW_CONVERGENCE",
    departments: [
      { id: 7, name: "소프트웨어학과", value: "SOFTWARE" },
      { id: 8, name: "컴퓨터공학과", value: "COMPUTER" },
      { id: 9, name: "모바일시스템공학과", value: "MOBILE_SYSTEM" },
      { id: 10, name: "정보통계학과", value: "STATISTICS" },
      { id: 11, name: "산업보안학과", value: "SECURITY" },
    ],
  },
  {
    id: 3,
    name: "사회과학대학",
    value: "SOCIAL_SCIENCES",
    departments: [
      { id: 12, name: "정치외교학과", value: "POLITICAL" },
      { id: 13, name: "행정학과", value: "PUBLIC_ADMINISTRATION" },
      { id: 14, name: "도시계획부동산학부", value: "URBAN_PLANNING" },
      { id: 15, name: "미디어커뮤니케이션학부", value: "MEDIA_COMMUNICATION" },
      { id: 16, name: "상담학과", value: "CONSULTING" },
    ],
  },

  {
    id: 4,
    name: "문과대학",
    value: "LITERAL_ARTS",
    departments: [
      { id: 17, name: "국어국문학과", value: "KOREAN" },
      { id: 18, name: "사학과", value: "HISTORY" },
      { id: 19, name: "철학과", value: "PHILOSOPHY" },
      { id: 20, name: "영미인문학과", value: "AMERICAN_HUMANITY" },
    ],
  },
  {
    id: 5,
    name: "법과대학",
    value: "LAW",
    departments: [{ id: 21, name: "법학과", value: "DEPARTMENT_OF_LAW" }],
  },
  {
    id: 6,
    name: "공과대학",
    value: "ENGINEERING",
    departments: [
      { id: 22, name: "전자전기공학전공", value: "ELECTRICAL" },
      { id: 23, name: "고분자공학전공", value: "POLYMER" },
      { id: 24, name: "융합반도체공학전공", value: "FUSION_SEMICONDUCTOR" },
      { id: 25, name: "파이버융합소재공학전공", value: "FIBER" },
      { id: 26, name: "화학공학과", value: "CHEMICAL" },
      {
        id: 27,
        name: "건축공학전공",
        value: "ARCHITECTURE_ENGINEER",
      },
      { id: 28, name: "건축학전공", value: "ARCHITECTURE" },
    ],
  },
  {
    id: 7,
    name: "사범대학",
    value: "EDUCATION",
    departments: [
      { id: 29, name: "수학교육과", value: "MATH" },
      { id: 30, name: "과학교육과", value: "SCIENCE" },
      { id: 31, name: "체육교육과", value: "ATHLETIC" },
      { id: 32, name: "한문교육과", value: "CHINESE" },
      { id: 33, name: "특수교육과", value: "SPECIAL" },
    ],
  },
  {
    id: 8,
    name: "음악예술대학",
    value: "MUSIC_AND_ARTS",
    departments: [
      { id: 34, name: "영화전공", value: "MOVIE" },
      { id: 35, name: "연극전공", value: "THEATER" },
      { id: 36, name: "뮤지컬전공", value: "MUSICAL" },
      { id: 37, name: "도예과", value: "CERAMICS" },
      { id: 38, name: "커뮤니케이션디자인전공", value: "COMMUNICATION_DESIGN" },
      { id: 39, name: "패션산업디자인전공", value: "INDUSTRIAL_DESIGN" },
      { id: 40, name: "무용과", value: "DANCING" },
      { id: 41, name: "피아노전공", value: "PIANO" },
      { id: 42, name: "성악전공", value: "VOCAL" },
      { id: 43, name: "관현악전공", value: "ORCHESTRA" },
      { id: 44, name: "작곡전공", value: "COMPOSITION" },
      { id: 45, name: "국악전공", value: "GUGAK" },
    ],
  },
];

export default SelectCollege;
