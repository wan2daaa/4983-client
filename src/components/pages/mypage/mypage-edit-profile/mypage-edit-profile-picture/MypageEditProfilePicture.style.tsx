import styled from "styled-components";
import image from "next/image";

export const Div = styled.div`
  width: 37.5rem;
  height: 14.8rem;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 0.8rem solid #f6f6f6;
`;
export const ProfileImage = styled(image)`
  width: 8.4rem;
  height: 8.4rem;
  fill: #eee;
  margin-top: 0.8rem;
  flex-shrink: 0;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
`;

export const UserNameTag = styled.div`
  color: #36332e;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.2rem; /* 177.778% */

  margin-top: 0.8rem;
`;
