import { ComponentMeta, ComponentStory } from "@storybook/react";
import Skeleton from "storefront/components/personality/card/Skeleton";

export default {
  title: "Storefront/Personality/Card",
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = () => {
  return <Skeleton />;
};

export const Loading = Template.bind({});
