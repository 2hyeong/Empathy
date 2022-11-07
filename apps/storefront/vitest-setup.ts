import { expect, beforeAll, afterEach, afterAll, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { server } from "storefront/mocks/server";
import { fetch } from "cross-fetch";

const mockFireApp = () => ({
  getApps: () => [],
  initializeApp: vi.fn(),
  cert: vi.fn(),
  getApp: vi.fn(),
});

const mockFireStore = () => ({
  getFirestore: vi.fn(),
});

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);
global.fetch = fetch;

beforeAll(() => {
  console.log("listening...");
  server.listen();
});

beforeEach(() => {
  vi.mock("firebase-admin/app", () => mockFireApp());
  vi.mock("firebase-admin/firestore", () => mockFireStore());
});

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());
