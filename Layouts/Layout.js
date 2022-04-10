import React from 'react'
import Navigation from '../pages/components/Layout/Navigation'
import MainContent from './MainContent'
import Footer from '../pages/components/Layout/Footer'
import Header from '../pages/components/Layout/Header'

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