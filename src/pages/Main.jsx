import { useForm } from 'react-hook-form'
import CatExpenseTable from '../components/CatExpenseTable'
import ExpenseDetailModal from '../components/ExpenseDetailDialog'
import useCatFact from '../hooks/useCatFact'
import useExpense from '../hooks/useExpense'

const MainPage = () => {
  const {
    expenseData,
    isOpenExpenseModal,
    setIsOpenExpenseModal,
    handleCloseExpenseModal,
    handleAddExpense,
    handleSelectItem,
    handleRemoveExpense,
  } = useExpense()
  const { catFact, isLoading, refetchCatFact } = useCatFact()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm({
    defaultValues: {
      name: '',
      category: '',
      amount: 0,
    },
    reValidateMode: 'onBlur',
  })

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

  return (
    <>
      <div className="dropdown">
        <button
          className="btn"
          onClick={() => {
            refetchCatFact()
            setIsOpenExpenseModal(true)
          }}
        >
          Add Expense
        </button>
        <div role="button" className="btn m-1" onClick={handleRemoveExpense}>
          Delete Expense
        </div>
      </div>
      <div className="my-[20rem]">
        {expenseData.length > 0 ? (
          <CatExpenseTable
            expenses={expenseData}
            onSelectItem={handleSelectItem}
          />
        ) : (
          <p>No expenses</p>
        )}
      </div>

      <ExpenseDetailModal
        register={register}
        isOpen={isOpenExpenseModal}
        onCloseModal={handleCloseModal}
        contentTitle="Random cat fact"
        contentDescription={catFact}
        isLoadingContent={isLoading}
        onSubmit={submitExpense}
        errors={errors}
      />
    </>
  )
}

export default MainPage
