import { ComponentMeta, ComponentStory } from "@storybook/react";
import AccountPopoverComponent from "storefront/components/auth/AccountPopover";

export default {
  title: "Storefront/Auth",
  component: AccountPopoverComponent,
} as ComponentMeta<typeof AccountPopoverComponent>;

const LoadingTemplate: ComponentStory<typeof AccountPopoverComponent> = () => {
  return <AccountPopoverComponent />;
};

export const AccountPopover = LoadingTemplate.bind({});
