import React, { useContext, useState } from 'react'
import Header from './Header'
import { myContext } from './GlobalData'
import ProductCard from './ProductCard';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Home = () => {
    const [open, setOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(0);
    const {allProducts} = useContext(myContext);

    const onCloseModal = () => setOpen(false);
  return (
    <>
    <Modal open={open} onClose={onCloseModal} center>
        <h2 className='' style={{fontSize:'50px'}}>{currentProduct}</h2>
      </Modal>
    <Header/>
    <div className='bg-[whitesmoke] grid grid-cols-[1fr_3fr]'>
        <div className='bg-[olive]'>
            <h2>Filter</h2>
        </div>
        <div className='bg-[ghostwhite] p-[12px]'>
            <div className='grid grid-cols-[repeat(4,1fr)] gap-3'>
                {
                    allProducts.map((product, index)=>(
                        <ProductCard modalFn={()=>{setOpen(true); setCurrentProduct(index)}} key={index} productData={product} />
                    ))
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default Home