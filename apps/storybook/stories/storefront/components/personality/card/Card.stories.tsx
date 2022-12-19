import { ComponentMeta, ComponentStory } from "@storybook/react";
import PersonalityCard from "storefront/components/personality/card/PersonalityCard";

export default {
  title: "Storefront/Personality/Card",
  component: PersonalityCard,
} as ComponentMeta<typeof PersonalityCard>;

const Template: ComponentStory<typeof PersonalityCard> = (args) => {
  return <PersonalityCard personality={args.personality} />;
};

export const Card = Template.bind({});
Card.args = {
  personality: {
    key: "E",
    title: "외향형",
    caption: "사교적이며 활동적인",
    type: "M",
    color: "primary",
    selected: false,
  },
};
