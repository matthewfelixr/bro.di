import React from 'react'
import Image from 'next/image'
import Heropic from './Hero_image.jpg'
import style from './layout.module.css'
import Link from 'next/link'


const HeroSection = (props) => {
  return (
    <>
    <div className={`${style.row_hero} ${"d-flex"}`}>
        <div className='col-1'></div>
        <div className={`${style.hero_image} ${"col-5"}`}>
            <Image
            src={Heropic}
            alt="Hero Image"
            width={832}
            height={666}
        />
        </div>
        <div className={`${style.hero_container} ${"col-4"}`}>
            <h1> Take Your Seats</h1>
            <p>in bro.di you can book everywhere everytime!</p>
            <button> <Link href="/login"> Get Started</Link></button>
        </div>
    </div>
    </>
  )
}

export default HeroSection
