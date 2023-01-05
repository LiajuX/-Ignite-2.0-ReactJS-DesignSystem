import { ComponentProps, useRef } from 'react'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { X } from 'phosphor-react'

import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  open: boolean
}

export function Toast({ open, ...rest }: ToastProps) {
  const eventDateRef = useRef(new Date())

  function formatDate(date: Date) {
    return format(date, "EEEE, d 'de' MMMM 'às' H'h'", { locale: ptBR })
  }

  return (
    <ToastContainer swipeDirection="right">
      <ToastRoot open={open} {...rest}>
        <div>
          <ToastTitle>Agendamento realizado</ToastTitle>

          <ToastDescription asChild>
            <time dateTime={eventDateRef.current.toISOString()}>
              {formatDate(eventDateRef.current)}
            </time>
          </ToastDescription>
        </div>

        <ToastClose aria-label="Close" asChild>
          <X />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
