import { useCallback, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { getFormatCurrencyNumber } from '../utilities/number'

const useExpense = () => {
  const [isOpenExpenseModal, setIsOpenExpenseModal] = useState(false)
  const [expenses, setExpenses] = useState([])
  const [selectedExpense, setSelectedExpense] = useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
    setValue,
    trigger,
  } = useForm({
    defaultValues: {
      name: '',
      category: '',
      amount: undefined,
    },
    reValidateMode: 'onBlur',
  })

  const handleAddExpense = useCallback(
    (data) => {
      setIsOpenExpenseModal(false)
      setExpenses((prevExpenses) => {
        console.log({ prevExpenses })
        return [
          ...prevExpenses,
          {
            id: prevExpenses.length + 1,
            name: data?.name,
            category: data?.category,
            amount: data?.amount,
            displayAmount: getFormatCurrencyNumber(data?.amount),
          },
        ]
      })
    },
    [setExpenses, setIsOpenExpenseModal]
  )

  const submitExpense = handleSubmit((data) => {
    handleAddExpense(data)
    reset()
    clearErrors()
  })

  const handleCloseModal = () => {
    handleCloseExpenseModal()
    reset()
    clearErrors()
  }

  const handleRemoveExpense = useCallback(() => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter(
        (expense) => !selectedExpense.includes(expense?.id)
      )
    })
    setSelectedExpense([])
  }, [setExpenses, setSelectedExpense, selectedExpense])

  const handleCloseExpenseModal = () => {
    setIsOpenExpenseModal(false)
  }

  const handleSelectItem = useCallback(
    (id) => {
      const hasItem = selectedExpense.find((itemId) => itemId === id)
      let result = expenses

      if (hasItem) {
        result = selectedExpense.filter((itemId) => itemId !== id)
      } else {
        result = [...selectedExpense, id]
      }

      setSelectedExpense(result)
    },
    [selectedExpense, setSelectedExpense, expenses]
  )

  const setFieldValue = (name, value) => {
    setValue(name, value)
    trigger(name)
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
    expenseData,
    selectedExpense,
    isOpenExpenseModal,
    setIsOpenExpenseModal,
    handleSelectItem,
    handleRemoveExpense,
    handleCloseModal,
    submitExpense,
    handleAddExpense,
    register,
    errors,
    setValue: setFieldValue,
  }
}

export default useExpense
