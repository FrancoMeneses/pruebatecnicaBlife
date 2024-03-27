import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import MainBanner from '../assets/mainBanner.png'
import RightBanner from '../assets/rightBanner.png'
import { CardProduct } from '../components/CardProduct'

export const Home = () => {
  const { PRODUCTS } = useContext(StoreContext)

  return (
    <div className='flex flex-col justify-center items-center gap-[150px]'>
      <section id='main-banner' className='h-[300px] md:h-[665px] 2xl:h-[800px] w-full bg-local bg-top bg-no-repeat bg-cover md:bg-cover flex justify-end items-center' style={{ backgroundImage: `url(${MainBanner})` }}>
        <img className='pr-[10px] md:pr-[50px] 2xl:pr-[100px] h-[200px] md:h-[380px] lg:h-[500px] 2xl:w-[639px] 2xl:h-[637px]' src={RightBanner} alt='Descuento' />
      </section>
      <section id='products' className='w-full flex justify-center items-center flex-wrap gap-[35px] mb-[100px] md:gap-[40px] lg:gap-[60px]'>
        {PRODUCTS.map(product => {
          return (
            <CardProduct
            key={product.id}
            id={product.id}
            name = {product.name}
            likes = {product.likes}
            discount = {product.discount}
            presentation = {product.presentation}
            realPrice = {product.realPrice}
            discountPrice = {product.discountPrice}
            rating = {product.rating}
            images = {product.images}
            ></CardProduct>
          )
        })}
      </section>
    </div>
  )
}
