import React, { useContext } from 'react'
import Header from './Header'
import { myContext } from './GlobalData'
import ProductCard from './ProductCard';

const Home = () => {
    const {allProducts} = useContext(myContext);

    console.log(allProducts);
  return (
    <>
    <Header/>
    <div className='bg-[whitesmoke] grid grid-cols-[1fr_3fr]'>
        <div className='bg-[olive]'>
            <h2>Filter</h2>
        </div>
        <div className='bg-[ghostwhite] p-[12px]'>
            <div className='grid grid-cols-[repeat(4,1fr)] gap-3'>
                {
                    allProducts.map((product, index)=>(
                        <ProductCard key={index} productData={product} />
                    ))
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default Home