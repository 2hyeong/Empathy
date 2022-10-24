import React from "react";
import { CardContent, ClickableCard, Divider, Grid, Typography } from "ui";
import {
  GetSelectedPersonality,
  Personalities,
  Personality,
} from "storefront/components/personality/personality";

export default function PersonalityList() {
  const [selected, setSelected] = React.useState("____");

  const handleClickableCardClicked = (personality: Personality) => {
    setSelected(GetSelectedPersonality(personality.key));
  };

  return (
    <>
      <Typography
        variant="h5"
        sx={{ marginY: 4 }}
        data-testid="personality-selected-typography"
      >
        성격 유형을 선택해주세요. {selected}
      </Typography>
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
