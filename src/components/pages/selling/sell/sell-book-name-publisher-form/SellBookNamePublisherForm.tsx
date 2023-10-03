import React from "react";
import { useRecoilState } from "recoil";
import * as style from "@/components/pages/selling/sell/sell-book-name-publisher-form/SellBookNamePublisherForm.style";
import { nameState, publisherState } from "@/recoil/atoms/CreateUsedBookAtoms";

interface ChangeEventHandler {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}

export default function SellBookNamePublisherForm() {
  const [name, setName] = useRecoilState(nameState); // Recoil 상태 사용
  const [publisher, setPublisher] = useRecoilState(publisherState); // Recoil 상태 사용

  const handleBookNameChange: ChangeEventHandler = e => {
    const inputValue = e.target.value.slice(0, 100); // 100글자 제한
    setName(inputValue);
  };

  const handlePublisherChange: ChangeEventHandler = e => {
    const inputValue = e.target.value.slice(0, 100); // 100글자 제한
    setPublisher(inputValue);
  };

  return (
    <style.Div>
      <style.BookNameDiv>
        <style.BookNameA>전공서적명</style.BookNameA>
        <style.Asterisk>*</style.Asterisk>
      </style.BookNameDiv>
      <style.BookNameInput
        type="text"
        placeholder="판매하고자 하는 책의 이름을 입력해주세요"
        value={name}
        onChange={handleBookNameChange}
      />
      <style.PublisherDiv>
        <style.PublisherA>출판사</style.PublisherA>
        <style.Asterisk>*</style.Asterisk>
      </style.PublisherDiv>
      <style.PublisherInput
        type="text"
        placeholder="책의 출판사를 입력해주세요"
        value={publisher}
        onChange={handlePublisherChange}
      />
    </style.Div>
  );
}
