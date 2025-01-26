import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import CatExpenseTable from './CatExpenseTable'

describe('CatExpenseTable', () => {
  const expenses = [
    {
      id: 1,
      name: 'Expense 1',
      category: 'Category 1',
      displayAmount: '$10',
      isHighlighted: false,
    },
    {
      id: 2,
      name: 'Expense 2',
      category: 'Category 2',
      displayAmount: '$20',
      isHighlighted: true,
    },
  ]

  it('should renders the table with correct data', () => {
    const { getByText } = render(
      <CatExpenseTable expenses={expenses} onSelectItem={vi.fn()} />
    )

    expect(getByText('Item')).toBeInTheDocument()
    expect(getByText('Category')).toBeInTheDocument()
    expect(getByText('Amount')).toBeInTheDocument()

    expect(getByText('Expense 1')).toBeInTheDocument()
    expect(getByText('Category 1')).toBeInTheDocument()
    expect(getByText('$10')).toBeInTheDocument()

    expect(getByText('Expense 2')).toBeInTheDocument()
    expect(getByText('Category 2')).toBeInTheDocument()
    expect(getByText('$20')).toBeInTheDocument()
  })

  it('should calls onSelectItem when checkbox is clicked', () => {
    const onSelectItem = vi.fn()
    const { getByTestId } = render(
      <CatExpenseTable expenses={expenses} onSelectItem={onSelectItem} />
    )

    getByTestId('checkbox-expense-2').click()

    expect(onSelectItem).toHaveBeenCalled()
  })
})
