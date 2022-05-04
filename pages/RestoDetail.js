import React from 'react'
import LayoutAuth from '../Layouts/LayoutAuth'
import style from './components/Layout/layout.module.css'
import Image from 'next/image'
import solaria from '../public/solaria.png'
import imgtemp from '../public/imgtemp.png'
import Link from 'next/Link'
import Tabs from './components/Layout/Tabs'
const RestoDetail = () => {
  return (
    <LayoutAuth>
    <div className={style.grid_container2}>
        <div className={style.grid_item1}>
        <div className='row d-flex'>
            <div className='col-3'>
            <Image
            src={solaria}
            width={110}
            height={110}
            />
            </div>
            <div className='col text-start'>
                <h1> <b>Solaria Buah Batu</b></h1>
                <h4> Jl. Buah Batu No.69, Bandung</h4>
                <h6> Rating 4,5</h6>
            </div>
        </div>
        </div>
        <div className={style.grid_item2}>
              <Image
              src={imgtemp}
              width={420}
              height={350}
              />
            <div className='mt-2'>
                    <Link href="/bill"><button className={`${style.button_sub_book} ${"flex-grow-1 px-5 m-auto"}`}type="submit">Book Now</button></Link>
            </div>

        </div>
        <div className={style.grid_item3}>
        <Tabs/>    
        </div>  
    </div>
    </LayoutAuth>
  )
}

export default RestoDetail