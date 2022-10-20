import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Box, Card, ClickableCard, Typography } from "ui";
import { userEvent, within } from "@storybook/testing-library";

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
  return (
    <Box sx={{ padding: 2 }}>
      <Typography sx={{ paddingBottom: 2 }}>
        You can change the status by clicking.
      </Typography>
      <Box sx={{ display: "flex" }}>
        <ClickableCard
          sx={{ width: 250, height: 150, marginRight: 2 }}
          data-testid="selected"
        >
          <Box sx={{ width: "100%", height: "100%" }}>
            <Typography>Selected</Typography>
          </Box>
        </ClickableCard>

        <ClickableCard sx={{ width: 250, height: 150 }}>
          <Box sx={{ width: "100%", height: "100%" }}>
            <Typography>Unselected(Normal)</Typography>
          </Box>
        </ClickableCard>
      </Box>
    </Box>
  );
};

export const Clickable = ClickableCardTemplate.bind({});
Clickable.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(await canvas.findByTestId("selected"));
};
