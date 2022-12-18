"use client";
import { useEffect } from "react";
// ui
import Grid from "@mui/material/Grid";
// component
import PersonalityCard from "./PersonalityCard";
// type
import type { TMbtiKey } from "../types/personality";
// state
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  mbtiListAtom,
  mbtiResultAtom,
} from "storefront/features/personality/atom";
// model
import { Mbti } from "storefront/features/personality/models/mbti";

// ----------------------------------------------------------------------

export default function PersonalityCardList({ mbti }: { mbti: Mbti }) {
  const setMbtiResultState = useSetRecoilState(mbtiResultAtom);
  const [mbtiListState, setMbtiListState] = useRecoilState(mbtiListAtom);

  useEffect(() => {
    return () => {
      // clear
      mbti.reset();
      setMbtiListState(mbti.list);
      setMbtiResultState(mbti.result);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlClick = (key: TMbtiKey) => {
    mbti.set(key);

    setMbtiListState(mbti.list);
    setMbtiResultState(mbti.result);
  };

  return (
    <Grid container spacing={1} columns={8}>
      {mbtiListState.map((personality) => (
        <Grid
          item
          xs={4}
          lg={2}
          key={personality.key}
          data-testid={`personality-clickable-card-${personality.key}`}
          onClick={() => handlClick(personality.key)}
        >
          <PersonalityCard personality={personality} />
        </Grid>
      ))}
    </Grid>
  );
}
