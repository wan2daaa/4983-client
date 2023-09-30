// TODO. chatList 에서 salesPost 넘겨주는 작업 완료되면 수정 필요
import { useRecoilState } from "recoil";
import * as style from "@/components/pages/selling/for-sale/for-sale-price-buy-form/ForSalePriceBuyForm.style";
import { ChatRoomCreate } from "@/apis/chatbot/Chatbot";
import { chatRoomIdState } from "@/recoil/atoms/ChatAtoms";

interface ForSalePriceBuyFormProps {
  salesPost: number;
  bookName: string;
}
export default function ForSalePriceBuyForm(props: ForSalePriceBuyFormProps) {
  const { salesPost, bookName } = props;
  const [_, setChatRoomId] = useRecoilState<number>(chatRoomIdState);

  const handleBuyButtonClick = async () => {
    try {
      await ChatRoomCreate(
        Number(1),
        `${bookName}`,
        roomId => setChatRoomId(roomId),
        error => console.error("채팅방 생성 실패", error),
      );
    } catch (error) {
      console.error("채팅방 생성 실패", error);
    }
  };

  return (
    <style.Div>
      <style.PriceA>14,000원</style.PriceA>

      <style.BuyButton onClick={handleBuyButtonClick}>구매하기</style.BuyButton>
    </style.Div>
  );
}
