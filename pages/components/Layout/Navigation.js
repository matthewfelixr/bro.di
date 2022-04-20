import React from 'react'
import Link from 'next/link'
import style from './layout.module.css'
const Navigation = () => {
  return (
    <div className={style.navigation}>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="d-flex align-items-center ms-5 ps-5">
                        <div className={style.navigation_brand}>
                            <Link href="/">bro.di</Link></div>
                        <div className={style.navigation_searchbar}>
                            <input type={'text'}></input>
                        </div>
                        <div className='px-2'>
                            <Link href="/">
                                <a className={style.navigation_button}>Restaurant</a>
                            </Link>
                        </div>
                        <div className='px-2'>
                            <Link href="/">
                                <a className={style.navigation_button}>Reserved</a>
                            </Link>
                        </div>
                        <div className='px-2'>
                            <Link href="/">
                                <a className={style.navigation_button}>Profile</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navigation