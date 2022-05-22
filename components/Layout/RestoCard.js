import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import  style from './layout.module.css'
import Image from 'next/image'
import Rating from  '../../public/rating.png'

const RestoCard = () => {
  // const [resto,setResto] = useState();
  // useEffect(()=>{})
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
                <h3><b>Solaria Buah Batu</b></h3>
                <div className='row'>
                    <div className='col-7'><h6> Bandung, Jawa Barat  </h6></div>
                    <div className='col'>
                      <Image
                            src={Rating}
                            alt="Rating"
                            width={130}
                            height={20}
                        />
                      </div>
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