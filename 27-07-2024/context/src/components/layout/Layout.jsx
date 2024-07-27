import React from 'react'
import Header from '../common-componenets/Header'
import Footer from '../common-componenets/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout