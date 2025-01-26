import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import FullscreenLoader from './FullscreenLoader'

describe('FullscreenLoader', () => {
  it('should render the fullscreen loader', () => {
    const { getByTestId } = render(<FullscreenLoader />)

    const fullscreenLoader = getByTestId('fullscreen-loader')

    expect(fullscreenLoader).toBeInTheDocument()
  })
})
