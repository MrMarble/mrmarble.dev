import { Meta, Story } from "@storybook/react";

import { Heading, HeadingProps } from "./Heading";

const Template: Story<HeadingProps> = (args: HeadingProps) => (
  <Heading {...args} />
);

export default {
  title: "Components/Heading",
  component: Heading,
} as Meta;

export const H1 = Template.bind({});
H1.args = {
  size: 1,
  children: "Alvaro Tinoco",
};

export const H2 = Template.bind({});
H2.args = {
  size: 2,
  children: "Alvaro Tinoco",
};
export const H3 = Template.bind({});
H3.args = {
  size: 3,
  children: "Alvaro Tinoco",
};
export const H4 = Template.bind({});
H4.args = {
  size: 4,
  children: "Alvaro Tinoco",
};
export const H5 = Template.bind({});
H5.args = {
  size: 5,
  children: "Alvaro Tinoco",
};
export const H6 = Template.bind({});
H6.args = {
  size: 6,
  children: "Alvaro Tinoco",
};
