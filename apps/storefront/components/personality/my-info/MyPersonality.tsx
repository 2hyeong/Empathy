"use client";
import { useEffect, useState } from "react";
import { mutate } from "swr";
import { useRecoilState } from "recoil";
// ui
import { Box, Button, Card, styled, Typography } from "ui";
// component
import PersonalityCardList from "./PersonalityCardList";
// types
import { IMbti, TMbtiKey } from "../types/personality";
// hooks
import useSnackbar from "storefront/hooks/useSnackbar";
// api
import { updateUser } from "storefront/services/useUser";
// state
import { personalityAtom } from "storefront/features/personality/atom";
import PersonalityTabs from "../tabs";
// models
import { Mbti } from "storefront/features/personality/models/mbti";

// ----------------------------------------------------------------------

const Header = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export default function MyPersonality({
  personality,
}: {
  personality: TMbtiKey;
}) {
  const [selected, setSelected] = useState("____");
  const [personalityState, setPersonalityState] =
    useRecoilState(personalityAtom);

  const { show: showSuccess, Snackbar: SuccessSnackbar } = useSnackbar({
    title: "저장되었습니다.",
    severity: "success",
    autoHideDuration: 3000,
  });

  const activeDefaultClickableCard = (personality: TMbtiKey) => {
    setPersonalityState(personality);
    for (const p of personality) {
      const myPersonality = new Mbti(p);
      setSelected(myPersonality.getMbti());
    }
  };

  useEffect(() => {
    if (personality?.length) {
      activeDefaultClickableCard(personality);
    }
  }, [personality]);

  const callback = (payload: IMbti["key"]): void => {
    setSelected(payload);
  };

  const validate = (key: string): string => {
    key = selected.replace(/[^a-zA-Z]/g, "");
    const isFilled = key.length === 4;

    if (!isFilled) {
      alert("성격유형을 모두 선택해주세요.");
      return "";
    }

    return key;
  };

  const handleClickSave = (): void => {
    let updatedPersonality = validate(selected);
    if (updatedPersonality === "") return;
    mutate(null, updateUser({ personality: updatedPersonality }));
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
      <PersonalityTabs />

      <SuccessSnackbar />
    </Card>
  );
}
