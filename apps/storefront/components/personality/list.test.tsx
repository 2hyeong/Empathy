import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import PersonalityList from "./list";

describe("should return clicked MBTI, on clicking personality-clickable-card", () => {
  test("should return 'ES__', if 0 and 2 index of personality-clickable-card is clicked", async () => {
    // ARRANGE
    render(<PersonalityList />);

    // ASSERT
    expect(
      screen.getByTestId("personality-selected-typography")
    ).toHaveTextContent("____");

    // ACT
    await userEvent.click(
      screen.getAllByTestId("personality-clickable-card")[0]
    );
    await userEvent.click(
      screen.getAllByTestId("personality-clickable-card")[2]
    );

    // ASSERT
    expect(
      screen.getByTestId("personality-selected-typography")
    ).toHaveTextContent("ES__");
  });

  test(`should return 'ISTJ',
if 0, 1, 2, 4 and 6 index of personality-clickable-card is clicked`, async () => {
    // ARRANGE
    render(<PersonalityList />);

    // ASSERT
    expect(
      screen.getByTestId("personality-selected-typography")
    ).toHaveTextContent("____");

    // ACT
    await userEvent.click(
      screen.getAllByTestId("personality-clickable-card")[0]
    );
    await userEvent.click(
      screen.getAllByTestId("personality-clickable-card")[1]
    );
    await userEvent.click(
      screen.getAllByTestId("personality-clickable-card")[2]
    );
    await userEvent.click(
      screen.getAllByTestId("personality-clickable-card")[4]
    );
    await userEvent.click(
      screen.getAllByTestId("personality-clickable-card")[6]
    );

    // ASSERT
    expect(
      screen.getByTestId("personality-selected-typography")
    ).toHaveTextContent("ISTJ");
  });
});
