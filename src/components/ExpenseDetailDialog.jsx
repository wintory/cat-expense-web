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
      className={classNames('modal modal-bottom w-full md:modal-middle', {
        'modal-open': isOpen,
      })}
    >
      <div className="modal-box flex flex-col-reverse">
        <button
          className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
          onClick={onCloseModal}
        >
          ✕
        </button>
        <div className="flex flex-col gap-4 px-4 py-6">
          <div className="inline-flex items-center gap-4">
            <p
              className={classNames('w-[80px] text-left', {
                'text-error': errors?.name,
              })}
            >
              Name
            </p>
            <div className="relative flex w-full flex-1">
              <input
                type="text"
                placeholder="Enter item Name"
                className={classNames(
                  'input input-bordered min-h-[48px] flex-1',
                  errors?.name && 'input-error'
                )}
                {...register('name', { required: 'Name is empty.' })}
              />
              {errors.name && (
                <p className="absolute -bottom-5 text-left text-xs text-error">
                  {errors.name?.message}
                </p>
              )}
            </div>
          </div>

          <div className="relative inline-flex items-center gap-4">
            <p
              className={classNames('w-[80px] text-left', {
                'text-error': errors?.category,
              })}
            >
              Category
            </p>
            <div className="flex w-full flex-1 flex-col">
              <select
                className={classNames('select select-bordered flex-1', {
                  'select-error': errors?.category,
                })}
                {...register('category', {
                  required: 'Category is empty.',
                })}
              >
                {CAT_EXPENSE_CATEGORY.map(({ key, label }) => (
                  <option key={key}>{label}</option>
                ))}
              </select>
              {errors?.category && (
                <p className="absolute -bottom-5 text-left text-xs text-error">
                  {errors.category?.message}
                </p>
              )}
            </div>
          </div>

          <div className="relative flex-1 items-center gap-4 sm:inline-flex">
            <p
              className={classNames('w-[80px] text-left', {
                'text-error': errors?.amount,
              })}
            >
              Amount
            </p>
            <div className="flex w-full flex-1 flex-col">
              <input
                type="number"
                placeholder="Enter item Amount"
                className={classNames(
                  'input input-bordered relative',
                  errors?.name && 'input-error'
                )}
                {...register('amount', {
                  required: 'Amount is empty.',
                  valueAsNumber: true,
                  min: {
                    value: 1,
                    message: 'Amount must be greater than 0.',
                  },
                })}
              />
              {errors?.amount && (
                <p className="absolute -bottom-5 text-left text-xs text-error">
                  {errors.amount?.message}
                </p>
              )}
            </div>
          </div>

          <button className="btn btn-primary" onClick={onSubmit}>
            <p>Add</p>
          </button>
        </div>
        <div className="flex min-h-[135px] flex-col px-4 py-6 text-left">
          {contentTitle || contentDescription ? (
            <>
              <p className="text-md flex items-center gap-4 italic sm:text-lg">
                {contentTitle}:{' '}
                {isLoadingContent ? (
                  <span className="loading loading-dots loading-lg" />
                ) : (
                  contentDescription
                )}
              </p>
            </>
          ) : null}
        </div>
      </div>
    </dialog>
  )
}

export default memo(ExpenseDetailModal)
