import { act, fireEvent, render, screen, within } from "@testing-library/react";
import AddFriendDialog from "./add-friend";

describe("test add friend dialog", () => {
  test(`should be submitted and show '친구가 등록되었습니다.' snackbar,
  if { name: 'John', personality: 'ENTJ'} which is valid form
   is entered in the form`, async () => {
    // ARRANGE
    render(<AddFriendDialog />);

    // OPEN THE DIALOG
    const addFriendBtn = await screen.findByTestId("add-friend-btn");
    expect(addFriendBtn).toBeInTheDocument();
    fireEvent.click(addFriendBtn);

    // FILL FORM
    const addFriendName = await screen.findByTestId("add-friend-name");
    fireEvent.change(addFriendName, { target: { value: "John" } });
    const addFriendPersonality = await within(
      await screen.findByTestId("add-friend-personality")
    ).findByRole("combobox");

    act(() => {
      addFriendPersonality.click();
      addFriendPersonality.focus();
    });
    fireEvent.change(addFriendPersonality, { target: { value: "ENTJ" } });

    // SUBMIT THE FORM
    const addFriendSubmitBtn = await screen.findByTestId(
      "add-friend-submit-btn"
    );
    fireEvent.click(addFriendSubmitBtn);

    // ASSERT
    expect(screen.queryByText("친구가 등록되었습니다.")).toBeInTheDocument();
  });

  test(`should not be submitted and not showing '친구가 등록되었습니다.' snackbar,
  if personality is submitted as 'XXXX' in the form
  which is not in the personalities16 label`, async () => {
    // ARRANGE
    render(<AddFriendDialog />);

    // OPEN THE DIALOG
    const addFriendBtn = await screen.findByTestId("add-friend-btn");
    expect(addFriendBtn).toBeInTheDocument();
    fireEvent.click(addFriendBtn);

    // FILL FORM
    const addFriendName = await screen.findByTestId("add-friend-name");
    fireEvent.change(addFriendName, { target: { value: "John" } });
    const addFriendPersonality = await within(
      await screen.findByTestId("add-friend-personality")
    ).findByRole("combobox");

    act(() => {
      addFriendPersonality.click();
      addFriendPersonality.focus();
    });
    fireEvent.change(addFriendPersonality, { target: { value: "XXXX" } });

    // SUBMIT THE FORM
    const addFriendSubmitBtn = await screen.findByTestId(
      "add-friend-submit-btn"
    );
    fireEvent.submit(addFriendSubmitBtn);

    // ASSERT
    expect(
      screen.queryByText("친구가 등록되었습니다.")
    ).not.toBeInTheDocument();
  });
});
