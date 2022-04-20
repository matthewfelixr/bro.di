import React from 'react'
import Image from 'next/image'
import Heropic from '/public/about.png'
import style from './layout.module.css'
import Link from 'next/link'
const AboutUs = () => {
    return (
        <>
         <div className={`${style.row_about} ${"d-flex"}`}>
            <div className={`${style.col_about} ${"col-6"}`}>
                <h1>bro.di</h1>
                <p>bro.di (Booking Restoran Online di Indonesia) adalah sebuah web untuk kamu yang ingin reservasi bangku restoran lebih mudah, cepat, dan praktis. </p>
                <button><Link href="/">About Us</Link></button>
            </div>
            <div className={`${style.col_about_image} ${"col-6"}`}>
            <Image
            src={Heropic}
            alt="Hero Image"
            width={500}
            height={500}
        />
            </div>
        </div>
        </>
      )
}

export default AboutUs