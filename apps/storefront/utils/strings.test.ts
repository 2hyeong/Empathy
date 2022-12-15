import { describe, it, test } from "vitest";
import { filterAlphabet } from "./strings";

describe("test utils/strings", () => {
  test("filterAlphabet", () => {
    it("if string is 'abc', it should return 'abc'", () => {
      expect(filterAlphabet("abc")).toBe("abc");
    });
    it("if string is '___', it should return ''", () => {
      expect(filterAlphabet("___")).toBe("");
    });
    it("if string is '$!@#', it should return ''", () => {
      expect(filterAlphabet("___")).toBe("");
    });
    it("if string is '$b!@#a', it should return 'ba'", () => {
      expect(filterAlphabet("$b!@#a")).toBe("ba");
    });
    it("if string is ' 123 ', it should return ''", () => {
      expect(filterAlphabet(" 123 ")).toBe("");
    });
  });
});
