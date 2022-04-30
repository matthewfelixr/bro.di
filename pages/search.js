import React from 'react'
import Layout from '../Layouts/Layout'
import style from './components/Layout/layout.module.css'
import RestoSearchCard from './components/Layout/RestoSearchCard'
import Pagination from 'react-bootstrap/Pagination'

const search = () => {
  return (
    <>
        <Layout>
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
        </Layout>
    </>
  )
}

export default search