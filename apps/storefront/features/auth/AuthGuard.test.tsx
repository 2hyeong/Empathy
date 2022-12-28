import { render, screen } from "@testing-library/react";
import { describe, Mock, vi } from "vitest";
import AuthGuard from "./AuthGuard";
import { useSession } from "next-auth/react";

vi.mock("next-auth/react");
const useMockSession = vi.mocked(useSession) as Mock;

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
}));

describe("AuthGuard", () => {
  test("if session status is 'authenticated', SignInModal should not be rendered", () => {
    // Arrange
    useMockSession.mockReturnValue({
      status: "authenticated",
    });

    // Act
    render(
      <AuthGuard>
        <div>children</div>
      </AuthGuard>
    );

    // Assert
    expect(screen.queryByTestId("signin-modal")).toBeNull();
  });

  test("if session status is 'loading', SignInModal should not be rendered", () => {
    // Arrange
    useMockSession.mockReturnValue({
      status: "loading",
    });

    // Act
    render(
      <AuthGuard>
        <div>children</div>
      </AuthGuard>
    );

    // Assert
    expect(screen.queryByTestId("signin-modal")).toBeNull();
  });

  test("if session status is 'authenticated', SignInModal should be rendered", () => {
    // Arrange
    useMockSession.mockReturnValue({
      status: "unauthenticated",
    });

    // Act
    render(
      <AuthGuard>
        <></>
      </AuthGuard>
    );

    // Assert
    expect(screen.queryByTestId("signin-modal")).toBeInTheDocument();
  });
});
