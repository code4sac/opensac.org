import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["fill", "soft", "outline"],
      control: { type: "select" },
    },
    color: {
      options: ["warning", "danger", "info", "success", "secondary", "primary"],
      control: { type: "select" },
    },
    size: {
      options: ["l", "m", "s"],
      control: { type: "select" },
    },
    state: {
      options: ["hovered", "disabled", "enabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Button",
    variant: "fill",
    color: "warning",
    size: "l",
    state: "hovered",
    className: {},
    divClassName: {},
  },
};
