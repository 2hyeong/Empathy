import { ComponentMeta, ComponentStory } from "@storybook/react";
import BingoItem from "storefront/components/personality/bingo/BingoItem";

export default {
  title: "Storefront/Personality/Bingo",
  component: BingoItem,
} as ComponentMeta<typeof BingoItem>;

const Template: ComponentStory<typeof BingoItem> = (args) => {
  return <BingoItem content={args.content} />;
};

export const Item = Template.bind({});
Item.args = {
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aut beatae mollitia fugiat ut sapiente impedit dolorum, maiores, ullam autem temporibus. Beatae dolore ex distinctio. Ex nostrum maiores velit fuga?",
};
