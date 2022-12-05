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
      <CardContent>
        <Typography color="inherit" variant="h5">
          {content}
          <span>
            <ThumbUpOffAltIcon
              sx={{ pl: 1, verticalAlign: "middle" }}
              color="info"
            />
          </span>
        </Typography>
      </CardContent>
    </ClickableCard>
  );
}
