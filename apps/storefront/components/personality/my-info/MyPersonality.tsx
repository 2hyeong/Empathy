"use client";

import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import dynamic from "next/dynamic";
// ui
import { Box, Button, Card, styled, Typography } from "ui";
// idl
import { User } from "idl/gen/typescript-fetch";
// component
import {
  GetMbtiByKey,
  Personality,
} from "storefront/components/personality/scripts/personality";
import PersonalityCardList from "./PersonalityCardList";
// hooks
import useSnackbar from "storefront/hooks/useSnackbar";
// api
import { getMe, updateUser } from "storefront/services/useUser";

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
  const { show: showSuccess, Snackbar: SuccessSnackbar } = useSnackbar({
    title: "저장되었습니다.",
    severity: "success",
    autoHideDuration: 3000,
  });

  // const { data: me } = useSWR<User, Error>("api/me", getMe);
  // const personality = me?.personality || "____";
  const activeDefaultClickableCard = (personality: string) => {
    for (let p of personality.split("")) {
      setSelected(GetMbtiByKey(p as Personality["key"]));
    }
  };

  useEffect(() => {
    activeDefaultClickableCard(personality);
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

    mutate("/api/me", updateUser({ personality: updatedPersonality }));
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
    </Card>
  );
}
