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
  styled,
  Button,
  DeleteIcon,
} from "ui";
import Link from "next/link";
import { mutate } from "swr";
import { deleteFriend } from "storefront/services/useFriend";
import { useRouter } from "next/navigation";

// ----------------------------------------------------------------------

const StyledLink = styled(Link)`
  text-decoration: none;
  color: currentColor;
  width: 100%;
`;

interface AlignListProps {
  items: Friend[];
}

export default function AlignList({ items }: AlignListProps) {
  const router = useRouter();

  const handleClickDeleteItem = (id: Friend["id"]) => {
    if (confirm("삭제하시겠습니까?")) {
      mutate("/api/users/friends", () => deleteFriend(id));
    }
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        paddingY: 1,
        paddingX: 2,
      }}
      data-testid="align-list"
    >
      {items.length > 0 &&
        items.map((item, key) => (
          <Box data-testid="align-item" key={`${key}${item.name}`}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <StyledLink href={`/friends/${item.id}`}>
                <ListItem
                  alignItems="flex-start"
                  sx={{
                    display: "flex",
                    "&:hover": { backgroundColor: "blueviolet" },
                  }}
                >
                  <ListItemAvatar>
                    <Avatar alt={item.name} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    secondary={`@${item.personality}`}
                  />
                </ListItem>
              </StyledLink>

              <Button onClick={() => handleClickDeleteItem(item.id)}>
                <DeleteIcon />
              </Button>
            </Box>

            <Divider variant="inset" component="li" />
          </Box>
        ))}
    </List>
  );
}
