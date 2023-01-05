import { useState } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps, Button } from '@liajux-ignite-ui/react'

export default {
  title: 'Data Display/Toast',
  component: DefaultToast,
  args: {},
  argTypes: {},
} as Meta<ToastProps>

function DefaultToast() {
  const [isToastOpen, setIsToastOpen] = useState(false)

  function toggleToastOpening() {
    if (!isToastOpen) {
      setIsToastOpen(true)
    } else {
      setIsToastOpen(false)
    }
  }

  return (
    <>
      <Button onClick={toggleToastOpening}>Default Toast</Button>

      <Toast open={isToastOpen} onOpenChange={setIsToastOpen} />
    </>
  )
}

export const Primary: StoryObj<ToastProps> = {}
