import React, { useState } from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import * as style from "@/components/pages/edit/edit-price-date-form/EditPriceDateForm.style";
import "react-datepicker/dist/react-datepicker.css";

// 로직 수정 사항: 32개 초과시 선택 불가, 달력 클릭시 보이게.

interface ChangeEventHandler {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}

export default function EditPriceDateForm() {
  const [formattedPrice, setFormattedPrice] = useState("");

  const handlePriceChange: ChangeEventHandler = e => {
    const rawPrice = e.target.value.replace(/[^0-9]/g, "");
    const numericPrice = parseInt(rawPrice, 10);
    if (!Number.isNaN(numericPrice) && numericPrice >= 100000) {
      setFormattedPrice("100,000원");
    } else if (!Number.isNaN(numericPrice)) {
      const formatted = numericPrice.toLocaleString();
      setFormattedPrice(`${formatted}원`);
    } else {
      setFormattedPrice("");
    }
  };
  const [showModal, setShowModal] = useState(false);
  const handleHelpButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  // 선택된 날짜의 개수 계산
  const selectedDateCount = selectedDates.length;

  const isDateDisabled = (date: Date) => selectedDateCount >= 32;

  const handleDateChange = (date: Date | null) => {
    if (date && date >= new Date()) {
      setSelectedDates([...selectedDates, date]);
    }
    setSelectedDate(date);
  };
  return (
    <style.Div>
      <style.PriceDiv>
        <style.PriceA>판매 가격</style.PriceA>
        <style.Asterisk>*</style.Asterisk>
      </style.PriceDiv>
      <style.PriceInput
        type="text"
        color="#D1D1D1"
        placeholder="판매 가격을 입력해주세요"
        value={formattedPrice}
        onChange={handlePriceChange}
      />
      <style.DateDiv>
        <style.DateA>거래 날짜 선택</style.DateA>
        <style.Asterisk>*</style.Asterisk>
        <style.SellHelpButtonDiv>
          <style.SellHelpButton onClick={handleHelpButtonClick} />
        </style.SellHelpButtonDiv>
      </style.DateDiv>
      {showModal &&
        ReactDOM.createPortal(
          <style.TooltipDiv className="modal">
            <div className="modal-content">
              <style.TooltipClose className="close" onClick={handleCloseModal}>
                &times;
              </style.TooltipClose>
              <style.TooltipA>
                <p>
                  <style.BoldText>
                    &quot;거래날짜&quot;로부터 24시간 이내
                  </style.BoldText>
                  로
                </p>
                <p>
                  <style.BoldText>서적 배치 및 수거가 완료</style.BoldText>
                  되어야 하므로,
                </p>
                <p>
                  <style.LastText>
                    거래 가능한 날짜를 신중히 선택해주세요!
                  </style.LastText>
                </p>
              </style.TooltipA>
            </div>
          </style.TooltipDiv>,
          document.body,
        )}
      <style.CalenderDiv>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={new Date()}
          dateFormat="yyyy.MM.dd"
          placeholderText="yyyy.mm.dd"
        />
        <style.CalenderSVG />
      </style.CalenderDiv>
    </style.Div>
  );
}
