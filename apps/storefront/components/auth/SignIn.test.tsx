import { render, screen } from "@testing-library/react";
import { describe, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import SignIn from "./SignIn";

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
}));

describe("SignIn", () => {
  test("if SignIn component is rendered, SignInModal should not be in the document", () => {
    // ACT
    render(<SignIn />);
    // Assert
    expect(screen.queryByTestId("signin-modal")).toBeNull();
  });

  test("if click '로그인' button, SignInModal is in the document", async () => {
    // ACT
    render(<SignIn />);

    const loginBtn = screen.getByRole("button");
    expect(loginBtn).toBeInTheDocument();

    await userEvent.click(loginBtn);

    // Assert
    expect(screen.queryByTestId("signin-modal")).toBeInTheDocument();
  });
});
