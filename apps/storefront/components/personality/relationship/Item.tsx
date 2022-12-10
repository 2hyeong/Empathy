"use client";

// ui
import {
  Avatar,
  Box,
  CardContent,
  Divider,
  Typography,
} from "storefront/../../packages/ui";

// mock
import account from "storefront/mocks/_mock/account";

interface RelationshipItem {
  item: string;
}

export default function RelationshipItem({ item }: RelationshipItemProps) {
  return (
    <Box sx={{ p: 1 }}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 0,
          pb: 0,
        }}
      >
        <Typography
          color="inherit"
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {item}
        </Typography>
        <Avatar src={account.photoURL} alt="photoURL" />
      </CardContent>
      <Divider sx={{ my: 2 }} />
    </Box>
  );
}
