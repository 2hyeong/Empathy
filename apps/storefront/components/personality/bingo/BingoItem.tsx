// ui
import { CardContent, Typography } from "ui";
import { ClickableCard } from "ui/components";
import { ThumbUpOffAltIcon } from "ui/icons";

interface BingoItemProps {
  content: string;
}

// ----------------------------------------------------------------------

export default function BingoItem({ content }: BingoItemProps) {
  return (
    <ClickableCard sx={{ height: "100%" }} isActive={true}>
      <CardContent sx={{ padding: 1 }}>
        <Typography
          color="inherit"
          variant="h6"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {content}
          <ThumbUpOffAltIcon fontSize="small" color="info" />
        </Typography>
      </CardContent>
    </ClickableCard>
  );
}
