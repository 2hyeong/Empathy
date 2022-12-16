import { render, screen } from "@testing-library/react";
import { describe, it, Mock, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { signOut, useSession } from "next-auth/react";
import AccountPopover from "./AccountPopover";

vi.mock("next-auth/react", () => {
  return {
    signOut: vi.fn(),
    useSession: vi.fn(),
  };
});
const useMockSession = vi.mocked(useSession) as Mock;

describe("AccountPopover", () => {
  test("if user has image, it should show image on the avatar", () => {
    // ARRANGE
    useMockSession.mockReturnValue({
      data: {
        user: {
          image: "userImage",
        },
      },
    });

    // ACT
    render(<AccountPopover />);

    //
    const image = screen.getByAltText("photoURL");
    expect(image).toBeInTheDocument();

    // ASSERT
    expect(image).toHaveAttribute("src", "userImage");
  });
  test("if user does not have image, it should show mock photo on the avatar", () => {
    // ARRANGE
    useMockSession.mockReturnValue({});

    // ACT
    render(<AccountPopover />);

    //
    const image = screen.getByAltText("photoURL");
    expect(image).toBeInTheDocument();

    // ASSERT
    expect(image).toHaveAttribute(
      "src",
      "/assets/images/avatars/avatar_default.jpg"
    );
  });

  test("if user click avatar, popover should be defined", async () => {
    // ACT
    render(<AccountPopover />);

    //
    const iconButton = screen.getByRole("button");
    expect(iconButton).toBeInTheDocument();

    await userEvent.click(iconButton);

    // ASSERT
    const popover = screen.queryByTestId("account-popover");
    expect(popover).toBeDefined();
  });
  test("if popover is opened, user name and email should be in the document", async () => {
    // ARRANGE
    useMockSession.mockReturnValue({
      data: {
        user: {
          name: "name",
          email: "email",
        },
      },
    });

    // ACT
    render(<AccountPopover />);

    //
    const iconButton = screen.getByRole("button");
    expect(iconButton).toBeInTheDocument();

    // ACT
    await userEvent.click(iconButton);

    // ASSERT
    const username = screen.getByText("name");
    const email = screen.getByText("email");
    expect(username).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  test("if user clicks logout button, it should call signed out", async () => {
    // ACT
    render(<AccountPopover />);

    const iconButton = screen.getByRole("button");
    await userEvent.click(iconButton);

    const logoutBtn = screen.getByText("로그아웃");
    await userEvent.click(logoutBtn);

    // ASSERT
    expect(signOut).toHaveBeenCalled();
    expect(logoutBtn).not.toBeInTheDocument(); // close
  });
});
