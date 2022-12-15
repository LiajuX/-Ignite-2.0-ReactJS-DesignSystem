import { ComponentProps } from 'react'

import { styled } from '../styles'

export const TextArea = styled('textarea', {
  display: 'flex',
  alignItems: 'baseline',

  minHeight: 80,

  boxSizing: 'border-box',
  padding: '$3 $4',
  border: '2px solid $gray900',
  borderRadius: '$sm',

  color: '$gray100',
  backgroundColor: '$gray900',

  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: 'regular',

  resize: 'vertical',

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    resize: 'none',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
