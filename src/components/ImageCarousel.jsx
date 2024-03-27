import { Carousel } from 'react-responsive-carousel'
// import ProductImage from '../assets/productImage.png'

export const ImageCarousel = ({ images = [] }) => {
  return (
    <div className="w-full h-full">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        emulateTouch
      >
        {/* Simulando un Id como el index */}
        {images.map((image, i) => {
          return (
            <div key={i} className="w-full h-[290px] lg:h-[310px] 2xl:h-[350px]">
              <img className="w-full h-full object-cover object-center"
                width={800}
                height={800}
                alt=""
                src={image}
              />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}
