import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  display: 'flex',
  alignItems: 'baseline',

  boxSizing: 'border-box',
  padding: '$3 $4',
  border: '2px solid $gray900',
  borderRadius: '$sm',

  backgroundColor: '$gray900',

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  color: '$gray400',

  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: 'regular',
})

export const Input = styled('input', {
  width: '100%',

  border: 0,

  color: '$white',
  background: 'transparent',

  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: 'regular',

  '&:focus': {
    outline: 0,
  },

  '&:placeholder': {
    color: '$gray400',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
})
