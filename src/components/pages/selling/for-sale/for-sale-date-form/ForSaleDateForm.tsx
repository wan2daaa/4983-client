import * as style from "@/components/pages/selling/for-sale/for-sale-date-form/ForSaleDateForm.style";

export default function ForSaleDateForm() {
  return (
    <style.Div>
      <style.DateDiv>
        <style.Calender />
        <style.DateA>거래 가능 날짜/시간</style.DateA>
      </style.DateDiv>
      <style.CalenderDiv>
        <style.CalenderDateA>
          2023년 10월 9일에 거래 가능해요!
        </style.CalenderDateA>
      </style.CalenderDiv>
      <style.CalenderDateB>
        사물함 설정 이후{" "}
        <style.CalenderDateBold>&quot;24시간 이내&quot;</style.CalenderDateBold>
        에 책을 수령해야해요!
      </style.CalenderDateB>
    </style.Div>
  );
}
