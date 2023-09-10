import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const Div = styled.div`
  position: relative;
  width: 100%;
  height: 12.1rem;
  background: #fff;
`;
export const NameTag = styled.a`
  position: absolute;
  color: #36332e;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.2rem; /* 200% */
  left: 2.4rem;
  top: 1.2rem;
`;

export const InputNameArea = styled.div`
  position: absolute;
  display: flex;
  width: 32.8rem;
  height: 5.9rem;
  flex-shrink: 0;

  border-radius: 1.5rem;
  border: 1px solid #fff;
  background: rgba(236, 236, 236, 0.6);

  top: 4.4rem;
  left: 2.1rem;
`;
export const InputName = styled.input`
  width: 19.2rem;
  height: 5.9rem;
  display: flex;
  background: none;
  color: #818181;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */
  border: none;
  margin-left: 2rem;
`;
export const EditNameNotice = styled.div`
  position: absolute;
  color: #f61818;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 266.667% */
  top: 9.9rem;
  left: 3.4rem;
`;
export const DuplicateButton = styled.button`
  position: absolute;
  bottom: 0.94rem;
  left: 24.7rem;
  width: 7.2rem;
  height: 3.7592rem;
  flex-shrink: 0;

  border-radius: 1.5rem;
  background: rgba(2, 184, 120, 0.8);

  color: #fff;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 228.571% */
`;
