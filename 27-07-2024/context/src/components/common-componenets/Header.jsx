import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{
        padding:'30px',
        backgroundColor:'red'
    }}>
        <Link to='/'>Home</Link>
        <Link to='/gallery'>Gallery</Link>
        <Link to='/about'>About us</Link>
        <Link to='/contact'>Contact us</Link>
        <Link to='/login'>Login</Link>
    </div>
  )
}

export default Header