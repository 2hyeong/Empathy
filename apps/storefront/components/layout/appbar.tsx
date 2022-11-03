"use client";

import { signOut, useSession } from "next-auth/react";
import { Avatar, Box, Button, CheckCircleIcon, Typography } from "ui";
import SignIn from "storefront/components/auth/signin";

type AppbarProps = {
  sidebarWidth: number | string;
};

export default function Appbar({ sidebarWidth }: AppbarProps) {
  const { data: session, status } = useSession();

  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(90deg, #c7d2fe 25%, #fecaca 40%)",
        }}
        height={200}
      >
        <Box sx={{ padding: 2, display: "flex", justifyContent: "flex-end" }}>
          {status === "authenticated" ? (
            <Button onClick={() => signOut()} color="secondary">
              로그아웃
            </Button>
          ) : (
            <SignIn />
          )}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          marginTop: -8,
          paddingX: 4,
          marginLeft: `${sidebarWidth}px`,
        }}
      >
        <Avatar
          sx={{ width: 128, height: 128 }}
          src={session?.user?.image || undefined}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: 8,
            paddingX: 2,
          }}
        >
          <Typography variant="h5">{session?.user?.name}</Typography>
          <CheckCircleIcon sx={{ marginLeft: 1 }} />
        </Box>
      </Box>
    </>
  );
}
