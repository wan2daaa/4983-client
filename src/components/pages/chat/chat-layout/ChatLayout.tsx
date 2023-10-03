import Link from "next/link";
import * as style from "@/components/pages/chat/chat-layout/ChatLayout.style";
import ChatForm from "@/components/pages/chat/chat-form/ChatForm";

export default function ChatLayout() {
  return (
    <style.Div>
      <style.TopDiv>
        <style.TitleDiv>
          <Link href="/">
            <style.BackBox>
              <style.BackButtonDiv />
            </style.BackBox>
          </Link>
          <style.TitleA>중고 서적 거래 채팅</style.TitleA>
        </style.TitleDiv>
        <style.BottomLineDiv />
      </style.TopDiv>
      <ChatForm />
    </style.Div>
  );
}
