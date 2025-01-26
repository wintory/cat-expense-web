import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('should render the Navbar component', () => {
    const { getByText } = render(<Navbar />)

    const navbar = getByText('Cat Expense')

    expect(navbar).toBeInTheDocument()
  })

  it('should render the Navbar component with  image', () => {
    const { getByAltText } = render(<Navbar />)

    const catImage = getByAltText('image')

    expect(catImage).toBeInTheDocument()
  })
})
