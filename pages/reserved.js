import React from 'react'
import Layout from '../Layouts/Layout'
import LayoutAuth from '../Layouts/LayoutAuth'
import ReservedCard from './components/Layout/ReservedCard'
import style from './components/Layout/layout.module.css'

const reserved = () => {
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

export default reserved