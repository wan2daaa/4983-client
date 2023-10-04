import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as style from "@/components/pages/signup/create-account-college/create-account-college-chart/CreateAccountCollegeChart.style";
import { Categories } from "@/data/college";

const categoryMapping = {
  BUSINESS_AND_ECONOMICS: 1,
  SW_CONVERGENCE: 8,
  SOCIAL_SCIENCES: 14,
  LITERAL_ARTS: 20,
  LAW: 25,
  ENGINEERING: 27,
  EDUCATION: 35,
  MUSIC_AND_ARTS: 41,
};

export default function CreateAccountCollegeChart() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [isNextButtonEnabled, setNextButtonEnabled] = useState(false);

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(prevSelected =>
      prevSelected === categoryId ? null : categoryId,
    );
  };

  // 다음 버튼 활성화 여부 업데이트
  useEffect(() => {
    setNextButtonEnabled(selectedCategory !== null);
  }, [selectedCategory]);

  return (
    <style.Div>
      <style.ChartBox>
        {Object.values(categoryMapping).map(categoryId => {
          const category = Categories.find(cat => cat.id === categoryId);
          if (category) {
            const isSelected = selectedCategory === categoryId;

            return (
              <style.BigChart
                key={category.id}
                onClick={() => handleCategoryClick(categoryId)}
                style={{
                  backgroundColor: isSelected ? "#F6F6F6" : "initial",
                }}
              >
                <style.BigChartInner key={category.id}>
                  {category.name}
                </style.BigChartInner>
              </style.BigChart>
            );
          }
          return null;
        })}
      </style.ChartBox>
      {isNextButtonEnabled ? (
        <Link
          href={{
            pathname: "/signup/5",
            query: { categoryId: selectedCategory }, // 선택한 항목의 categoryId를 전달
          }}
        >
          <style.Button
            style={{
              background: "#02B878",
              color: "#FFF",
              cursor: "pointer",
            }}
          >
            다음
          </style.Button>
        </Link>
      ) : (
        <style.Button
          style={{
            background: "#d1d1d1",
            color: "#707479",
            cursor: "default",
          }}
        >
          다음
        </style.Button>
      )}
    </style.Div>
  );
}
