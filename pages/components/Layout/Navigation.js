import React from 'react'
import Link from 'next/link'

import style from './layout.module.css'
const Navigation = () => {
  return (
    <div className={style.navigation}>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className={`${style.navigation_brand} ${"flex-grow-1"}`}>
                            <Link href="/">bro.di</Link></div>
                        <div className='px-2'>
                            <Link href="/login">
                                <a className={style.btn_login}>Log In</a>
                            </Link>
                        </div>
                        <div className='px-2'>
                            <Link href="/">
                                <a className={style.btn_signup}>Sign Up</a>
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