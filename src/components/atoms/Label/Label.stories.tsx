import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import Label from './Label'

type StoryProps = ComponentProps<typeof Label>

const meta: Meta<StoryProps> = {
  component: Label,
  title: 'Atoms/Label',
  argTypes: {
    as: {
      control: {
        type: 'select',
      },
      options: ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      defaultValue: 'span',
    },
  },
} satisfies Meta<StoryProps>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    as: 'h4',
    children: 'Default Label',
  },
}
