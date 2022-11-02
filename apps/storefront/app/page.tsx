"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  CardContent,
  ClickableCard,
  Divider,
  Grid,
  Typography,
} from "ui";
import {
  GetSelectedPersonality,
  Personalities,
  Personality,
} from "storefront/components/personality/personality";
import { getMe, updateUser } from "storefront/lib/api/useUser";
import useSWR, { mutate } from "swr";
import useSnackbar from "storefront/lib/hooks/useSnackbar";

export default function Page() {
  const [selected, setSelected] = useState("____");
  const { show: showSuccess, Snackbar: SuccessSnackbar } = useSnackbar({
    title: "성격이 등록되었습니다.",
    severity: "success",
    autoHideDuration: 3000,
  });

  const { data: me, error } = useSWR("api/me", getMe);
  if (error) console.error(error);

  useEffect(() => {
    if (me?.personality) {
      activeDefaultClickableCard(me.personality);
    }
  }, [me?.personality]);

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
      "api/me",
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
    <>
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
            data-testid="personality-selected-typography"
          >
            성격 유형을 선택해주세요. {selected}
          </Typography>
        </Box>
        <Box>
          <Button
            variant="outlined"
            color="info"
            onClick={() => handleClickSave()}
          >
            <Typography>저장하기</Typography>
          </Button>
        </Box>
      </Box>
      <Grid container spacing={1} columns={8}>
        {Personalities.map((personality) => (
          <Grid
            item
            xs={2}
            key={personality.key}
            data-testid="personality-clickable-card"
            onClick={() => handleClickableCardClicked(personality)}
          >
            <ClickableCard
              sx={{ textAlign: "center", height: "100%" }}
              isActive={personality.selected}
            >
              <CardContent sx={{ padding: 0 }}>
                <Typography variant="h3">{personality.key}</Typography>
              </CardContent>
              <Divider variant="middle" sx={{ margin: 2 }} />
              <Typography variant="body1">{personality.title}</Typography>
              <Typography variant="caption">{personality.caption}</Typography>
            </ClickableCard>
          </Grid>
        ))}
      </Grid>
      <SuccessSnackbar />
    </>
  );
}
