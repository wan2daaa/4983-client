import { atom } from "recoil";

export const chatRoomIdState = atom<number>({
  key: "chatRoomIdState",
  default: Number(null),
});

export const lockerNumberState = atom<number>({
  key: "lockerNumberState",
  default: Number(null),
});

export const lockerPasswordState = atom<string | null>({
  key: "lockerPasswordState",
  default: null,
});
