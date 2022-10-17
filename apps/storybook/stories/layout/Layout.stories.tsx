import { ComponentMeta, ComponentStory } from "@storybook/react";
import LayoutComponent from "web/components/layout";

export default {
  title: "Empathy/Layout",
  component: LayoutComponent,
} as ComponentMeta<typeof LayoutComponent>;

const Template: ComponentStory<typeof LayoutComponent> = (args) => (
  <LayoutComponent {...args} />
);

export const Layout = Template.bind({});
