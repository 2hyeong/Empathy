import React from "react";
import { Box, Drawer, SearchInput, styled, Typography } from "ui";
import AlignList from "storefront/components/list/alignList";
import Nav from "storefront/components/layout/nav";
import AddFriendDialog from "../dialog/add-friend";

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
  const [items, setItems] = React.useState([]);

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
              친구의 이름 또는 성격 유형을 검색하세요
            </Typography>

            <SearchInput />
          </Box>
        </StickyBox>

        <AlignList items={items} />
        <AddFriendDialog />
      </Box>
    </Drawer>
  );
}
