import { ComponentMeta, ComponentStory } from "@storybook/react";
import PersonalityCardListSkelton from "storefront/components/personality/card/Skeleton";

export default {
  title: "Storefront/Personality/CardList",
  component: PersonalityCardListSkelton,
} as ComponentMeta<typeof PersonalityCardListSkelton>;

const LoadingTemplate: ComponentStory<
  typeof PersonalityCardListSkelton
> = () => {
  return <PersonalityCardListSkelton />;
};

export const loading = LoadingTemplate.bind({});
