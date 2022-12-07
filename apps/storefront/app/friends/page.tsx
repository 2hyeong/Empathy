"use client";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { signIn } from "next-auth/react";
// component
const FriendList = dynamic(
  () => import("storefront/components/friends/FriendList")
);

// ----------------------------------------------------------------------

export default function Page() {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    signIn("kakao");
  }

  return <FriendList other={{ sx: { position: "static" } }} />;
}
