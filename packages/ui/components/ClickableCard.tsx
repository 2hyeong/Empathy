import React from "react";

import { CardActionArea } from "@mui/material";
import MuiCard, { CardProps as MuiCardProps } from "@mui/material/Card";

export type ClickableCardProps = {
  isActive?: boolean;
  children: React.ReactNode;
} & MuiCardProps;

export default function ClickableCard({
  isActive,
  children,
  sx,
  ...rest
}: ClickableCardProps) {
  return (
    <MuiCard
      {...rest}
      sx={{
        ...sx,
<<<<<<<< HEAD:packages/ui/components/ClickableCard.tsx
        opacity: isActive ? 1 : 0.5,
========
        opacity: isActive ? 1 : 0.75,
>>>>>>>> main:packages/ui/components/clickable-card.tsx
      }}
    >
      <CardActionArea sx={{ height: "100%", padding: 2 }}>
        {children}
      </CardActionArea>
    </MuiCard>
  );
}
