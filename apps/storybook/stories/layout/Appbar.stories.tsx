import { ComponentMeta, ComponentStory } from "@storybook/react";
import AppbarComponent from "web/components/layout/Appbar";

export default {
  title: "Empathy/Layout",
  component: AppbarComponent,
} as ComponentMeta<typeof AppbarComponent>;

const Template: ComponentStory<typeof AppbarComponent> = () => (
  <AppbarComponent />
);

export const Appbar = Template.bind({});
