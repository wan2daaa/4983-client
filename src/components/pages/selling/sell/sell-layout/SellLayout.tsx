import Link from "next/link";
import * as style from "@/components/pages/selling/sell/sell-layout/SellLayout.style";
import SellPhotoUpload from "@/components/pages/selling/sell/sell-photo-upload/SellPhotoUpload";
import SellPriceDateForm from "@/components/pages/selling/sell/sell-price-date-form/SellPriceDateForm";
import SellBookNamePublisherForm from "@/components/pages/selling/sell/sell-book-name-publisher-form/SellBookNamePublisherForm";
// import SellBookStatusCheckList from "@/components/pages/selling/sell/sell-book-status-check-list/SellBookStatusCheckList";
import SellSelectForm from "@/components/pages/selling/sell/sell-select-form/SellSelectForm";
import SellRegistrationButton from "@/components/pages/selling/sell/sell-registration-button/SellRegistrationButton";

export default function SellLayout() {
  return (
    <style.Div>
      <style.TopDiv>
        <style.TitleDiv>
          <Link href="/">
            <style.BackBox>
              <style.BackButtonDiv />
            </style.BackBox>
          </Link>
          <style.TitleA>전공서적 판매 글쓰기</style.TitleA>
        </style.TitleDiv>
      </style.TopDiv>
      <SellSelectForm />
      <SellPhotoUpload />
      <SellPriceDateForm />
      <SellBookNamePublisherForm />
      {/* <SellBookStatusCheckList /> */}
      <SellRegistrationButton />
    </style.Div>
  );
}
