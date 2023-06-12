import { ComponentProps } from 'react'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipPortal,
  TooltipRoot,
  TooltipText,
  TooltipTrigger,
  TooltipTriggerText,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  day: number
  month: string
  status: 'available' | 'unavailable'
}

export function Tooltip({ day, month, status }: TooltipProps) {
  function translateStatus() {
    if (status === 'available') return 'Disponível'
    if (status === 'unavailable') return 'Indisponível'
  }
  return (
    <TooltipContainer>
      <TooltipRoot>
        <TooltipTrigger asChild>
          <TooltipTriggerText status={status}>{day}</TooltipTriggerText>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipText>
            {day} de {month} - {translateStatus()}
            <TooltipArrow />
          </TooltipText>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
