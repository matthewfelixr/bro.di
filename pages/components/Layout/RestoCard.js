import React from 'react'
import Link from 'next/link'
import  style from './layout.module.css'

const RestoCard = () => {
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <div className={'container'}>
        <div className={style.card_short}>
            <div className={style.card_short_image}></div>
            <Link href="/dashboard">
            <a>
            <div className={style.card_short_description}>
                <h4><b>Solaria Buah Batu</b></h4>
                <div className='row'>
                    <div className='col-9'><h6> Bandung, Jawa Barat  </h6></div>
                    <div className='col-1'><span>*****</span> </div>
                </div> 
            </div>
            </a>
            </Link>
            
    </div>
    </div>
    </>
  )
}

export default RestoCard