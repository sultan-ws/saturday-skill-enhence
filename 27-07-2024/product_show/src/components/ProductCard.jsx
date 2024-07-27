import React from 'react'

const ProductCard = ({productData}) => {

    console.log(productData);
  return (
    <div className='border rounded bg-[olive]'>
        <div>
            <img src={productData.thumbnail}/>
        </div>
        <div>
            <h3>{productData.title}</h3>
        </div>
    </div>
  )
}

export default ProductCard