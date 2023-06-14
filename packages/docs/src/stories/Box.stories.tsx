import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@dsllt-ignite-ui/react'

export default {
  title: 'Surface/Box',
  tags: ['autodocs'],
  component: Box,
  args: {
    children: <Text>Testando o elemento box</Text>,
  },
  argTypes: {
    children: {
      control: 'null',
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
