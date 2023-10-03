import { atom } from "recoil";

export const fileListState = atom<File[]>({
  key: "fileListState",
  default: [],
});

export const collegeState = atom<string>({
  key: "collegeState",
  default: "",
});

export const departmentState = atom<string>({
  key: "departmentState",
  default: "",
});

export const priceState = atom<number>({
  key: "priceState",
  default: Number(""),
});

export const tradeAvailableDatetimeState = atom<string>({
  key: "tradeAvailableDatetimeState",
  default: "",
});

export const nameState = atom<string>({
  key: "nameState",
  default: "",
});

export const publisherState = atom<string>({
  key: "publisherState",
  default: "",
});

export const isUnderlinedOrWriteState = atom<Boolean>({
  key: "isUnderlinedOrWriteState",
  default: Boolean(false),
});

export const isDiscolorationAndDamageState = atom<Boolean>({
  key: "isDiscolorationAndDamageState",
  default: Boolean(false),
});

export const isCoverDamagedState = atom<Boolean>({
  key: "isCoverDamagedState",
  default: Boolean(false),
});
