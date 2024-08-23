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
    //checks if start button has been clicked changing the state of run to 'true
      if(run==true){
        //starts timer and changes the text of the start button to "Pause"
        runTimer()
        setButton("Pause")
      }
      if(run == false){
        // this sets the button state back to Start
       setButton("Start")
      }
  }, 1000);

   return () => clearInterval(interval);
}

, [run ]);

function runTimer(){
  //adds second every time it is called to count up the seconds
  s = s+1
  if(s === 60){
    // once the seconds hit 60 rolls over to a minute and sets seconds to zero to start counting again
   m =  m + 1 
   s = 0 
   if(m === 60){
     //minute process repeats once 60 minutes have been counted rolls over to count up one hour
     h = h + 1
     m = 0
   }

  }
  
  //these set the state to reflect on the timer
  setSeconds(s)
  setMinutes(m)
  setHours(h) 
}

function updateLapList(){
    //these push the current time to pause object
    pause.hours = h 
    pause.minutes = m
    pause.seconds = s
  //this adds whatever the current pause time 
  laps.push(pause)
}

function on() {
  //this toggles the run state to on or off
  setRun(!run)
}

function off(){
  // this sets the run state to false to stop the timer. it also resets the timer state back to 0
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
