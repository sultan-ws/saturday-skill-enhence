import React, { useContext, useEffect, useState } from 'react'
import { FaCartPlus, FaCross } from 'react-icons/fa'
import { myContext } from './GlobalData';
import { FaX } from 'react-icons/fa6';

const Header = () => {
  const [totalItem, setTotalItems] = useState(null);
  const [ifCartActive, setCartActive] = useState(false);
  const {cart} = useContext(myContext);
  
  useEffect(()=>{
      let newTotal = 0
      cart.forEach((product)=>{
      newTotal += product.quantity;
    })
    setTotalItems(newTotal);
  },[cart])

  return (
    <>
    <div className='flex justify-between py-4 px-5'>
      <div>LOGO</div>
      <div className='relative'>
        <FaCartPlus 
        className='text-[60px]'
        onClick={()=>{setCartActive(true)}}
        />
        <div className='absolute top-[-10px] right-[-10px]'>{totalItem}</div>
      </div>
    </div>
    <div 
    style={{right:(ifCartActive) ? '0%' : '-100%'}}
    className='w-[70vw] duration-700 fixed top-0 h-[100vh] bg-[rgba(0,0,0,0.6)] border border-red-600'
    >
    <div className='bg-white absolute p-4 font-[30px] right-0 cursor-pointer'
    onClick={()=>{setCartActive(false)}}
    >
    <FaX/>
    </div>
    </div>
    </>
  )
}

export default Header