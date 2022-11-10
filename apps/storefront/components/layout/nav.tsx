import { MouseEvent } from "react";
import { Diversity1Icon, List, ListItemButton, ListItemIcon } from "ui";

export default function Nav() {
  const handleListItemClick = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    index: number
  ) => {};

  return (
    <List component="nav" sx={{ display: "flex" }}>
      <ListItemButton
        sx={{
          padding: 0,
          maxWidth: "fit-content",
        }}
        onClick={(event) => handleListItemClick(event, 0)}
      >
        <ListItemIcon sx={{ minWidth: "32px" }}>
          <Diversity1Icon />
        </ListItemIcon>
      </ListItemButton>
    </List>
  );
}
