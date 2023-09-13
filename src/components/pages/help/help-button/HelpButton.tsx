import Link from "next/link";
import * as style from "@/components/pages/help/help-button/HelpButton.style";

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
