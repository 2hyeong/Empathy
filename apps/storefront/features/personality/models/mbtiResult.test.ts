import { test } from "vitest";
import { MbtiResult } from "./mbtiResult";

test("if label is ISTJ, it should return ISTJrelationship", () => {
  const ISTJrelationship = {
    best: ["ESFP"],
    good: ["ISFJ", "ESFJ", "ISTJ", "ESTJ"],
    normal: ["ISFP", "ISTP", "ESTP"],
    bad: ["INTJ", "ENTJ", "INTP", "ENTP"],
    worst: ["INFP", "ENFP", "INFJ", "ENFJ"],
  };

  const mbtiResult = new MbtiResult("ISTJ");
  expect(mbtiResult.getRelationships()).toMatchObject(ISTJrelationship);
});
