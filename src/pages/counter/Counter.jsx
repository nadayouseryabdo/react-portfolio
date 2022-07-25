import Counter from '../../components/counter/counter';
import Inecrement from '../../components/counter/increment';
import Decrement from '../../components/counter/decrement';
import { useState } from 'react';
import image from '../../assets/images/Thanks.jpg'

function Count() {
  const [counter , setCounter]= useState(0)
  const [submit , setSubmit]= useState(false)
  const increaseingFn =()=>{
    setCounter(counter+1)
  }
  const dcreaseingFn =()=>{
    if(counter>0){
      setCounter(counter-1)
    }
  }
  const submittingFn =()=>{
    if(counter>0){
      setSubmit(true)
    } 
  }
  return (
   <>{
    !submit? 
    <div className='mx-auto w-50 mt-5 text-center border border-success p-5 shadow-lg'>
    <h1 >Support Us:</h1>
    <Counter className='my-5' counter={counter}/>
    <p>dollars $</p>
    <Inecrement IncreCount={increaseingFn} />
    <Decrement DcreCount={dcreaseingFn} />
    <button className='btn btn-success d-block mt-5 mx-auto' onClick={submittingFn}>Submit</button>
  </div>:
  <img src={image} className='d-block mx-auto mt-5' alt="" />
   }
   </>
  );
}
export default Count;