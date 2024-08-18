import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const start = new Date("2024-08-18").getTime()
  const [time, setTime] = useState(start)
  const [run, setRun] = useState(false)
 let pause 
  


   
 useEffect(() => {

  const interval = setInterval(() => {
      if(run){
        runTimer()
      }
  
  }, 1000);

  return () => clearInterval(interval);
}

, [run]);
  

  
 function runTimer(){
   console.log("handling state...")
  
   console.log("State handled")
  }

function onoff() {
  setRun(!run)
}
  
  return (
    <>
      <h1>{hours} : {minutes} : {seconds}</h1>
      <button onClick={onoff}>Start</button>
      <button onClick={onoff}>Stop</button>
    </>
  )
}

export default App
