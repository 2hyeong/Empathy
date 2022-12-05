import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { Avatar, Box, CheckCircleIcon, Typography } from "ui";
import { getFriend } from "storefront/lib/api/useFriend";
import { useSession } from "next-auth/react";

export default function Profile() {
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
    <Box
      sx={{
        display: "flex",
        marginTop: -8,
        paddingX: 4,
        marginLeft: "384px",
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
  );
}
