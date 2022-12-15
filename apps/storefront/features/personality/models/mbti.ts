import { replaceAt } from "scripts";
// type
import type {
  IMbti,
  TMbtiKey,
} from "storefront/components/personality/types/personality";

export class Mbti {
  #list: IMbti[];
  #result: string;

  constructor(list: IMbti[], result: string) {
    this.#result = result;
    this.#list = list;
  }

  get result() {
    return this.#result;
  }

  get list() {
    return this.#list;
  }

  reset() {
    this.#list = this.#list.map((el) => ({
      ...el,
      selected: false,
    }));

    this.#result = "____";
  }

  toggleSelect(selected: IMbti) {
    this.#list = this.#list.map((el) => {
      const isSameType = el.type === selected.type; // "M", "B", "T", "I"
      if (isSameType) el = { ...el, selected: false };
      if (el.key === selected.key) {
        el = { ...el, selected: true };
      }
      return el;
    });
  }

  convertMbti(prev: string, curr: IMbti): string {
    const MBTI: { [key: number]: string } = "MBTI";
    for (let mbti in MBTI) {
      if (curr.type === MBTI[Number(mbti)]) {
        return replaceAt(prev, Number(mbti), curr.key);
      }
    }
    return prev;
  }

  setList(key: TMbtiKey) {
    this.#list.forEach((li) => {
      const isSameKey = li.key === key;
      if (isSameKey) {
        this.toggleSelect(li);
      }
    });
  }

  setResult() {
    this.#result = this.#list.reduce((prev: string, curr: IMbti) => {
      if (curr.selected) {
        return this.convertMbti(prev, curr);
      }
      return prev;
    }, "____");
  }

  set(key: TMbtiKey) {
    this.setList(key);
    this.setResult();
  }
}
