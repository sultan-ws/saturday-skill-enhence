import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import { myContext } from './GlobalData'
import ProductCard from './ProductCard';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

const Home = () => {
    const [open, setOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(0);
    

    const { dataToShow,
        currentPage, 
        setCurrentPage,
        setCat,
        activeCat,
        totalPages,
        categories } = useContext(myContext);

    // const [currentPage, setCurrentPage] = useState(8);

    const onCloseModal = () => setOpen(false);

   
    return (
        <>
            <Modal open={open} onClose={onCloseModal} center>
                <h2 className='' style={{ fontSize: '50px' }}>{currentProduct}</h2>
            </Modal>
            <Header />
            <div className='bg-[whitesmoke] grid grid-cols-[1fr_3fr]'>
                <div className='bg-[olive]'>
                    <h2>Filter</h2>
                    <ul>
                        <li 
                        onClick={()=>{setCat('all')}}
                        className={`${activeCat == 'all' ? 'bg-[white]' : ''}`}>
                            <span>All</span>
                        </li>
                        {
                            categories.map((category)=>(
                                <li key={category.id}
                                onClick={()=>{setCat(category.slug)}}
                                className={`${activeCat == category.slug ? 'bg-[white]' : '' } cursor-pointer`}
                                >

                                    <span>{category.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='bg-[ghostwhite] p-[12px]'>
                    <div className='grid grid-cols-[repeat(4,1fr)] gap-3'>
                        {
                            dataToShow.map((product, index) => (
                                <ProductCard modalFn={() => { setOpen(true); setCurrentProduct(index) }} key={index} productData={product} />
                            ))
                        }
                    </div>
                    <div className='py-[12px]'>
                        <ResponsivePagination
                            current={currentPage}
                            total={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home


// git pull -u origin main