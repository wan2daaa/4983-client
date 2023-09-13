import Link from "next/link";
import Image from "next/image";
import * as style from "@/components/pages/find-password/findpassword-layout/FindPasswordLayout.style";
import FindPasswordHakbun from "@/components/pages/find-password/findpassword-Hakbun/FindPasswordHakbun";
import FindPasswordPhone from "@/components/pages/find-password/findpassword-Phone/FindPasswordPhone";

export default function FindPasswordLayout() {
  return (
    <style.Div>
      <style.TitleDiv>
        <Link href="/">
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
      <style.ExplainBox>아래 정보를 입력해주세요.</style.ExplainBox>
      <FindPasswordHakbun />
      <FindPasswordPhone />
    </style.Div>
  );
}
