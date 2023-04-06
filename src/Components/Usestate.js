import React from 'react'
import {useState} from 'react';

const Usestate = () => {
const [num,setNum]=useState(20);
function update(){
    setNum(num+1);
};
  return (
    <>
    <h2>Usestate</h2>
   <button onClick={update}>Increament</button>
   <p>My age is:{num}</p>
    </>
    
  )
}

export default Usestate