import React from "react";
import { CardActionArea } from "@mui/material";
import MuiCard, { CardProps as MuiCardProps } from "@mui/material/Card";

export interface CardProps extends MuiCardProps {
  children: React.ReactNode;
}

export const Card = (props: CardProps) => (
  <MuiCard {...props}>{props.children}</MuiCard>
);

export interface ClickableCardProps extends CardProps {
  isActive: boolean;
}

export const ClickableCard = (props: ClickableCardProps) => {
  return (
    <Card
      {...props}
      sx={{
        ...props.sx,
        backgroundColor: props.isActive
          ? "rgba(255, 255, 255, 0.16)"
          : undefined,
      }}
    >
      <CardActionArea sx={{ height: "100%", padding: 2 }}>
        {props.children}
      </CardActionArea>
    </Card>
  );
};
