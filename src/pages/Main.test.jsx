import { describe, expect, it } from 'vitest'
import renderWithProviders from '../tests/renderWithProvider'
import MainPage from './Main'

describe('MainPage', () => {
  it('renders expense history and add expense button', () => {
    const { getByText, getByRole } = renderWithProviders(<MainPage />)

    const expenseHistoryText = getByText('Expense History')
    expect(expenseHistoryText).toBeInTheDocument()

    const addExpenseButton = getByRole('button', { name: 'Add Expense' })
    expect(addExpenseButton).toBeInTheDocument()
  })

  it('opens expense modal when add expense button is clicked', async () => {
    const { getByTestId, getByRole } = renderWithProviders(<MainPage />)

    const addExpenseButton = getByRole('button', { name: 'Add Expense' })
    await addExpenseButton.click()

    const expenseModal = getByTestId('expense-modal')
    expect(expenseModal).toBeInTheDocument()
  })
})
