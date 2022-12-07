"use client";
// components
import FriendList from "storefront/components/friends/FriendList";
// ui
import { Grid } from "ui";
// component
import Bingo from "storefront/components/personality/bingo";
import MyPersonality from "storefront/components/personality/my-info/MyPersonality";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={8}>
        <MyPersonality personality="" />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <FriendList other={{ sx: { position: "static" } }} />
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <Bingo />
      </Grid>
    </Grid>
  );
}
