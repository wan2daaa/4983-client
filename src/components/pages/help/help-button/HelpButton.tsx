import * as style from "@/components/pages/help/help-button/HelpButton.style";
import Link from "next/link";

export default function HelpButton() {
  return (
    <style.HelpButtonContainer>
      <Link href="/">
        <style.HelpButton>
          <style.HelpButtonContent>시작하러 가기</style.HelpButtonContent>
        </style.HelpButton>
      </Link>
    </style.HelpButtonContainer>
  );
}
