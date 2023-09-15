import Link from "next/link";
import * as style from "@/components/pages/selling/edit/edit-layout/EditLayout.style";
import EditPhotoUpload from "@/components/pages/selling/edit/edit-photo-upload/EditPhotoUpload";
import EditPriceDateForm from "@/components/pages/selling/edit/edit-price-date-form/EditPriceDateForm";
import EditBookNamePublisherForm from "@/components/pages/selling/edit/edit-book-name-publisher-form/EditBookNamePublisherForm";
import EditBookStatusCheckList from "@/components/pages/selling/edit/edit-book-status-check-list/EditBookStatusCheckList";
import EditSelectForm from "@/components/pages/selling/edit/edit-select-form/EditSelectForm";
import EditRegistrationButton from "@/components/pages/selling/edit/edit-registration-button/EditRegistrationButton";

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
          <style.TitleA>수정하기</style.TitleA>
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
