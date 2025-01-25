import { memo } from 'react'
import CatPaws from '../assets/images/icons/paws-icon.png'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <div className="w-10 rounded-full hover:animate-bounce">
          <img src={CatPaws} alt="image" />
        </div>
        <a className="btn btn-ghost text-xl">Cat Expense</a>
      </div>
    </div>
  )
}

export default memo(Navbar)
