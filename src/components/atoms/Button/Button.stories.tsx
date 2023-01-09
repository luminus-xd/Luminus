import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Button } from "./Button";

export default { component: Button } as ComponentMeta<typeof Button>;

export const Index: ComponentStoryObj<typeof Button> = {
  args: {
    href: "/",
    children: "Button",
  },
};
