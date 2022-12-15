import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { describe } from "vitest";
import userEvent from "@testing-library/user-event";
import PersonalityDashboard from "./Personality";

describe("Personality Dashboard", () => {
  const setup = () => {
    render(
      <RecoilRoot>
        <PersonalityDashboard />
      </RecoilRoot>
    );
  };
  test('if Personality rendered initially, it should contain "____" text for mbtiResult.', () => {
    setup();

    // ASSERT
    expect(screen.getByText(/____/i)).toBeInTheDocument();
  });

  test("if selecting two personality, it should not have tabs", async () => {
    // ARRANGE
    setup();

    //
    const I = screen.getByText("I");
    expect(I).toBeInTheDocument();
    const S = screen.getByText("S");
    expect(S).toBeInTheDocument();

    // ACT
    await userEvent.click(I);
    await userEvent.click(S);

    //
    const tabs = screen.queryByLabelText("빙고");

    // ASSERT
    expect(screen.getByText(/IS__/i)).toBeInTheDocument();
    expect(tabs).toBeNull();
  });

  test("if selecting four personality, it should have tabs", async () => {
    // ARRANGE
    setup();

    //
    const I = screen.getByText("I");
    expect(I).toBeInTheDocument();

    const S = screen.getByText("S");
    expect(S).toBeInTheDocument();

    const T = screen.getByText("T");
    expect(T).toBeInTheDocument();

    const P = screen.getByText("P");
    expect(P).toBeInTheDocument();

    // ACT
    await userEvent.click(I);
    await userEvent.click(S);
    await userEvent.click(T);
    await userEvent.click(P);

    //
    const tabs = screen.queryByLabelText("빙고");

    // ASSERT
    expect(screen.getByText(/ISTP/i)).toBeInTheDocument();
    expect(tabs).toBeInTheDocument();
  });
});
