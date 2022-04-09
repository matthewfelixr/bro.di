import React from 'react'
import Layout from '../Layouts/Layout'
import Login from './Login'
import { Routes, Route} from 'react-router-dom'
import Header from './components/Layout/Header'
import HeroSection from './components/Layout/HeroSection'
import AboutUs from './components/Layout/AboutUs'
import Footer from './components/Layout/Footer'

const index = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <AboutUs/>
    <Footer/>
    </>
  )
}

export default index