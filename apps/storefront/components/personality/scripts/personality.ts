import { replaceAt } from "scripts";
import type { Personality, PersonalityKey } from "../types/personality";

export const Personalities: Personality[] = [
  {
    key: "E",
    title: "외향형",
    caption: "사교적이며 활동적인",
    type: "M",
    color: "primary",
    selected: false,
  },
  {
    key: "I",
    title: "내향형",
    caption: "깊이있는 대인관계",
    type: "M",
    color: "primary",
    selected: false,
  },
  {
    key: "S",
    title: "감각형",
    caption: "오감에 의존하나 철저한",
    type: "B",
    color: "error",
    selected: false,
  },
  {
    key: "N",
    title: "직관형",
    caption: "영감에 의존하며 신속한",
    type: "B",
    color: "error",
    selected: false,
  },
  {
    key: "T",
    title: "사고형",
    caption: "분석적이며 논리적인",
    type: "T",
    color: "warning",
    selected: false,
  },
  {
    key: "F",
    title: "감정형",
    caption: "사람관계에 관심 갖는",
    type: "T",
    color: "warning",
    selected: false,
  },
  {
    key: "J",
    title: "판단형",
    caption: "철저하고 계획적인",
    type: "I",
    color: "secondary",
    selected: false,
  },
  {
    key: "P",
    title: "인식형",
    caption: "자율적이고 융통성 있는",
    type: "I",
    color: "secondary",
    selected: false,
  },
];

export const GetMbtiByKey = (key: PersonalityKey) => {
  const updateSelectProp = (arr: Personality[], curr: Personality) => {
    arr.forEach((p) => {
      if (p.type === curr.type) p.selected = false;
    });
    curr.selected = true;
  };

  const getUpdatedPersonality = (prev: string, curr: Personality) => {
    const MBTI: { [key: number]: string } = "MBTI";

    for (let mbti in MBTI) {
      if (curr.type === MBTI[Number(mbti)]) {
        return replaceAt(prev, Number(mbti), curr.key);
      }
    }
    return prev;
  };

  return Personalities.reduce(
    (prev: string, curr: Personality, _, arr: Personality[]) => {
      const isSameKey = curr.key === key;

      if (isSameKey) updateSelectProp(arr, curr);
      if (curr.selected) return getUpdatedPersonality(prev, curr);

      return prev;
    },
    "____"
  );
};
