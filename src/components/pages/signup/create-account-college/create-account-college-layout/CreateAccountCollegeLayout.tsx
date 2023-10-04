import Link from "next/link";
import * as style from "@/components/pages/signup/create-account-college/create-account-college-layout/CreateAccountCollegeLayout.style";
import CreateAccountCollegeChart from "@/components/pages/signup/create-account-college/create-account-college-chart/CreateAccountCollegeChart";

export default function CreateAccountCollegeLayout() {
  return (
    <style.Div>
      <style.TitleDiv>
        <Link href="/signup/3">
          <style.TitleBackButton />
        </Link>
      </style.TitleDiv>
      <style.Title>
        현재 재학 중인
        <style.Br />
        <style.GreenP>학과</style.GreenP>를 선택해 주세요.
      </style.Title>
      <style.MiniTitle>
        입력해주신 학과를 토대로
        <style.Br />
        알맞는 서적 정보를 제공해드려요!{" "}
      </style.MiniTitle>
      <CreateAccountCollegeChart />
    </style.Div>
  );
}
