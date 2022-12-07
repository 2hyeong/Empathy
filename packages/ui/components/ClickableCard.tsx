import React from "react";

import MuiCard, { CardProps as MuiCardProps } from "@mui/material/Card";
import { CardActionArea } from "@mui/material";

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
        opacity: isActive ? 1 : 0.5,
      }}
    >
      <CardActionArea sx={{ height: "100%", padding: 2 }}>
        {children}
      </CardActionArea>
    </MuiCard>
  );
}
