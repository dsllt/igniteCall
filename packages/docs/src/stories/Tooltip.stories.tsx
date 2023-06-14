import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@dsllt-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    day: 28,
    month: 'Outubro',
    status: 'unavailable',
  },
  argTypes: {},
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
export const Unavailable: StoryObj<TooltipProps> = {
  args: {
    day: 21,
    month: 'Outubro',
    status: 'available',
  },
}
