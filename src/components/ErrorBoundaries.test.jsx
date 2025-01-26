import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ErrorBoundaries from './ErrorBoundaries'

describe('ErrorBoundaries', () => {
  it('should render the error message and try again button', () => {
    const { getByText } = render(<ErrorBoundaries />)

    const errorMessage = getByText('Something went wrong')
    const tryAgainButton = getByText('Try again')

    expect(errorMessage).toBeInTheDocument()
    expect(tryAgainButton).toBeInTheDocument()
  })
})
