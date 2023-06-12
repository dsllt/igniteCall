import { useRef, useState } from 'react'
import {
  CalendarDayContainer,
  ProviderContainer,
  ToastAction,
  ToastContainer,
  ToastDescription,
  ToastHeading,
  ToastTitle,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps {
  day: number
  month: number
  year: number
  hour: number
  minute: number
}

export function Toast({ day, month, year, hour, minute }: ToastProps) {
  const [open, setOpen] = useState(false)
  const eventDateRef = useRef(new Date(year, month, day, hour, minute))
  const timerRef = useRef(0)

  function onSelectDate() {
    setOpen(false)
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      eventDateRef.current = new Date(year, month, day, hour, minute)
      setOpen(true)
    }, 100)
  }

  function setDescription(date: Date) {
    const prettyDateText = prettyDate(date)
    const weekday = prettyDateText.split(',', 1)
    const weekdayCapitalized =
      weekday[0].charAt(0).toUpperCase() + weekday[0].slice(1)
    const day = prettyDateText.split(' ')[1]
    const month = prettyDateText.split(' ')[3]
    const monthCapitalized = month.charAt(0).toUpperCase() + month.slice(1)
    const time = prettyDateText.split(' ')[5].split(':')
    if (time[1] === '00') {
      return `${weekdayCapitalized}, ${day} de ${monthCapitalized} às ${time[0]}h`
    } else {
      return `${weekdayCapitalized}, ${day} de ${monthCapitalized} às ${time[0]}h${time[1]}min`
    }
  }
  setDescription(eventDateRef.current)
  return (
    <ProviderContainer>
      <CalendarDayContainer onClick={onSelectDate}>
        {returnOnlyDay(eventDateRef.current).split('/', 1)}
      </CalendarDayContainer>
      <ToastContainer open={open} onOpenChange={setOpen}>
        <ToastHeading>
          <ToastTitle>Agendamento realizado</ToastTitle>
          <ToastAction asChild altText="close toast">
            <X size={18} />
          </ToastAction>
        </ToastHeading>

        <ToastDescription>
          {setDescription(eventDateRef.current)}
        </ToastDescription>
      </ToastContainer>
      <ToastViewport />
    </ProviderContainer>
  )
}

function prettyDate(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date)
}

function returnOnlyDay(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
  }).format(date)
}
