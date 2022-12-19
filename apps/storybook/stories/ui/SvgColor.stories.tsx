import { ComponentMeta, ComponentStory } from "@storybook/react";
import SvgColorComponent from "ui/components/svg-color/SvgColor";
import Repo from "../assets/repo.svg";

export default {
  title: "Ui/Components",
  component: SvgColorComponent,
} as ComponentMeta<typeof SvgColorComponent>;

const SvgColorTemplate: ComponentStory<typeof SvgColorComponent> = () => {
  return <SvgColorComponent src={Repo} />;
};

export const SvgColor = SvgColorTemplate.bind({});
