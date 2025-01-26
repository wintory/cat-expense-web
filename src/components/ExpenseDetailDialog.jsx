import classNames from 'classnames'
import { memo, useState } from 'react'
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
  setValue,
}) => {
  const [category, setCategory] = useState('')
  const [isOpenCategoryDropdown, setIsOpenCategoryDropdown] = useState(false)

  const handleSelectCategory = (item) => {
    setCategory(item.value)
    setValue('category', item.value)
    setIsOpenCategoryDropdown(false)
  }

  return (
    <>
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
          <div className="flex flex-col gap-[2rem] px-4 py-6">
            <div className="inline-flex items-center gap-4">
              <p
                className={classNames('w-[80px] text-left text-sm md:text-lg', {
                  'text-error': errors?.name,
                })}
              >
                Name
              </p>
              <div className="relative flex w-full flex-1">
                <input
                  type="text"
                  placeholder="Enter expense name"
                  className={classNames(
                    'input input-bordered min-h-[48px] flex-1 hover:border-none',
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
                className={classNames('w-[80px] text-left text-sm md:text-lg', {
                  'text-error': errors?.category,
                })}
              >
                Category
              </p>
              <div className="flex w-full flex-1 flex-col">
                <div
                  className={classNames('dropdown', {
                    'dropdown-open': isOpenCategoryDropdown,
                  })}
                >
                  <div
                    className={classNames(
                      'btn w-full justify-start border-[2px] bg-transparent text-[1rem]',
                      errors?.category
                        ? 'border-error hover:border-error'
                        : 'border-neutral hover:border-primary'
                    )}
                    {...register('category', {
                      required: 'category is empty.',
                    })}
                    onClick={() =>
                      setIsOpenCategoryDropdown(!isOpenCategoryDropdown)
                    }
                  >
                    {category || 'Select category'}
                  </div>
                  <ul
                    className={classNames(
                      'menu dropdown-content z-[1] w-full rounded-md border-[2px] border-neutral bg-base-100 p-2'
                    )}
                  >
                    {CAT_EXPENSE_CATEGORY.map((item) => (
                      <li
                        key={item.key}
                        className="w-full"
                        onClick={() => handleSelectCategory(item)}
                      >
                        <a>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                {errors?.category && (
                  <p className="absolute -bottom-5 text-left text-xs text-error">
                    {errors.category?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="relative flex-1 items-center gap-4 sm:inline-flex">
              <p
                className={classNames('w-[80px] text-left text-sm md:text-lg', {
                  'text-error': errors?.amount,
                })}
              >
                Amount
              </p>
              <div className="flex w-full flex-1 flex-col">
                <input
                  type="number"
                  placeholder="Enter item amount"
                  className={classNames(
                    'input input-bordered relative',
                    errors?.amount && 'input-error'
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

            <button className="btn btn-primary mt-[2rem]" onClick={onSubmit}>
              <p>Add</p>
            </button>
          </div>
          <div className="flex flex-col px-4 py-6 text-left md:min-h-[135px]">
            {contentTitle || contentDescription ? (
              <>
                <p className="flex items-center gap-4 text-sm italic md:text-lg">
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
    </>
  )
}

export default memo(ExpenseDetailModal)
