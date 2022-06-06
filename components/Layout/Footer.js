import React from 'react'
import style from './layout.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
        <div className={style.footer}>
          <div className={style.footer_container}>
            <div className={style.tagline}>
              <h1>bro.di</h1>
              <p>Your restaurant on your hand</p>
              <p className={style.credit}>©2022 | bro.di</p>
            </div>
            <div className={style.sub_footer}>
              <h4>Explore</h4>
              <p>Home</p>
              <p>About Us</p>
              <p>Contact</p>
            </div>
            <div className={style.sub_footer}>
              <h4>Partnership</h4>
              <p>Submission</p>
              <p>Careers</p>
            </div>
            <div className={style.sub_footer}>
              <h4>Follow Us</h4>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>Facebook</p>
              <p>TikTok</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Footer