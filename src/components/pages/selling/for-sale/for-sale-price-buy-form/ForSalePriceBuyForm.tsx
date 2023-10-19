import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import React, { useState } from "react";
import Link from "next/link";
import * as style from "@/components/pages/selling/for-sale/for-sale-price-buy-form/ForSalePriceBuyForm.style";
import { ChatRoomCreate } from "@/apis/chatbot/Chatbot";
import { chatRoomIdState } from "@/recoil/atoms/ChatAtoms";

interface ForSalePriceBuyFormProps {
  price: number;
}
const ForSalePriceBuyForm = ({ price }: ForSalePriceBuyFormProps) => {
  const router = useRouter();
  const { usedBookId } = router.query;
  const [_, setChatRoomId] = useRecoilState<number>(chatRoomIdState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyButtonClick = async () => {
    try {
      await ChatRoomCreate(
        Number(`${usedBookId}`),
        roomId => setChatRoomId(roomId),
        error => {
          console.error("채팅방 생성 실패", error);
          setIsModalOpen(true);
        },
      );
    } catch (error) {
      console.error("채팅방 생성 실패", error);
      setIsModalOpen(true);
    }
  };

  return (
    <style.Div>
      <style.ModalOverlay isOpen={isModalOpen} />
      <style.PriceA>{price}원</style.PriceA>

      <style.BuyButton onClick={handleBuyButtonClick}>구매하기</style.BuyButton>
      {isModalOpen && (
        <style.Modal>
          <style.ModalContent>
            본인이 판매하는 전공서적은 <br />
            구매할 수 없어요!
          </style.ModalContent>
          <style.ButtonContainer>
            <Link href="/">
              <style.ModalButton>다른 전공서적 둘러보기</style.ModalButton>
            </Link>
          </style.ButtonContainer>
        </style.Modal>
      )}
    </style.Div>
  );
};
export default ForSalePriceBuyForm;
