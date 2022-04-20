import React from 'react'
import { Nav } from 'react-bootstrap'
import Navigation from './components/Layout/Navigation'
import RestoCard from './components/Layout/RestoCard'
const Dashboard = () => {
  return (
    <>
    <Navigation/>
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