import * as style from "@/components/pages/find-password/findpassword-Hakbun/FindPasswordHakbun.style";
import Link from "next/link";
import Image from "next/image";

export default function FindPasswordHakbun() {
  return (
    <style.FindPasswordHakbunArea>
      <style.HakbunWord>학번</style.HakbunWord>
      <style.InputHakbunArea>
        <style.InputHakbun type="text" placeholder=" 학번을 입력해주세요" />
      </style.InputHakbunArea>
    </style.FindPasswordHakbunArea>
  );
}
