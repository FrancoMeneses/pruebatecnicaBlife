import { createContext, useState } from 'react'
import ProductImage from '../assets/productImage.png'

export const StoreContext = createContext()

export function StoreProvider ({ children }) {
  // Simulando datos obtenidos de una API
  const PRODUCTS = [{
    id: 1,
    name: 'Citrate Mag',
    likes: 20,
    discount: 30,
    presentation: '240 Cápsulas | 800 Mg',
    realPrice: '134.00',
    discountPrice: '273.00',
    rating: 2.1,
    images: [ProductImage, ProductImage, ProductImage]
  },
  {
    id: 2,
    name: 'Citrate Mag',
    likes: 21,
    discount: 30,
    presentation: '240 Cápsulas | 800 Mg',
    realPrice: '134.00',
    discountPrice: '273.00',
    rating: 3.7,
    images: [ProductImage, ProductImage, ProductImage]
  },
  {
    id: 3,
    name: 'Citrate Mag',
    likes: 22,
    discount: 30,
    presentation: '240 Cápsulas | 800 Mg',
    realPrice: '134.00',
    discountPrice: '273.00',
    rating: 5,
    images: [ProductImage, ProductImage, ProductImage]
  },
  {
    id: 4,
    name: 'Citrate Mag',
    likes: 23,
    discount: 30,
    presentation: '240 Cápsulas | 800 Mg',
    realPrice: '134.00',
    discountPrice: '273.00',
    rating: 4.2,
    images: [ProductImage, ProductImage, ProductImage]
  }]

  const handleNewProduct = (e, id, name, image, discountPrice, realPrice, presentation) => {
    setCart([
      ...cart,
      {
        id,
        name,
        image,
        discountPrice,
        realPrice,
        presentation
      }
    ])
    handleViewCart()
  }

  const handleViewCart = () => {
    const cart = document.getElementById('cart')
    setIsShowCart(!isShowCart)
    if (isShowCart) {
      cart.classList.remove('hidden')
      cart.classList.add('flex')
    } else {
      cart.classList.add('hidden')
      cart.classList.remove('flex')
    }
  }

  const handleRemove = (e, id) => {
    const updatedCart = cart.filter(product => product.id !== id)
    setCart(updatedCart)
  }

  const [cart, setCart] = useState([])
  const [isShowCart, setIsShowCart] = useState(true)

  return (
    <StoreContext.Provider
      value={{
        PRODUCTS,
        handleNewProduct,
        handleViewCart,
        handleRemove,
        cart,
        setCart,
        isShowCart,
        setIsShowCart
      }}>
      {children}
    </StoreContext.Provider>
  )
}
