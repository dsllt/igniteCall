import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@dsllt-ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size={'sm'}>Observations: </Text>
          {Story()}
        </Box>
      )
    },
  ],
  args: {},
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type any observation',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
