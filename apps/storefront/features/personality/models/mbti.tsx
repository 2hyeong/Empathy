import { replaceAt } from "scripts";
import { mbtiEl } from "storefront/constants/mbtiEl";

import {
  IMbti,
  TMbtiKey,
} from "storefront/components/personality/types/personality";

export class Mbti implements Partial<IMbti> {
  readonly key: TMbtiKey;

  constructor(key: TMbtiKey) {
    this.key = key;
  }

  getMbti() {
    const updateSelectProp = (arr: IMbti[], curr: IMbti) => {
      arr.forEach((p) => {
        if (p.type === curr.type) p.selected = false;
      });
      curr.selected = true;
    };

    const getUpdatedPersonality = (prev: string, curr: IMbti) => {
      const MBTI: { [key: number]: string } = "MBTI";

      for (let mbti in MBTI) {
        if (curr.type === MBTI[Number(mbti)]) {
          return replaceAt(prev, Number(mbti), curr.key);
        }
      }
      return prev;
    };

    return mbtiEl.reduce((prev: string, curr: IMbti, _, arr: IMbti[]) => {
      const isSameKey = curr.key === this.key;

      if (isSameKey) updateSelectProp(arr, curr);
      if (curr.selected) return getUpdatedPersonality(prev, curr);

      return prev;
    }, "____");
  }
}
