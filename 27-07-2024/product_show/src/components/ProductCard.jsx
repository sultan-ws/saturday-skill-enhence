import React from 'react';


const ProductCard = ({productData, modalFn}) => {

  return (
    <div className='border rounded bg-[olive]'>
        <div>
            <img 
            className='cursor-pointer' 
            src={productData.thumbnail}
            onClick={modalFn}/>
        </div>
        <div>
            <h3>{productData.title}</h3>
        </div>
    </div>
  )
}

export default ProductCard