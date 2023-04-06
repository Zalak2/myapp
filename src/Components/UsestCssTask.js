import React from 'react'
import {useState} from 'react'

const UsestCss = () => {
    const [color1,setColor]=useState('red');
    function plus(){
        setColor('blue');
    };
  return (
    <div>
    <h2>Usestate Css</h2>
    
    <p style={{color:color1}}>This is example </p>
    <button onClick={plus}>change color</button>
    </div>
  )
}

export default UsestCss