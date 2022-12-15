import { render, screen, within } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import {
  defaultMbtiList,
  defaultMbtiResult,
} from "storefront/features/personality/atom";
import { Mbti } from "storefront/features/personality/models/mbti";
import { describe, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import PersonalityCardList from "./PersonalityCardList";

describe("PersonalityCardList", () => {
  const setup = () => {
    const mbti = new Mbti(defaultMbtiList, defaultMbtiResult);
    render(
      <RecoilRoot>
        <PersonalityCardList mbti={mbti} />
      </RecoilRoot>
    );
  };
  test("if click the E card, it should have 'isActive' class", async () => {
    // ARRANGE
    setup();

    //
    const E = screen.getByTestId("personality-clickable-card-E");
    expect(E).toBeInTheDocument();

    // ACT
    await userEvent.click(E);

    //
    const clickedCard = screen.getByTestId("personality-card-E");
    expect(clickedCard).toBeInTheDocument();
    const normalCard = screen.getByTestId("personality-card-S");
    expect(normalCard).toBeInTheDocument();

    // ASSERT
    expect(clickedCard).toHaveClass("isActive");
    expect(normalCard).not.toHaveClass("isActive");
  });
});
