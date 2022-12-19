import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchInputComponent from "ui/components/SearchInput";

export default {
  title: "Ui/Components",
  component: SearchInputComponent,
} as ComponentMeta<typeof SearchInputComponent>;

const SearchInputTemplate: ComponentStory<typeof SearchInputComponent> = () => {
  return <SearchInputComponent />;
};

export const SearchInput = SearchInputTemplate.bind({});
