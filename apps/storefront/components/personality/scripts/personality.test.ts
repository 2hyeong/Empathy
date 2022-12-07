import { test } from "vitest";
import { GetMbtiByKey } from "./personality";

test("should return personality to match your MBTI position.", () => {
  expect(GetMbtiByKey("E")).toBe("E___");
  expect(GetMbtiByKey("I")).toBe("I___");
  expect(GetMbtiByKey("S")).toBe("IS__");
  expect(GetMbtiByKey("E")).toBe("ES__");
  expect(GetMbtiByKey("I")).toBe("IS__");
  expect(GetMbtiByKey("P")).toBe("IS_P");
  expect(GetMbtiByKey("F")).toBe("ISFP");
  expect(GetMbtiByKey("J")).toBe("ISFJ");
});
