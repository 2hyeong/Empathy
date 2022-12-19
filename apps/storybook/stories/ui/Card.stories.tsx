import { ComponentMeta, ComponentStory } from "@storybook/react";
import ClickableCardComponent from "ui/components/ClickableCard";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Ui/Components",
  component: ClickableCardComponent,
  parameters: {
    controls: {
      include: /isActive/i,
    },
  },
} as ComponentMeta<typeof ClickableCardComponent>;

const ClickableCardTemplate: ComponentStory<typeof ClickableCardComponent> = ({
  ...args
}) => {
  const [{ isActive }, updateArgs] = useArgs();

  return (
    <ClickableCardComponent
      {...args}
      isActive={isActive}
      onClick={() => updateArgs({ isActive: !isActive })}
      sx={{ width: 250, height: 150, marginRight: 2 }}
    >
      Clickable Card
    </ClickableCardComponent>
  );
};

export const ClickableCard = ClickableCardTemplate.bind({});
ClickableCard.args = { isActive: true };
