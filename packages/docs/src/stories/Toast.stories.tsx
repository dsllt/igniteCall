import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@dsllt-ignite-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    year: 2023,
    month: 5,
    day: 1,
    hour: 16,
    minute: 30,
  },
  argTypes: {},
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
