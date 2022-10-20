import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import AlignListComponent from "storefront/components/list/alignList";

export default {
  title: "Empathy/List",
  component: AlignListComponent,
} as ComponentMeta<typeof AlignListComponent>;

const Template: ComponentStory<typeof AlignListComponent> = () => {
  const items = [
    {
      name: "홍길동",
      personality: "ISTP",
    },
    {
      name: "오박사",
      personality: "ENFJ",
    },
  ];

  return <AlignListComponent items={items} />;
};

export const AlignList = Template.bind({});
