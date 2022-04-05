import React from 'react'
import Layout from '../Layouts/Layout'
import Login from './Login'
import { Routes, Route} from 'react-router-dom'
import Header from './components/Layout/Header'
import HeroSection from './components/Layout/HeroSection'
import AboutUs from './components/Layout/AboutUs'

const index = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <AboutUs/>
    </>
  )
}

export default index