import React from 'react'

const arraymap = () => {
  const arr=[1,2,3,4,5];


  return (
    <>
    <div>Using array map function</div>
    {arr.map((value,key)=>{
        return <h2>array are: {value}</h2>
    })}
    </>
  )
}

export default arraymap