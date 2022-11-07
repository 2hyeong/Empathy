import React from "react";
import { Box, Drawer, SearchInput, styled, Typography } from "ui";
import AlignList from "storefront/components/list/alignList";
import Nav from "storefront/components/layout/nav";
import AddFriendDialog from "../dialog/add-friend";
import useSWR from "swr";
import { getFriends } from "storefront/lib/api/useUser";

const StickyBox = styled(Box)(({ theme }) => ({
  position: "sticky",
  zIndex: theme.zIndex.appBar,
  top: 0,
  padding: "24px 48px 0 48px",
  backgroundColor: theme.palette.background.paper,
}));

type SidebarProps = {
  width?: number | string;
  anchor?: "right" | "left";
};

export default function Sidebar({
  width = 384,
  anchor = "left",
}: SidebarProps) {
  const { data: friends, error } = useSWR("/api/users/friends", getFriends, {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
  });
  if (error) console.error(error);

  return (
    <Drawer
      sx={{
        width,
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width,
        },
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      variant="permanent"
      anchor={anchor}
    >
      <Box>
        <StickyBox>
          <Nav />

          <Box sx={{ paddingTop: 4 }}>
            <Typography variant="h6" color="white">
              친구
            </Typography>

            <Typography variant="subtitle2" color="gray" sx={{ marginTop: 1 }}>
              친구의 이름을 검색하세요
            </Typography>

            <SearchInput />
          </Box>
        </StickyBox>

        <AlignList items={friends || []} />
        <AddFriendDialog />
      </Box>
    </Drawer>
  );
}
