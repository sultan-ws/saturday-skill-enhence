import React, { useContext, useState } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { myContext } from './GlobalData';

const Header = () => {
  // const [totalItem, setTotalItems] = useState(10);
  const {cart} = useContext(myContext);
  return (
    <div className='flex justify-between py-4 px-5'>
      <div>LOGO</div>
      <div className='relative'>
        <FaCartPlus className='text-[60px]'/>
        <div className='absolute top-[-10px] right-[-10px]'>{cart.length}</div>
      </div>
    </div>
  )
}

export default Header