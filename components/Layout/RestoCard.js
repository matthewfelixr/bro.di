import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import  style from './layout.module.css'
import Image from 'next/image'
import { useRouter} from 'next/router'
import Rating from  '../../public/rating.png'

const RestoCard = ({namaRestoran,lokasiRestoran,gambarRestoran ,id}) => {
  const router = useRouter();
  var imageSize ={
    width:"350px", height:"170px" , borderRadius:"25px 25px 0px 0px"
  }
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <div className={'container'}
    onClick={()=>router.push(`/restodetail/${id}`)}>
        <div className={style.card_short}>
            <img src={gambarRestoran} className={style.card_short_image} style={imageSize}></img>
            <Link href="/dashboard">
            <a>
            <div className={style.card_short_description}>
                <h3><b>{namaRestoran}</b></h3>
                <div className='row'>
                    <div className='col-7'><h6>{lokasiRestoran}</h6></div>
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