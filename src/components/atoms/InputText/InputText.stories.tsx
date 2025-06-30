import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import InputText from './InputText'

type StoryProps = ComponentProps<typeof InputText>

const meta: Meta<typeof InputText> = {
  title: 'Atoms/InputText',
  component: InputText,
  argTypes: {
    // Add your argTypes here
  },
} satisfies Meta<StoryProps>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // Add your default args here
  },
}