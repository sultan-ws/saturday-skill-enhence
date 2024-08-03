import React, { useContext } from 'react';
import { myContext } from './GlobalData';


const ProductCard = ({productData, modalFn}) => {

  const {setCart, cart} = useContext(myContext);

  return (
    <div className='border rounded bg-[olive]'>
        <div>
            <img 
            className='cursor-pointer' 
            src={productData.thumbnail}
            onClick={modalFn} alt='img'/>
        </div>
        <div>
            <h3 style={{
              textAlign:'center',
              backgroundColor:'skyblue'
              }}>{productData.title}</h3>

              <button
              onClick={()=>{setCart([...cart, productData])}}
               className='
              my-3 bg-red-500 rounded-md p-[5px] w-full text-white
              font-[22px]
              '>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard