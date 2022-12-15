"use client";

// ui
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

// mock
import account from "storefront/mocks/_mock/account";

interface RelationshipItemProps {
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
