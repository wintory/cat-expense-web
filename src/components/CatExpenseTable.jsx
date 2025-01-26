import classNames from 'classnames'
import { memo } from 'react'

const CatExpenseTable = ({ expenses = [], onSelectItem }) => {
  return (
    <div className="h-full w-full items-center justify-center overflow-x-auto p-2">
      <table className="table text-sm">
        <thead>
          <tr className="text-white">
            <th></th>
            <th>
              <p className="text-sm">Item</p>
            </th>
            <th className="text-sm">Category</th>
            <th className="text-sm">Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            return (
              <tr
                key={expense?.id}
                className={classNames({
                  'bg-gray-300 text-sm text-primary': expense?.isHighlighted,
                })}
              >
                <th>
                  <input
                    type="checkbox"
                    className="checkbox border-primary"
                    onChange={() => onSelectItem(expense?.id)}
                  />
                </th>
                <td>{expense.name}</td>
                <td>{expense.category}</td>
                <td>{expense.displayAmount}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default memo(CatExpenseTable)
