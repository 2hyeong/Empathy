import { test } from "vitest";
import { GetSelectedPersonality } from "./personality";

test("should return personality to match your MBTI position.", () => {
  expect(GetSelectedPersonality("E")).toBe("E___");
  expect(GetSelectedPersonality("I")).toBe("I___");
  expect(GetSelectedPersonality("S")).toBe("IS__");
  expect(GetSelectedPersonality("E")).toBe("ES__");
  expect(GetSelectedPersonality("I")).toBe("IS__");
  expect(GetSelectedPersonality("P")).toBe("IS_P");
  expect(GetSelectedPersonality("F")).toBe("ISFP");
  expect(GetSelectedPersonality("J")).toBe("ISFJ");
});
