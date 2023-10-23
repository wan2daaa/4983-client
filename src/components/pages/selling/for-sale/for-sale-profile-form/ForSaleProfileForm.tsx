import Image from "next/image";
import * as style from "@/components/pages/selling/for-sale/for-sale-profile-form/ForSaleProfileForm.style";

interface BookViewProps {
  sellerUserNickname: string;
  sellerProfileImageUrl: string;
  createdAt: string;
}

function formatTimeDifference(timeDifference: number): string {
  if (timeDifference < 60) {
    return "방금";
  }
  if (timeDifference < 3600) {
    const minutes = Math.floor(timeDifference / 60);
    return `${minutes}분 전`;
  }
  if (timeDifference < 86400) {
    const hours = Math.floor(timeDifference / 3600);
    return `${hours}시간 전`;
  }
  if (timeDifference < 604800) {
    const days = Math.floor(timeDifference / 86400);
    return `${days}일 전`;
  }
  if (timeDifference < 2419200) {
    const weeks = Math.floor(timeDifference / 604800);
    return `${weeks}주 전`;
  }
  if (timeDifference < 29030400) {
    const months = Math.floor(timeDifference / 2419200);
    return `${months}달 전`;
  }
  const years = Math.floor(timeDifference / 29030400);
  return `${years}년 전`;
}

export default function ForSaleProfileForm({
  sellerUserNickname,
  sellerProfileImageUrl,
  createdAt,
}: BookViewProps) {
  const createdDate = new Date(createdAt);
  const currentDate = new Date();
  const timeDifference = (currentDate.getTime() - createdDate.getTime()) / 1000;
  const dateString = formatTimeDifference(timeDifference);

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
