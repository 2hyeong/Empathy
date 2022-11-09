"use client";

import { Friend } from "idl/gen/typescript-fetch";
import {
  List,
  Avatar,
  Divider,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Box,
} from "ui";
import Link from "next/link";

type AlignListProps = {
  items: Friend[];
};

export default function AlignList({ items }: AlignListProps) {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, paddingY: 1, paddingX: 2 }}
      data-testid="align-list"
    >
      {items.length > 0 &&
        items.map((item, key) => (
          <Box data-testid="align-item" key={`${key}${item.name}`}>
            <Link
              href={`/friends/${item.id}`}
              style={{ textDecoration: "none", color: "currentColor" }}
            >
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={item.name} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={`@${item.personality}`}
                />
              </ListItem>
            </Link>

            <Divider variant="inset" component="li" />
          </Box>
        ))}
    </List>
  );
}
