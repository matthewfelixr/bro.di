import React from 'react'
import Link from 'next/link'
import  style from './layout.module.css'

const RestoSearchCard = () => {
  return (
    <>
        <div className={style.card_search_container}>
            <div className={`${style.row_card_search} ${"d-flex"}`}>
                <div className={`${style.col_search_image} ${"col-3"}`}>

                </div>
                <Link href="/dashboard">
                <div className={`${style.col_search_description} ${"col-9"}`}>
                    <div className={style.card_search_description}>
                        <h1>Solaria Buah Batu</h1>
                        <h4>Bandung, Jawa Barat</h4>
                        <br></br>
                        <span>*****</span>
                    </div>
                    <div className={style.card_search_visit}>
                        Visit
                    </div>
                </div>
                </Link>
            </div>
        </div>          
    </>
  )
}

export default RestoSearchCard