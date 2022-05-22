import React from 'react'
// import Link from 'next/link'
import  style from './layout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReservedCard = () => {
  return (
    <div className={style.body_container}>
        <div className={style.card_container}>
        <div className={style.card_row}>
            <div className='col-9 pt-3 ps-4'>
                <h1> <span className={style.red_button}> .</span><b> Solaria Transmart Buah Batu </b></h1>
                <h5 className={style.disabled_text}><b>25 Februari 2020</b></h5>
                <br></br>
                <br></br>
                <div className={style.disabled_paragraph}>
                    <h6> 4 Bangku </h6>
                    <h6>15:00 -16:00</h6>
                </div>
                
            </div>
            <div className='col-2 pe-1 pt-4 text-center'>
                <h3><b>Rp 40.000</b></h3>
            </div>
            <div className='col-1'>
                <button className={style.delete_reserved}>
                    <FontAwesomeIcon
                    icon={faTrashAlt}
                    style={
                        { fontSize: 40, color: "white" , paddingTop:10}}
                    />
                </button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ReservedCard



