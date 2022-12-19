import { ComponentMeta, ComponentStory } from "@storybook/react";
import TabsComponent from "storefront/components/personality/tabs";

export default {
  title: "Storefront/Personality/Tabs",
  component: TabsComponent,
} as ComponentMeta<typeof TabsComponent>;

const Template: ComponentStory<typeof TabsComponent> = () => {
  return <TabsComponent />;
};

export const Tabs = Template.bind({});
