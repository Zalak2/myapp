import React from 'react'
import {useState} from 'react'

import img1 from "./images/img1.jfif";
import img2 from "./images/img2.jfif";
import img3 from "./images/img3.jfif";
import img4 from "./images/img4.jfif";




const UseStImgTask = () => {
    const [imgg,setImg]=useState(img1);
    function plus(){
        setImg(img2);
    };
  return (
     <div>
     <h2>UseState Img Task</h2>
     <img src={imgg}/>
     <button onClick={plus}>change img</button>
    </div>
  )
}

export default UseStImgTask