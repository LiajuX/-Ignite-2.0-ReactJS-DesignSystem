import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Tooltip, TooltipProps } from '@liajux-ignite-ui/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    content: '21 de Outubro - Indisponível',
    trigger: (
      <Box>
        <Text>Hover to show tooltip default component</Text>
      </Box>
    ),
  },
  argTypes: {},
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
