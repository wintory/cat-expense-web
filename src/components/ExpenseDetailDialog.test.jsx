import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ExpenseDetailDialog from './ExpenseDetailDialog'

describe('ExpenseDetailDialog', () => {
  const props = {
    register: vi.fn(),
    errors: {},
    setValue: vi.fn(),
    onCloseModal: vi.fn(),
  }

  it('should render the dialog with input fields and buttons', () => {
    const { getByPlaceholderText, getByText } = render(
      <ExpenseDetailDialog {...props} />
    )

    const nameInput = getByPlaceholderText('Enter expense name')
    const categoryDropdown = getByText('Select category')
    const amountInput = getByPlaceholderText('Enter item amount')
    const addButton = getByText('Add')

    expect(nameInput).toBeInTheDocument()
    expect(categoryDropdown).toBeInTheDocument()
    expect(amountInput).toBeInTheDocument()
    expect(addButton).toBeInTheDocument()
  })

  it('should update the category value when a category is selected', () => {
    const { getByText } = render(<ExpenseDetailDialog {...props} />)

    const categoryDropdown = getByText('Select category')
    categoryDropdown.click()

    const categoryOption = getByText('Food')
    categoryOption.click()

    const selectedCategory = getByText('Food')
    expect(selectedCategory).toBeInTheDocument()
  })

  it('should called setValue when Category selected', () => {
    const { getByTestId, getByText } = render(
      <ExpenseDetailDialog {...props} />
    )

    const addButton = getByTestId('add-button')
    addButton.click()

    const categoryOption = getByText('Furniture')
    categoryOption.click()

    expect(props.setValue).toHaveBeenCalledWith('category', 'furniture')
  })

  it('should display an error message when fields is empty', () => {
    const { getByText } = render(
      <ExpenseDetailDialog
        {...props}
        errors={{
          name: { message: 'Name is empty.' },
          category: { message: 'Category is empty.' },
          amount: { message: 'Amount is empty.' },
        }}
      />
    )

    expect(getByText('Name is empty.')).toBeInTheDocument()
    expect(getByText('Category is empty.')).toBeInTheDocument()
    expect(getByText('Amount is empty.')).toBeInTheDocument()
  })

  it('should display an error message when fields is empty', () => {
    const { getByText } = render(
      <ExpenseDetailDialog
        {...props}
        errors={{
          name: { message: 'Name is empty.' },
          category: { message: 'Category is empty.' },
          amount: { message: 'Amount is empty.' },
        }}
      />
    )

    expect(getByText('Name is empty.')).toBeInTheDocument()
    expect(getByText('Category is empty.')).toBeInTheDocument()
    expect(getByText('Amount is empty.')).toBeInTheDocument()
  })

  it('should called onCloseModal when click x button', () => {
    const { getByTestId } = render(<ExpenseDetailDialog {...props} />)

    const closeButton = getByTestId('close-button')
    closeButton.click()

    expect(props.onCloseModal).toHaveBeenCalled()
  })
})
