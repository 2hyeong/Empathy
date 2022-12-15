"use client";

// ui
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ClickableCard from "ui/components/ClickableCard";
// icon
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

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
          <span>
            <ThumbUpOffAltIcon fontSize="small" color="info" />
          </span>
        </Typography>
      </CardContent>
    </ClickableCard>
  );
}
