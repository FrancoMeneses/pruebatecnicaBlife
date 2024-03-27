import { FBIcon, HeartIcon, InstagramIcon, TwitterIcon } from './Icons'
import { ImageCarousel } from './ImageCarousel'
import { Rating } from 'react-simple-star-rating'
import { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'

export const CardProduct = ({ id, name = 'Citrate Mag', likes = 22, discount = 30, presentation = '240 Cápsulas | 800 Mg', realPrice = '134.00', discountPrice = '273.00', rating = 1.5, images = [] }) => {
  const { handleNewProduct } = useContext(StoreContext)
  const [updateLike, setUpdateLike] = useState(true)
  const [newLikes, setNewLikes] = useState(likes)

  const handleLike = (e) => {
    setUpdateLike(!updateLike)
    if (updateLike) {
      setNewLikes(newLikes + 1)
    } else {
      setNewLikes(newLikes - 1)
    }
  }

  return (
    <article className='w-[280px] h-[470px] lg:w-[280px] lg:h-[500px] 2xl:w-[340px] 2xl:h-[530px] border-[1.5px] border-solid border-[#E1E1E1] bg-[#F9F9F9] rounded-2xl relative flex justify-center items-start font-kumbh'>
      <div className="flex flex-col justify-center items-center gap-2.5 absolute top-4 right-[-20px] z-50">
        <button onClick={handleLike} className='w-[62px] h-[31px] border-[1.5px] border-solid border-[#E1E1E1] bg-white rounded-full flex justify-around items-center cursor-pointer'>
          <HeartIcon className={!updateLike ? 'fill-[#FF8E8E]' : 'fill-none'} />
          <span className='font-bold text-[12px]'>{newLikes}</span>
        </button>
        <span className='w-[53px] h-[31px] border-[1.5px] border-solid border-[#E1E1E1] bg-[#FF8E8E] rounded-full flex justify-center items-center text-white font-bold text-[12px]'>{`-${discount}%`}</span>
      </div>
      <div className='w-full h-[400px] lg:h-[430px] 2xl:h-[460px] rounded-2xl border-x-0 border-t-0 border-b-[1.5px] border-solid border-[#E1E1E1] absolute bg-white'>
        <div className='p-4 flex flex-col justify-start items-center'>
          <ImageCarousel images={images}></ImageCarousel>
        </div>
        <div className='px-6 flex flex-col justify-between items-start gap-[5px]'>
          <div className='w-full flex justify-between items-center'>
            <span className='font-bold text-[16px]'>{name}</span>
            <span className='font-bold text-[16px]'>{`$${discountPrice}`}</span>
          </div>
          <div className='w-full flex justify-between items-center'>
            <span className='font-normal text-[10px]'>{presentation}</span>
            <span className='font-normal text-[10px] line-through'>{`$${realPrice}`}</span>
          </div>
          <Rating
            allowFraction
            initialValue={rating}
            readonly
            size={12}
            className='mt-[5px]'
          />
        </div>
      </div>
      <div className='self-end px-6 py-4 flex justify-between items-center w-full'>
        <div className='flex flex-col gap-1.5'>
          <span className='font-normal text-[10px]'>COMPARTE</span>
          <div className='flex justify-center items-center gap-3'>
            <button className='bg-transparent border-none p-0 m-0 cursor-pointer'>
              <FBIcon />
            </button>
            <button className='bg-transparent border-none p-0 m-0 cursor-pointer'>
              <TwitterIcon />
            </button>
            <button className='bg-transparent border-none p-0 m-0 cursor-pointer'>
              <InstagramIcon />
            </button>
          </div>
        </div>
        <button onClick={(e) => handleNewProduct(e, id, name, images[0], discountPrice, realPrice, presentation)} className='w-[90px] h-[31px] border border-solid border-[#EDA836] bg-white rounded-[20px] hover:border-white hover:bg-[#EDA836] transition-colors duration-200 ease-in-out cursor-pointer'>
          Agregar
        </button>
      </div>
    </article>
  )
}
