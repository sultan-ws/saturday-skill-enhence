import axios from 'axios';
import React, { createContext, useCallback, useEffect, useState } from 'react'

export const myContext = createContext();


const GlobalData = ({ children }) => {

    const [allProducts, setAllProducts] = useState([]);
    const [dataToShow, setDataToShow] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cart, setCart] = useState([]);

    const getdata = useCallback(() => {
        axios.get('https://dummyjson.com/products?limit=194')
            .then((response) => {
                // console.log(response.data);

                setAllProducts(response.data.products)
            })
    });

   
    useEffect(() => { getdata(); }, []);

    useEffect(()=>{

        const start = (currentPage -1 ) * 12;
        const data = allProducts.slice(start, start + 12);
        setDataToShow(data);
    },[allProducts, currentPage]);



    return (
        <myContext.Provider value={{setCart, cart, dataToShow, currentPage, setCurrentPage}}>
            {children}
        </myContext.Provider>
    )
}

export default GlobalData