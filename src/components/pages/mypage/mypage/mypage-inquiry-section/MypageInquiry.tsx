import Link from "next/link";
import React from "react";
import * as style from "@/components/pages/mypage/mypage/mypage-inquiry-section/MypageInquiry.style";

export default function MypageInquiry() {
  return (
    <style.Div>
      <style.Title>문의</style.Title>
      <style.InquiryArea>
        <Link href="/help">
          <style.HelpButtonDiv>
            <style.HelpButton
              src="/assets/image/mypage/Sell.png"
              loader={() => "/assets/image/mypage/Help.png"}
              width={3}
              height={3}
              alt="Finish-Page"
            />
            <style.HelpTag>도움말</style.HelpTag>
          </style.HelpButtonDiv>
        </Link>
        <Link href="/">
          <style.ContactUsButtonDiv>
            <style.ConatactUsButton
              src="/assets/image/mypage/Buy.png"
              loader={() => "/assets/image/mypage/Inquiry.png"}
              width={3}
              height={3}
              alt="Finish-Page"
            />
            <style.ConatactUsTag>문의하기</style.ConatactUsTag>
          </style.ContactUsButtonDiv>
        </Link>
        <Link href="/">
          <style.TermsButtonDiv>
            <style.TermsButton
              src="/assets/image/mypage/Buy.png"
              loader={() => "/assets/image/mypage/TermsOfUse.png"}
              width={3}
              height={3}
              alt="Finish-Page"
            />
            <style.TermsTag>이용 약관</style.TermsTag>
          </style.TermsButtonDiv>
        </Link>
      </style.InquiryArea>
    </style.Div>
  );
}
