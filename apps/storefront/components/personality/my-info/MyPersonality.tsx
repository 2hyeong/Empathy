"use client";
import { useEffect, useMemo } from "react";
import useSWR, { mutate } from "swr";
// component
import PersonalityCardList from "../card/PersonalityCardList";
import PersonalityTabs from "../tabs";
// types
import type { TMbtiKey } from "../types/personality";
// hooks
import useSnackbar from "storefront/hooks/useSnackbar";
// api
import { getMe, updateUser } from "storefront/services/useUser";
// state
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  defaultMbtiList,
  defaultMbtiResult,
  mbtiListAtom,
  mbtiResultAtom,
} from "storefront/features/personality/atom";
// utils
import { filterAlphabet } from "storefront/utils/strings";
import { Mbti } from "storefront/features/personality/models/mbti";
// ui
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// ----------------------------------------------------------------------

const Header = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export default function MyPersonality() {
  const [mbtiResultState, setMbtiResultState] = useRecoilState(mbtiResultAtom);
  const setMbtiListState = useSetRecoilState(mbtiListAtom);
  const isValid: boolean = filterAlphabet(mbtiResultState).length === 4;

  const { data: me } = useSWR("api/me", getMe);

  const mbti = new Mbti(defaultMbtiList, defaultMbtiResult);

  const activeDefaultClickableCard = (mbti: Mbti) => {
    if (!me?.personality) return;
    for (const p of me?.personality) {
      mbti.set(p as TMbtiKey);
      setMbtiResultState(mbti.result);
      setMbtiListState(mbti.list);
    }
  };

  useEffect(() => {
    activeDefaultClickableCard(mbti);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [me?.personality]);

  const {
    show: showSuccess,
    isOpen,
    Snackbar: SuccessSnackbar,
  } = useSnackbar({
    title: "저장되었습니다.",
    severity: "success",
    autoHideDuration: 3000,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const successSnackbar = useMemo(() => <SuccessSnackbar />, [isOpen]);

  const handleClickSave = (): void => {
    const personality = filterAlphabet(mbtiResultState);
    if (!isValid) {
      alert("성격유형을 모두 선택해주세요.");
      return;
    }
    mutate("/api/me", updateUser({ personality }));
    showSuccess();
  };

  return (
    <Card sx={{ p: 4, position: "static" }}>
      <Header>
        <Typography
          aria-label="성격유형을 선택해주세요"
          variant="h5"
          sx={{ letterSpacing: "1px", marginY: 4 }}
        >
          성격유형을 선택해주세요😀 {mbtiResultState}
        </Typography>
        <Button
          role="button"
          aria-label="성격유형 저장 버튼"
          variant="contained"
          size="small"
          onClick={handleClickSave}
        >
          저장
        </Button>
      </Header>

      <PersonalityCardList mbti={mbti} />
      {isValid ? <PersonalityTabs /> : null}

      {successSnackbar}
    </Card>
  );
}
