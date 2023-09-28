import styled, { css } from "styled-components";
import NonClickHomeSvg from "../../../../public/assets/image/main/NonClick-Home.svg";
import NonClickChatSvg from "../../../../public/assets/image/main/NonClick-Chat.svg";
import NonClickHelpSvg from "../../../../public/assets/image/main/NonClick-Help.svg";
import NonClickSearchSvg from "../../../../public/assets/image/main/NonClick-Search.svg";
import NonClickMyPageSvg from "../../../../public/assets/image/main/NonClick-Mypage.svg";
import ClickHomeSvg from "../../../../public/assets/image/Home.svg";
import ClickChatSvg from "../../../../public/assets/image/main/Click-Chat.svg";
import ClickHelpSvg from "../../../../public/assets/image/main/Click-Help.svg";
import ClickSearchSvg from "../../../../public/assets/image/main/Click-Search.svg";
import ClickMyPageSvg from "../../../../public/assets/image/main/Click-Mypage.svg";

export const NonClickHome = styled(NonClickHomeSvg)``;
export const ClickHome = styled(ClickHomeSvg)``;

export const Home = styled(ClickHomeSvg)`
  position: absolute;
  left: 1.8rem;
  top: 0.6rem;
  width: 4.5rem;
  height: 4.3rem;
  ${props => (props.active ? ClickHome : NonClickHome)}
`;

export const NonClickChat = styled(NonClickChatSvg)`
  position: absolute;
  left: 9.6rem;
  top: 1rem;
  width: 3.8rem;
  height: 4rem;
`;

export const ClickChat = styled(ClickChatSvg)``;

export const Chat = styled(ClickChatSvg)`
  position: absolute;
  left: 9.6rem;
  top: 1rem;
  width: 3.8rem;
  height: 4rem;
`;

export const NonClickHelp = styled(NonClickHelpSvg)`
  position: absolute;
  left: 16.5rem;
  top: 0.8rem;
  width: 4.5rem;
  height: 4.4rem;
`;

export const ClickHelp = styled(ClickHelpSvg)`
  position: absolute;
  left: 17.3rem;
  top: 1rem;
  width: 2.9rem;
  height: 4.4rem;
`;

export const NonClickSearch = styled(NonClickSearchSvg)`
  position: absolute;
  left: 22.9rem;
  top: 0.5rem;
  width: 4.9rem;
  height: 4.9266rem;
`;

export const ClickSearch = styled(ClickSearchSvg)`
  position: absolute;
  left: 22.9rem;
  top: 0.5rem;
  width: 4.9rem;
  height: 4.9266rem;
`;

export const NonClickMyPage = styled(NonClickMyPageSvg)`
  position: absolute;
  left: 30.9rem;
  top: 0.7rem;
  width: 4.1rem;
  height: 4.9rem;
`;
export const ClickMyPage = styled(ClickMyPageSvg)`
  position: absolute;
  left: 30.9rem;
  top: 0.7rem;
  width: 4.1rem;
  height: 4.9rem;
`;

export const BottomDiv = styled.div`
  position: fixed;
  z-index: 1003;
  display: flex;
  width: 100%;
  height: 9.4rem;
  bottom: 0;
  border-top: 0.01rem solid #ccc;
  background: var(--b-00, #fff);
`;

export const MenuAtag = styled.p`
  color: #8c9499;
  text-align: center;
  font-weight: 700;
`;
