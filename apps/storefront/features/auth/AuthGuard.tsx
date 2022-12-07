"use client";
import { ReactNode } from "react";
import { signIn, useSession } from "next-auth/react";

export interface AuthGuardProps {
  children: ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const { status } = useSession();

  if (status === "unauthenticated") {
    signIn("kakao");
  }

  return <>{children}</>;
}
