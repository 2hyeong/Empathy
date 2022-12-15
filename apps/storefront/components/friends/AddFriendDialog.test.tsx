import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { vi } from "vitest";
import AddFriendDialog from "./AddFriendDialog";

describe("test add friend dialog", () => {
  const setup = () => {
    const visible = true;
    const close = vi.fn();

    render(<AddFriendDialog visible={visible} close={close} />);

    const name = screen.getByLabelText(/이름/i);
    const personality = screen.getByLabelText(/성격유형/i);
    const submitBtn = screen.getByText("추가");

    return {
      name,
      personality,
      submitBtn,
    };
  };

  test(`should be submitted if { name: 'HONG', personality: 'ENTJ'} which is valid form
   is entered in the form`, async () => {
    // ARRANGE
    const { name, personality, submitBtn } = setup();

    expect(name).toBeInTheDocument();
    expect(personality).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();

    // FILL FORM
    await userEvent.type(name, "HONG");
    expect(name).toHaveValue("HONG");

    await userEvent.type(personality, "ENTJ");
    expect(personality).toHaveValue("ENTJ");
    fireEvent.submit(submitBtn);

    // ASSERT
    await waitFor(() => {
      expect(screen.queryByText(/친구가 등록되었습니다/i)).toBeInTheDocument();
    });
  });

  test(`should not be submitted and not showing '친구가 등록되었습니다.' snackbar,
  if personality is submitted as 'XXXX' in the form
  which is not in the mbtiResults label`, async () => {
    // ARRANGE
    const { name, personality, submitBtn } = setup();

    expect(name).toBeInTheDocument();
    expect(personality).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();

    // FILL FORM
    await userEvent.type(name, "HONG");
    expect(name).toHaveValue("HONG");

    await userEvent.type(personality, "XXXX");
    expect(personality).toHaveValue("XXXX");
    fireEvent.submit(submitBtn);

    // ASSERT
    await waitFor(() => {
      expect(screen.queryByText(/친구가 등록되었습니다/i)).toBeNull();
    });
  });
});
