import CatExpenseTable from '../components/CatExpenseTable'
import ExpenseDetailModal from '../components/ExpenseDetailDialog'
import useCatFact from '../hooks/useCatFact'
import useExpense from '../hooks/useExpense'

const MainPage = () => {
  const {
    expenseData,
    selectedExpense,
    isOpenExpenseModal,
    setIsOpenExpenseModal,
    handleSelectItem,
    handleRemoveExpense,
    handleCloseModal,
    submitExpense,
    register,
    errors,
    setValue,
    onBlur,
  } = useExpense()
  const { catFact, isLoading, refetchCatFact } = useCatFact()

  return (
    <>
      <div className="float-start mt-[2rem] flex h-[calc(100vh-10rem)] w-full flex-col-reverse rounded-md bg-slate-950 p-4 md:flex-col">
        <div className="dropdown flex flex-col items-center justify-between gap-2 md:flex-row">
          <p className="hidden text-xl md:block">Expense History</p>
          <button
            className="btn btn-primary w-full md:w-fit"
            onClick={() => {
              refetchCatFact()
              setIsOpenExpenseModal(true)
            }}
          >
            Add Expense
          </button>
        </div>
        <div className="divider divider-neutral" />
        <div className="flex h-full flex-col items-center justify-center overflow-x-auto p-2">
          <div className="flex w-full items-center justify-between">
            {selectedExpense.length > 0 && (
              <>
                <p>{selectedExpense.length} selected</p>

                <div
                  className="btn btn-outline btn-error w-fit"
                  onClick={handleRemoveExpense}
                >
                  Delete
                </div>
              </>
            )}
          </div>
          {expenseData.length > 0 ? (
            <CatExpenseTable
              expenses={expenseData}
              onSelectItem={handleSelectItem}
            />
          ) : (
            <p className="text-md">No expenses</p>
          )}
        </div>
      </div>

      <ExpenseDetailModal
        register={register}
        setValue={setValue}
        isOpen={isOpenExpenseModal}
        onCloseModal={handleCloseModal}
        contentTitle="Random cat fact"
        contentDescription={catFact}
        isLoadingContent={isLoading}
        onSubmit={submitExpense}
        errors={errors}
        onBlur={onBlur}
      />
    </>
  )
}

export default MainPage
