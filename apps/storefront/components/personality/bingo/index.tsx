"use client";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";
// const
import { mbtiResults } from "storefront/constants/mbtiResults";
// ui
import Grid from "@mui/material/Grid";
// component
import BingoItem from "./BingoItem";
// state
import { mbtiResultAtom } from "storefront/features/personality/atom";

// ----------------------------------------------------------------------

export default function Bingo() {
  const mbtiResultState = useRecoilValue(mbtiResultAtom);

  const bingoList = useMemo(() => {
    return mbtiResults.find((p) => p.label === mbtiResultState)?.bingo || [];
  }, [mbtiResultState]);

  return (
    <Grid container spacing={1}>
      {bingoList?.map((bingo, key) => (
        <Grid key={key} item xs={12} lg={12}>
          <BingoItem content={bingo} />
        </Grid>
      ))}
    </Grid>
  );
}
