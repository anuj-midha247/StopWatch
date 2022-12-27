import logo from './logo.svg';
import './App.css';
import Timer from './Components/Timer';
import { useState } from 'react';
import Stopwatch from './Components/Stopwatch';

function App() {
  const [open, setopen] = useState(true)
  return (
    <div className="App">
       <div className="AppBox">
        <div className='option'  onClick={()=>setopen(true)}>Timer</div>
        <div   className='option'  onClick={()=>setopen(false)}>Stopwatch</div>
       </div>
       {open ? <Timer /> : <Stopwatch  />}
    </div>
  );
}

export default App;
