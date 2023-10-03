import styled from "styled-components";
import NewChatSvg from "../../../../../public/assets/image/NewChat.svg";
import { Font } from "@/assets/fonts/Font";

export const ChatBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  top: 5.6rem;
  width: 100%;
  gap: 0.3rem;
`;

export const ChatDiv = styled.div`
  display: flex;
  width: 100%;
  height: 6.4rem;
`;

export const ProFileDiv = styled.div`
  padding: 0.8rem 1.6rem;
  width: 7.6rem;
  height: 6.4rem;
`;

export const ContentsDiv = styled.div`
  border-bottom: 0.01rem solid #eee;
  padding: 1.2rem;

  width: 100%;
  height: 6.4rem;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ChatNameDiv = styled.span`
  color: #36332e;
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 2rem;
`;

export const ChatDetailDiv = styled.span`
  color: var(--b-60, #8f8f8f);
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 2rem;
`;

export const TimeDiv = styled.div`
  position: absolute;
  right: 1.6rem;
  top: 1.2rem;
  width: 4.9rem;
  display: inline-flex;
  flex-direction: column;
`;

export const TimeA = styled.span`
  position: absolute;
  text-align: right;
  color: var(--b-60, #8f8f8f);
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 1.6rem;
`;

export const NewChatDiv = styled(NewChatSvg)`
  position: absolute;
  color: var(--b-60, #8f8f8f);
  bottom: 0.8rem;
  right: 1.6rem;
`;

export const Div = styled.div``;
