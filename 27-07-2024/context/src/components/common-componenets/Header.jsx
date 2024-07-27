import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [data, setData] = useState('hello');
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

        <div>{data}</div>
    </div>
  )
}

export default Header