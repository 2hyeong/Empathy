import { ComponentMeta, ComponentStory } from "@storybook/react";
import SidebarComponent from "storefront/components/layout/sidebar";

export default {
  title: "Empathy/Layout",
  component: SidebarComponent,
} as ComponentMeta<typeof SidebarComponent>;

const Template: ComponentStory<typeof SidebarComponent> = (args) => (
  <SidebarComponent {...args} />
);

export const Sidebar = Template.bind({});
