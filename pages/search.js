import React from 'react'
import Layout from '../Layouts/Layout'
import style from './components/Layout/layout.module.css'
import RestoSearchCard from './components/Layout/RestoSearchCard'
import Pagination from 'react-bootstrap/Pagination'
import LayoutAuth from '../Layouts/LayoutAuth'

const search = () => {
  return (
    <>
        <LayoutAuth>
            <div className={style.search_header}>
                <h1>Result of 'Solaria'</h1>
                <br></br>
                <br></br>
            </div>
            <RestoSearchCard/>
            <RestoSearchCard/>
            <RestoSearchCard/>
            <RestoSearchCard/>
            <RestoSearchCard/>
        </LayoutAuth>
    </>
  )
}

export default search