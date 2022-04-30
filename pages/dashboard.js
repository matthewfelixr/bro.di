import React from 'react'
import { Nav } from 'react-bootstrap'
import HeaderCarousel from './components/Layout/HeaderCarousel'
import Navigation from './components/Layout/Navigation'
import RestoCard from './components/Layout/RestoCard'
import dynamic from "next/dynamic";
import Recommended from './components/Layout/Recommended'
import RestoranGrid from './components/Layout/RestoranGrid'
import LayoutAuth from '../Layouts/LayoutAuth'

const Dashboard = () => {
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });
  return (
    <>
    <LayoutAuth>
    <HeaderCarousel/>
    <br></br>
    <br></br>
    <br></br>
    <RestoranGrid/>
    <Recommended/>
    </LayoutAuth>
    
    </>
  )
}

export default Dashboard