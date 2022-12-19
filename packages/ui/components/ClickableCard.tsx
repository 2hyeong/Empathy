import React from "react";

import MuiCard, { CardProps as MuiCardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";

export type ClickableCardProps = {
  isActive: boolean;
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
        opacity: 0.5,
        "&.isActive": {
          opacity: 1,
        },
      }}
      className={isActive ? "isActive" : undefined}
    >
      <CardActionArea sx={{ height: "100%", padding: 2 }}>
        {children}
      </CardActionArea>
    </MuiCard>
  );
}
