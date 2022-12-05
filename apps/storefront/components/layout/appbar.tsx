"use client";

import { signOut, useSession } from "next-auth/react";
import { AppBar as MuiAppBar, Box, Button } from "ui";
import SignIn from "storefront/components/auth/signin";

type Size = string | number;

interface AppbarProps {
  sidebarWidth: Size;
}

export default function Appbar({ sidebarWidth }: AppbarProps) {
  const { data: session, status } = useSession();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static">
        <Box sx={{ padding: 2, display: "flex", justifyContent: "flex-end" }}>
          {status === "authenticated" ? (
            <Button onClick={() => signOut()} color="secondary">
              로그아웃
            </Button>
          ) : (
            <SignIn />
          )}
        </Box>
      </MuiAppBar>
    </Box>
  );
}
