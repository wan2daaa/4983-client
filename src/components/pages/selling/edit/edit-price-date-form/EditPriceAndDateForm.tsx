import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import DatePicker from "react-datepicker";
import {
  priceState,
  tradeAvailableDatetimeState,
} from "@/recoil/atoms/CreateUsedBookAtoms";
import * as style from "@/components/pages/selling/edit/edit-price-date-form/EditPriceDateForm.style";
import "react-datepicker/dist/react-datepicker.css";

interface BookEditProps {
  price: number;
  tradeAvailableDatetime: string;
}

const EditPriceAndDateForm = ({
  price,
  tradeAvailableDatetime,
}: BookEditProps) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(
    new Date(tradeAvailableDatetime),
  );
  const [selectedTime, setSelectedTime] = useState<Date>(
    new Date(tradeAvailableDatetime),
  );
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const [, setPrice] = useRecoilState(priceState);
  const [, setTradeAvailableDatetime] = useRecoilState(
    tradeAvailableDatetimeState,
  );

  useEffect(() => {
    setPrice(price);
    setTradeAvailableDatetime(tradeAvailableDatetime);
  }, []);

  const [formattedPrice, setFormattedPrice] = useState(
    // price > 0 ? `${price.toLocaleString()}원` : "",
    price > 0 ? `${price.toLocaleString()}` : "0",
  );

  const formatPrice = (numericPrice: number): string => {
    if (numericPrice >= 300000) {
      // return "300,000원";
      return "300,000";
    }
    if (numericPrice < 0) {
      return "0";
    }
    // return `${numericPrice.toLocaleString()}원`;
    return `${numericPrice.toLocaleString()}`;
  };

  useEffect(() => {
    if (tradeAvailableDatetime) {
      const tradeDatetime = new Date(tradeAvailableDatetime);

      setSelectedDate(tradeDatetime);
      setSelectedTime(tradeDatetime);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tradeAvailableDatetime]);

  const updateTradeAvailableDatetime = (
    date: Date | null,
    time: Date | null,
  ) => {
    if (date && time) {
      let formattedDatetime = date.toISOString().substring(0, 10);
      formattedDatetime += "T";
      formattedDatetime += `${selectedTime.getHours()}:${
        selectedTime.getMinutes() < 9
          ? `0${selectedTime.getMinutes()}`
          : selectedTime.getMinutes()
      }:00`;
      setTradeAvailableDatetime(formattedDatetime);
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setPrice(0);
      setFormattedPrice(formatPrice(0));
    } else {
      const rawPrice = e.target.value.replace(/[^0-9]/g, "");
      const numericPrice = parseInt(rawPrice, 10);
      console.log(numericPrice);

      if (numericPrice >= 300000) {
        setPrice(300000);
      } else {
        setPrice(numericPrice);
      }
      setFormattedPrice(formatPrice(numericPrice));
    }
  };

  const handleHelpButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDateChange = (date: Date) => {
    console.log(date);
    if (date && date >= new Date()) {
      // setSelectedDates([...selectedDates, date]);
      setSelectedDate(date);
      updateTradeAvailableDatetime(date, selectedTime);
    }
  };

  const handleTimeChange = (time: Date) => {
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
            selected={selectedDate}
            minDate={new Date()}
            dateFormat="yyyy.MM.dd"
            placeholderText="yyyy.mm.dd"
            dateFormatCalendar={DATE_FORMAT_CALENDAR}
            useWeekdaysShort
            onChange={handleDateChange}
          />
        </style.CalenderDiv>
        <style.TimeDiv>
          <DatePicker
            selected={selectedTime}
            onChange={handleTimeChange}
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
};

export default EditPriceAndDateForm;
