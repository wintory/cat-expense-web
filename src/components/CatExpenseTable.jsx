import classNames from 'classnames'
import { memo } from 'react'

const CatExpenseTable = ({ expenses = [], onSelectItem }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            return (
              <tr
                key={expense?.id}
                className={classNames({
                  'bg-yellow-50 text-primary': expense?.isHighlighted,
                })}
              >
                <th>
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={() => onSelectItem(expense?.id)}
                  />
                </th>
                <td>{expense.name}</td>
                <td>{expense.category}</td>
                <td>{expense.amount}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default memo(CatExpenseTable)
