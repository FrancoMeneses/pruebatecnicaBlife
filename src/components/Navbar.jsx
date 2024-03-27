import { Logo } from './Icons'
import SearchIcon from '../assets/SearchIcon.png'
import UserIcon from '../assets/UserIcon.png'
import CartIcon from '../assets/CartIcon.png'
import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const { cart, handleViewCart } = useContext(StoreContext)
  return (
    <header className='h-[120px] md:h-[100px] flex justify-between items-center px-3'>
      <NavLink to='/'>
        <Logo className={'w-[80px] md:w-[120px] lg:w-[165px] lg:h-[50px]'} />
      </NavLink>
      <ul className='list-none flex flex-col md:flex-row justify-center items-center gap-[7px] md:gap-[15px] p-0'>
        <NavLink to='/productos' className='font-kumbh font-bold no-underline hover:bg-[#EDA836] text-[#343434] w-[100px] h-[25px] rounded-full flex justify-center items-center'>Productos</NavLink>
        <NavLink to='/promociones' className='font-kumbh font-bold no-underline bg-[#EDA836] w-[128px] h-[25px] rounded-full flex justify-center items-center text-[#343434]'>Promociones</NavLink>
        <NavLink to='/nosotros' className='font-kumbh font-bold no-underline hover:bg-[#EDA836] text-[#343434] w-[100px] h-[25px] rounded-full flex justify-center items-center'>Nosotros</NavLink>
      </ul>
      <div className='flex flex-col md:flex-row justify-center items-end gap-[7px] w-[55px] md:w-auto md:gap-[15px]'>
        <button className='bg-transparent border-none pointer-events-auto cursor-pointer'>
          <img className='size-[25px]' src={SearchIcon} alt='Search Icon' />
        </button>
        <button className='bg-transparent border-none pointer-events-auto cursor-pointer'>
          <img className='size-[24px]' src={UserIcon} alt='User Icon' />
        </button>
        <button onClick={handleViewCart} className='bg-transparent border-none pointer-events-auto cursor-pointer relative'>
          <span className='size-[20px] bg-[#DD0606] absolute top-[-10px] right-[-5px] rounded-full text-[14px] font-bold flex justify-center items-center text-white'>{cart.length}</span>
          <img className='size-[24px]' src={CartIcon} alt='Cart Icon' />
        </button>
      </div>
    </header>
  )
}
