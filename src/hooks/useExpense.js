import { useMemo, useState } from 'react'

const useExpense = () => {
  const [isOpenExpenseModal, setIsOpenExpenseModal] = useState(false)
  const [expenses, setExpenses] = useState([])
  const [selectedExpense, setSelectedExpense] = useState([])

  const handleAddExpense = (data) => {
    setIsOpenExpenseModal(false)
    setExpenses((prevExpenses) => {
      return [
        ...prevExpenses,
        {
          id: prevExpenses.length + 1,
          name: data?.name,
          category: data?.category,
          amount: data?.amount,
        },
      ]
    })
  }

  const handleRemoveExpense = () => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter(
        (expense) => !selectedExpense.includes(expense?.id)
      )
    })
    setSelectedExpense([])
  }

  const handleCloseExpenseModal = () => {
    setIsOpenExpenseModal(false)
  }

  const handleSelectItem = (id) => {
    const hasItem = selectedExpense.find((itemId) => itemId === id)
    let result = expenses

    if (hasItem) {
      result = selectedExpense.filter((itemId) => itemId !== id)
    } else {
      result = [...selectedExpense, id]
    }

    setSelectedExpense(result)
  }

  const expenseData = useMemo(() => {
    const maxExpense = Math.max(...expenses.map((expense) => expense.amount))
    const transformedExpenses = expenses.map(({ amount, ...expense }) => {
      return {
        ...expense,
        amount,
        isHighlighted: amount >= maxExpense,
      }
    })

    return transformedExpenses
  }, [expenses])

  return {
    isOpenExpenseModal,
    setIsOpenExpenseModal,
    handleCloseExpenseModal,
    handleAddExpense,
    handleRemoveExpense,
    expenseData,
    handleSelectItem,
  }
}

export default useExpense
