import React from 'react'
import style from './layout.module.css'
import Link from 'next/link'
const Header = () => {
    return (
        <div className={style.navigation}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className={`${style.navigation_brand}`}>
                                <Link href="/">bro.di</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Header