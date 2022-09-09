import { screen } from '@testing-library/react'
import { it } from 'vitest'
import { describe } from 'vitest'

import Index from '../../routes/Index'

import { render } from './index'

describe('landing page', () => {
  it('should render the landing page', () => {
    render(<Index />)
    expect(screen.getByText('Browse Featured Collections.')).toBeInTheDocument()
  })
})
