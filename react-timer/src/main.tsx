import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1 className="center">
      Two Timers
    </h1>
    <h3 className="center"> These two timers are able to run and keep track
      of laps asycnronously! 
    </h3>

  <div className="timers">
  <div id="one">
    <App  />
    </div>
    
    <div id="two">
    <App  />
    </div>
  </div>


  </StrictMode>,
)
