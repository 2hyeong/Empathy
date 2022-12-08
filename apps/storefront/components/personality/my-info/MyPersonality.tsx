"use client";
import { useEffect, useState } from "react";
import { mutate } from "swr";
import { useRecoilState } from "recoil";
import dynamic from "next/dynamic";
// ui
import { Box, Button, Card, styled, Typography } from "ui";
// script
import { GetMbtiByKey } from "storefront/components/personality/scripts/personality";
// component
const PersonalityCardList = dynamic(() => import("./PersonalityCardList"), {
  ssr: false,
});
const Bingo = dynamic(() => import("../bingo"), { ssr: false });
// types
import type { Personality } from "../types/personality";
// hooks
import useSnackbar from "storefront/hooks/useSnackbar";
// api
import { updateUser } from "storefront/services/useUser";
// state
import { personalityAtom } from "storefront/features/personality/atom";

// ----------------------------------------------------------------------

const Header = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export default function MyPersonality({
  personality,
}: {
  personality: string;
}) {
  const [selected, setSelected] = useState("____");
  const [personalityState, setPersonalityState] =
    useRecoilState(personalityAtom);
  const { show: showSuccess, Snackbar: SuccessSnackbar } = useSnackbar({
    title: "저장되었습니다.",
    severity: "success",
    autoHideDuration: 3000,
  });

  const activeDefaultClickableCard = (personality: string) => {
    for (const p of personality) {
      setSelected(GetMbtiByKey(p as Personality["key"]));
    }
  };

  useEffect(() => {
    if (personality?.length) {
      setPersonalityState(personality);
      activeDefaultClickableCard(personality);
    }
  }, [personality]);

  const callback = (payload: Personality["key"]) => {
    setSelected(payload);
  };

  const validate = (key: string) => {
    key = selected.replace(/[^a-zA-Z]/g, "");
    const isFilled = key.length === 4;

    if (!isFilled) {
      alert("성격유형을 모두 선택해주세요.");
      return "";
    }

    return key;
  };

  const handleClickSave = () => {
    let updatedPersonality = validate(selected);
    if (updatedPersonality === "") return;

    mutate(
      "/api/me/personality",
      updateUser({ personality: updatedPersonality })
    );

    setPersonalityState(updatedPersonality);
    showSuccess();
  };

  return (
    <Card sx={{ p: 4, position: "static" }}>
      <Header>
        <Typography
          variant="h5"
          sx={{ letterSpacing: "1px", marginY: 4 }}
          data-testid="personality-selected-typography"
        >
          성격유형을 선택해주세요😀 {selected}
        </Typography>
        <Button variant="contained" size="small" onClick={handleClickSave}>
          저장
        </Button>
      </Header>
      <PersonalityCardList callback={callback} />
      <SuccessSnackbar />

      <Box component="section" sx={{ pt: 4 }}>
        <Bingo />
      </Box>
    </Card>
  );
}
