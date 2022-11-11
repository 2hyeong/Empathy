"use client";

import { signOut, useSession } from "next-auth/react";
import { Avatar, Box, Button, CheckCircleIcon, Typography } from "ui";
import SignIn from "storefront/components/auth/signin";
import useSWR from "swr";
import { getFriend } from "storefront/lib/api/useFriend";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type AppbarProps = {
  sidebarWidth: number | string;
};

export default function Appbar({ sidebarWidth }: AppbarProps) {
  const { data: session, status } = useSession();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const { data: friend } = useSWR(`/api/users/friends/${slug}`, () =>
    getFriend(slug as string)
  );

  if (slug) {
    useEffect(() => {
      if (friend) {
        setImage("");
        setName(friend.name);
      }
    }, [friend]);
  } else {
    useEffect(() => {
      setImage(session?.user?.image as string);
      setName(session?.user?.name as string);
    }, [session]);
  }

  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(90deg, #c7d2fe 25%, #fecaca 40%)",
        }}
        height={75}
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
        <Avatar sx={{ width: 128, height: 128 }} src={image || undefined} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: 8,
            paddingX: 2,
          }}
        >
          <Typography variant="h5">{name}</Typography>
          <CheckCircleIcon sx={{ marginLeft: 1 }} />
        </Box>
      </Box>
    </>
  );
}
