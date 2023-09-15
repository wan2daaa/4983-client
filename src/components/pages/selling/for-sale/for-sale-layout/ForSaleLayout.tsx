import Link from "next/link";
import * as style from "@/components/pages/selling/for-sale/for-sale-layout/ForSaleLayout.style";
import SelectedCollegeForm from "@/components/pages/selling/for-sale/selected-college-form/Selected-College-Form";
import ForSaleProfileForm from "@/components/pages/selling/for-sale/for-sale-profile-form/ForSaleProfileForm";
import ForSalePhotoForm from "@/components/pages/selling/for-sale/for-sale-photo-form/ForSalePhotoForm";
import ForSaleBookNameForm from "@/components/pages/selling/for-sale/for-sale-book-name-form/ForSaleBookNameForm";
import ForSaleDateForm from "@/components/pages/selling/for-sale/for-sale-date-form/ForSaleDateForm";
import ForSaleStatusListForm from "@/components/pages/selling/for-sale/for-sale-status-list-form/ForSaleStatusListForm";
import ForSalePriceBuyForm from "@/components/pages/selling/for-sale/for-sale-price-buy-form/ForSalePriceBuyForm";

export default function ForSaleLayout() {
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
      <style.BackColorDiv>
        <style.InDivA>
          <SelectedCollegeForm />
          <ForSaleProfileForm />
          <ForSalePhotoForm />
          <ForSaleBookNameForm />
        </style.InDivA>
        <style.InDivB>
          <ForSaleDateForm />
          <ForSaleStatusListForm />
        </style.InDivB>
      </style.BackColorDiv>
      <ForSalePriceBuyForm />
    </style.Div>
  );
}
