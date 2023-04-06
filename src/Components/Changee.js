import React from 'react'
import {useState} from 'react'


const Changee = () => {
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    function Example(event){
        //console.log(event.target.value);
        setFirstname(event.target.value);
    }
    function Example1(event){
        //console.log(event.target.value);
        setLastname(event.target.value);
    }
  return (
    <div><h1>onchange event</h1>
   <input type="firstname" name={firstname} onChange={Example}/>
   <input type="lastname" name={lastname} onChange={Example1}/>
   <p>{firstname}{lastname}</p>
    </div>
  )
}

export default Changee