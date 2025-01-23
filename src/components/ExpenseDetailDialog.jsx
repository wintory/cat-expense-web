import classNames from 'classnames'
import { memo } from 'react'
import { CAT_EXPENSE_CATEGORY } from '../constants/expense'

const ExpenseDetailModal = ({
  register,
  isOpen,
  onSubmit,
  onCloseModal,
  contentTitle,
  contentDescription,
  isLoadingContent,
  errors,
}) => {
  return (
    <dialog
      className={classNames('modal modal-bottom w-full sm:modal-middle', {
        'modal-open': isOpen,
      })}
    >
      <div className="modal-box flex flex-col-reverse justify-evenly">
        <button
          className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
          onClick={onCloseModal}
        >
          ✕
        </button>
        <div className="flex flex-col px-4 py-6">
          <div className="inline-flex items-center">
            <p className={classNames({ 'text-error': errors?.name })}>Name</p>
            <input
              type="text"
              placeholder="Enter item Name"
              className={classNames(
                'input input-bordered w-[250px]',
                errors.name && 'input-error'
              )}
              {...register('name', { required: 'Name is empty.' })}
            />
          </div>
          {errors.name && <p className="text-error">{errors.name?.message}</p>}
          <div className="inline-flex items-center">
            <p className={classNames({ 'text-error': errors?.category })}>
              Category
            </p>
            <select
              className="select select-bordered w-[250px]"
              {...register('category', {
                required: 'Category is empty.',
              })}
            >
              {CAT_EXPENSE_CATEGORY.map(({ key, label }) => (
                <option key={key}>{label}</option>
              ))}
            </select>
          </div>
          {errors?.category && (
            <p className="text-error">{errors.category?.message}</p>
          )}
          <div className="items-center sm:inline-flex">
            <p className={classNames({ 'text-error': errors?.category })}>
              Amount
            </p>
            <input
              type="number"
              placeholder="Enter item Amount"
              className="input input-bordered w-[250px]"
              {...register('amount', {
                required: 'Amount is empty.',
                valueAsNumber: true,
                min: {
                  value: 1,
                  message: 'Amount must be greater than 0.',
                },
              })}
            />
          </div>
          {errors?.amount && (
            <p className="text-error">{errors.amount?.message}</p>
          )}

          <button className="btn btn-primary" onClick={onSubmit}>
            Add
          </button>
        </div>
        <div className="flex flex-col px-4 py-6 text-left">
          {isLoadingContent ? (
            <div>Loading...</div>
          ) : (
            <>
              {contentTitle || contentDescription ? (
                <>
                  <p className="text-md italic sm:text-lg">
                    {contentTitle}: {contentDescription}
                  </p>
                </>
              ) : null}
            </>
          )}
        </div>
      </div>
    </dialog>
  )
}

export default memo(ExpenseDetailModal)
