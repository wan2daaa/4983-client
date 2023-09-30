import { atom } from "recoil";

export const chatRoomIdState = atom<number>({
  key: "chatRoomIdState",
  default: Number(null),
});
