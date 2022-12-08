"use client";
import dynamic from "next/dynamic";
// ui
import { Grid } from "ui";
// scripts
import {
  GetMbtiByKey,
  Personalities,
} from "storefront/components/personality/scripts/personality";
// component
const PersonalityCard = dynamic(() => import("./PersonalityCard"), {
  ssr: false,
});
// types
import type { Personality } from "../types/personality";

// ----------------------------------------------------------------------
interface PersonalityCardListProps {
  callback: (key: Personality["key"]) => void;
}

export default function PersonalityCardList({
  callback,
}: PersonalityCardListProps) {
  const handlClick = (key: Personality["key"]) => {
    callback(GetMbtiByKey(key) as PersonalityKey);
  };

  return (
    <Grid container spacing={1} columns={8}>
      {Personalities.map((personality) => (
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
