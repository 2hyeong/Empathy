import { ComponentMeta, ComponentStory } from "@storybook/react";
import HeaderComponent from "storefront/components/layout/dashboard/header";
import { action } from "@storybook/addon-actions";

export default {
  title: "Storefront/Personality/Layouts/Dashboard",
  component: HeaderComponent,
} as ComponentMeta<typeof HeaderComponent>;

const Template: ComponentStory<typeof HeaderComponent> = () => {
  return <HeaderComponent onOpenNav={action("onOpenNav")} />;
};

export const Header = Template.bind({});
