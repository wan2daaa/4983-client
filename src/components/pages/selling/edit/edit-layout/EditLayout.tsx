import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as style from "@/components/pages/selling/edit/edit-layout/EditLayout.style";
import EditPhotoUpload from "@/components/pages/selling/edit/edit-photo-upload/EditPhotoUpload";
import EditPriceDateForm from "@/components/pages/selling/edit/edit-price-date-form/EditPriceDateForm";
import EditBookNamePublisherForm from "@/components/pages/selling/edit/edit-book-name-publisher-form/EditBookNamePublisherForm";
import EditBookStatusCheckList from "@/components/pages/selling/edit/edit-book-status-check-list/EditBookStatusCheckList";
import EditSelectForm from "@/components/pages/selling/edit/edit-select-form/EditSelectForm";
import EditRegistrationButton from "@/components/pages/selling/edit/edit-registration-button/EditRegistrationButton";
import { UsedBookView } from "@/apis/main/bookview/BookView";

interface BookEdit {
  college: string;
  department: string;
  sellerUserNickname: string;
  sellerProfileImageUrl: string;
  createdAt: string;
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

const EditLayout = () => {
  const router = useRouter();
  const { usedBookId } = router.query;
  const [usedBookEdit, setUsedBookEdit] = useState<BookEdit | null>(null);
  const [bookImageList, setBookImageList] = useState<string[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UsedBookView({ usedBookId: Number(usedBookId) });
        console.log(data);
        console.log(data.bookImage);
        setUsedBookEdit(data);
        setBookImageList(data.bookImage);
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
          <style.TitleA>수정하기</style.TitleA>
        </style.TitleDiv>
      </style.TopDiv>
      {usedBookEdit && (
        <>
          <EditSelectForm
            collegeProp={usedBookEdit.college}
            departmentProp={usedBookEdit.department}
          />
          <EditPhotoUpload
            bookImageList={bookImageList}
            setBookImageList={setBookImageList}
          />
          <EditPriceDateForm
            price={usedBookEdit.price}
            tradeAvailableDatetime={usedBookEdit.tradeAvailableDatetime}
          />
          <EditBookNamePublisherForm
            bookName={usedBookEdit.bookName}
            publisher={usedBookEdit.publisher}
          />
          <EditBookStatusCheckList
            underlinedOrWrite={usedBookEdit.underlinedOrWrite}
            discolorationAndDamage={usedBookEdit.discolorationAndDamage}
            coverDamaged={usedBookEdit.coverDamaged}
          />
          <EditRegistrationButton />
        </>
      )}
    </style.Div>
  );
};
export default EditLayout;
