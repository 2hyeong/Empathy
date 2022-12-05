// ui
import { Box, IconButton, Link, Stack, Typography } from "ui";
import { OpenInNewIcon } from "ui/icons";
// idl
import { Friend } from "idl/gen/typescript-fetch";
// mocks
import account from "storefront/lib/_mock/account";

export interface FriendItemProps {
  friend: Friend;
}

export default function FriendItem({ friend }: FriendItemProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        component="img"
        alt={account.displayName}
        src={account.photoURL}
        sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }}
      />

      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
        <Link color="inherit" variant="subtitle2" underline="hover" noWrap>
          {friend.name}
        </Link>

        <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
          {friend.personality}
        </Typography>
      </Box>

      <IconButton sx={{ p: 0, ml: "0 !important", pr: 3 }}>
        <OpenInNewIcon />
      </IconButton>
    </Stack>
  );
}
