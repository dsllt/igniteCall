import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ProviderContainer = styled(Toast.Provider, {
  '.calendarDay': {
    fontFamily: '$default',
    color: '$white',
    background: '$gray600',
    border: 0,
    borderRadius: '6px',
    padding: '$4 $4',
    cursor: 'pointer',
  },
})

export const CalendarDayContainer = styled('button', {
  fontFamily: '$default',
  color: '$white',
  background: '$gray600',
  border: 0,
  borderRadius: '6px',
  padding: '$4 $4',
  cursor: 'pointer',
  width: 'fit-content',
})

export const ToastContainer = styled(Toast.Root, {
  background: '$gray800',
  padding: '$4 $5',
  border: '1px solid $gray600',
  borderRadius: '6px',
  maxWidth: '360px',
})

export const ToastHeading = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$lg',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontFamily: '$default',
  fontSize: '$sm',
  marginTop: '$2',
})
export const ToastAction = styled(Toast.Action, {
  color: '$gray200',
})
export const ToastViewport = styled(Toast.Viewport, {})
