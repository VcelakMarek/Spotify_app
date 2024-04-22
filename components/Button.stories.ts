import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import Button from "components/Button"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: "primary",
    disabled: false,
    children: "Button",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    disabled: false,
    children: "Button",
  },
}
