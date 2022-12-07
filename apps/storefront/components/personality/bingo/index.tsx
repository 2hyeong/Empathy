"use client";
import { useMemo } from "react";
import { useRecoilState } from "recoil";
// const
import { personalities16 } from "storefront/constants/personality";
// ui
import { Card, Grid, Typography } from "ui";
// component
import BingoItem from "./BingoItem";
// type
import type { Personality } from "../types/personality";
// state
import { personalityAtom } from "storefront/features/personality/atom";

// ----------------------------------------------------------------------

export default function Bingo() {
  const [personalityState, setPersonalityState] =
    useRecoilState(personalityAtom);

  const bingoList = useMemo(() => {
    return (
      personalities16.filter((p) => p.label === personalityState)[0]?.bingo ||
      []
    );
  }, [personalityState]);

  return (
    <Grid container spacing={1} data-testid="bingo-grid-container">
      {bingoList?.map((bingo, key) => (
        <Grid key={key} item xs={12} lg={12} data-testid="bingo-grid-item">
          <BingoItem content={bingo} />
        </Grid>
      ))}
    </Grid>
  );
}
