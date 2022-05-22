import React from 'react'
import Navigation from '../components/Layout/Navigation'
import MainContent from './MainContent'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'

const DefaultLayout = (props) => {
  return (
    <>
    <Header/>
    <MainContent>
        {props.children}
    </MainContent>
    <Footer/>
    </>
  )
}

export default DefaultLayout