import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const start = new Date("2024-08-18").getTime()
  const [time, setTime] = useState(start)
  let run=false
  useEffect(() => {
   const interval = setInterval(() => {
      startTimer()
  
   }, 1000);

   return () => clearInterval(interval);
 }, []);
  
  
 function startTimer(){
   setTime(Date.now);
   console.log("handling state...")
      let now =Date.now()
     let  second = now-start
  
     setSeconds(second/1000)
     // setMinutes(minute)
     // setHours(hour)
  
  
   console.log("State handled")
   
  }


  
  return (
    <>
      <h1>{hours} : {minutes} : {seconds}</h1>
      <button onClick={startTimer}>Start</button>
      <button>Stop</button>
    </>
  )
}

export default App
