import Image from "next/image";
import Link from "next/link";
import * as style from "@/components/pages/mypage/mypage-sales-history/mypage-sales-content/MypageSalesContent.style";
import useformatDate from "@/hooks/use-for-mat-date";
import useformatTimeAgo from "@/hooks/use-for-mat-time-ago";

interface BookProps {
  book: {
    imageUrl: string | null;
    bookStatus: string;
    name: string;
    tradeAvailableDatetime: string;
    createdAt: string;
    price: number;
    usedBookId: number;
  };
}

const MainContents = ({ book }: BookProps) => {
  const imageLoader = ({ src }: { src: string }) => src; // 이미지 URL 반환
  const formattedTradeDate = useformatDate(book.tradeAvailableDatetime);
  const formattedCreatedAt = useformatTimeAgo(book.createdAt);

  let statusElement = null;

  if (book.bookStatus === "SALE") {
    statusElement = <style.StatusSaleDiv>판매중</style.StatusSaleDiv>;
  } else if (book.bookStatus === "TRADE") {
    statusElement = <style.StatusTradingDiv>거래중</style.StatusTradingDiv>;
  } else if (book.bookStatus === "SOLD") {
    statusElement = <style.StatusSoldOutDiv>거래완료</style.StatusSoldOutDiv>;
  }

  return (
    <Link href={`/forsale/${book.usedBookId}`}>
      <style.ContentsBox>
        <style.PhotoBox>
          <style.ContentsPhotoDiv>
            {book.imageUrl ? (
              <Image
                src={book.imageUrl}
                loader={imageLoader}
                width={100}
                height={100}
                loading="lazy"
                alt="bookphoto"
              />
            ) : (
              "null"
            )}
          </style.ContentsPhotoDiv>
        </style.PhotoBox>
        <style.ContentsDiv>
          <style.ContentsDivA>
            {statusElement}
            <style.NameDiv>{book.name}</style.NameDiv>
          </style.ContentsDivA>
          <style.ContentsDivB>
            <style.AvailableDateDiv isSale={book.bookStatus === "SALE"}>
              {formattedTradeDate} 거래가능&nbsp;
            </style.AvailableDateDiv>
            <style.postedTimeDiv>
              &#183; {formattedCreatedAt}
            </style.postedTimeDiv>
          </style.ContentsDivB>
          <style.priceDiv>{book.price.toLocaleString()}원</style.priceDiv>
        </style.ContentsDiv>
      </style.ContentsBox>
    </Link>
  );
};
export default MainContents;
