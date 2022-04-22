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
      <Carousel>
        <Carousel.Item>
          <Image
            className={style.header_carousel} 
            src={Carouselpic1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            className={style.header_carousel}
            src={Carouselpic2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <Image
            className={style.header_carousel}
            src={Carouselpic3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default HeaderCarousel