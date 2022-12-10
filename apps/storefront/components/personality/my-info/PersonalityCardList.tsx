"use client";
import dynamic from "next/dynamic";
// ui
import { Grid } from "ui";
// constant
import { mbtiEl } from "storefront/constants/mbtiEl";
// component
const PersonalityCard = dynamic(() => import("./PersonalityCard"), {
  ssr: false,
});
// types
import type { IMbti } from "../types/personality";
// model
import { Mbti } from "storefront/features/personality/models/mbti";

// ----------------------------------------------------------------------
interface PersonalityCardListProps {
  callback: (key: string) => void;
}

export default function PersonalityCardList({
  callback,
}: PersonalityCardListProps) {
  const handlClick = (key: IMbti["key"]) => {
    callback(new Mbti(key).getMbti());
  };

  return (
    <Grid container spacing={1} columns={8}>
      {mbtiEl.map((personality) => (
        <Grid
          item
          xs={4}
          lg={2}
          key={personality.key}
          data-testid="personality-clickable-card"
          onClick={() => handlClick(personality.key)}
        >
          <PersonalityCard personality={personality} />
        </Grid>
      ))}
    </Grid>
  );
}
