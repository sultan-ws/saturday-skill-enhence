import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './comman/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='container'>
        <div className="">
          <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/4296cee2-0a99-4ddd-85f6-337c838a2f6f1720669264173-FLAT-400-Off-on-1st-Purchase-Strip.jpg" className='img-fluid' alt="" />

        </div>
        <div className="border ">
          <img src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/12/58f86eac-8414-4d0b-8e11-5566790e76571720768321669-DESKTOP-HP-BANNER_01--1-.jpg" className='img-fluid w-100 ' alt="" />
        </div>
      </div>
    </>
  )
}

export default App
