import axios from 'axios';
import React, { createContext, useCallback, useEffect, useState } from 'react'

export const myContext = createContext();


const GlobalData = ({ children }) => {

    const [allProducts, setAllProducts] = useState([]);

    const getdata = useCallback(() => {
        axios.get('https://dummyjson.com/products?limit=194')
            .then((response) => {
                // console.log(response.data);

                setAllProducts(response.data.products)
            })
    });

    useEffect(() => { getdata(); }, []);
    return (
        <myContext.Provider value={{allProducts}}>
            {children}
        </myContext.Provider>
    )
}

export default GlobalData