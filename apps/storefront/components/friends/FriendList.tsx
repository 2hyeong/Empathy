"use client";
import useSWR from "swr";
// ui
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Scrollbar from "ui/components/scrollbar";
import AddIcon from "@mui/icons-material/Add";
// type
import type { CardProps } from "ui/types";
// hook
import { getFriends } from "storefront/services/useFriend";
import { useModal } from "storefront/hooks/useModal";
// idl
import { Friend } from "idl/gen/typescript-fetch";
// component
import FriendItem from "./FriendItem";
import AddFriendDialog from "./AddFriendDialog";

// ----------------------------------------------------------------------

interface FriendListProps {
  other?: CardProps;
}

export default function FriendList({ other }: FriendListProps) {
  const { visible, show, close } = useModal({
    defaultVisible: false,
  });
  const { data: friends } = useSWR("/api/users/friends", getFriends);

  return (
    <Card {...other}>
      <CardHeader
        title="친구 목록"
        subheader={`${friends?.length || 0}명의 친구가 있어요.`}
        action={
          <>
            <AddFriendDialog visible={visible} close={close} />
            <Tooltip title="추가">
              <IconButton onClick={show}>
                <AddIcon />
              </IconButton>
            </Tooltip>
          </>
        }
      />
      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {friends?.length
            ? friends.map((friend: Friend) => (
                <FriendItem key={friend.id} friend={friend} />
              ))
            : null}
        </Stack>
      </Scrollbar>

      <Divider />

      <Box sx={{ p: 2, textAlign: "right" }}>
        <Button size="small" color="inherit" endIcon={<AddIcon />}>
          View all
        </Button>
      </Box>
    </Card>
  );
}
