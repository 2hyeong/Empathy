"use client";

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

// idl
import { Friend } from "idl/gen/typescript-fetch";
import FriendItem from "./friend-item";
import useModalForm from "storefront/lib/hooks/useModalForm";
import AddFriendDialog from "./add-friend-dialog";

// ----------------------------------------------------------------------
interface FriendListProps {
  friends: Friend[];
  // other: CardProps
}

export default function FriendList({ friends, other }: FriendListProps) {
  const { visible, show, close, register, handleSubmit } = useModalForm();

  return (
    <Card {...other}>
      <CardHeader
        title="친구 목록"
        subheader={`${friends.length}명의 친구가 있어요.`}
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
