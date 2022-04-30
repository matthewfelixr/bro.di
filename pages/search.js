import React from 'react'
import Layout from '../Layouts/Layout'
import style from './components/Layout/layout.module.css'
import RestoSearchCard from './components/Layout/RestoSearchCard'

const search = () => {
  return (
    <>
        <Layout>
            <div className={style.search_header}>
                <h1>Result of 'Solaria'</h1>
                <RestoSearchCard/>
            </div>
        </Layout>
    </>
  )
}

export default search