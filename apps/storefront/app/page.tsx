"use client";
import dynamic from "next/dynamic";
// ui
import { Grid } from "ui";
// component
const Bingo = dynamic(() => import("storefront/components/personality/bingo"), {
  ssr: false,
});
const MyPersonality = dynamic(
  () => import("storefront/components/personality/my-info/MyPersonality"),
  { ssr: false }
);
const FriendList = dynamic(
  () => import("storefront/components/friends/FriendList"),
  { ssr: false }
);

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
