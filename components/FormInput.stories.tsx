import { Form } from "react-final-form"
import FormInput from "components/FormInput"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof FormInput> = {
  title: "Components/FormInput",
  component: FormInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: ({ ...args }) => (
    <Form
      onSubmit={() => console.log("submitted")}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormInput {...args} />
        </form>
      )}
    />
  ),
} satisfies Meta<typeof FormInput>

export default meta
type Story = StoryObj<typeof FormInput>

export const TextInput: Story = {
  args: {
    id: "textInput",
    inputName: "Text Input",
    inputType: "text",
    withHeading: true,
  },
}
// export const NumberInput: Story = {
//   args: {
//     id: "numberInput",
//     inputName: "Number Input",
//     inputType: "number",
//     withHeading: true,
//   },
// }
export const PasswordInput: Story = {
  args: {
    id: "passwordInput",
    inputName: "Password",
    inputType: "password",
    withHeading: true,
  },
}
