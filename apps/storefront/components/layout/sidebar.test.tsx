import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { getFriends } from "storefront/mocks/handlers/users";
import { describe } from "vitest";
import Sidebar from "./sidebar";

describe("friends should be rendered", () => {
  test(`testid 'align-list' childElementCount should be 0
  , if friends are given as empty array`, async () => {
    // MOCK
    getFriends([]);

    // ARRANGE
    render(<Sidebar />);
    const alignList = await screen.findByTestId("align-list");

    // ASSERT
    expect(alignList.childElementCount).toBe(0);
  });

  test(`testid 'align-list' should have greater than or equal 1,
  and name '홍길동', personality '@ISTP' should be in the document,
  if mockData '홍길동', 'ISTP' is given`, async () => {
    // ARRANGE
    render(<Sidebar />);
    const name = await screen.findByText("홍길동");
    const personality = await screen.findByText("@ISTP");
    const alignList = await screen.findByTestId("align-list");

    // ASSERT
    expect(alignList.childElementCount).toBeGreaterThanOrEqual(1);
    expect(name).toBeInTheDocument();
    expect(personality).toBeInTheDocument();
  });

  test("should be in the document, if mockData 'John', 'ENTJ' is entered in the form", async () => {
    // ARRANGE
    render(<Sidebar />);

    // OPEN THE DIALOG
    const addFriendBtn = screen.getByTestId("add-friend-btn");
    expect(addFriendBtn).toBeInTheDocument();
    fireEvent.click(addFriendBtn);

    // FILL FORM
    const addFriendName = screen.getByTestId("add-friend-name");
    fireEvent.change(addFriendName, { target: { value: "John" } });
    const addFriendPersonality = await within(
      screen.getByTestId("add-friend-personality")
    ).findByRole("combobox");

    act(() => {
      addFriendPersonality.click();
      addFriendPersonality.focus();
    });

    fireEvent.change(addFriendPersonality, { target: { value: "ENTJ" } });

    // SUBMIT THE FORM
    const addFriendSubmitBtn = screen.getByTestId("add-friend-submit-btn");
    fireEvent.submit(addFriendSubmitBtn);

    // ASSERT
    expect(await screen.findByText("John")).toBeInTheDocument();
    expect(await screen.findByText("@ENTJ")).toBeInTheDocument();
  });
});
