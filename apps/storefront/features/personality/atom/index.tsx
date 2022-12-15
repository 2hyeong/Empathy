import { atom } from "recoil";
import { mbtiEl } from "storefront/constants/mbtiEl";

export const defaultMbtiResult = "____";
export const defaultMbtiList = mbtiEl;

export const mbtiResultAtom = atom({
  key: "mbtiResult",
  default: defaultMbtiResult,
});

export const mbtiListAtom = atom({
  key: "mbtiList",
  default: defaultMbtiList,
});
