import * as Toast from '@radix-ui/react-toast'

import { keyframes, styled } from '../../styles'

export const ToastContainer = styled(Toast.Provider, {})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,

  margin: 0,
  padding: '$8',
  outline: 'none',

  width: 360,
  maxWidth: '100vw',

  listStyle: 'none',
  zIndex: 9999,
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${20}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${20}px))` },
})

export const ToastRoot = styled(Toast.Root, {
  position: 'relative',

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  padding: '$2 $5',
  border: '1px solid $gray600',
  borderRadius: '$sm',

  backgroundColor: '$gray800',

  fontFamily: '$default',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${swipeOut} 100ms ease-in`,
  },

  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },

  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  marginBottom: '$1',

  color: '$white',

  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
  display: 'block',

  color: '$gray200',

  fontSize: '$sm',
  lineHeight: '$base',

  '&:first-letter': {
    textTransform: 'uppercase',
  },
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',

  position: 'absolute',
  top: '$4',
  right: '$4',

  color: '$gray200',

  cursor: 'pointer',

  '&:hover': {
    color: '$white',
  },

  svg: {
    width: '$4',
    height: '$4',
  },
})
