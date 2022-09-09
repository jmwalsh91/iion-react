import { Provider } from '@f8n/foundationkit-hooks'
import { RenderResult, cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactElement } from 'react'
import { afterEach } from 'vitest'
import { WagmiConfig } from 'wagmi'

import { QueryClientContext } from '../services/QueryClient'
import { wagmiClient } from '../services/WagmiClient'

afterEach(() => {
  cleanup()
})

const customRender = (
  ui: ReactElement
  /*   options: RenderOptions = {} */
): RenderResult =>
  render(ui, {
    wrapper: ({ children }) => (
      <WagmiConfig client={wagmiClient}>
        <Provider>
          <QueryClientContext>{children}</QueryClientContext>
        </Provider>{' '}
      </WagmiConfig>
    ),
  })

export * from '@testing-library/react'
export { customRender as render, userEvent }
