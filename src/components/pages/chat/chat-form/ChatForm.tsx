import Link from "next/link";
import Image from "next/image";
import * as style from "@/components/pages/chat/chat-form/ChatForm.style";
import { ChatDiv } from "@/components/pages/chat/chat-form/ChatForm.style";

export default function ChatForm() {
  return (
    <Link href="/">
      <style.ChatBox>
        <style.ChatDiv>
          <style.ProFileDiv>
            <Image
              src="/assets/image/chatprofile.png"
              loader={() => "/assets/image/chatprofile.png"}
              width={43}
              height={43}
              alt="profile"
            />
          </style.ProFileDiv>
          <style.ContentsDiv>
            <style.ChatNameDiv>재무관리 1</style.ChatNameDiv>
            <style.ChatDetailDiv>
              안녕하소 님이 거래 요청을 보냈어요!
            </style.ChatDetailDiv>
            <style.NewChatDiv />
            <style.TimeDiv>
              <style.TimeA>오후6:57</style.TimeA>
            </style.TimeDiv>
          </style.ContentsDiv>
        </style.ChatDiv>
      </style.ChatBox>
    </Link>
  );
}
