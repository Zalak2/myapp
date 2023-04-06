import React from 'react'
import img1 from "./images/img1.jfif";
import img2 from "./images/img2.jfif";
import img3 from "./images/img3.jfif";
import img4 from "./images/img4.jfif";

const Taskimage = () => {
    const images=[
        {
        id:1,
        pic:img1
        },
        {
            id:2,
            pic:img2
        },
        {
            id:3,
            pic:img3
        },
        {
            id:4,
            pic:img4
        }
    ]
  return (
    <div>
    <h2>Task Image</h2>
    <div class="grid-container">
    {images.map((val) => 
    {
       return  <img src={val.pic} height="200px" width="200px" alt="logo"/>
    })
}
</div>
    </div>
  )
}

export default Taskimage

