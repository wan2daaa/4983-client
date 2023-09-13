import Link from "next/link";
import * as style from "@/components/pages/edit/edit-layout/EditLayout.style";
import EditPhotoUpload from "@/components/pages/sell/sell-photo-upload/SellPhotoUpload";
import EditPriceDateForm from "@/components/pages/sell/sell-price-date-form/SellPriceDateForm";
import EditBookNamePublisherForm from "@/components/pages/sell/sell-book-name-publisher-form/SellBookNamePublisherForm";
import EditBookStatusCheckList from "@/components/pages/sell/sell-book-status-check-list/SellBookStatusCheckList";
import EditSelectForm from "@/components/pages/sell/sell-select-form/SellSelectForm";
import EditRegistrationButton from "@/components/pages/sell/sell-registration-button/SellRegistrationButton";

export default function EditLayout() {
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
      <EditSelectForm />
      <EditPhotoUpload />
      <EditPriceDateForm />
      <EditBookNamePublisherForm />
      <EditBookStatusCheckList />
      <EditRegistrationButton />
    </style.Div>
  );
}
