import * as style from "@/components/pages/for-sale/for-sale-layout/ForSaleLayout.style";
import Link from "next/link";
import SelectedCollegeForm from "@/components/pages/for-sale/selected-college-form/Selected-College-Form";
import ForSaleProfileForm from "@/components/pages/for-sale/for-sale-profile-form/ForSaleProfileForm";
import ForSalePhotoForm from "@/components/pages/for-sale/for-sale-photo-form/ForSalePhotoForm";
import ForSaleBookNameForm from "@/components/pages/for-sale/for-sale-book-name-form/ForSaleBookNameForm";
import ForSaleDateForm from "@/components/pages/for-sale/for-sale-date-form/ForSaleDateForm";
import ForSaleStautsListForm from "@/components/pages/for-sale/for-sale-stauts-list-form/ForSaleStautsListForm";
import { InDivC } from "@/components/pages/for-sale/for-sale-layout/ForSaleLayout.style";
import ForSalePriceBuyForm from "@/components/pages/for-sale/for-sale-price-buy-form/ForSalePriceBuyForm";

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
          <ForSaleStautsListForm />
        </style.InDivB>
      </style.BackColorDiv>
      <style.InDivC>
        <ForSalePriceBuyForm />
      </style.InDivC>
    </style.Div>
  );
}
