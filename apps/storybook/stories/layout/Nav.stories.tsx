import { ComponentMeta, ComponentStory } from "@storybook/react";
import NavComponent from "storefront/components/layout/nav";

export default {
  title: "Empathy/Layout",
  component: NavComponent,
} as ComponentMeta<typeof NavComponent>;

const Template: ComponentStory<typeof NavComponent> = () => <NavComponent />;

export const Nav = Template.bind({});
