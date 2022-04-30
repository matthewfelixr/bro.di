import React from 'react'
import Footer from '../pages/components/Layout/Footer'
import Navigation from '../pages/components/Layout/Navigation'
import MainContent from './MainContent'

const LayoutAuth = (props) => {
  return (
    <>
    <Navigation/>
        <MainContent>
            {props.children}
        </MainContent>
    <Footer/>

    </>
  )
}

export default LayoutAuth