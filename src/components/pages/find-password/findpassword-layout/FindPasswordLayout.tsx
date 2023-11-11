import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import * as style from "@/components/pages/find-password/findpassword-layout/FindPasswordLayout.style";
import FindPasswordHakbun from "@/components/pages/find-password/findpassword-Hakbun/FindPasswordHakbun";
import FindPasswordPhone from "@/components/pages/find-password/findpassword-Phone/FindPasswordPhone";

const FindPasswordLayout = () => {
  const [phoneNumberValue, setPhoneNumberValue] = useState("");
  const [certificationCode, setCertificationCode] = useState("");
  const [studentId, setStudentId] = useState("");
  const [isStudentIdValid, setIsStudentIdValid] = useState(false);
  const [isApiCalled, setIsApiCalled] = useState(false);

  return (
    <style.Div>
      <style.TitleDiv>
        <Link href="/signin">
          <style.TitleBackButton />
        </Link>
      </style.TitleDiv>
      <style.Image>
        <Image
          src="/assets/image/LoginRabbit.png"
          loader={() => "/assets/image/LoginRabbit.png"}
          width={124}
          height={183}
          alt="Rabbit"
        />
      </style.Image>
      <style.ExplainBox>아래 정보를 입력해 주세요.</style.ExplainBox>
      <FindPasswordHakbun
        studentId={studentId}
        setStudentId={setStudentId}
        isStudentIdValid={isStudentIdValid}
        isApiCalled={isApiCalled}
      />
      <FindPasswordPhone
        phoneNumberValue={phoneNumberValue}
        setPhoneNumberValue={setPhoneNumberValue}
        certificationCode={certificationCode}
        setCertificationCode={setCertificationCode}
        studentId={studentId}
        isStudentIdValid={isStudentIdValid}
        setIsStudentIdValid={setIsStudentIdValid}
        setIsApiCalled={setIsApiCalled}
      />
    </style.Div>
  );
};
export default FindPasswordLayout;
