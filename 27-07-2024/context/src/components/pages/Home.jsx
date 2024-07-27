import React, { useState } from 'react'
import Test from '../common-componenets/Test';

const Home = () => {
    const [name, setName] = useState('john');
  return (
    <div>Home
        <Test data_name={name}/>
    </div>
  )
}

export default Home