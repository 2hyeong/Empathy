"use client";
import useSWR from "swr";
// components
import FriendList from "storefront/components/friends/friend-list";
// hooks
import { getFriends } from "storefront/lib/api/useFriend";
import MyPersonality from "storefront/components/personality/my-personality";
// ui
import { Grid } from "ui";
import Bingo from "storefront/components/personality/bingo";

// ----------------------------------------------------------------------
export default function Page() {
  const { data: friends, error } = useSWR("/api/users/friends", getFriends);
  if (error) console.error(error);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={8}>
        <MyPersonality />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <FriendList friends={friends || []} />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Bingo />
      </Grid>
    </Grid>
  );
}
