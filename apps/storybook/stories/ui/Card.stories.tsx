import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Box, Card, ClickableCard, Typography } from "ui";

export default {
  title: "empathy/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
  return (
    <Box sx={{ padding: 2 }}>
      <Card {...args} sx={{ width: 250, height: 150 }}>
        <Box sx={{ width: "100%", height: "100%" }} />
      </Card>
    </Box>
  );
};

export const Base = Template.bind({});

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
          <Box sx={{ width: "100%", height: "100%" }}>Selected</Box>
        </ClickableCard>

        <ClickableCard
          sx={{ width: 250, height: 150 }}
          isActive={isActive2}
          onClick={() => isSetActive2(!isActive2)}
        >
          <Box sx={{ width: "100%", height: "100%" }}>Unselected(Normal)</Box>
        </ClickableCard>
      </Box>
    </Box>
  );
};

export const Clickable = ClickableCardTemplate.bind({});
