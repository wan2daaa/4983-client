import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as style from "@/components/pages/selling/for-sale/for-sale-layout/ForSaleLayout.style";
import SelectedCollegeForm from "@/components/pages/selling/for-sale/selected-college-form/Selected-College-Form";
import ForSaleProfileForm from "@/components/pages/selling/for-sale/for-sale-profile-form/ForSaleProfileForm";
import ForSalePhotoForm from "@/components/pages/selling/for-sale/for-sale-photo-form/ForSalePhotoForm";
import ForSaleBookNameForm from "@/components/pages/selling/for-sale/for-sale-book-name-form/ForSaleBookNameForm";
import ForSaleDateForm from "@/components/pages/selling/for-sale/for-sale-date-form/ForSaleDateForm";
import ForSaleStatusListForm from "@/components/pages/selling/for-sale/for-sale-status-list-form/ForSaleStatusListForm";
import ForSalePriceBuyForm from "@/components/pages/selling/for-sale/for-sale-price-buy-form/ForSalePriceBuyForm";
import { UsedBookView } from "@/apis/main/bookview/BookView";

interface BookView {
  college: string;
  department: string;
  sellerUserNickname: string;
  sellerProfileImageUrl: string;
  createdAt: string;
  bookImage: string[];
  bookName: string;
  publisher: string;
  tradeAvailableDatetime: string;
  price: number;
  bookStatus: string;
  underlinedOrWrite: boolean;
  discolorationAndDamage: boolean;
  coverDamaged: boolean;
  usedBookId: number;
}

const ForSaleLayout = () => {
  const router = useRouter();
  const { usedBookId } = router.query;
  const [usedBookView, setUsedBookView] = useState<BookView | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UsedBookView({ usedBookId: Number(usedBookId) });
        console.log(data);
        setUsedBookView(data);
      } catch (error) {
        console.error("Error", error);
      }
    };

    if (usedBookId) {
      fetchData();
    }
  }, [usedBookId]);

  return (
    <style.Div>
      <style.TopDiv>
        <style.TitleDiv>
          <Link href="/">
            <style.BackBox>
              <style.BackButtonDiv />
            </style.BackBox>
          </Link>
        </style.TitleDiv>
      </style.TopDiv>
      {usedBookView && (
        <style.BackColorDiv>
          <style.InDivA>
            <SelectedCollegeForm
              college={usedBookView.college}
              department={usedBookView.department}
            />
            <ForSaleProfileForm
              sellerUserNickname={usedBookView.sellerUserNickname}
              sellerProfileImageUrl={
                usedBookView.sellerProfileImageUrl === null
                  ? ""
                  : usedBookView.sellerProfileImageUrl
              }
              createdAt={usedBookView.createdAt}
            />
            <ForSalePhotoForm bookImage={usedBookView.bookImage} />
            <ForSaleBookNameForm
              bookName={usedBookView.bookName}
              publisher={
                usedBookView.publisher === null ? "" : usedBookView.publisher
              }
            />
          </style.InDivA>
          <style.InDivB>
            <ForSaleDateForm
              tradeAvailableDatetime={usedBookView.tradeAvailableDatetime}
            />
            <ForSaleStatusListForm
              underlinedOrWrite={usedBookView.underlinedOrWrite}
              discolorationAndDamage={usedBookView.discolorationAndDamage}
              coverDamaged={usedBookView.coverDamaged}
            />
            <ForSalePriceBuyForm
              usedBookId={usedBookView.usedBookId}
              bookName={usedBookView.bookName}
              price={usedBookView.price}
            />
          </style.InDivB>
        </style.BackColorDiv>
      )}
    </style.Div>
  );
};
export default ForSaleLayout;
