// FIXME 1. 수정하러가기 버튼 Link 에 usedBookId 넣어주기
// FIXME 2. 아니오/예 버튼 api 호출 넣어주기
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import * as style from "@/components/pages/chatbot/chatbot-message-form/ChatbotMessageForm.style";
import { ChatRoomButton } from "@/apis/chatbot/Chatbot";

interface ChatbotMessageFormProps {
  chat: {
    message: string;
    contentType: string;
    createdAt: string;
  };
}

const formatCreatedAt = (createdAt: string) => {
  const date = new Date(createdAt);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const period = hours < 12 ? "오전" : "오후";

  const formattedHours = hours % 12 || 12;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${period} ${formattedHours}:${formattedMinutes}`;
};

export default function ChatbotMessageForm({ chat }: ChatbotMessageFormProps) {
  const router = useRouter();
  const { chatRoomId } = router.query;
  const [isPurchaseButtonEnabled, setPurchaseButtonEnabled] = useState(true);
  const [isRejectionButtonEnabled, setRejectionButtonEnabled] = useState(true);
  const [isPlacementButtonEnabled, setPlacementButtonEnabled] = useState(true);
  const [isTradeCompleteButtonEnabled, setTradeCompleteButtonEnabled] =
    useState(true);

  const handlePurchaseRequesrClick = () => {
    if (
      chat.contentType === "BOOK_PURCHASE_START_SELLER" &&
      isPurchaseButtonEnabled
    ) {
      setPurchaseButtonEnabled(false);
      ChatRoomButton(Number(chatRoomId), "BOOK_PURCHASE_REQUEST", "");
    }
  };

  const handleSaleRejectionClick = () => {
    if (
      chat.contentType === "BOOK_PURCHASE_START_SELLER" &&
      isRejectionButtonEnabled
    ) {
      setRejectionButtonEnabled(false);
      ChatRoomButton(Number(chatRoomId), "BOOK_SALE_REJECTION", "");
    }
  };

  const handlePlacementCompleteClick = () => {
    if (
      chat.contentType === "BOOK_PLACEMENT_SET_SELLER" &&
      isPlacementButtonEnabled
    ) {
      setPlacementButtonEnabled(false);
      ChatRoomButton(Number(chatRoomId), "BOOK_PLACEMENT_COMPLETE", "");
    }
  };

  const handleTradeCompleteClick = () => {
    if (
      chat.contentType === "BOOK_PLACEMENT_COMPLETE_BUYER" &&
      isTradeCompleteButtonEnabled
    ) {
      setTradeCompleteButtonEnabled(false);
      ChatRoomButton(Number(chatRoomId), "TRADE_COMPLETE", "");
    }
  };

  return (
    <style.Box>
      <style.ChatbotProfileDiv>
        <Image
          src="/assets/image/Profile.png"
          loader={() => "/assets/image/Profile.png"}
          width={43}
          height={43}
          alt="profile"
        />
      </style.ChatbotProfileDiv>
      <style.ChatbotName>사고파삼</style.ChatbotName>
      <style.ChabotMessageDiv>
        {chat.contentType === "TRADE_COMPLETE_SELLER" && (
          <div style={{ textAlign: "center" }}>
            <Image
              src="/assets/image/ChatbotImage.svg"
              loader={() => "/assets/image/ChatbotImage.svg"}
              width={155}
              height={144}
              alt="profile"
            />
            <br />
          </div>
        )}

        {chat.contentType === "TRADE_COMPLETE_BUYER" && (
          <div>
            <Image
              src="/assets/image/ChatbotImage.svg"
              loader={() => "/assets/image/ChatbotImage.svg"}
              width={155}
              height={144}
              alt="profile"
            />
            <br />
          </div>
        )}
        {chat.message.split("\n").map(line => (
          <>
            {line}
            <br />
          </>
        ))}
        {chat.contentType === "BOOK_PURCHASE_START_SELLER" && (
          <style.RequestButtonContainer>
            <style.RefuseButton
              onClick={handleSaleRejectionClick}
              disabled={!isRejectionButtonEnabled}
            >
              거절하기
            </style.RefuseButton>
            <style.AcceptButton
              onClick={handlePurchaseRequesrClick}
              disabled={!isPurchaseButtonEnabled}
            >
              수락하기
            </style.AcceptButton>
          </style.RequestButtonContainer>
        )}
        {chat.contentType === "PAYMENT_CONFIRMATION_COMPLETE_SELLER" && (
          <style.RequestButtonContainer>
            <Link href={`/chatbotLocker/${chatRoomId}`}>
              <style.PayButton>거래하러 가기</style.PayButton>
            </Link>
          </style.RequestButtonContainer>
        )}
        {chat.contentType === "BOOK_PLACEMENT_SET_SELLER" && (
          <style.RequestButtonContainer>
            <style.PayButton
              onClick={handlePlacementCompleteClick}
              disabled={!isPlacementButtonEnabled}
            >
              서적 배치 완료
            </style.PayButton>
          </style.RequestButtonContainer>
        )}
        {chat.contentType === "BOOK_PLACEMENT_COMPLETE_BUYER" && (
          <style.RequestButtonContainer>
            <style.PayButton
              onClick={handleTradeCompleteClick}
              disabled={!isTradeCompleteButtonEnabled}
            >
              거래완료
            </style.PayButton>
          </style.RequestButtonContainer>
        )}
        {chat.contentType === "TRADE_STOP_REQUEST_BEFORE_DEPOSIT_SELLER" && (
          <Link href="/edit">
            <style.RequestButtonContainer>
              <style.PayButton>수정하러가기</style.PayButton>
            </style.RequestButtonContainer>
          </Link>
        )}
        {chat.contentType === "TRADE_STOP_REQUEST_AFTER_DEPOSIT_SELLER" && (
          <Link href="/edit">
            <style.RequestButtonContainer>
              <style.PayButton>수정하러가기</style.PayButton>
            </style.RequestButtonContainer>
          </Link>
        )}
        {chat.contentType === "TRADE_STOP_REQUEST_BEFORE_DEPOSIT_BUYER" && (
          <Link href="/">
            <style.RequestButtonContainer>
              <style.PayButton>서적 검색하러 가기</style.PayButton>
            </style.RequestButtonContainer>
          </Link>
        )}
        {chat.contentType === "TRADE_STOP_REQUEST_AFTER_DEPOSIT_BUYER" && (
          <Link href="/">
            <style.RequestButtonContainer>
              <style.PayButton>서적 검색하러 가기</style.PayButton>
            </style.RequestButtonContainer>
          </Link>
        )}
        {chat.contentType ===
          "TRADE_STOP_REQUEST_AFTER_BOOK_PLACEMENT_BUYER" && (
          <Link href="/">
            <style.RequestButtonContainer>
              <style.PayButton>서적 검색하러 가기</style.PayButton>
            </style.RequestButtonContainer>
          </Link>
        )}
        {chat.contentType === "BOOK_SALE_REJECTION_BUYER" && (
          <Link href="/">
            <style.RequestButtonContainer>
              <style.PayButton>서적 검색하러 가기</style.PayButton>
            </style.RequestButtonContainer>
          </Link>
        )}
        {chat.contentType === "BOOK_SALE_REJECTION_SELLER" && (
          <style.RequestButtonContainer>
            <style.RefuseButton>아니오</style.RefuseButton>
            <style.AcceptButton>네</style.AcceptButton>
          </style.RequestButtonContainer>
        )}
      </style.ChabotMessageDiv>

      <style.CreatedAtBox>{formatCreatedAt(chat.createdAt)}</style.CreatedAtBox>
    </style.Box>
  );
}
