import { ComponentMeta, ComponentStory } from "@storybook/react";
import SignInComponent from "storefront/components/auth/SignIn";

export default {
  title: "Storefront/Auth",
  component: SignInComponent,
} as ComponentMeta<typeof SignInComponent>;

const SignInTemplate: ComponentStory<typeof SignInComponent> = () => {
  return <SignInComponent />;
};

export const SignIn = SignInTemplate.bind({});
