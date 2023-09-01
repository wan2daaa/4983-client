import * as style from "@/components/pages/main/main-contents/MainContents.style";
import Image from "next/image";

export default function MainContents() {
  return (
    <style.ContentsBox>
      <style.PhotoBox>
        <style.ContentsPhotoDiv>
          <Image
            src="/assets/image/ex1.png"
            loader={() => "/assets/image/ex1.png"}
            width={100}
            height={100}
            alt="bookphoto"
          />
        </style.ContentsPhotoDiv>
      </style.PhotoBox>

      <style.ContentsDiv>
        <style.ContentsDivA>
          <style.StatusSoldOutDiv>
            판매중
            {/* {book.isStatus === "selling" && "판매중"} */}
            {/* {book.isStatus === "trading" && "거래중"} */}
            {/* {book.isStatus === "soldOut" && "거래완료"} */}
          </style.StatusSoldOutDiv>
          <style.NameDiv>사회과학통계방법</style.NameDiv>
        </style.ContentsDivA>
        <style.ContentsDivB>
          <style.availableDateDiv>
            7월 29일 거래가능 &#183;
          </style.availableDateDiv>
          <style.postedTimeDiv>&nbsp;5초전</style.postedTimeDiv>
        </style.ContentsDivB>
        <style.priceDiv>12,000원</style.priceDiv>
      </style.ContentsDiv>
    </style.ContentsBox>
  );
}
