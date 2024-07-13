import React, { useState } from 'react'
import FaqItm from './components/FaqItm';

const Accordion = () => {
    const [activeAns, setActiveAns] = useState(null);

const faqData = [
    {
        question: 'What is the difference between a React component and a React element?',
        answer: 'React components are functions or classes that accept inputs and return React elements, which describe React components are functions or classes that accept inputs and return React elements, which describe React components are functions or classes that accept inputs and return React elements, which describe'
    },
    {
        question: 'What is the difference between a React component and a React element?',
        answer: 'React components are functions or classes that accept inputs and return React elements, which describe React components are functions or classes that accept inputs and return React elements, which describe React components are functions or classes that accept inputs and return React elements, which describe'
    },
    {
        question: 'What is the difference between a React component and a React element?',
        answer: 'React components are functions or classes that accept inputs and return React elements, which describe React components are functions or classes that accept inputs and return React elements, which describe React components are functions or classes that accept inputs and return React elements, which describe'
    },
    {
        question: 'What is the difference between a React component and a React element?',
        answer: 'React components are functions or classes that accept inputs and return React elements, which describe React components are functions or classes that accept inputs and return React elements, which describe React components are functions or classes that accept inputs and return React elements, which describe'
    },
    {
        question: 'What is the difference between a React component and a React element?',
        answer: 'React components are functions or classes that accept inputs and return React elements, which describe React components are functions or classes that accept inputs and return React elements, which describe React components are functions or classes that accept inputs and return React elements, which describe'
    },{
        question: 'What is the difference between a React component and a React element?',
        answer: 'React components are functions or classes that accept inputs and return React elements, which describe React components are functions or classes that accept inputs and return React elements, which describe React components are functions or classes that accept inputs and return React elements, which describe'
    },
    {
        question: 'What is the difference between a React component and a React element?',
        answer: 'React components are functions or classes that accept inputs and return React elements, which describe React components are functions or classes that accept inputs and return React elements, which describe React components are functions or classes that accept inputs and return React elements, which describe'
    },
    {
        question: 'What is the difference between a React component and a React element?',
        answer: 'React components are functions or classes that accept inputs and return React elements, which describe React components are functions or classes that accept inputs and return React elements, which describe React components are functions or classes that accept inputs and return React elements, which describe'
    },
    {
        question: 'What is the difference between a React component and a React element?',
        answer: 'React components are functions or classes that accept inputs and return React elements, which describe React components are functions or classes that accept inputs and return React elements, which describe React components are functions or classes that accept inputs and return React elements, which describe'
    },
    {
        question: 'What is the difference between a React component and a React element?',
        answer: 'React components are functions or classes that accept inputs and return React elements, which describe React components are functions or classes that accept inputs and return React elements, which describe React components are functions or classes that accept inputs and return React elements, which describe'
    },
    {
        question: 'What is the difference between a React component and a React element?',
        answer: 'React components are functions or classes that accept inputs and return React elements, which describe React components are functions or classes that accept inputs and return React elements, which describe React components are functions or classes that accept inputs and return React elements, which describe'
    }
]

    const handleAccord = (ind)=>{

        if(activeAns === ind)
        {
            setActiveAns(null)
        }
        else
        {
            setActiveAns(ind)
        }
        
    }
  return (
  <>
  <div className='accord'>
    <h1>FAQ</h1>
    <div>

        {
            faqData.map((item, index)=>(
                <FaqItm key={index} handleFunction={()=>{handleAccord(index)}} isActive={activeAns === index} data={item}/>
            ))
        }
    </div>
  </div>
  </>
  )
}

export default Accordion;




//rfc
//rafc
//rfce
//rafce