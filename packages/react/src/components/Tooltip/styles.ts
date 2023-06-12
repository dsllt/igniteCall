import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Provider, {})

export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {})

export const TooltipTriggerText = styled('span', {
  marginLeft: '$20',
  fontFamily: '$default',
  color: '$white',
  background: '$gray600',
  border: 0,
  borderRadius: '6px',
  padding: '$4 $4',
  cursor: 'pointer',

  variants: {
    status: {
      available: {
        background: 'transparent',
      },
      unavailable: {
        background: '$gray600',
      },
    },
  },
})

export const TooltipPortal = styled(Tooltip.Portal, {})
export const TooltipArrow = styled(Tooltip.Arrow, {})

export const TooltipText = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  border: 0,
  width: 'fit-content',
  height: 'fit-content',
  padding: '$3 $4',
  color: '$gray100',
  fontFamily: '$default',
  defaultVariants: {
    size: 'md',
  },
})
