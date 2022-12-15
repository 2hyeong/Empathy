"use client";
// component
import ClickableCard from "ui/components/ClickableCard";
// ui
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
// types
import type { IMbti } from "../types/personality";

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  padding: 0,
}));

interface PersonalityCardProps {
  personality: IMbti;
}

export default function PersonalityCard({ personality }: PersonalityCardProps) {
  return (
    <ClickableCard
      data-testid={`personality-card-${personality.key}`}
      sx={{
        my: 2,
        "&:hover": {
          my: 0,
          opacity: 1,
          transition: "margin-top 0.5s",
        },
        boxShadow: 0,
        textAlign: "center",
        color: (theme) => theme?.palette[personality?.color]?.dark,
        bgcolor: (theme) => theme?.palette[personality?.color]?.light,
        height: "100%",
      }}
      isActive={personality.selected}
    >
      <StyledCardContent>
        <Typography variant="h1">{personality.key}</Typography>
      </StyledCardContent>
      <Divider variant="middle" />
      <Typography variant="h3">{personality.title}</Typography>
      <Typography variant="subtitle2">{personality.caption}</Typography>
    </ClickableCard>
  );
}
