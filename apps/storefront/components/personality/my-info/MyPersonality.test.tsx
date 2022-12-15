import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import userEvent from "@testing-library/user-event";
import { describe, test, vi } from "vitest";
import MyPersonality from "./MyPersonality";

window.alert = vi.fn();

describe("my-info/MyPersonality", () => {
  const setup = () => {
    const { container } = render(
      <RecoilRoot>
        <MyPersonality />
      </RecoilRoot>
    );
    return {
      container,
      isActiveClass: container.getElementsByClassName("isActive"),
    };
  };
  test("if me.personality is undefined, it shouldn't have isActive class on personality card", () => {
    // ARRANGE
    const { isActiveClass } = setup();

    // ASSERT
    expect(isActiveClass).toHaveLength(0);
  });
  test(`if me.personality is undefined and click 'I','S','E','N'
    which is two element is selected, it shouldn't show a tab and should have 2 isActive class`, async () => {
    // ARRANGE
    const { isActiveClass } = setup();

    //
    const I = screen.getByTestId("personality-clickable-card-I");
    expect(I).toBeInTheDocument();
    const S = screen.getByTestId("personality-clickable-card-S");
    expect(S).toBeInTheDocument();
    const E = screen.getByTestId("personality-clickable-card-E");
    expect(E).toBeInTheDocument();
    const N = screen.getByTestId("personality-clickable-card-N");
    expect(N).toBeInTheDocument();

    // ACT
    await userEvent.click(I);
    await userEvent.click(S);
    await userEvent.click(E);
    await userEvent.click(N);

    // ASSERT
    expect(isActiveClass).toHaveLength(2); // E and N
    expect(screen.getByText(/EN__/i)).toBeInTheDocument();

    const oneOfTabLabel = screen.queryByText(/빙고/i);
    expect(oneOfTabLabel).toBeNull();
  });
  test(`if me.personality is undefined and click 'I','S','E','N',
    which is two element is selected, should call alert when clicking save`, async () => {
    // ARRANGE
    setup();

    //
    const I = screen.getByTestId("personality-clickable-card-I");
    expect(I).toBeInTheDocument();
    const S = screen.getByTestId("personality-clickable-card-S");
    expect(S).toBeInTheDocument();
    const E = screen.getByTestId("personality-clickable-card-E");
    expect(E).toBeInTheDocument();
    const N = screen.getByTestId("personality-clickable-card-N");
    expect(N).toBeInTheDocument();

    // ACT
    await userEvent.click(I);
    await userEvent.click(S);
    await userEvent.click(E);
    await userEvent.click(N);

    //
    const save = screen.getByText("저장");
    expect(save).toBeInTheDocument();

    // ACT
    await userEvent.click(save);

    // ASSERT
    expect(window.alert).toBeCalled();
  });
  test(`if me.personality is 'ISTP', each of 'I','S','T','J' card,
  it should be 4 isActive class and tabs are visible`, async () => {
    // ARRANGE
    const { isActiveClass } = setup();

    //
    const I = screen.getByTestId("personality-clickable-card-I");
    expect(I).toBeInTheDocument();
    const S = screen.getByTestId("personality-clickable-card-S");
    expect(S).toBeInTheDocument();
    const T = screen.getByTestId("personality-clickable-card-T");
    expect(T).toBeInTheDocument();
    const P = screen.getByTestId("personality-clickable-card-P");
    expect(P).toBeInTheDocument();

    // ACT
    await userEvent.click(I);
    await userEvent.click(S);
    await userEvent.click(T);
    await userEvent.click(P);

    // ASSERT
    expect(isActiveClass.length).toBeGreaterThanOrEqual(4); // because tabs have isActive class
    const oneOfTabLabel = screen.queryByText(/빙고/i);
    expect(oneOfTabLabel).toBeInTheDocument();
  });
  test("if me.personality is 'ISTP', it should show '저장되었습니다' text on snackbar", async () => {
    // ARRANGE
    setup();

    //
    const I = screen.getByTestId("personality-clickable-card-I");
    expect(I).toBeInTheDocument();
    const S = screen.getByTestId("personality-clickable-card-S");
    expect(S).toBeInTheDocument();
    const T = screen.getByTestId("personality-clickable-card-T");
    expect(T).toBeInTheDocument();
    const P = screen.getByTestId("personality-clickable-card-P");
    expect(P).toBeInTheDocument();

    // ACT
    await userEvent.click(I);
    await userEvent.click(S);
    await userEvent.click(T);
    await userEvent.click(P);

    const save = screen.getByText("저장");
    expect(save).toBeInTheDocument();
    await userEvent.click(save);

    // ASSERT
    expect(screen.queryByText(/저장되었습니다/i)).toBeInTheDocument();
  });
});
