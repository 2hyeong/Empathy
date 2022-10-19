import { ComponentMeta, ComponentStory } from "@storybook/react";
import AppbarComponent from "storefront/components/layout/appbar";

export default {
  title: "Empathy/Layout",
  component: AppbarComponent,
} as ComponentMeta<typeof AppbarComponent>;

const Template: ComponentStory<typeof AppbarComponent> = () => (
  <AppbarComponent />
);

export const Appbar = Template.bind({});
