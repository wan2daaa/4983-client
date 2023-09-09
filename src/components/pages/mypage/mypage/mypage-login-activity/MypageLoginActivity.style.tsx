import styled from "styled-components";
import image from "next/image";

export const Div = styled.div`
  width: 37.5rem;
  height: 21.1rem;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  border-bottom: 0.5rem solid #f6f6f6;
`;
export const Title = styled.a`
  color: #36332e;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.2rem; /* 177.778% */
  margin-left: 1.6rem;
  margin-top: 1.4rem;
`;

export const LoginActivityArea = styled.div``;

export const LogoutArea = styled.div`
  border-bottom: 0.2rem solid #f6f6f6;
`;
export const LogoutButtonDiv = styled.div`
  display: flex;
  top: 1.5rem;
  left: 1.7rem;
  width: 13rem;
  height: 3rem;
  gap: 0.3rem;
  margin-bottom: 1.5rem;
  margin-top: 1.3rem;
  margin-left: 1rem;
`;

export const LogoutButton = styled(image)`
  width: 3.1rem;
  height: 2.9rem;
`;

export const LogoutTag = styled.div`
  color: #36332e;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 177.778% */
  vertical-align: 0.6rem;

  display: inline;
`;
export const secedeArea = styled.div`
  border-bottom: 0.2rem solid #f6f6f6;
`;
export const secedeButtonDiv = styled.div`
  display: flex;
  top: 1.5rem;
  left: 1.7rem;
  width: 13rem;
  height: 3rem;
  gap: 0.2rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  margin-left: 1.4rem;
`;

export const secedeButton = styled(image)`
  width: 2.8rem;
  height: 2.8rem;
`;

export const secedeTag = styled.div`
  color: #36332e;
  font-size: 1.8rem;
  width: 11rem;
  height: 3.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 177.778% */
`;
