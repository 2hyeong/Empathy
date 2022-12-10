// types
import type {
  IMBTIRelationship,
  IMbtiResult,
} from "storefront/components/personality/types/personality";
// constant
import { mbtiResults } from "storefront/constants/mbtiResults";

export class MbtiResult implements IMbtiResult {
  readonly label: string;
  constructor(label: string) {
    this.label = label;
  }
  getRelationships(): IMBTIRelationship | undefined {
    return mbtiResults.find((p) => p.label === this.label)?.relationship;
  }
}
