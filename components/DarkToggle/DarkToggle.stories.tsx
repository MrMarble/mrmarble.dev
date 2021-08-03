import { Meta } from "@storybook/react";

import { DarkToggle as Component, DarkToggleProps } from "./DarkToggle";

export default {
  title: "Components/DarkToggle",
  component: Component,
  args: {
    size: "4rem",
  },
} as Meta<DarkToggleProps>;

export const DarkToggle = (args: DarkToggleProps) => <Component {...args} />;
