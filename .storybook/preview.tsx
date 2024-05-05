import React from "react"
import "../app/globals.css"
import { nunito } from "../utils/fonts"
import type { Preview } from "@storybook/react"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={`font-nunito ${nunito}`}>
        <Story />
      </div>
    ),
  ],
}

export default preview
