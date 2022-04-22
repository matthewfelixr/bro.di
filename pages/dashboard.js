import React from 'react'
import Navigation from './components/Layout/Navigation'
import RestoCard from './components/Layout/RestoCard'
import HeaderCarousel from './components/Layout/HeaderCarousel'
const Dashboard = () => {
  return (
    <>
    <Navigation/>
    <HeaderCarousel/>
    <br></br>
    <br></br>
    <br></br>
    <div className='container d-flex'>
    <RestoCard/>
    <RestoCard/>
    <RestoCard/>
    </div>
    </>
  )
}

export default Dashboard