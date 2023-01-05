import { ComponentProps, ReactNode } from 'react'
import { TooltipPortal } from '@radix-ui/react-tooltip'

import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipRoot,
  TooltipTrigger,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipRoot> {
  trigger: ReactNode
  content: string
}

export function Tooltip({ trigger, content }: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipRoot>
        <TooltipTrigger asChild>{trigger}</TooltipTrigger>

        <TooltipPortal>
          <TooltipContent sideOffset={5}>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
