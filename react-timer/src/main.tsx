import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <h1 className="center">Project Summary: React Stopwatch with Lap Feature</h1>
          
    <div id="page">
      <div id="timers">
        <h1 className="center">
          Two Timers
        </h1>
        <h3 className="center"> These two timers are able to run and keep track
          of laps asycnronously! 
        </h3>

        <div className="timer">
        <App  />
        </div>
        
        <div className="timer">
        <App  />
        </div>
      </div>

      <div id="write-up" >
          <h2>Learning Targets:</h2>
          <ul>
              <li>React State: useState and useEffect</li>
              <li>React Components: Managing multiple instances independently</li>
              <li>React Style Inheritance</li>
              <li>React Scope</li>
              <li>TypeScript Variables and Syntax</li>
              <li>useState with Arrays</li>
          </ul>
          <h2>Project Overview:</h2>
          <p>
              As I was getting started with React, I found understanding state management a bit tricky. To tackle this, I decided to build a stopwatch app that updates every second. This project helped me see firsthand how React's state and effects work together in real-time.
          </p>
          <h2>Features:</h2>
          <ul>
              <li><strong>Real-time Stopwatch:</strong> The app features a stopwatch that updates every second, which was a great way to get a grip on using <code>useState</code> and <code>useEffect</code>.</li>
              <li><strong>Lap Functionality:</strong> To dig deeper into state management, I added a lap feature. This lets users capture and display the stopwatch's time at different points, showing how to handle and preserve state effectively.</li>
          </ul>
          <h2>Skills Gained:</h2>
          <ul>
              <li><strong>React State Management:</strong> I got hands-on experience with <code>useState</code> and <code>useEffect</code>, learning how to manage and update state.</li>
              <li><strong>Component Design:</strong> I learned how to create multiple instances of components that work independently without affecting each other.</li>
              <li><strong>React Styling:</strong> I explored how styling works in React and how to apply and manage styles across components.</li>
              <li><strong>React Scope:</strong> Improved my understanding of how state and props are handled within and between components.</li>
              <li><strong>TypeScript Basics:</strong> I got comfortable with TypeScript variables and syntax, and how to manage arrays with <code>useState</code>.</li>
          </ul>
          <h2>Conclusion:</h2>
          <p>
              Building this stopwatch app was a great learning experience. It helped me understand the core concepts of React, from state management to styling. Plus, I learned a lot about how HTML and CSS fit into React components, which was a bonus.
          </p>

      </div>
   </div>

  </StrictMode>,
)
