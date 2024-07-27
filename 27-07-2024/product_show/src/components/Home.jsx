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
    const [totalPages, setPages] = useState(1);

    const { dataToShow, currentPage, setCurrentPage } = useContext(myContext);

    // const [currentPage, setCurrentPage] = useState(8);

    const onCloseModal = () => setOpen(false);

    useEffect(()=>{
        setPages(Math.ceil(194/12));
    },[]);
    return (
        <>
            <Modal open={open} onClose={onCloseModal} center>
                <h2 className='' style={{ fontSize: '50px' }}>{currentProduct}</h2>
            </Modal>
            <Header />
            <div className='bg-[whitesmoke] grid grid-cols-[1fr_3fr]'>
                <div className='bg-[olive]'>
                    <h2>Filter</h2>
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