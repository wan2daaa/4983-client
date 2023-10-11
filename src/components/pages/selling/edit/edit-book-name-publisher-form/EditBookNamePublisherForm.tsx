import React, { useState } from "react";
import * as style from "@/components/pages/selling/edit/edit-book-name-publisher-form/EditBookNamePublisherForm.style";

interface ChangeEventHandler {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}

interface BookEditProps {
  bookName: string;
  publisher: string;
}

export default function EditBookNamePublisherForm({
  bookName,
  publisher,
}: BookEditProps) {
  const [editBookName, setBookName] = useState(bookName || ""); // 초기 값으로 bookName 사용
  const [editPublisher, setPublisher] = useState(publisher || ""); // 초기 값으로 publisher 사용

  const handleBookNameChange: ChangeEventHandler = e => {
    const inputValue = e.target.value.slice(0, 100); // 100글자 제한
    setBookName(inputValue);
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
        color="#D1D1D1"
        placeholder="판매하고자 하는 책의 이름을 입력해주세요"
        value={editBookName}
        onChange={handleBookNameChange}
      />
      <style.PublisherDiv>
        <style.PublisherA>출판사</style.PublisherA>
        <style.Asterisk>*</style.Asterisk>
      </style.PublisherDiv>
      <style.PublisherInput
        type="text"
        color="#D1D1D1"
        placeholder="책의 출판사를 입력해주세요"
        value={editPublisher}
        onChange={handlePublisherChange}
      />
    </style.Div>
  );
}
