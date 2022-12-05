"use client";

import { useEffect, useState } from "react";
import { Box, Button, Card, Grid, Typography } from "ui";
import {
  GetSelectedPersonality,
  Personalities,
  Personality,
} from "storefront/components/personality/personality";
import { getMe, updateUser } from "storefront/lib/api/useUser";
import useSWR, { mutate } from "swr";
import useSnackbar from "storefront/lib/hooks/useSnackbar";
import { useSession } from "next-auth/react";
import { User } from "idl/gen/typescript-fetch";
import PersonalityCard from "./personality-card";

export default function MyPersonality() {
  const [selected, setSelected] = useState("____");
  const { show: showSuccess, Snackbar: SuccessSnackbar } = useSnackbar({
    title: "성격이 등록되었습니다.",
    severity: "success",
    autoHideDuration: 3000,
  });

  const { data: me, error } = useSWR<User, Error>("api/me", getMe);
  if (error) console.error(error);

  const { data: session } = useSession();

  useEffect(() => {
    if (me?.personality) {
      activeDefaultClickableCard(me.personality);
    }
  }, [me?.personality]);

  // TODO: TEST & REFACTOR
  const updateUserProfile = () => {
    if (me) {
      const body: User = {};
      if (!me.gender) body.gender = me.gender;
      if (!me.birthday) body.birthday = me.birthday;
      if (!me.ageRange) body.ageRange = me.ageRange;
      if (!body.gender && !body.birthday && !body.ageRange) return;
      mutate("/api/me", updateUser(body));
    }
  };

  useEffect(() => {
    if (me && session) updateUserProfile();
  }, [me, session]);

  const activeDefaultClickableCard = (personality: string) => {
    for (let key of personality) {
      handleClickableCardClicked({ key } as Personality);
    }
  };

  const handleClickableCardClicked = (personality: Personality) => {
    setSelected(GetSelectedPersonality(personality.key));
  };

  const handleClickSave = () => {
    const selectedChar = selected.replace(/[^a-zA-Z]/g, "");
    const isPersonalityFullySelected = selectedChar.length === 4;

    if (!isPersonalityFullySelected) {
      alert("성격유형을 모두 선택해주세요.");
      return;
    }

    mutate(
      "/api/me",
      updateUser({
        personality: selectedChar,
      }),
      {
        revalidate: false,
      }
    );

    showSuccess();
  };

  return (
    <Card sx={{ p: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ marginY: 4 }}>
          <Typography
            variant="h5"
            sx={{ letterSpacing: "1px" }}
            data-testid="personality-selected-typography"
          >
            성격유형을 선택해주세요😀 {selected}
          </Typography>
        </Box>
        <Box>
          <Button variant="contained" size="small" onClick={handleClickSave}>
            저장
          </Button>
        </Box>
      </Box>
      <Grid container spacing={1} columns={8}>
        {Personalities.map((personality) => (
          <Grid
            item
            xs={4}
            lg={2}
            key={personality.key}
            data-testid="personality-clickable-card"
            onClick={() => handleClickableCardClicked(personality)}
          >
            <PersonalityCard personality={personality} />
          </Grid>
        ))}
      </Grid>
      <SuccessSnackbar />
    </Card>
  );
}
