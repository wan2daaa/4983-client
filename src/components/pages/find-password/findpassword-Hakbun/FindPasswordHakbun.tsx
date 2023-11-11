import { Dispatch, SetStateAction } from "react";
import * as style from "@/components/pages/find-password/findpassword-Hakbun/FindPasswordHakbun.style";

interface FindPasswordHakbunProps {
  studentId: string;
  setStudentId: Dispatch<SetStateAction<string>>;
  isStudentIdValid: boolean;
  isApiCalled: boolean;
}

const FindPasswordHakbun = ({
  studentId,
  setStudentId,
  isStudentIdValid,
  isApiCalled,
}: FindPasswordHakbunProps) => (
  <style.FindPasswordHakbunArea>
    <style.HakbunWord>학번</style.HakbunWord>
    <style.InputHakbunArea>
      <style.InputHakbun
        type="number"
        placeholder="학번을 입력해 주세요."
        value={studentId}
        onChange={e => {
          setStudentId(e.target.value);
        }}
      />
      {!isStudentIdValid && isApiCalled && (
        <style.WrongStudentIdSpan>
          존재하지 않는 학번입니다.
        </style.WrongStudentIdSpan>
      )}
    </style.InputHakbunArea>
  </style.FindPasswordHakbunArea>
);
export default FindPasswordHakbun;
