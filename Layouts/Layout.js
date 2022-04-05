import React from 'react'
import Navigation from '../pages/components/Layout/Navigation'
import MainContent from './MainContent'

const DefaultLayout = (props) => {
  return (
    <>
    <Navigation>
    <MainContent>
        {props.children}
    </MainContent>
    </Navigation>
    </>
  )
}

export default DefaultLayout