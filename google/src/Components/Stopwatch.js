import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const Stopwatch = () => {
const [count, setcount] = useState(0)
 const[timerState,setTimeState] = useState(true)
let timerId =useRef(null)  

 const start =()=>{

  //console.log(timerId )
  if(timerId.current===null){
   let id = setInterval(()=>{
    setcount((prev)=>prev+1)
   },10)
   timerId.current =id
  }

  setTimeState(!timerState)
  
 }

 const stop=()=>{
  clearInterval(timerId.current)
  timerId.current=null
  setTimeState(!timerState)
 }

 const reset=()=>{
  clearInterval(timerId.current);
  setcount(0)
  timerId.current=null
 }
    
 useEffect(()=>{
  return reset; 
 },[])
 function msToTime(duration) {
  var milliseconds = parseInt((duration % 100) / 1),
    seconds = Math.floor((duration / 100) % 60),
    minutes = Math.floor((duration / (100 * 60)) % 60),
    hours = Math.floor((duration / (100 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  milliseconds =(milliseconds < 10) ? "0" + milliseconds : milliseconds;
  return <>
  { hours>0 ? hours + "h" : "" + minutes>0? minutes + "m" : "" + seconds + "s " + milliseconds+ "ms"}
  </>
}

  return (
    <div className='smallbox'>
   <h1 className='head'>Stopwatch</h1>
     <div className='output'>
      <h1>

      { msToTime(count)}
      </h1>
      </div>
     <div className='buttongroup'>
    { timerState? <button onClick={ start}>Start</button>  :<button onClick={ stop}>Stop</button>}
     <button onClick={ reset}> Reset</button>
     </div>

    </div>
  )
}

export default Stopwatch