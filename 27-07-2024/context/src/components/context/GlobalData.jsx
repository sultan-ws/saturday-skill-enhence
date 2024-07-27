import React, { createContext, useState } from 'react'

export const myContext = createContext();

const GlobalData = ({children}) => {
    const abc = 'hello';
    const [userName, setUsername] = useState('user');

  return (
    <myContext.Provider value={{abc, userName, setUsername}}>
        {children}
    </myContext.Provider>
  )
}

export default GlobalData;