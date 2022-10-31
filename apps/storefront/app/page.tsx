"use client";
import { useState } from "react";
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
import { usersApi } from "storefront/lib/typescript-fetch";

async function getUser() {
  const data = await usersApi.getUsers();
  return data;
}

async function updateUser(personality: string) {
  const data = await usersApi.updateUsers({ body: personality });
  return data;
}

export default function Page() {
  const [selected, setSelected] = useState("____");

  const handleClickableCardClicked = (personality: Personality) => {
    setSelected(GetSelectedPersonality(personality.key));
  };

  const onClickSave = async () => {
    const selectedChar = selected.replace(/[^a-zA-Z]/g, "");
    if (selectedChar.length !== 4) {
      alert("성격유형을 모두 선택해주세요.");
      return;
    }
    // await update({ personality });
    console.log(selectedChar);
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
          <Button variant="outlined" color="info" onClick={() => onClickSave()}>
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
              sx={{ textAlign: "center" }}
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
    </>
  );
}
