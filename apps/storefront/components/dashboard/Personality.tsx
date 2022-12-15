"use client";

import { useMemo } from "react";
// component
import PersonalityCardList from "storefront/components/personality/card/PersonalityCardList";
import PersonalityTabs from "storefront/components/personality/tabs";
// ui
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// utils
import { filterAlphabet } from "storefront/utils/strings";
// state
import { useRecoilValue } from "recoil";
import {
  defaultMbtiList,
  defaultMbtiResult,
  mbtiResultAtom,
} from "storefront/features/personality/atom";
// model
import { Mbti } from "storefront/features/personality/models/mbti";

// ----------------------------------------------------------------------
const Header = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export default function PersonalityDashboard() {
  const mbti = useMemo(() => new Mbti(defaultMbtiList, defaultMbtiResult), []);
  const mbtiResultState = useRecoilValue(mbtiResultAtom);
  const showTabs = filterAlphabet(mbtiResultState).length === 4;

  return (
    <Card sx={{ p: 4, position: "static" }}>
      <Header>
        <Typography variant="h5" sx={{ letterSpacing: "1px", marginY: 4 }}>
          성격유형을 선택해주세요😀 {mbtiResultState}
        </Typography>
      </Header>

      <PersonalityCardList mbti={mbti} />
      {showTabs ? <PersonalityTabs /> : null}
    </Card>
  );
}
