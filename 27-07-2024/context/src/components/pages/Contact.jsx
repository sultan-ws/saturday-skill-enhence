import React, { useContext } from 'react'
import { myContext } from '../context/GlobalData'

const Contact = () => {

  const data = useContext(myContext);
  return (
    <div>Contact
      <input type='text' value={data.userName}
      onChange={(e) => data.setUsername(e.target.value)}/>
    </div>
  )
}

export default Contact