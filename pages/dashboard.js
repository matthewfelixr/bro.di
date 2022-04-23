import React from 'react'
import { Nav } from 'react-bootstrap'
import HeaderCarousel from './components/Layout/HeaderCarousel'
import Navigation from './components/Layout/Navigation'
import RestoCard from './components/Layout/RestoCard'
import dynamic from "next/dynamic";
import Reccomended from './components/Layout/Reccomended'

const Dashboard = () => {
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });
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
    <Reccomended/>
    
    </>
  )
}

export default Dashboard