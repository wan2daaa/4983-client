import { useState } from "react";
import Image from "next/image";
import * as style from "@/components/pages/mypage/mypage-contactus/mypaeg-contactus-button/MypageContactusButton.style";
import { faqData } from "@/data/faqData";

export default function Faq() {
  const [showMoreContent, setShowMoreContent] = useState(
    Array(faqData.length).fill(false),
  );

  const toggleMoreContent = (index: number) => {
    const newShowMoreContent = [...showMoreContent];
    newShowMoreContent[index] = !newShowMoreContent[index];
    setShowMoreContent(newShowMoreContent);
  };

  return (
    <style.FaqContainer>
      <style.FaqTitle>자주 묻는 질문</style.FaqTitle>
      {faqData.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <style.Div key={index}>
          <style.FaqContent>
            {item.question}
            <style.MoreButton onClick={() => toggleMoreContent(index)}>
              <style.MoreButtonBox>
                <Image
                  src={
                    showMoreContent[index]
                      ? "/assets/image/mypage/MoreCloseButton.svg"
                      : "/assets/image/mypage/MoreButton.svg"
                  }
                  alt="MoreButton"
                  width={23}
                  height={23}
                />
              </style.MoreButtonBox>
            </style.MoreButton>
            {showMoreContent[index] && (
              <style.MoreContent>{item.answer}</style.MoreContent>
            )}
          </style.FaqContent>
        </style.Div>
      ))}
    </style.FaqContainer>
  );
}
