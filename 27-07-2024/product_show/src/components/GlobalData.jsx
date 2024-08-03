import axios from 'axios';
import React, { createContext, useCallback, useEffect, useState } from 'react'

export const myContext = createContext();


const GlobalData = ({ children }) => {

    const [allProducts, setAllProducts] = useState([]);
    const [dataToShow, setDataToShow] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cart, setCart] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCat, setCat] = useState('all');
    const [totalPages, setPages] = useState(1);
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);

    //eg. data according price
    // const newArr = [...dataToShow]
    //const newData = newArr.filter((prodt)=> prodt <= userMaxPrice)
    //setDataToShow(newdData)

    const getdata = useCallback(() => {
        let url = 'https://dummyjson.com/products?limit=194';
        if(activeCat !== 'all') url = `https://dummyjson.com/products/category/${activeCat}`
        axios.get(url)
            .then((response) => {
                // console.log(response.data);
                let res = response.data.products

                setAllProducts(res);
                setPages(Math.ceil(res.length / 12));

                let minprice = Infinity;

                res.forEach((pro)=>{
                    if(pro.price < minprice){
                        minprice = pro.price
                    }
                })

                setMinPrice(minprice);

                let maxprice = -Infinity;
                res.forEach((pro)=>{
                    if(pro.price > maxprice){
                        maxprice = pro.price
                    }
                })

                setMaxPrice(maxprice);
            })
    });


    useEffect(() => { getdata(); }, [activeCat]);

    useEffect(() => {

        const start = (currentPage - 1) * 12;
        const data = allProducts.slice(start, start + 12);
        setDataToShow(data);
    }, [allProducts, currentPage]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then((cats)=>{
                setCategories(cats);
            });
    }, []);

    // useEffect(() => {
    //     setPages(Math.ceil(dataToShow.length / 12));
    // }, [dataToShow]);

    return (
        <myContext.Provider value={{minPrice, maxPrice,totalPages, setCat, activeCat, categories, setCart, cart, dataToShow, currentPage, setCurrentPage }}>
            {children}
        </myContext.Provider>
    )
}

export default GlobalData