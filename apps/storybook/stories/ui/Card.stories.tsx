import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ClickableCard from "ui/components/ClickableCard";

export default {
  title: "ui/Card",
  component: ClickableCard,
} as ComponentMeta<typeof ClickableCard>;

const ClickableCardTemplate: ComponentStory<typeof ClickableCard> = () => {
  const [isActive1, isSetActive1] = useState(true);
  const [isActive2, isSetActive2] = useState(false);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography sx={{ paddingBottom: 2 }}>
        You can change the status by clicking.
      </Typography>
      <Box sx={{ display: "flex" }}>
        <ClickableCard
          isActive={isActive1}
          onClick={() => isSetActive1(!isActive1)}
          sx={{ width: 250, height: 150, marginRight: 2 }}
          data-testid="selected"
        >
          <Box sx={{ width: "100%", height: "100%" }}>
            Selected (opacity: 1)
          </Box>
        </ClickableCard>

        <ClickableCard
          sx={{ width: 250, height: 150 }}
          isActive={isActive2}
          onClick={() => isSetActive2(!isActive2)}
        >
          <Box sx={{ width: "100%", height: "100%" }}>
            Normal (opacity: 0.5)
          </Box>
        </ClickableCard>
      </Box>
    </Box>
  );
};

export const Clickable = ClickableCardTemplate.bind({});
