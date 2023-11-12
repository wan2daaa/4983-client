import styled, { css } from "styled-components";
import NonClickHomeSvg from "../../../../public/assets/image/main/NonClick-Home.svg";
import NonClickChatSvg from "../../../../public/assets/image/main/NonClick-Chat.svg";
import NonClickHelpSvg from "../../../../public/assets/image/main/NonClick-Help.svg";
import NonClickSearchSvg from "../../../../public/assets/image/main/NonClick-Search.svg";
import NonClickMyPageSvg from "../../../../public/assets/image/main/NonClick-Mypage.svg";
import ClickHomeSvg from "../../../../public/assets/image/Home.svg";

export const BottomDiv = styled.div`
  position: fixed;
  z-index: 1003;
  width: 100%;
  display: flex;
  //height: 10.4rem;
  height: 9.69787rem;
  bottom: 0;
  border-top: 0.01rem solid #ccc;
  background: var(--b-00, #fff);
`;

// export const BottomBox = styled.div`
//   position: relative;
//   display: flex;
//   width: 32.2rem;
//   height: 4rem;
//   margin: 0 auto;
//   background: yellow;
// `;

export const NonClickHome = styled(NonClickHomeSvg)``;
export const ClickHome = styled(ClickHomeSvg)``;

export const Home = styled(ClickHomeSvg)`
  position: absolute;
  width: 4.5rem;
  height: 4.3rem;
  top: 0.7rem;
  left: 2.3rem;
  ${props => (props.active ? ClickHome : NonClickHome)}
`;

export const NonClickChat = styled(NonClickChatSvg)`
  position: absolute;
  width: 3.8rem;
  height: 4rem;
  top: 0.8rem;
  left: 10rem;
`;

export const NonClickHelp = styled(NonClickHelpSvg)`
  position: absolute;
  width: 4.5rem;
  height: 4.4rem;
  top: 0.6rem;
  left: 16.9rem;
`;

export const NonClickSearch = styled(NonClickSearchSvg)`
  position: absolute;
  width: 4.9rem;
  height: 4.9266rem;
  top: 0.3rem;
  left: 23.4rem;
`;

export const NonClickMyPage = styled(NonClickMyPageSvg)`
  position: absolute;
  width: 4.1rem;
  height: 4.9rem;
  top: 0.4rem;
  left: 31.5rem;
`;
