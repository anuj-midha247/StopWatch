import React, { useEffect, useRef, useState } from 'react'
import './timer.css';
const Timer = () => {

 const [Timer,setTimer] = useState(10);
 const [show, setshow] = useState(false)
const [prevt,setPrevt] = useState(0)
const[timerState,setTimeState] = useState(true)
  
const handlechange = (e)=>{
  setTimer(e.target.value)
  setPrevt(e.target.value)
}
let timerId =useRef(null)  

const start =()=>{

 //console.log(timerId )
 if(timerId.current===null){
  let id = setInterval(()=>{
   setTimer((prev)=>
   {
        if(prev>0){
        return prev-1
         }else{
          return prev = 0
       }
      })
  },1000)
  timerId.current =id
 }

 setTimeState(!timerState)
 setshow(true)
}

const stop=()=>{
 clearInterval(timerId.current)
 timerId.current=null
 setTimeState(!timerState)
}

const reset=()=>{
 clearInterval(timerId.current);
 setTimer(prevt)
 timerId.current=null
}
   
useEffect(()=>{
 return reset; 
},[])
//  useEffect(()=>{

//   const id= setInterval(()=>{
//    setTimer((prev)=>
//    {
//     if(prev>0){
//     return prev-1
//     }else{
//      return prev = 0
//     }
//    })
//   },1000)

//   return ()=>{
//    clearInterval(id);
//   }
//  },[Timer])


//  const reset =()=>{
//   console.log("e")
//   secondsToHms(prevt)

//  }

 function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor((d % 3600 % 60));

  var hDisplay = h > 0 ? h + (h == 1 ? " h " : " h ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " m " : " m ") : "";
  var sDisplay = s >= 0 ? s + (s == 1 ? " s" : " s") : "";
  return hDisplay + mDisplay + sDisplay; 
}

  return (
    <div className='smallbox'>
      <h1  className='head'>Timer</h1>
     <div className='output' >

     {show ?<h2 onClick={()=>setshow(false)}>{secondsToHms(Timer)}</h2> :  <h1 ><input className='input' style={{border:"0.5px dot black" ,width:"150px" ,height:"30px"}} type="number" onChange={handlechange} placeholder="Sec"  /></h1>}
     </div>
     
    <div className='buttongroup'>
     { timerState? <button onClick={ start}>Start</button>  :<button onClick={ stop}>Stop</button>}
     <button onClick={reset} >Reset</button>
     </div>  
    </div>
  )
}

export default Timer