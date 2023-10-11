import * as style from "@/components/pages/selling/for-sale/for-sale-date-form/ForSaleDateForm.style";
import { CalenderDiv } from "@/components/pages/selling/for-sale/for-sale-date-form/ForSaleDateForm.style";

interface BookViewProps {
  tradeAvailableDatetime: string;
}

export default function ForSaleDateForm({
  tradeAvailableDatetime,
}: BookViewProps) {
  function formatDate(inputDate: string): string {
    const date = new Date(inputDate);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedDate = `${year}년 ${month}월 ${day}일`;
    let formattedTime = `${hours}시`;

    if (minutes !== 0) {
      formattedTime += ` ${minutes}분`;
    }

    return `${formattedDate} ${formattedTime}`;
  }

  const formattedDate = formatDate(tradeAvailableDatetime);

  return (
    <style.Div>
      <style.DateDiv>
        <style.Calender />
        <style.DateA>거래 가능 날짜/시간</style.DateA>
      </style.DateDiv>
      <style.CalenderContainer>
        <style.CalenderDiv>
          <style.CalenderDateA>
            {formattedDate}에 책을 둘게요!
          </style.CalenderDateA>
        </style.CalenderDiv>
      </style.CalenderContainer>
      <style.CalenderDateB>
        사물함 설정 이후{" "}
        <style.CalenderDateBold>&quot;24시간 이내&quot;</style.CalenderDateBold>
        에 책을 수령해야해요!
      </style.CalenderDateB>
    </style.Div>
  );
}
