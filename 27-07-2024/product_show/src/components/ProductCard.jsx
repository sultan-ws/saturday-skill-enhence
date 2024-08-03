import React, { useContext } from 'react';
import { myContext } from './GlobalData';


const ProductCard = ({productData, modalFn}) => {

  const {setCart, cart} = useContext(myContext);

  const handleAddToCart = (data)=>{
   const productIndex = cart.findIndex((product)=> product.id === data.id);
  
   if(productIndex === -1)
    {
    setCart([...cart, {...data, quantity:1}])
   }
   else
   {

    cart[productIndex].quantity = cart[productIndex].quantity + 1;
    setCart(cart);
   }

  };

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
              onClick={()=>{handleAddToCart(productData)}}
               className='
              my-3 bg-red-500 rounded-md p-[5px] w-full text-white
              font-[22px]
              '>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard