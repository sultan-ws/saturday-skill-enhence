import React, { useContext, useEffect, useState } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { myContext } from './GlobalData';

const Header = () => {
  const [totalItem, setTotalItems] = useState(0);
  const {cart} = useContext(myContext);
  
  useEffect(()=>{
    
    console.log(cart);
    cart.forEach((product)=>{
      setTotalItems(totalItem + product.quantity)
    })
  },[cart])

  return (
    <div className='flex justify-between py-4 px-5'>
      <div>LOGO</div>
      <div className='relative'>
        <FaCartPlus className='text-[60px]'/>
        <div className='absolute top-[-10px] right-[-10px]'>{totalItem}</div>
      </div>
    </div>
  )
}

export default Header