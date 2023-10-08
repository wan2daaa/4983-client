import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { Categories } from "@/data/college";
import {
  accountBank,
  accountHolder,
  accountNumber,
  department,
  marketingAgree,
  nickname,
  password,
  phoneNumber,
  studentId,
} from "@/recoil/atoms/SignupAtoms";
import { signup } from "@/apis/auth/signup/signup";
import * as style from "@/components/pages/signup/create-account-college/create-account-college-next/CreateAccountCollegeChartNext.style";

export default function CreateAccountCollegeChartNext() {
  const [studentIds, setStudentIds] = useRecoilState(studentId);
  const [departments, setDepartments] = useRecoilState(department);
  const [nicknames, setNicknames] = useRecoilState(nickname);
  const [passwords, setPasswords] = useRecoilState(password);
  const [phoneNumbers, setPhoneNumbers] = useRecoilState(phoneNumber);
  const [marketingAgrees, setMarketingAgrees] = useRecoilState(marketingAgree);
  const [accountNumbers, setAccountNumbers] = useRecoilState(accountNumber);
  const [accountHolders, setAccountHolders] = useRecoilState(accountHolder);
  const [accountBanks, setAccountBanks] = useRecoilState(accountBank);

  const router = useRouter();
  const { categoryId } = router.query;

  const selectedCategory = Categories.find(
    category => category.id === Number(categoryId),
  );

  const [selectedChart, setSelectedChart] = useState<number | null>(null);
  const [selectedChartName, setSelectedChartName] = useState<string | null>(
    null,
  );

  useEffect(() => {
    if (selectedCategory) {
      // 선택된 BigChart가 변경될 때만 업데이트
      if (
        !selectedCategory.children.some(
          childCategory => childCategory.id === selectedChart,
        )
      ) {
        setSelectedChart(null);
      }
    }
  }, [selectedCategory, selectedChart]);

  const toggleChartSelection = (chartId: number, chartName: string) => {
    // 선택된 BigChart가 이미 있는 경우 선택 해제
    if (selectedChart === chartId) {
      setSelectedChart(null);
      setSelectedChartName(null);
    } else {
      setSelectedChart(chartId);
      setSelectedChartName(chartName);
      // department에 선택된 childCategory.name을 저장
      setDepartments(chartName);
    }
  };

  const isButtonDisabled = selectedChart === null;

  const handleSignup = () => {
    signup(
      studentIds,
      // departments,
      "ACCOUNTING",
      nicknames,
      passwords,
      phoneNumbers,
      marketingAgrees,
      accountNumbers,
      accountHolders,
      // accountBanks,
      "KB",
    );
  };

  return (
    <style.Div>
      <style.ChartBox>
        {selectedCategory &&
          selectedCategory.children.map(childCategory => (
            <style.BigChart
              key={childCategory.id}
              onClick={() =>
                toggleChartSelection(childCategory.id, childCategory.name)
              }
              style={{
                background:
                  selectedChart === childCategory.id
                    ? "#F6F6F6"
                    : "transparent",
              }}
            >
              <style.BigChartInner>{childCategory.name}</style.BigChartInner>
            </style.BigChart>
          ))}
      </style.ChartBox>
      <style.Button
        style={{
          background: isButtonDisabled ? "#d1d1d1" : "#02B878",
          color: isButtonDisabled ? "#707479" : "#FFF",
          cursor: isButtonDisabled ? "not-allowed" : "pointer",
        }}
        disabled={isButtonDisabled}
        onClick={handleSignup}
      >
        가입 완료
      </style.Button>
    </style.Div>
  );
}
