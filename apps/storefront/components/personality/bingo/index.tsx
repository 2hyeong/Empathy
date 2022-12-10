"use client";
import { useMemo } from "react";
import { useRecoilState } from "recoil";
import dynamic from "next/dynamic";
// const
import { mbtiResults } from "storefront/constants/mbtiResults";
// ui
import { Grid } from "ui";
// component
const BingoItem = dynamic(() => import("./BingoItem"), { ssr: false });
// state
import { personalityAtom } from "storefront/features/personality/atom";

// ----------------------------------------------------------------------

export default function Bingo() {
  const [personalityState, setPersonalityState] =
    useRecoilState(personalityAtom);

  const bingoList = useMemo(() => {
    return mbtiResults.find((p) => p.label === personalityState)?.bingo || [];
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
