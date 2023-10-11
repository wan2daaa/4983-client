import Image from "next/image";
import * as style from "@/components/pages/selling/for-sale/for-sale-profile-form/ForSaleProfileForm.style";

interface BookViewProps {
  sellerUserNickname: string;
  sellerProfileImageUrl: string;
  createdAt: string;
}

export default function ForSaleProfileForm({
  sellerUserNickname,
  sellerProfileImageUrl,
  createdAt,
}: BookViewProps) {
  const createdDate = new Date(createdAt);

  const createdDateWithoutTime = new Date(
    createdDate.getFullYear(),
    createdDate.getMonth(),
    createdDate.getDate(),
  );

  const currentDate = new Date();
  const currentDateWithoutTime = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
  );

  // 날짜 차이 계산
  const timeDifference =
    currentDateWithoutTime.getTime() - createdDateWithoutTime.getTime();

  // 날짜 차이 -> 일 단위로 변환
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let dateString = "";

  if (daysDifference === 0) {
    dateString = "오늘";
  } else if (daysDifference === 1) {
    dateString = "어제";
  } else {
    dateString = `${daysDifference}일 전`;
  }

  return (
    <style.Div>
      <style.ProfileDiv>
        <Image
          src={sellerProfileImageUrl}
          loader={() => sellerProfileImageUrl}
          width={44}
          height={44}
          alt="profile"
        />
      </style.ProfileDiv>
      <style.UserNameA>{sellerUserNickname}</style.UserNameA>
      <style.PostedtimeA>{dateString}</style.PostedtimeA>
    </style.Div>
  );
}
