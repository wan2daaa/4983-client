import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import * as style from "@/components/pages/selling/edit/edit-registration-button/EditRegistrationButton.style";
import {
  collegeState,
  departmentState,
  fileListState,
  isCoverDamagedState,
  isDiscolorationAndDamageState,
  isUnderlinedOrWriteState,
  nameState,
  priceState,
  publisherState,
  tradeAvailableDatetimeState,
} from "@/recoil/atoms/CreateUsedBookAtoms";
import { UpdateUsedBook } from "@/apis/sell/Registrationsell";

// 수정 api만 넣으면 끝,,,
const EditRegistrationButton = () => {
  const [fileList] = useRecoilState(fileListState);
  const [college] = useRecoilState(collegeState);
  const [department] = useRecoilState(departmentState);
  const [price] = useRecoilState(priceState);
  const [tradeAvailable] = useRecoilState(tradeAvailableDatetimeState);
  const [name] = useRecoilState(nameState);
  const [publisher] = useRecoilState(publisherState);
  const [isUnderlinedOrWrite] = useRecoilState(isUnderlinedOrWriteState);
  const [isDiscolorationAndDamage] = useRecoilState(
    isDiscolorationAndDamageState,
  );
  const [isCoverDamaged] = useRecoilState(isCoverDamagedState);
  const router = useRouter();
  const register = async () => {
    console.log(fileList);
    console.log(college);
    console.log(department);
    console.log(price);
    console.log(tradeAvailable);
    console.log(name);
    console.log(publisher);
    console.log(isUnderlinedOrWrite);
    console.log(isDiscolorationAndDamage);
    console.log(isCoverDamaged);

    const requestData = {
      usedBook: {
        college,
        isDiscolorationAndDamage,
        price,
        name,
        publisher,
        department,
        isUnderlinedOrWrite,
        isCoverDamaged,
        tradeAvailableDatetime: tradeAvailable,
      },
      fileList,
      id: router.query.usedBookId,
    };
    console.log("router.query", router.query.usedBookId);

    UpdateUsedBook(requestData);
  };

  return (
    <style.Div>
      <style.RegistrationButton onClick={register}>
        등록하기
      </style.RegistrationButton>
    </style.Div>
  );
};
export default EditRegistrationButton;
