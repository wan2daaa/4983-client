import React, { useState } from "react";
import { ko } from "date-fns/locale";
import { useRecoilState } from "recoil";
import DatePicker, { registerLocale } from "react-datepicker";
import {
  priceState,
  tradeAvailableDatetimeState,
} from "@/recoil/atoms/CreateUsedBookAtoms";
import * as style from "@/components/pages/selling/sell/sell-price-date-form/SellPriceDateForm.style";
import "react-datepicker/dist/react-datepicker.css";

export default function SellPriceDateForm() {
  const [formattedPrice, setFormattedPrice] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const selectedDateCount = selectedDates.length;
  const isDateDisabled = (date: Date) => selectedDateCount >= 32;

  registerLocale("ko", ko);

  const [price, setPrice] = useRecoilState(priceState);
  const [tradeAvailableDatetime, setTradeAvailableDatetime] = useRecoilState(
    tradeAvailableDatetimeState,
  );

  const updateTradeAvailableDatetime = (
    date: Date | null,
    time: Date | null,
  ) => {
    if (date && time) {
      const formattedDatetime = `${date.toISOString().substring(0, 10)}T${time
        .toISOString()
        .substring(11, 16)}`;
      setTradeAvailableDatetime(formattedDatetime);
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawPrice = e.target.value.replace(/[^0-9]/g, "");
    const numericPrice = parseInt(rawPrice, 10);

    if (!Number.isNaN(numericPrice) && numericPrice >= 100000) {
      setFormattedPrice("300,000원");
      setPrice(300000);
    } else if (!Number.isNaN(numericPrice)) {
      const formatted = numericPrice.toLocaleString();
      setFormattedPrice(`${formatted}원`);
      setPrice(numericPrice);
    } else {
      setFormattedPrice(""); // 빈 문자열로 설정
      setPrice(0);
    }
  };

  const handleHelpButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDateChange = (date: Date | null) => {
    if (date && date >= new Date()) {
      setSelectedDates([...selectedDates, date]);
      updateTradeAvailableDatetime(date, selectedTime);
    }
    setSelectedDate(date);
  };

  const handleTimeChange = (time: Date | null) => {
    setSelectedTime(time);
    updateTradeAvailableDatetime(selectedDate, time);
  };

  const DATE_FORMAT_CALENDAR = "yyyy년 MM월";

  return (
    <style.Box>
      <style.PriceDiv>
        <style.PriceA>판매 가격</style.PriceA>
        <style.Asterisk>*</style.Asterisk>
      </style.PriceDiv>
      <style.PriceInput
        type="text"
        placeholder="판매 가격을 입력해주세요"
        value={formattedPrice}
        onChange={handlePriceChange}
      />
      <style.DateDiv>
        <style.DateA>거래 날짜/ 시간 선택</style.DateA>
        <style.Asterisk2>*</style.Asterisk2>
        <style.SellHelpButtonDiv>
          <style.SellHelpButton onClick={handleHelpButtonClick} />
        </style.SellHelpButtonDiv>
      </style.DateDiv>
      {showModal && (
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
        </style.TooltipDiv>
      )}
      <style.DateTimeBox>
        <style.CalenderDiv>
          <DatePicker
            locale="ko"
            selected={selectedDate}
            minDate={new Date()}
            dateFormat="yyyy.MM.dd"
            placeholderText="yyyy.mm.dd"
            dateFormatCalendar={DATE_FORMAT_CALENDAR}
            useWeekdaysShort
            onChange={date => handleDateChange(date)}
          />
        </style.CalenderDiv>
        <style.TimeDiv>
          <DatePicker
            selected={selectedTime}
            onChange={time => handleTimeChange(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={10}
            timeCaption="Time"
            dateFormat="HH:mm"
            placeholderText="00:00"
          />
        </style.TimeDiv>
      </style.DateTimeBox>
    </style.Box>
  );
}
