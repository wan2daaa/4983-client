import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { Categories } from "@/data/college";
import {
  studentId,
  department,
  nickname,
  password,
  phoneNumber,
  marketingAgree,
  accountNumber,
  accountHolder,
  accountBank,
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

  const handleSignup = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const inputStudentId = studentIds;
    const inputDepartment = departments;
    const inputNickname = nicknames;
    const inputPassword = passwords;
    const inputPhoneNumber = phoneNumbers;
    const inputMarketingAgree = marketingAgrees;
    const inputAccountNumber = accountNumbers;
    const inputAccountHolders = accountHolders;
    const inputAccountBanks = accountBanks;

    signup(
      inputStudentId,
      inputDepartment,
      inputNickname,
      inputPassword,
      inputPhoneNumber,
      inputMarketingAgree,
      inputAccountNumber,
      inputAccountHolders,
      inputAccountBanks,
    );
  };

  return (
    <form onSubmit={handleSignup}>
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
        <Link href="/signup/6">
          <style.Button
            style={{
              background: isButtonDisabled ? "#d1d1d1" : "#02B878",
              color: isButtonDisabled ? "#707479" : "#FFF",
              cursor: isButtonDisabled ? "not-allowed" : "pointer",
            }}
            disabled={isButtonDisabled}
          >
            가입 완료
          </style.Button>
        </Link>
      </style.Div>
    </form>
  );
}
