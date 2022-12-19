import Box from "@mui/material/Box";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Scrollbar as ScrollbarComponent } from "ui/components/scrollbar/Scrollbar";

export default {
  title: "Ui/Components",
  component: ScrollbarComponent,
  parameters: { controls: { exclude: /sx/i } },
} as ComponentMeta<typeof ScrollbarComponent>;

const ScrollbarTemplate: ComponentStory<typeof ScrollbarComponent> = () => {
  return (
    <ScrollbarComponent>
      <Box sx={{ height: "800px" }} />
    </ScrollbarComponent>
  );
};

export const Scrollbar = ScrollbarTemplate.bind({});
