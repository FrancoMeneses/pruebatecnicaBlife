import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

export const Cart = () => {
  const { cart, handleViewCart, handleRemove } = useContext(StoreContext)
  return (
    <section id='cart' className='w-full h-full bg-black/50 z-[99] absolute justify-end items-center font-kumbh hidden'>
      <div className="h-full w-[300px] md:w-[450px] bg-white flex flex-col fixed top-0">
        <div className='flex justify-between items-center border-0 border-b-[2px] border-solid border-[#E1E1E1] h-[60px] px-4 py-3 m-0 p-0'>
          <h2 className="">Carrito</h2>
          <button className='text-[16px] font-bold bg-transparent rounded-full px-3 py-1.5 border-black border-solid cursor-pointer hover:bg-red-500 hover:border-white hover:text-white transition-colors duration-200 ease-in-out' onClick={handleViewCart}>Cerrar</button>
        </div>
        <ul className='px-4 py-5 m-0 flex flex-col gap-2'>
          {cart.map(product => {
            return (
              <li key={product.id} className='list-none flex justify-between items-start border border-solid border-[#E1E1E1] border-x-0 border-y-[1px] py-4'>
                <div className='flex justify-center items-center gap-[20px]'>
                  <img className='h-[50px]' src={product.image} />
                  <div className='flex flex-col justify-center items-start gap-[8px]'>
                    <span>{product.name}</span>
                    <span className='font-normal text-[12px]'>{product.presentation}</span>
                  </div>
                </div>
                <div className='flex flex-col justify-center items-end gap-[8px]'>
                  <span>{`$${product.discountPrice}`}</span>
                  <span className='font-normal text-[12px] line-through'>{`$${product.realPrice}`}</span>
                  <button onClick={(e) => { handleRemove(e, product.id) }} className='text-[11px] font-bold bg-transparent rounded-full px-1.5 py-1.5 border-black border-solid cursor-pointer hover:bg-red-500 hover:border-white hover:text-white transition-colors duration-200 ease-in-out'>Eliminar</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
