import { render } from '@testing-library/react'
import { screen } from '@testing-library/react'
import { it } from 'vitest'
import { describe } from 'vitest'

import Index from '../../routes/Index'

describe('landing page', () => {
  it('should render the landing page', () => {
    render(<Index />)
    expect(screen.getByText('Browse Featured Collections.')).toBeInTheDocument()
  })
})
