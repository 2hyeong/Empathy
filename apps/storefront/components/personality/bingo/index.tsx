"use client";
import { useMemo } from "react";
import { useRecoilState } from "recoil";
import dynamic from "next/dynamic";
// const
import { personalities16 } from "storefront/constants/personality";
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
