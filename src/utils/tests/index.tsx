import {
  RenderOptions,
  RenderResult,
  cleanup,
  render,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactElement } from 'react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

const customRender = (
  ui: ReactElement,
  options: RenderOptions = {}
): RenderResult =>
  render(ui, {
    wrapper: ({ children }) => <div> {children} </div>,
    ...options,
  })

export * from '@testing-library/react'
export { customRender as render, userEvent }
