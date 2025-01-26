import { memo } from 'react'
import CatPaws from '../assets/images/icons/paws-icon.png'

const Navbar = () => {
  return (
    <div className="navbar rounded-md bg-slate-950">
      <div className="flex-1 gap-4">
        <div className="w-10 rounded-full hover:animate-bounce">
          <img className="h-full w-auto" src={CatPaws} alt="image" />
        </div>
        <a className="text-md font-bold md:text-xl">Cat Expense</a>
      </div>
    </div>
  )
}

export default memo(Navbar)
