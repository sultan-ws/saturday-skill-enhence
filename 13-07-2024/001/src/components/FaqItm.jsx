import React, { useState } from 'react'

const FaqItm = ({data, isActive, handleFunction}) => {

    // const [isAcive, setActive] = useState(false);

  return (
    <div>
        <div className='faq-quest' onClick={handleFunction}>
            <h3>{data.question}</h3>
        </div>
        <div className={`faq-ans ${isActive ? 'active-ans' : ''}`}>
            <p>{data.answer}</p>
        </div>
    </div>
  )
}

export default FaqItm