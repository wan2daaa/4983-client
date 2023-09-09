import * as style from "@/components/pages/for-sale/for-sale-date-form/ForSaleDateForm.style";
import Link from "next/link";
import ReactDOM from "react-dom";
import React, { useState } from "react";

export default function ForSaleDateForm() {
  const [showModal, setShowModal] = useState(false);
  const handleHelpButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <style.Div>
      <style.DateDiv>
        <style.DateA>희망 거래 날짜</style.DateA>
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
        <style.CalenderDateA>yyyy.mm.dd</style.CalenderDateA>
        <style.CalenderSVG />
      </style.CalenderDiv>
    </style.Div>
  );
}
