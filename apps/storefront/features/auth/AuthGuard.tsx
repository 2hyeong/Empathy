"use client";
import { ReactNode } from "react";
import { useSession } from "next-auth/react";
// component
import SignInModal from "storefront/components/auth/SignInModal";
import { useModal } from "storefront/hooks/useModal";

export interface AuthGuardProps {
  children: ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const { status } = useSession();

  if (status === "unauthenticated") {
    const { visible, show, close } = useModal({ defaultVisible: true });
    return (
      <>
        <SignInModal visible={visible} show={show} close={close} />
        {children}
      </>
    );
  }

  return <>{children}</>;
}
