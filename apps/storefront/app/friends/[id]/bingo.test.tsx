import { render, screen, waitFor, within } from "@testing-library/react";
import Bingo from "./bingo";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { personalities16 } from "storefront/constants/personality";

vi.mock("next/navigation", () => ({
  usePathname() {
    return "/friends/0";
  },
}));

describe("test bingo render", () => {
  const mockedBingo = personalities16.filter((p) => p.label === "ISTP")[0]
    .bingo;
  test("nine of personalities paper should be rendered", async () => {
    // ARRANGE
    render(<Bingo />);

    const item = await screen.findAllByTestId("bingo-grid-item");

    // ASSERT
    expect(item).toHaveLength(9);
  });

  test(`clicking '이전' should be disabled if index is 0 and given personality has greater or equal than 10`, async () => {
    // ARRANGE
    render(<Bingo />);

    const prevBtn = await screen.findByTestId("bingo-prev-btn");
    const nextBtn = await screen.findByTestId("bingo-next-btn");

    // ASSERT
    expect(prevBtn).toBeDisabled();
    expect(nextBtn).not.toBeDisabled();
  });

  test(`clicking '더보기' should render next nine items,
  so first element of bingo shouldn't be same after clicking next button
  then if clicking '이전' should be first element which is rendered first nine elements`, async () => {
    // ARRANGE
    render(<Bingo />);

    const item = await screen.findAllByTestId("bingo-grid-item");
    const prevBtn = await screen.findByTestId("bingo-prev-btn");
    const nextBtn = await screen.findByTestId("bingo-next-btn");

    // first element in ISTP(mock value) bingo
    expect(item[0].textContent).toBe(mockedBingo[0]);

    // ACT
    await userEvent.click(nextBtn);

    // ASSERT
    const itemAfterClickNext = await screen.findAllByTestId("bingo-grid-item");
    expect(itemAfterClickNext[0].textContent).not.toBe(mockedBingo[0]);
    expect(itemAfterClickNext[0].textContent).toBe(mockedBingo[9]);

    // ACT
    await userEvent.click(prevBtn);

    // ASSERT
    const itemAfterPrevClick = await screen.findAllByTestId("bingo-grid-item");
    expect(itemAfterPrevClick[0].textContent).toBe(mockedBingo[0]);
  });

  test("clicking '더보기' till max index should be disabled if index is last", async () => {
    // ARRANGE
    render(<Bingo />);

    const nextBtn = await screen.findByTestId("bingo-next-btn");
    const max = Math.floor(mockedBingo.length / 9);

    for (let i = 0; i < max; i++) {
      await userEvent.click(nextBtn);
    }

    expect(nextBtn).toBeDisabled();
  });
});
