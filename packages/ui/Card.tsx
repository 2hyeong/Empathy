import React from "react";
import { CardActionArea } from "@mui/material";
import MuiCard, { CardProps as MuiCardProps } from "@mui/material/Card";

export type CardProps = {
  children: React.ReactNode;
} & MuiCardProps;

export const Card = (props: CardProps) => <MuiCard>{props.children}</MuiCard>;

export type ClickableCardProps = {
  isActive: boolean;
} & CardProps;

export const ClickableCard = ({
  isActive,
  children,
  sx,
  ...rest
}: ClickableCardProps) => {
  return (
    <Card
      {...rest}
      sx={{
        ...sx,
        backgroundColor: isActive ? "rgba(255, 255, 255, 0.16)" : undefined,
      }}
    >
      <CardActionArea sx={{ height: "100%", padding: 2 }}>
        {children}
      </CardActionArea>
    </Card>
  );
};
