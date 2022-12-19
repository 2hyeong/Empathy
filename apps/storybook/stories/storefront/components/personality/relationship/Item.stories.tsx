import { ComponentMeta, ComponentStory } from "@storybook/react";
import RelationshipItem from "storefront/components/personality/relationship/Item";

export default {
  title: "Storefront/Personality/Relationship",
  component: RelationshipItem,
} as ComponentMeta<typeof RelationshipItem>;

const Template: ComponentStory<typeof RelationshipItem> = (args) => {
  return <RelationshipItem item={args.item} />;
};

export const Item = Template.bind({});
Item.args = {
  item: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iusto, tempora, cupiditate quisquam nulla quod eum iste sapiente atque eveniet, optio cumque dignissimos omnis necessitatibus facere ut dolores provident quae.",
};
