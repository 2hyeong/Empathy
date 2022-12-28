// types
import type { IMBTIRelationship } from "storefront/components/personality/types/personality";
// constant
import { mbtiResults } from "storefront/constants/mbtiResults";

export class MbtiResult {
  static #instance: MbtiResult;
  #label: string;

  constructor(label: string) {
    this.#label = label;
    if (MbtiResult.#instance) return MbtiResult.#instance;
    return (MbtiResult.#instance = this);
  }

  getRelationships(): IMBTIRelationship | undefined {
    return mbtiResults.find((p) => p.label === this.#label)?.relationship;
  }
}
