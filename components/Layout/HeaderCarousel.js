import React from 'react'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel'
import Carouselpic1 from '/public/carousel1.png'
import Carouselpic2 from '/public/carousel2.png'
import Carouselpic3 from '/public/carousel3.png'
import style from './layout.module.css'

const HeaderCarousel = () => {
  return (
    <>
      <div className={style.header_carousel_container}>
      <Carousel>
        <Carousel.Item>
          <Image
            className={style.header_carousel}
            src={Carouselpic1}
            width={1520}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3> </h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            className={style.header_carousel}
            src={Carouselpic2}
            width={1520}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3> </h3>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <Image
            className={style.header_carousel}
            src={Carouselpic3}
            width={1520}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3> </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </>
  )
}

export default HeaderCarousel