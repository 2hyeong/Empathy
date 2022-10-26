import {
  List,
  Avatar,
  Divider,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Box,
} from "ui";

type AlignItem = {
  src?: string;
  name: string;
  personality?: string;
};

type AlignListProps = {
  items: AlignItem[];
};

export default function AlignList({ items }: AlignListProps) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, paddingY: 1, paddingX: 2 }}>
      {items.length > 0 &&
        items.map((item, key) => (
          <Box key={`${key}${item.name}`}>
            <ListItem
              alignItems="flex-start"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <ListItemAvatar>
                <Avatar alt={item.name} src={item.src} />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={`@${item.personality}`}
              />
            </ListItem>

            <Divider variant="inset" component="li" />
          </Box>
        ))}
    </List>
  );
}
