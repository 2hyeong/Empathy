import { render, screen } from "@testing-library/react";
import { describe, it, Mock, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import SignInModal from "./SignInModal";

vi.mock("next-auth/react", () => {
  return {
    signIn: vi.fn(),
  };
});

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
}));

describe("SignInModal", () => {
  test("if visible is true, title of modal '소셜 로그인' should be in the document", () => {
    // ARRANGE
    const visible = true;
    const show = vi.fn();
    const close = vi.fn();

    // ACT
    render(<SignInModal visible={visible} show={show} close={close} />);

    // ASSERT
    expect(screen.getByText("소셜 로그인")).toBeInTheDocument();
  });

  test("if visible is false, title of modal '소셜 로그인' should return null", () => {
    // ARRANGE
    const visible = false;
    const show = vi.fn();
    const close = vi.fn();

    // ACT
    render(<SignInModal visible={visible} show={show} close={close} />);

    // ASSERT
    expect(screen.queryByText("소셜 로그인")).toBeNull();
  });

  test("if user click '카카오 로그인' button, it should call signIn('kakao') on visible", async () => {
    // ARRANGE
    const visible = true;
    const show = vi.fn();
    const close = vi.fn();

    // ACT
    render(<SignInModal visible={visible} show={show} close={close} />);

    //
    const kakaoLoginBtn = screen.getAllByRole("button")[0];
    expect(kakaoLoginBtn).toBeInTheDocument();

    // ACT
    await userEvent.click(kakaoLoginBtn);

    // ASSERT
    expect(signIn).toHaveBeenCalled();
    expect(close).toHaveBeenCalledTimes(1);
  });

  test("if user click '다음에 하기' button, it should redirect to '/' on visible", async () => {
    // ARRAGNE
    const visible = true;
    const show = vi.fn();
    const close = vi.fn();
    const mockRouter = {
      replace: vi.fn(),
    };
    vi.mocked(useRouter as Mock).mockReturnValue(mockRouter);

    // ACT
    render(<SignInModal visible={visible} show={show} close={close} />);

    //
    const 다음에하기 = screen.getAllByRole("button")[1];
    expect(다음에하기).toBeInTheDocument();

    // ACT
    await userEvent.click(다음에하기);

    // ASSERT
    expect(mockRouter.replace).toHaveBeenCalledWith("/");
    expect(close).toHaveBeenCalledTimes(1);
  });
});
