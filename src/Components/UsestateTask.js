import React,{useState} from 'react'

const UsestateTask = () => {
    const [num,setNum]=useState(20);
function plus(){
    setNum(num+1);
};
function minus(){
    if(num>0){
    setNum(num-1);}
    else{
        return false;
    }
};
  return (
    <div>
     <button onClick={plus}>Increament</button>
     <button onClick={minus}>Decreament</button>
   <p>My age is:{num}</p>    
        
    </div>


  )
}

export default UsestateTask