import type { ComponentProps } from 'react'
import Label from './Label'
import type { Meta, StoryObj } from '@storybook/react-vite'

type StoryProps = ComponentProps<typeof Label>

const meta: Meta<StoryProps> = {
  component: Label,
  title: 'Atoms/Label',
  argTypes: {
    as: {
      control: {
        type: 'select',
        options: ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
      defaultValue: 'span',
    },
    className: {
      control: 'text',
      defaultValue: 'label',
    },
    id: {
      control: 'text',
      defaultValue: 'label-id',
    },
  },
} satisfies Meta<StoryProps>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    as: 'span',
    children: 'Default Label',
  },
}
