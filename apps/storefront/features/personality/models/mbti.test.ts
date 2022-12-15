import { Mbti } from "storefront/features/personality/models/mbti";
import { mbtiEl } from "storefront/constants/mbtiEl";
import { test } from "vitest";

test("should return personality to match your MBTI position.", () => {
  const mbti = new Mbti(mbtiEl, "____");

  mbti.set("E");
  expect(mbti.result).toBe("E___");
  expect(mbti.list).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ key: "E", selected: true }),
    ])
  );

  mbti.set("S");
  expect(mbti.result).toBe("ES__");
  expect(mbti.list).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ key: "E", selected: true }),
      expect.objectContaining({
        key: "S",
        selected: true,
      }),
    ])
  );

  mbti.set("I");
  expect(mbti.result).toBe("IS__");
  expect(mbti.list).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ key: "I", selected: true }),
      expect.objectContaining({ key: "E", selected: false }),
      expect.objectContaining({
        key: "S",
        selected: true,
      }),
    ])
  );

  mbti.reset();
  expect(mbti.result).toBe("____");
  expect(mbti.list).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ key: "I", selected: false }),
      expect.objectContaining({ key: "E", selected: false }),
      expect.objectContaining({
        key: "S",
        selected: false,
      }),
    ])
  );
});
