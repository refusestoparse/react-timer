import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [run, setRun] = useState(false)
  const [laps,setLaps] = useState<any[]>([])
  const [button, setButton] = useState("Start")
  let s = seconds
  let m = minutes
  let h = hours
  let pause = {  key:Date.now(), hours:hours, minutes:minutes, seconds:seconds }
  

   
 useEffect(() => {

  const interval = setInterval(() => {
      if(run==true){
        runTimer()
        setButton("Pause")
      }
      if(run == false){
       setButton("Start")
      }
  }, 1000);

   return () => clearInterval(interval);
}

, [run ]);

function runTimer(){
  s = s+1
  if(s === 60){
   m =  m + 1 
   s = 0 
   if(m === 60){
     h = h + 1
     m = 0
   }

  }

  setSeconds(s)
  setMinutes(m)
  setHours(h)

  
  pause.hours = h
  pause.minutes = m
  pause.seconds = s
  
}

function updateLapList(){
  laps.push(pause)
  drawLapList()
}

function drawLapList(){
  console.log("laps drawn")
  console.log(laps)
}

function on() {
  setRun(!run)
}

function off(){
  console.log("Stopping timer ...")
  setRun(false)
  setSeconds(0)
  setMinutes(0)
  setHours(0)
  setLaps([])
}


  
  return (
    <>
     <div className="moduleBox">
        <h1 id="time">{hours} : {minutes} : {seconds}</h1>
        <div id="buttons">
                <button onClick={on}>{button}</button>
                <button onClick={updateLapList}>Lap</button>
                <button onClick={off}>Clear</button> 
        </div>
          <div >
            <ul id="list">
               {laps.map((l) => <li key={l.key}>{l.hours}:{l.minutes}:{l.seconds}</li>)}
             </ul>
          </div>
     </div>
       
     
    </>
  )
}

export default App
