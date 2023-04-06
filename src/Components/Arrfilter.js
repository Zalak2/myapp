import React from 'react'

const Arrfilter = () => {
    const arr=[1,2,3,4,5,6];
  return (
    <>
    <div>Array filter example</div>
    return <h2>arrays are:{arr}</h2>
    const newarr={arr.filter((num) =>
     {
        if(num===3)
        {
          return false;
        }
        else{
            return true;
        }
    })};

    </>
  )
}

export default Arrfilter