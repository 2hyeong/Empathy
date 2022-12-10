import { Mbti } from "storefront/features/personality/models/mbti";
import { test } from "vitest";

test("should return personality to match your MBTI position.", () => {
  expect(new Mbti("E").getMbti()).toBe("E___");
  expect(new Mbti("I").getMbti()).toBe("I___");
  expect(new Mbti("S").getMbti()).toBe("IS__");
  expect(new Mbti("E").getMbti()).toBe("ES__");
  expect(new Mbti("I").getMbti()).toBe("IS__");
  expect(new Mbti("P").getMbti()).toBe("IS_P");
  expect(new Mbti("F").getMbti()).toBe("ISFP");
  expect(new Mbti("J").getMbti()).toBe("ISFJ");
});
