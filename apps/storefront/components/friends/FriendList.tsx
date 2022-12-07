"use client";
import useSWR from "swr";
// ui
import {
  Box,
  Card,
  CardHeader,
  Divider,
  IconButton,
  Tooltip,
  Stack,
  Button,
  Dialog,
} from "ui";
import { Scrollbar } from "ui/components";
import { AddIcon } from "ui/icons";
import type { CardProps } from "ui/types";
// hooks
import { getFriends } from "storefront/services/useFriend";
import useModalForm from "storefront/hooks/useModalForm";
// idl
import { Friend } from "idl/gen/typescript-fetch";
// components
import FriendItem from "./FriendItem";
import AddFriendDialog from "./AddFriendDialog";

// ----------------------------------------------------------------------

interface FriendListProps {
  other?: CardProps;
}

export default function FriendList({ other }: FriendListProps) {
  const { visible, show, close, register, handleSubmit } = useModalForm();
  const { data: friends } = useSWR("/api/users/friends", getFriends);

  return (
    <Card {...other}>
      <CardHeader
        title="친구 목록"
        subheader={`${friends?.length || 0}명의 친구가 있어요.`}
        action={
          <>
            <AddFriendDialog
              visible={visible}
              close={close}
              register={register}
              handleSubmit={handleSubmit}
            />
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
