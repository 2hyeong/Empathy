import { test, expect } from "vitest";
import { replaceAt } from "../string";

test("should return 'zbcd' if replaceAt('abcd', 0, 'z')  ", () => {
  expect(replaceAt("abcd", 0, "z")).toBe("zbcd");
});

test("should return 'azcd' if replaceAt('test', 1, 'z')  ", () => {
  expect(replaceAt("abcd", 1, "z")).toBe("azcd");
});

test("should return 'test' if replaceAt('test', 10, 'k')  ", () => {
  expect(replaceAt("test", 10, "k")).toBe("test");
});

test("should return 'test' if replaceAt('test', -1, 'k')  ", () => {
  expect(replaceAt("test", -1, "k")).toBe("test");
});
