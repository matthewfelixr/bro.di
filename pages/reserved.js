import React from 'react'
import Layout from '../Layouts/Layout'
import LayoutAuth from '../Layouts/LayoutAuth'
import ReservedCard from '../components/Layout/ReservedCard'
import style from '../components/Layout/layout.module.css'
import WithUtils from '../components/Layout/WithUtil/WithUtils'
import jsCookie from 'js-cookie'

const Reserved = () => {

    const idUser = Cookies.get("userId");
  return (
    <LayoutAuth>
        <div className='container mt-5 mb-5'>
        <div className='row d-flex align-items-center m-auto'>
            <div className='col-4'>
                <hr></hr> 
            </div>
            <div className='col-4 text-center'>
                <h3 className={style.mitra_title}>Reserved List</h3>
            </div>
            <div className='col-4'>
                <hr></hr>
            </div>
            </div>
        </div>
        <ReservedCard/>
        <ReservedCard/>
        <ReservedCard/>
        <ReservedCard/>
    </LayoutAuth>
  )
}

export default WithUtils(Reserved)