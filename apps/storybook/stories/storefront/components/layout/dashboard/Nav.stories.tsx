import { ComponentMeta, ComponentStory } from "@storybook/react";
import NavComponent from "storefront/components/layout/dashboard/nav";
import { action } from "@storybook/addon-actions";

export default {
  title: "Storefront/Personality/Layouts/Dashboard",
  component: NavComponent,
} as ComponentMeta<typeof NavComponent>;

const Template: ComponentStory<typeof NavComponent> = (args) => {
  return <NavComponent {...args} onCloseNav={action("onCloseNav")} />;
};

export const Nav = Template.bind({});
Nav.args = {
  openNav: true,
};
