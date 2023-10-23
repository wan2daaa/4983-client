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
export const ProfileArea = styled.div`
  width: 35.2rem;
  height: 11.1rem;
  flex-shrink: 0;
  margin-top: 1rem;

  border-radius: 3rem;
  background: #fff;
  box-shadow: -1px 2px 9px 2px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: row;
`;
export const ProfileImage = styled(image)`
  margin-top: 1.5rem;
  margin-left: 1.7rem;
  width: 8.4rem;
  height: 8.4rem;
  fill: #eee;
  border-radius: 4.2rem;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
`;
export const ProfileNameTag = styled.div`
  display: flex;
  color: var(--b-100, #36332e);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.2rem; /* 177.778% */

  align-items: center;
  margin-left: 1.5rem;
  margin-right: 6.5rem;
`;
export const ProfileEditButtonDiv = styled.div``;
export const ProfileEditButton = styled.button`
  width: 6.9rem;
  height: 3rem;
  flex-shrink: 0;
  border-radius: 5rem;
  background: #02b878;

  color: #fff;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 3.2rem; /* 266.667% */

  margin-top: 4rem;
`;
