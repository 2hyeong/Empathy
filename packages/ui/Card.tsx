import React from "react";
import { CardActionArea } from "@mui/material";
import MuiCard, { CardProps as MuiCardProps } from "@mui/material/Card";

export interface CardProps extends MuiCardProps {
  children: React.ReactNode;
}

export const Card = (props: CardProps) => (
  <MuiCard {...props}>{props.children}</MuiCard>
);

export const ClickableCard = (props: CardProps) => {
  const [isActive, setIsActive] = React.useState(false);

  const handleClickCard = () => {
    setIsActive(!isActive);
  };

  return (
    <MuiCard
      {...props}
      sx={{
        ...props.sx,
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.08)",
        },
        backgroundColor: isActive ? "rgba(255, 255, 255, 0.16)" : undefined,
      }}
      onClick={() => handleClickCard()}
    >
      <CardActionArea sx={{ height: "100%" }}>{props.children}</CardActionArea>
    </MuiCard>
  );
};
